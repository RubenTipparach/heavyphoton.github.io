"""Textures on the blockout set.

The images are fps-game-demo's own Material Maker output (game/textures: albedo,
normal and ORM at 1024 px, world tile sizes in game/materials/materials.json).
The set's boxes carry no UVs, so every texture is box-projected in the
object's own space, scaled to its tile size in metres. A material keeps its
colour: the texture tints it (colour_mix) and breaks it up (detail), the ORM
map's green channel drives roughness, and the albedo's luminance is the bump.
"""
import os

import bpy

from paths import FPS_GAME_DEMO

TEX = os.path.join(FPS_GAME_DEMO, "game", "textures")

# Each texture's mean linear luminance (measured with PIL over the whole image).
# The detail term divides by it, so a texture breaks a colour up without
# darkening it on average.
MEAN = {"concrete": 0.192, "stone_blocks": 0.223, "rust_metal": 0.114, "hazard_stripes": 0.207,
        "crate": 0.072, "tech_panel": 0.106}

# material key in scene.M: (texture, tile metres, options)
SURFACES = {
    "concrete": ("concrete", 3.0, dict(colour_mix=1.0, darken=0.7)),
    "roof": ("concrete", 4.0, dict(colour_mix=1.0, darken=0.35)),
    "wall": ("stone_blocks", 1.5, dict(colour_mix=0.15, detail=0.6)),
    "press": ("rust_metal", 1.0, dict(colour_mix=0.2, detail=0.5)),
    "press_dark": ("rust_metal", 1.0, dict(colour_mix=0.25, detail=0.5)),
    "hazard": ("hazard_stripes", 0.6, dict(colour_mix=1.0)),
    "steel": ("rust_metal", 0.8, dict(colour_mix=0.3, detail=0.5)),
    "wood": ("crate", 0.9, dict(colour_mix=1.0)),
    "lamp_shade": ("rust_metal", 0.6, dict(colour_mix=0.3, detail=0.4)),
    "gun": ("tech_panel", 0.25, dict(colour_mix=0.0, detail=0.35, bump=0.12)),
    "gun_ink": ("tech_panel", 0.25, dict(colour_mix=0.0, detail=0.3, bump=0.12)),
    "safety": ("concrete", 3.0, dict(colour_mix=0.0, detail=0.8)),
}


def _image(path, non_color=False):
    img = bpy.data.images.load(path, check_existing=True)
    if non_color:
        img.colorspace_settings.name = "Non-Color"
    return img


def texture(m, name, tile, colour_mix=0.0, detail=0.5, bump=0.25, darken=1.0):
    nt = m.node_tree
    b = next(n for n in nt.nodes if n.type == "BSDF_PRINCIPLED")
    N = nt.nodes.new
    tc = N("ShaderNodeTexCoord")
    mp = N("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (1.0 / tile,) * 3
    nt.links.new(tc.outputs["Object"], mp.inputs["Vector"])

    def tex(path, non_color=False):
        t = N("ShaderNodeTexImage")
        t.image = _image(path, non_color)
        t.projection = "BOX"
        t.projection_blend = 0.25
        nt.links.new(mp.outputs["Vector"], t.inputs["Vector"])
        return t

    alb = tex(os.path.join(TEX, name + ".png"))
    orm = tex(os.path.join(TEX, name + "_orm.png"), True)
    luma = N("ShaderNodeRGBToBW")
    nt.links.new(alb.outputs["Color"], luma.inputs["Color"])

    # The colour the material had, linked or set.
    base = b.inputs["Base Color"]
    if base.links:
        src = base.links[0].from_socket
    else:
        rgb = N("ShaderNodeRGB")
        rgb.outputs[0].default_value = base.default_value
        src = rgb.outputs[0]
    tint = N("ShaderNodeMix")
    tint.data_type = "RGBA"
    tint.inputs["Factor"].default_value = colour_mix
    nt.links.new(src, tint.inputs["A"])
    nt.links.new(alb.outputs["Color"], tint.inputs["B"])
    # detail: scale the colour by 1 - d + d luma / mean, so the texture's average leaves it alone
    m1 = N("ShaderNodeMath")
    m1.operation = "MULTIPLY_ADD"
    m1.inputs[1].default_value = detail / MEAN[name]
    m1.inputs[2].default_value = 1.0 - detail
    nt.links.new(luma.outputs["Val"], m1.inputs[0])
    m2 = N("ShaderNodeMath")
    m2.operation = "MULTIPLY"
    m2.inputs[1].default_value = darken
    nt.links.new(m1.outputs[0], m2.inputs[0])
    mul = N("ShaderNodeMix")
    mul.data_type = "RGBA"
    mul.blend_type = "MULTIPLY"
    mul.inputs["Factor"].default_value = 1.0
    nt.links.new(tint.outputs["Result"], mul.inputs["A"])
    nt.links.new(m2.outputs[0], mul.inputs["B"])
    nt.links.new(mul.outputs["Result"], base)

    sep = N("ShaderNodeSeparateColor")
    nt.links.new(orm.outputs["Color"], sep.inputs["Color"])
    nt.links.new(sep.outputs["Green"], b.inputs["Roughness"])

    bp = N("ShaderNodeBump")
    bp.inputs["Strength"].default_value = bump
    bp.inputs["Distance"].default_value = 0.01
    nt.links.new(luma.outputs["Val"], bp.inputs["Height"])
    nt.links.new(bp.outputs["Normal"], b.inputs["Normal"])


def apply(M):
    for key, (name, tile, opts) in SURFACES.items():
        if key in M:
            texture(M[key], name, tile, **opts)
    print("SURFACES %d materials textured" % sum(1 for k in SURFACES if k in M))
