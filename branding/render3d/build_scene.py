"""Build the Heavy Photon lockup as a 3D scene in Blender and render it.

    blender -b --factory-startup -P build_scene.py -- \\
        --material hull_panels --light studio \\
        --width 1566 --samples 64 --out out/hull_panels-studio.png \\
        [--view logo|gun|hero] [--save out/scene.blend]

The default view looks square-on at the original's own crop, grown by the
frame, through a 45 degree lens; --width 3840 is 4K.

The geometry comes from shapes.json (python3 svg_shapes.py), the surface
textures from textures/ (python3 materials.py; python3 mm_export.py textures
materials/*.ptex). Every part of raygun-v2-branded.svg is extruded on its own
so the gun reads as an assembly: the fins stand proud, the muzzle ring is
the fattest piece, HEAVY is a raised ink plate across the body and barrel,
and PHOTON stands out of the front of a glowing, volumetric beam.

Units: one SVG px is 1 cm, so the lockup is about 16 m wide. Front is -Y,
toward the camera.
"""
import argparse
import json
import math
import os
import sys

import bmesh
import bpy
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
TEX = os.path.join(HERE, "textures")

S = 0.01            # SVG px -> metres
CX, CY = 820, 270   # middle of the lockup, SVG px

BONE = "#F2F0E9"
INK = "#0B0E14"
CYAN = "#3EE0FF"
CYAN_HOT = "#B9F4FF"

# (back, front) in SVG px along the depth axis, and the bevel radius in px.
DEPTH = {
    "hull": (-60, 60, 4), "sight": (-38, 38, 4), "grip": (-44, 44, 4),
    "trigger": (-14, 14, 3), "tip": (-30, 30, 3),
    "fin-1": (-82, 82, 2.5), "fin-2": (-72, 72, 2.5), "fin-3": (-62, 62, 2.5),
    "rail": (54, 64, 1.5),
}
HEAVY_DEPTH = (0, 72, 2.5)      # 12 px proud of the hull
BEAM_DEPTH = (-55, 55, 22)
BEAM_REACH = 2600               # the beam runs on past the frame's edge
PHOTON_DEPTH = (10, 76, 2.5)    # 21 px out of the beam's front face


def hex_lin(h):
    """sRGB hex -> linear RGBA, which is what node colour sockets take."""
    h = h.lstrip("#")
    out = []
    for i in (0, 2, 4):
        c = int(h[i:i + 2], 16) / 255
        out.append(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4)
    return (*out, 1.0)


# --------------------------------------------------------------------------
# Geometry

def svg_to_xz(x, y):
    return (x - CX) * S, -(y - CY) * S


def solid_from_polys(name, polys, back, front, bevel, bevel_res=3):
    """Extrude 2D outlines (with holes) into a bevelled solid mesh object.

    Uses a filled 2D curve, which handles holes and rounds every edge, then
    bakes it to a mesh so it can carry UVs. The curve's offset pulls the
    bevel inside the outline, so the silhouette matches the SVG exactly."""
    cu = bpy.data.curves.new(name, "CURVE")
    cu.dimensions = "2D"
    cu.fill_mode = "BOTH"
    half = (front - back) / 2 * S
    b = min(bevel * S, half * 0.9)
    cu.bevel_depth = b
    cu.bevel_resolution = bevel_res
    cu.extrude = max(half - b, 1e-4)
    cu.offset = -b
    for poly in polys:
        for loop in [poly["outer"]] + poly["holes"]:
            sp = cu.splines.new("POLY")
            sp.points.add(len(loop) - 1)
            for p, (x, y) in zip(sp.points, loop):
                X, Z = svg_to_xz(x, y)
                p.co = (X, Z, 0, 1)
            sp.use_cyclic_u = True
    tmp = bpy.data.objects.new(name + "_curve", cu)
    bpy.context.scene.collection.objects.link(tmp)
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(tmp.evaluated_get(dg))
    bpy.data.objects.remove(tmp)
    bpy.data.curves.remove(cu)
    # Curve space: X right, Y up, Z out of the page. World: front is -Y.
    mid = (front + back) / 2 * S
    for v in me.vertices:
        x, y, z = v.co
        v.co = (x, -(z + mid), y)
    me.shade_smooth()
    me.set_sharp_from_angle(angle=math.radians(40))
    box_uv(me)
    ob = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def box_uv(me):
    """World-space box projection in metres: each face takes the two axes its
    normal is not facing along. The material's mapping node sets the tile."""
    bm = bmesh.new()
    bm.from_mesh(me)
    uv = bm.loops.layers.uv.new("UVMap")
    for f in bm.faces:
        n = f.normal
        ax = max(range(3), key=lambda i: abs(n[i]))
        for lp in f.loops:
            c = lp.vert.co
            if ax == 0:
                lp[uv].uv = (c.y, c.z)
            elif ax == 1:
                lp[uv].uv = (c.x, c.z)
            else:
                lp[uv].uv = (c.x, c.y + 0.37)
    bm.to_mesh(me)
    bm.free()


def build_logo(mats, reach=BEAM_REACH):
    data = json.load(open(os.path.join(HERE, "shapes.json")))
    parts = {p["name"]: p for p in data["parts"]}
    objs = {}
    for name, p in parts.items():
        role = p["role"]
        if role in ("gun", "fin", "rail"):
            back, front, bev = DEPTH[name]
        elif role == "heavy":
            back, front, bev = HEAVY_DEPTH
        elif role == "photon":
            back, front, bev = PHOTON_DEPTH
        elif role == "beam":
            continue
        ob = solid_from_polys(name, p["polys"], back, front, bev)
        if role == "rail":
            ob.data.materials.append(mats["rail"])
        elif role == "heavy":
            ob.data.materials.append(mats["ink"])
        elif role == "photon":
            ob.data.materials.append(mats["gun"] if p["fill"] == BONE.lower() else mats["ink"])
        else:
            ob.data.materials.append(mats["gun"])
        objs[name] = ob

    # The beam: the SVG's trapezoid nozzle and slab, carried on to reach (past
    # the edge of frame, or in under the frame's right side), with a hot core
    # running down its middle.
    beam = parts["beam"]["polys"][0]["outer"]
    beam = [[reach if x >= 1600 else x, y] for x, y in beam]
    back, front, bev = BEAM_DEPTH
    shell = solid_from_polys("beam", [{"outer": beam, "holes": []}], back, front, bev, 4)
    shell.data.materials.append(mats["beam"])
    shell.visible_shadow = False
    core = [[618, 224], [705, 214], [reach, 214], [reach, 242], [705, 242], [618, 234]]
    core_ob = solid_from_polys("beam_core", [{"outer": core, "holes": []}], -10, 10, 6, 3)
    core_ob.data.materials.append(mats["core"])
    core_ob.visible_shadow = False
    objs["beam"], objs["beam_core"] = shell, core_ob

    # A light inside the beam does the beam's lighting: cleaner than asking
    # the path tracer to find a thin emissive slab, and it puts the cyan on
    # the gun, the letters' edges, the haze and the floor.
    # Facing the camera, the floor and the ceiling. A light points down its
    # local -Z, so -90 degrees about X turns it toward -Y, the camera.
    for i, (rot, energy) in enumerate([((math.radians(-90), 0, 0), 0.5),
                                       ((0, 0, 0), 0.35), ((math.pi, 0, 0), 0.2)]):
        ld = bpy.data.lights.new("beam_light_%d" % i, "AREA")
        ld.shape = "RECTANGLE"
        ld.size, ld.size_y = 16.0, 1.0
        ld.color = hex_lin(CYAN)[:3]
        ld.energy = 0
        lo = bpy.data.objects.new(ld.name, ld)
        lo["share"] = energy
        lo.location = ((700 + 1600) / 2 * S - CX * S + 1.2, 0.0, -(228 - CY) * S)
        lo.rotation_euler = rot
        lo.visible_camera = False
        lo.visible_glossy = False
        bpy.context.scene.collection.objects.link(lo)
        objs["beam_light_%d" % i] = lo
    return objs


# The frame, in SVG px: the gap between the original's crop and the frame,
# the frame's border, and any strip of background left outside it (none:
# the crop is the frame). The lockup keeps its size; the canvas grows to
# take the frame, and everything outside the frame renders transparent.
FRAME_GAP, FRAME_BORDER, FRAME_MARGIN = 22, 34, 0
FRAME_DEPTH = (-40, 95, 12)     # back, front, chamfer: proud of everything
FRAME_CUT = 16                  # corner cut on the inside edge


def chamfer_rect(x0, y0, x1, y1, c):
    return [[x0 + c, y0], [x1 - c, y0], [x1, y0 + c], [x1, y1 - c],
            [x1 - c, y1], [x0 + c, y1], [x0, y1 - c], [x0, y0 + c]]


def frame_rect(grow):
    """The original's crop grown by grow px, with its corners cut. Cuts on
    parallel rings grow by (2 - sqrt 2) per px so the chamfers stay parallel."""
    x, y, w, h = VIEWBOX
    g = grow
    cut = FRAME_CUT + (g - FRAME_GAP) * (2 - math.sqrt(2))
    return chamfer_rect(x - g, y - g, x + w + g, y + h + g, cut)


def build_frame(mats):
    """A bevelled gunmetal frame around the lockup, its corners cut like the
    letterforms, with a cyan pinline glowing along the middle of its face.
    The beam runs in under its right-hand side."""
    inner, outer = FRAME_GAP, FRAME_GAP + FRAME_BORDER
    back, front, bev = FRAME_DEPTH
    ring = solid_from_polys("frame", [{"outer": frame_rect(outer),
                                       "holes": [frame_rect(inner)]}],
                            back, front, bev, bevel_res=0)
    ring.data.materials.append(mats["frame"])
    mid = (inner + outer) / 2
    pin = solid_from_polys("frame_pinline", [{"outer": frame_rect(mid + 1.5),
                                              "holes": [frame_rect(mid - 1.5)]}],
                           front - 4, front + 2, 0.8)
    pin.data.materials.append(mats["rail"])

    # Everything outside the frame is transparent: a holdout sheet with the
    # frame's outline cut out of it, seen only by the camera. It sits where
    # the frame's outer wall ends and the chamfer begins, which is the
    # frame's silhouette from a camera square to it.
    x, y, w, h = VIEWBOX
    far = 5000
    sil = front - bev
    cut = solid_from_polys("outside", [{"outer": [[x - far, y - far], [x + w + far, y - far],
                                                  [x + w + far, y + h + far], [x - far, y + h + far]],
                                        "holes": [frame_rect(outer)]}],
                           sil - 0.05, sil, 0, bevel_res=0)
    hold = bpy.data.materials.new("outside_frame")
    hnt, hN, hL = nodes_of(hold)
    hL.new(hN.new("ShaderNodeHoldout").outputs["Holdout"],
           hN.new("ShaderNodeOutputMaterial").inputs["Surface"])
    cut.data.materials.append(hold)
    for attr in ("visible_diffuse", "visible_glossy", "visible_transmission",
                 "visible_volume_scatter", "visible_shadow"):
        setattr(cut, attr, False)
    return ring, pin


# --------------------------------------------------------------------------
# Materials

def nodes_of(mat):
    mat.use_nodes = True
    nt = mat.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    return nt, nt.nodes, nt.links


def tex_set(nt, name, tile):
    """Image nodes for one Material Maker export, sharing one mapping."""
    N, L = nt.nodes, nt.links
    tc = N.new("ShaderNodeTexCoord")
    mp = N.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (1 / tile, 1 / tile, 1)
    L.new(tc.outputs["UV"], mp.inputs["Vector"])
    out = {}
    for ch, ext, cs in (("albedo", "png", "sRGB"), ("rough", "exr", "Non-Color"),
                        ("metal", "exr", "Non-Color"), ("displace", "exr", "Non-Color")):
        path = os.path.join(TEX, "%s_%s.%s" % (name, ch, ext))
        if not os.path.exists(path):
            continue
        im = bpy.data.images.load(path, check_existing=True)
        im.colorspace_settings.name = cs
        t = N.new("ShaderNodeTexImage")
        t.image = im
        t.interpolation = "Cubic" if ch == "displace" else "Linear"
        L.new(mp.outputs["Vector"], t.inputs["Vector"])
        out[ch] = t
    return out


def principled_from(nt, name, tile, bump, coat=0.0, coat_rough=0.05, grime=0.0,
                    aniso=0.0):
    """A Principled BSDF fed by one Material Maker texture set. grime darkens
    the albedo where Cycles' AO finds a crevice, so parts that meet (fins on
    the body, letters on the plate) settle into each other. aniso brushes the
    highlight along the UV's U, which runs along the gun."""
    N, L = nt.nodes, nt.links
    t = tex_set(nt, name, tile)
    bsdf = N.new("ShaderNodeBsdfPrincipled")
    col = t["albedo"].outputs["Color"]
    if grime > 0:
        ao = N.new("ShaderNodeAmbientOcclusion")
        ao.samples = 8
        ao.inputs["Distance"].default_value = 0.35
        g = N.new("ShaderNodeMapRange")
        g.inputs["To Min"].default_value = 1.0 - grime
        L.new(ao.outputs["AO"], g.inputs["Value"])
        mix = N.new("ShaderNodeMix")
        mix.data_type = "RGBA"
        mix.blend_type = "MULTIPLY"
        mix.inputs["Factor"].default_value = 1
        L.new(col, mix.inputs["A"])
        L.new(g.outputs["Result"], mix.inputs["B"])
        col = mix.outputs["Result"]
    L.new(col, bsdf.inputs["Base Color"])
    L.new(t["rough"].outputs["Color"], bsdf.inputs["Roughness"])
    L.new(t["metal"].outputs["Color"], bsdf.inputs["Metallic"])
    if "displace" in t and bump > 0:
        bp = N.new("ShaderNodeBump")
        bp.invert = True
        bp.inputs["Strength"].default_value = 1.0
        bp.inputs["Distance"].default_value = bump
        L.new(t["displace"].outputs["Color"], bp.inputs["Height"])
        L.new(bp.outputs["Normal"], bsdf.inputs["Normal"])
    if aniso > 0:
        tg = N.new("ShaderNodeTangent")
        tg.direction_type = "UV_MAP"
        tg.uv_map = "UVMap"
        L.new(tg.outputs["Tangent"], bsdf.inputs["Tangent"])
        bsdf.inputs["Anisotropic"].default_value = aniso
    bsdf.inputs["Coat Weight"].default_value = coat
    bsdf.inputs["Coat Roughness"].default_value = coat_rough
    return bsdf


# Finishes the gun can wear: Material Maker texture set, tile size in metres,
# bump distance, clear coat, crevice grime, anisotropy.
FINISHES = {
    "bone_enamel":    dict(tex="bone_enamel", tile=2.4, bump=0.03, coat=0.25, grime=0.35,
                           chip=True),
    "brushed_steel":  dict(tex="brushed_steel", tile=3.0, bump=0.012, grime=0.3, aniso=0.6),
    "polished_brass": dict(tex="polished_brass", tile=2.0, bump=0.03, grime=0.35),
    "gloss_ceramic":  dict(tex="gloss_ceramic", tile=2.5, bump=0.01, coat=1.0, grime=0.2),
    "hull_panels":    dict(tex="hull_panels", tile=2.2, bump=0.02, coat=0.15, grime=0.4),
}


def gun_material(finish):
    f = FINISHES[finish]
    mat = bpy.data.materials.new("gun_" + finish)
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    paint = principled_from(nt, f["tex"], f["tile"], f["bump"], coat=f.get("coat", 0.0),
                            grime=f.get("grime", 0.0), aniso=f.get("aniso", 0.0))
    if not f.get("chip"):
        L.new(paint.outputs["BSDF"], out.inputs["Surface"])
        return mat
    # Chipped enamel: paint knocked off the corners shows steel. The corner
    # mask is a Cycles bevel wider than the mesh's own rounding, compared
    # with the true normal, and it is multiplied by Material Maker's chip
    # mask so the wear is broken up, not a clean stripe.
    steel = principled_from(nt, "brushed_steel", 3.0, 0.012, aniso=0.5)
    bev = N.new("ShaderNodeBevel")
    bev.samples = 8
    bev.inputs["Radius"].default_value = 0.12
    geo = N.new("ShaderNodeNewGeometry")
    dot = N.new("ShaderNodeVectorMath")
    dot.operation = "DOT_PRODUCT"
    L.new(bev.outputs["Normal"], dot.inputs[0])
    L.new(geo.outputs["Normal"], dot.inputs[1])
    edge = N.new("ShaderNodeMapRange")
    edge.inputs["From Min"].default_value = 0.995
    edge.inputs["From Max"].default_value = 0.94
    L.new(dot.outputs["Value"], edge.inputs["Value"])
    wear = tex_set(nt, "wear_mask", 1.2)["albedo"]
    m = N.new("ShaderNodeMath")
    m.operation = "MULTIPLY"
    L.new(edge.outputs["Result"], m.inputs[0])
    L.new(wear.outputs["Color"], m.inputs[1])
    cut = N.new("ShaderNodeMapRange")
    cut.inputs["From Min"].default_value = 0.2
    cut.inputs["From Max"].default_value = 0.3
    L.new(m.outputs["Value"], cut.inputs["Value"])
    mix = N.new("ShaderNodeMixShader")
    L.new(cut.outputs["Result"], mix.inputs["Fac"])
    L.new(paint.outputs["BSDF"], mix.inputs[1])
    L.new(steel.outputs["BSDF"], mix.inputs[2])
    L.new(mix.outputs["Shader"], out.inputs["Surface"])
    return mat


def frame_material():
    mat = bpy.data.materials.new("frame")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    bsdf = principled_from(nt, "gunmetal", 3.0, 0.012, grime=0.3, aniso=0.5)
    L.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def ink_material():
    mat = bpy.data.materials.new("ink")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    bsdf = principled_from(nt, "ink_gloss", 1.5, 0.002, coat=0.4, coat_rough=0.08)
    L.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def emissive(name, color, strength):
    mat = bpy.data.materials.new(name)
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    em = N.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = hex_lin(color)
    em.inputs["Strength"].default_value = strength
    L.new(em.outputs["Emission"], out.inputs["Surface"])
    return mat


def beam_material(glow):
    """The beam: a clear skin with a lit rim and a faint gloss, filled with
    turbulent plasma that is white-hot on the axis and falls off to cyan and
    then blue at the walls."""
    mat = bpy.data.materials.new("beam")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    lw = N.new("ShaderNodeLayerWeight")
    lw.inputs["Blend"].default_value = 0.3
    rim = N.new("ShaderNodeMath")
    rim.operation = "MULTIPLY_ADD"
    rim.inputs[1].default_value = 1.6 * glow
    rim.inputs[2].default_value = 0.05 * glow
    L.new(lw.outputs["Facing"], rim.inputs[0])
    em = N.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = hex_lin(CYAN)
    L.new(rim.outputs["Value"], em.inputs["Strength"])
    gloss = N.new("ShaderNodeBsdfGlossy")
    gloss.inputs["Roughness"].default_value = 0.08
    gmix = N.new("ShaderNodeMixShader")
    gmix.inputs["Fac"].default_value = 0.12
    tr = N.new("ShaderNodeBsdfTransparent")
    L.new(tr.outputs["BSDF"], gmix.inputs[1])
    L.new(gloss.outputs["BSDF"], gmix.inputs[2])
    add = N.new("ShaderNodeAddShader")
    L.new(gmix.outputs["Shader"], add.inputs[0])
    L.new(em.outputs["Emission"], add.inputs[1])
    L.new(add.outputs["Shader"], out.inputs["Surface"])

    # Distance from the beam's axis, 0 on the axis and 1 at the walls.
    tc = N.new("ShaderNodeTexCoord")
    off = N.new("ShaderNodeVectorMath")
    off.operation = "MULTIPLY_ADD"
    off.inputs[1].default_value = (0.0, 1.0, 1.0)
    off.inputs[2].default_value = (0.0, 0.0, (228 - CY) * S)
    L.new(tc.outputs["Object"], off.inputs[0])
    ln = N.new("ShaderNodeVectorMath")
    ln.operation = "LENGTH"
    L.new(off.outputs["Vector"], ln.inputs[0])
    fall = N.new("ShaderNodeMapRange")
    fall.inputs["From Min"].default_value = 0.0
    fall.inputs["From Max"].default_value = 0.8
    fall.inputs["To Min"].default_value = 1.0
    fall.inputs["To Max"].default_value = 0.0
    L.new(ln.outputs["Value"], fall.inputs["Value"])
    pw = N.new("ShaderNodeMath")
    pw.operation = "POWER"
    pw.inputs[1].default_value = 1.6
    L.new(fall.outputs["Result"], pw.inputs[0])

    mp = N.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (0.3, 1.0, 1.0)  # stretched along the beam
    L.new(tc.outputs["Object"], mp.inputs["Vector"])
    noise = N.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 2.2
    noise.inputs["Detail"].default_value = 10
    noise.inputs["Roughness"].default_value = 0.65
    noise.inputs["Distortion"].default_value = 1.2
    L.new(mp.outputs["Vector"], noise.inputs["Vector"])
    turb = N.new("ShaderNodeMapRange")
    turb.inputs["From Min"].default_value = 0.32
    turb.inputs["From Max"].default_value = 0.72
    turb.inputs["To Min"].default_value = 0.15
    turb.inputs["To Max"].default_value = 1.8
    L.new(noise.outputs["Fac"], turb.inputs["Value"])

    shape = N.new("ShaderNodeMath")
    shape.operation = "MULTIPLY"
    L.new(pw.outputs["Value"], shape.inputs[0])
    L.new(turb.outputs["Result"], shape.inputs[1])

    ramp = N.new("ShaderNodeValToRGB")
    cr = ramp.color_ramp
    cr.elements[0].position = 0.0
    cr.elements[0].color = hex_lin("#1D5BFF")
    cr.elements[1].position = 1.0
    cr.elements[1].color = hex_lin("#FFFFFF")
    cr.elements.new(0.35).color = hex_lin(CYAN)
    cr.elements.new(0.75).color = hex_lin(CYAN_HOT)
    L.new(pw.outputs["Value"], ramp.inputs["Fac"])

    vol = N.new("ShaderNodeVolumePrincipled")
    vol.inputs["Color"].default_value = hex_lin(CYAN)
    L.new(ramp.outputs["Color"], vol.inputs["Emission Color"])
    dens = N.new("ShaderNodeMath")
    dens.operation = "MULTIPLY_ADD"
    dens.inputs[1].default_value = 1.2
    dens.inputs[2].default_value = 0.15
    L.new(shape.outputs["Value"], dens.inputs[0])
    L.new(dens.outputs["Value"], vol.inputs["Density"])
    emi = N.new("ShaderNodeMath")
    emi.operation = "MULTIPLY"
    emi.inputs[1].default_value = 8.0 * glow
    L.new(shape.outputs["Value"], emi.inputs[0])
    L.new(emi.outputs["Value"], vol.inputs["Emission Strength"])
    L.new(vol.outputs["Volume"], out.inputs["Volume"])
    return mat


def floor_material(kind):
    mat = bpy.data.materials.new("floor_" + kind)
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    if kind == "resin":
        bsdf = principled_from(nt, "floor_resin", 3.5, 0.003)
    else:  # seamless paper sweep for the product look
        bsdf = N.new("ShaderNodeBsdfPrincipled")
        bsdf.inputs["Base Color"].default_value = hex_lin("#9EA3AB")
        bsdf.inputs["Roughness"].default_value = 0.55
    L.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat


def fog_material(density, aniso, wisps=0.0, color="#FFFFFF", wisp_scale=0.12,
                 nebula=None):
    """Atmosphere for the box around the set. wisps > 0 breaks the density up
    with noise; nebula paints self-lit colour into it."""
    mat = bpy.data.materials.new("fog")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    vol = N.new("ShaderNodeVolumePrincipled")
    vol.inputs["Color"].default_value = hex_lin(color)
    vol.inputs["Anisotropy"].default_value = aniso
    if wisps <= 0 and not nebula:
        vol.inputs["Density"].default_value = density
        mat.cycles.homogeneous_volume = True
    else:
        tc = N.new("ShaderNodeTexCoord")
        noise = N.new("ShaderNodeTexNoise")
        noise.inputs["Scale"].default_value = wisp_scale
        noise.inputs["Detail"].default_value = 6
        noise.inputs["Roughness"].default_value = 0.6
        noise.inputs["Distortion"].default_value = 0.8
        L.new(tc.outputs["Object"], noise.inputs["Vector"])
        mr = N.new("ShaderNodeMapRange")
        mr.inputs["From Min"].default_value = 0.35
        mr.inputs["From Max"].default_value = 0.75
        mr.inputs["To Min"].default_value = density * (1 - wisps)
        mr.inputs["To Max"].default_value = density * (1 + wisps)
        L.new(noise.outputs["Fac"], mr.inputs["Value"])
        L.new(mr.outputs["Result"], vol.inputs["Density"])
        if nebula:
            ramp = N.new("ShaderNodeValToRGB")
            cr = ramp.color_ramp
            cr.elements[0].position = 0.5
            cr.elements[0].color = (0, 0, 0, 1)
            cr.elements[1].position = 0.85
            cr.elements[1].color = hex_lin(nebula[1])
            e = cr.elements.new(0.68)
            e.color = hex_lin(nebula[0])
            L.new(noise.outputs["Fac"], ramp.inputs["Fac"])
            vol.inputs["Emission Strength"].default_value = nebula[2]
            L.new(ramp.outputs["Color"], vol.inputs["Emission Color"])
    L.new(vol.outputs["Volume"], out.inputs["Volume"])
    return mat


# --------------------------------------------------------------------------
# Set, lights, camera

def add_box(name, lo, hi, mat):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    ob.location = [(a + b) / 2 for a, b in zip(lo, hi)]
    ob.scale = [b - a for a, b in zip(lo, hi)]
    ob.data.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def add_gobo(z, x0, x1, y0, y1, slat=0.3, gap=0.45):
    """Venetian-blind slats hung above the frame: a spot shining through them
    stripes the smoke with shafts, the oldest trick in film noir. The slats
    run toward the camera and step across X, so each sheet of light is seen
    edge-on as a band across the frame rather than stacked in depth."""
    mat = bpy.data.materials.new("gobo")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    bsdf = N.new("ShaderNodeBsdfDiffuse")
    bsdf.inputs["Color"].default_value = (0.01, 0.01, 0.01, 1)
    L.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    x = x0
    while x < x1:
        ob = add_box("slat", (x, y0, z), (x + slat, y1, z + 0.06), mat)
        ob.visible_camera = False
        x += slat + gap


def add_floor(z, mat, sweep=False):
    """A floor plane, or for the product look a paper sweep: floor curving
    up into a back wall so there is no horizon line."""
    me = bpy.data.meshes.new("floor")
    bm = bmesh.new()
    if not sweep:
        bmesh.ops.create_grid(bm, x_segments=1, y_segments=1, size=60)
        bm.to_mesh(me)
    else:
        prof = [(-40, z)]
        r, wall_y = 9.0, 9.0
        for i in range(17):
            a = math.radians(90 * i / 16)
            prof.append((wall_y - r + r * math.sin(a), z + r - r * math.cos(a)))
        prof.append((wall_y, z + 30))
        verts = []
        for y, zz in prof:
            verts.append((bm.verts.new((-60, y, zz)), bm.verts.new((60, y, zz))))
        for (a0, a1), (b0, b1) in zip(verts, verts[1:]):
            bm.faces.new((a0, a1, b1, b0))
        bm.normal_update()
        bm.to_mesh(me)
        me.shade_smooth()
    bm.free()
    box_uv(me)
    ob = bpy.data.objects.new("floor", me)
    if not sweep:
        ob.location.z = z
    ob.data.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def add_planet():
    """A planet's limb low in the frame: a dark, cloud-banded surface lit by
    the same sun as the logo, with an atmosphere that glows at the edge."""
    mat = bpy.data.materials.new("planet")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    tc = N.new("ShaderNodeTexCoord")
    mp = N.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (1.0, 1.0, 6.0)  # bands
    L.new(tc.outputs["Object"], mp.inputs["Vector"])
    noise = N.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 0.12
    noise.inputs["Detail"].default_value = 12
    noise.inputs["Distortion"].default_value = 2.5
    L.new(mp.outputs["Vector"], noise.inputs["Vector"])
    ramp = N.new("ShaderNodeValToRGB")
    cr = ramp.color_ramp
    cr.elements[0].color = hex_lin("#05070F")
    cr.elements[1].color = hex_lin("#83769C")
    cr.elements.new(0.5).color = hex_lin("#1D2B53")
    L.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    bsdf = N.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Roughness"].default_value = 0.8
    L.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    lw = N.new("ShaderNodeLayerWeight")
    lw.inputs["Blend"].default_value = 0.08
    pw = N.new("ShaderNodeMath")
    pw.operation = "POWER"
    pw.inputs[1].default_value = 3.0
    L.new(lw.outputs["Facing"], pw.inputs[0])
    em = N.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = hex_lin("#29ADFF")
    k = N.new("ShaderNodeMath")
    k.operation = "MULTIPLY"
    k.inputs[1].default_value = 6.0
    L.new(pw.outputs["Value"], k.inputs[0])
    L.new(k.outputs["Value"], em.inputs["Strength"])
    add = N.new("ShaderNodeAddShader")
    L.new(bsdf.outputs["BSDF"], add.inputs[0])
    L.new(em.outputs["Emission"], add.inputs[1])
    L.new(add.outputs["Shader"], out.inputs["Surface"])
    me = bpy.data.meshes.new("planet")
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=192, v_segments=96, radius=30)
    bm.to_mesh(me)
    bm.free()
    me.shade_smooth()
    ob = bpy.data.objects.new("planet", me)
    # Its top sits just under the beam, so the limb runs behind the gap
    # between the beam and the bottom of the crop.
    ob.location = (5.5, 80, -31.0)
    ob.rotation_euler = (0.35, 0.2, 0)
    ob.data.materials.append(mat)
    bpy.context.scene.collection.objects.link(ob)
    return ob


def look_at(ob, target):
    d = Vector(target) - ob.location
    ob.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()


def add_light(kind, name, loc, target, energy, color="#FFFFFF", size=1.0, size_y=None,
              spot=None, spread=None, angle=None):
    ld = bpy.data.lights.new(name, kind)
    ld.energy = energy
    ld.color = hex_lin(color)[:3]
    if kind == "AREA":
        ld.shape = "RECTANGLE"
        ld.size = size
        ld.size_y = size_y if size_y else size
        if spread:
            ld.spread = math.radians(spread)
    elif kind == "SPOT":
        ld.spot_size = math.radians(spot or 40)
        ld.spot_blend = 0.4
        ld.shadow_soft_size = size
    elif kind == "SUN":
        ld.angle = math.radians(angle or 2)
    else:
        ld.shadow_soft_size = size
    ob = bpy.data.objects.new(name, ld)
    ob.location = loc
    ob.visible_camera = False
    bpy.context.scene.collection.objects.link(ob)
    look_at(ob, target)
    return ob


def world(color, strength=1.0):
    """A flat world colour. Stars live on star_card(), a card behind the set,
    so they sit at a scale that reads in the logo's narrow frame."""
    w = bpy.data.worlds.new("world")
    bpy.context.scene.world = w
    w.use_nodes = True
    nt = w.node_tree
    N, L = nt.nodes, nt.links
    for n in list(N):
        N.remove(n)
    out = N.new("ShaderNodeOutputWorld")
    bg = N.new("ShaderNodeBackground")
    bg.inputs["Strength"].default_value = strength
    bg.inputs["Color"].default_value = hex_lin(color)
    L.new(bg.outputs["Background"], out.inputs["Surface"])


def star_card(y=160.0, half=120.0):
    """A starfield on a card far behind the set, facing the camera: one star
    in a third of the cells of a 33 cm Voronoi grid, at varied brightness."""
    mat = bpy.data.materials.new("stars")
    nt, N, L = nodes_of(mat)
    out = N.new("ShaderNodeOutputMaterial")
    tc = N.new("ShaderNodeTexCoord")
    vor = N.new("ShaderNodeTexVoronoi")
    vor.inputs["Scale"].default_value = 3.0
    vor.inputs["Randomness"].default_value = 1
    L.new(tc.outputs["Object"], vor.inputs["Vector"])
    dot = N.new("ShaderNodeMapRange")
    dot.inputs["From Min"].default_value = 0.055
    dot.inputs["From Max"].default_value = 0.0
    L.new(vor.outputs["Distance"], dot.inputs["Value"])
    wn = N.new("ShaderNodeTexWhiteNoise")
    wn.noise_dimensions = "3D"
    L.new(vor.outputs["Position"], wn.inputs["Vector"])
    gate = N.new("ShaderNodeMapRange")
    gate.inputs["From Min"].default_value = 0.66
    gate.inputs["From Max"].default_value = 1.0
    gate.inputs["To Max"].default_value = 30.0
    L.new(wn.outputs["Value"], gate.inputs["Value"])
    st = N.new("ShaderNodeMath")
    st.operation = "MULTIPLY"
    L.new(dot.outputs["Result"], st.inputs[0])
    L.new(gate.outputs["Result"], st.inputs[1])
    em = N.new("ShaderNodeEmission")
    em.inputs["Color"].default_value = hex_lin("#FFF1E8")
    L.new(st.outputs["Value"], em.inputs["Strength"])
    L.new(em.outputs["Emission"], out.inputs["Surface"])
    me = bpy.data.meshes.new("stars")
    bm = bmesh.new()
    for x, z in ((-half, -half), (half, -half), (half, half), (-half, half)):
        bm.verts.new((x, 0, z))
    bm.faces.new(bm.verts)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new("stars", me)
    ob.location.y = y
    ob.data.materials.append(mat)
    ob.visible_shadow = False
    ob.visible_diffuse = False
    ob.visible_glossy = False
    bpy.context.scene.collection.objects.link(ob)
    return ob


# --------------------------------------------------------------------------
# Lighting styles

# The original's crop, raygun-v2-branded.svg's viewBox in SVG px. The logo
# view is framed on exactly this (plus the frame), in the same proportions.
VIEWBOX = (34.67, 95.33, 1565.33, 356.0)


FOV = 45.0  # degrees across the frame


def view_camera(view, framed=True):
    """Camera for a view: 'logo' looks square-on at the original's crop (grown
    by the frame when there is one), 'gun' square-on at the gun for judging
    the surface, 'hero' the earlier three-quarter perspective."""
    if view in ("logo", "gun"):
        x, y, w, h = VIEWBOX if view == "logo" else (1.0, 90.0, 640.0, 360.0)
        if view == "logo" and framed:
            g = FRAME_GAP + FRAME_BORDER + FRAME_MARGIN
            x, y, w, h = x - g, y - g, w + 2 * g, h + 2 * g
        cx, cz = svg_to_xz(x + w / 2, y + h / 2)
        # Square to the logo, a 45 degree field, backed off until the crop
        # exactly spans the frame's silhouette (or, unframed, PHOTON's face).
        if framed and view == "logo":
            near = (FRAME_DEPTH[1] - FRAME_DEPTH[2]) * S   # the frame's silhouette
        else:
            near = PHOTON_DEPTH[1] * S
        dist = (w * S / 2) / math.tan(math.radians(FOV / 2))
        return dict(fov=FOV, loc=(cx, -near - dist, cz), target=(cx, 0.0, cz),
                    width=round(w) if view == "logo" else 960, aspect=w / h)
    return dict(loc=(-2.6, -26.0, 2.6), target=(0.9, 0, -0.45), lens=45, width=960,
                aspect=16 / 9)


def light_rig(style, objs, mats):
    """Each style sets the world, the atmosphere, the floor, the lights and
    how hard the beam glows. Returns (look, glare)."""
    beam_lights = [objs["beam_light_%d" % i] for i in range(3)]

    def beam_power(w):
        for b in beam_lights:
            b.data.energy = w * b["share"]

    floor_z = -(470 - CY) * S
    # A broad, dim card behind the camera. It barely lights anything, but a
    # metal face square to the lens reflects what is behind the camera, and
    # without this that is black: the gunmetal frame would vanish.
    add_light("AREA", "reflection_card", (0.0, -45.0, 1.5), (0.0, 0.0, 0.0), 650, "#E8EEF5",
              30, 7)
    # The haze only fills the set, not the miles behind it, or every light
    # in the rig turns the whole background grey. It starts at the frame's
    # face, so none of it lies over the transparent cut-out around the frame.
    haze_lo, haze_hi = (-30, -FRAME_DEPTH[1] * S, floor_z - 0.5), (35, 9, 14)

    if style == "studio":
        world("#020306")
        add_box("fog", haze_lo, haze_hi, fog_material(0.0025, 0.5))
        add_light("AREA", "key", (-11, -8, 12), (-2, 0, 0), 2400, "#FFF3E6", 6, 3, spread=60)
        add_light("AREA", "fill", (6, -16, -1), (0, 0, 0), 120, "#DDE8FF", 6, 3)
        add_light("AREA", "rim_top", (-4, 9, 9), (-2, 0, 0), 3500, "#FFFFFF", 10, 1.2, spread=60)
        add_light("AREA", "rim_left", (-14, 6, 2), (-3, 0, 0), 2000, "#FFFFFF", 2, 6, spread=60)
        beam_power(1800)
        return "AgX - Punchy", 0.35

    if style == "noir":
        world("#000000")
        add_box("fog", haze_lo, (35, 12, 24),
                fog_material(0.010, 0.2, wisps=0.9, wisp_scale=0.09))
        # Hard shafts from high behind: they cut through the fins and the
        # gaps in the gun and stripe the smoke.
        # A hard backlight high behind the gun, aimed past it at the lens:
        # the gun, its fins and the letters cut shadow shafts through the
        # smoke toward the camera.
        add_light("SPOT", "backlight", (-4.5, 11, 7.5), (-3.2, -12, -1.2), 2500, "#FFF0DC",
                  size=0.05, spot=40)
        # Blinds: a hard spot from high on the left through slats, raking
        # down across the set so the stripes are seen side-on.
        add_gobo(11.0, -18, 10, -12, 8, slat=0.35, gap=0.55)
        add_light("SPOT", "blinds", (-12, -2, 24), (3, -1, -2), 250000, "#FFF0DC",
                  size=0.02, spot=36)
        add_light("AREA", "key", (-10, -14, 6), (-2, 0, 0), 700, "#FFF3E6", 2.5, 2.5)
        beam_power(1500)
        return "AgX - High Contrast", 0.45

    if style == "space":
        world("#000000")
        star_card()
        add_box("nebula", (-45, 6, -25), (60, 60, 30),
                fog_material(0.002, 0.2, wisps=0.95, wisp_scale=0.055,
                             nebula=("#1D2B53", "#83769C", 0.6)))
        add_planet()
        add_light("SUN", "star", (20, -10, 10), (0, 0, 0), 3.0, "#FFF1E8", angle=1.5)
        add_light("AREA", "rim", (-10, 8, 6), (-2, 0, 0), 4000, "#83769C", 6, 6)
        add_light("AREA", "fill", (-4, -14, -6), (0, 0, 0), 250, "#29ADFF", 8, 4)
        beam_power(2200)
        return "AgX - Punchy", 0.4

    if style == "ember":
        world("#070302")
        add_box("fog", haze_lo, haze_hi,
                fog_material(0.004, 0.55, wisps=0.6, wisp_scale=0.12, color="#FFE8D6"))
        add_light("AREA", "ember_back", (-11, 9, 5), (-2, 0, 0), 9000, "#FFA300", 4, 8, spread=60)
        add_light("AREA", "ember_top", (-2, 4, 12), (-1, 0, 0), 3500, "#FF8A1A", 9, 2, spread=60)
        add_light("AREA", "key", (-6, -15, 7), (-1, 0, 0), 700, "#FFF1E8", 5, 3)
        beam_power(1700)
        return "AgX - Punchy", 0.4

    if style == "product":
        world("#9AA0A8", strength=0.15)
        backdrop = bpy.data.materials.new("backdrop")
        bnt, bN, bL = nodes_of(backdrop)
        bsdf = bN.new("ShaderNodeBsdfPrincipled")
        bsdf.inputs["Base Color"].default_value = hex_lin("#9EA3AB")
        bsdf.inputs["Roughness"].default_value = 0.6
        bL.new(bsdf.outputs["BSDF"], bN.new("ShaderNodeOutputMaterial").inputs["Surface"])
        add_box("backdrop", (-60, 9, -40), (60, 9.2, 40), backdrop)
        add_box("fog", haze_lo, haze_hi, fog_material(0.001, 0.3))
        add_light("AREA", "top", (0, -3, 12), (0, -1, 0), 4500, "#FFFFFF", 14, 6)
        add_light("AREA", "key", (-12, -12, 4), (-1, 0, 0), 2200, "#FFF6EC", 6, 6)
        add_light("AREA", "fill", (12, -14, 2), (1, 0, 0), 700, "#EEF4FF", 8, 6)
        beam_power(1200)
        return "AgX - Base Contrast", 0.2

    raise SystemExit("unknown light style " + style)


BEAM_GLOW = {"studio": 1.0, "noir": 1.2, "space": 1.1, "ember": 1.0, "product": 0.8}


# --------------------------------------------------------------------------

def setup_render(res, samples, out_path, look, glare):
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    cy = sc.cycles
    cy.device = "CPU"
    cy.samples = samples
    cy.use_adaptive_sampling = True
    cy.adaptive_threshold = 0.03
    cy.use_denoising = True
    cy.denoiser = "OPENIMAGEDENOISE"
    cy.max_bounces = 8
    cy.diffuse_bounces = 3
    cy.glossy_bounces = 4
    cy.transmission_bounces = 6
    cy.volume_bounces = 1
    cy.transparent_max_bounces = 16
    cy.sample_clamp_indirect = 8
    cy.blur_glossy = 1.0
    cy.caustics_reflective = False
    cy.caustics_refractive = False
    cy.volume_step_rate = 2.0
    cy.volume_max_steps = 256
    sc.render.resolution_x, sc.render.resolution_y = res
    sc.render.resolution_percentage = 100
    sc.render.filepath = out_path
    sc.render.image_settings.file_format = "PNG"
    sc.render.image_settings.color_depth = "8"
    sc.render.image_settings.color_mode = "RGBA"
    sc.render.film_transparent = False
    sc.view_settings.view_transform = "AgX"
    try:
        sc.view_settings.look = look
    except TypeError:
        print("look %r not available" % look)

    # Post: a bloom on what is brighter than white. No lens distortion, so the
    # straight lines of the lockup and the frame stay straight.
    sc.use_nodes = True
    nt = sc.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    rl = nt.nodes.new("CompositorNodeRLayers")
    comp = nt.nodes.new("CompositorNodeComposite")
    gl = nt.nodes.new("CompositorNodeGlare")
    try:
        gl.glare_type = "BLOOM"
    except TypeError:
        gl.glare_type = "FOG_GLOW"
    gl.quality = "HIGH"
    if "Strength" in gl.inputs:
        gl.inputs["Threshold"].default_value = 1.0
        gl.inputs["Strength"].default_value = glare
        if "Size" in gl.inputs:
            gl.inputs["Size"].default_value = 0.9
    else:
        gl.threshold = 1.0
        gl.mix = glare - 1.0
        gl.size = 9
    nt.links.new(rl.outputs["Image"], gl.inputs["Image"])
    nt.links.new(gl.outputs["Image"], comp.inputs["Image"])


def main():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    ap = argparse.ArgumentParser()
    ap.add_argument("--material", default="bone_enamel", choices=sorted(FINISHES))
    ap.add_argument("--light", default="studio", choices=sorted(BEAM_GLOW))
    ap.add_argument("--view", default="logo", choices=["logo", "gun", "hero"])
    ap.add_argument("--width", type=int, default=None,
                    help="output width; height follows the view's shape "
                         "(logo: 1566 is 1:1 with the SVG, 3840 is 4K)")
    ap.add_argument("--res", type=int, nargs=2, default=None, help="exact W H")
    ap.add_argument("--samples", type=int, default=64)
    ap.add_argument("--out", default=os.path.join(HERE, "out", "render.png"))
    ap.add_argument("--save", default=None)
    ap.add_argument("--threads", type=int, default=0)
    ap.add_argument("--cam", type=float, nargs=7, default=None,
                    metavar=("X", "Y", "Z", "TX", "TY", "TZ", "LENS"),
                    help="override the style's camera: position, target, lens")
    ap.add_argument("--exposure", type=float, default=0.0)
    ap.add_argument("--no-frame", action="store_true", help="the bare lockup, no frame")
    a = ap.parse_args(argv)

    for ob in list(bpy.data.objects):
        bpy.data.objects.remove(ob)

    mats = {
        "gun": gun_material(a.material),
        "ink": ink_material(),
        "rail": emissive("rail", CYAN, 14.0),
        "beam": beam_material(BEAM_GLOW[a.light]),
        "core": emissive("core", CYAN_HOT, 9.0 * BEAM_GLOW[a.light]),
        "frame": frame_material(),
    }
    if a.no_frame:
        objs = build_logo(mats)
    else:
        objs = build_logo(mats, reach=1600 + FRAME_GAP + FRAME_BORDER / 2)
        build_frame(mats)
    look, glare = light_rig(a.light, objs, mats)

    cam_cfg = view_camera(a.view, framed=not a.no_frame)
    if a.cam:
        cam_cfg = dict(loc=a.cam[0:3], target=a.cam[3:6], lens=a.cam[6], width=960,
                       aspect=16 / 9)
    if a.res:
        res = tuple(a.res)
    else:
        w = a.width or cam_cfg["width"]
        res = (w, round(w / cam_cfg["aspect"]))
    cd = bpy.data.cameras.new("cam")
    if "fov" in cam_cfg:
        cd.sensor_fit = "HORIZONTAL"
        cd.angle = math.radians(cam_cfg["fov"])
    else:
        cd.lens = cam_cfg["lens"]
    cd.clip_end = 400
    cam = bpy.data.objects.new("cam", cd)
    cam.location = cam_cfg["loc"]
    bpy.context.scene.collection.objects.link(cam)
    look_at(cam, cam_cfg["target"])
    bpy.context.scene.camera = cam

    setup_render(res, a.samples, os.path.abspath(a.out), look, glare)
    bpy.context.scene.view_settings.exposure = a.exposure
    if a.threads:
        bpy.context.scene.render.threads_mode = "FIXED"
        bpy.context.scene.render.threads = a.threads
    if a.save:
        bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(a.save))
    os.makedirs(os.path.dirname(os.path.abspath(a.out)), exist_ok=True)
    bpy.ops.render.render(write_still=True)
    print("WROTE", a.out)


if __name__ == "__main__":
    main()
