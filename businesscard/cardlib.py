"""Shared helpers for the Heavy Photon business card build.

Print geometry, art reconstruction, SVG rasterising and small drawing
utilities live here; `make_cards.py` does the actual composition.
"""

from __future__ import annotations

import io
import os
import re
import random

from PIL import Image, ImageDraw, ImageFont
import numpy as np
import cairosvg

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
BRANDING = os.path.join(REPO, "branding")
FONTS = "/mnt/skills/examples/canvas-design/canvas-fonts"

# --- print geometry -------------------------------------------------------
# US standard business card: 3.5 x 2 in trim, 1/8 in bleed on every side,
# 1/8 in safe margin inside the trim.
TRIM_W_IN, TRIM_H_IN = 3.5, 2.0
BLEED_IN = 0.125
SAFE_IN = 0.125
DPI = 600

BLEED_W_IN = TRIM_W_IN + 2 * BLEED_IN   # 3.75
BLEED_H_IN = TRIM_H_IN + 2 * BLEED_IN   # 2.25


def px(inches: float) -> int:
    return int(round(inches * DPI))


CANVAS_W, CANVAS_H = px(BLEED_W_IN), px(BLEED_H_IN)          # 2250 x 1350
TRIM = (px(BLEED_IN), px(BLEED_IN),
        CANVAS_W - px(BLEED_IN), CANVAS_H - px(BLEED_IN))     # 75,75,2175,1275
SAFE = (TRIM[0] + px(SAFE_IN), TRIM[1] + px(SAFE_IN),
        TRIM[2] - px(SAFE_IN), TRIM[3] - px(SAFE_IN))         # 150,150,2100,1200

# --- palette (sampled from the TENEBRIS station art) ----------------------
INK = (11, 14, 20)          # #0B0E14  brand ink
BONE = (242, 240, 233)      # #F2F0E9  brand bone
CYAN = (62, 224, 255)       # #3EE0FF  brand ion cyan
SPACE = (5, 6, 10)          # card black
ART_YELLOW = (247, 183, 30)
ART_RED = (226, 46, 74)
ART_LAVENDER = (168, 154, 200)
ART_BLUE = (46, 111, 196)
ART_TEAL = (44, 176, 190)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(os.path.join(FONTS, name), size)


# --- colour maths ---------------------------------------------------------
def _lin(c: float) -> float:
    c = c / 255.0
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def luminance(rgb) -> float:
    r, g, b = (_lin(v) for v in rgb[:3])
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b) -> float:
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


# --- game art -------------------------------------------------------------
def detect_block(src: np.ndarray, max_block: int = 8) -> int:
    """Recover the nearest-neighbour upscale factor of a pixel-art capture.

    The game renders small and the screenshot is enlarged, so hard edges only
    ever land on a lattice. Scoring how much of the edge energy sits on each
    candidate lattice recovers the factor; lossy compression blurs the signal
    but does not move it. Returns 1 when nothing beats the noise floor, which
    is the right answer for an already-native capture.
    """
    best, best_score = 1, 1.0
    for axis in (0, 1):
        d = np.abs(np.diff(src.astype(int), axis=axis))
        sig = d.sum(axis=(1, 2) if axis == 0 else (0, 2)).astype(float)
        if not sig.any():
            continue
        idx = np.arange(len(sig))
        for p in range(2, max_block + 1):
            if len(sig) < p * 4:
                continue
            on = sig[idx % p == p - 1]
            off = sig[idx % p != p - 1]
            if not len(on) or not off.mean():
                continue
            score = on.mean() / off.mean()
            if score > best_score * 1.02:
                best, best_score = p, score
    return best


def load_art_native(path: str) -> Image.Image:
    """Recover a capture's native pixel grid and flatten its palette.

    Screenshots arrive upscaled and compression-ringed. Collapsing each block
    to its median throws the ringing away and gets back the pixels the game
    actually drew, so the card can enlarge them again without mush.
    """
    src = np.asarray(Image.open(path).convert("RGB")).astype(np.uint8)
    block = detect_block(src)
    h, w, _ = src.shape
    nh, nw = h // block, w // block
    src = src[: nh * block, : nw * block]
    blocks = src.reshape(nh, block, nw, block, 3).transpose(0, 2, 1, 3, 4)
    native = np.median(blocks.reshape(nh, nw, -1, 3), axis=2).astype(np.uint8)
    img = Image.fromarray(native, "RGB")
    # snap the remaining near-duplicates onto a tight flat palette
    img = img.quantize(colors=96, method=Image.MEDIANCUT, dither=Image.NONE)
    return img.convert("RGB")


def cover_crop(art: Image.Image, w: int, h: int, anchor_x: float = 0.5,
               anchor_y: float = 0.5) -> Image.Image:
    """Nearest-neighbour scale-to-cover, so the pixel grid stays hard-edged."""
    scale = max(w / art.width, h / art.height)
    sw, sh = int(np.ceil(art.width * scale)), int(np.ceil(art.height * scale))
    big = art.resize((sw, sh), Image.NEAREST)
    x0 = int(round((sw - w) * anchor_x))
    y0 = int(round((sh - h) * anchor_y))
    return big.crop((x0, y0, x0 + w, y0 + h))


# --- svg ------------------------------------------------------------------
_BG_RECT = re.compile(r'<rect[^>]*fill="#0B0E14"[^>]*/>')


def render_svg(name: str, width: int, strip_bg: bool = True) -> Image.Image:
    """Rasterise a branding SVG to RGBA at `width` px, optionally dropping its
    opaque backing rect so the mark can sit on artwork."""
    with open(os.path.join(BRANDING, name), "r", encoding="utf-8") as fh:
        svg = fh.read()
    if strip_bg:
        svg = _BG_RECT.sub("", svg, count=1)
    png = cairosvg.svg2png(bytestring=svg.encode("utf-8"), output_width=width)
    return Image.open(io.BytesIO(png)).convert("RGBA")


def trim_alpha(img: Image.Image) -> Image.Image:
    box = img.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    return img.crop(box) if box else img


def logo_at_height(name: str, target_h: int) -> Image.Image:
    """Ink-trimmed logo whose visible ink is exactly `target_h` tall.

    Rasterised straight from the vector at final size — resampling a bigger
    render would only put ringing back onto edges the renderer already
    antialiased correctly.
    """
    probe = trim_alpha(render_svg(name, 1200))
    aspect = probe.width / probe.height
    want_w = int(round(target_h * aspect))
    out = trim_alpha(render_svg(name, want_w))
    return out if out.height == target_h else out.resize((want_w, target_h),
                                                         Image.LANCZOS)


# --- drawing helpers ------------------------------------------------------
def chamfer_points(x0, y0, x1, y1, c):
    """Octagon path for a rectangle with `c` px cut off each corner."""
    return [(x0 + c, y0), (x1 - c, y0), (x1, y0 + c), (x1, y1 - c),
            (x1 - c, y1), (x0 + c, y1), (x0, y1 - c), (x0, y0 + c)]


def paste(base: Image.Image, layer: Image.Image, xy) -> None:
    base.paste(layer, xy, layer)


def text_tracked(draw: ImageDraw.ImageDraw, xy, s: str, fnt, fill, tracking=0.0):
    """Draw text with extra letter spacing; returns the advance width."""
    x, y = xy
    for ch in s:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x - xy[0] - (tracking if s else 0)


def text_width(draw: ImageDraw.ImageDraw, s: str, fnt, tracking=0.0) -> float:
    if not s:
        return 0.0
    return sum(draw.textlength(c, font=fnt) for c in s) + tracking * (len(s) - 1)


def starfield(size, seed=7, density=0.00035, palette=None):
    """A faint pixel starfield in the same chunky grid as the game art."""
    w, h = size
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    rng = random.Random(seed)
    palette = palette or [(255, 255, 255), (200, 220, 255), (150, 180, 230)]
    cell = 7  # one "art pixel" at this scale
    for _ in range(int(w * h * density)):
        x = rng.randrange(0, w // cell) * cell
        y = rng.randrange(0, h // cell) * cell
        a = rng.choice([18, 24, 30, 38, 48, 62, 85])
        c = rng.choice(palette)
        s = cell * (2 if rng.random() < 0.12 else 1)
        d.rectangle([x, y, x + s - 1, y + s - 1], fill=c + (a,))
    return layer


def guides(img: Image.Image) -> Image.Image:
    """Overlay bleed / trim / safe guides for proofing."""
    out = img.convert("RGB").copy()
    d = ImageDraw.Draw(out, "RGBA")
    d.rectangle([TRIM[0], TRIM[1], TRIM[2] - 1, TRIM[3] - 1],
                outline=(255, 45, 85, 235), width=4)
    d.rectangle([SAFE[0], SAFE[1], SAFE[2] - 1, SAFE[3] - 1],
                outline=(62, 224, 255, 210), width=3)
    d.rectangle([0, 0, out.width - 1, out.height - 1],
                outline=(255, 210, 40, 200), width=4)
    f = font("Jura-Medium.ttf", 30)
    for label, xy, col in [("BLEED 3.75 x 2.25 in", (14, 12), (255, 210, 40)),
                           ("TRIM 3.5 x 2 in", (TRIM[0] + 12, TRIM[1] + 10), (255, 45, 85)),
                           ("SAFE", (SAFE[0] + 12, SAFE[1] + 8), (62, 224, 255))]:
        d.text(xy, label, font=f, fill=col + (255,),
               stroke_width=4, stroke_fill=(0, 0, 0, 190))
    return out


def trimmed(img: Image.Image) -> Image.Image:
    """What the card looks like after the cutter runs."""
    return img.convert("RGB").crop(TRIM)
