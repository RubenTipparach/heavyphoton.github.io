# Heavy Photon: 3D render of the primary lockup

`raygun-v2-branded.svg`, the primary wide lockup, built as a 3D scene in
Blender with surfaces authored in Material Maker, rendered in Cycles with
volumetric haze, smoke and a glowing plasma beam.

**The approved look** is finish 5, hull plating, under A, the dark studio
light, square-on through a 45 degree lens, inside a bevelled gunmetal frame
with a cyan pinline. The crop is the frame, and everything outside it is
transparent. The 4K render is `final/heavy-photon-3d-4k.png` (3840 x 1071).
A 1724 px wide cut of it is the boot splash in godot-sandbox.

`previews/` holds the first approval round: five lighting styles and five
finishes from a three-quarter camera, before the frame. The scene has moved
on since (the frame, the merged hull, no floor), so they are a record of
that round, not of what `build_scene.py` renders today.

## Pipeline

```
raygun-v2-branded.svg
  -> svg_shapes.py      flatten to polygons, merge each letter -> shapes.json
materials.py            author Material Maker graphs -> materials/*.ptex
  -> mm_export.py       Material Maker, headless   -> textures/  (not committed)
build_scene.py          Blender: extrude, texture, light, render
render_previews.py      the approval set -> previews/
make_sheets.py          previews -> previews/sheet-*.png
```

```sh
pip install shapely pillow
python3 svg_shapes.py
python3 materials.py
python3 mm_export.py textures materials/*.ptex
python3 render_previews.py
python3 make_sheets.py
```

The approved render:

```sh
blender -b --factory-startup -P build_scene.py -- \
    --material hull_panels --light studio \
    --width 3840 --samples 256 --out final/heavy-photon-3d-4k.png
```

`--material` is one of `bone_enamel`, `brushed_steel`, `polished_brass`,
`gloss_ceramic`, `hull_panels`. `--light` is one of `studio`, `noir`, `space`,
`ember`, `product`. `--width` sets the size and the height follows the
frame's shape; `--no-frame` drops the frame and crops to the original
viewBox. `--view gun` is a square-on close-up of the gun, `--view hero` the
first round's three-quarter camera, and `--cam X Y Z TX TY TZ LENS` any
camera at all. At 3840 wide on a 4-core CPU with no GPU the render takes
about 40 minutes.

## The model

One SVG px is 1 cm, so the lockup is about 16 m wide; the camera looks down
+Y. The gun is a few bevelled extrusions, so it reads as an assembly: the
fins stand proudest, the sight, grip, trigger and tip are their own pieces,
and the body, barrel, shelf and muzzle are one hull, so HEAVY, a raised ink
plate, sits on a single flat surface with no seam or step behind its
letters. PHOTON stands 21 cm out of the front of the beam. The depths are
the `DEPTH` table at the top of `build_scene.py`; `svg_shapes.py` decides
which SVG groups merge into the hull.

The frame is the original's viewBox grown by a 22 px gap and a 34 px
border, its inside corners cut like the letterforms, chamfered on both
edges, standing proud of everything else. The camera backs off until the
crop exactly spans the frame's silhouette, and a holdout sheet that only
the camera sees, with the frame's outline cut out of it, makes everything
outside the frame transparent. There is no floor.

The beam is the SVG's nozzle and slab, carried on in under the frame's right
side (or, with no frame, past the edge, the way the flat logo bleeds off its
canvas): a clear skin with a lit rim, filled with turbulent plasma that is
white-hot on the axis and falls off to cyan and blue at the walls. Three hidden area lights inside it do its
lighting, which is far less noisy than leaving it to the emissive volume.

## Materials

Each finish is a Material Maker graph built by `materials.py` from Material
Maker's own nodes, in the brand palette (bone `#F2F0E9`, ink `#0B0E14`, ion
cyan `#3EE0FF`). Open any `.ptex` in Material Maker to tweak it, then re-run
`mm_export.py`.

Surface relief leaves Material Maker as a height map and Blender's Bump node
turns it into shading. Material Maker's own normal map nodes run through a
compute buffer, and on the software Vulkan driver this was exported with
(Mesa lavapipe, no GPU) that path segfaults.

The enamel's chipped corners and the crevice grime are worked out in Cycles
(a bevel normal and ambient occlusion), masked by Material Maker's chip
texture, because only the renderer knows where the model's corners and
crevices are.

## Running Material Maker headless

Material Maker is a Godot app, so it needs a display and a Vulkan device.
`xvfb-run` and Mesa's lavapipe stand in for both
(`apt install xvfb mesa-vulkan-drivers`). Three things `mm_export.py` works
around:

- The export target must be spelled `--target Blender`. Godot's launcher takes
  `-t` for itself (always on top) before Material Maker sees it.
- The exporter never quits, so the wrapper watches for `Done` and stops it.
- Now and then it segfaults while still loading a graph, and the same file
  exports cleanly on the next try, so a crash is retried.
