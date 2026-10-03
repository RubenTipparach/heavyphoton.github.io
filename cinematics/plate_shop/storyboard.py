"""Storyboard sheet: one frame per shot from the finished film, with timing
and action. Shots are listed in 15 fps story frames, the way the cut is
authored; OUT/timing.json maps them to the frames finish.py wrote.

    python3 storyboard.py OUT     (reads OUT/final, written by finish.py)
"""
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

OUT = sys.argv[1] if len(sys.argv) > 1 else 'out'
FPS = 15
SHOTS = [  # name, start, end (story frames), key frame, action
    ("S1  Establishing", 0, 60, 30, "Crane down over the dark shop. Moonlight through barred\nwindows; one press lit; he works the line alone."),
    ("S2  Stamp insert", 60, 90, 81, "The ram slams a blank. Sparks."),
    ("S3  Door behind him", 90, 135, 118, "He lifts a plate off the bed, unaware. Far door opens:\na suit, a hat, backlit in the corridor light."),
    ("S4  Walk, low", 135, 195, 160, "A formal walk through the moon shafts, past the lens,\nstraight for his back."),
    ("S5  His face", 195, 228, 215, "Through the press. He stops: a cyan glow is\ngrowing behind his head."),
    ("S6  Over the shooter", 228, 249, 244, "Two-handed, the photon gun at the back of his head.\nHeavy Photon plates ride the belt behind. Fire."),
    ("S7  The shot", 249, 251, 250, "White-out on the flash. The hit is never shown."),
    ("S8  Wide, aftermath", 251, 312, 290, "He pitches forward and slides onto the feed table,\na ragdoll. The suit looks round, turns, walks out."),
    ("S9  The last plate", 312, 368, 350, "Crane up over the bed to his last plate, square and\ncentred: the Heavy Photon lockup, embossed, glossy."),
    ("S10  The logo", 368, 428, 390, "Match dissolve: the plate is the logo's frame in\nsheet metal, and becomes the 3D logo. Holds 3 s,\nthen fades to black in 1 s."),
]
S, W, H, G = 3, 192, 108, 16
TW, TH = W * S, H * S
CAP = 74
font_b = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 17)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14)
font_h = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
cols = 3
rows = (len(SHOTS) + cols - 1) // cols
total = SHOTS[-1][2]
sheet = Image.new('RGB', (cols * (TW + G) + G, 110 + rows * (TH + CAP + G)), '#0B0E14')
d = ImageDraw.Draw(sheet)
d.text((G, 22), 'PLATE SHOP  /  storyboard', font=font_h, fill='#F2F0E9')
tpath = os.path.join(OUT, 'timing.json')
T = json.load(open(tpath)) if os.path.exists(tpath) else {"story_fps": 15, "fps": 15, "first": 1, "trans": [357, 369]}
K = T["fps"] / float(T["story_fps"])
RW, RH = Image.open(os.path.join(OUT, 'final', 'f_0001.png')).size
box = RH * 16 > RW * 9 + 8     # letterboxed: the picture is the 16:9 band in the middle
PH = RW * 9 // 16 if box else RH
d.text((G, 66), '%d shots, %.1f s, %d fps. MPFB bodies on UAL clips, a Bullet ragdoll; Cycles at %d x %d%s.'
       % (len(SHOTS), total / FPS, T["fps"], RW, PH, ' in a %d x %d letterbox' % (RW, RH) if box else ''),
       font=font, fill='#3EE0FF')
SCALE = Image.NEAREST if RW < TW else Image.LANCZOS   # small renders stay crisp


def index(k):
    """The finished frame (1-based) that shows story frame k."""
    end = T["trans"][1]
    f = int(round(k * K)) + (T["first"] if T["first"] == 1 and K == 1 else 0)
    if f <= end:
        return f - T["first"] + 1
    return end - T["first"] + 1 + int(round(k * K)) - end


def tc(f):
    s = f / FPS
    return '%d:%04.1f' % (s // 60, s % 60)


for i, (name, a, b, k, act) in enumerate(SHOTS):
    r, c = divmod(i, cols)
    x, y = G + c * (TW + G), 110 + r * (TH + CAP + G)
    im = Image.open(os.path.join(OUT, 'final', 'f_%04d.png' % index(k))).convert('RGB')
    im = im.crop((0, (RH - PH) // 2, RW, (RH - PH) // 2 + PH)).resize((TW, TH), SCALE)
    sheet.paste(im, (x, y))
    d.text((x, y + TH + 6), name, font=font_b, fill='#F2F0E9')
    d.text((x + TW, y + TH + 8), '%s - %s  (%d f)' % (tc(a), tc(b), round((b - a) * K)), font=font, fill='#8B93A3', anchor='ra')
    d.multiline_text((x, y + TH + 30), act, font=font, fill='#B9C0CC', spacing=3)
sheet.save(os.path.join(OUT, 'storyboard.png'))
print(os.path.join(OUT, 'storyboard.png'), sheet.size)
