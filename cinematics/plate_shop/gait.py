"""Short, planted steps for a walked turn: the walk clip's legs, re-planted.

The suit turns round to leave on a tight arc. Played straight, the walk clip
would cover that arc in full strides with its feet skating round the curve.
Here its legs are re-planted the way a game engine fits a clip to a path it
was not made for:

  stride   each foot's travel along the body (its local Y, about the pelvis)
           is scaled by the stride share, and the body moves at that share
           of the clip's speed. A short step also lifts the foot lower and
           tips it less at heel strike and toe off (LIFT)
  plant    the ball of a foot on the ground stays where it came down while
           the body turns over it, the heel peeling up round it, and the
           foot pivots part of the way round with the body (PIVOT). Off the
           ground it travels, eased, from where it lifted to where the
           scaled clip puts it down, turning to face the way he is going
  reach    two-bone IK bends each leg to its foot, in the plane the clip's own
           knee bends in, with the knee turned part way toward the foot
           (KNEE_FOLLOW); the pelvis rides up as far as the shorter steps let
           it, so the knees bend no more than the clip's do

The arms keep the clip's swing, cut down toward idle with the stride.
"""
import math

from mathutils import Matrix, Vector

import clips

CONTACT = 0.02       # m above its stance height that the ball of a foot still counts as down
PIVOT = 0.45         # how far a planted foot turns with the body, on its ball
KNEE_FOLLOW = 0.6    # how far the knee turns from the body toward its foot
LIFT = 0.85          # the shortest step lifts and tips the foot this much less than the clip
RISE = (-0.03, 0.06) # m the pelvis may drop or rise for the stance leg's reach
ARMS = ("clavicle_", "upperarm_", "lowerarm_", "hand_")
FINGERS = ("index_", "middle_", "ring_", "pinky_", "thumb_")
SIDES = ("l", "r")


def smooth(u):
    u = min(1.0, max(0.0, u))
    return u * u * (3 - 2 * u)


def yaw(deg):
    return Matrix.Rotation(math.radians(deg), 3, "Z")


def blend(a, b, t):
    """The rotation t of the way from 3x3 a to 3x3 b."""
    qa, qb = a.to_quaternion(), b.to_quaternion()
    if qa.dot(qb) < 0:
        qb.negate()
    return qa.slerp(qb, t).to_matrix()


class Gait:
    """Planted feet for a body's track over `frames`; the track calls it
    (track.legs) to re-plant each of those frames.

    stride: frame -> the share of the clip's stride he steps (1: as authored)
    """

    def __init__(self, body, lib, track, frames, stride, idle="Idle_Loop"):
        self.body, self.lib, self.track = body, lib, track
        self.frames = list(frames)
        self.idx = {f: k for k, f in enumerate(self.frames)}
        self.stride = stride
        self.idle = idle
        n = len(self.frames)

        fk = []
        for f in self.frames:
            A, wrot, pelvis = clips.pose_world(body, lib, track, f)
            M = body.solve_world(A, wrot, pelvis)
            x, y, psi = track.root[f]
            o = Vector((x, y, 0.0))
            Yi = yaw(-psi)
            rest = self.idle_world(f, psi)
            k = stride(f)
            lift = 1.0 - LIFT * (1.0 - k)
            row = {"psi": psi, "o": o, "pl": Yi @ (pelvis - o), "k": k, "lift": lift}
            for s in SIDES:
                fo, ba = "foot_" + s, "ball_" + s
                row[s] = {"bl": Yi @ (body.world(A, M, ba) - o),
                          "reach": (body.world(A, M, fo) - body.world(A, M, "thigh_" + s)).length,
                          "H": body.world(A, M, "thigh_" + s),
                          "foot": blend(rest[fo], wrot[fo], lift),
                          "ball": blend(rest[ba], wrot[ba], lift)}
            fk.append(row)
        # the ground under each ball: the clip's stance height, which is not its
        # lowest (the walk carries the left foot higher than idle does)
        floor = {s: sorted(r[s]["bl"].z for r in fk)[n // 10] for s in SIDES}

        # where the scaled clip puts the ball of each foot, and whether it is down
        warped = {s: [] for s in SIDES}
        down = {s: [] for s in SIDES}
        for r in fk:
            for s in SIDES:
                bl, pl, z0 = r[s]["bl"], r["pl"], floor[s]
                w = Vector((bl.x, pl.y + r["k"] * (bl.y - pl.y), z0 + (bl.z - z0) * r["lift"]))
                warped[s].append(r["o"] + yaw(r["psi"]) @ w)
                down[s].append(bl.z < z0 + CONTACT)
        for s in SIDES:
            d = down[s]
            for i in range(1, n - 1):   # a one-frame flicker either way is noise
                if d[i - 1] == d[i + 1] != d[i]:
                    d[i] = d[i - 1]

        # plant: a ball on the ground holds where it came down; off the ground
        # it carries the lift-off offset away over the swing
        psi = [r["psi"] for r in fk]
        ball = {s: [None] * n for s in SIDES}
        self.fyaw = {s: [None] * n for s in SIDES}
        self.landings = []
        self.first = {}
        for s in SIDES:
            B, Fy, W, d = ball[s], self.fyaw[s], warped[s], down[s]
            i = 0
            while i < n:
                j = i
                while j + 1 < n and d[j + 1] == d[i]:
                    j += 1
                if d[i]:
                    P, y0 = W[i], psi[i]
                    if i > 0:
                        self.landings.append((self.frames[i], s))
                    for k in range(i, j + 1):
                        B[k] = Vector((P.x, P.y, W[k].z))
                        Fy[k] = y0 + PIVOT * (psi[k] - y0)
                elif i > 0 and j + 1 < n:
                    # a step: eased from where it lifted to where it comes down,
                    # at the scaled clip's height, turning to its landing yaw
                    a, b, ya = B[i - 1], W[j + 1], Fy[i - 1]
                    for k in range(i, j + 1):
                        u = smooth((k - (i - 1)) / float(j + 1 - (i - 1)))
                        B[k] = Vector((a.x + (b.x - a.x) * u, a.y + (b.y - a.y) * u, W[k].z))
                        Fy[k] = ya + (psi[j + 1] - ya) * u
                else:
                    # in the air at either end of the span: the scaled clip, carrying
                    # away any offset from where it lifted
                    off, oy = Vector((0, 0, 0)), 0.0
                    if i > 0:
                        off = B[i - 1] - W[i - 1]
                        off.z = 0.0
                        oy = Fy[i - 1] - psi[i - 1]
                    for k in range(i, j + 1):
                        u = 1.0 - smooth((k - (i - 1)) / float(j + 1 - (i - 1)))
                        B[k] = W[k] + off * u
                        Fy[k] = psi[k] + oy * u
                i = j + 1
            self.first[s] = B[0]
        self.landings.sort()
        self.ball = ball

        # the feet, turned to their yaw, and the ankles that put each ball there
        self.foot, self.toes, self.ankle = ({s: [None] * n for s in SIDES} for _ in range(3))
        for k, r in enumerate(fk):
            for s in SIDES:
                R = yaw(self.fyaw[s][k] - r["psi"])
                self.foot[s][k] = R @ r[s]["foot"]
                self.toes[s][k] = R @ r[s]["ball"]
                self.ankle[s][k] = ball[s][k] - self.foot[s][k] @ body.rel["ball_" + s].translation

        # the pelvis rises until the stance legs are as straight as the clip's
        rise = []
        for k, r in enumerate(fk):
            need = []
            for s in SIDES:
                if not down[s][k]:
                    continue
                H, t = r[s]["H"], self.ankle[s][k]
                h = Vector((t.x - H.x, t.y - H.y)).length
                if r[s]["reach"] > h:
                    need.append(math.sqrt(r[s]["reach"] ** 2 - h * h) - (H.z - t.z))
            rise.append(min(max(min(need), RISE[0]), RISE[1]) if need else None)
        for k in range(n):   # a frame with neither foot down takes its neighbours'
            if rise[k] is None:
                near = [rise[j] for j in (k - 1, k + 1) if 0 <= j < n and rise[j] is not None]
                rise[k] = sum(near) / len(near) if near else 0.0
        self.rise = [sum(rise[max(0, k - 2):k + 3]) / len(rise[max(0, k - 2):k + 3]) for k in range(n)]
        self.rise[0] = 0.0
        self.short = []   # (frame, side, metres) of each leg that could not reach its foot

    def idle_world(self, f, psi):
        """World rotations of the idle clip's pose at frame f, facing psi."""
        rot, _ = self.lib.pose(self.idle, f / self.track.fps)
        Y = yaw(psi)
        return {b: Y @ q.to_matrix() @ self.body.wdown_ual[b] for b, q in rot.items()
                if b in self.body.wdown_ual}

    def report(self):
        """Each step: the frame its ball comes down, the foot, how far the
        ball moved from where it last stood, and how far the foot turned."""
        last = {s: (self.ball[s][0], self.fyaw[s][0]) for s in SIDES}
        out = []
        for f, s in self.landings:
            k = self.idx[f]
            p, y = self.ball[s][k], self.fyaw[s][k]
            q, z = last[s]
            out.append((f, s, (Vector((p.x, p.y)) - Vector((q.x, q.y))).length, y - z))
            last[s] = (p, y)
        return out

    def __call__(self, f, A, wrot, pelvis):
        k = self.idx.get(f)
        if k is None:
            return wrot, pelvis
        body = self.body
        psi = self.track.root[f][2]
        pelvis = pelvis + Vector((0.0, 0.0, self.rise[k]))
        wrot = dict(wrot)

        cut = 1.0 - self.stride(f)
        if cut > 1e-4:
            rest = self.idle_world(f, psi)
            for b in list(wrot):
                if b[:-1] in ARMS and b in rest:
                    new = blend(wrot[b], rest[b], cut)
                    if b.startswith("hand_"):   # the fingers go with the hand
                        turn = new @ wrot[b].inverted()
                        for g in wrot:
                            if g.startswith(FINGERS) and g.endswith(b[-2:]):
                                wrot[g] = turn @ wrot[g]
                    wrot[b] = new

        M = body.solve_world(A, wrot, pelvis)
        fwd = yaw(psi) @ Vector((0, 1, 0))
        for s in SIDES:
            th, ca = "thigh_" + s, "calf_" + s
            H = body.world(A, M, th)
            K0 = body.world(A, M, ca)
            A0 = body.world(A, M, "foot_" + s)
            Rk = yaw(KNEE_FOLLOW * (self.fyaw[s][k] - psi))
            K0, A0 = H + Rk @ (K0 - H), H + Rk @ (A0 - H)
            l1, l2 = (K0 - H).length, (A0 - K0).length
            d = self.ankle[s][k] - H
            dist = min(max(d.length, abs(l1 - l2) + 1e-4), (l1 + l2) * 0.9999)
            if dist < d.length - 1e-3:
                self.short.append((f, s, d.length - dist))
            u = d.normalized()
            bend = (K0 - H) - u * (K0 - H).dot(u)
            if bend.length < 1e-3:
                bend = fwd - u * fwd.dot(u)
            bend.normalize()
            c = (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist)
            a = math.acos(max(-1.0, min(1.0, c)))
            K = H + l1 * (math.cos(a) * u + math.sin(a) * bend)
            T = H + u * dist
            R1 = (K0 - H).rotation_difference(K - H).to_matrix()
            R2 = (R1 @ (A0 - K0)).rotation_difference(T - K).to_matrix()
            wrot[th] = R1 @ Rk @ wrot[th]
            wrot[ca] = R2 @ R1 @ Rk @ wrot[ca]
            wrot["foot_" + s] = self.foot[s][k]
            wrot["ball_" + s] = self.toes[s][k]
        return wrot, pelvis
