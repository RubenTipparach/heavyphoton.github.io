"""Where the cinematic finds its inputs.

It lives in heavyphoton.github.io (cinematics/plate_shop/) and borrows from a
checkout of fps-game-demo beside it: the NPC body pipeline, the Universal
Animation Library clips and the Material Maker textures. Override either with
an environment variable.
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
HEAVYPHOTON = os.environ.get("HEAVYPHOTON", os.path.normpath(os.path.join(HERE, "..", "..")))
FPS_GAME_DEMO = os.environ.get("FPS_GAME_DEMO", os.path.normpath(os.path.join(HEAVYPHOTON, "..", "fps-game-demo")))
