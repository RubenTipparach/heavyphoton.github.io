"""Prove two builds of a scene render the same frames, so finished frames can be reused.

    blender -b A/scene.blend -P scene_fingerprint.py -- A.json FRAMES [OBJECTS] [MATERIALS]
    blender -b B/scene.blend -P scene_fingerprint.py -- B.json FRAMES [OBJECTS] [MATERIALS]
    python3 scene_fingerprint.py A.json B.json

FRAMES, OBJECTS and MATERIALS are comma lists (output frames; armatures or
objects whose world placement and bones to compare; materials whose every
unlinked node value and every link to compare). The default objects are every
armature, and every material on them. The compare prints the largest bone
difference per object and frame, any material line that differs, and the
render settings. Reuse old frames only where all of it is identical, and say
which frames were reused. Hashes are md5 of sorted text: Python's hash() is
salted per run and cannot be compared across processes.
"""
import hashlib
import json
import sys

if "--" not in sys.argv:   # the compare, in plain Python
    A, B = (json.load(open(p)) for p in sys.argv[1:3])
    print("render settings:", A["render"], "|", B["render"], "same" if A["render"] == B["render"] else "DIFFERENT")
    for k in sorted(A["poses"]):
        if k not in B["poses"]:
            print("%-24s missing in the second" % k)
            continue
        diff = max(abs(x - y) for p, q in zip(A["poses"][k], B["poses"][k]) for x, y in zip(p, q))
        print("%-24s largest bone difference %.2e m" % (k, diff))
    la, lb = set(A["materials"]), set(B["materials"])
    print("materials: %s (%d lines)" % ("identical" if la == lb else "DIFFERENT", len(la)))
    for line in sorted(la ^ lb)[:20]:
        print("   ", "first only " if line in la else "second only", line)
    sys.exit(0)

import bpy  # noqa: E402

a = sys.argv[sys.argv.index("--") + 1:]
out, frames = a[0], [int(v) for v in a[1].split(",")]
scn = bpy.context.scene
objs = [bpy.data.objects[n] for n in a[2].split(",")] if len(a) > 2 and a[2] else \
    [o for o in bpy.data.objects if o.type == "ARMATURE" and not o.hide_render]
mats = a[3].split(",") if len(a) > 3 else sorted({m.name for o in objs for c in o.children if c.type == "MESH"
                                                   for m in c.data.materials if m})
poses = {}
for f in frames:
    scn.frame_set(f)
    for o in objs:
        pts = [list(o.matrix_world.col[3])]
        if o.type == "ARMATURE":
            pts += [list(o.matrix_world @ pb.head) for pb in o.pose.bones]
        poses["%s@%d" % (o.name, f)] = pts
lines = []
for mname in mats:
    m = bpy.data.materials[mname]
    for n in sorted(m.node_tree.nodes, key=lambda n: n.name):
        for i in n.inputs:
            if not i.is_linked and hasattr(i, "default_value"):
                v = i.default_value
                v = tuple(round(x, 6) for x in v) if hasattr(v, "__len__") else round(v, 6) if isinstance(v, float) else v
                lines.append("%s|%s|%s|%s|%s" % (mname, n.name, n.bl_idname, i.identifier, v))
    for l in m.node_tree.links:
        lines.append("%s|link|%s.%s>%s.%s" % (mname, l.from_node.name, l.from_socket.identifier,
                                              l.to_node.name, l.to_socket.identifier))
r = scn.render
render = [r.resolution_x, r.resolution_y, r.resolution_percentage, scn.cycles.samples, r.use_motion_blur,
          r.motion_blur_shutter, r.fps, r.frame_map_old, r.frame_map_new]
json.dump({"poses": poses, "materials": sorted(lines), "render": render}, open(out, "w"))
print("SCENE_FINGERPRINT", out, len(poses), "poses,", len(lines), "material lines, md5",
      hashlib.md5("\n".join(sorted(lines)).encode()).hexdigest())
