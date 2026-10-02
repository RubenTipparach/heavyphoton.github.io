"""Planted feet for the suit's turn and walk out: the walk clip's legs, re-planted.

The library has no turn clip, so the suit turns round on the walk clip with
its legs re-planted, the way a game engine fits a clip to a path it was not
made for:

  steps    the first steps can be authored (`plan`): where each ball of the
           foot comes down and which way the foot faces. Every later step
           lands where the clip puts it, its travel along the body scaled by
           the stride share, and the body moves at that share of the clip's
           speed. A short step lifts the foot lower and tips it less, by its
           length against the clip's own (FULL_STEP)
  plant    the ball of a foot on the ground stays where it came down while
           the body turns over it, the heel peeling up round it, and the foot
           pivots part of the way round with the body (PIVOT). Off the ground
           it rises, then travels, eased, from where it lifted to where it
           comes down, round the outside of the other foot (CLEAR), turning
           to face its landing
  reach    two-bone IK puts each ankle where its ball needs it, the knee
           always bending toward its own toes, the pelvis riding up as far as
           the legs allow so the knees bend no more than the clip's do

The arms keep the clip's swing, cut down toward idle with the stride.
"""
import math

from mathutils import Matrix, Vector

import clips

CONTACT = 0.02       # m above its stance height that the ball of a foot still counts as down
PIVOT = 0.45         # how far a planted foot turns with the body, on its ball
FULL_STEP = 1.6      # m a foot travels in one of the walk clip's swings (its stride)
LIFT_MIN = 0.35      # a step lifts and tips the foot by its length's share of FULL_STEP, at least this
CLEAR = 0.16         # m a swinging foot keeps from the planted one, on its own side
RISE = (-0.03, 0.06) # m the pelvis may drop or rise for the stance leg's reach
ARMS = ("clavicle_", "upperarm_", "lowerarm_", "hand_")
FINGERS = ("index_", "middle_", "ring_", "pinky_", "thumb_")
SIDES = ("l", "r")
DOWN, FWD = Vector((0, 0, -1)), Vector((0, 1, 0))


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


def frame(d, f):
    """A rotation whose columns are d, f and d x f (d, f unit and square)."""
    return Matrix((d, f, d.cross(f))).transposed()


REST = frame(DOWN, FWD).transposed()   # undoes the down rest's: leg down, knee forward


def aim(d, front):
    """The world turn that takes a down-rest leg bone (pointing down, its knee
    side forward) to point along d with its knee side toward `front`."""
    f = front - d * front.dot(d)
    return frame(d, f.normalized()) @ REST


def contacts(body, lib, clip, rate=60):
    """When the ball of each foot comes down and lifts in a looping clip, in
    seconds of clip time: {side: (down, up)}, plus the clip's length."""
    n = int(round(lib.length(clip) * rate))
    tr = clips.Track(lib, rate)
    tr.play(0, n, clip)
    tr.hold(0, n, 0.0, 0.0, 0.0)
    z = {s: [] for s in SIDES}
    for i in range(n):
        A, wrot, pelvis = clips.pose_world(body, lib, tr, i)
        M = body.solve_world(A, wrot, pelvis)
        for s in SIDES:
            z[s].append(body.world(A, M, "ball_" + s).z)
    out = {}
    for s in SIDES:
        floor = sorted(z[s])[n // 10]
        d = [v < floor + CONTACT for v in z[s]]
        dn = next(i for i in range(n) if d[i] and not d[i - 1])
        up = next(i for i in range(n) if d[i - 1] and not d[i])
        out[s] = (dn / float(rate), up / float(rate))
    return out, n / float(rate)


def ball_local(body, lib, clip, t, side):
    """Where the ball of a foot is, in character space (facing +Y from the
    origin), at clip time t."""
    tr = clips.Track(lib, 1.0)
    tr.play(0, 1, clip, t0=t)
    tr.hold(0, 1, 0.0, 0.0, 0.0)
    A, wrot, pelvis = clips.pose_world(body, lib, tr, 0)
    return body.world(A, body.solve_world(A, wrot, pelvis), "ball_" + side)


class Gait:
    """Planted feet for a body's track over `frames`; the track calls it
    (track.legs) to re-plant each of those frames.

    stride: frame -> the share of the clip's stride he steps (1: as authored)
    plan:   {side: [(ball x, ball y, foot yaw), ...]}: where that foot's first
            steps come down, in place of where the clip would put them
    ik:     frame -> how much the legs are re-planted (1) or the clip's own
            forward kinematics (0), to hand back to the clip
    stance: (frame, side) -> whether that foot is down; by default, whether
            its ball is within CONTACT of its stance height
    """

    def __init__(self, body, lib, track, frames, stride, plan=None, ik=None, stance=None,
                 idle="Idle_Loop"):
        self.ik = ik or (lambda f: 1.0)
        self.body, self.lib, self.track = body, lib, track
        self.frames = list(frames)
        self.idx = {f: k for k, f in enumerate(self.frames)}
        self.stride = stride
        self.idle = idle
        plan = plan or {}
        n = len(self.frames)

        fk = []
        for f in self.frames:
            A, wrot, pelvis = clips.pose_world(body, lib, track, f)
            M = body.solve_world(A, wrot, pelvis)
            x, y, psi = track.root[f]
            o = Vector((x, y, 0.0))
            Yi = yaw(-psi)
            rest = self.idle_world(f, psi)
            row = {"psi": psi, "o": o, "pl": Yi @ (pelvis - o), "k": stride(f)}
            for s in SIDES:
                fo, ba = "foot_" + s, "ball_" + s
                row[s] = {"bl": Yi @ (body.world(A, M, ba) - o),
                          "reach": (body.world(A, M, fo) - body.world(A, M, "thigh_" + s)).length,
                          "H": body.world(A, M, "thigh_" + s),
                          "rest": (rest[fo], rest[ba]), "clip": (wrot[fo], wrot[ba])}
            fk.append(row)
        # the ground under each ball: the clip's stance height, which is not its
        # lowest (the walk carries the left foot higher than idle does)
        floor = {s: sorted(r[s]["bl"].z for r in fk)[n // 10] for s in SIDES}
        if stance is not None:
            floor = {s: min(r[s]["bl"].z for r, f in zip(fk, self.frames) if stance(f, s)) for s in SIDES}

        # where the scaled clip puts the ball of each foot, and whether it is down
        warped = {s: [] for s in SIDES}
        down = {s: [] for s in SIDES}
        for r, f in zip(fk, self.frames):
            for s in SIDES:
                bl, pl = r[s]["bl"], r["pl"]
                w = Vector((bl.x, pl.y + r["k"] * (bl.y - pl.y), 0.0))
                warped[s].append(r["o"] + yaw(r["psi"]) @ w)
                down[s].append(stance(f, s) if stance is not None else bl.z < floor[s] + CONTACT)
        for s in SIDES:
            d = down[s]
            for i in range(1, n - 1):   # a one-frame flicker either way is noise
                if d[i - 1] == d[i + 1] != d[i]:
                    d[i] = d[i - 1]
        self.down = down

        # plant: a ball on the ground holds where it came down
        psi = [r["psi"] for r in fk]
        ball = {s: [None] * n for s in SIDES}
        self.fyaw = {s: [None] * n for s in SIDES}
        self.landings = []
        swings = []
        for s in SIDES:
            B, Fy, W, d = ball[s], self.fyaw[s], warped[s], down[s]
            steps = list(plan.get(s, []))
            i = 0
            while i < n:
                j = i
                while j + 1 < n and d[j + 1] == d[i]:
                    j += 1
                if d[i]:
                    P, y0 = W[i], psi[i]
                    if i > 0:
                        self.landings.append((self.frames[i], s))
                        if steps:
                            px, py, y0 = steps.pop(0)
                            P = Vector((px, py, W[i].z))
                    for k in range(i, j + 1):
                        B[k] = Vector((P.x, P.y, 0.0))
                        Fy[k] = y0 + PIVOT * (psi[k] - y0)
                else:
                    swings.append((s, i, j))
                i = j + 1
        self.landings.sort()

        # each step lifts by its length; a planted foot tips with the nearer step
        lift = {s: [None] * n for s in SIDES}
        for s, i, j in swings:
            if i > 0 and j + 1 < n:
                a, b = ball[s][i - 1], ball[s][j + 1]
                h = max(LIFT_MIN, min(1.0, (Vector((b.x - a.x, b.y - a.y))).length / FULL_STEP))
            else:
                h = fk[i]["k"]
            for k in range(i, j + 1):
                lift[s][k] = h
        for s in SIDES:
            L = lift[s]
            for k in range(n):
                if L[k] is None:
                    near = [(abs(j - k), L[j]) for j in range(n) if lift[s][j] is not None and j != k]
                    L[k] = min(near)[1] if near else 1.0

        # swing: it rises, then travels eased from where it lifted to where it
        # comes down, bowed out round the planted foot on its own side,
        # turning to its landing yaw
        for s, i, j in swings:
            B, Fy, W = ball[s], self.fyaw[s], warped[s]
            o = "r" if s == "l" else "l"
            if i > 0 and j + 1 < n:
                a, b, ya = B[i - 1], B[j + 1], Fy[i - 1]
                m = (i + j) // 2
                side = yaw(psi[m]) @ Vector((-1.0 if s == "l" else 1.0, 0, 0))
                bow = Vector((0, 0, 0))
                st = ball[o][m]
                seg = Vector((b.x - a.x, b.y - a.y, 0))
                if st is not None and seg.length > 1e-6:
                    t = max(0.2, min(0.8, Vector((st.x - a.x, st.y - a.y, 0)).dot(seg) / seg.length_squared))
                    q = Vector((a.x, a.y, 0)) + seg * t
                    gap = (q - Vector((st.x, st.y, 0))).dot(side)
                    if gap < CLEAR:
                        bow = side * ((CLEAR - gap) / (4 * t * (1 - t)))
                for k in range(i, j + 1):
                    u = smooth(((k - (i - 1)) / float(j + 1 - (i - 1)) - 0.1) / 0.85)
                    p = a.lerp(b, u) + bow * (4 * u * (1 - u))
                    B[k] = Vector((p.x, p.y, 0.0))
                    Fy[k] = ya + (Fy[j + 1] - ya) * u
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
        self.ball = ball

        # the feet: lifted and tipped by their step, turned to their yaw, and
        # the ankles that put each ball there
        self.foot, self.toes, self.ankle = ({s: [None] * n for s in SIDES} for _ in range(3))
        for k, r in enumerate(fk):
            for s in SIDES:
                h = lift[s][k]
                ball[s][k].z = floor[s] + (r[s]["bl"].z - floor[s]) * h
                R = yaw(self.fyaw[s][k] - r["psi"])
                self.foot[s][k] = R @ blend(r[s]["rest"][0], r[s]["clip"][0], h)
                self.toes[s][k] = R @ blend(r[s]["rest"][1], r[s]["clip"][1], h)
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
        w = self.ik(f)
        if k is None or w <= 0.0:
            return wrot, pelvis
        body = self.body
        psi = self.track.root[f][2]
        clip = wrot
        pelvis = pelvis + Vector((0.0, 0.0, self.rise[k] * w))
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
        for s in SIDES:
            th, ca, fo, ba = "thigh_" + s, "calf_" + s, "foot_" + s, "ball_" + s
            H = body.world(A, M, th)
            l1 = (body.world(A, M, ca) - H).length
            l2 = (body.world(A, M, fo) - body.world(A, M, ca)).length
            d = self.ankle[s][k] - H
            dist = min(max(d.length, abs(l1 - l2) + 1e-4), (l1 + l2) * 0.9999)
            if dist < d.length - 1e-3:
                self.short.append((f, s, d.length - dist))
            u = d.normalized()
            toes = self.foot[s][k] @ body.rel[ba].translation   # ankle to ball: the way the foot points
            toes.z = 0.0
            bend = toes - u * toes.dot(u)
            if bend.length < 1e-4:
                bend = yaw(psi) @ FWD
                bend -= u * bend.dot(u)
            bend.normalize()
            c = (l1 * l1 + dist * dist - l2 * l2) / (2 * l1 * dist)
            a = math.acos(max(-1.0, min(1.0, c)))
            K = H + l1 * (math.cos(a) * u + math.sin(a) * bend)
            T = H + u * dist
            wrot[th] = aim((K - H).normalized(), bend) @ body.wdown_ual[th]
            wrot[ca] = aim((T - K).normalized(), bend) @ body.wdown_ual[ca]
            wrot[fo] = self.foot[s][k]
            wrot[ba] = self.toes[s][k]
            if w < 1.0:
                for b in (th, ca, fo, ba):
                    wrot[b] = blend(clip[b], wrot[b], w)
        return wrot, pelvis
