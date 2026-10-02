"""Night shift in the plate shop: the scene, built from nothing in one run.

A prisoner stamps license plates alone. A figure in a suit comes through the
far door, walks up behind him and fires a photon gun into the back of his
head. He falls onto the feed table; the last plate he stamped dissolves into
the Heavy Photon logo (finish.py does the dissolve and the hold).

A blockout set textured from fps-game-demo's Material Maker set, two MPFB
bodies performed by the Universal Animation Library's clips, a Bullet ragdoll
for the fall, cameras cut on timeline markers. The cut is authored in 15 fps
story frames and rendered at 24 fps by Blender's time stretching (retime()).

    blender -b --factory-startup -P scene.py -- --out DIR [--lo | --final]

writes DIR/scene.blend: 768 x 432 by default, 192 x 108 with --lo, and with
--final the 640 x 360 picture of the 640 x 480 letterbox, 32 samples, motion
blur. Render it with  blender -b DIR/scene.blend -a  and finish it with
python3 finish.py DIR [--final].
"""
import json
import math
import os
import sys

import bmesh
import bpy
from mathutils import Matrix, Quaternion, Vector

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import clips  # noqa: E402
import gait  # noqa: E402
import paths  # noqa: E402
import ragdoll  # noqa: E402
import surfaces  # noqa: E402
import retarget  # noqa: E402

FPS = 15            # the cut is authored, and every motion baked, in 15 fps story frames
OUT_FPS = 24        # and rendered at 24: Blender's time stretching samples it in between
SHAPES = os.path.join(paths.HEAVYPHOTON, "branding", "render3d", "shapes.json")
# MPFB bodies, built by fps-game-demo's tools/blender/build_npcs.py from cine_bodies.json
BODIES = os.path.join(HERE, "bodies")


def F(t):
    """Story frame to Blender's authoring frame (both start at 0)."""
    return int(t)


# ---------------------------------------------------------------- the edit
# (name, start, end) in story frames. Cuts happen on these.
SHOTS = [
    ("S1 establishing", 0, 60),
    ("S2 stamp insert", 60, 90),
    ("S3 door behind him", 90, 135),
    ("S4 walk, low", 135, 195),
    ("S5 his face", 195, 228),
    ("S6 over the shooter", 228, 249),
    ("S7 flash", 249, 251),
    ("S8 wide, aftermath", 251, 312),   # opens on him pitching onto the press
    ("S9 the last plate", 312, 368),
]
END = 368           # the last rendered frame; finish.py adds the logo after it
TRANS = (356, 368)  # S9's last frames dissolve into the 3D logo
LOGO_HOLD = 45      # then the logo holds, 3 s

FIRE = 248          # the shot
WORK_UNTIL = 205    # he stops when the glow reaches the press
PRESS_Y = 1.40      # the press head stands back from him behind a feed table,
FEED = (0.6, 1.05)  # so when he falls he slides onto the table, short of the ram
LAST_PLATE = (0.0, PRESS_Y, 0.94 + 0.002)   # centred on the bed, under the ram
DOOR_OPEN = (100, 112)
WALK_STOP = 200     # the suit reaches him
CHARGE = (212, FIRE)


def hexcol(h, a=1.0):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return (*c, a)


# ---------------------------------------------------------------- helpers
def link(ob):
    bpy.context.scene.collection.objects.link(ob)
    return ob


def mat(name, color, rough=0.6, metal=0.0, emit=None, strength=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = hexcol(color)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    if emit:
        b.inputs["Emission Color"].default_value = hexcol(emit)
        b.inputs["Emission Strength"].default_value = strength
    return m


def box(name, size, loc, material, parent=None, rot=(0, 0, 0)):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co = Vector((v.co.x * size[0], v.co.y * size[1], v.co.z * size[2]))
    bm.to_mesh(me)
    bm.free()
    ob = link(bpy.data.objects.new(name, me))
    ob.location = loc
    ob.rotation_euler = [math.radians(r) for r in rot]
    if parent:
        ob.parent = parent
    me.materials.append(material)
    return ob


def cyl(name, r, depth, loc, material, parent=None, rot=(0, 0, 0), seg=10):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, segments=seg, radius1=r, radius2=r, depth=depth)
    bm.to_mesh(me)
    bm.free()
    ob = link(bpy.data.objects.new(name, me))
    ob.location = loc
    ob.rotation_euler = [math.radians(a) for a in rot]
    if parent:
        ob.parent = parent
    me.materials.append(material)
    return ob


def ball(name, r, loc, material, parent=None, scale=(1, 1, 1), seg=8):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=max(4, seg // 2), radius=r)
    bm.to_mesh(me)
    bm.free()
    ob = link(bpy.data.objects.new(name, me))
    ob.location = loc
    ob.scale = scale
    if parent:
        ob.parent = parent
    me.materials.append(material)
    return ob


def empty(name, loc, parent=None):
    ob = link(bpy.data.objects.new(name, None))
    ob.empty_display_size = 0.05
    ob.location = loc
    if parent:
        ob.parent = parent
    return ob


def key(ob, f, rot=None, loc=None, scale=None):
    if rot is not None:
        ob.rotation_euler = [math.radians(a) for a in rot]
        ob.keyframe_insert("rotation_euler", frame=F(f))
    if loc is not None:
        ob.location = loc
        ob.keyframe_insert("location", frame=F(f))
    if scale is not None:
        ob.scale = scale
        ob.keyframe_insert("scale", frame=F(f))


def key_hide(ob, f, hidden):
    ob.hide_render = hidden
    ob.hide_viewport = hidden
    ob.keyframe_insert("hide_render", frame=F(f))
    ob.keyframe_insert("hide_viewport", frame=F(f))


def look_quat(src, dst):
    return (Vector(dst) - Vector(src)).to_track_quat("-Z", "Y").to_euler()


# ---------------------------------------------------------------- materials
M = {}


def materials():
    M["concrete"] = mat("concrete", "#5A5C5E", 0.85)
    M["safety"] = mat("safety_yellow", "#E0B020", 0.6)
    M["roof"] = mat("roof", "#2A2C2E", 0.9)
    M["press"] = mat("press_green", "#4A6152", 0.45, 0.3)
    M["press_dark"] = mat("press_dark", "#2C3530", 0.5, 0.4)
    M["hazard"] = mat("hazard", "#D8A818", 0.5)
    M["alu"] = mat("plate_alu", "#C8CCD0", 0.3, 1.0)
    M["plate_ink"] = mat("plate_ink", "#1E3A8A", 0.4)
    M["steel"] = mat("steel", "#6B7076", 0.4, 0.8)
    M["wood"] = mat("cart", "#5C4630", 0.8)
    M["jumpsuit"] = mat("jumpsuit", "#E0662A", 0.75)
    M["skin"] = mat("skin", "#B98366", 0.55)
    M["boots"] = mat("boots", "#1A1612", 0.6)
    M["suit"] = mat("suit", "#17181C", 0.55)
    M["shirt"] = mat("shirt", "#D8D8D2", 0.6)
    M["tie"] = mat("tie", "#5A1018", 0.5)
    M["shadow_skin"] = mat("figure_skin", "#3A2C26", 0.6)
    M["gun"] = mat("gun_bone", "#F2F0E9", 0.35)
    M["eyes"] = mat("eyes", "#14100E", 0.4)
    M["gun_ink"] = mat("gun_ink", "#0B0E14", 0.3)
    M["lamp_shade"] = mat("lamp_shade", "#2E3A30", 0.5, 0.5)
    M["bulb"] = mat("bulb", "#FFD9A0", 0.5, emit="#FFC880", strength=25.0)
    M["corridor"] = mat("corridor_glow", "#DDE6F0", 0.5, emit="#DDE6F0", strength=8.0)
    M["spark"] = mat("spark", "#FFB040", 0.5, emit="#FFA030", strength=60.0)
    M["bolt"] = mat("bolt", "#3EE0FF", 0.5, emit="#B9F4FF", strength=200.0)
    M["muzzle"] = mat("muzzle_glow", "#3EE0FF", 0.5, emit="#3EE0FF", strength=0.0)
    M["smoke"] = smoke_material()
    M["wall"] = wall_material()
    M["fog"] = fog_material()


def gloss(name, color, rough, metal=0.0):
    """Enamel under a clear coat: the plates are glossy."""
    m = mat(name, color, rough, metal)
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Coat Weight"].default_value = 1.0
    b.inputs["Coat Roughness"].default_value = 0.03
    return m


def plate_materials():
    M["plate_black"] = gloss("plate_black", "#0B0E14", 0.2, 0.35)
    M["plate_bone"] = gloss("plate_bone", "#F2F0E9", 0.18, 0.1)
    M["plate_cyan"] = gloss("plate_cyan", "#3EE0FF", 0.18, 0.1)
    M["plate_gunmetal"] = gloss("plate_gunmetal", "#3C434B", 0.22, 0.85)
    M["belt"] = belt_material()
    M["slot"] = mat("slot", "#000000", 1.0)


def wall_material():
    """Institutional two-tone: pale green to 1.4 m, cream above."""
    m = bpy.data.materials.new("wall")
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.9
    geo = nt.nodes.new("ShaderNodeNewGeometry")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(geo.outputs["Position"], sep.inputs["Vector"])
    gt = nt.nodes.new("ShaderNodeMath")
    gt.operation = "GREATER_THAN"
    gt.inputs[1].default_value = 1.4
    nt.links.new(sep.outputs["Z"], gt.inputs[0])
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.inputs["A"].default_value = hexcol("#6E8C6A")
    mix.inputs["B"].default_value = hexcol("#CFC7A8")
    nt.links.new(gt.outputs["Value"], mix.inputs["Factor"])
    nt.links.new(mix.outputs["Result"], b.inputs["Base Color"])
    return m


def fog_material():
    m = bpy.data.materials.new("fog")
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    v = nt.nodes.new("ShaderNodeVolumePrincipled")
    v.inputs["Density"].default_value = 0.06
    v.inputs["Anisotropy"].default_value = 0.35
    nt.links.new(v.outputs["Volume"], out.inputs["Volume"])
    m.cycles.homogeneous_volume = True
    return m


def smoke_material():
    m = bpy.data.materials.new("muzzle_smoke")
    m.use_nodes = True
    nt = m.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    v = nt.nodes.new("ShaderNodeVolumePrincipled")
    v.inputs["Density"].default_value = 6.0
    v.inputs["Color"].default_value = hexcol("#9AA4AE")
    nt.links.new(v.outputs["Volume"], out.inputs["Volume"])
    return m


# ---------------------------------------------------------------- the set
def room():
    # Shop floor: x -7..7, y -10..6, 6 m to the roof. Door in the -Y wall.
    box("floor", (14, 16, 0.2), (0, -2, -0.1), M["concrete"])
    box("roof", (14, 16, 0.2), (0, -2, 6.1), M["roof"])
    box("wall_px", (0.3, 16, 6), (7.15, -2, 3), M["wall"])
    box("wall_py", (14, 0.3, 6), (0, 6.15, 3), M["wall"])
    for x in (-1.4, 1.4):
        box("aisle_line", (0.08, 15.6, 0.004), (x, -2, 0.002), M["safety"])
    # -X wall: high barred windows the moon comes through.
    box("wall_mx_low", (0.3, 16, 3.8), (-7.15, -2, 1.9), M["wall"])
    box("wall_mx_top", (0.3, 16, 0.4), (-7.15, -2, 5.8), M["wall"])
    centres = [-7.0, -3.5, 0.0, 3.5]
    edges = [-10.0] + [c for w in centres for c in (w - 0.8, w + 0.8)] + [6.0]
    for a, b in zip(edges[0::2], edges[1::2]):
        box("pier", (0.3, b - a, 1.8), (-7.15, (a + b) / 2, 4.7), M["wall"])
    for c in centres:
        for k in range(5):
            cyl("bar", 0.018, 1.8, (-7.05, c - 0.6 + k * 0.3, 4.7), M["steel"], seg=6)
    # Door wall and the lit corridor beyond it.
    box("wall_my_l", (6.4, 0.3, 6), (-3.8, -10.15, 3), M["wall"])
    box("wall_my_r", (6.4, 0.3, 6), (3.8, -10.15, 3), M["wall"])
    box("wall_my_top", (1.2, 0.3, 3.7), (0, -10.15, 4.15), M["wall"])
    box("corr_floor", (3, 4, 0.2), (0, -12.2, -0.1), M["concrete"])
    box("corr_l", (0.2, 4, 3), (-1.5, -12.2, 1.5), M["wall"])
    box("corr_r", (0.2, 4, 3), (1.5, -12.2, 1.5), M["wall"])
    box("corr_end", (3, 0.2, 3), (0, -14.2, 1.5), M["corridor"])
    box("corr_roof", (3, 4, 0.2), (0, -12.2, 3.1), M["roof"])
    hinge = empty("door_hinge", (-0.6, -10.1, 0))
    box("door", (1.2, 0.06, 2.3), (0.6, 0, 1.15), M["steel"], hinge)
    key(hinge, 0, rot=(0, 0, 0))
    key(hinge, DOOR_OPEN[0], rot=(0, 0, 0))
    key(hinge, DOOR_OPEN[1], rot=(0, 0, 105))
    # The haze fills the shop only.
    box("haze", (13.9, 15.9, 5.9), (0, -2, 3), M["fog"])


def press(name, x, y, live=False):
    """A plate press: base and bed, two columns, a crown, the ram, a flywheel."""
    root = empty(name, (x, y, 0))
    box(name + "_base", (1.0, 0.7, 0.92), (0, 0, 0.46), M["press"], root)
    box(name + "_bed", (0.7, 0.5, 0.02), (0, 0, 0.93), M["press_dark"], root)
    for sx in (-0.42, 0.42):
        box(name + "_col", (0.12, 0.12, 1.7), (sx, 0, 1.77), M["press"], root)
    box(name + "_crown", (1.05, 0.6, 0.4), (0, 0, 2.82), M["press"], root)
    ram = empty(name + "_ram", (0, 0, 1.95), root)
    box(name + "_ramblock", (0.66, 0.24, 0.30), (0, 0, 0.15), M["hazard"], ram)   # a die the plate's size
    cyl(name + "_piston", 0.07, 0.8, (0, 0, 0.7), M["steel"], ram)
    wheel = empty(name + "_wheel", (0.62, 0, 2.3), root)
    cyl(name + "_flywheel", 0.42, 0.08, (0, 0, 0), M["press_dark"], wheel, rot=(0, 90, 0), seg=14)
    box(name + "_lever", (0.04, 0.04, 0.45), (0.46, -0.28, 1.05), M["steel"], root, rot=(-25, 0, 0))
    lamp = empty(name + "_lamp", (0, -0.35, 3.1), root)
    cyl(name + "_cord", 0.01, 2.8, (0, 0, 1.45), M["steel"], lamp, seg=4)
    cyl(name + "_shade", 0.22, 0.18, (0, 0, 0), M["lamp_shade"], lamp, seg=10)
    ball(name + "_bulb", 0.07, (0, 0, -0.1), M["bulb"] if live else M["steel"], lamp)
    if live:
        ld = bpy.data.lights.new(name + "_lamp_light", "AREA")
        ld.energy = 90
        ld.size = 0.4
        ld.color = hexcol("#FFC27A")[:3]
        lo = link(bpy.data.objects.new(name + "_lamp_light", ld))
        lo.location = (x, y - 0.35, 2.95)
    return root, ram, wheel


def plate(name, loc, parent=None, text=None):
    p = box(name, (0.30, 0.15, 0.004), loc, M["alu"], parent)
    if text:
        for body, size, dz in ((text[0], 0.022, 0.05), (text[1], 0.065, -0.012)):
            cu = bpy.data.curves.new(name + "_txt", "FONT")
            cu.body = body
            cu.size = size
            cu.extrude = 0.0012
            cu.align_x = "CENTER"
            cu.align_y = "CENTER"
            t = link(bpy.data.objects.new(name + "_txt", cu))
            t.parent = p
            t.location = (0, dz, 0.003)
            t.data.materials.append(M["plate_ink"])
    return p


# The plate is the 3D logo in sheet metal: raygun-v2-branded.svg's parts
# (branding/render3d/shapes.json, the same file the 3D render extrudes) inside
# the render's own frame, chamfered corners, gunmetal rim and cyan pinline, so
# the last shot can dissolve straight into the render.
LOCKUP_VIEWBOX = (34.67, 95.33, 1565.33, 356.0)   # build_scene.py VIEWBOX, SVG px
FRAME_GAP, FRAME_BORDER, FRAME_CUT = 22, 34, 16    # build_scene.py's frame, SVG px
PLATE_W = 0.62                                      # metres across the frame; 3.58 : 1
PLATE_T = 0.004
# role: (how far it stands out of the plate, the rounding on its edges), metres.
# Pressed from behind, so the forms are pillowed rather than cut square.
RAISE = {"fin": (0.0024, 0.0008), "gun": (0.0024, 0.0008), "rail": (0.0026, 0.0005),
         "beam": (0.0016, 0.0005), "heavy": (0.0032, 0.0004), "photon": (0.0026, 0.0004)}
PAINT = {"#f2f0e9": "plate_bone", "#3ee0ff": "plate_cyan", "#0b0e14": "plate_black"}


def _curve(name, loops, height, round_, material, parent, z):
    cu = bpy.data.curves.new(name, "CURVE")
    cu.dimensions = "2D"
    cu.fill_mode = "BOTH"
    cu.extrude = max(0.0, height / 2 - round_)
    cu.bevel_depth = round_
    cu.bevel_resolution = 3
    for lp in loops:
        sp = cu.splines.new("POLY")
        sp.points.add(len(lp) - 1)
        for pt, (x, y) in zip(sp.points, lp):
            pt.co = (x, y, 0, 1)
        sp.use_cyclic_u = True
    ob = link(bpy.data.objects.new(name, cu))
    ob.parent = parent
    ob.location = (0, 0, z + height / 2)
    cu.materials.append(M[material])
    return ob


def frame_rect(grow):
    """The lockup's crop grown by grow px, corners cut (build_scene.frame_rect)."""
    x, y, w, h = LOCKUP_VIEWBOX
    c = FRAME_CUT + (grow - FRAME_GAP) * (2 - math.sqrt(2))
    x0, y0, x1, y1 = x - grow, y - grow, x + w + grow, y + h + grow
    return [(x0 + c, y0), (x1 - c, y0), (x1, y0 + c), (x1, y1 - c),
            (x1 - c, y1), (x0 + c, y1), (x0, y1 - c), (x0, y0 + c)]


def plate_size():
    x, y, w, h = LOCKUP_VIEWBOX
    k = PLATE_W / (w + 2 * (FRAME_GAP + FRAME_BORDER))
    return PLATE_W, (h + 2 * (FRAME_GAP + FRAME_BORDER)) * k


def logo_plate(name, loc):
    """A finished plate: glossy black enamel inside a gunmetal rim with a cyan
    pinline, and the Heavy Photon lockup pressed up out of it in its own paint."""
    x, y, w, h = LOCKUP_VIEWBOX
    outer = FRAME_GAP + FRAME_BORDER
    k = PLATE_W / (w + 2 * outer)
    cx, cy = x + w / 2, y + h / 2
    P = lambda pts: [((px - cx) * k, -(py - cy) * k) for px, py in pts]
    root = empty(name, loc)
    top = PLATE_T / 2
    _curve(name + "_sheet", [P(frame_rect(outer))], PLATE_T, 0.0008, "plate_black", root, -top)
    _curve(name + "_rim", [P(frame_rect(outer)), P(frame_rect(FRAME_GAP))], 0.0028, 0.0009, "plate_gunmetal", root, top)
    mid = FRAME_GAP + FRAME_BORDER / 2
    _curve(name + "_pinline", [P(frame_rect(mid + 2.5)), P(frame_rect(mid - 2.5))], 0.0032, 0.0003, "plate_cyan", root, top)
    for part in json.load(open(SHAPES))["parts"]:
        height, round_ = RAISE[part["role"]]
        loops = [P(lp) for poly in part["polys"] for lp in [poly["outer"]] + poly["holes"]]
        _curve(name + "_" + part["name"], loops, height, round_, PAINT[part["fill"]], root, top)
    return root


def copy_plate(src, name, loc):
    """Another plate sharing the first one's geometry."""
    p = src.copy()
    p.name = name
    link(p)
    p.location = loc
    for c in src.children:
        c2 = c.copy()
        link(c2)
        c2.parent = p
    return p


def shop_props():
    root, ram, wheel = press("press_main", 0, PRESS_Y, live=True)
    # The feed table: he lays blanks on it and the press draws them in.
    box("feed_table", (1.0, FEED[1] - FEED[0], 0.92), (0, (FEED[0] + FEED[1]) / 2, 0.46), M["press"])
    box("feed_top", (1.0, FEED[1] - FEED[0], 0.02), (0, (FEED[0] + FEED[1]) / 2, 0.93), M["steel"])
    for i, (x, y) in enumerate([(-3.2, 0.95), (3.2, 0.95), (-3.2, -3.0), (3.2, -3.0),
                                (-3.2, -6.8), (3.2, -6.8)]):
        press("press_%d" % i, x, y)
    # Blanks on a cart to his left. Finished plates leave on the conveyor.
    box("cart", (0.6, 0.5, 0.8), (-0.95, 0.35, 0.4), M["wood"])
    for k in range(14):
        plate("blank", (-0.95, 0.35, 0.805 + k * 0.006))
    # Stacks of crates down the shop for scale.
    for y in (-2.0, -5.0, -8.5):
        for x in (-5.6, 5.6):
            box("crate", (0.9, 0.9, 0.9), (x, y, 0.45), M["wood"])
            box("crate", (0.8, 0.8, 0.7), (x, y, 1.25), M["wood"])
    return ram, wheel


# ---------------------------------------------------------------- people
def build_gun():
    """The Heavy Photon raygun off the logo's own outlines, 30 cm long. Built
    barrel down -Z and grip down -Y so it points where the hand points."""
    data = json.load(open(SHAPES))
    k = 0.30 / 561.0                      # SVG px to metres (gun is ~561 px long)
    gx, gy = 188.0, 375.0                 # the grip, in SVG px, sits in the hand
    gun = empty("gun", (0, 0, 0))
    depth = {"hull": 60, "sight": 38, "grip": 44, "trigger": 14, "tip": 30,
             "fin-1": 82, "fin-2": 72, "fin-3": 62, "rail": 64}
    for p in data["parts"]:
        if p["name"] not in depth:
            continue
        d = depth[p["name"]] * k
        cu = bpy.data.curves.new("gun_" + p["name"], "CURVE")
        cu.dimensions = "2D"
        cu.fill_mode = "BOTH"
        cu.extrude = d
        for poly in p["polys"]:
            for lp in [poly["outer"]] + poly["holes"]:
                sp = cu.splines.new("POLY")
                sp.points.add(len(lp) - 1)
                for pt, (x, y) in zip(sp.points, lp):
                    # curve X = along the barrel, curve Y = up (away from grip)
                    pt.co = ((x - gx) * k, -(y - gy) * k, 0, 1)
                sp.use_cyclic_u = True
        ob = link(bpy.data.objects.new("gun_" + p["name"], cu))
        ob.parent = gun
        # +90 about Y: curve X (barrel) -> -Z, curve Y (up) -> +Y, extrusion -> X
        ob.rotation_euler = (0, math.radians(90), 0)
        ob.data.materials.append(M["gun_ink"] if p["name"] == "rail" else M["gun"])
    muzzle = empty("muzzle", (0, (gy - 228) * k, -(602 - gx) * k), gun)
    glow = ball("muzzle_glow", 0.025, (0, 0, 0), M["muzzle"], muzzle)
    return gun, muzzle, glow



# ---------------------------------------------------------------- the line
CONV_Y = 2.25        # the conveyor runs behind the press row, wall to wall
CONV_Z = 0.86        # belt top
CONV_W = 0.46
CONV_X = (-7.3, 7.3)  # its ends are inside the walls, where a plate wraps round unseen
CONV_V = 0.22        # metres a second
PLATE_GAP = 1.0


def belt_material():
    """Black rubber with cross ribs every 5 cm, sliding at the belt's speed."""
    m = bpy.data.materials.new("conv_belt")
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    b.inputs["Roughness"].default_value = 0.75
    tc = nt.nodes.new("ShaderNodeTexCoord")
    mp = nt.nodes.new("ShaderNodeMapping")
    nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    nt.links.new(mp.outputs["Vector"], sep.inputs[0])
    m1 = nt.nodes.new("ShaderNodeMath")
    m1.operation = "MULTIPLY"
    m1.inputs[1].default_value = 20.0
    nt.links.new(sep.outputs["X"], m1.inputs[0])
    m2 = nt.nodes.new("ShaderNodeMath")
    m2.operation = "FRACT"
    nt.links.new(m1.outputs[0], m2.inputs[0])
    m3 = nt.nodes.new("ShaderNodeMath")
    m3.operation = "GREATER_THAN"
    m3.inputs[1].default_value = 0.8
    nt.links.new(m2.outputs[0], m3.inputs[0])
    mix = nt.nodes.new("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.inputs["A"].default_value = hexcol("#16181B")
    mix.inputs["B"].default_value = hexcol("#34383D")
    nt.links.new(m3.outputs[0], mix.inputs["Factor"])
    nt.links.new(mix.outputs["Result"], b.inputs["Base Color"])
    loc = mp.inputs["Location"]
    for f, x in ((0, 0.0), (END, -CONV_V * END / FPS)):
        loc.default_value[0] = x
        loc.keyframe_insert("default_value", index=0, frame=F(f))
    for fc in nt.animation_data.action.fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = "LINEAR"
    return m


def conveyor(template):
    """The belt, its frame and the finished plates riding it."""
    x0, x1 = CONV_X
    L = x1 - x0
    for sy in (-1, 1):
        box("conv_rail", (L, 0.04, 0.12), (0, CONV_Y + sy * (CONV_W / 2 + 0.02), CONV_Z - 0.03), M["press"])
        x = x0 + 0.8
        while x < x1:
            box("conv_leg", (0.05, 0.05, CONV_Z - 0.06), (x, CONV_Y + sy * CONV_W / 2, (CONV_Z - 0.06) / 2), M["steel"])
            x += 1.6
    box("conv_belt", (L, CONV_W, 0.02), (0, CONV_Y, CONV_Z - 0.01), M["belt"])
    for sx in (-1, 1):
        box("conv_slot", (0.02, CONV_W + 0.16, 0.26), (sx * 6.99, CONV_Y, CONV_Z + 0.08), M["slot"])
    n = int(L / PLATE_GAP)
    plates = [template] + [copy_plate(template, "belt_plate_%d" % i, (0, 0, 0)) for i in range(1, n)]
    for i, p in enumerate(plates):
        xs = [x0 + ((i * PLATE_GAP + CONV_V * f / FPS) % L) for f in range(0, END + 2)]
        for f in range(0, END + 1):
            p.location = (xs[f], CONV_Y, CONV_Z + PLATE_T / 2)
            p.keyframe_insert("location", frame=F(f))
            # Rendered at 24 fps the jump would be interpolated across the room
            # (and motion blurred along it), so a plate is hidden while it wraps.
            wrap = (f > 0 and xs[f] < xs[f - 1]) or xs[f + 1] < xs[f]
            p.hide_render = wrap
            p.keyframe_insert("hide_render", frame=F(f))


# ---------------------------------------------------------------- the cast
# What the ragdoll lands on: (name, size, centre), the same boxes room(),
# press() and shop_props() draw.
COLLIDERS = [
    ("floor", (14, 16, 0.2), (0, -2, -0.1)),
    ("feed_table", (1.0, 0.45, 0.94), (0, 0.825, 0.47)),
    ("press_base", (1.0, 0.7, 0.92), (0, 1.40, 0.46)),
    ("press_bed", (0.7, 0.5, 0.02), (0, 1.40, 0.93)),
    ("press_col_l", (0.12, 0.12, 1.7), (-0.42, 1.40, 1.77)),
    ("press_col_r", (0.12, 0.12, 1.7), (0.42, 1.40, 1.77)),
    ("cart", (0.6, 0.5, 0.8), (-0.95, 0.35, 0.4)),
    ("conveyor", (14.6, 0.5, 0.86), (0, 2.25, 0.43)),
]
# The hit, for one frame: the head snaps forward, and the chest lurches after it
# hard enough to carry him onto the press bed rather than down its front.
PUSH_SIDE = -0.1    # the kick leans a touch to his left (-X)
PUSH_HEAD = 2.0     # m/s on the head
PUSH_CHEST = 2.0    # m/s on the chest
LOWPOLY = 0.5        # the bodies keep half their triangles: a late-90s cinematic budget
PR_Y = 0.2           # where he stands at the press: the clips' reach meets the bed from here
CLEAR = 3            # the ram lands this many frames before Interact ends: his hand is out by then
GRIP_BEHIND = 0.55   # the shooter's grip stops this far behind the prisoner's head (m)
GRIP_SIDE = -0.05    # and this far to the prisoner's left
WALK_FROM = -10.7    # the suit starts just inside the corridor
SHOOT_LEAD = 1       # Pistol_Shoot starts this many frames before the bolt
# Leaving: he turns round to his right, toward the S8 camera, head first, then
# his chest, then his hips, and his feet follow in two steps (gait.py plants
# them): the right foot pivots out where it stands, the left swings round in
# front of it toward the door, and he walks out.
TURN_FROM = 272      # his hips start to come round, his feet pivoting on their balls
LEAVE = 276          # his feet start to step
TURN_END = 293       # the second step is down: he faces the door
LEAD_CHEST = 4       # frames his chest turns ahead of his hips
LEAD_HEAD = 9        # and his head
# the two steps: where the ball of each foot comes down, in metres from where
# his pelvis stood (x to his right, y ahead of him), and the foot's heading
# (degrees, + to his left)
TURN_STEPS = {"r": [(0.33, -0.21, -105.0)], "l": [(0.48, -0.73, -175.0)]}
# his hips on the way round: (frame, x to his right, y ahead), from where they stood
TURN_PATH = [(LEAVE, 0.0, 0.0), (286, 0.08, -0.08), (TURN_END, 0.30, -0.33)]
TURN_STRIDE = 0.5    # the turn's steps lift and swing the arms like half a walk's
TURN_CADENCE = 1.5   # and come quicker than the walk's
TURN_EASE = 0.5      # seconds to come up to walking from standing
STRIDE_BACK = 1.2    # seconds, after the turn, for his steps to open up to the full stride
DOOR = (0.0, -10.4)  # where he heads once he has turned


STRIPE_PAIRS = 12        # black and white bands over the body's height: ~7.5 cm each at 1.79 m
GARMENT_TILE = (0.0, 0.25, 0.75, 1.0)   # the outfit atlas's first, largest tile: the suit, not the shoes


def skin_detail(body):
    """Pores and the rest. The body build's normal maps carry roughness in their
    alpha (skin: oily T-zone, drier cheeks; clothes: cloth), which the glTF
    import leaves unwired. Skin also gets its normal map pushed for the close
    shots, a fine pore bump on its UVs chained after it, and subsurface."""
    mesh = next(o for o in body.arm.children if o.type == "MESH")
    for m in mesh.data.materials:
        nt = m.node_tree
        b = next((n for n in nt.nodes if n.type == "BSDF_PRINCIPLED"), None)
        nm = next((n for n in nt.nodes if n.type == "NORMAL_MAP"), None)
        if b is None or nm is None:
            continue
        tex = nm.inputs["Color"].links[0].from_node
        nt.links.new(tex.outputs["Alpha"], b.inputs["Roughness"])
        if not m.name.endswith("_skin"):
            nm.inputs["Strength"].default_value = 1.5
            continue
        nm.inputs["Strength"].default_value = 2.2
        uv = nt.nodes.new("ShaderNodeUVMap")
        vor = nt.nodes.new("ShaderNodeTexVoronoi")
        vor.inputs["Scale"].default_value = 1200.0     # about half a millimetre on the face
        nt.links.new(uv.outputs["UV"], vor.inputs["Vector"])
        bump = nt.nodes.new("ShaderNodeBump")
        bump.inputs["Strength"].default_value = 0.15
        bump.inputs["Distance"].default_value = 0.0004
        nt.links.new(vor.outputs["Distance"], bump.inputs["Height"])
        nt.links.new(nm.outputs["Normal"], bump.inputs["Normal"])
        nt.links.new(bump.outputs["Normal"], b.inputs["Normal"])
        b.inputs["Subsurface Weight"].default_value = 0.3
        b.inputs["Subsurface Radius"].default_value = (1.0, 0.35, 0.2)
        b.inputs["Subsurface Scale"].default_value = 0.006


def in_shadow(body, light=0.1):
    """The shooter stays a shadowy figure: his skin is taken down to a tenth of
    its colour and its sheen, so under the brim his face is a dark shape that
    the gun's glow only rims, and his hands read as black gloves (owner, P3)."""
    mesh = next(o for o in body.arm.children if o.type == "MESH")
    m = next(ms for ms in mesh.data.materials if ms.name.endswith("_skin"))
    nt = m.node_tree
    b = next(n for n in nt.nodes if n.type == "BSDF_PRINCIPLED")
    src = b.inputs["Base Color"].links[0].from_socket
    dim = nt.nodes.new("ShaderNodeMix")
    dim.data_type = "RGBA"
    dim.blend_type = "MULTIPLY"
    dim.inputs["Factor"].default_value = 1.0
    dim.inputs["B"].default_value = (light, light, light, 1.0)
    nt.links.new(src, dim.inputs["A"])
    nt.links.new(dim.outputs["Result"], b.inputs["Base Color"])
    for l in list(b.inputs["Roughness"].links):
        nt.links.remove(l)
    b.inputs["Roughness"].default_value = 0.8
    b.inputs["Subsurface Weight"].default_value = 0.0


def convict_stripes(body):
    """Horizontal convict bands on the prisoner's suit. The build tints it off-white; the bands are
    painted here, off the mesh's undeformed (Generated) height so they stay on the cloth, and only
    inside the garment's atlas tile so the shoes and eyes keep their colour."""
    mesh = next(o for o in bpy.data.objects if o.parent == body.arm and o.type == "MESH")
    m = next(ms for ms in mesh.data.materials if ms.name.endswith("_outfit"))
    uv = mesh.data.uv_layers.active.data
    inside = sum(1 for poly in mesh.data.polygons if mesh.data.materials[poly.material_index] == m and all(
        GARMENT_TILE[0] <= uv[i].uv.x <= GARMENT_TILE[2] and GARMENT_TILE[1] <= uv[i].uv.y <= GARMENT_TILE[3]
        for i in poly.loop_indices))
    total = sum(1 for poly in mesh.data.polygons if mesh.data.materials[poly.material_index] == m)
    print("STRIPES %s: %d of %d outfit faces in the garment tile" % (m.name, inside, total))
    nt = m.node_tree
    bsdf = next(n for n in nt.nodes if n.type == "BSDF_PRINCIPLED")
    src = bsdf.inputs["Base Color"].links[0].from_socket
    N = nt.nodes.new

    def math(op, a, b):
        n = N("ShaderNodeMath")
        n.operation = op
        for sock, v in ((n.inputs[0], a), (n.inputs[1], b)):
            if isinstance(v, (int, float)):
                sock.default_value = v
            else:
                nt.links.new(v, sock)
        return n.outputs[0]

    gen = N("ShaderNodeSeparateXYZ")
    nt.links.new(N("ShaderNodeTexCoord").outputs["Generated"], gen.inputs[0])
    band = math("GREATER_THAN", math("FRACT", math("MULTIPLY", gen.outputs["Z"], STRIPE_PAIRS), 0.0), 0.5)
    uvs = N("ShaderNodeSeparateXYZ")
    uvm = N("ShaderNodeUVMap")
    nt.links.new(uvm.outputs["UV"], uvs.inputs[0])
    u, v = uvs.outputs["X"], uvs.outputs["Y"]
    tile = math("MULTIPLY", math("LESS_THAN", u, GARMENT_TILE[2]), math("GREATER_THAN", v, GARMENT_TILE[1]))
    mix = N("ShaderNodeMix")
    mix.data_type = "RGBA"
    mix.blend_type = "MULTIPLY"
    nt.links.new(math("MULTIPLY", band, tile), mix.inputs["Factor"])
    nt.links.new(src, mix.inputs["A"])
    mix.inputs["B"].default_value = hexcol("#202024")
    nt.links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])


def arms(body):
    """Both arms from the upper arm down, fingers included: what the aim raises."""
    keep = set()
    for n in body.order:
        b = n
        while b is not None and not b.startswith("upperarm_"):
            b = body.parent[b]
        if b is not None and n in clips.MAP:
            keep.add(n)
    return keep


def walk_away(track, start, pelvis0, v, fps, end):
    """Turn round to the right and walk to the door. The hips follow TURN_PATH
    and come round from TURN_FROM to TURN_END; after that he walks for the
    door, his steps opening up to the walk's over STRIDE_BACK. Returns the
    yaw curve (for the upper body's lead), the stride share and the walk
    clip's time, frame by frame, and the turn's planned steps in the world."""
    x0, y0 = start
    keys = [(f, x0 + dx, y0 + dy) for f, dx, dy in TURN_PATH]
    fe, xe, ye = keys[-1]
    d = Vector((DOOR[0] - xe, DOOR[1] - ye)).normalized()
    heading = math.degrees(math.atan2(-d.x, d.y))
    heading -= 360.0 if heading > 0 else 0.0   # come round clockwise, to the right

    def hips_yaw(f):
        return heading * gait.smooth((f - TURN_FROM) / float(TURN_END - TURN_FROM))

    def step(f):   # stride share and cadence: the turn's, then opening up to the walk's
        back = gait.smooth((f - TURN_END) / (STRIDE_BACK * fps))
        up = gait.smooth((f - LEAVE) / (TURN_EASE * fps))
        s = TURN_STRIDE + (1.0 - TURN_STRIDE) * back
        c = (TURN_CADENCE + (1.0 - TURN_CADENCE) * back) * (0.6 + 0.4 * up)   # the first step is slower
        return up, s, c

    # the hips: a Hermite curve through the keys, leaving the last at walking speed
    _, s_e, c_e = step(fe)
    tang = []
    for i, (f, x, y) in enumerate(keys):
        if i == 0:
            tang.append(Vector((0.0, 0.0)))
        elif i == len(keys) - 1:
            tang.append(Vector((d.x, d.y)) * (s_e * c_e * v / fps))
        else:
            fa, xa, ya = keys[i - 1]
            fb, xb, yb = keys[i + 1]
            tang.append(Vector((xb - xa, yb - ya)) / float(fb - fa))
    for i in range(len(keys) - 1):
        (fa, xa, ya), (fb, xb, yb) = keys[i], keys[i + 1]
        n = fb - fa
        for f in range(fa, fb + 1):
            t = (f - fa) / float(n)
            h = (2 * t ** 3 - 3 * t * t + 1, t ** 3 - 2 * t * t + t, -2 * t ** 3 + 3 * t * t, t ** 3 - t * t)
            p = (Vector((xa, ya)) * h[0] + tang[i] * (h[1] * n) + Vector((xb, yb)) * h[2]
                 + tang[i + 1] * (h[3] * n))
            track.root[f] = (p.x, p.y, hips_yaw(f))
    for f in range(TURN_FROM, LEAVE):
        track.root[f] = (x0, y0, hips_yaw(f))

    stride, clock, walked, last, tau = {}, {}, 0.0, None, 0.0
    for f in range(LEAVE, end + 1):
        up, s, c = step(f)
        stride[f] = 1.0 - up * (1.0 - s)
        if last is not None:
            tau += 0.5 * (c + last[1]) / fps
            if f > fe:
                walked += 0.5 * (s * c * v + last[0]) / fps
        last = (s * c * v, c)
        clock[f] = tau
        if f > fe:
            track.root[f] = (xe + d.x * walked, ye + d.y * walked, heading)
    for f in range(TURN_FROM, LEAVE):
        stride[f] = 1.0

    plan = {side: [(pelvis0.x + bx, pelvis0.y + by, yw) for bx, by, yw in steps]
            for side, steps in TURN_STEPS.items()}
    return hips_yaw, stride, clock, plan


def turn_lead(hips_yaw):
    """The upper body leads the turn: his head LEAD_HEAD frames ahead of his
    hips, his chest LEAD_CHEST, twisted up the spine and carried out along
    the arms, and both settle back onto the hips as they come round."""
    chest_part = {"spine_01": 0.25, "spine_02": 0.6, "spine_03": 1.0}

    def lead(f):
        chest = hips_yaw(f + LEAD_CHEST) - hips_yaw(f)
        head = hips_yaw(f + LEAD_HEAD) - hips_yaw(f + LEAD_CHEST)
        if abs(chest) < 1e-3 and abs(head) < 1e-3:
            return {}
        q = lambda deg: Quaternion((0, 0, 1), math.radians(deg))
        out = {b: q(chest * w) for b, w in chest_part.items()}
        out["neck_01"] = q(chest + 0.4 * head)
        out["head"] = q(chest + head)
        for side in ("_l", "_r"):
            for b in ("clavicle", "upperarm", "lowerarm", "hand") + tuple(
                    "%s_0%d" % (g, i) for g in ("index", "middle", "ring", "pinky", "thumb") for i in (1, 2, 3)):
                out[b + side] = q(chest)
        return out
    return lead


def look_back(f):
    """He hears the charge and starts to turn his head, to his right."""
    u = max(0.0, min(1.0, (f - 236) / 11.0))
    u = u * u * (3 - 2 * u)
    if u == 0:
        return {}
    q = lambda deg: Quaternion((0, 0, 1), math.radians(deg * u))
    return {"spine_03": q(-6), "neck_01": q(-16), "head": q(-24)}


def cast(gun, muzzle):
    """The two bodies, performed by UAL clips. Returns the bodies, the press's
    stamp frames, and the muzzle and his head at the shot."""
    lib = clips.Library()
    pr = retarget.import_body(os.path.join(BODIES, "cine_prisoner.glb"), "prisoner")
    fg = retarget.import_body(os.path.join(BODIES, "cine_suit.glb"), "suit")
    retarget.lowpoly(pr, LOWPOLY)
    retarget.lowpoly(fg, LOWPOLY)
    skin_detail(pr)
    skin_detail(fg)
    in_shadow(fg)
    convict_stripes(pr)
    clips.prepare(pr)
    clips.prepare(fg)
    frames = range(0, END + 1)

    # ---- the prisoner: lift the stamped plate off the bed, feed the next blank
    # in under the ram, and the ram comes down once his hand is clear.
    pick, push = round(lib.length("PickUp_Table") * FPS), round(lib.length("Interact") * FPS)
    probe = clips.Track(lib, FPS)
    probe.play(0, push, "Interact", loop=False)
    probe.hold(0, push, 0.0, PR_Y, 0.0)
    reach = []
    for k in range(push + 1):
        A, M_ = clips.solve(pr, lib, probe, k)
        for side in ("hand_l", "hand_r"):
            reach.append((pr.world(A, M_, side, 1.0), k, side))
    hand, peak, side = max(reach, key=lambda r: r[0].y)
    clear = max(r[0].y for r in reach if r[1] == push - CLEAR)
    print("REACH %s in to %s at frame %d of Interact; at the stamp his hands are back to y %.2f"
          " (the ram's front edge is y %.2f)" % (side, tuple(round(v, 2) for v in hand), peak, clear,
                                                 PRESS_Y - 0.12))
    tp = clips.Track(lib, FPS)
    f, stamps = 0, []
    while f + pick + push <= WORK_UNTIL + 8:
        tp.play(f, f + pick, "PickUp_Table", loop=False, blend=5)
        tp.play(f + pick, f + pick + push, "Interact", loop=False, blend=5)
        stamps.append(f + pick + push - CLEAR)
        f += pick + push
    tp.play(f, END, "Idle_Loop", blend=8)
    tp.hold(0, END, 0.0, PR_Y, 0.0)
    tp.layers.append(look_back)
    Ap, Mp = clips.solve(pr, lib, tp, FIRE)
    head = pr.world(Ap, Mp, "head", 0.5)

    # ---- the suit: walk in, raise, fire, lower, turn, walk out.
    lift = arms(fg)
    ts = clips.Track(lib, FPS)
    n_shoot = round(lib.length("Pistol_Shoot") * FPS)
    ts.play(0, 100, "Idle_Loop")
    ts.play(100, WALK_STOP, "Walk_Formal_Loop", blend=4)
    ts.play(WALK_STOP, FIRE - SHOOT_LEAD, "Pistol_Idle_Loop", blend=10)
    ts.play(FIRE - SHOOT_LEAD, FIRE - SHOOT_LEAD + n_shoot, "Pistol_Shoot", loop=False, blend=2)
    ts.play(FIRE - SHOOT_LEAD + n_shoot, 262, "Pistol_Idle_Loop", blend=4)
    ts.play(262, LEAVE, "Idle_Loop", blend=12)
    ts.hold(0, END, 0.0, 0.0, 0.0)

    def grip(A, M_):
        """Where the gun's grip sits: just past the end of the hand bone."""
        return fg.tail_frame(A, M_, "hand_r") @ Matrix.Translation((0, 0.02, 0))

    # Raise both arms about the shoulders until the grip is at his eye line.
    def grip_z(theta):
        A, M_ = clips.solve(fg, lib, ts, FIRE, fix=(Matrix.Rotation(theta, 3, "X"), lift))
        return grip(A, M_).translation.z
    want = head.z - 0.07
    a, b = 0.0, math.radians(30)
    za, zb = grip_z(a), grip_z(b)
    for _ in range(12):
        if abs(zb - za) < 1e-6:
            break
        a, za, b = b, zb, b + (want - zb) * (b - a) / (zb - za)
        zb = grip_z(b)
    theta = b
    raise_q = Matrix.Rotation(theta, 3, "X").to_quaternion()
    print("AIM arms raised %.1f deg, grip z %.3f for an eye line at %.3f" % (math.degrees(theta), zb, want))

    # Stand where that grip is just behind his head, then walk there.
    A, M_ = clips.solve(fg, lib, ts, FIRE, fix=(raise_q.to_matrix(), lift))
    g_char = grip(A, M_).translation
    x = head.x + GRIP_SIDE - g_char.x
    stop = head.y - GRIP_BEHIND - g_char.y
    v = lib.walk_speed("Walk_Formal_Loop") * fg.leg / lib.leg
    n_walk = round((stop - WALK_FROM) / v * FPS)
    walk0 = WALK_STOP - n_walk
    rate = 1.0
    if walk0 < DOOR_OPEN[0] + 6:
        walk0 = DOOR_OPEN[0] + 6
        rate = n_walk / (WALK_STOP - walk0)
    print("WALK %.2f m/s, %.1f m from y %.2f to %.2f, frames %d to %d at %.2fx" % (
        v, stop - WALK_FROM, WALK_FROM, stop, walk0, WALK_STOP, rate))
    ts.segs[0] = (0, walk0, "Idle_Loop", 0.0, 1.0, True, 4)
    ts.segs[1] = (walk0, WALK_STOP, "Walk_Formal_Loop", 0.0, rate, True, 4)
    ts.hold(0, walk0, x, WALK_FROM, 0.0)
    ts.move(walk0, WALK_STOP, (x, WALK_FROM), (x, stop), 0.0)
    ts.hold(WALK_STOP, LEAVE, x, stop, 0.0)
    pelvis0 = clips.pose_world(fg, lib, ts, LEAVE)[2]
    hips_yaw, stride, clock, plan = walk_away(ts, (x, stop), pelvis0, v, FPS, END)
    ts.play(LEAVE, END, "Walk_Formal_Loop", t0=lambda f: clock[f], blend=round(TURN_EASE * FPS))
    print("TURN to the right, hips from frame %d to %d, chest %d and head %d frames ahead; heading %.1f" % (
        TURN_FROM, TURN_END, LEAD_CHEST, LEAD_HEAD, hips_yaw(END)))
    ts.layers.append(turn_lead(hips_yaw))
    ts.legs = gait.Gait(fg, lib, ts, range(TURN_FROM, END + 1), lambda f: stride[f], plan)
    for f, side, length, turned in ts.legs.report():
        print("STEP %s comes down at frame %d (%.2f s): %.2f m from where it stood, turned %+.0f deg" % (
            side, f, f / FPS, length, turned))

    def weight(f):
        if f <= WALK_STOP or f >= 274:
            return 0.0
        if f < 212:
            u = (f - WALK_STOP) / (212 - WALK_STOP)
        elif f > 262:
            u = (274 - f) / 12.0
        else:
            u = 1.0
        return u * u * (3 - 2 * u)

    def fix_at(f):
        w = weight(f)
        return (Quaternion().slerp(raise_q, w).to_matrix(), lift) if w > 0 else None

    # The gun: gripped so that, at the shot, its barrel runs at his head.
    muzzle_local = muzzle.matrix_local.copy()
    A, M_ = clips.solve(fg, lib, ts, FIRE, fix=fix_at(FIRE))
    H = fg.tail_frame(A, M_, "hand_r")
    origin = grip(A, M_).translation
    up = Vector((0, 0, 1))
    G = Matrix.Identity(4)
    for _ in range(6):
        G = Matrix.Translation(origin)
        mz = origin
        R = Matrix.Identity(3)
        for _ in range(6):
            d = (head - mz).normalized()
            zx = -d
            xx = up.cross(zx).normalized()
            yy = zx.cross(xx)
            R = Matrix((xx, yy, zx)).transposed()
            mz = origin + R @ muzzle_local.translation
        G = Matrix.Translation(origin) @ R.to_4x4()
    gun.parent = fg.arm
    gun.parent_type = "BONE"
    gun.parent_bone = "hand_r"
    gun.matrix_parent_inverse = Matrix.Identity(4)
    gun.matrix_basis = H.inverted() @ G
    a = (G @ muzzle_local).translation
    print("AIM muzzle %s, head %s, %.2f m apart" % (tuple(round(c, 2) for c in a),
                                                    tuple(round(c, 2) for c in head), (head - a).length))

    # From the shot on he is a ragdoll: simulated once, baked to his bones.
    d = ((head - a).normalized() + Vector((PUSH_SIDE, 0, 0))).normalized()
    chest = ragdoll.part_centre(pr, Ap, Mp, "chest")
    track, start = ragdoll.simulate(pr, Ap, Mp, F(FIRE), F(END), COLLIDERS, [
        (head - d * 0.12, 0.15, "head", PUSH_HEAD), (chest - d * 0.15, 0.22, "chest", PUSH_CHEST)])
    prev = {}
    for f in frames:
        if f <= FIRE:
            A, M_ = clips.solve(pr, lib, tp, f)
        else:
            A, M_ = Ap, ragdoll.pose_at(pr, Ap, Mp, track, start, F(f))
        pr.key(F(f), A, M_, prev)
    prev = {}
    for f in frames:
        A, M_ = clips.solve(fg, lib, ts, f, fix=fix_at(f))
        fg.key(F(f), A, M_, prev)
    for f, side, miss in ts.legs.short:
        print("GAIT frame %d: the %s leg falls %.1f cm short of its foot" % (f, side, 100 * miss))
    lib.remove()
    return pr, fg, stamps, a, head, stop


# ---------------------------------------------------------------- effects
def press_motion(ram, wheel, stamp_frames):
    key(ram, 0, loc=(0, 0, 1.95))
    for fi in stamp_frames:
        key(ram, fi - 3, loc=(0, 0, 1.95))
        key(ram, fi, loc=(0, 0, 0.95))   # down onto the plate's relief
        key(ram, fi + 2, loc=(0, 0, 0.95))
        key(ram, fi + 6, loc=(0, 0, 1.95))
    key(wheel, 0, rot=(0, 0, 0))
    key(wheel, END, rot=(360 * END / 10.0, 0, 0))
    for fc in wheel.animation_data.action.fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = "LINEAR"


def sparks(stamp_frames, origin):
    ld = bpy.data.lights.new("spark_light", "POINT")
    ld.color = hexcol("#FFA040")[:3]
    ld.shadow_soft_size = 0.05
    lo = link(bpy.data.objects.new("spark_light", ld))
    lo.location = (origin[0], origin[1] - 0.2, origin[2] + 0.1)
    ld.energy = 0
    ld.keyframe_insert("energy", frame=F(0))
    for fi in stamp_frames:
        for f, e in ((fi - 1, 0), (fi, 60), (fi + 1, 30), (fi + 3, 6), (fi + 4, 0)):
            ld.energy = e
            ld.keyframe_insert("energy", frame=F(f))
    import random
    rng = random.Random(7)
    vels = [Vector((rng.uniform(-1.6, 1.6), rng.uniform(-2.2, -0.6), rng.uniform(0.6, 2.4)))
            for _ in range(14)]
    for i, v in enumerate(vels):
        s = box("spark", (0.012, 0.012, 0.03), origin, M["spark"])
        key_hide(s, 0, True)
        for fi in stamp_frames:
            key_hide(s, fi - 1, True)
            for t in range(0, 6):
                dt = t / FPS
                p = Vector(origin) + v * dt + Vector((0, 0, -4.9 * dt * dt))
                key(s, fi + t, loc=tuple(p))
            key_hide(s, fi, False)
            key_hide(s, fi + 5, True)


def photon(muzzle, glow, a, b):
    """Charge, the bolt, the flash. The hit is the flash: no wound on screen."""
    ld = bpy.data.lights.new("photon_light", "POINT")
    ld.color = hexcol("#3EE0FF")[:3]
    ld.shadow_soft_size = 0.02
    lo = link(bpy.data.objects.new("photon_light", ld))
    lo.parent = muzzle
    for f, e in ((0, 0), (CHARGE[0], 0), (CHARGE[0] + 18, 25), (FIRE - 1, 70), (FIRE, 6000),
                 (FIRE + 1, 900), (FIRE + 3, 0)):
        ld.energy = e
        ld.keyframe_insert("energy", frame=F(f))
    em = glow.data.materials[0].node_tree.nodes["Principled BSDF"].inputs["Emission Strength"]
    for f, e in ((0, 0), (CHARGE[0], 0), (FIRE - 1, 60), (FIRE, 300), (FIRE + 2, 4), (FIRE + 12, 0)):
        em.default_value = e
        em.keyframe_insert("default_value", frame=F(f))
    for f, s in ((0, 0.2), (CHARGE[0], 0.2), (FIRE - 1, 1.6), (FIRE, 2.6), (FIRE + 2, 0.6)):
        key(glow, f, scale=(s, s, s))
    # The bolt, placed where the muzzle and his head are on the frame it fires.
    scn = bpy.context.scene
    mid, d = (a + b) / 2, (b - a)
    bolt = cyl("bolt", 0.012, d.length, tuple(mid), M["bolt"], seg=6)
    bolt.rotation_euler = d.to_track_quat("Z", "Y").to_euler()
    key_hide(bolt, 0, True)
    key_hide(bolt, FIRE, False)
    key_hide(bolt, FIRE + 1, True)
    # Smoke curling off the muzzle afterwards.
    smoke = ball("muzzle_smoke", 0.05, (0, 0, 0), M["smoke"], muzzle, seg=8)
    key_hide(smoke, 0, True)
    key_hide(smoke, FIRE + 2, False)
    for f, s, z in ((FIRE + 2, 0.4, 0.0), (FIRE + 20, 1.6, 0.06), (FIRE + 40, 2.4, 0.12)):
        key(smoke, f, scale=(s, s, s), loc=(0, z, -0.02))
    key_hide(smoke, FIRE + 40, True)


# ---------------------------------------------------------------- light
def lights():
    w = bpy.data.worlds.new("world")
    bpy.context.scene.world = w
    w.use_nodes = True
    w.node_tree.nodes["Background"].inputs["Color"].default_value = hexcol("#05070C")
    w.node_tree.nodes["Background"].inputs["Strength"].default_value = 1.0
    # Moonlight through the barred windows on the -X wall.
    sd = bpy.data.lights.new("moon", "SUN")
    sd.energy = 4.0
    sd.angle = math.radians(0.6)
    sd.color = hexcol("#9DB8FF")[:3]
    so = link(bpy.data.objects.new("moon", sd))
    so.rotation_euler = look_quat((0, 0, 0), (math.cos(math.radians(36)), 0.18, -math.sin(math.radians(36))))
    # The corridor behind the door: what he walks out of.
    cd = bpy.data.lights.new("corridor", "AREA")
    cd.energy = 900
    cd.size = 2.6
    cd.color = hexcol("#DDE6FF")[:3]
    co = link(bpy.data.objects.new("corridor", cd))
    co.location = (0, -12.2, 2.95)
    # A cold fill so the far shop isn't pitch black.
    fd = bpy.data.lights.new("fill", "AREA")
    fd.energy = 120
    fd.size = 8
    fd.color = hexcol("#5A7A9A")[:3]
    fo = link(bpy.data.objects.new("fill", fd))
    fo.location = (0, -3, 5.8)


# ---------------------------------------------------------------- cameras
def camera(name, loc, target, lens, loc_end=None, target_end=None, span=None):
    cd = bpy.data.cameras.new(name)
    cd.lens = lens
    cd.clip_start = 0.05
    cam = link(bpy.data.objects.new(name, cd))
    tgt = empty(name + "_target", target)
    c = cam.constraints.new("TRACK_TO")
    c.target = tgt
    c.track_axis = "TRACK_NEGATIVE_Z"
    c.up_axis = "UP_Y"
    cam.location = loc
    if loc_end:
        key(cam, span[0], loc=loc)
        key(cam, span[1], loc=loc_end)
        key(tgt, span[0], loc=target)
        key(tgt, span[1], loc=target_end)
    return cam


S9_RISE = (312, 344)   # behind the bed to straight overhead, then hold
S9_TILT = 65.0         # degrees off vertical at the start
S9_LENS = 28.0         # mm, on Blender's 36 mm wide sensor
# The overhead hold frames the plate exactly as the end card frames the 3D logo:
# centred, the frame's width this share of the picture (finish.py's WIDTH). The
# plate is the render's frame at the render's proportions (3.584 : 1 against
# 3840 x 1071), so the dissolve is a cross-fade with nothing moving or scaling.
LOGO_FILL = 0.84
S9_DIST = PLATE_W * S9_LENS / (36.0 * LOGO_FILL)   # to the plate's face, about 0.57 m


def plate_camera(name, lens=S9_LENS):
    """Arcs over the plate from behind the bed to straight above it, always
    aimed at its centre, and rolled so the lockup reads upright the whole way."""
    cd = bpy.data.cameras.new(name)
    cd.lens = lens
    cd.sensor_fit = "HORIZONTAL"
    cd.sensor_width = 36.0
    cd.clip_start = 0.02
    cam = link(bpy.data.objects.new(name, cd))
    P = Vector(LAST_PLATE) + Vector((0, 0, PLATE_T / 2))   # the plate's face
    for f in range(S9_RISE[0], END + 1):
        u = min(1.0, max(0.0, (f - S9_RISE[0]) / (S9_RISE[1] - S9_RISE[0])))
        u = u * u * (3 - 2 * u)
        t = math.radians(S9_TILT) * (1 - u)
        cam.location = P + Vector((0, math.sin(t), math.cos(t))) * S9_DIST
        cam.rotation_euler = (t, 0, math.pi)
        cam.keyframe_insert("location", frame=F(f))
        cam.keyframe_insert("rotation_euler", frame=F(f))
    return cam


def cameras(stop):
    cams = {
        "S1 establishing": camera("cam_S1", (5.8, -8.8, 5.0), (-0.6, -2.0, 0.6), 22,
                                  (3.6, -5.2, 3.2), (0.0, 0.2, 1.1), (0, 60)),
        "S2 stamp insert": camera("cam_S2", (-0.85, PRESS_Y - 0.45, 1.15), (0.05, PRESS_Y, 1.05), 32),
        "S3 door behind him": camera("cam_S3", (1.3, 1.3, 1.6), (-1.6, -4.5, 1.4), 28),
        "S4 walk, low": camera("cam_S4", (0.65, -2.7, 0.22), (-0.2, -8.0, 0.75), 26),
        "S5 his face": camera("cam_S5", (0.1, 1.55, 1.62), (0.0, PR_Y, 1.64), 55,
                              (0.08, 1.35, 1.63), (0.0, PR_Y, 1.66), (195, 228)),
        "S6 over the shooter": camera("cam_S6", (0.55, stop - 1.4, 1.9), (-0.05, PR_Y + 0.3, 1.5), 32),
        "S7 flash": None,
        "S8 wide, aftermath": camera("cam_S8", (5.2, -1.4, 1.7), (-0.3, -0.8, 1.05), 26),
        "S9 the last plate": plate_camera("cam_S9"),
    }
    cams["S7 flash"] = cams["S6 over the shooter"]
    scn = bpy.context.scene
    for name, s, e in SHOTS:
        m = scn.timeline_markers.new(name, frame=F(s))
        m.camera = cams[name]
    scn.camera = cams["S1 establishing"]
    return cams


def plate_on_screen(plate, cam, out):
    """Where the plate's frame sits in S9's last frame, as fractions of the
    picture, for finish.py to lay the 3D logo exactly over it."""
    from bpy_extras.object_utils import world_to_camera_view
    scn = bpy.context.scene
    scn.frame_set(F(END))
    w, h = plate_size()
    pts = [world_to_camera_view(scn, cam, plate.matrix_world @ Vector((sx * w / 2, sy * h / 2, PLATE_T / 2)))
           for sx in (-1, 1) for sy in (-1, 1)]
    xs, ys = [p.x for p in pts], [1 - p.y for p in pts]
    res = scn.render
    box_ = {"cx": (min(xs) + max(xs)) / 2, "cy": (min(ys) + max(ys)) / 2,
            "w": max(xs) - min(xs), "h": max(ys) - min(ys),
            "aspect_px": (max(xs) - min(xs)) * res.resolution_x / ((max(ys) - min(ys)) * res.resolution_y)}
    os.makedirs(out, exist_ok=True)
    json.dump(box_, open(os.path.join(out, "s9_plate.json"), "w"), indent=1)
    print("S9 plate on screen: centre %.4f %.4f, %.2f %% of the width, %.3f : 1" % (
        box_["cx"], box_["cy"], 100 * box_["w"], box_["aspect_px"]))
    scn.frame_set(F(0))


def retime(out):
    """Render the 15 fps cut at OUT_FPS: time stretching evaluates story frame
    n at output frame n * OUT_FPS / FPS. The frame range is in output frames;
    the markers (the cuts) stay in story frames, because Blender switches
    cameras on the stretched time. finish.py reads the mapping from timing.json."""
    scn = bpy.context.scene
    k = OUT_FPS / FPS
    scn.render.fps = OUT_FPS
    scn.render.frame_map_old = FPS
    scn.render.frame_map_new = OUT_FPS
    scn.frame_start, scn.frame_end = 0, int(round(F(END) * k))
    timing = {"story_fps": FPS, "fps": OUT_FPS, "first": 0, "last": scn.frame_end,
              "trans": [int(round(TRANS[0] * k)), int(round(TRANS[1] * k))],
              "hold": int(round(LOGO_HOLD * k))}
    json.dump(timing, open(os.path.join(out, "timing.json"), "w"), indent=1)
    print("RETIME %d fps: output frames %d to %d, dissolve %s, logo hold %d frames" % (
        OUT_FPS, 0, scn.frame_end, timing["trans"], timing["hold"]))


def grading():
    """The flash on the shot and the fade out, on the film's exposure."""
    scn = bpy.context.scene
    for f, e in ((0, 0.0), (FIRE - 1, 0.0), (FIRE, 2.5), (FIRE + 1, 7.0), (FIRE + 2, 7.0),
                 (FIRE + 3, 0.0)):
        scn.view_settings.exposure = e
        scn.keyframe_insert("view_settings.exposure", frame=F(f))
    for fc in scn.animation_data.action.fcurves:
        if fc.data_path == "view_settings.exposure":
            for kp in fc.keyframe_points:
                kp.interpolation = "CONSTANT"


# ---------------------------------------------------------------- main
def main():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    out = argv[argv.index("--out") + 1] if "--out" in argv else os.getcwd()
    for ob in list(bpy.data.objects):
        bpy.data.objects.remove(ob)
    scn = bpy.context.scene
    scn.render.fps = FPS
    scn.frame_start, scn.frame_end = F(0), F(END)

    materials()
    plate_materials()
    surfaces.apply(M)
    room()
    ram, wheel = shop_props()
    # The last plate he stamped, on the bed; the line's plates are copies of it.
    last = logo_plate("last_plate", LAST_PLATE)
    last.rotation_euler = (0, 0, math.pi)   # its top toward him: reads from behind the bed, where S9 looks from
    conveyor(copy_plate(last, "belt_plate_0", (0, 0, 0)))
    gun, muzzle, glow = build_gun()
    pr, fg, stamp, a, head, stop = cast(gun, muzzle)
    press_motion(ram, wheel, stamp)
    sparks(stamp, (0.0, PRESS_Y - 0.15, 0.95))
    lights()
    photon(muzzle, glow, a, head)
    cams = cameras(stop)
    grading()
    plate_on_screen(last, cams["S9 the last plate"], out)

    r = scn.render
    r.engine = "CYCLES"
    lo = "--lo" in argv   # a quick look: 192 x 108
    final = "--final" in argv   # the picture inside a 640 x 480 letterbox, with motion blur
    size = (192, 108) if lo else (640, 360) if final else (768, 432)
    r.resolution_x, r.resolution_y, r.resolution_percentage = size[0], size[1], 100
    r.use_motion_blur = final
    r.motion_blur_shutter = 0.5          # a 180 degree shutter: 1/30 s at 15 fps
    r.use_persistent_data = True
    r.filepath = os.path.join(out, "frames", "f_")
    r.image_settings.file_format = "PNG"
    cy = scn.cycles
    cy.device = "CPU"
    cy.samples = 24 if lo else 32 if final else 16
    cy.use_adaptive_sampling = True
    cy.use_denoising = True
    cy.max_bounces = 4
    cy.volume_bounces = 0
    cy.volume_step_rate = 4.0
    cy.sample_clamp_indirect = 5
    # Late-90s CG did not tone map: hard clipped sRGB.
    scn.view_settings.view_transform = "Standard"
    scn.view_settings.look = "None"
    scn.frame_set(F(0))
    os.makedirs(out, exist_ok=True)
    retime(out)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out, "scene.blend"))
    print("SAVED", os.path.join(out, "scene.blend"))


main()
