"""Render a character from a camera that follows one of its bones, frame by frame.

    blender -b OUT/scene.blend -P follow_sheet.py -- OUTDIR ARMATURE FIRST LAST \
        [--step N] [--bone pelvis] [--from-camera cam_S8 | --at X,Y,Z] [--dist 2.6] \
        [--height 0.55] [--lens 50] [--size 300x420] [--samples 16] [--exposure 2.4]

Frames are OUTPUT frames (the rendered 24 fps ones, between the story keys
included). The camera looks at the bone's head, lowered to --height, from
--dist metres away on the side a shot camera sees it from (--from-camera), or
from a fixed point (--at). Writes OUTDIR/t_NNNN.png; tile them with
contact_sheet.py. Markers are removed in memory so the camera stays put.
"""
import os
import sys

import bpy
from mathutils import Vector

a = sys.argv[sys.argv.index("--") + 1:]
out, name, first, last = a[0], a[1], int(a[2]), int(a[3])


def opt(key, default):
    return a[a.index(key) + 1] if key in a else default


step = int(opt("--step", 1))
bone = opt("--bone", "pelvis")
shot = opt("--from-camera", None)
at = opt("--at", None)
dist = float(opt("--dist", 2.6))
height = float(opt("--height", 0.55))
w, h = (int(v) for v in opt("--size", "300x420").split("x"))

os.makedirs(out, exist_ok=True)
scn = bpy.context.scene
for m in list(scn.timeline_markers):
    scn.timeline_markers.remove(m)
cam = bpy.data.objects.new("follow_cam", bpy.data.cameras.new("follow_cam"))
scn.collection.objects.link(cam)
cam.data.lens = float(opt("--lens", 50))
scn.camera = cam
scn.render.resolution_x, scn.render.resolution_y, scn.render.resolution_percentage = w, h, 100
scn.render.use_motion_blur = False
scn.cycles.samples = int(opt("--samples", 16))
scn.view_settings.exposure = float(opt("--exposure", 2.4))
arm = bpy.data.objects[name]
for f in range(first, last + 1, step):
    scn.frame_set(f)
    p = arm.matrix_world @ arm.pose.bones[bone].head
    target = Vector((p.x, p.y, height))
    if at:
        cam.location = Vector(float(v) for v in at.split(","))
    else:
        src = bpy.data.objects[shot].matrix_world.translation if shot else target + Vector((dist, 0, 0))
        d = src - target
        d.z = 0
        cam.location = target + d.normalized() * dist + Vector((0, 0, 0.25))
    cam.rotation_euler = (target - cam.location).to_track_quat("-Z", "Y").to_euler()
    scn.render.filepath = os.path.join(out, "t_%04d.png" % f)
    bpy.ops.render.render(write_still=True)
print("FOLLOW_SHEET wrote", out)
