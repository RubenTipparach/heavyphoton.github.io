"""Cut the render and the pre-rendered 3D logo into the finished animatic.

    python3 finish.py OUT [--final]

Reads OUT/frames/f_NNNN.png (the render, frame numbers from OUT/timing.json)
and writes OUT/final/f_0001.png onwards:

  up to the dissolve       as rendered
  the dissolve (TRANS)     the plate becomes the 3D logo: the plate is the
                           logo's frame in sheet metal and the overhead hold
                           frames it exactly as the end card frames the logo
                           (OUT/s9_plate.json), so it is a cross-fade in place,
                           through a cyan bloom
  then the hold            the logo for 3 s, with a slow 1.5 % push so the
                           hold is not a freeze frame

--final adds the late-90s finish:
  a vignette and per-frame film grain on the picture, a 640 x 480 letterbox
  around it, and the whole film reduced to one 256-colour palette with
  error-diffusion dither. One palette for every frame, built from frames
  sampled across the film, so colours never flicker from frame to frame.

The logo is heavyphoton.github.io's approved 3D render of the primary lockup,
branding/render3d/final/heavy-photon-3d-4k.png, on the brand's ink.
"""
import json
import os
import shutil
import sys

import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from paths import HEAVYPHOTON  # noqa: E402

LOGO = os.path.join(HEAVYPHOTON, "branding", "render3d", "final", "heavy-photon-3d-4k.png")
INK = (11, 14, 20)          # #0B0E14
CYAN = np.array([62, 224, 255], np.float32) / 255.0   # #3EE0FF
WIDTH = 0.84                # the logo's share of the frame width (scene.LOGO_FILL);
                            # the plate's measured width overrides it, so the two match to the pixel
# 15 fps story timing, for renders made before timing.json existed
LEGACY = {"story_fps": 15, "fps": 15, "first": 1, "last": 369, "trans": [357, 369], "hold": 45}

# the late-90s finish
BOX = (640, 480)            # the letterbox frame; the picture sits in its middle
VIGNETTE = 0.32             # how dark the corners go
GRAIN = 0.03                # film grain, standard deviation in 0..1 light
COLOURS = 256
PALETTE_SAMPLES = 48        # frames sampled across the film to build the palette


def card(logo, W, H, scale, shift=(0.0, 0.0)):
    w = int(round(W * WIDTH * scale))
    h = int(round(w * logo.height / logo.width))
    bg = Image.new("RGBA", (W, H), INK + (255,))
    at = (int(round((W - w) / 2 + shift[0])), int(round((H - h) / 2 + shift[1])))
    bg.alpha_composite(logo.resize((w, h), Image.LANCZOS), at)
    return np.asarray(bg.convert("RGB"), np.float32) / 255.0


def matched(W, H, logo, plate):
    """Scale and shift that lay the logo over the plate's frame."""
    s0 = plate["w"] * W / (W * WIDTH)
    return s0, (plate["cx"] * W - W / 2, plate["cy"] * H - H / 2)


def bloom(img, radius):
    pil = Image.fromarray((np.clip(img, 0, 1) * 255).astype(np.uint8))
    lum = np.asarray(pil.convert("L").filter(ImageFilter.GaussianBlur(radius)), np.float32) / 255.0
    return lum[..., None] * CYAN


def look(a, n):
    """Vignette and film grain, on the picture before the letterbox."""
    H, W = a.shape[:2]
    y, x = np.mgrid[0:H, 0:W].astype(np.float32)
    r2 = ((x - W / 2) / (W / 2)) ** 2 * 0.7 + ((y - H / 2) / (H / 2)) ** 2 * 0.5
    a = a * (1.0 - VIGNETTE * np.clip(r2, 0, 1.6) ** 1.3)[..., None]
    g = np.random.default_rng(1000 + n).normal(0.0, GRAIN, (H, W, 1)).astype(np.float32)
    return a + g * (0.5 + 0.5 * np.sqrt(np.clip(a.mean(axis=2, keepdims=True), 0, 1)))


def letterbox(a):
    H, W = a.shape[:2]
    bw, bh = BOX
    if W != bw:
        img = Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))
        img = img.resize((bw, round(H * bw / W)), Image.LANCZOS)
        a = np.asarray(img, np.float32) / 255.0
        H, W = a.shape[:2]
    out = np.zeros((bh, bw, 3), np.float32)
    top = (bh - H) // 2
    out[top:top + H] = a
    return out


def save(a, path):
    Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8)).save(path)


def main():
    out = sys.argv[1]
    final = "--final" in sys.argv
    src, dst = os.path.join(out, "frames"), os.path.join(out, "final")
    tpath = os.path.join(out, "timing.json")
    T = json.load(open(tpath)) if os.path.exists(tpath) else LEGACY
    os.makedirs(dst, exist_ok=True)
    work = os.path.join(out, "final_rgb") if final else dst
    os.makedirs(work, exist_ok=True)
    logo = Image.open(LOGO).convert("RGBA")
    first = Image.open(os.path.join(src, "f_%04d.png" % T["first"]))
    W, H = first.size
    plate = json.load(open(os.path.join(out, "s9_plate.json")))
    global WIDTH
    WIDTH = plate["w"]
    s0, (dx, dy) = matched(W, H, logo, plate)
    print("match: the logo card fills %.2f %% of the width (logo %.3f : 1, plate %.3f : 1), "
          "starts at %.1f %% size, shifted %.1f, %.1f px" % (100 * WIDTH, logo.width / logo.height,
                                                            plate.get("aspect_px", 0), 100 * s0, dx, dy))

    def emit(a, n):
        if final:
            a = letterbox(look(a, n))
        save(a, os.path.join(work, "f_%04d.png" % n))

    n = 0
    t0, t1 = T["trans"]
    ease = lambda u: u * u * (3 - 2 * u)
    for f in range(T["first"], t1 + 1):
        n += 1
        path = os.path.join(src, "f_%04d.png" % f)
        if f <= t0 and not final:
            shutil.copyfile(path, os.path.join(work, "f_%04d.png" % n))
            continue
        base = np.asarray(Image.open(path).convert("RGB"), np.float32) / 255.0
        if f <= t0:
            emit(base, n)
            continue
        a = (f - t0) / (t1 - t0)
        s = ease(min(1.0, a * 1.4))        # the logo comes up out of the plate early
        e = ease(a)
        c = card(logo, W, H, s0 + (1 - s0) * e, ((1 - e) * dx, (1 - e) * dy))
        mix = base * (1 - s) + c * s
        glow = np.sin(np.pi * a) * 0.9
        emit(mix + glow * bloom(np.maximum(base, c), 10 * W / 768) + glow * 0.25 * bloom(mix, 40 * W / 768), n)
    hold = T["hold"]
    for k in range(hold):
        n += 1
        emit(card(logo, W, H, 1.0 + 0.015 * k / (hold - 1)), n)

    if final:
        # One palette for the whole film, from frames sampled across it.
        picks = np.linspace(1, n, min(PALETTE_SAMPLES, n)).round().astype(int)
        tiles = [Image.open(os.path.join(work, "f_%04d.png" % i)).convert("RGB").resize(
            (BOX[0] // 2, BOX[1] // 2), Image.BOX) for i in picks]
        cols = 8
        rows = (len(tiles) + cols - 1) // cols
        atlas = Image.new("RGB", (cols * BOX[0] // 2, rows * BOX[1] // 2))
        for i, t in enumerate(tiles):
            atlas.paste(t, ((i % cols) * BOX[0] // 2, (i // cols) * BOX[1] // 2))
        pal = atlas.quantize(colors=COLOURS, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
        for i in range(1, n + 1):
            im = Image.open(os.path.join(work, "f_%04d.png" % i)).convert("RGB")
            im.quantize(palette=pal, dither=Image.Dither.FLOYDSTEINBERG).save(os.path.join(dst, "f_%04d.png" % i))
        pal.save(os.path.join(out, "palette.png"))
        print("palette: %d colours from %d frames" % (COLOURS, len(picks)))
    print("%d frames, %.2f s at %d fps, to %s" % (n, n / float(T["fps"]), T["fps"], dst))


if __name__ == "__main__":
    main()
