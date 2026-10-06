#!/bin/sh
# A long render that survives being stopped: frames already on disk are kept,
# a frame cut off mid-write is dropped first, and Blender writes a placeholder
# for the frame it is on, so a rerun of the same command carries on from there.
#
#   sh resumable_render.sh OUT/scene.blend FIRST LAST
#
# Renders into the scene's own output path (scene.py sets OUT/frames/f_).
# Start it detached so it outlives the shell:
#   (setsid nohup sh resumable_render.sh OUT/scene.blend 396 499 > /dev/null 2>&1 &)
# and wait on it with a loop, not a sleep (see the skill). Writes
# OUT/render_done when Blender finishes cleanly.
set -e
BLEND="$1"; FIRST="$2"; LAST="$3"
BLENDER="${BLENDER:-/opt/tools/blender-4.5.14-linux-x64/blender}"
OUT="$(dirname "$BLEND")"
mkdir -p "$OUT/frames"
rm -f "$OUT/render_done"
for f in "$OUT"/frames/*.png; do
  [ -e "$f" ] || continue
  python3 -I -c "
import sys
from PIL import Image
try:
    im = Image.open(sys.argv[1]); im.load()
except Exception:
    sys.exit(1)" "$f" || rm -f "$f"
done
"$BLENDER" -b "$BLEND" -s "$FIRST" -e "$LAST" --python-expr "
import bpy
r = bpy.context.scene.render
r.use_overwrite = False
r.use_placeholder = True
bpy.ops.render.render(animation=True)
" > "$OUT/render_${FIRST}_${LAST}.log" 2>&1
echo DONE > "$OUT/render_done"
