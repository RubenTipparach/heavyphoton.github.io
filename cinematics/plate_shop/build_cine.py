"""Build the cinematic's two bodies with fps-game-demo's NPC pipeline, plus face shaping.

The game's table schema has no face controls, so this wraps build_npcs.py
rather than changing it: every body is built exactly as the game builds one,
and MPFB is handed extra targets from cine_faces.json (target name -> weight,
0..1, from MPFB's data/targets) as the human is created, so the proxy body,
the clothes and the eyes are all fitted to the shaped head.

    blender -b --factory-startup --python build_cine.py
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from paths import FPS_GAME_DEMO  # noqa: E402

TOOLS = os.path.join(FPS_GAME_DEMO, "tools", "blender")
sys.path.insert(0, TOOLS)
import build_npcs as B  # noqa: E402

# build_npcs resolves the table's out_dir against fps-game-demo's root; the
# bodies belong here, so the table it reads is a copy pointed at ./bodies.
_table = json.load(open(os.path.join(HERE, "cine_bodies.json")))
_table["out_dir"] = os.path.join(HERE, "bodies")
os.makedirs(_table["out_dir"], exist_ok=True)
_run_table = os.path.join(_table["out_dir"], ".cine_bodies.json")
json.dump(_table, open(_run_table, "w"), indent=1)
if "--table" in sys.argv:
    sys.argv[sys.argv.index("--table") + 1] = _run_table
else:
    sys.argv += (["--"] if "--" not in sys.argv else []) + ["--table", _run_table]

FACES = json.load(open(os.path.join(HERE, "cine_faces.json")))
_build_human = B.build_human


def build_human(spec, table, m):
    hs = m["HumanService"]
    real = hs.deserialize_from_dict
    shape = {k: v for k, v in FACES.get(spec["id"], {}).items() if not k.startswith("_")}

    def with_face(info, settings):
        info["targets"] = list(info.get("targets") or []) + [{"target": k, "value": v} for k, v in shape.items()]
        return real(info, settings)

    hs.deserialize_from_dict = with_face
    try:
        human = _build_human(spec, table, m)
    finally:
        hs.deserialize_from_dict = real
    keys = human.data.shape_keys.key_blocks if human.data.shape_keys else []
    hit = [k.name for k in keys if any(t in k.name for t in shape)]
    print("[face] %s: %d of %d targets loaded" % (spec["id"], len(hit), len(shape)), flush=True)
    return human


B.build_human = build_human
os.chdir(FPS_GAME_DEMO)
B.main()
