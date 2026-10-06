"""Check a body's legs for twisting on every rendered frame.

    blender -b OUT/scene.blend -P check_legs.py -- [ARMATURE [FIRST LAST]]

Defaults: the suit, output frames 398 to 500 (story 248.8 to 312.5: from
inside the shot's white-out, where gait.py takes his legs over, through the
end of S8; before it he stands in the clip's own shooting stance, legs off
screen in S5 and S6). Each frame is evaluated as it renders, between the
15 fps keys included, and each leg is measured three ways, all about the
bone they turn on so a bent or tipped leg reads true:

  hip    the thigh's knee side against the hips' facing, about the thigh
         (a hip turns about 40 degrees in and 45 out)
  knee   the shin's front against the thigh's, about the shin (a knee is a
         hinge: past 20 degrees the shin is twisted)
  foot   the foot's side-to-side axis against the shin's, about the shin

and flagged when it leaves those ranges, when a knee folds the wrong way,
or when any of them jumps more than 10 degrees in a frame. And the legs
must not scissor: each knee and ankle stays on its own side of the body
(CROSS), and neither thigh swings in across the middle further than
closing the feet together takes it (ADDUCT). Prints every
flagged frame and each leg's range, and exits non-zero if any is flagged.
"""
import math
import sys

import bpy
from mathutils import Vector

argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
name = argv[0] if argv else "suit"
first, last = (int(argv[1]), int(argv[2])) if len(argv) > 2 else (398, 500)
HIP = (-40.0, 45.0)
KNEE = 20.0
FOOT = 30.0
JUMP = 10.0
CROSS = 0.05    # m each knee and ankle keeps to its own side of the other
ADDUCT = -12.0  # degrees a thigh may swing in across the body (the walk: -5; feet
                # closed together bring it in about 10)

scn = bpy.context.scene
arm = bpy.data.objects[name]
story = scn.render.frame_map_old / float(scn.render.frame_map_new)
FWD, RIGHT = Vector((0, -1, 0)), Vector((-1, 0, 0))   # the glb faces -Y in armature space
front, side = {}, {}
for b in ("thigh_l", "calf_l", "foot_l", "thigh_r", "calf_r", "foot_r"):
    inv = arm.data.bones[b].matrix_local.to_3x3().inverted()
    front[b], side[b] = (inv @ FWD).normalized(), (inv @ RIGHT).normalized()


def rot(b):
    return (arm.matrix_world @ arm.pose.bones[b].matrix).to_3x3()


def head(b):
    return arm.matrix_world @ arm.pose.bones[b].head


def signed(u, v, axis):
    """Degrees from u to v about axis, both seen square to it."""
    axis = axis.normalized()
    u, v = u - axis * u.dot(axis), v - axis * v.dot(axis)
    if u.length < 1e-6 or v.length < 1e-6:
        return 0.0
    return math.degrees(math.atan2(axis.dot(u.normalized().cross(v.normalized())), u.normalized().dot(v.normalized())))


rows = []
for f in range(first, last + 1):
    scn.frame_set(f)
    across = head("thigh_r") - head("thigh_l")
    facing = Vector((-across.y, across.x, 0)).normalized()
    right = across.normalized()
    up = head("spine_01") - head("pelvis")
    up = (up - right * up.dot(right)).normalized()
    r = {"f": f}
    r["knees"] = (head("calf_r") - head("calf_l")).dot(right)
    r["ankles"] = (head("foot_r") - head("foot_l")).dot(right)
    for s in "lr":
        th, ca, fo = "thigh_" + s, "calf_" + s, "foot_" + s
        H, K, A = head(th), head(ca), head(fo)
        th_ax, sh_ax = (K - H).normalized(), (A - K).normalized()
        th_front = rot(th) @ front[th]
        r[s + "hip"] = signed(facing, th_front, th_ax)
        r[s + "knee"] = signed(th_front, rot(ca) @ front[ca], sh_ax)
        r[s + "foot"] = signed(rot(ca) @ side[ca], rot(fo) @ side[fo], sh_ax)
        r[s + "fold"] = signed(th_ax, sh_ax, th_ax.cross(th_front))   # negative: a knee bending as knees do
        out = right if s == "r" else -right
        r[s + "abd"] = math.degrees(math.atan2(th_ax.dot(out), -th_ax.dot(up)))
    rows.append(r)

flagged = 0
print("CHECK_LEGS %s, output frames %d to %d" % (name, first, last))
for i, r in enumerate(rows):
    why = []
    for k in ("knees", "ankles"):
        if r[k] < CROSS:
            why.append("%s cross (%.2f m apart side to side)" % (k, r[k]))
    for s in "lr":
        S = s.upper()
        if not HIP[0] <= r[s + "hip"] <= HIP[1]:
            why.append("%s hip %+.0f" % (S, r[s + "hip"]))
        if abs(r[s + "knee"]) > KNEE:
            why.append("%s knee twist %+.0f" % (S, r[s + "knee"]))
        if abs(r[s + "foot"]) > FOOT:
            why.append("%s foot twist %+.0f" % (S, r[s + "foot"]))
        if r[s + "fold"] > 2.0:
            why.append("%s knee folds backward" % S)
        if r[s + "abd"] < ADDUCT:
            why.append("%s thigh swings in %+.0f" % (S, r[s + "abd"]))
        if i:
            for k in ("hip", "knee", "foot"):
                step = r[s + k] - rows[i - 1][s + k]
                if abs(step) > JUMP:
                    why.append("%s %s jumps %+.0f" % (S, k, step))
    if why:
        flagged += 1
        print("  frame %d (story %.1f): %s" % (r["f"], r["f"] * story, "; ".join(why)))
for s in "lr":
    span = lambda k: (min(r[s + k] for r in rows), max(r[s + k] for r in rows))
    print("  %s leg: hip %+.0f to %+.0f, knee twist %+.0f to %+.0f, foot twist %+.0f to %+.0f, thigh out %+.0f to %+.0f" % (
        s.upper(), *span("hip"), *span("knee"), *span("foot"), *span("abd")))
print("  side to side apart: knees %.2f m at least, ankles %.2f m" % (
    min(r["knees"] for r in rows), min(r["ankles"] for r in rows)))
print("CHECK_LEGS %d of %d frames flagged" % (flagged, len(rows)))
sys.exit(1 if flagged else 0)
