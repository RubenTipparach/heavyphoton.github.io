#!/usr/bin/env python3
"""Cut the 4K render down to the sizes the website serves.

The site's boot screen shows the logo at min(420px, 62vw) CSS pixels, so a
browser wants anything from ~240 to ~420 CSS px times its device pixel ratio
(1x laptops up to 4x phones). These widths cover that with a srcset, and the
browser picks the smallest one that is still sharp. WebP keeps the alpha
(everything outside the frame stays transparent) at a fraction of a PNG.

    pip install pillow
    python3 export_web.py
"""
import os

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "final", "heavy-photon-3d-4k.png")
OUT = os.path.join(HERE, "..", "..", "work", "public", "branding")
WIDTHS = (480, 840, 1260, 1680)


def main():
    src = Image.open(SRC).convert("RGBA")
    os.makedirs(OUT, exist_ok=True)
    for w in WIDTHS:
        h = round(w * src.size[1] / src.size[0])
        path = os.path.join(OUT, "heavy-photon-3d-%d.webp" % w)
        src.resize((w, h), Image.LANCZOS).save(path, "WEBP", quality=90, method=6,
                                               exact=False)
        print("%-28s %4d x %3d  %6.1f KB" % (os.path.basename(path), w, h,
                                             os.path.getsize(path) / 1024))


if __name__ == "__main__":
    main()
