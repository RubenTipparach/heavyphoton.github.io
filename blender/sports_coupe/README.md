# Sports coupe (the first timelapse car)

`sports_coupe.blend` is the red two door coupe from the first modelling
timelapse (`car_modeling_timelapse.mp4`). Blender 4.5, Cycles; press F12
for 1920 x 1080 at 256 samples.

It is the simpler build:

- The body is a full box cage shaped by moving vertices, with a Subdivision
  Surface modifier.
- One Boolean modifier cuts the wheel arches from the `arch_cutters`
  object (shown as wire, hidden in renders).
- The windows are faces of the body with a glass material. There are no
  openings and no interior; `../concept_car/` is the version done properly
  with those.
- Wheels, lights, mirrors, the wing and the exhausts are separate parts.

`build_car.py` builds it from nothing and renders the timelapse:
`blender -b --factory-startup -P build_car.py -- OUT`. With `--no-render`
it only builds and saves the `.blend`.
