#!/usr/bin/env python3
"""Build the Heavy Photon business card, both sides, print ready.

    python3 make_cards.py

Outputs land in ./out:
  front-bleed-600dpi.png / back-bleed-600dpi.png   press files (3.75 x 2.25 in)
  front-bleed-300dpi.png / back-bleed-300dpi.png   300 dpi equivalents
  heavy-photon-business-card.pdf                   2-page PDF at final size
  preview-*.png                                    proofs (trimmed + guides)
"""

from __future__ import annotations

import os
import random

from PIL import Image, ImageDraw, ImageFilter
import numpy as np
import qrcode
from qrcode.constants import ERROR_CORRECT_H

import cardlib as C
from cardlib import CANVAS_W, CANVAS_H, TRIM, SAFE, px, font, paste

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
ART = os.path.join(HERE, "source", "tenebris-station.webp")

# The capture renders in a PICO-8 style palette; the card borrows it wholesale
# so both sides read as one piece of art.
P8_BLACK = (0, 0, 0)
P8_DARKBLUE = (29, 43, 83)
P8_RED = (255, 0, 77)
P8_ORANGE = (255, 163, 0)
P8_YELLOW = (255, 236, 39)
P8_BLUE = (41, 173, 255)
P8_INDIGO = (131, 118, 156)
P8_WHITE = (255, 241, 232)
BRAND_CYAN = C.CYAN            # #3EE0FF, the logo's ion cyan
BONE = C.BONE

LOGO = "raygun-v2-mainline.svg"

QR_URL = "https://heavyphoton.com/#home"
NAME = "RUBEN TIPPARACH"
EMAIL = "ruben.tipparach@gmail.com"
SITE = "heavyphoton.com"

# Framing of the 375x121 native capture. The window is wide enough to keep
# both habitat modules, both engine plumes and the central hub; the sky above
# is grown to make up the card's aspect ratio (see grow_sky).
ART_WIN_X, ART_WIN_W = 105, 258


# --------------------------------------------------------------------------
# game art framing
# --------------------------------------------------------------------------
def grow_sky(art: np.ndarray, rows: int, seed: int = 3) -> np.ndarray:
    """Grow the frame upward by `rows` native pixels.

    Columns that open on empty space get more starfield, matched to the
    density and colours of the capture's own sky. Columns occupied by a
    structure continue that structure straight up — the habitat modules are
    vertically banded, so they simply read as running out of frame.
    """
    if rows <= 0:
        return art
    h, w, _ = art.shape
    top = art[0]
    lum = top.astype(int).sum(axis=1)
    is_sky = lum < 40

    ext = np.repeat(top[None, :, :], rows, axis=0).copy()
    ext[:, is_sky, :] = 0

    # measure the capture's own star density, then reproduce it
    first = np.array([np.argmax(art[:, x].sum(axis=1) >= 40) if
                      (art[:, x].sum(axis=1) >= 40).any() else h
                      for x in range(w)])
    sky_px = stars = 0
    star_cols: list[tuple[int, int, int]] = []
    for x in range(w):
        band = art[: first[x], x]
        sky_px += len(band)
        lit = band[band.sum(axis=1) >= 40]
        stars += len(lit)
        star_cols.extend(map(tuple, lit.tolist()))
    density = stars / max(sky_px, 1)
    rng = random.Random(seed)
    if star_cols:
        cells = [(y, x) for y in range(rows) for x in range(w) if is_sky[x]]
        for y, x in rng.sample(cells, min(len(cells),
                                          int(round(len(cells) * density)))):
            ext[y, x] = star_cols[rng.randrange(len(star_cols))]
    return np.vstack([ext, art])


def framed_art() -> Image.Image:
    """The capture, re-framed to the card's bleed aspect at native scale."""
    art = np.asarray(C.load_art_native(ART))
    want_h = int(round(ART_WIN_W / (C.BLEED_W_IN / C.BLEED_H_IN)))
    art = grow_sky(art, want_h - art.shape[0])
    win = art[:, ART_WIN_X:ART_WIN_X + ART_WIN_W]
    return Image.fromarray(win, "RGB")


# --------------------------------------------------------------------------
# FRONT — full-bleed game art with a translucent black bar and the logo
# --------------------------------------------------------------------------
BAR_VISIBLE_IN = 0.40          # bar height measured up from the trim line
BAR_ALPHA = 212                # /255 — art stays faintly visible through it
FEATHER = 90                   # soft ramp above the bar so it doesn't hard-cut


def make_front() -> Image.Image:
    card = framed_art().resize((CANVAS_W, CANVAS_H), Image.NEAREST)

    bar_top = TRIM[3] - px(BAR_VISIBLE_IN)

    # translucent black bar, run out through the bottom bleed
    ramp = np.zeros((CANVAS_H, CANVAS_W), dtype=np.uint8)
    ramp[bar_top:, :] = BAR_ALPHA
    grad = np.linspace(0, BAR_ALPHA, FEATHER)
    ramp[bar_top - FEATHER:bar_top, :] = grad[:, None].astype(np.uint8)
    card = Image.composite(Image.new("RGB", card.size, (0, 0, 0)), card,
                           Image.fromarray(ramp, "L"))

    d = ImageDraw.Draw(card, "RGBA")
    # ion-cyan hairline along the top of the bar, ties back to the logo
    d.rectangle([0, bar_top - 4, CANVAS_W, bar_top - 1], fill=BRAND_CYAN + (235,))
    d.rectangle([0, bar_top, CANVAS_W, bar_top + 2], fill=(0, 0, 0, 140))

    # logo, bottom-left, inside the safe margin and optically centred in the
    # part of the bar that survives trimming
    logo_h = px(0.25)
    logo = C.logo_at_height(LOGO, logo_h)
    pad = 44
    halo = Image.new("RGBA", (logo.width + 2 * pad, logo.height + 2 * pad),
                     (0, 0, 0, 0))
    halo.paste(Image.new("RGBA", logo.size, (0, 0, 0, 235)), (pad, pad), logo)
    halo = halo.filter(ImageFilter.GaussianBlur(20))
    lx = SAFE[0]
    ly = (bar_top + TRIM[3]) // 2 - logo_h // 2
    paste(card, halo, (lx - pad, ly - pad))
    paste(card, logo, (lx, ly))

    # signal ticks on the right of the bar, in the capture's own palette
    cy = ly + logo_h // 2
    for i, col in enumerate((P8_YELLOW, P8_RED, BRAND_CYAN)):
        x1 = SAFE[2] - i * 34
        d.polygon(C.chamfer_points(x1 - 18, cy - 30, x1, cy + 30, 6),
                  fill=col + (230,))
    return card


# --------------------------------------------------------------------------
# QR — styled to the art, but every dark module keeps >=7:1 contrast against
# the plate so it still scans off a printed card.
# --------------------------------------------------------------------------
def build_qr(size_px: int, quiet_modules: int = 4) -> Image.Image:
    qr = qrcode.QRCode(error_correction=ERROR_CORRECT_H, box_size=1, border=0)
    qr.add_data(QR_URL)
    qr.make(fit=True)
    m = np.array(qr.get_matrix(), dtype=bool)
    n = m.shape[0]
    total = n + 2 * quiet_modules

    box = size_px // total
    size = box * total
    img = Image.new("RGB", (size, size), P8_WHITE)
    d = ImageDraw.Draw(img)

    off = quiet_modules * box
    cut = max(1, box // 5)           # chamfer, echoes the logo's cut corners

    def is_finder(r, c):
        return ((r < 7 and c < 7) or (r < 7 and c >= n - 7)
                or (r >= n - 7 and c < 7))

    # data modules: a top-to-bottom wash from ink black into the art's deep
    # space blue. Both ends are far darker than the plate, so contrast holds.
    for r in range(n):
        t = r / max(n - 1, 1)
        col = tuple(int(round(P8_BLACK[i] * (1 - t) + P8_DARKBLUE[i] * t))
                    for i in range(3))
        for c in range(n):
            if not m[r, c] or is_finder(r, c):
                continue
            x0, y0 = off + c * box, off + r * box
            d.polygon(C.chamfer_points(x0, y0, x0 + box - 1, y0 + box - 1, cut),
                      fill=col)

    # finder patterns drawn as chamfered rings with a deep-space-blue pupil
    for (r0, c0) in [(0, 0), (0, n - 7), (n - 7, 0)]:
        x0, y0 = off + c0 * box, off + r0 * box
        x1, y1 = x0 + 7 * box - 1, y0 + 7 * box - 1
        d.polygon(C.chamfer_points(x0, y0, x1, y1, box), fill=P8_BLACK)
        d.polygon(C.chamfer_points(x0 + box, y0 + box, x1 - box, y1 - box,
                                   box * 3 // 4), fill=P8_WHITE)
        d.polygon(C.chamfer_points(x0 + 2 * box, y0 + 2 * box,
                                   x1 - 2 * box, y1 - 2 * box, box // 2),
                  fill=P8_DARKBLUE)

    # raygun roundel in the middle; error-correction level H covers the loss
    icon_m = 7
    icon_px = icon_m * box
    cx = size // 2
    half = icon_px // 2 + box // 2
    d.polygon(C.chamfer_points(cx - half, cx - half, cx + half, cx + half,
                               box), fill=P8_WHITE)
    icon = C.trim_alpha(C.render_svg("raygun-v2-icon.svg", icon_px * 3,
                                     strip_bg=False))
    icon = icon.resize((icon_px, icon_px), Image.LANCZOS)
    paste(img, icon.convert("RGBA"), (cx - icon_px // 2, cx - icon_px // 2))

    for name, col in (("black", P8_BLACK), ("dark blue", P8_DARKBLUE)):
        ratio = C.contrast(col, P8_WHITE)
        assert ratio >= 7.0, f"{name} only {ratio:.1f}:1 against the plate"
    return img


# --------------------------------------------------------------------------
# BACK — black card, QR plate right, contact block left
# --------------------------------------------------------------------------
def make_back() -> Image.Image:
    # black, with a barely-there lift toward the art's deep space blue at the
    # bottom edge so the two sides feel like the same night sky
    base = np.zeros((CANVAS_H, CANVAS_W, 3), dtype=np.float64)
    t = (np.linspace(0, 1, CANVAS_H) ** 2.6)[:, None]
    for i in range(3):
        base[:, :, i] = t * (P8_DARKBLUE[i] * 0.5)
    card = Image.fromarray(base.clip(0, 255).astype(np.uint8), "RGB")
    paste(card, C.starfield((CANVAS_W, CANVAS_H), seed=11, density=0.000035,
                            palette=[P8_WHITE, (194, 195, 199), P8_INDIGO]),
          (0, 0))

    d = ImageDraw.Draw(card, "RGBA")

    # ---- QR plate, right ------------------------------------------------
    qr = build_qr(px(1.12))
    plate = qr.width
    cap_f = font("Jura-Medium.ttf", 34)
    cap = "SCAN FOR HEAVYPHOTON.COM"
    cap_gap, cap_h = 30, 40

    qx1 = SAFE[2]
    qx0 = qx1 - plate
    group_h = plate + cap_gap + cap_h
    qy0 = (SAFE[1] + SAFE[3]) // 2 - group_h // 2

    fr = 15
    d.polygon(C.chamfer_points(qx0 - fr, qy0 - fr, qx1 + fr, qy0 + plate + fr, 28),
              fill=P8_YELLOW + (255,))
    d.polygon(C.chamfer_points(qx0 - 6, qy0 - 6, qx1 + 6, qy0 + plate + 6, 20),
              fill=P8_WHITE + (255,))
    card.paste(qr, (qx0, qy0))
    for (sx, sy, col) in ((qx0 - fr, qy0 - fr, P8_RED),
                          (qx1 + fr - 32, qy0 - fr, BRAND_CYAN),
                          (qx0 - fr, qy0 + plate + fr - 32, BRAND_CYAN),
                          (qx1 + fr - 32, qy0 + plate + fr - 32, P8_RED)):
        d.polygon(C.chamfer_points(sx, sy, sx + 32, sy + 32, 10), fill=col + (255,))

    cw = C.text_width(d, cap, cap_f, tracking=4)
    C.text_tracked(d, (qx0 + (plate - cw) / 2, qy0 + plate + cap_gap), cap,
                   cap_f, BRAND_CYAN + (225,), tracking=4)

    # ---- contact block, left --------------------------------------------
    x = SAFE[0]
    logo_h = px(0.185)
    logo = C.logo_at_height(LOGO, logo_h)
    name_f = font("Tektur-Medium.ttf", 92)
    lab_f = font("Jura-Medium.ttf", 34)
    val_f = font("GeistMono-Regular.ttf", 50)

    name_h = name_f.getbbox("RUBEN TIPPARACH")[3]
    lab_h = lab_f.getbbox("EMAIL")[3]
    val_h = val_f.getbbox("gy@.")[3]
    row_h = lab_h + 16 + val_h
    stack = [logo_h, 52, name_h, 30, 4, 44, row_h, 34, row_h]
    y = (SAFE[1] + SAFE[3]) // 2 - sum(stack) // 2

    paste(card, logo, (x, y))
    y += stack[0] + stack[1]

    C.text_tracked(d, (x, y - name_f.getbbox("R")[1]), NAME, name_f,
                   BONE + (255,), tracking=5)
    name_w = C.text_width(d, NAME, name_f, tracking=5)
    y += stack[2] + stack[3]

    d.rectangle([x, y, x + int(name_w), y + 3], fill=BRAND_CYAN + (255,))
    y += stack[4] + stack[5]

    for i, (label, value, accent) in enumerate((("EMAIL", EMAIL, P8_YELLOW),
                                                ("WEB", SITE, P8_BLUE))):
        d.rectangle([x, y + 4, x + 7, y + lab_h], fill=accent + (255,))
        C.text_tracked(d, (x + 26, y - lab_f.getbbox("E")[1]), label, lab_f,
                       P8_INDIGO + (255,), tracking=7)
        d.text((x, y + lab_h + 16), value, font=val_f, fill=BONE + (255,))
        y += row_h + 34
    return card


# --------------------------------------------------------------------------
def mockup(front: Image.Image, back: Image.Image) -> Image.Image:
    """Both trimmed sides side by side on a neutral ground."""
    f, b = C.trimmed(front), C.trimmed(back)
    m, gap = 90, 70
    sheet = Image.new("RGB", (m * 2 + f.width + gap + b.width, m * 2 + f.height),
                      (22, 24, 28))
    d = ImageDraw.Draw(sheet)
    for i, im in enumerate((f, b)):
        x = m + i * (f.width + gap)
        d.rectangle([x - 3, m - 3, x + im.width + 2, m + im.height + 2],
                    outline=(70, 74, 82), width=3)
        sheet.paste(im, (x, m))
    return sheet


def verify(back: Image.Image) -> None:
    """The QR has to survive print and a phone camera, so prove it decodes
    from the flattened card at a few realistic sizes and a bit of blur."""
    import zxingcpp
    for w in (2250, 1200, 700, 460):
        probe = back.resize((w, int(w * CANVAS_H / CANVAS_W)), Image.LANCZOS)
        if w <= 700:
            probe = probe.filter(ImageFilter.GaussianBlur(0.6))
        hits = [r.text for r in zxingcpp.read_barcodes(probe)]
        assert QR_URL in hits, f"QR did not decode at {w}px wide: {hits}"
        print(f"  QR decodes at {w}px wide -> {QR_URL}")


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    front, back = make_front(), make_back()
    verify(back)

    dpi = (C.DPI, C.DPI)
    front.save(os.path.join(OUT, "front-bleed-600dpi.png"), dpi=dpi)
    back.save(os.path.join(OUT, "back-bleed-600dpi.png"), dpi=dpi)

    half = (CANVAS_W // 2, CANVAS_H // 2)
    front.resize(half, Image.LANCZOS).save(
        os.path.join(OUT, "front-bleed-300dpi.png"), dpi=(300, 300))
    back.resize(half, Image.LANCZOS).save(
        os.path.join(OUT, "back-bleed-300dpi.png"), dpi=(300, 300))

    front.convert("RGB").save(
        os.path.join(OUT, "heavy-photon-business-card.pdf"),
        save_all=True, append_images=[back.convert("RGB")], resolution=C.DPI)

    C.guides(front).save(os.path.join(OUT, "preview-front-guides.png"))
    C.guides(back).save(os.path.join(OUT, "preview-back-guides.png"))
    C.trimmed(front).save(os.path.join(OUT, "preview-front-trimmed.png"))
    C.trimmed(back).save(os.path.join(OUT, "preview-back-trimmed.png"))
    mockup(front, back).save(os.path.join(OUT, "preview-both.png"))
    print("wrote", len(os.listdir(OUT)), "files to", OUT)


if __name__ == "__main__":
    main()
