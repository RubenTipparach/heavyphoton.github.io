# Concept car (after Peugeot's Inception)

`inception_concept.blend` is a sleek four seat EV concept, modelled the
non-destructive way: nothing is applied, so every modifier is still live in
the stack. Blender 4.5, Cycles. Open it and press F12 (1920 x 1080, 256
samples), or look at it in the viewport.

## How it is built

- **Body**: half a box cage (20 x 4 x 4 loops) shaped by moving vertices,
  then a modifier stack:
  1. Mirror (Y, clipping), so only one half is modelled.
  2. Subdivision Surface (level 2).
  3. Solidify (2.5 cm, inward). Its material offset gives the inside of
     the shell the interior trim material.
  4. Boolean "arches": the wheel arch cutter.
  5. Boolean "cockpit": opens the deck for the cabin.
  6. Boolean "seams": the door and hood shut lines (6 mm gaps).
  7. Booleans "front lights" and "rear lights": the light slash recesses.
- **Cutters** (collection `Cutters`, shown as wire, hidden in renders) carry
  their own modifiers. The arch cutter is one cylinder, mirrored and then
  arrayed to the rear axle. The seam cutter is a ribbon thickened by
  Solidify and mirrored. Each light cutter is one bar, Array x3, Mirror,
  Bevel. Move a cutter and the body re-cuts.
- **Canopy**: one half grid, Mirror, Subdivision, Solidify (12 mm).
  Iridescent glass from the Principled BSDF's thin film, with the film
  thickness running front to back.
- **Interior** (collection `Interior`): front and rear seats (Bevel,
  Mirror), dashboard, centre console, a driver screen, and the
  "hypersquare" yoke as a bevelled curve.
- **Wheels** (collection `Wheel`): the tyre and rim barrel are profiles
  spun by the Screw modifier. The aero cover has Bevel, and twelve turbine
  fins come from one fin with an Array using an object offset (an empty
  turned 30 degrees). The other three wheels are collection instances.
- **Lights** (collection `Lights`): LED bars, Array x3, Mirror, emission.

## Scripts

- `build_inception.py` builds the whole scene step by step from nothing and
  renders a timelapse of it:
  `blender -b --factory-startup -P build_inception.py -- OUT`.
  `--no-render` only builds and saves the `.blend`.
- `hud.py` draws the step overlay onto those frames and encodes the video.
