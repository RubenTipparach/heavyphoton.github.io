"""Model a sports car in Blender, step by step, and render a timelapse of it.

    blender -b --factory-startup -P build_car.py -- OUT [--only-step N] [--frames-per-step 8]

Every step is a real modelling operation on the scene (a loop cut, moving
vertices, a modifier, a new part), applied in the order a modeller would do
it. After each step the camera keeps orbiting and a few frames are rendered,
so the frames show the car being built. A HUD (step, operation, mesh stats)
is drawn onto each frame afterwards by hud.py.

Writes OUT/frames/####.png and OUT/frames.json (per frame: step, name, op,
stats). --only-step N renders just the last frame of step N, for checking.
"""
import json
import math
import os
import sys

import bmesh
import bpy
from mathutils import Matrix, Vector
from mathutils.bvhtree import BVHTree

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
OUT = argv[0]
ONLY = int(argv[argv.index("--only-step") + 1]) if "--only-step" in argv else None
FPS_STEP = int(argv[argv.index("--frames-per-step") + 1]) if "--frames-per-step" in argv else 8
NO_RENDER = "--no-render" in argv
RES = (1280, 720)

# ---------------------------------------------------------------------------
# The car's numbers (metres): a two door fastback coupe.
L, WD = 4.4, 1.80               # body length, base width
XF, XR, WR = 1.32, -1.30, 0.34  # front and rear axle x, wheel radius
TRACK = 0.795                   # wheel centre |y|


def clamp(t, a=0.0, b=1.0):
    return max(a, min(b, t))


def smooth(e0, e1, x):
    t = clamp((x - e0) / (e1 - e0))
    return t * t * (3 - 2 * t)


def bump(x, x0, w):
    return math.exp(-((x - x0) / w) ** 2)


def table(pts, x):
    """Smooth interpolation through (x, value) points, x descending or not."""
    pts = sorted(pts)
    if x <= pts[0][0]:
        return pts[0][1]
    if x >= pts[-1][0]:
        return pts[-1][1]
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        if x0 <= x <= x1:
            t = (x - x0) / (x1 - x0)
            t = t * t * (3 - 2 * t)
            return y0 + (y1 - y0) * t


BELT = [(2.2, 0.60), (1.9, 0.67), (1.32, 0.73), (0.7, 0.80), (0.0, 0.84), (-1.0, 0.88),
        (-1.6, 0.92), (-2.0, 0.90), (-2.2, 0.84)]
CENTRE = [(2.2, 0.62), (1.9, 0.70), (1.32, 0.77), (0.62, 0.85), (0.0, 1.19), (-0.15, 1.24),
          (-0.6, 1.25), (-0.9, 1.21), (-1.3, 1.10), (-1.75, 0.96), (-2.0, 0.93), (-2.2, 0.86)]


def z_bottom_final(x):
    return 0.15 + 0.14 * smooth(1.7, 2.2, x) + 0.17 * smooth(-1.65, -2.2, x)


def humps(x):
    return 0.08 * bump(x, XF, 0.5) + 0.07 * bump(x, XR, 0.55)


def cabin(x):
    return smooth(0.72, 0.52, x) * smooth(-1.95, -1.70, x)


def shape(a, b, c, W):
    """Where the box vertex (a along, b across, c up, each 0..1) sits, given
    the feature weights W (each 0 = still a box, 1 = done)."""
    s = 2 * b - 1
    prop = W["prop"]
    length = 2 + (L - 2) * prop
    x = (a - 0.5) * length
    if a >= 1.0:
        x -= W["round"] * (0.30 * s * s + 0.16 * c ** 1.5)
    if a <= 0.0:
        x += W["round"] * (0.16 * s * s + 0.05 * c)
    width = (2 + (WD - 2) * prop) * (1 - W["nose"] * 0.14 * smooth(1.55, 2.25, x)
                                     - W["tail"] * 0.07 * smooth(-1.6, -2.25, x)
                                     + W["flare"] * 0.03 * (bump(x, XF, 0.5) + bump(x, XR, 0.55)))
    zb = 0.20 * prop + W["clear"] * (z_bottom_final(x) - 0.20)
    ztop = 2 + (1.15 - 2) * prop
    belt = table(BELT, x)
    z_edge_flat = ztop + W["hood"] * (belt - 1.15)
    z_edge = z_edge_flat + W["humps"] * humps(x)
    z_centre = z_edge_flat + W["cabin"] * (table(CENTRE, x) - belt)

    def bulge(cc):
        return 1 - W["side"] * (0.07 * (1 - smooth(0.0, 0.45, cc)) + 0.03 * smooth(0.75, 1.0, cc))

    if c >= 1.0 and abs(s) < 0.999:
        g = cabin(x)
        y = s * width / 2 * bulge(1.0) * (1 - 0.06 * W["tumble"] * g)
        p = 2 + 7 * W["cabin"] * g
        z = z_edge + (z_centre - z_edge) * (1 - abs(s) ** p)
    else:
        y = s * width / 2 * bulge(c)
        z = zb + (z_edge - zb) * c
    return (x, y, z)


# ---------------------------------------------------------------------------
# Scene helpers

def mat(name, base=(0.6, 0.6, 0.6), rough=0.5, metal=0.0, coat=0.0, emit=None, strength=0.0, spec=0.5):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*base, 1)
    p.inputs["Roughness"].default_value = rough
    p.inputs["Metallic"].default_value = metal
    p.inputs["Coat Weight"].default_value = coat
    p.inputs["Coat Roughness"].default_value = 0.03
    p.inputs["Specular IOR Level"].default_value = spec
    if emit:
        p.inputs["Emission Color"].default_value = (*emit, 1)
        p.inputs["Emission Strength"].default_value = strength
    return m


def link(ob):
    bpy.context.scene.collection.objects.link(ob)
    return ob


def mesh_from_bm(name, bm):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    return me


def look_at(ob, target, roll=0.0):
    d = (Vector(target) - ob.location).normalized()
    ob.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()


# ---------------------------------------------------------------------------
# The body: a box with loop cuts, its vertices moved by shape().

def box_mesh(nx, ny, nz):
    bm = bmesh.new()
    vid = {}
    params = []

    def v(i, j, k):
        key = (i, j, k)
        if key not in vid:
            vid[key] = bm.verts.new((0, 0, 0))
            params.append((i / nx, j / ny, k / nz))
        return vid[key]

    faces = []

    def quad(p, kind):
        f = bm.faces.new([v(*q) for q in p])
        a = sum(q[0] for q in p) / 4 / nx
        b = sum(q[1] for q in p) / 4 / ny
        c = sum(q[2] for q in p) / 4 / nz
        faces.append((a, b, c, kind))
        return f

    for i in range(nx):
        for j in range(ny):
            quad([(i, j, 0), (i, j + 1, 0), (i + 1, j + 1, 0), (i + 1, j, 0)], "bottom")
            quad([(i, j, nz), (i + 1, j, nz), (i + 1, j + 1, nz), (i, j + 1, nz)], "top")
    for i in range(nx):
        for k in range(nz):
            quad([(i, 0, k), (i + 1, 0, k), (i + 1, 0, k + 1), (i, 0, k + 1)], "side")
            quad([(i, ny, k), (i, ny, k + 1), (i + 1, ny, k + 1), (i + 1, ny, k)], "side")
    for j in range(ny):
        for k in range(nz):
            quad([(0, j, k), (0, j, k + 1), (0, j + 1, k + 1), (0, j + 1, k)], "end")
            quad([(nx, j, k), (nx, j + 1, k), (nx, j + 1, k + 1), (nx, j, k + 1)], "end")
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return mesh_from_bm("body", bm), params, faces


class Body:
    def __init__(self, clay):
        self.W = dict(prop=0, clear=0, hood=0, cabin=0, tumble=0, nose=0, tail=0, flare=0, side=0,
                      round=0, humps=0)
        self.clay = clay
        self.ob = link(bpy.data.objects.new("Body", bpy.data.meshes.new("tmp")))
        self.cage = link(bpy.data.objects.new("Cage", bpy.data.meshes.new("tmp")))
        w = self.cage.modifiers.new("wire", "WIREFRAME")
        w.thickness = 0.011
        w.use_even_offset = True
        w.use_replace = True
        self.wire_mat = mat("wire", base=(0.005, 0.005, 0.006), rough=1.0)
        self.slots = [clay, clay, clay]
        self.topology(1, 1, 1)

    def topology(self, nx, ny, nz):
        old = self.ob.data
        me, self.params, self.faces = box_mesh(nx, ny, nz)
        self.ob.data = me
        for m in self.slots:
            me.materials.append(m)
        bpy.data.meshes.remove(old)
        self.update()

    def update(self):
        me = self.ob.data
        co = []
        for a, b, c in self.params:
            co.extend(shape(a, b, c, self.W))
        me.vertices.foreach_set("co", co)
        me.update()
        old = self.cage.data
        cm = me.copy()
        cm.materials.clear()
        for _ in range(3):
            cm.materials.append(self.wire_mat)
        self.cage.data = cm
        if old.users == 0:
            bpy.data.meshes.remove(old)

    def set_slots(self, mats):
        self.slots = list(mats)
        me = self.ob.data
        for k, m in enumerate(mats):
            me.materials[k] = m

    def mark_windows(self):
        """Faces of the greenhouse get material slot 1 (glass)."""
        me = self.ob.data
        for poly, (a, b, c, kind) in zip(me.polygons, self.faces):
            s = abs(2 * b - 1)
            x = (a - 0.5) * L
            glass = False
            if kind == "top" and c >= 0.999:
                if s > 0.75 and -1.40 < x < 0.30:
                    glass = True           # side windows
                if s < 0.7 and 0.05 < x < 0.55:
                    glass = True           # windshield
                if s < 0.7 and -1.65 < x < -0.85:
                    glass = True           # fastback glass
            poly.material_index = 1 if glass else 0
        me.update()


# ---------------------------------------------------------------------------
# Wheels: parts built once at the origin (axle along +Y, outer face +Y), four
# copies of each part as objects sharing the mesh.

def revolve(name, profile, segs=48):
    """Spin a closed (r, t) profile about the Y axis."""
    bm = bmesh.new()
    rings = []
    for k in range(segs):
        ph = 2 * math.pi * k / segs
        rings.append([bm.verts.new((r * math.cos(ph), t, r * math.sin(ph))) for r, t in profile])
    n = len(profile)
    for k in range(segs):
        a, b = rings[k], rings[(k + 1) % segs]
        for i in range(n):
            j = (i + 1) % n
            bm.faces.new((a[i], a[j], b[j], b[i]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    me = mesh_from_bm(name, bm)
    for p in me.polygons:
        p.use_smooth = True
    return me


def rounded_rect(r0, r1, t0, t1, rad, n=4):
    pts = []
    corners = [((r1 - rad, t1 - rad), 0), ((r0 + rad, t1 - rad), 90), ((r0 + rad, t0 + rad), 180),
               ((r1 - rad, t0 + rad), 270)]
    for (cr, ct), a0 in corners:
        for k in range(n + 1):
            a = math.radians(a0 + 90 * k / n)
            pts.append((cr + rad * math.cos(a), ct + rad * math.sin(a)))
    return pts


def box(name, size, at=(0, 0, 0)):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * size[0] + at[0], v.co.y * size[1] + at[1], v.co.z * size[2] + at[2]))
    return mesh_from_bm(name, bm)


def spoke_mesh(name, angles):
    bm = bmesh.new()
    for ang in angles:
        R = Matrix.Rotation(math.radians(ang), 4, "Y")
        # a tapered spoke from the hub out to the rim, dished toward the face
        pts = [(0.05, 0.045, 0.092), (0.232, 0.026, 0.075)]
        vs = []
        for (r, hw, t) in pts:
            for (dy, dz) in ((-1, -1), (1, -1), (1, 1), (-1, 1)):
                vs.append(bm.verts.new(R @ Vector((r, t + dy * 0.014, dz * hw))))
        for i in range(4):
            j = (i + 1) % 4
            bm.faces.new((vs[i], vs[j], vs[4 + j], vs[4 + i]))
        bm.faces.new(vs[0:4][::-1])
        bm.faces.new(vs[4:8])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return mesh_from_bm(name, bm)


def lug_mesh(name):
    bm = bmesh.new()
    for k in range(5):
        ph = 2 * math.pi * k / 5 + 0.3
        R = Matrix.Translation((0.042 * math.cos(ph), 0.105, 0.042 * math.sin(ph))) @ Matrix.Rotation(math.pi / 2, 4, "X")
        bmesh.ops.create_cone(bm, cap_ends=True, segments=6, radius1=0.011, radius2=0.011, depth=0.025, matrix=R)
    return mesh_from_bm(name, bm)


def cyl_y(name, r, t0, t1, segs=32, hole=0.0):
    if hole > 0:
        return revolve(name, [(hole, t0), (r, t0), (r, t1), (hole, t1)], segs)
    bm = bmesh.new()
    R = Matrix.Translation((0, (t0 + t1) / 2, 0)) @ Matrix.Rotation(math.pi / 2, 4, "X")
    bmesh.ops.create_cone(bm, cap_ends=True, segments=segs, radius1=r, radius2=r, depth=t1 - t0, matrix=R)
    return mesh_from_bm(name, bm)


WHEEL_PARTS = ["tire", "rim", "rimback", "spoke1", "spokes", "hub", "disc", "caliper"]


def build_wheels(clay):
    meshes = {
        "tire": revolve("tire", rounded_rect(0.248, 0.34, -0.125, 0.125, 0.045)),
        "rim": revolve("rim", [(0.226, -0.10), (0.248, -0.10), (0.248, 0.098), (0.262, 0.112),
                               (0.250, 0.118), (0.226, 0.105)]),
        "spoke1": spoke_mesh("spoke1", [0]),
        "spokes": spoke_mesh("spokes", [72, 144, 216, 288]),
        "hub": cyl_y("hub", 0.065, 0.06, 0.105, 24),
        "rimback": cyl_y("rimback", 0.228, -0.075, -0.06, 40),
        "disc": cyl_y("disc", 0.19, -0.035, -0.008, 40, hole=0.07),
        "caliper": box("caliper", (0.07, 0.03, 0.05), at=(0.0, -0.012, 0.0)),
    }
    lug = lug_mesh("lugs")
    caliper_rot = Matrix.Rotation(math.radians(-35), 4, "Y") @ Matrix.Translation((0.165, 0, 0))
    meshes["caliper"].transform(caliper_rot)
    wheels = {}
    for name, x, side in (("FL", XF, 1), ("FR", XF, -1), ("RL", XR, 1), ("RR", XR, -1)):
        e = link(bpy.data.objects.new("wheel_" + name, None))
        e.location = (x, side * TRACK, WR)
        e.rotation_euler = (0, 0, 0 if side > 0 else math.pi)
        parts = {}
        for p, me in meshes.items():
            ob = link(bpy.data.objects.new("%s_%s" % (p, name), me))
            ob.parent = e
            if not me.materials:
                me.materials.append(clay)
            parts[p] = ob
        lo = link(bpy.data.objects.new("lugs_" + name, lug))
        lo.parent = e
        if not lug.materials:
            lug.materials.append(clay)
        parts["lugs"] = lo
        wheels[name] = parts
    return wheels, meshes, lug


# ---------------------------------------------------------------------------
# Details placed on the finished body by casting rays at it.

class Surface:
    def __init__(self, ob):
        dg = bpy.context.evaluated_depsgraph_get()
        self.bvh = BVHTree.FromObject(ob, dg)

    def hit(self, origin, direction):
        loc, nor, _, _ = self.bvh.ray_cast(Vector(origin), Vector(direction).normalized())
        return loc, nor


def oriented(name, me, loc, normal, up=(0, 0, 1), embed=0.0):
    ob = link(bpy.data.objects.new(name, me))
    z = Vector(normal).normalized()
    x = Vector(up).cross(z)
    if x.length < 1e-4:
        x = Vector((1, 0, 0))
    x.normalize()
    y = z.cross(x)
    m = Matrix((x, y, z)).transposed().to_4x4()
    m.translation = Vector(loc) - z * embed
    ob.matrix_world = m
    return ob


def ellipsoid(name, sx, sy, sz):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=24, v_segments=12, radius=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * sx, v.co.y * sy, v.co.z * sz))
    me = mesh_from_bm(name, bm)
    for p in me.polygons:
        p.use_smooth = True
    return me


def build_details(body, clay):
    surf = Surface(body.ob)
    out = {}

    # Headlights: lenses set into the nose corners, facing along the surface.
    lights = []
    for side in (1, -1):
        loc, nor = surf.hit((3.0, side * 0.58, 0.64), (-1, 0, 0))
        if loc is None:
            continue
        ob = oriented("headlight_%d" % side, ellipsoid("headlight", 0.21, 0.075, 0.06), loc, nor, embed=0.035)
        ob.rotation_euler.rotate_axis("Z", 0)
        lights.append(ob)
    out["headlights"] = lights

    # Grille: a dark intake low in the nose, with bars.
    loc, nor = surf.hit((3.0, 0.0, 0.40), (-1, 0, 0))
    g = []
    if loc is not None:
        g.append(oriented("grille", box("grille", (0.62, 0.15, 0.03)), loc, nor, embed=0.02))
        for k in range(3):
            bar = oriented("grille_bar%d" % k, box("bar", (0.60, 0.012, 0.02)), loc + Vector((0, 0, -0.05 + 0.05 * k)),
                           nor, embed=0.008)
            g.append(bar)
    out["grille"] = g

    # Taillights: thin bars across the tail.
    tl = []
    for side in (1, -1):
        loc, nor = surf.hit((-3.0, side * 0.52, 0.80), (1, 0, 0))
        if loc is None:
            continue
        tl.append(oriented("taillight_%d" % side, box("taillight", (0.44, 0.055, 0.03)), loc, nor, embed=0.015))
    loc, nor = surf.hit((-3.0, 0.0, 0.80), (1, 0, 0))
    if loc is not None:
        tl.append(oriented("taillight_bar", box("lightbar", (0.56, 0.018, 0.02)), loc, nor, embed=0.005))
    out["taillights"] = tl

    # Mirrors on the doors, just behind the A pillar.
    mr = []
    for side in (1, -1):
        loc, nor = surf.hit((0.40, side * 2.0, 0.74), (0, -side, 0))
        if loc is None:
            continue
        nh = Vector((nor.x, nor.y, 0)).normalized()
        st = oriented("mirror_stalk_%d" % side, box("stalk", (0.04, 0.025, 0.12)), loc + nh * 0.05 + Vector((0, 0, 0.04)), nh)
        hs = oriented("mirror_%d" % side, ellipsoid("mirror", 0.10, 0.06, 0.075), loc + nh * 0.14 + Vector((0, 0, 0.08)), nh)
        mr += [st, hs]
    out["mirrors"] = mr

    # Ducktail wing on two posts over the deck.
    sp = []
    loc, nor = surf.hit((-2.0, 0.0, 3.0), (0, 0, -1))
    if loc is not None:
        wing = link(bpy.data.objects.new("wing", box("wing", (0.30, 1.45, 0.025))))
        wing.location = loc + Vector((0, 0, 0.17))
        wing.rotation_euler = (0, math.radians(-6), 0)
        sp.append(wing)
        for side in (1, -1):
            post = link(bpy.data.objects.new("post_%d" % side, box("post", (0.07, 0.018, 0.17))))
            post.location = loc + Vector((0, side * 0.45, 0.08))
            sp.append(post)
    out["spoiler"] = sp

    # Twin exhaust tips under the tail.
    ex = []
    for side in (1, -1):
        loc, nor = surf.hit((-3.0, side * 0.42, 0.29), (1, 0, 0))
        if loc is None:
            continue
        me = cyl_y("exhaust", 0.045, -0.12, 0.05, 20, hole=0.035)
        ob = link(bpy.data.objects.new("exhaust_%d" % side, me))
        ob.location = loc
        ob.rotation_euler = (0, 0, math.pi / 2)
        ex.append(ob)
    out["exhaust"] = ex
    for group in out.values():
        for ob in group:
            if not ob.data.materials:
                ob.data.materials.append(clay)
            ob.hide_render = True
    return out


# ---------------------------------------------------------------------------
# Stage: viewport look (grid floor, grey) and the studio look.

def grid_floor():
    bm = bmesh.new()
    bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=150)
    ob = link(bpy.data.objects.new("floor", mesh_from_bm("floor", bm)))
    m = bpy.data.materials.new("grid")
    m.use_nodes = True
    nt = m.node_tree
    p = nt.nodes["Principled BSDF"]
    p.inputs["Roughness"].default_value = 1.0
    tc = nt.nodes.new("ShaderNodeTexCoord")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(tc.outputs["Object"], sep.inputs[0])

    def line(sock, width):
        a = nt.nodes.new("ShaderNodeMath"); a.operation = "ADD"; a.inputs[1].default_value = 0.5
        nt.links.new(sock, a.inputs[0])
        f = nt.nodes.new("ShaderNodeMath"); f.operation = "FRACT"
        nt.links.new(a.outputs[0], f.inputs[0])
        s = nt.nodes.new("ShaderNodeMath"); s.operation = "SUBTRACT"; s.inputs[1].default_value = 0.5
        nt.links.new(f.outputs[0], s.inputs[0])
        ab = nt.nodes.new("ShaderNodeMath"); ab.operation = "ABSOLUTE"
        nt.links.new(s.outputs[0], ab.inputs[0])
        lt = nt.nodes.new("ShaderNodeMath"); lt.operation = "LESS_THAN"; lt.inputs[1].default_value = width
        nt.links.new(ab.outputs[0], lt.inputs[0])
        return lt.outputs[0]

    def axis(sock, width):
        ab = nt.nodes.new("ShaderNodeMath"); ab.operation = "ABSOLUTE"
        nt.links.new(sock, ab.inputs[0])
        lt = nt.nodes.new("ShaderNodeMath"); lt.operation = "LESS_THAN"; lt.inputs[1].default_value = width
        nt.links.new(ab.outputs[0], lt.inputs[0])
        return lt.outputs[0]

    gx, gy = line(sep.outputs["X"], 0.008), line(sep.outputs["Y"], 0.008)
    mx = nt.nodes.new("ShaderNodeMath"); mx.operation = "MAXIMUM"
    nt.links.new(gx, mx.inputs[0]); nt.links.new(gy, mx.inputs[1])
    mix = nt.nodes.new("ShaderNodeMix"); mix.data_type = "RGBA"
    mix.inputs["A"].default_value = (0.045, 0.045, 0.045, 1)
    mix.inputs["B"].default_value = (0.085, 0.085, 0.085, 1)
    nt.links.new(mx.outputs[0], mix.inputs["Factor"])
    red = nt.nodes.new("ShaderNodeMix"); red.data_type = "RGBA"
    red.inputs["B"].default_value = (0.55, 0.06, 0.08, 1)
    nt.links.new(mix.outputs["Result"], red.inputs["A"])
    nt.links.new(axis(sep.outputs["Y"], 0.012), red.inputs["Factor"])
    green = nt.nodes.new("ShaderNodeMix"); green.data_type = "RGBA"
    green.inputs["B"].default_value = (0.22, 0.45, 0.06, 1)
    nt.links.new(red.outputs["Result"], green.inputs["A"])
    nt.links.new(axis(sep.outputs["X"], 0.012), green.inputs["Factor"])
    nt.links.new(green.outputs["Result"], p.inputs["Base Color"])
    ob.data.materials.append(m)
    studio = mat("studio_floor", base=(0.012, 0.012, 0.014), rough=0.22, spec=0.6)
    return ob, m, studio


def area(name, loc, target, size, energy, color=(1, 1, 1)):
    ld = bpy.data.lights.new(name, "AREA")
    ld.shape = "RECTANGLE"
    ld.size, ld.size_y = size
    ld.energy = energy
    ld.color = color
    ob = link(bpy.data.objects.new(name, ld))
    ob.location = loc
    look_at(ob, target)
    return ob


def world_colour(c, strength=1.0):
    w = bpy.context.scene.world
    bg = w.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (*c, 1)
    bg.inputs["Strength"].default_value = strength


# ---------------------------------------------------------------------------
# Camera: a state per step, Catmull-Rom between them.

def cam_state(theta, R=8.8, h=2.5, target=(0.0, 0.0, 0.55)):
    return [target[0], target[1], target[2], R, h, theta]


def catmull(p0, p1, p2, p3, t):
    t2, t3 = t * t, t * t * t
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3)


def place_camera(cam, st):
    tx, ty, tz, R, h, th = st
    a = math.radians(th)
    cam.location = (tx + R * math.cos(a), ty + R * math.sin(a), tz + h)
    look_at(cam, (tx, ty, tz))


# ---------------------------------------------------------------------------

def main():
    os.makedirs(os.path.join(OUT, "frames"), exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.device = "CPU"
    sc.cycles.samples = 6
    sc.cycles.use_denoising = True
    sc.cycles.max_bounces = 4
    sc.cycles.glossy_bounces = 3
    sc.cycles.transparent_max_bounces = 4
    sc.render.resolution_x, sc.render.resolution_y = RES
    sc.render.film_transparent = False
    sc.view_settings.view_transform = "Standard"
    sc.render.use_persistent_data = True
    if sc.world is None:
        sc.world = bpy.data.worlds.new("World")
    sc.world.use_nodes = True
    world_colour((0.04, 0.04, 0.042))

    clay = mat("clay", base=(0.55, 0.55, 0.56), rough=0.55)
    clay_dark = mat("clay_glass", base=(0.12, 0.12, 0.13), rough=0.35)
    floor, grid_mat, studio_floor = grid_floor()
    key = area("key", (3.5, 4.5, 6.5), (0, 0, 0.5), (5, 5), 1300)
    fill = area("fill", (-4.5, -5, 3.5), (0, 0, 0.5), (6, 6), 450)

    cam = link(bpy.data.objects.new("cam", bpy.data.cameras.new("cam")))
    cam.data.lens = 40
    sc.camera = cam

    body = Body(clay)
    cutters = None
    wheels = None
    details = None
    paint = mat("paint", base=(0.55, 0.012, 0.015), rough=0.32, coat=1.0)
    glass = mat("glass", base=(0.006, 0.007, 0.008), rough=0.03, spec=1.0)
    trim = mat("trim", base=(0.015, 0.015, 0.016), rough=0.5)
    chrome = mat("chrome", base=(0.85, 0.85, 0.87), rough=0.12, metal=1.0)
    rubber = mat("rubber", base=(0.018, 0.018, 0.018), rough=0.85)
    disc_m = mat("disc", base=(0.4, 0.4, 0.42), rough=0.35, metal=0.9)
    caliper_m = mat("caliper", base=(0.9, 0.55, 0.02), rough=0.4)
    head_m = mat("headlamp", base=(0.9, 0.92, 1.0), rough=0.05, emit=(0.9, 0.95, 1.0), strength=6.0)
    tail_m = mat("taillamp", base=(0.5, 0.0, 0.0), rough=0.1, emit=(1.0, 0.02, 0.02), strength=5.0)
    state = dict(cage=True, wheel_parts=set(), wheel_sets=set(), details=set())

    def W(**kw):
        def f():
            body.W.update(kw)
            body.update()
        return f

    def topo(nx, ny, nz):
        return lambda: body.topology(nx, ny, nz)

    def subsurf(level):
        def f():
            m = body.ob.modifiers.get("subsurf") or body.ob.modifiers.new("subsurf", "SUBSURF")
            m.levels = level
            m.render_levels = level
            # keep the boolean (if any) after it
            if body.ob.modifiers.get("arches"):
                bpy.context.view_layer.objects.active = body.ob
                with bpy.context.temp_override(object=body.ob):
                    bpy.ops.object.modifier_move_to_index(modifier="subsurf", index=0)
        return f

    def add_cutters():
        nonlocal cutters
        bm = bmesh.new()
        for x in (XF, XR):
            for side in (1, -1):
                y0, y1 = 0.62 * side, 1.4 * side
                R = Matrix.Translation((x, (y0 + y1) / 2, WR)) @ Matrix.Rotation(math.pi / 2, 4, "X")
                bmesh.ops.create_cone(bm, cap_ends=True, segments=32, radius1=0.40, radius2=0.40,
                                      depth=abs(y1 - y0), matrix=R)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        cutters = link(bpy.data.objects.new("arch_cutters", mesh_from_bm("cutters", bm)))
        w = cutters.modifiers.new("wire", "WIREFRAME")
        w.thickness = 0.012
        cutters.data.materials.append(mat("cutter_wire", base=(1.0, 0.45, 0.05), emit=(1.0, 0.45, 0.05), strength=1.5))

    def boolean():
        # The Boolean takes the cutter as evaluated, so its wire display has
        # to go first, or it subtracts thin wire tubes instead of cylinders.
        cutters.modifiers.remove(cutters.modifiers["wire"])
        b = body.ob.modifiers.new("arches", "BOOLEAN")
        b.operation = "DIFFERENCE"
        b.solver = "EXACT"
        b.object = cutters
        cutters.hide_render = True

    def mark_windows():
        body.set_slots([clay, clay_dark, clay])
        body.mark_windows()

    def show_cage(on):
        def f():
            state["cage"] = on
        return f

    def wheel_part(*parts, sets=("FL",)):
        def f():
            nonlocal wheels
            if wheels is None:
                wheels, _, _ = build_wheels(clay)
                for w in wheels.values():
                    for ob in w.values():
                        ob.hide_render = True
            state["wheel_parts"].update(parts)
            state["wheel_sets"].update(sets)
        return f

    def detail(group):
        def f():
            nonlocal details
            if details is None:
                details = build_details(body, clay)
            state["details"].add(group)
        return f

    def materials(which):
        def f():
            if which == "paint":
                state["cage"] = False
                body.set_slots([paint, clay_dark, trim])
            elif which == "glass":
                body.set_slots([paint, glass, trim])
                for ob in details["grille"]:
                    ob.data.materials[0] = trim
                for ob in details["mirrors"]:
                    ob.data.materials[0] = paint
                for ob in details["spoiler"]:
                    ob.data.materials[0] = trim
                for ob in details["exhaust"]:
                    ob.data.materials[0] = chrome
            elif which == "wheels":
                w = wheels["FL"]
                w["tire"].data.materials[0] = rubber
                for p in ("rim", "spoke1", "spokes", "hub", "lugs"):
                    w[p].data.materials[0] = chrome
                w["disc"].data.materials[0] = disc_m
                w["rimback"].data.materials[0] = trim
                w["caliper"].data.materials[0] = caliper_m
            elif which == "lights":
                for ob in details["headlights"]:
                    ob.data.materials[0] = head_m
                for ob in details["taillights"]:
                    ob.data.materials[0] = tail_m
        return f

    def studio():
        sc.view_settings.view_transform = "AgX"
        sc.view_settings.look = "AgX - Punchy"
        world_colour((0.02, 0.02, 0.023))
        floor.data.materials[0] = studio_floor
        key.data.energy = 700
        key.data.size, key.data.size_y = 7, 3.5
        key.location = (0.0, 0.0, 7.0)
        look_at(key, (0, 0, 0))
        fill.data.energy = 900
        area("rim_l", (-1.0, 6.0, 2.0), (0, 0, 0.6), (8, 1.2), 600, (0.9, 0.95, 1.0))
        area("rim_r", (1.0, -6.0, 2.0), (0, 0, 0.6), (8, 1.2), 600, (1.0, 0.95, 0.9))
        sc.cycles.samples = 12

    wide = cam_state
    WHEEL_T = (XF, TRACK, WR)
    # (name, op, action, camera state at the end of the step)
    th = 28.0
    steps = []

    def S(name, op, action, cam=None, step_theta=4.5):
        nonlocal th
        th += step_theta
        steps.append((name, op, action, cam or wide(th)))

    S("Add a cube", "Shift+A  Mesh > Cube", lambda: None)
    S("Scale to the car's proportions", "S X 2.2, S Y 0.9, S Z 0.48", W(prop=0.5))
    S("Scale to the car's proportions", "S Y, S Z (tweak)", W(prop=1.0))
    S("Loop cuts along the length", "Ctrl+R  x8", topo(8, 1, 1))
    S("More loop cuts along the length", "Ctrl+R  x16", topo(16, 1, 1))
    S("Loop cuts across the width", "Ctrl+R  x8", topo(16, 8, 1))
    S("Loop cuts up the sides", "Ctrl+R  x4", topo(16, 8, 4))
    S("Subdivision Surface", "Ctrl+1  (Subdivision Surface, level 1)", subsurf(1))
    S("Ground clearance and overhangs", "G Z  (proportional editing)", W(clear=1.0))
    S("Drop the hood and the deck", "G Z  (proportional editing)", W(hood=0.5))
    S("Drop the hood and the deck", "G Z  (tweak)", W(hood=1.0))
    S("Pull up the greenhouse", "G Z  on the roof loops", W(cabin=0.5))
    S("Rake the windshield and the fastback", "G X, G Z  on the pillars", W(cabin=1.0))
    S("Tumblehome", "S Y  on the roof loops", W(tumble=1.0))
    S("Taper the nose", "S Y  (proportional editing)", W(nose=1.0))
    S("Taper the tail", "S Y  (proportional editing)", W(tail=1.0))
    S("Round off the nose and the tail", "G X  on the end loops", W(round=1.0))
    S("Fender humps over the wheels", "G Z  (proportional editing)", W(humps=1.0))
    S("Flare the wheel arches", "S Y  (proportional editing)", W(flare=1.0))
    S("Tuck in the rocker", "S Y  on the bottom loops", W(side=1.0))
    S("Subdivision level 2", "Ctrl+2", subsurf(2))
    S("Wheel arch cutters", "Shift+A  Cylinder x4", add_cutters)
    S("Cut the arches", "Boolean modifier  (Difference)", boolean)
    S("Mark the window faces", "Select faces, assign material slot", mark_windows)
    wheel_cam = [cam_state(48, 2.8, 0.7, WHEEL_T), cam_state(56, 2.7, 0.65, WHEEL_T),
                 cam_state(64, 2.6, 0.6, WHEEL_T), cam_state(70, 2.6, 0.6, WHEEL_T),
                 cam_state(76, 2.6, 0.6, WHEEL_T), cam_state(82, 2.6, 0.6, WHEEL_T),
                 cam_state(88, 2.7, 0.6, WHEEL_T)]
    S("Tire: spin the profile", "Spin  (48 steps)", lambda: (show_cage(False)(), wheel_part("tire")()), wheel_cam[0])
    S("Rim barrel", "Spin  (rim profile)", wheel_part("rim", "rimback"), wheel_cam[1])
    S("One spoke", "Extrude, scale", wheel_part("spoke1"), wheel_cam[2])
    S("Five spokes", "Array modifier  (radial, x5)", wheel_part("spokes"), wheel_cam[3])
    S("Hub and lug nuts", "Shift+A  Cylinder, Array x5", wheel_part("hub", "lugs"), wheel_cam[4])
    S("Brake disc", "Shift+A  Cylinder, Inset", wheel_part("disc"), wheel_cam[5])
    S("Brake caliper", "Shift+A  Cube, scale", wheel_part("caliper"), wheel_cam[6])
    S("Mirror the wheel across", "Mirror modifier  (Y)", lambda: (show_cage(True)(), wheel_part(sets=("FR",))()), wide(40))
    S("Copy to the rear axle", "Shift+D, G X", wheel_part(sets=("RL", "RR")), wide(30))
    S("Headlights", "Shift+A  UV Sphere, snap to surface", detail("headlights"), cam_state(22, 6.2, 1.4, (1.4, 0, 0.5)))
    S("Grille", "Shift+A  Cube, Array x3", detail("grille"), cam_state(8, 6.0, 1.0, (1.4, 0, 0.45)))
    S("Side mirrors", "Shift+A  UV Sphere, snap to surface", detail("mirrors"), cam_state(80, 6.5, 1.8, (0.3, 0, 0.7)))
    S("Taillights", "Shift+A  Cube, snap to surface", detail("taillights"), cam_state(158, 6.4, 1.4, (-1.3, 0, 0.6)))
    S("Ducktail wing", "Shift+A  Cube, extrude posts", detail("spoiler"), cam_state(150, 6.8, 2.2, (-1.2, 0, 0.7)))
    S("Twin exhaust", "Shift+A  Cylinder, Inset", detail("exhaust"), cam_state(172, 5.6, 0.6, (-1.5, 0, 0.35)))
    S("Material: car paint", "Principled BSDF, clearcoat", materials("paint"), wide(200))
    S("Materials: glass and trim", "Assign slots", materials("glass"), wide(222))
    S("Materials: chrome, rubber, brakes", "Assign slots", materials("wheels"), wide(244))
    S("Materials: lamps", "Emission", materials("lights"), wide(266))
    S("Studio lighting", "Area lights, AgX, Cycles", studio, wide(290, 7.4, 1.6))

    def apply_visibility():
        body.cage.hide_render = not state["cage"]
        if wheels:
            for wname, parts in wheels.items():
                for p, ob in parts.items():
                    ob.hide_render = not (wname in state["wheel_sets"] and p in state["wheel_parts"])
        if details:
            for g, obs in details.items():
                for ob in obs:
                    ob.hide_render = g not in state["details"]

    def stats():
        dg = bpy.context.evaluated_depsgraph_get()
        tris = 0
        for ob in sc.objects:
            if ob.type != "MESH" or ob.hide_render or ob.name in ("floor", "Cage"):
                continue
            ev = ob.evaluated_get(dg)
            me = ev.to_mesh()
            me.calc_loop_triangles()
            tris += len(me.loop_triangles)
            ev.to_mesh_clear()
        cm = body.ob.data
        return dict(verts=len(cm.vertices), faces=len(cm.polygons), tris=tris)

    states = [s[3] for s in steps]
    frames = []
    n = 0
    for k, (name, op, action, cst) in enumerate(steps):
        action()
        apply_visibility()
        st = stats()
        if NO_RENDER or (ONLY is not None and k + 1 != ONLY):
            continue
        p0 = states[max(0, k - 2)]
        p1 = states[max(0, k - 1)]
        p2 = states[k]
        p3 = states[min(len(states) - 1, k + 1)]
        rng = range(FPS_STEP) if ONLY is None else [FPS_STEP - 1]
        for f in rng:
            t = (f + 1) / FPS_STEP
            cs = [catmull(a, b, c, d, t) for a, b, c, d in zip(p0, p1, p2, p3)]
            place_camera(cam, cs)
            n += 1
            sc.render.filepath = os.path.join(OUT, "frames", "%04d.png" % n)
            bpy.ops.render.render(write_still=True)
            frames.append(dict(step=k + 1, steps=len(steps), name=name, op=op, **st))
            print("FRAME %d step %d %s" % (n, k + 1, name), flush=True)
    if ONLY is None and not NO_RENDER:
        # Final turntable.
        last = states[-1]
        for f in range(120):
            cs = list(last)
            cs[5] = last[5] + 360.0 * (f + 1) / 120
            place_camera(cam, cs)
            n += 1
            sc.render.filepath = os.path.join(OUT, "frames", "%04d.png" % n)
            bpy.ops.render.render(write_still=True)
            frames.append(dict(step=len(steps), steps=len(steps), name="Final render", op="F12", final=True, **st))
            print("FRAME %d turntable" % n, flush=True)
    json.dump(frames, open(os.path.join(OUT, "frames.json"), "w"), indent=0)
    if ONLY is None:
        # Save the finished car: modifiers live, the timelapse's cage overlay removed.
        bpy.data.objects.remove(body.cage)
        cutters.display_type = "WIRE"
        place_camera(cam, cam_state(290, 7.4, 1.6))
        sc.cycles.samples = 256
        sc.render.resolution_x, sc.render.resolution_y = 1920, 1080
        sc.render.use_persistent_data = False
        bpy.ops.wm.save_as_mainfile(filepath=os.path.join(os.path.abspath(OUT), "sports_coupe.blend"), compress=True)
        print("SAVED", flush=True)
    print("DONE %d frames" % n, flush=True)


main()
