"""An MPFB body in the scene, and the bone maths that poses and bakes it.

A body is a glb from fps-game-demo's NPC pipeline (build_cine.py builds the
two here): one skinned mesh on MPFB's 53-bone `game_engine` rig, facing -Y.
The scene stands its characters facing +Y, so the armature object carries a
half turn (TURN).

Posing works in world rotations: clips.py and ragdoll.py say how each bone
should be turned in the world, solve_world() turns that into armature-space
matrices down the bone chain, and key() writes them as pose keys, every bone,
every frame, so the rendered file needs nothing but its own keys.
"""
import math

import bpy
from mathutils import Matrix, Vector

TURN = Matrix.Rotation(math.pi, 4, "Z")   # the glb faces -Y; the scene's characters face +Y


def import_body(path, name):
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=path)
    new = [o for o in bpy.data.objects if o not in before]
    arm = next(o for o in new if o.type == "ARMATURE")
    arm.name = name
    arm.rotation_mode = "XYZ"   # the glTF importer leaves objects in quaternions
    for o in new:
        if o.type == "MESH":
            o.name = name + "_mesh"
    return Body(arm)


class Body:
    def __init__(self, arm):
        self.arm = arm
        self.a0 = arm.matrix_world.copy()
        bones = arm.data.bones
        self.order = []

        def walk(b):
            self.order.append(b.name)
            for c in b.children:
                walk(c)
        for b in bones:
            if b.parent is None:
                walk(b)
        self.rest = {b.name: b.matrix_local.copy() for b in bones}
        self.parent = {b.name: (b.parent.name if b.parent else None) for b in bones}
        self.rel = {n: (self.rest[p].inverted() @ self.rest[n] if p else self.rest[n])
                    for n, p in self.parent.items()}
        self.length = {b.name: b.length for b in bones}

    def solve_world(self, A, wrot, pelvis_world):
        """Armature-space matrices from world rotations per bone (any bone not
        given keeps its rest relation to its parent) and the pelvis position."""
        a_rot_inv = A.to_3x3().inverted()
        M = {}
        for n in self.order:
            p = self.parent[n]
            pm = M[p] if p else Matrix.Identity(4)
            rot = a_rot_inv @ wrot[n] if n in wrot else pm.to_3x3() @ self.rel[n].to_3x3()
            head = pm @ self.rel[n].translation if p else self.rel[n].translation.copy()
            if n == "pelvis":
                head = A.inverted() @ pelvis_world
            m = rot.to_4x4()
            m.translation = head
            M[n] = m
        return M

    def world(self, A, M, bone, along=0.0):
        """World position of a point `along` the bone (0 head, 1 tail)."""
        return A @ (M[bone] @ Vector((0, self.length[bone] * along, 0)))

    def tail_frame(self, A, M, bone):
        return A @ M[bone] @ Matrix.Translation((0, self.length[bone], 0))

    def key(self, f, A, M, prev):
        """Key the armature object and every bone at frame f. prev carries the
        last frame's rotations, so quaternions and eulers never flip sign."""
        arm = self.arm
        loc, rot, _ = A.decompose()
        arm.location = loc
        arm.rotation_euler = rot.to_euler("XYZ", prev.get("_eul", arm.rotation_euler))
        prev["_eul"] = arm.rotation_euler.copy()
        arm.keyframe_insert("location", frame=f)
        arm.keyframe_insert("rotation_euler", frame=f)
        for n in self.order:
            if n == "root":
                continue
            p = self.parent[n]
            base = (M[p] @ self.rel[n]) if p else self.rel[n]
            basis = base.inverted() @ M[n]
            q = basis.to_quaternion()
            if n in prev and prev[n].dot(q) < 0:
                q.negate()
            prev[n] = q
            pb = arm.pose.bones[n]
            pb.rotation_mode = "QUATERNION"
            pb.rotation_quaternion = q
            pb.keyframe_insert("rotation_quaternion", frame=f)
            if n == "pelvis":
                pb.location = basis.translation
                pb.keyframe_insert("location", frame=f)


def lowpoly(body, ratio):
    """Fewer polygons on the body: a collapse decimation, symmetric in X, applied
    under the armature so the skin weights are interpolated with it."""
    mesh = next(o for o in body.arm.children if o.type == "MESH")
    before = sum(len(p.vertices) - 2 for p in mesh.data.polygons)
    mod = mesh.modifiers.new("lowpoly", "DECIMATE")
    mod.ratio = ratio
    mod.use_symmetry = True
    mod.symmetry_axis = "X"
    with bpy.context.temp_override(object=mesh, active_object=mesh, selected_objects=[mesh]):
        bpy.ops.object.modifier_move_to_index(modifier=mod.name, index=0)
        bpy.ops.object.modifier_apply(modifier=mod.name)
    after = sum(len(p.vertices) - 2 for p in mesh.data.polygons)
    print("LOWPOLY %s %d -> %d triangles" % (body.arm.name, before, after))
    return before, after
