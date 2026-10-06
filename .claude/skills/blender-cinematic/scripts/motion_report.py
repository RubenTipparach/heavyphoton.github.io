"""Read a character's legs back out of a built scene, every output frame.

    blender -b OUT/scene.blend -P motion_report.py -- ARMATURE FIRST LAST [--json OUT.json] [--table]

Frames are OUTPUT frames, so the in-betweens Blender makes from the story
keys are measured too. Prints, per leg:

  slide     how far the ball of the foot moves while it is down (within 2 cm
            of its usual stance height): a planted foot should not move
  knee      the most the knee bends, and the worst kick-back: the knee bent
            far while the thigh has not come forward (the shin flips up
            behind, which from the side reads as a leg folding back)
  hip       forward and back swing, and out and in (a thigh swung in across
            the body reads as legs crossing)
  ankle     the shin-to-foot angle range

--table prints every frame; --json writes the raw positions and angles (feed
it to foot_plot.py for a top-down view of the footprints). Twist and knee
direction are check_legs.py's job (cinematics/plate_shop/check_legs.py).
"""
import json
import math
import sys

import bpy

a = sys.argv[sys.argv.index("--") + 1:]
name, first, last = a[0], int(a[1]), int(a[2])
out = a[a.index("--json") + 1] if "--json" in a else None
scn = bpy.context.scene
arm = bpy.data.objects[name]
story = scn.render.frame_map_old / float(scn.render.frame_map_new)


def head(b):
    return arm.matrix_world @ arm.pose.bones[b].head


rows = []
for f in range(first, last + 1):
    scn.frame_set(f)
    right = (head("thigh_r") - head("thigh_l")).normalized()
    up = head("spine_01") - head("pelvis")
    up = (up - right * up.dot(right)).normalized()
    fwd = up.cross(right)
    r = {"f": f, "story": round(f * story, 2), "pelvis": list(head("pelvis"))}
    for s in "lr":
        H, K, A, B = (head(b + "_" + s) for b in ("thigh", "calf", "foot", "ball"))
        t, sh, ft = (K - H).normalized(), (A - K).normalized(), (B - A).normalized()
        out_ax = right if s == "r" else -right
        r[s] = {"ankle": list(A), "ball": list(B), "knee": list(K), "hip": list(H),
                "hip_fwd": math.degrees(math.atan2(t.dot(fwd), -t.dot(up))),
                "hip_out": math.degrees(math.atan2(t.dot(out_ax), -t.dot(up))),
                "knee_bend": math.degrees(t.angle(sh)),
                "ankle_angle": math.degrees(sh.angle(ft))}
    rows.append(r)

print("MOTION_REPORT %s, output frames %d to %d" % (name, first, last))
for s in "lr":
    floor = sorted(r[s]["ball"][2] for r in rows)[len(rows) // 10]
    slide = (0.0, None)
    for p, q in zip(rows, rows[1:]):
        if p[s]["ball"][2] < floor + 0.02 and q[s]["ball"][2] < floor + 0.02:
            mv = math.hypot(q[s]["ball"][0] - p[s]["ball"][0], q[s]["ball"][1] - p[s]["ball"][1])
            if mv > slide[0]:
                slide = (mv, q["f"])
    kick = max(rows, key=lambda r: r[s]["knee_bend"] - 2 * max(0.0, r[s]["hip_fwd"]))
    span = lambda k: (min(r[s][k] for r in rows), max(r[s][k] for r in rows))
    print("  %s: planted ball slides %.1f mm/frame at most (frame %s)" % (s.upper(), 1000 * slide[0], slide[1]))
    print("     knee bends %.0f deg at most; worst kick-back frame %d (story %.1f): knee %.0f, thigh %+.0f fwd, ankle %.2f m up"
          % (span("knee_bend")[1], kick["f"], kick["story"], kick[s]["knee_bend"], kick[s]["hip_fwd"], kick[s]["ankle"][2]))
    print("     hip swings %+.0f to %+.0f fwd, %+.0f to %+.0f out; ankle %.0f to %.0f deg"
          % (*span("hip_fwd"), *span("hip_out"), *span("ankle_angle")))
if "--table" in a:
    print(" frame story |  L fwd   out  knee ankle  ballz |  R fwd   out  knee ankle  ballz")
    for r in rows:
        print("%6d %5.1f | %s | %s" % (r["f"], r["story"], *(
            "%5.0f %5.0f %5.0f %5.0f %6.3f" % (r[s]["hip_fwd"], r[s]["hip_out"], r[s]["knee_bend"],
                                               r[s]["ankle_angle"], r[s]["ball"][2]) for s in "lr")))
if out:
    json.dump(rows, open(out, "w"))
    print("MOTION_REPORT wrote", out)
