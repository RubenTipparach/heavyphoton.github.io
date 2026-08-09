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

# The two final lockups — see CLAUDE.md. Branded is the wide primary cut and
# carries the card; compact is the small-space cut and sits inside the QR.
LOGO_BRANDED = "raygun-v2-branded.svg"
LOGO_COMPACT = "raygun-v2-compact.svg"

QR_URL = "https://heavyphoton.com/#home"
NAME = "RUBEN TIPPARACH"
EMAIL = "ruben.tipparach@gmail.com"
SITE = "heavyphoton.com"

# Framing. Left as None the card frames itself around whatever structure it
# finds in the capture (see framed_art), which is what you want after dropping
# in a new screenshot. Set them to hand-place the window in native pixels.
ART_WIN_X: int | None = None
ART_WIN_W: int | None = None


# --------------------------------------------------------------------------
# game art framing
# --------------------------------------------------------------------------
def sky_band(art: np.ndarray, rows: int, seed: int = 3) -> np.ndarray:
    """A band of empty sky `rows` native pixels tall, star density and colours
    matched to the capture's own sky. Starfield only — the ship's pixels are
    never extended, repeated or invented."""
    w = art.shape[1]
    band = np.zeros((max(rows, 0), w, 3), dtype=np.uint8)
    if rows <= 0:
        return band

    # measure the capture's own star density above the first content row
    first = np.array([np.argmax(art[:, x].sum(axis=1) >= 40) if
                      (art[:, x].sum(axis=1) >= 40).any() else art.shape[0]
                      for x in range(w)])
    sky_px = stars = 0
    star_cols: list[tuple[int, int, int]] = []
    for x in range(w):
        col = art[: first[x], x]
        sky_px += len(col)
        lit = col[col.sum(axis=1) >= 40]
        stars += len(lit)
        star_cols.extend(map(tuple, lit.tolist()))
    density = stars / max(sky_px, 1)
    rng = random.Random(seed)
    if star_cols:
        cells = [(y, x) for y in range(rows) for x in range(w)]
        for y, x in rng.sample(cells, min(len(cells),
                                          int(round(len(cells) * density)))):
            band[y, x] = star_cols[rng.randrange(len(star_cols))]
    return band


def fade_offframe(art: np.ndarray, edge: str, depth: int = 12) -> np.ndarray:
    """Darken the last rows of columns whose content runs off the capture's
    top or bottom edge, so the file's hard boundary dissolves into space
    instead of printing as a cut line. Only ever dims pixels that exist —
    nothing is drawn, moved or repeated."""
    flip = edge == "bottom"
    art = art[::-1].copy() if flip else art.copy()
    runs_off = art[0].astype(int).sum(axis=1) >= 40
    if runs_off.any():
        # widen the mask a little either side and roll it off smoothly so the
        # faded columns don't meet the unfaded ones at a vertical seam
        w = art.shape[1]
        lateral = np.zeros(w)
        lateral[runs_off] = 1.0
        k = 7
        kernel = np.hanning(2 * k + 3)[1:-1]
        lateral = np.convolve(lateral, kernel / kernel.sum(), mode="same").clip(0, 1)
        vertical = np.linspace(0.0, 1.0, depth) ** 1.4      # 0 at the cut edge
        weight = 1.0 - (1.0 - vertical[:, None]) * lateral[None, :]
        art[:depth] = (art[:depth].astype(float) * weight[..., None]).astype(np.uint8)
    return art[::-1] if flip else art


def structure_span(art: np.ndarray) -> tuple[int, int]:
    """Horizontal extent of the station, ignoring sky and planet.

    Matches the hull's own colours — the lavender and grey plating, the truss
    yellow, the stripe red — so the framing tracks the ship rather than the
    planet's limb drifting through the bottom of the shot.
    """
    r, g, b = art[..., 0].astype(int), art[..., 1].astype(int), art[..., 2].astype(int)
    hull = (((abs(r - 131) < 45) & (abs(g - 118) < 45) & (abs(b - 156) < 45))
            | ((abs(r - 194) < 40) & (abs(g - 195) < 40) & (abs(b - 199) < 40))
            | ((r > 200) & (g > 140) & (b < 90))
            | ((r > 200) & (g < 80) & (b < 120)))
    # a column counts only if a real depth of it is hull, so the planet's
    # sand and cloud tones can't drag the span out to the frame edges
    cols = np.where(hull.sum(axis=0) >= max(4, round(art.shape[0] * 0.12)))[0]
    return (int(cols.min()), int(cols.max())) if len(cols) else (0, art.shape[1] - 1)


def framed_art() -> Image.Image:
    """The whole capture on the card's bleed aspect, at native scale.

    The image is never cropped into and the ship's pixels are never repeated
    or synthesised. The full frame spans the card's width, the planet runs off
    the bottom bleed, and the height is made up with pure starfield above. A
    capture that is already wider than the card's aspect gets the same
    centring with the extra width letterboxed by starfield instead.

    ART_WIN_X / ART_WIN_W hand-place a crop window and override all of this.
    """
    art = np.asarray(C.load_art_native(ART))
    card_aspect = C.BLEED_W_IN / C.BLEED_H_IN

    if ART_WIN_W is not None:                     # manual override: crop mode
        win_w = ART_WIN_W
        want_h = int(round(win_w / card_aspect))
        pad = np.vstack([sky_band(art, want_h - art.shape[0]), art]) \
            if want_h > art.shape[0] else art
        x0 = ART_WIN_X if ART_WIN_X is not None else (pad.shape[1] - win_w) // 2
        x0 = max(0, min(x0, pad.shape[1] - win_w))
        return Image.fromarray(pad[-want_h:, x0:x0 + win_w], "RGB")

    h, w = art.shape[:2]
    want_h = int(round(w / card_aspect))
    if want_h >= h:
        # letterbox vertically, capture centred: starfield above, plain black
        # below (no stars under the planet horizon), both cut edges dissolved
        art = fade_offframe(art, "top")
        art = fade_offframe(art, "bottom")
        pad_top = (want_h - h) // 2
        below = np.zeros((want_h - h - pad_top, w, 3), dtype=np.uint8)
        framed = np.vstack([sky_band(art, pad_top), art, below])
    else:
        # capture is taller than the card: letterbox horizontally instead
        want_w = int(round(h * card_aspect))
        side = (want_w - w)
        left = sky_band(art, h, seed=5).transpose(1, 0, 2)[: side // 2].transpose(1, 0, 2)
        right = sky_band(art, h, seed=7).transpose(1, 0, 2)[: side - side // 2].transpose(1, 0, 2)
        framed = np.hstack([left, art, right])
    return Image.fromarray(framed, "RGB")


# --------------------------------------------------------------------------
# FRONT — the game art, full bleed, nothing on top of it.
#
# The branding all lives on the back, so the front is left as one clean frame.
# `make_front(bar=True)` renders the earlier treatment — a translucent black
# bar carrying the lockup — for comparison.
# --------------------------------------------------------------------------
BAR_VISIBLE_IN = 0.40          # bar height measured up from the trim line
BAR_ALPHA = 212                # /255 — art stays faintly visible through it
FEATHER = 90                   # soft ramp above the bar so it doesn't hard-cut


def make_front(bar: bool = False) -> Image.Image:
    card = framed_art().resize((CANVAS_W, CANVAS_H), Image.NEAREST)
    if not bar:
        return card

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
    logo = C.logo_at_height(LOGO_BRANDED, logo_h)
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

    # the compact lockup in the middle; error-correction level H covers the
    # modules it costs (~5% of the symbol's area). The mark is bone-on-ink, so
    # it sits on its own dark tile with a light gap holding it off the data.
    mark = C.logo_at_height(LOGO_COMPACT, 4 * box)
    cx = size // 2
    hw, hh = mark.width // 2, mark.height // 2
    d.polygon(C.chamfer_points(cx - hw - box, cx - hh - box,
                               cx + hw + box, cx + hh + box, box // 2),
              fill=P8_WHITE)
    pad = box // 2
    d.polygon(C.chamfer_points(cx - hw - pad, cx - hh - pad,
                               cx + hw + pad, cx + hh + pad, box // 3),
              fill=C.INK)
    paste(img, mark, (cx - hw, cx - hh))

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

    cw = C.text_width(d, cap, cap_f, tracking=4)
    C.text_tracked(d, (qx0 + (plate - cw) / 2, qy0 + plate + cap_gap), cap,
                   cap_f, BRAND_CYAN + (225,), tracking=4)

    # ---- contact block, left --------------------------------------------
    x = SAFE[0]
    logo_h = px(0.185)
    logo = C.logo_at_height(LOGO_BRANDED, logo_h)
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
    front_bar = make_front(bar=True)
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
    front_bar.save(os.path.join(OUT, "alt-front-bar-bleed-600dpi.png"), dpi=dpi)
    C.trimmed(front_bar).save(os.path.join(OUT, "preview-front-bar-trimmed.png"))
    C.trimmed(back).save(os.path.join(OUT, "preview-back-trimmed.png"))
    mockup(front, back).save(os.path.join(OUT, "preview-both.png"))
    print("wrote", len(os.listdir(OUT)), "files to", OUT)


if __name__ == "__main__":
    main()
