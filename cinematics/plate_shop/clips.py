"""Authored animation clips on the MPFB bodies.

The clips are Quaternius's Universal Animation Library (CC0), the same file
fps-game-demo's NPCs play (game/animations/ual/ual_standard.glb). They are
keyed on a Rigify DEF skeleton; the bodies carry MPFB's game_engine rig.

Both skeletons are brought to one reference, the "down rest": the rig's rest
pose with the arms and legs straightened to hang straight down, the body
facing +Y. A source bone's motion is its world rotation away from its own
down rest; the target bone takes the same world rotation away from its down
rest.

Sampling: each clip is evaluated once per source frame, in character space,
and stored. Library.pose() interpolates between samples at any time.
"""
import math
import os

import bpy
from mathutils import Matrix, Quaternion, Vector

from paths import FPS_GAME_DEMO

UAL = os.path.join(FPS_GAME_DEMO, "game", "animations", "ual", "ual_standard.glb")
TURN = Matrix.Rotation(math.pi, 4, "Z")   # glTF characters face -Y; the scene's face +Y
DOWN = Vector((0, 0, -1))

# target bone (MPFB game_engine) -> source bone (UAL Rigify DEF)
MAP = {"pelvis": "DEF-hips", "spine_01": "DEF-spine.001", "spine_02": "DEF-spine.002",
       "spine_03": "DEF-spine.003", "neck_01": "DEF-neck", "head": "DEF-head"}
for _s, _S in (("l", "L"), ("r", "R")):
    MAP.update({"clavicle_" + _s: "DEF-shoulder." + _S, "upperarm_" + _s: "DEF-upper_arm." + _S,
                "lowerarm_" + _s: "DEF-forearm." + _S, "hand_" + _s: "DEF-hand." + _S,
                "thigh_" + _s: "DEF-thigh." + _S, "calf_" + _s: "DEF-shin." + _S,
                "foot_" + _s: "DEF-foot." + _S, "ball_" + _s: "DEF-toe." + _S})
    for _f in ("index", "middle", "ring", "pinky"):
        for _k in (1, 2, 3):
            MAP["%s_0%d_%s" % (_f, _k, _s)] = "DEF-f_%s.0%d.%s" % (_f, _k, _S)
    for _k in (1, 2, 3):
        MAP["thumb_0%d_%s" % (_k, _s)] = "DEF-thumb.0%d.%s" % (_k, _S)

# Straightened to hang down in the down rest; feet, toes and fingers take
# the straightening of the bone they hang off.
STRAIGHT_T = ("upperarm_", "lowerarm_", "hand_", "thigh_", "calf_")


def _straight(name):
    return any(name.startswith(p) for p in STRAIGHT_T) and name[-2:] in ("_l", "_r")


def _inherit(name):
    """The bone whose straightening this one takes, or None."""
    side = name[-2:]
    if name.startswith(("foot_", "ball_")):
        return "calf" + side
    if name.startswith(("index_", "middle_", "ring_", "pinky_", "thumb_")):
        return "hand" + side
    return None


def down_rest(rest_world, parent_of, names):
    """{bone: world 3x3} of the down rest, from the rest's world rotations.
    `names` are target-style names; rest_world is keyed the same way."""
    delta = {}
    out = {}
    for n in names:
        if _straight(n):
            d = (rest_world[n] @ Vector((0, 1, 0))).normalized()
            delta[n] = d.rotation_difference(DOWN).to_matrix()
    for n in names:
        src = n if n in delta else _inherit(n)
        out[n] = (delta[src] if src in delta else Matrix.Identity(3)) @ rest_world[n]
    return out


class Library:
    """The UAL clips, sampled on demand, posed in the MPFB bones' terms."""

    def __init__(self, path=UAL):
        before = set(bpy.data.objects)
        acts_before = set(bpy.data.actions)
        bpy.ops.import_scene.gltf(filepath=path)
        new = [o for o in bpy.data.objects if o not in before]
        self.arm = next(o for o in new if o.type == "ARMATURE")
        for o in new:
            if o is not self.arm:
                bpy.data.objects.remove(o, do_unlink=True)
        self.arm.hide_render = True   # not hide_viewport: a viewport-hidden rig is never evaluated
        self.arm.rotation_mode = "XYZ"
        self.actions = {a.name: a for a in bpy.data.actions if a not in acts_before}
        self.fps = bpy.context.scene.render.fps / bpy.context.scene.render.fps_base
        self.base = TURN @ self.arm.matrix_world
        bones = self.arm.data.bones
        rest_world = {t: (self.base.to_3x3() @ bones[s].matrix_local.to_3x3()) for t, s in MAP.items()}
        self.down = down_rest(rest_world, None, list(MAP))
        self.down_inv = {n: m.inverted() for n, m in self.down.items()}
        self.hips_rest = self.base @ bones["DEF-hips"].head_local
        self.leg = (bones["DEF-hips"].head_local - bones["DEF-foot.L"].head_local).length
        self.samples = {}

    def sample(self, clip):
        """Every source frame of a clip: ({target bone: Quaternion}, hips position)."""
        if clip in self.samples:
            return self.samples[clip]
        act = self.actions[clip]
        ad = self.arm.animation_data or self.arm.animation_data_create()
        ad.action = act
        if hasattr(ad, "action_slot") and act.slots:
            ad.action_slot = act.slots[0]
        scn = bpy.context.scene
        keep = scn.frame_current
        f0, f1 = int(round(act.frame_range[0])), int(round(act.frame_range[1]))
        frames = []
        for f in range(f0, f1 + 1):
            scn.frame_set(f)
            ae = self.arm.evaluated_get(bpy.context.evaluated_depsgraph_get())
            rot = {}
            for t, s in MAP.items():
                w = self.base.to_3x3() @ ae.pose.bones[s].matrix.to_3x3()
                rot[t] = (w.normalized() @ self.down_inv[t]).to_quaternion()
            hips = self.base @ ae.pose.bones["DEF-hips"].head
            frames.append((rot, hips))
        scn.frame_set(keep)
        self.samples[clip] = frames
        return frames

    def length(self, clip):
        """Seconds the clip runs (its last sample is its first again on a loop)."""
        return (len(self.sample(clip)) - 1) / self.fps

    def pose(self, clip, t, loop=True):
        """Pose at t seconds into the clip: ({bone: Quaternion}, hips offset from rest)."""
        frames = self.sample(clip)
        n = len(frames) - 1
        x = t * self.fps
        x = (x % n) if loop else min(max(x, 0.0), n)
        i = int(math.floor(x))
        u = x - i
        j = min(i + 1, n)
        (ra, ha), (rb, hb) = frames[i], frames[j]
        rot = {}
        for k in ra:
            qa, qb = ra[k], rb[k]
            if qa.dot(qb) < 0:
                qb = -qb
            rot[k] = qa.slerp(qb, u)
        return rot, ha.lerp(hb, u) - self.hips_rest

    def walk_speed(self, clip):
        """Ground speed the clip's feet imply, in source metres per second."""
        frames = self.sample(clip)
        arm = self.arm
        act = self.actions[clip]
        arm.animation_data.action = act
        scn = bpy.context.scene
        keep = scn.frame_current
        f0 = int(round(act.frame_range[0]))
        ys, zs = [], []
        for k in range(len(frames)):
            scn.frame_set(f0 + k)
            ae = arm.evaluated_get(bpy.context.evaluated_depsgraph_get())
            p = self.base @ ae.pose.bones["DEF-foot.L"].head
            ys.append(p.y)
            zs.append(p.z)
        scn.frame_set(keep)
        low = min(zs) + 0.02
        v = [-(ys[k + 1] - ys[k]) * self.fps for k in range(len(ys) - 1) if zs[k] < low and zs[k + 1] < low]
        v.sort()
        return v[len(v) // 2] if v else 0.0

    def remove(self):
        for a in self.actions.values():
            bpy.data.actions.remove(a)
        bpy.data.objects.remove(self.arm, do_unlink=True)


class Track:
    """A body's performance: clips laid on the cinematic's frames, a root path,
    and extra turns on given bones."""

    def __init__(self, lib, fps):
        self.lib = lib
        self.fps = fps
        self.segs = []      # (f0, f1, clip, t0, rate, loop, blend)
        self.root = {}      # frame -> (x, y, yaw degrees)
        self.layers = []    # fn(frame) -> {bone: world Quaternion applied on top}

    def play(self, f0, f1, clip, t0=0.0, rate=1.0, loop=True, blend=4):
        self.segs.append((f0, f1, clip, t0, rate, loop, blend))

    def _seg_pose(self, seg, f):
        f0, f1, clip, t0, rate, loop, _ = seg
        return self.lib.pose(clip, t0 + (f - f0) / self.fps * rate, loop)

    def pose(self, f):
        cur = [s for s in self.segs if s[0] <= f <= s[1]]
        seg = cur[-1] if cur else max((s for s in self.segs if s[1] < f), key=lambda s: s[1])
        rot, hips = self._seg_pose(seg, min(f, seg[1]))
        prev = [s for s in self.segs if s[0] < seg[0]]
        if prev and f < seg[0] + seg[6]:
            p = max(prev, key=lambda s: s[0])
            r0, h0 = self._seg_pose(p, min(f, p[1]) if p[5] is False else f)
            w = (f - seg[0]) / seg[6]
            w = w * w * (3 - 2 * w)
            for k in rot:
                a, b = r0[k], rot[k]
                if a.dot(b) < 0:
                    b = -b
                rot[k] = a.slerp(b, w)
            hips = h0.lerp(hips, w)
        return rot, hips

    def hold(self, f0, f1, x, y, yaw):
        for f in range(f0, f1 + 1):
            self.root[f] = (x, y, yaw)

    def move(self, f0, f1, a, b, yaw):
        for f in range(f0, f1 + 1):
            u = (f - f0) / max(1, f1 - f0)
            self.root[f] = (a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, yaw)

    def turn(self, f0, f1, x, y, yaw0, yaw1):
        for f in range(f0, f1 + 1):
            u = (f - f0) / max(1, f1 - f0)
            u = u * u * (3 - 2 * u)
            self.root[f] = (x, y, yaw0 + (yaw1 - yaw0) * u)


def solve(body, lib, track, f, fix=None):
    """(A, M) for one frame: the armature object and its bones in armature space.
    fix: optional (world 3x3, bone names) turned on top, about each chain's root."""
    from retarget import TURN as _T  # same constant, kept explicit
    x, y, yaw = track.root[f]
    rot, hips = track.pose(f)
    Y = Matrix.Rotation(math.radians(yaw), 3, "Z")
    root = Matrix.Translation((x, y, 0)) @ Y.to_4x4()
    A = root @ _T @ body.a0
    extra = {}
    for layer in track.layers:
        for b, q in layer(f).items():
            extra[b] = q @ extra.get(b, Quaternion())
    wrot = {}
    for b, q in rot.items():
        if b not in body.wdown_ual:
            continue
        w = Y @ q.to_matrix() @ body.wdown_ual[b]
        if b in extra:
            w = extra[b].to_matrix() @ w
        if fix and b in fix[1]:
            w = fix[0] @ w
        wrot[b] = w
    scale = body.leg / lib.leg
    pelvis = Vector((x, y, 0)) + Y @ (body.pelvis_char + hips * scale)
    return A, body.solve_world(A, wrot, pelvis)


def prepare(body):
    """Give an MPFB Body what the clips need: its own down rest over the mapped
    bones, its leg length and where its pelvis rests, in character space."""
    base = (TURN @ body.a0)
    rest_world = {n: base.to_3x3() @ body.rest[n].to_3x3() for n in MAP if n in body.rest}
    body.wdown_ual = down_rest(rest_world, None, list(rest_world))
    body.pelvis_char = base @ body.rest["pelvis"].translation
    body.leg = (body.rest["pelvis"].translation - body.rest["foot_l"].translation).length
