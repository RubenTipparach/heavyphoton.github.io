# Heavy Photon: 3D render of the primary lockup

`raygun-v2-branded.svg`, the primary wide lockup, built as a 3D scene in
Blender with surfaces authored in Material Maker, rendered in Cycles with
volumetric haze, smoke and a glowing plasma beam.

This is the approval round: low-res previews of five lighting styles and five
gun finishes, in `previews/`. Once a pairing is picked, the same scene
renders at 3840 x 2160.

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

One look, any size:

```sh
blender -b --factory-startup -P build_scene.py -- \
    --material bone_enamel --light studio \
    --res 3840 2160 --samples 256 --out out/final.png --save out/final.blend
```

`--material` is one of `bone_enamel`, `brushed_steel`, `polished_brass`,
`gloss_ceramic`, `hull_panels`. `--light` is one of `studio`, `noir`, `space`,
`ember`, `product`. `--cam X Y Z TX TY TZ LENS` overrides the camera.

## The model

One SVG px is 1 cm, so the lockup is about 16 m wide; the camera looks down
+Y. Every part of the gun is its own bevelled extrusion, so it reads as an
assembly rather than one slab: the fins stand proudest, the muzzle ring is the
fattest piece, HEAVY is a raised ink plate across the body and barrel, and
PHOTON stands 21 cm out of the front of the beam. The depths are the `DEPTH`
table at the top of `build_scene.py`.

The beam is the SVG's nozzle and slab, carried on past the right edge of
frame the way the flat logo bleeds off its canvas: a clear skin with a lit
rim, filled with turbulent plasma that is white-hot on the axis and falls off
to cyan and blue at the walls. Three hidden area lights inside it do its
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
