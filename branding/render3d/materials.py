#!/usr/bin/env python3
"""Author the Material Maker graphs the 3D logo is textured with.

Each function below builds one .ptex graph out of Material Maker's own nodes
(fbm, anisotropic noise, scratches, bricks, tone maps, height) and
writes it to materials/<name>.ptex. Open any of them in Material Maker to
tweak; mm_export.py turns them into the texture sets Blender reads.

Colours are the brand's: bone #F2F0E9, ink #0B0E14, ion cyan #3EE0FF.

    python3 materials.py            # writes materials/*.ptex
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "materials")

# Material node size is 2^n: 11 is 2048 px, which is plenty when the texture
# repeats every couple of metres on a gun about five and a half metres long.
TEX_SIZE = 11

# Material node input ports (nodes/material.mmg). NORMAL is unused, see height().
ALBEDO, METALLIC, ROUGHNESS, EMISSION, NORMAL, AO, DEPTH = range(7)


def hex_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def gradient(*stops):
    """stops: (pos, '#rrggbb') pairs."""
    pts = []
    for pos, col in stops:
        r, g, b = hex_rgb(col)
        pts.append({"pos": pos, "r": r, "g": g, "b": b, "a": 1})
    return {"type": "Gradient", "interpolation": 1, "points": pts}


def grey_gradient(lo, hi):
    """A colorize ramp that remaps 0..1 onto lo..hi, for roughness etc."""
    return {"type": "Gradient", "interpolation": 1, "points": [
        {"pos": 0, "r": lo, "g": lo, "b": lo, "a": 1},
        {"pos": 1, "r": hi, "g": hi, "b": hi, "a": 1}]}


class Graph:
    def __init__(self, name):
        self.name = name
        self.nodes = []
        self.connections = []
        self.n = 0

    def node(self, type_, inputs=(), **params):
        """Add a node; inputs is a list of (source, to_port) where source is
        a node name or (node name, from_port)."""
        name = "%s_%d" % (type_, self.n)
        self.n += 1
        self.nodes.append({"name": name, "type": type_, "parameters": params,
                           "node_position": {"x": 200 * self.n, "y": 0}})
        for src, port in inputs:
            self.link(src, name, port)
        return name

    def link(self, src, dst, port):
        if isinstance(src, tuple):
            src, from_port = src
        else:
            from_port = 0
        self.connections.append({"from": src, "from_port": from_port,
                                 "to": dst, "to_port": port})

    def material(self, channels, **params):
        base = {"albedo_color": {"type": "Color", "r": 1, "g": 1, "b": 1, "a": 1},
                "metallic": 1, "roughness": 1, "emission_energy": 1, "normal": 1,
                "ao": 1, "depth_scale": 0.5, "flags_transparent": False, "sss": 0,
                "size": TEX_SIZE}
        base.update(params)
        self.nodes.append({"name": "Material", "type": "material", "parameters": base,
                           "node_position": {"x": 200 * (self.n + 1), "y": 0}})
        for port, src in channels.items():
            self.link(src, "Material", port)

    def save(self):
        os.makedirs(OUT, exist_ok=True)
        path = os.path.join(OUT, self.name + ".ptex")
        data = {"name": self.name, "type": "graph", "label": self.name,
                "shortdesc": "", "longdesc": "", "parameters": {},
                "node_position": {"x": 0, "y": 0},
                "nodes": self.nodes, "connections": self.connections}
        with open(path, "w") as f:
            json.dump(data, f, indent=1)
        return path


# Shorthands -----------------------------------------------------------------

def scale(g, src, k):
    return g.node("math", [(src, 0)], op=2, default_in2=k, clamp=False)


def add(g, a, b, clamp=True):
    return g.node("math", [(a, 0), (b, 1)], op=0, clamp=clamp)


def sub(g, a, b, clamp=True):
    return g.node("math", [(a, 0), (b, 1)], op=1, clamp=clamp)


def mul(g, a, b):
    return g.node("math", [(a, 0), (b, 1)], op=2, clamp=True)


def ramp(g, src, lo, hi):
    return g.node("colorize", [(src, 0)], gradient=grey_gradient(lo, hi))


def height(g, src, strength):
    """Surface relief goes out as a height map (the depth channel, a float
    EXR) scaled by strength, and Blender's Bump node turns it into shading.
    Material Maker's own normal map nodes run through a compute buffer, and
    that segfaults on the software Vulkan driver this is exported with."""
    return scale(g, src, strength)


# Materials ------------------------------------------------------------------

def bone_enamel():
    """Satin bone enamel: faint tonal drift, orange peel, hairline scratches
    and smudges that show in the roughness."""
    g = Graph("bone_enamel")
    drift = g.node("fbm2", noise=1, scale_x=3, scale_y=3, iterations=5, persistence=0.55)
    albedo = g.node("colorize", [(drift, 0)],
                    gradient=gradient((0, "#DCD8CC"), (0.55, "#ECE9E0"), (1, "#F4F2EC")))
    smudge = g.node("fbm2", noise=2, scale_x=6, scale_y=5, iterations=6, persistence=0.6)
    scratches = g.node("scratches2", length=0.3, width=0.25, layers=6, waviness=0.4,
                       angle=-20, randomness=0.6)
    rough = add(g, ramp(g, smudge, 0.24, 0.44), scale(g, scratches, 0.25))
    peel = g.node("perlin", scale_x=32, scale_y=32, iterations=3, persistence=0.55)
    relief = sub(g, scale(g, peel, 0.35), scale(g, scratches, 0.6), clamp=False)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, relief, 0.25),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


def brushed_steel():
    """Brushed steel: long anisotropic streaks, grime in the low frequencies,
    scratches across the grain."""
    g = Graph("brushed_steel")
    grain = g.node("noise_anisotropic", scale_x=4, scale_y=512, smoothness=1, interpolation=1)
    grain2 = g.node("noise_anisotropic", scale_x=12, scale_y=256, smoothness=1, interpolation=1)
    streak = g.node("math", [(grain, 0), (grain2, 1)], op=2, clamp=True)
    grime = g.node("fbm2", noise=1, scale_x=4, scale_y=4, iterations=6, persistence=0.6)
    tone = g.node("math", [(streak, 0), (grime, 1)], op=0, clamp=False)
    tone = scale(g, tone, 0.6)
    albedo = g.node("colorize", [(tone, 0)],
                    gradient=gradient((0, "#6E747A"), (0.5, "#A9AFB5"), (1, "#D0D4D8")))
    scratches = g.node("scratches2", length=0.4, width=0.2, layers=8, waviness=0.3,
                       angle=70, randomness=0.7)
    rough = add(g, ramp(g, tone, 0.36, 0.18), scale(g, scratches, 0.2))
    relief = sub(g, scale(g, streak, 0.5), scale(g, scratches, 0.8), clamp=False)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, relief, 0.35),
                METALLIC: g.node("uniform_greyscale", color=1)}, metallic=1)
    return g


def polished_brass():
    """Polished brass: warm, a slow hammered wobble, fingerprints in the
    roughness."""
    g = Graph("polished_brass")
    wobble = g.node("fbm2", noise=1, scale_x=5, scale_y=5, iterations=4, persistence=0.5)
    cells = g.node("voronoi", scale_x=14, scale_y=14, stretch_x=1, stretch_y=1,
                   intensity=0.6, randomness=0.85)
    hammer = add(g, scale(g, wobble, 0.5), scale(g, (cells, 0), 0.5), clamp=False)
    patina = g.node("fbm2", noise=2, scale_x=3, scale_y=3, iterations=6, persistence=0.6)
    albedo = g.node("colorize", [(patina, 0)],
                    gradient=gradient((0, "#9C6B24"), (0.45, "#D09A3E"), (1, "#F2C66E")))
    prints = g.node("fbm2", noise=2, scale_x=10, scale_y=10, iterations=6, persistence=0.6)
    scratches = g.node("scratches2", length=0.25, width=0.15, layers=5, waviness=0.6,
                       angle=10, randomness=0.8)
    rough = add(g, ramp(g, prints, 0.1, 0.3), scale(g, scratches, 0.15))
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, hammer, 0.18),
                METALLIC: g.node("uniform_greyscale", color=1)}, metallic=1)
    return g


def gloss_ceramic():
    """Glazed bone ceramic, the toy-raygun look: near-flat colour, glossy, the
    faintest ripple in the glaze."""
    g = Graph("gloss_ceramic")
    drift = g.node("fbm2", noise=1, scale_x=2, scale_y=2, iterations=4, persistence=0.5)
    albedo = g.node("colorize", [(drift, 0)],
                    gradient=gradient((0, "#E9E6DC"), (1, "#F4F2EC")))
    prints = g.node("fbm2", noise=2, scale_x=8, scale_y=8, iterations=6, persistence=0.6)
    rough = ramp(g, prints, 0.05, 0.16)
    ripple = g.node("perlin", scale_x=10, scale_y=10, iterations=4, persistence=0.5)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, ripple, 0.06),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


def hull_panels():
    """Bone hull plating: panel seams with grime in them, each plate a slightly
    different shade and sheen."""
    g = Graph("hull_panels")
    # Uneven bricks split the square into plates of mixed sizes, which reads
    # as hull plating; even bricks read as bathroom tile.
    plates = g.node("bricks_uneven2", iterations=5, min_size=0.22, randomness=0.6,
                    mortar=0.006, bevel=0.012, round=0, corner=0.04)
    shade = g.node("fbm2", noise=1, scale_x=4, scale_y=4, iterations=5, persistence=0.5)
    # Port 1 gives each plate a random colour; its red channel is a per-plate
    # value.
    plate_id = g.node("math", [((plates, 1), 0)], op=2, default_in2=1, clamp=True)
    tone = add(g, scale(g, plate_id, 0.5), scale(g, shade, 0.5), clamp=True)
    base = g.node("colorize", [(tone, 0)],
                  gradient=gradient((0, "#D9D5C9"), (0.6, "#EAE7DE"), (1, "#F4F2EC")))
    grime = g.node("colorize", [((plates, 0), 0)],
                   gradient=gradient((0, "#9C9890"), (0.3, "#DDD9CF"), (1, "#FFFFFF")))
    albedo = g.node("blend2", [(base, 0), (grime, 1)], blend_type=2, amount=1)
    rough = add(g, ramp(g, tone, 0.26, 0.4), scale(g, g.node("invert", [((plates, 0), 0)]), 0.3))
    scratches = g.node("scratches2", length=0.3, width=0.2, layers=5, waviness=0.4,
                       angle=0, randomness=0.6)
    relief = sub(g, (plates, 0), scale(g, scratches, 0.15), clamp=False)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, relief, 0.6),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


def ink_gloss():
    """Ink-black enamel for the letters: deep, glossy, a little orange peel."""
    g = Graph("ink_gloss")
    drift = g.node("fbm2", noise=1, scale_x=3, scale_y=3, iterations=4, persistence=0.5)
    albedo = g.node("colorize", [(drift, 0)],
                    gradient=gradient((0, "#07090D"), (1, "#10131A")))
    smudge = g.node("fbm2", noise=2, scale_x=7, scale_y=7, iterations=6, persistence=0.6)
    rough = ramp(g, smudge, 0.12, 0.3)
    peel = g.node("perlin", scale_x=32, scale_y=32, iterations=3, persistence=0.55)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, peel, 0.12),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


def wear_mask():
    """Greyscale chipping mask (white = paint gone), exported as the albedo.
    Blender multiplies it by an edge mask so paint only chips where a real
    object would knock it: on the corners."""
    g = Graph("wear_mask")
    chips = g.node("fbm2", noise=3, scale_x=8, scale_y=8, iterations=6, persistence=0.65)
    fine = g.node("fbm2", noise=1, scale_x=24, scale_y=24, iterations=4, persistence=0.6)
    mix = add(g, scale(g, chips, 0.7), scale(g, fine, 0.3), clamp=True)
    mask = g.node("colorize", [(mix, 0)],
                  gradient=gradient((0, "#000000"), (0.52, "#000000"), (0.6, "#FFFFFF"), (1, "#FFFFFF")))
    g.material({ALBEDO: mask, ROUGHNESS: g.node("uniform_greyscale", color=1),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


def floor_resin():
    """Dark polished resin floor: mostly mirror, broken up by scuffs and
    damp patches in the roughness."""
    g = Graph("floor_resin")
    drift = g.node("fbm2", noise=1, scale_x=2, scale_y=2, iterations=5, persistence=0.5)
    albedo = g.node("colorize", [(drift, 0)],
                    gradient=gradient((0, "#06070A"), (1, "#121520")))
    damp = g.node("fbm2", noise=2, scale_x=3, scale_y=3, iterations=7, persistence=0.62)
    scuffs = g.node("scratches2", length=0.2, width=0.15, layers=8, waviness=0.7,
                    angle=0, randomness=1)
    rough = add(g, ramp(g, damp, 0.03, 0.3), scale(g, scuffs, 0.06))
    ripple = g.node("perlin", scale_x=6, scale_y=6, iterations=5, persistence=0.6)
    g.material({ALBEDO: albedo, ROUGHNESS: rough, DEPTH: height(g, ripple, 0.08),
                METALLIC: g.node("uniform_greyscale", color=0)}, metallic=0)
    return g


ALL = [bone_enamel, brushed_steel, polished_brass, gloss_ceramic, hull_panels,
       ink_gloss, wear_mask, floor_resin]

if __name__ == "__main__":
    for build in ALL:
        print(build().save())
