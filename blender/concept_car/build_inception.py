"""Model a concept car (after Peugeot's Inception) the proper way, step by
step, render a timelapse of it, and save the .blend with every modifier live.

    blender -b --factory-startup -P build_inception.py -- OUT [--only-step N] [--frames-per-step 6] [--no-render]

The body is half a box cage with a Mirror modifier, Subdivision Surface and a
Solidify shell; wheel arches, the cockpit opening, the door and hood seams and
the light recesses are cut by Boolean modifiers from separate cutter objects,
which carry their own Mirror / Array / Solidify / Bevel modifiers. The glass
canopy covers a real interior. Wheels are Screw modifier profiles with a
radial Array, placed as collection instances.

Writes OUT/frames/####.png, OUT/frames.json and OUT/inception_concept.blend.
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
FPS_STEP = int(argv[argv.index("--frames-per-step") + 1]) if "--frames-per-step" in argv else 6
NO_RENDER = "--no-render" in argv
RES = (1280, 720)

L, HW = 5.0, 0.98                  # length, base half width
XF, XR, WR = 1.55, -1.50, 0.38     # axles, wheel radius
TRACK = 0.86                       # wheel centre |y|


def clamp(t, a=0.0, b=1.0):
    return max(a, min(b, t))


def smooth(e0, e1, x):
    t = clamp((x - e0) / (e1 - e0))
    return t * t * (3 - 2 * t)


def bump(x, x0, w):
    return math.exp(-((x - x0) / w) ** 2)


def table(pts, x):
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


BELT = [(2.5, 0.58), (2.2, 0.66), (1.55, 0.74), (1.0, 0.79), (0.0, 0.80), (-1.0, 0.83),
        (-1.5, 0.87), (-2.0, 0.88), (-2.3, 0.84), (-2.5, 0.76)]
DECK = [(2.5, 0.60), (2.2, 0.67), (1.55, 0.72), (1.0, 0.78), (0.0, 0.80), (-1.0, 0.82),
        (-1.9, 0.86), (-2.3, 0.84), (-2.5, 0.78)]
ROOF = [(1.06, 0.80), (0.7, 0.97), (0.3, 1.15), (-0.2, 1.27), (-0.7, 1.28), (-1.2, 1.19),
        (-1.6, 1.05), (-1.95, 0.90)]
FINAL = dict(prop=1, clear=1, deck=1, nose=1, tail=1, round=1, fhump=1, rhump=1, flare=1,
             side=1, shoulder=1)


def width_at(x, W):
    prop = W["prop"]
    return (2 + (2 * HW - 2) * prop) * (1 - W["nose"] * 0.16 * smooth(1.9, 2.55, x)
                                        - W["tail"] * 0.10 * smooth(-1.9, -2.55, x)
                                        + W["flare"] * 0.035 * (bump(x, XF, 0.5) + bump(x, XR, 0.55)))


def bulge(c, W):
    return 1 - W["side"] * 0.08 * (1 - smooth(0.0, 0.45, c)) - W["shoulder"] * 0.05 * smooth(0.8, 1.0, c)


def edge_z(x, W):
    prop = W["prop"]
    ztop = 2 + (1.15 - 2) * prop
    return (ztop + W["deck"] * (table(BELT, x) - 1.15) + W["fhump"] * 0.05 * bump(x, XF, 0.5)
            + W["rhump"] * 0.07 * bump(x, XR, 0.55))


def centre_z(x, W):
    prop = W["prop"]
    ztop = 2 + (1.15 - 2) * prop
    return ztop + W["deck"] * (table(DECK, x) - 1.15)


def top_z(x, s, W):
    ze, zc = edge_z(x, W), centre_z(x, W)
    return ze + (zc - ze) * (1 - s ** 2)


def shape(a, b, c, W):
    s = 2 * b - 1                               # 0 on the mirror plane, 1 at the side
    length = 2 + (L - 2) * W["prop"]
    x = (a - 0.5) * length
    if a >= 1.0:
        x -= W["round"] * (0.32 * s * s + 0.12 * c ** 1.5)
    if a <= 0.0:
        x += W["round"] * (0.22 * s * s + 0.06 * c)
    w = width_at(x, W)
    zb = 0.20 * W["prop"] + W["clear"] * (0.16 + 0.12 * smooth(2.0, 2.5, x) + 0.14 * smooth(-1.95, -2.5, x) - 0.20)
    if c >= 1.0 and s < 0.999:
        return (x, s * w / 2 * bulge(1.0, W), top_z(x, s, W))
    return (x, s * w / 2 * bulge(c, W), zb + (edge_z(x, W) - zb) * c)


def half_width_final(x):
    return width_at(x, FINAL) / 2 * bulge(1.0, FINAL)


# ---------------------------------------------------------------------------

def mat(name, base=(0.6, 0.6, 0.6), rough=0.5, metal=0.0, coat=0.0, emit=None, strength=0.0,
        trans=0.0, ior=1.45, film=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*base, 1)
    p.inputs["Roughness"].default_value = rough
    p.inputs["Metallic"].default_value = metal
    p.inputs["Coat Weight"].default_value = coat
    p.inputs["Coat Roughness"].default_value = 0.04
    p.inputs["Transmission Weight"].default_value = trans
    p.inputs["IOR"].default_value = ior
    if film:
        p.inputs["Thin Film Thickness"].default_value = film
        p.inputs["Thin Film IOR"].default_value = 1.6
    if emit:
        p.inputs["Emission Color"].default_value = (*emit, 1)
        p.inputs["Emission Strength"].default_value = strength
    return m


def link(ob, coll=None):
    (coll or bpy.context.scene.collection).objects.link(ob)
    return ob


def new_ob(name, me, coll=None):
    return link(bpy.data.objects.new(name, me), coll)


def mesh_from_bm(name, bm, smooth_shade=False):
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    if smooth_shade:
        for p in me.polygons:
            p.use_smooth = True
    return me


def look_at(ob, target):
    d = (Vector(target) - ob.location).normalized()
    ob.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()


def add_box(bm, centre, size, rot=None):
    m = Matrix.Translation(centre)
    if rot is not None:
        m = m @ rot
    m = m @ Matrix.Diagonal((*size, 1.0))
    bmesh.ops.create_cube(bm, size=1.0, matrix=m)


def mirror_mod(ob, name="Mirror"):
    m = ob.modifiers.new(name, "MIRROR")
    m.use_axis = (False, True, False)
    m.use_clip = True
    m.use_mirror_merge = True
    return m


def bevel_mod(ob, width, segs=3):
    b = ob.modifiers.new("Bevel", "BEVEL")
    b.width = width
    b.segments = segs
    b.limit_method = "ANGLE"
    b.harden_normals = False
    return b


def wire_display(ob, colour=(1.0, 0.45, 0.05), thick=0.01):
    w = ob.modifiers.new("Wireframe (display)", "WIREFRAME")
    w.thickness = thick
    m = mat("wire_" + ob.name, base=colour, emit=colour, strength=1.5)
    ob.data.materials.clear()
    ob.data.materials.append(m)
    return w


# ---------------------------------------------------------------------------
# The body: half a box cage, Mirror, Subdivision, Solidify, Booleans.

def half_box(nx, ny, nz):
    bm = bmesh.new()
    vid, params, faces = {}, [], []
    j0 = ny // 2

    def v(i, j, k):
        if (i, j, k) not in vid:
            vid[(i, j, k)] = bm.verts.new((0, 0, 0))
            params.append((i / nx, j / ny, k / nz))
        return vid[(i, j, k)]

    def quad(p, kind):
        bm.faces.new([v(*q) for q in p])
        faces.append((sum(q[0] for q in p) / 4 / nx, sum(q[1] for q in p) / 4 / ny,
                      sum(q[2] for q in p) / 4 / nz, kind))

    for i in range(nx):
        for j in range(j0, ny):
            quad([(i, j, 0), (i, j + 1, 0), (i + 1, j + 1, 0), (i + 1, j, 0)], "bottom")
            quad([(i, j, nz), (i + 1, j, nz), (i + 1, j + 1, nz), (i, j + 1, nz)], "top")
        for k in range(nz):
            quad([(i, ny, k), (i, ny, k + 1), (i + 1, ny, k + 1), (i + 1, ny, k)], "side")
    for j in range(j0, ny):
        for k in range(nz):
            quad([(0, j, k), (0, j, k + 1), (0, j + 1, k + 1), (0, j + 1, k)], "rear")
            quad([(nx, j, k), (nx, j + 1, k), (nx, j + 1, k + 1), (nx, j, k + 1)], "front")
    bm.faces.ensure_lookup_table()
    bm.normal_update()
    # Outward: the top faces must face up.
    tops = [f for f, info in zip(bm.faces, faces) if info[3] == "top"]
    if sum(f.normal.z for f in tops) < 0:
        bmesh.ops.reverse_faces(bm, faces=bm.faces)
    return mesh_from_bm("Body", bm, smooth_shade=True), params, faces


class Body:
    def __init__(self, clay):
        self.W = dict(prop=0, clear=0, deck=0, nose=0, tail=0, round=0, fhump=0, rhump=0, flare=0,
                      side=0, shoulder=0)
        self.ob = new_ob("Body", bpy.data.meshes.new("tmp"))
        self.cage = new_ob("Cage", bpy.data.meshes.new("tmp"))
        w = self.cage.modifiers.new("wire", "WIREFRAME")
        w.thickness = 0.011
        w.use_even_offset = True
        self.wire_mat = mat("cage_wire", base=(0.004, 0.004, 0.005), rough=1.0)
        self.slots = [clay] * 6
        self.topology(1, 2, 1)

    def topology(self, nx, ny, nz):
        old = self.ob.data
        me, self.params, self.faces = half_box(nx, ny, nz)
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
        for _ in range(6):
            cm.materials.append(self.wire_mat)
        self.cage.data = cm
        if old.users == 0:
            bpy.data.meshes.remove(old)

    def set_slots(self, mats):
        self.slots = list(mats)
        for k, m in enumerate(mats):
            self.ob.data.materials[k] = m

    def mark_regions(self):
        """0 paint, 1 satin black cladding, 2 gloss black fascia."""
        for poly, (a, b, c, kind) in zip(self.ob.data.polygons, self.faces):
            idx = 0
            if kind == "bottom" or (kind in ("side", "front", "rear") and c < 0.25):
                idx = 1
            elif kind == "front" and c < 0.8:
                idx = 2
            elif kind == "rear" and c < 0.75:
                idx = 2
            poly.material_index = idx


# ---------------------------------------------------------------------------
# Cutters (built in world coordinates, origin at the world origin, so their
# own Mirror modifiers mirror across the car's centre line).

def cyl_mesh(name, r, centre, axis="Y", depth=1.0, segs=40):
    bm = bmesh.new()
    rot = {"Y": Matrix.Rotation(math.pi / 2, 4, "X"), "X": Matrix.Rotation(math.pi / 2, 4, "Y"),
           "Z": Matrix.Identity(4)}[axis]
    bmesh.ops.create_cone(bm, cap_ends=True, segments=segs, radius1=r, radius2=r, depth=depth,
                          matrix=Matrix.Translation(centre) @ rot)
    return mesh_from_bm(name, bm)


def cockpit_cutter_mesh():
    """A prism over the cabin footprint: it opens the deck for the cockpit."""
    x0, x1, n = 1.00, -1.90, 28
    side = []
    for k in range(n + 1):
        x = x0 + (x1 - x0) * k / n
        u = k / n
        end = math.sqrt(max(0.0, 1 - (2 * u - 1) ** 8))
        side.append((x, max(0.02, (half_width_final(x) - 0.13) * end)))
    loop = side + [(x, -y) for x, y in reversed(side)]
    bm = bmesh.new()
    lo = [bm.verts.new((x, y, 0.45)) for x, y in loop]
    hi = [bm.verts.new((x, y, 1.6)) for x, y in loop]
    m = len(loop)
    for i in range(m):
        j = (i + 1) % m
        bm.faces.new((lo[i], lo[j], hi[j], hi[i]))
    bm.faces.new(lo[::-1])
    bm.faces.new(hi)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return mesh_from_bm("cockpit_cutter", bm)


def outline(pts, rad, n=4):
    """A closed rounded polygon through 2D corner points."""
    out = []
    m = len(pts)
    for i in range(m):
        p0, p1, p2 = Vector(pts[i - 1]), Vector(pts[i]), Vector(pts[(i + 1) % m])
        d0, d1 = (p0 - p1).normalized(), (p2 - p1).normalized()
        a, b = p1 + d0 * rad, p1 + d1 * rad
        for k in range(n + 1):
            t = k / n
            out.append(tuple((a * (1 - t) ** 2 + p1 * 2 * t * (1 - t) + b * t * t)))
    return out


def seam_cutter_mesh():
    """Ribbons along the door and hood shut lines; Solidify makes them 6 mm."""
    bm = bmesh.new()
    door = outline([(1.00, 0.30), (0.95, 0.75), (-0.55, 0.78), (-0.50, 0.30)], 0.07)
    vs = [(bm.verts.new((x, 0.70, z)), bm.verts.new((x, 1.30, z))) for x, z in door]
    for i in range(len(vs)):
        a, b = vs[i], vs[(i + 1) % len(vs)]
        bm.faces.new((a[0], b[0], b[1], a[1]))
    hood = [(1.05, 0.0), (1.05, 0.55), (1.15, 0.64), (2.18, 0.58), (2.32, 0.40), (2.36, 0.0)]
    hv = [(bm.verts.new((x, y, 0.45)), bm.verts.new((x, y, 1.05))) for x, y in hood]
    for a, b in zip(hv, hv[1:]):
        bm.faces.new((a[0], b[0], b[1], a[1]))
    return mesh_from_bm("seam_cutter", bm)


# ---------------------------------------------------------------------------
# Wheel parts at the front left hub, origin at the hub.

def profile_mesh(name, pts):
    bm = bmesh.new()
    vs = [bm.verts.new((r, t, 0)) for r, t in pts]
    for i in range(len(vs)):
        bm.edges.new((vs[i], vs[(i + 1) % len(vs)]))
    return mesh_from_bm(name, bm)


def rounded_rect(r0, r1, t0, t1, rad, n=4):
    pts = []
    for (cr, ct), a0 in (((r1 - rad, t1 - rad), 0), ((r0 + rad, t1 - rad), 90),
                         ((r0 + rad, t0 + rad), 180), ((r1 - rad, t0 + rad), 270)):
        for k in range(n + 1):
            a = math.radians(a0 + 90 * k / n)
            pts.append((cr + rad * math.cos(a), ct + rad * math.sin(a)))
    return pts


def screw_mod(ob, steps=72):
    s = ob.modifiers.new("Screw", "SCREW")
    s.axis = "Y"
    s.angle = 2 * math.pi
    s.steps = steps
    s.render_steps = steps
    s.screw_offset = 0
    s.use_merge_vertices = True
    s.use_smooth_shade = True
    s.use_normal_calculate = True
    return s


# ---------------------------------------------------------------------------
# Stage

def grid_floor():
    bm = bmesh.new()
    bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=150)
    ob = new_ob("Floor", mesh_from_bm("Floor", bm))
    m = bpy.data.materials.new("viewport_grid")
    m.use_nodes = True
    nt = m.node_tree
    p = nt.nodes["Principled BSDF"]
    p.inputs["Roughness"].default_value = 1.0
    tc = nt.nodes.new("ShaderNodeTexCoord")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(tc.outputs["Object"], sep.inputs[0])

    def node(op, a=None, b=None):
        n = nt.nodes.new("ShaderNodeMath")
        n.operation = op
        for i, x in enumerate((a, b)):
            if x is None:
                continue
            if isinstance(x, (int, float)):
                n.inputs[i].default_value = x
            else:
                nt.links.new(x, n.inputs[i])
        return n.outputs[0]

    def line(s, w):
        return node("LESS_THAN", node("ABSOLUTE", node("SUBTRACT", node("FRACT", node("ADD", s, 0.5)), 0.5)), w)

    def mix(a, bcol, fac):
        n = nt.nodes.new("ShaderNodeMix")
        n.data_type = "RGBA"
        if isinstance(a, tuple):
            n.inputs["A"].default_value = a
        else:
            nt.links.new(a, n.inputs["A"])
        n.inputs["B"].default_value = bcol
        nt.links.new(fac, n.inputs["Factor"])
        return n.outputs["Result"]

    g = node("MAXIMUM", line(sep.outputs["X"], 0.008), line(sep.outputs["Y"], 0.008))
    c = mix((0.045, 0.045, 0.045, 1), (0.085, 0.085, 0.085, 1), g)
    c = mix(c, (0.55, 0.06, 0.08, 1), node("LESS_THAN", node("ABSOLUTE", sep.outputs["Y"]), 0.012))
    c = mix(c, (0.22, 0.45, 0.06, 1), node("LESS_THAN", node("ABSOLUTE", sep.outputs["X"]), 0.012))
    nt.links.new(c, p.inputs["Base Color"])
    ob.data.materials.append(m)
    return ob


def area(name, loc, target, size, energy, colour=(1, 1, 1)):
    ld = bpy.data.lights.new(name, "AREA")
    ld.shape = "RECTANGLE"
    ld.size, ld.size_y = size
    ld.energy = energy
    ld.color = colour
    ob = new_ob(name, ld)
    ob.location = loc
    look_at(ob, target)
    return ob


def world_colour(c, strength=1.0):
    bg = bpy.context.scene.world.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (*c, 1)
    bg.inputs["Strength"].default_value = strength


def cam_state(theta, R=9.6, h=2.6, target=(0.0, 0.0, 0.55)):
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
    sc.cycles.max_bounces = 6
    sc.cycles.glossy_bounces = 3
    sc.cycles.transmission_bounces = 6
    sc.cycles.transparent_max_bounces = 6
    sc.cycles.caustics_reflective = False
    sc.cycles.caustics_refractive = False
    sc.render.resolution_x, sc.render.resolution_y = RES
    sc.view_settings.view_transform = "Standard"
    sc.render.use_persistent_data = True
    sc.world = bpy.data.worlds.new("World")
    sc.world.use_nodes = True
    world_colour((0.04, 0.04, 0.042))

    clay = mat("clay", base=(0.55, 0.55, 0.56), rough=0.55)
    clay_glass = mat("clay_glass", base=(0.85, 0.86, 0.88), rough=0.05, trans=1.0)
    floor = grid_floor()
    key = area("Key", (3.5, 4.5, 6.5), (0, 0, 0.5), (5, 5), 1300)
    fill = area("Fill", (-4.5, -5, 3.5), (0, 0, 0.5), (6, 6), 450)
    cam = new_ob("Camera", bpy.data.cameras.new("Camera"))
    cam.data.lens = 40
    sc.camera = cam

    cutters_coll = bpy.data.collections.new("Cutters")
    sc.collection.children.link(cutters_coll)
    interior_coll = bpy.data.collections.new("Interior")
    sc.collection.children.link(interior_coll)
    lights_coll = bpy.data.collections.new("Lights")
    sc.collection.children.link(lights_coll)

    body = Body(clay)
    st = dict(cage=True, active=body.ob)
    objs = {}

    # Final materials.
    paint = mat("Paint satin silver", base=(0.62, 0.64, 0.66), rough=0.3, metal=0.85, coat=0.6)
    satin_black = mat("Satin black cladding", base=(0.02, 0.02, 0.022), rough=0.55)
    gloss_black = mat("Gloss black fascia", base=(0.008, 0.008, 0.01), rough=0.06, coat=1.0)
    trim_in = mat("Interior trim", base=(0.10, 0.10, 0.105), rough=0.7)
    leather = mat("Leather cream", base=(0.72, 0.66, 0.56), rough=0.55)
    dash_m = mat("Dash dark", base=(0.04, 0.04, 0.045), rough=0.4)
    screen = mat("Screen", base=(0.02, 0.05, 0.08), rough=0.1, emit=(0.35, 0.75, 1.0), strength=3.0)
    rubber = mat("Tyre rubber", base=(0.018, 0.018, 0.018), rough=0.85)
    disc_m = mat("Wheel graphite", base=(0.07, 0.075, 0.08), rough=0.3, metal=0.7)
    fin_m = mat("Wheel fins silver", base=(0.6, 0.62, 0.64), rough=0.22, metal=1.0)
    led_f = mat("LED front", base=(0.9, 0.95, 1.0), emit=(0.85, 0.95, 1.0), strength=10.0)
    led_r = mat("LED rear", base=(0.6, 0.0, 0.0), emit=(1.0, 0.02, 0.03), strength=8.0)
    glass = bpy.data.materials.new("Glass iridescent")
    glass.use_nodes = True
    nt = glass.node_tree
    p = nt.nodes["Principled BSDF"]
    p.inputs["Roughness"].default_value = 0.02
    p.inputs["Transmission Weight"].default_value = 1.0
    p.inputs["IOR"].default_value = 1.5
    p.inputs["Thin Film IOR"].default_value = 1.7
    tc = nt.nodes.new("ShaderNodeTexCoord")
    sp = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(tc.outputs["Object"], sp.inputs[0])
    mr = nt.nodes.new("ShaderNodeMapRange")
    mr.inputs["From Min"].default_value = 1.0
    mr.inputs["From Max"].default_value = -1.9
    mr.inputs["To Min"].default_value = 380.0
    mr.inputs["To Max"].default_value = 820.0
    nt.links.new(sp.outputs["X"], mr.inputs["Value"])
    nt.links.new(mr.outputs["Result"], p.inputs["Thin Film Thickness"])
    tint = nt.nodes.new("ShaderNodeMix")
    tint.data_type = "RGBA"
    tint.inputs["A"].default_value = (0.92, 0.95, 0.96, 1)
    tint.inputs["B"].default_value = (0.25, 0.32, 0.4, 1)
    mr2 = nt.nodes.new("ShaderNodeMapRange")
    mr2.inputs["From Min"].default_value = -0.6
    mr2.inputs["From Max"].default_value = -1.9
    nt.links.new(sp.outputs["X"], mr2.inputs["Value"])
    nt.links.new(mr2.outputs["Result"], tint.inputs["Factor"])
    nt.links.new(tint.outputs["Result"], p.inputs["Base Color"])

    # --- actions ---------------------------------------------------------
    def W(**kw):
        def f():
            body.W.update(kw)
            body.update()
            st["active"] = body.ob
        return f

    def topo(nx, ny, nz):
        def f():
            body.topology(nx, ny, nz)
            st["active"] = body.ob
        return f

    def add_mirror():
        mirror_mod(body.ob)

    def add_subsurf(level):
        def f():
            m = body.ob.modifiers.get("Subdivision") or body.ob.modifiers.new("Subdivision", "SUBSURF")
            m.levels = m.render_levels = level
        return f

    def add_solidify():
        s = body.ob.modifiers.new("Solidify", "SOLIDIFY")
        s.thickness = 0.025
        s.offset = -1.0
        s.use_even_offset = True
        s.use_quality_normals = True
        s.material_offset = 3
        s.material_offset_rim = 0

    def cutter(name, me, mods=()):
        def f():
            ob = new_ob(name, me, cutters_coll)
            for fn in mods:
                fn(ob)
            wire_display(ob)
            objs[name] = ob
            st["active"] = ob
        return f

    def cutter_mod(name, fn):
        def f():
            fn(objs[name])
            # keep the display wire last in the stack
            ob = objs[name]
            w = ob.modifiers.get("Wireframe (display)")
            if w:
                with bpy.context.temp_override(object=ob, active_object=ob):
                    bpy.ops.object.modifier_move_to_index(modifier=w.name, index=len(ob.modifiers) - 1)
            st["active"] = ob
        return f

    def boolean(label, name):
        def f():
            ob = objs[name]
            ob.modifiers.remove(ob.modifiers["Wireframe (display)"])
            ob.hide_render = True
            ob.display_type = "WIRE"
            b = body.ob.modifiers.new("Boolean " + label, "BOOLEAN")
            b.operation = "DIFFERENCE"
            b.solver = "EXACT"
            b.object = ob
            st["active"] = body.ob
        return f

    def arch_mirror(ob):
        mirror_mod(ob)

    def arch_array(ob):
        a = ob.modifiers.new("Array", "ARRAY")
        a.use_relative_offset = False
        a.use_constant_offset = True
        a.constant_offset_displace = (XR - XF, 0, 0)
        a.count = 2

    def seam_solidify(ob):
        s = ob.modifiers.new("Solidify", "SOLIDIFY")
        s.thickness = 0.006
        s.offset = 0.0

    def regions():
        body.set_slots([clay, mat("clay_dark", base=(0.18, 0.18, 0.19), rough=0.5),
                        mat("clay_black", base=(0.08, 0.08, 0.085), rough=0.3), clay, clay, clay])
        body.mark_regions()
        st["active"] = body.ob

    def part(name, me, coll=None, mods=(), material=None):
        def f():
            ob = new_ob(name, me, coll or interior_coll)
            if material is not None:
                ob.data.materials.append(material)
            else:
                ob.data.materials.append(clay)
            for fn in mods:
                fn(ob)
            objs[name] = ob
            st["active"] = ob
        return f

    # Interior meshes
    def seat_mesh(name, x, z, back_angle, h_back):
        bm = bmesh.new()
        add_box(bm, (x, 0.42, z), (0.52, 0.48, 0.12))
        r = Matrix.Rotation(math.radians(back_angle), 4, "Y")
        add_box(bm, (x - 0.30, 0.42, z + h_back / 2), (0.12, 0.46, h_back), r)
        add_box(bm, (x - 0.02, 0.42 + 0.27, z + 0.08), (0.42, 0.06, 0.14))
        return mesh_from_bm(name, bm, True)

    def box_mesh(name, centre, size, rot=None):
        bm = bmesh.new()
        add_box(bm, centre, size, rot)
        return mesh_from_bm(name, bm, True)

    def yoke():
        cu = bpy.data.curves.new("Yoke", "CURVE")
        cu.dimensions = "3D"
        cu.bevel_depth = 0.016
        cu.bevel_resolution = 3
        sp_ = cu.splines.new("POLY")
        ring = outline([(-0.17, -0.11), (0.17, -0.11), (0.17, 0.10), (-0.17, 0.10)], 0.06, 5)
        sp_.points.add(len(ring) - 1)
        for i, (yy, zz) in enumerate(ring):
            sp_.points[i].co = (0, yy, zz, 1)
        sp_.use_cyclic_u = True
        ob = new_ob("Steering yoke", cu, interior_coll)
        ob.location = (0.30, 0.40, 0.70)
        ob.rotation_euler = (0, math.radians(-28), 0)
        cu.materials.append(clay)
        objs["Steering yoke"] = ob
        st["active"] = ob

    def canopy_mesh(nu=24, nv=8):
        bm = bmesh.new()
        xf, xr = 1.06, -1.95
        grid = []
        for i in range(nu + 1):
            x = xf + (xr - xf) * i / nu
            wc = half_width_final(x) - 0.07
            u = i / nu
            wc *= math.sqrt(max(0.0, 1 - (2 * u - 1) ** 10)) * 0.97 + 0.03
            zb = top_z(x, min(1.0, wc / (width_at(x, FINAL) / 2)), FINAL)
            zr = max(table(ROOF, x), zb)
            row = []
            for j in range(nv + 1):
                ph = (math.pi / 2) * j / nv
                y = wc * math.sin(ph) ** 0.55
                z = zb + (zr - zb) * math.cos(ph) ** 0.5
                row.append(bm.verts.new((x, y, z)))
            grid.append(row)
        for i in range(nu):
            for j in range(nv):
                bm.faces.new((grid[i][j], grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]))
        bm.normal_update()
        if sum(f.normal.z for f in bm.faces) < 0:
            bmesh.ops.reverse_faces(bm, faces=bm.faces)
        return mesh_from_bm("Canopy", bm, True)

    def canopy():
        ob = new_ob("Canopy glass", canopy_mesh())
        ob.data.materials.append(clay_glass)
        mirror_mod(ob)
        s = ob.modifiers.new("Subdivision", "SUBSURF")
        s.levels = s.render_levels = 2
        so = ob.modifiers.new("Solidify", "SOLIDIFY")
        so.thickness = 0.012
        so.offset = -1.0
        objs["Canopy glass"] = ob
        st["active"] = ob

    # Lights: recesses cut by an arrayed, mirrored cutter, LEDs inside.
    def light_set(prefix, x_dir, y0, z, h, colour_mat, pitch=8.0):
        def f():
            dg = bpy.context.evaluated_depsgraph_get()
            bvh = BVHTree.FromObject(body.ob, dg)
            hits = []
            for y in (y0, y0 + 0.16):
                loc, nor, _, _ = bvh.ray_cast(Vector((x_dir * 4.0, y, z)), Vector((-x_dir, 0, 0)))
                hits.append(loc)
            dx = (hits[1].x - hits[0].x) / 2
            # cutter: three slots
            bm = bmesh.new()
            add_box(bm, (hits[0].x, y0, z), (0.20, 0.036, h), Matrix.Rotation(math.radians(-x_dir * pitch), 4, "Y"))
            me = mesh_from_bm(prefix + "_cutter", bm)
            ob = new_ob(prefix + " cutter", me, cutters_coll)
            a = ob.modifiers.new("Array", "ARRAY")
            a.use_relative_offset = False
            a.use_constant_offset = True
            a.constant_offset_displace = (dx, 0.08, 0)
            a.count = 3
            mirror_mod(ob)
            bevel_mod(ob, 0.008, 2)
            wire_display(ob)
            objs[prefix + " cutter"] = ob
            # LEDs
            bm = bmesh.new()
            add_box(bm, (hits[0].x - x_dir * 0.03, y0, z), (0.02, 0.022, h - 0.03),
                    Matrix.Rotation(math.radians(-x_dir * pitch), 4, "Y"))
            led = new_ob(prefix + " LEDs", mesh_from_bm(prefix + "_leds", bm, True), lights_coll)
            led.data.materials.append(colour_mat if False else clay)
            a = led.modifiers.new("Array", "ARRAY")
            a.use_relative_offset = False
            a.use_constant_offset = True
            a.constant_offset_displace = (dx, 0.08, 0)
            a.count = 3
            mirror_mod(led)
            led.hide_render = True
            objs[prefix + " LEDs"] = led
            st["active"] = ob
        return f

    def show(name):
        def f():
            objs[name].hide_render = False
            st["active"] = objs[name]
        return f

    # Wheels (front left, origin at the hub), in a collection.
    wheel_coll = bpy.data.collections.new("Wheel")
    sc.collection.children.link(wheel_coll)
    wheel_coll.instance_offset = (XF, TRACK, WR)
    hub = Vector((XF, TRACK, WR))

    def wheel_part(name, me, mods=(), material=None):
        def f():
            ob = new_ob(name, me, wheel_coll)
            ob.location = hub
            ob.data.materials.append(material or clay)
            for fn in mods:
                fn(ob)
            objs[name] = ob
            st["active"] = ob
        return f

    def cover_mesh():
        bm = bmesh.new()
        bmesh.ops.create_cone(bm, cap_ends=True, segments=64, radius1=0.272, radius2=0.272, depth=0.03,
                              matrix=Matrix.Translation((0, 0.10, 0)) @ Matrix.Rotation(math.pi / 2, 4, "X"))
        bmesh.ops.create_cone(bm, cap_ends=True, segments=32, radius1=0.075, radius2=0.06, depth=0.04,
                              matrix=Matrix.Translation((0, 0.135, 0)) @ Matrix.Rotation(-math.pi / 2, 4, "X"))
        return mesh_from_bm("cover", bm, True)

    def fin_mesh():
        bm = bmesh.new()
        add_box(bm, (0.165, 0.125, 0.0), (0.19, 0.024, 0.045), Matrix.Rotation(math.radians(14), 4, "Y"))
        return mesh_from_bm("fin", bm, True)

    def fin_array(ob):
        e = new_ob("Fin array offset", None, wheel_coll)
        e.location = hub
        e.rotation_euler = (0, math.radians(30), 0)
        e.empty_display_size = 0.1
        a = ob.modifiers.new("Array (radial)", "ARRAY")
        a.use_relative_offset = False
        a.use_object_offset = True
        a.offset_object = e
        a.count = 12

    def instances(which):
        def f():
            for nm, x, side in which:
                e = new_ob("Wheel " + nm, None)
                e.instance_type = "COLLECTION"
                e.instance_collection = wheel_coll
                e.location = (x, side * TRACK, WR)
                e.rotation_euler = (0, 0, 0 if side > 0 else math.pi)
                objs["Wheel " + nm] = e
        return f

    def hide_cage():
        st["cage"] = False

    def show_cage():
        st["cage"] = True

    def materials(which):
        def f():
            if which == "paint":
                st["cage"] = False
                body.set_slots([paint, satin_black, gloss_black, trim_in, trim_in, trim_in])
                st["active"] = body.ob
            elif which == "glass":
                objs["Canopy glass"].data.materials[0] = glass
                st["active"] = objs["Canopy glass"]
            elif which == "interior":
                for nm in ("Front seats", "Rear seats"):
                    objs[nm].data.materials[0] = leather
                for nm in ("Dashboard", "Centre console"):
                    objs[nm].data.materials[0] = dash_m
                objs["Screen"].data.materials[0] = screen
                objs["Steering yoke"].data.materials[0] = dash_m
            elif which == "wheels":
                objs["Tyre"].data.materials[0] = rubber
                objs["Rim"].data.materials[0] = disc_m
                objs["Aero cover"].data.materials[0] = disc_m
                objs["Turbine fins"].data.materials[0] = fin_m
            elif which == "lights":
                objs["Front light LEDs"].data.materials[0] = led_f
                objs["Rear light LEDs"].data.materials[0] = led_r
        return f

    def studio():
        sc.view_settings.view_transform = "AgX"
        sc.view_settings.look = "AgX - Medium High Contrast"
        world_colour((0.30, 0.34, 0.40), 0.7)
        fm = mat("Studio floor", base=(0.30, 0.31, 0.33), rough=0.35)
        floor.data.materials[0] = fm
        key.data.energy = 900
        key.data.size, key.data.size_y = 8, 4
        key.location = (0.0, 0.0, 7.0)
        look_at(key, (0, 0, 0))
        fill.data.energy = 400
        area("Rim left", (-1.0, 7.0, 2.2), (0, 0, 0.6), (9, 1.2), 500, (0.9, 0.95, 1.0))
        area("Rim right", (1.0, -7.0, 2.2), (0, 0, 0.6), (9, 1.2), 500, (1.0, 0.95, 0.9))
        sc.cycles.samples = 14
        st["active"] = body.ob

    def samples(n):
        def f():
            sc.cycles.samples = n
        return f

    # --- steps -----------------------------------------------------------
    wide = cam_state
    inside = lambda th: cam_state(th, 5.6, 4.2, (-0.3, 0.0, 0.45))
    wheel_view = lambda th: cam_state(th, 2.8, 0.6, (XF, TRACK, WR))
    th = [30.0]
    steps = []

    def S(name, op, *actions, cam=None, dth=4.0):
        th[0] += dth

        def run():
            for a in actions:
                a()
        steps.append((name, op, run, cam or wide(th[0])))

    seam = seam_cutter_mesh()
    S("Add a cube", "Shift+A  Mesh > Cube", lambda: None)
    S("Delete half, add Mirror", "Mirror modifier  (Y, clipping)", add_mirror)
    S("Scale to the car's proportions", "S X 2.5, S Y 0.98, S Z 0.58", W(prop=0.5))
    S("Scale to the car's proportions", "S  (tweak)", W(prop=1.0))
    S("Loop cuts along the length", "Ctrl+R  x10", topo(10, 2, 1))
    S("More loop cuts along the length", "Ctrl+R  x20", topo(20, 2, 1))
    S("Loop cuts across", "Ctrl+R  x4 (half)", topo(20, 8, 1))
    S("Loop cuts up the sides", "Ctrl+R  x4", topo(20, 8, 4))
    S("Subdivision Surface", "Subdivision Surface modifier  (level 2)", add_subsurf(2))
    S("Ground clearance and overhangs", "G Z  (proportional editing)", W(clear=1.0))
    S("Drop the hood and the deck", "G Z  (proportional editing)", W(deck=0.5))
    S("Drop the hood and the deck", "G Z  (tweak)", W(deck=1.0))
    S("Taper the nose", "S Y  (proportional editing)", W(nose=1.0))
    S("Taper the tail", "S Y  (proportional editing)", W(tail=1.0))
    S("Round off the nose and the tail", "G X  on the end loops", W(round=1.0))
    S("Front fenders", "G Z  (proportional editing)", W(fhump=1.0))
    S("Rear haunches", "G Z  (proportional editing)", W(rhump=1.0))
    S("Flare the wheel arches", "S Y  (proportional editing)", W(flare=1.0))
    S("Tuck the rocker", "S Y  on the bottom loops", W(side=1.0))
    S("Shoulder crease", "S Y  on the shoulder loop", W(shoulder=1.0))
    S("Panel thickness", "Solidify modifier  (2.5 cm, inside)", add_solidify)
    S("Wheel arch cutter", "Shift+A  Cylinder", cutter("Arch cutter", cyl_mesh("arch", 0.44, (XF, 0.98, WR), depth=0.70)))
    S("Mirror the arch cutter", "Mirror modifier  (Y)", cutter_mod("Arch cutter", arch_mirror))
    S("Array it to the rear axle", "Array modifier  (constant offset -3.05 m)", cutter_mod("Arch cutter", arch_array))
    S("Cut the wheel arches", "Boolean modifier  (Exact, Difference)", boolean("arches", "Arch cutter"))
    S("Cockpit cutter", "Shift+A  Cube, shape to the cabin", cutter("Cockpit cutter", cockpit_cutter_mesh()),
      cam=inside(60))
    S("Open the cockpit", "Boolean modifier  (Exact, Difference)", boolean("cockpit", "Cockpit cutter"), cam=inside(75))
    S("Door and hood shut lines", "Ribbon mesh + Solidify (6 mm) + Mirror",
      cutter("Seam cutter", seam, (seam_solidify, mirror_mod)), cam=wide(70, 8.4, 2.4))
    S("Cut the panel gaps", "Boolean modifier  (Exact, Difference)", boolean("seams", "Seam cutter"),
      cam=wide(78, 8.0, 2.4))
    S("Cladding and fascia", "Assign material slots to faces", regions, cam=wide(40))
    S("Front seats", "Cube, Bevel, Mirror", part("Front seats", seat_mesh("front_seats", -0.45, 0.30, -16, 0.66),
                                               mods=(lambda o: bevel_mod(o, 0.04, 3), mirror_mod)), cam=inside(95))
    S("Rear seats", "Shift+D, scale, Mirror", part("Rear seats", seat_mesh("rear_seats", -1.40, 0.27, -26, 0.52),
                                                 mods=(lambda o: bevel_mod(o, 0.04, 3), mirror_mod)), cam=inside(110))
    S("Centre console", "Cube, Bevel", part("Centre console", box_mesh("console", (-0.25, 0, 0.32), (1.5, 0.22, 0.24)),
                                            mods=(lambda o: bevel_mod(o, 0.04, 3),)), cam=inside(120))
    S("Dashboard", "Cube, Bevel, Mirror", part("Dashboard", box_mesh("dash", (0.78, 0.43, 0.64), (0.40, 0.86, 0.15)),
                                               mods=(lambda o: bevel_mod(o, 0.05, 4), mirror_mod)), cam=inside(150))
    S("Driver screen", "Cube, Bevel", part("Screen", box_mesh("screen", (0.60, 0.40, 0.76), (0.02, 0.36, 0.11),
                                                               Matrix.Rotation(math.radians(-22), 4, "Y")),
                                          mods=(lambda o: bevel_mod(o, 0.006, 2),)), cam=inside(165))
    S("Hypersquare yoke", "Curve, bevel depth", yoke, cam=inside(180))
    S("Glass canopy", "Grid, Mirror, Subdivision, Solidify (12 mm)", canopy, samples(8), cam=wide(200, 8.6, 3.0))
    S("Front light recesses", "Cube, Array x3, Mirror, Bevel",
      light_set("Front light", 1, 0.55, 0.46, 0.24, led_f), cam=cam_state(18, 6.4, 1.2, (1.6, 0, 0.5)))
    S("Cut the recesses", "Boolean modifier  (Exact, Difference)", boolean("front lights", "Front light cutter"),
      cam=cam_state(10, 6.2, 1.1, (1.6, 0, 0.5)))
    S("Front LEDs", "Cube, Array x3, Mirror", show("Front light LEDs"), cam=cam_state(4, 6.0, 1.0, (1.6, 0, 0.5)))
    S("Rear light recesses", "Cube, Array x3, Mirror, Bevel",
      light_set("Rear light", -1, 0.52, 0.66, 0.20, led_r), cam=cam_state(168, 6.4, 1.3, (-1.6, 0, 0.6)))
    S("Cut the recesses", "Boolean modifier  (Exact, Difference)", boolean("rear lights", "Rear light cutter"),
      cam=cam_state(176, 6.2, 1.2, (-1.6, 0, 0.6)))
    S("Rear LEDs", "Cube, Array x3, Mirror", show("Rear light LEDs"), cam=cam_state(184, 6.0, 1.1, (-1.6, 0, 0.6)))
    S("Tyre profile", "Spin profile  (Screw modifier)",
      hide_cage, wheel_part("Tyre", profile_mesh("tyre_profile", rounded_rect(0.285, 0.38, -0.14, 0.14, 0.05)),
                            (screw_mod,)), cam=wheel_view(48))
    S("Rim barrel", "Screw modifier", wheel_part("Rim", profile_mesh("rim_profile",
                                                                     [(0.262, -0.12), (0.287, -0.12), (0.287, 0.112),
                                                                      (0.300, 0.122), (0.262, 0.122)]), (screw_mod,)),
      cam=wheel_view(56))
    S("Aero cover", "Cylinder, Bevel", wheel_part("Aero cover", cover_mesh(), (lambda o: bevel_mod(o, 0.006, 3),)),
      cam=wheel_view(64))
    S("One turbine fin", "Cube, Bevel", wheel_part("Turbine fins", fin_mesh(), (lambda o: bevel_mod(o, 0.005, 2),)),
      cam=wheel_view(70))
    S("Twelve fins", "Array modifier  (object offset, 30 degrees)", cutter_mod("Turbine fins", fin_array),
      cam=wheel_view(76))
    S("Instance the wheel", "Collection instance  (right side)",
      show_cage, instances([("FR", XF, -1)]), cam=wide(30))
    S("Instance the rear wheels", "Collection instances",
      instances([("RL", XR, 1), ("RR", XR, -1)]), cam=wide(38))
    S("Material: satin silver paint", "Principled BSDF, metallic, coat", materials("paint"), samples(10), cam=wide(60))
    S("Material: iridescent glass", "Transmission, thin film", materials("glass"), cam=wide(82, 8.6, 3.0))
    S("Materials: interior", "Leather, dash, screen", materials("interior"), cam=inside(110))
    S("Materials: wheels", "Rubber, graphite, silver", materials("wheels"), cam=wide(150))
    S("Materials: lights", "Emission", materials("lights"), cam=cam_state(20, 7.2, 1.4, (0.8, 0, 0.5)))
    S("Studio lighting", "Area lights, AgX, Cycles", studio, cam=wide(330, 8.6, 1.7))

    def visibility():
        body.cage.hide_render = not st["cage"]

    def stats():
        dg = bpy.context.evaluated_depsgraph_get()
        tris = 0
        for ob in sc.objects:
            if ob.type not in ("MESH", "CURVE") or ob.hide_render or ob.name in ("Floor", "Cage"):
                continue
            ev = ob.evaluated_get(dg)
            me = ev.to_mesh()
            if me is not None:
                me.calc_loop_triangles()
                tris += len(me.loop_triangles)
            ev.to_mesh_clear()
        insts = sum(1 for o in sc.objects if o.instance_type == "COLLECTION")
        tris *= 1
        a = st["active"]
        stack = [m.name for m in a.modifiers if m.name != "Wireframe (display)"] if hasattr(a, "modifiers") else []
        return dict(verts=len(body.ob.data.vertices), faces=len(body.ob.data.polygons), tris=tris,
                    active=a.name, stack=stack)

    states = [s[3] for s in steps]
    frames = []
    n = 0
    for k, (name, op, run, cst) in enumerate(steps):
        run()
        visibility()
        if ONLY is not None and k + 1 != ONLY:
            continue
        info = stats()
        if NO_RENDER:
            continue
        p0, p1 = states[max(0, k - 2)], states[max(0, k - 1)]
        p2, p3 = states[k], states[min(len(states) - 1, k + 1)]
        rng = range(FPS_STEP) if ONLY is None else [FPS_STEP - 1]
        for f in rng:
            t = (f + 1) / FPS_STEP
            place_camera(cam, [catmull(a, b, c, d, t) for a, b, c, d in zip(p0, p1, p2, p3)])
            n += 1
            sc.render.filepath = os.path.join(OUT, "frames", "%04d.png" % n)
            bpy.ops.render.render(write_still=True)
            frames.append(dict(step=k + 1, steps=len(steps), name=name, op=op, **info))
            print("FRAME %d step %d %s" % (n, k + 1, name), flush=True)
    if ONLY is None and not NO_RENDER:
        info = stats()
        info["active"], info["stack"] = "Body", [m.name for m in body.ob.modifiers]
        last = states[-1]
        for f in range(120):
            cs = list(last)
            cs[5] = last[5] + 360.0 * (f + 1) / 120
            place_camera(cam, cs)
            n += 1
            sc.render.filepath = os.path.join(OUT, "frames", "%04d.png" % n)
            bpy.ops.render.render(write_still=True)
            frames.append(dict(step=len(steps), steps=len(steps), name="Final render", op="F12", final=True, **info))
            print("FRAME %d turntable" % n, flush=True)
        json.dump(frames, open(os.path.join(OUT, "frames.json"), "w"), indent=0)

    # --- save the .blend: modifiers live, cutters as wire, ready to render --
    if ONLY is None:
        bpy.data.objects.remove(body.cage)
        for c in ("Arch cutter", "Cockpit cutter", "Seam cutter", "Front light cutter", "Rear light cutter"):
            if c in objs:
                objs[c].display_type = "WIRE"
        place_camera(cam, cam_state(330, 8.6, 1.7))
        sc.cycles.samples = 256
        sc.render.resolution_x, sc.render.resolution_y = 1920, 1080
        sc.render.use_persistent_data = False
        bpy.ops.wm.save_as_mainfile(filepath=os.path.join(os.path.abspath(OUT), "inception_concept.blend"),
                                    compress=True)
        print("SAVED", flush=True)
    print("DONE %d frames" % n, flush=True)


main()
