"""Tile rendered frames into one labelled contact sheet.

    python3 contact_sheet.py SRC_DIR OUT.png [--cols 8] [--story-fps 15 --fps 24] [--gain 1.0]
    python3 contact_sheet.py OUT.png --pairs before_dir after_dir --frames 458,460,472 ...

Labels each tile with its output frame and, with --story-fps/--fps, the story
frame. --gain brightens dark night shots for reading. --pairs puts two runs of
the same frames one above the other (before on top), for a before and after.
"""
import glob
import os
import sys

from PIL import Image, ImageDraw

a = sys.argv[1:]


def opt(key, default):
    return a[a.index(key) + 1] if key in a else default


cols = int(opt("--cols", 8))
gain = float(opt("--gain", 1.0))
story = float(opt("--story-fps", 0)) / float(opt("--fps", 1)) if "--story-fps" in a else 0.0


def frame_no(path):
    return int("".join(c for c in os.path.basename(path) if c.isdigit()) or 0)


def label(n):
    return "%d (story %.1f)" % (n, n * story) if story else str(n)


def load(path):
    im = Image.open(path).convert("RGB")
    return im.point(lambda v: min(255, int(v * gain))) if gain != 1.0 else im


if "--pairs" in a:
    out = a[0]
    dirs = a[a.index("--pairs") + 1:a.index("--pairs") + 3]
    frames = [int(v) for v in opt("--frames", "").split(",") if v]
    rows = [[sorted(glob.glob(os.path.join(d, "*%04d.png" % f)) or glob.glob(os.path.join(d, "*%03d.png" % f)))[0]
             for f in frames] for d in dirs]
else:
    src, out = a[0], a[1]
    rows = None
    files = sorted(glob.glob(os.path.join(src, "*.png")), key=frame_no)

tiles = [p for r in rows for p in r] if rows else files
tw, th = Image.open(tiles[0]).size
ncol = len(rows[0]) if rows else cols
nrow = len(rows) if rows else (len(files) + cols - 1) // cols
sheet = Image.new("RGB", (ncol * tw, nrow * th))
d = ImageDraw.Draw(sheet)
for i, p in enumerate(tiles):
    x, y = (i % ncol) * tw, (i // ncol) * th
    sheet.paste(load(p), (x, y))
    tag = label(frame_no(p))
    if rows:
        tag = ("before " if i < ncol else "after ") + tag
    d.text((x + 4, y + 4), tag, fill=(255, 255, 0))
sheet.save(out)
print("CONTACT_SHEET", out, sheet.size)
