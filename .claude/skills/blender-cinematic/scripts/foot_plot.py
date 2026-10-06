"""A top-down plot of a character's footprints and hip path, from motion_report.py's JSON.

    python3 foot_plot.py MOTION.json OUT.png [FIRST LAST] [--scale 420]

Grid squares are 10 cm. Each foot is drawn ankle to ball every frame: bright
while its ball is down, dim in the air (left orange, right blue); the white
line is the pelvis, labelled every 5 output frames. Planted feet should be one
bright mark (no smear); a turn should read as feet stepping round the hips.
"""
import json
import sys

from PIL import Image, ImageDraw

a = sys.argv[1:]
rows = json.load(open(a[0]))
if len(a) > 3 and not a[2].startswith("--"):
    rows = [r for r in rows if int(a[2]) <= r["f"] <= int(a[3])]
S = float(a[a.index("--scale") + 1]) if "--scale" in a else 420.0
W = H = 720
xs = [r[s]["ball"][0] for r in rows for s in "lr"] + [r["pelvis"][0] for r in rows]
ys = [r[s]["ball"][1] for r in rows for s in "lr"] + [r["pelvis"][1] for r in rows]
cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
P = lambda x, y: (W / 2 + (x - cx) * S, H / 2 - (y - cy) * S)
im = Image.new("RGB", (W, H), (20, 20, 24))
d = ImageDraw.Draw(im)
for g in range(-40, 41):
    d.line([P(cx + g * 0.1, cy - 4), P(cx + g * 0.1, cy + 4)], fill=(40, 40, 46))
    d.line([P(cx - 4, cy + g * 0.1), P(cx + 4, cy + g * 0.1)], fill=(40, 40, 46))
floor = {s: sorted(r[s]["ball"][2] for r in rows)[len(rows) // 10] for s in "lr"}
for s, col in (("l", (255, 120, 80)), ("r", (80, 200, 255))):
    for r in rows:
        A, B = r[s]["ankle"], r[s]["ball"]
        down = B[2] < floor[s] + 0.02
        d.line([P(A[0], A[1]), P(B[0], B[1])], fill=col if down else tuple(v // 3 for v in col), width=3 if down else 1)
for p, q in zip(rows, rows[1:]):
    d.line([P(*p["pelvis"][:2]), P(*q["pelvis"][:2])], fill=(230, 230, 230))
    if q["f"] % 5 == 0:
        d.text(P(q["pelvis"][0] + 0.02, q["pelvis"][1]), str(q["f"]), fill=(200, 200, 200))
d.text((10, 10), "grid 10 cm; bright = ball down; left orange, right blue; white = pelvis", fill=(220, 220, 220))
im.save(a[1])
print("FOOT_PLOT", a[1])
