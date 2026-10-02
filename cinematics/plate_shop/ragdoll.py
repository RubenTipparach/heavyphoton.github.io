"""A Bullet ragdoll for an MPFB body, simulated once and baked back onto its bones.

At the start frame the body's pose (from the retarget) is cut into eleven
boxes, the usual ragdoll set, jointed with angular limits and dropped among
passive colliders. The sim runs, each part's world matrix is read back per
frame, and the parts are deleted again: what the scene keeps is bone keys.

Every joint frame is world aligned at the start frame, so the limits read in
the character's own axes there (he faces +Y): X pitches forward and back,
Y rolls sideways, Z twists. A positive X turn swings a limb forward, the
same convention the mannequin used.
"""
import bpy
from mathutils import Matrix, Quaternion, Vector

# name: (bone the box's cross-section follows, mass kg, width, depth)
PARTS = {
    "pelvis": ("pelvis", 12.0, 0.34, 0.22),
    "chest": ("spine_02", 26.0, 0.36, 0.24),
    "head": ("head", 5.5, 0.17, 0.21),
    "upperarm_l": ("upperarm_l", 2.2, 0.10, 0.10), "upperarm_r": ("upperarm_r", 2.2, 0.10, 0.10),
    "forearm_l": ("lowerarm_l", 1.8, 0.08, 0.08), "forearm_r": ("lowerarm_r", 1.8, 0.08, 0.08),
    "thigh_l": ("thigh_l", 9.0, 0.15, 0.15), "thigh_r": ("thigh_r", 9.0, 0.15, 0.15),
    "shin_l": ("calf_l", 4.5, 0.11, 0.11), "shin_r": ("calf_r", 4.5, 0.11, 0.11),
}
SUBSTEPS = 24
# How far a knee can fold. A limp knee (140) drops him straight down the front
# of the press; held to this he pitches forward over it first.
KNEE = 35
# parent, child, the bone whose head is the pivot, limits in degrees (x, y, z)
JOINTS = [
    ("pelvis", "chest", "spine_01", ((-45, 15), (-20, 20), (-25, 25))),
    ("chest", "head", "neck_01", ((-45, 30), (-30, 30), (-45, 45))),
    ("chest", "upperarm_l", "upperarm_l", ((-60, 110), (-15, 80), (-40, 40))),
    ("chest", "upperarm_r", "upperarm_r", ((-60, 110), (-80, 15), (-40, 40))),
    ("upperarm_l", "forearm_l", "lowerarm_l", ((-30, 110), (-5, 5), (-10, 10))),
    ("upperarm_r", "forearm_r", "lowerarm_r", ((-30, 110), (-5, 5), (-10, 10))),
    ("pelvis", "thigh_l", "thigh_l", ((-25, 100), (-10, 45), (-30, 30))),
    ("pelvis", "thigh_r", "thigh_r", ((-25, 100), (-45, 10), (-30, 30))),
    ("thigh_l", "shin_l", "calf_l", ((-KNEE, 0), (-3, 3), (-3, 3))),
    ("thigh_r", "shin_r", "calf_r", ((-KNEE, 0), (-3, 3), (-3, 3))),
]
# Which part turns which bone. Spine bones between the pelvis and the chest
# take a share of each; hands ride their forearms, feet their shins.
BONE_PART = {
    "pelvis": ("pelvis", None, 0), "spine_01": ("pelvis", "chest", 1 / 3),
    "spine_02": ("pelvis", "chest", 2 / 3), "spine_03": ("chest", None, 0),
    "neck_01": ("head", None, 0), "head": ("head", None, 0),
    "upperarm_l": ("upperarm_l", None, 0), "upperarm_r": ("upperarm_r", None, 0),
    "lowerarm_l": ("forearm_l", None, 0), "lowerarm_r": ("forearm_r", None, 0),
    "hand_l": ("forearm_l", None, 0), "hand_r": ("forearm_r", None, 0),
    "thigh_l": ("thigh_l", None, 0), "thigh_r": ("thigh_r", None, 0),
    "calf_l": ("shin_l", None, 0), "calf_r": ("shin_r", None, 0),
    "foot_l": ("shin_l", None, 0), "foot_r": ("shin_r", None, 0),
}


def _active(ob):
    for o in bpy.context.view_layer.objects:
        o.select_set(False)
    bpy.context.view_layer.objects.active = ob
    ob.select_set(True)


def _box_mesh(name, w, length, d):
    me = bpy.data.meshes.new(name)
    x, y, z = w / 2, length / 2, d / 2
    v = [(-x, -y, -z), (x, -y, -z), (x, y, -z), (-x, y, -z), (-x, -y, z), (x, -y, z), (x, y, z), (-x, y, z)]
    f = [(0, 1, 2, 3), (4, 7, 6, 5), (0, 4, 5, 1), (1, 5, 6, 2), (2, 6, 7, 3), (3, 7, 4, 0)]
    me.from_pydata(v, [], f)
    return me


def _frame(a, b, ref_x):
    """World matrix of a box from a to b, its X off ref_x, origin at the middle."""
    y = (b - a).normalized()
    x = (ref_x - y * ref_x.dot(y)).normalized()
    z = x.cross(y)
    m = Matrix((x, y, z)).transposed().to_4x4()
    m.translation = (a + b) / 2
    return m


def segments(body, A, M):
    """(start, end) in world space for each part, off the pose at the start frame."""
    W = lambda b, a=0.0: body.world(A, M, b, a)
    Y = lambda b: ((A @ M[b]).to_3x3() @ Vector((0, 1, 0))).normalized()
    down = Vector((0, 0, -0.06))
    seg = {
        "pelvis": (W("pelvis") - 0.06 * Y("pelvis"), W("spine_01")),
        "chest": (W("spine_01"), W("neck_01")),
        "head": (W("neck_01"), W("head") + 0.24 * Y("head")),
    }
    for s in ("l", "r"):
        seg["upperarm_" + s] = (W("upperarm_" + s), W("lowerarm_" + s))
        seg["forearm_" + s] = (W("lowerarm_" + s), W("hand_" + s, 1.0) + 0.09 * Y("hand_" + s))
        seg["thigh_" + s] = (W("thigh_" + s), W("calf_" + s))
        seg["shin_" + s] = (W("calf_" + s), W("foot_" + s) + down)
    return seg


def collider(name, size, loc):
    ob = bpy.data.objects.new(name, _box_mesh(name, size[0], size[1], size[2]))
    bpy.context.scene.collection.objects.link(ob)
    ob.location = loc
    ob.hide_render = True
    _active(ob)
    bpy.ops.rigidbody.object_add(type="PASSIVE")
    rb = ob.rigid_body
    rb.collision_shape = "BOX"
    rb.friction = 1.0
    rb.restitution = 0.0
    rb.use_margin = True
    rb.collision_margin = 0.004
    rb.collision_collections = [True] * 20
    return ob


def simulate(body, A, M, f0, f1, colliders, push):
    """Ragdoll the body from Blender frame f0 to f1.

    push: [(point, radius, part, m/s)], a radial kick from each point on the
    parts within its radius, sized to give `part` that speed. Returns {part: {frame: Matrix}} and
    the parts' start matrices."""
    scn = bpy.context.scene
    if scn.rigidbody_world is None:
        bpy.ops.rigidbody.world_add()
    rw = scn.rigidbody_world
    rw.enabled = True
    rw.substeps_per_frame = SUBSTEPS
    rw.solver_iterations = 40
    rw.point_cache.frame_start = f0
    rw.point_cache.frame_end = f1
    made = []
    for name, size, loc in colliders:
        made.append(collider("rd_col_" + name, size, loc))

    seg = segments(body, A, M)
    parts, start = {}, {}
    for i, (name, (ref, mass, w, d)) in enumerate(PARTS.items()):
        a, b = seg[name]
        ref_x = (A @ M[ref]).to_3x3() @ Vector((1, 0, 0))
        m = _frame(a, b, ref_x)
        ob = bpy.data.objects.new("rd_" + name, _box_mesh("rd_" + name, w, (b - a).length, d))
        scn.collection.objects.link(ob)
        ob.matrix_world = m
        ob.hide_render = True
        _active(ob)
        bpy.ops.rigidbody.object_add(type="ACTIVE")
        rb = ob.rigid_body
        rb.collision_shape = "BOX"
        rb.mass = mass
        rb.friction = 1.0
        rb.restitution = 0.0
        rb.linear_damping = 0.05
        rb.angular_damping = 0.8
        # Once he has come to rest he stays: a settled body sleeps rather than
        # creeping off the bed under its hanging legs.
        rb.use_deactivation = True
        rb.deactivate_linear_velocity = 0.12
        rb.deactivate_angular_velocity = 0.25
        rb.use_margin = True
        rb.collision_margin = 0.004
        # Each part on its own collision layer: they meet the set, not each other.
        rb.collision_collections = [k == i + 1 for k in range(20)]
        parts[name] = ob
        start[name] = m.copy()
        made.append(ob)

    for parent, child, pivot_bone, lim in JOINTS:
        e = bpy.data.objects.new("rd_joint_%s_%s" % (parent, child), None)
        scn.collection.objects.link(e)
        e.location = body.world(A, M, pivot_bone)
        _active(e)
        bpy.ops.rigidbody.constraint_add(type="GENERIC")
        c = e.rigid_body_constraint
        c.object1, c.object2 = parts[parent], parts[child]
        c.disable_collisions = True
        for ax in "xyz":
            setattr(c, "use_limit_lin_" + ax, True)
            setattr(c, "limit_lin_%s_lower" % ax, 0.0)
            setattr(c, "limit_lin_%s_upper" % ax, 0.0)
        for ax, (lo, hi) in zip("xyz", lim):
            setattr(c, "use_limit_ang_" + ax, True)
            setattr(c, "limit_ang_%s_lower" % ax, lo * 3.14159265 / 180)
            setattr(c, "limit_ang_%s_upper" % ax, hi * 3.14159265 / 180)
        made.append(e)

    # The hit. Blender steps Bullet one substep at a time and Bullet clears
    # applied forces after every step, so a force keyed for one frame acts for
    # one substep: size it as an impulse over that substep.
    fps = scn.render.fps / scn.render.fps_base
    for point, radius, part, speed in push:
        newtons = PARTS[part][1] * speed * fps * SUBSTEPS
        bpy.ops.object.effector_add(type="FORCE", location=point)
        field = bpy.context.view_layer.objects.active
        field.field.falloff_type = "SPHERE"
        field.field.use_max_distance = True
        field.field.distance_max = radius
        field.field.falloff_power = 0.0
        for f, s in ((f0, 0.0), (f0 + 1, newtons), (f0 + 2, 0.0)):
            field.field.strength = s
            field.field.keyframe_insert("strength", frame=f)
        for fc in field.animation_data.action.fcurves:
            for kp in fc.keyframe_points:
                kp.interpolation = "CONSTANT"
        made.append(field)

    track = {name: {} for name in parts}
    for f in range(f0, f1 + 1):
        scn.frame_set(f)
        dg = bpy.context.evaluated_depsgraph_get()
        for name, ob in parts.items():
            track[name][f] = ob.evaluated_get(dg).matrix_world.copy()

    rw.enabled = False
    for ob in made:
        bpy.data.objects.remove(ob, do_unlink=True)
    bpy.ops.rigidbody.world_remove()
    return track, start


def pose_at(body, A0, M0, track, start, f):
    """Bone matrices (armature space) for frame f off the simulated parts."""
    delta = {n: track[n][f] @ start[n].inverted() for n in track}
    drot = {n: d.to_quaternion() for n, d in delta.items()}
    wrot = {}
    spec = dict(BONE_PART)
    for bone in body.order:       # anything else rides its nearest mapped ancestor's part
        b = bone
        while b is not None and b not in BONE_PART:
            b = body.parent[b]
        if b is not None and bone not in spec:
            spec[bone] = (BONE_PART[b][0], None, 0)
    for bone, (pa, pb, frac) in spec.items():
        w0 = (A0 @ M0[bone]).to_3x3().normalized()
        q = drot[pa]
        if pb is not None:
            qb = drot[pb]
            if q.dot(qb) < 0:
                qb = -qb
            q = q.slerp(qb, frac)
        wrot[bone] = q.to_matrix() @ w0
    pelvis = delta["pelvis"] @ body.world(A0, M0, "pelvis")
    return body.solve_world(A0, wrot, pelvis)


def part_centre(body, A, M, name):
    a, b = segments(body, A, M)[name]
    return (a + b) / 2
