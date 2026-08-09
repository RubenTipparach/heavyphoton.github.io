#!/usr/bin/env python3
"""Export web-ready cuts of the final lockups.

The files in this folder carry an opaque #0B0E14 backing rect and a viewBox
with slack around the mark — right for a preview sheet, wrong for dropping a
logo onto a page. This strips the rect and tightens the viewBox to the ink, so
the SVG can sit on any background and be sized with plain CSS.

    python3 export_web_svg.py          # -> ../work/public/branding/

Needs cairosvg + pillow (only to measure the ink box).
"""

from __future__ import annotations

import io
import os
import re

import cairosvg
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(HERE, os.pardir, "work", "public", "branding")

# The two chosen lockups — see CLAUDE.md.
EXPORTS = {
    "raygun-v2-branded.svg": "heavy-photon-branded.svg",
    "raygun-v2-compact.svg": "heavy-photon-compact.svg",
}

BG_RECT = re.compile(r'<rect[^>]*fill="#0B0E14"[^>]*/>')
VIEWBOX = re.compile(r'viewBox="([\d.\s-]+)"\s+width="([\d.]+)"\s+height="([\d.]+)"')
PAD = 6  # viewBox units of breathing room around the ink


def ink_box(svg: str, probe_width: int = 2400):
    png = cairosvg.svg2png(bytestring=svg.encode("utf-8"), output_width=probe_width)
    img = Image.open(io.BytesIO(png)).convert("RGBA")
    box = img.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    return box, img.width, img.height


def export(src_name: str, out_name: str) -> None:
    with open(os.path.join(HERE, src_name), encoding="utf-8") as fh:
        svg = fh.read()

    m = VIEWBOX.search(svg)
    if not m:
        raise SystemExit(f"{src_name}: no viewBox/width/height to rewrite")
    vb_w, vb_h = float(m.group(2)), float(m.group(3))

    svg = BG_RECT.sub("", svg, count=1)
    box, pw, ph = ink_box(svg)
    if not box:
        raise SystemExit(f"{src_name}: nothing visible after dropping the backing rect")

    sx, sy = vb_w / pw, vb_h / ph
    x0 = max(0.0, round(box[0] * sx - PAD, 2))
    y0 = max(0.0, round(box[1] * sy - PAD, 2))
    x1 = min(vb_w, round(box[2] * sx + PAD, 2))
    y1 = min(vb_h, round(box[3] * sy + PAD, 2))
    w, h = round(x1 - x0, 2), round(y1 - y0, 2)

    svg = VIEWBOX.sub(f'viewBox="{x0} {y0} {w} {h}" width="{w}" height="{h}"',
                      svg, count=1)

    os.makedirs(DEST, exist_ok=True)
    path = os.path.join(DEST, out_name)
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(svg)
    print(f"{src_name:26s} -> {out_name:28s} {w} x {h}  ({w / h:.3f}:1)")


if __name__ == "__main__":
    for src, out in EXPORTS.items():
        export(src, out)
