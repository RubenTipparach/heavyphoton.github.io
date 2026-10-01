#!/usr/bin/env python3
"""Render the approval round: every lighting style in one finish, and every
finish under one lighting style with a close-up of the gun beside it.

    python3 render_previews.py                # all of it
    python3 render_previews.py --only lights  # or: materials

Renders land in previews/, one PNG per look, which the review page shows.
Set BLENDER to the blender binary if it is not the default below.
"""
import argparse
import os
import subprocess
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
BLENDER = os.environ.get("BLENDER", "/opt/tools/blender-4.5.14-linux-x64/blender")
OUT = os.path.join(HERE, "previews")

LIGHTS = ["studio", "noir", "space", "ember", "product"]
FINISHES = ["bone_enamel", "brushed_steel", "polished_brass", "gloss_ceramic", "hull_panels"]
CLOSE_CAM = ["-9.5", "-9.0", "2.4", "-3.6", "0", "0.0", "40"]

RES = ["960", "540"]
SAMPLES = "64"


def render(material, light, out, cam=None, res=RES, samples=SAMPLES):
    if os.path.exists(out):
        print("  have", os.path.relpath(out, HERE))
        return
    cmd = [BLENDER, "-b", "--factory-startup", "-P", os.path.join(HERE, "build_scene.py"),
           "--", "--material", material, "--light", light, "--res", *res,
           "--samples", samples, "--out", out]
    if cam:
        cmd += ["--cam", *cam]
    t0 = time.time()
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0 or not os.path.exists(out):
        print(r.stdout[-3000:], r.stderr[-3000:])
        raise SystemExit("render failed: " + out)
    print("  %-48s %5.0fs" % (os.path.relpath(out, HERE), time.time() - t0), flush=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", choices=["lights", "materials"])
    a = ap.parse_args()
    os.makedirs(OUT, exist_ok=True)
    if a.only in (None, "lights"):
        print("lighting styles, bone enamel:")
        for light in LIGHTS:
            render("bone_enamel", light, os.path.join(OUT, "light-%s.png" % light))
    if a.only in (None, "materials"):
        print("finishes, studio light:")
        for fin in FINISHES:
            render(fin, "studio", os.path.join(OUT, "finish-%s.png" % fin))
            render(fin, "studio", os.path.join(OUT, "finish-%s-close.png" % fin), cam=CLOSE_CAM)


if __name__ == "__main__":
    sys.exit(main())
