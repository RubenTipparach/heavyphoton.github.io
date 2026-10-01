#!/usr/bin/env python3
"""Lay the preview renders out as two labelled contact sheets for review:
previews/sheet-lighting.png and previews/sheet-finishes.png.

    pip install pillow
    python3 make_sheets.py
"""
import os

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
P = os.path.join(HERE, "previews")

INK, BONE, CYAN, DIM = "#0B0E14", "#F2F0E9", "#3EE0FF", "#8B93A3"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

LIGHTS = [
    ("studio", "A  Dark studio",
     "Black stage, soft key from the top left, white rims, thin haze, glossy resin floor."),
    ("noir", "B  Noir smoke",
     "Drifting smoke, a hard light raking through blinds above the frame into shafts."),
    ("space", "C  Deep space",
     "Stars, a faint nebula, a planet's limb with a glowing atmosphere, one distant sun."),
    ("ember", "D  Ember",
     "Amber backlight and warm haze against the cyan beam: teal and orange."),
    ("product", "E  Clean product",
     "Grey paper sweep, big soft boxes, almost no haze. The catalogue shot."),
]
FINISHES = [
    ("bone_enamel", "1  Bone enamel",
     "Satin bone paint: orange peel, hairline scratches, corners chipped to steel."),
    ("brushed_steel", "2  Brushed steel",
     "Bare steel brushed along the gun. HEAVY loses most of its contrast."),
    ("polished_brass", "3  Polished brass",
     "Warm pulp sci-fi brass, lightly hammered, fingerprints in the shine."),
    ("gloss_ceramic", "4  Glazed ceramic",
     "Bone glaze under a full clear coat: the toy raygun look."),
    ("hull_panels", "5  Hull plating",
     "Bone plates with panel seams, each plate its own shade, grime in the seams."),
]


def font(path, size):
    return ImageFont.truetype(path, size)


def caption(draw, x, y, title, body):
    draw.text((x, y), title, font=font(BOLD, 28), fill=BONE)
    draw.text((x, y + 40), body, font=font(FONT, 20), fill=DIM)


def header(draw, w, title, sub):
    draw.text((48, 36), title, font=font(BOLD, 40), fill=BONE)
    draw.text((48, 92), sub, font=font(FONT, 22), fill=CYAN)


def lighting_sheet():
    tw, th, g = 960, 540, 32
    cap = 96
    cols = 2
    rows = (len(LIGHTS) + 1) // 2
    w = cols * tw + (cols + 1) * g
    h = 150 + rows * (th + cap + g)
    sheet = Image.new("RGB", (w, h), INK)
    d = ImageDraw.Draw(sheet)
    header(d, w, "HEAVY PHOTON  /  3D render  /  lighting styles",
           "All in finish 1, bone enamel. Low-res previews, 960 x 540. Pick a letter.")
    for i, (key, title, body) in enumerate(LIGHTS):
        r, c = divmod(i, cols)
        if i == len(LIGHTS) - 1 and len(LIGHTS) % 2:
            x = (w - tw) // 2
        else:
            x = g + c * (tw + g)
        y = 150 + r * (th + cap + g)
        sheet.paste(Image.open(os.path.join(P, "light-%s.png" % key)), (x, y))
        caption(d, x, y + th + 14, title, body)
    out = os.path.join(P, "sheet-lighting.png")
    sheet.save(out, optimize=True)
    return out


def finish_sheet():
    tw, th, g = 960, 540, 32
    cap = 96
    w = 2 * tw + 3 * g
    h = 150 + len(FINISHES) * (th + cap + g)
    sheet = Image.new("RGB", (w, h), INK)
    d = ImageDraw.Draw(sheet)
    header(d, w, "HEAVY PHOTON  /  3D render  /  gun finishes",
           "All under A, dark studio. Full frame on the left, the gun up close on the right. Pick a number.")
    for i, (key, title, body) in enumerate(FINISHES):
        y = 150 + i * (th + cap + g)
        sheet.paste(Image.open(os.path.join(P, "finish-%s.png" % key)), (g, y))
        sheet.paste(Image.open(os.path.join(P, "finish-%s-close.png" % key)), (2 * g + tw, y))
        caption(d, g, y + th + 14, title, body)
    out = os.path.join(P, "sheet-finishes.png")
    sheet.save(out, optimize=True)
    return out


if __name__ == "__main__":
    print(lighting_sheet())
    print(finish_sheet())
