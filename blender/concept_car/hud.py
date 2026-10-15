#!/usr/bin/env python3
"""Draw the timelapse HUD onto the rendered frames and encode the video.

    python3 hud.py RUN_DIR OUT.mp4

Per frame (from RUN_DIR/frames.json): the step and its name, the Blender
operation behind it, the body's live vertex and face counts and the scene's
triangles, and a progress bar. A title card is held over the first frame.
"""
import json
import os
import shutil
import subprocess
import sys

from PIL import Image, ImageDraw, ImageFont

run, out = sys.argv[1], sys.argv[2]
TITLE = sys.argv[3] if len(sys.argv) > 3 else "Modeling a car in Blender"
SUBTITLE = sys.argv[4] if len(sys.argv) > 4 else "a timelapse, built step by step by Claude"
FONT = "/usr/share/fonts/truetype/dejavu/"
sans = lambda s: ImageFont.truetype(FONT + "DejaVuSans.ttf", s)
bold = lambda s: ImageFont.truetype(FONT + "DejaVuSans-Bold.ttf", s)
mono = lambda s: ImageFont.truetype(FONT + "DejaVuSansMono.ttf", s)
ORANGE = (232, 125, 13)
TEXT = (230, 230, 230)
DIM = (160, 160, 160)
PANEL = (24, 24, 24, 190)

frames = json.load(open(os.path.join(run, "frames.json")))
tmp = os.path.join(run, "hud_frames")
if os.path.isdir(tmp):
    shutil.rmtree(tmp)
os.makedirs(tmp)


def panel(d, box):
    d.rounded_rectangle(box, radius=8, fill=PANEL)


def hud(im, fr, k, total):
    ov = Image.new("RGBA", im.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(ov)
    W, H = im.size
    # Step panel, top left.
    title = "Final render" if fr.get("final") else "Step %d / %d" % (fr["step"], fr["steps"])
    name = "Cycles, studio lighting" if fr.get("final") else fr["name"]
    op = fr["op"]
    f1, f2, f3 = bold(15), sans(26), mono(17)
    w = max(d.textlength(title, font=f1), d.textlength(name, font=f2), d.textlength(op, font=f3)) + 36
    panel(d, (20, 20, 20 + w, 128))
    d.text((38, 32), title.upper(), font=f1, fill=ORANGE)
    d.text((38, 54), name, font=f2, fill=TEXT)
    d.text((38, 94), op, font=f3, fill=DIM)
    # Stats, top right.
    stats = ["Verts  %s" % format(fr["verts"], ","), "Faces  %s" % format(fr["faces"], ","),
             "Tris   %s" % format(fr["tris"], ",")]
    fs = mono(15)
    sw = max(d.textlength(s, font=fs) for s in stats) + 32
    panel(d, (W - 20 - sw, 20, W - 20, 20 + 22 * len(stats) + 20))
    for i, s in enumerate(stats):
        d.text((W - 4 - sw, 30 + 22 * i), s, font=fs, fill=TEXT)
    tag, ft = "Blender 4.5 · Cycles", sans(13)
    d.text((W - 20 - d.textlength(tag, font=ft), 20 + 22 * len(stats) + 26), tag, font=ft, fill=DIM)
    # Modifier stack of the object being worked on, bottom left.
    if fr.get("stack"):
        lines = ["%s  modifiers" % fr.get("active", "")] + ["%d  %s" % (i + 1, m) for i, m in enumerate(fr["stack"])]
        fm = mono(14)
        mw = max(d.textlength(t, font=fm) for t in lines) + 32
        y0 = H - 30 - 21 * len(lines) - 16
        panel(d, (20, y0, 20 + mw, H - 30))
        for i, t in enumerate(lines):
            d.text((36, y0 + 10 + 21 * i), t, font=fm, fill=ORANGE if i == 0 else TEXT)
    # Progress, bottom.
    d.rectangle((0, H - 6, W, H), fill=(30, 30, 30, 220))
    d.rectangle((0, H - 6, int(W * (k + 1) / total), H), fill=ORANGE + (255,))
    return Image.alpha_composite(im.convert("RGBA"), ov).convert("RGB")


def title_card(im, alpha):
    ov = Image.new("RGBA", im.size, (0, 0, 0, int(170 * alpha)))
    d = ImageDraw.Draw(ov)
    W, H = im.size
    a = int(255 * alpha)
    t1, t2 = TITLE, SUBTITLE
    f1, f2 = bold(46), sans(24)
    d.text(((W - d.textlength(t1, font=f1)) / 2, H / 2 - 50), t1, font=f1, fill=TEXT + (a,))
    d.text(((W - d.textlength(t2, font=f2)) / 2, H / 2 + 14), t2, font=f2, fill=ORANGE + (a,))
    return Image.alpha_composite(im.convert("RGBA"), ov).convert("RGB")


n = 0
total = len(frames)
first = Image.open(os.path.join(run, "frames", "0001.png")).convert("RGB")
for i in range(36):
    alpha = 1.0 if i < 24 else 1.0 - (i - 24) / 12
    n += 1
    title_card(hud(first, frames[0], 0, total), alpha).save(os.path.join(tmp, "%05d.png" % n))
for k, fr in enumerate(frames):
    im = Image.open(os.path.join(run, "frames", "%04d.png" % (k + 1))).convert("RGB")
    n += 1
    hud(im, fr, k, total).save(os.path.join(tmp, "%05d.png" % n))
last = os.path.join(tmp, "%05d.png" % n)
for i in range(24):
    n += 1
    shutil.copy(last, os.path.join(tmp, "%05d.png" % n))
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", "24", "-i", os.path.join(tmp, "%05d.png"),
                "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-movflags", "+faststart", out], check=True)
shutil.rmtree(tmp)
print("wrote %s, %d frames, %.1f s" % (out, n, n / 24))
