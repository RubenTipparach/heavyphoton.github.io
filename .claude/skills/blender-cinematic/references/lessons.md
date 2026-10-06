# Lessons: what went wrong, why, and the fix

Grouped by where they bite. Each was hit making the plate shop film.

## Working with the owner

- A final render started without a go was stopped three times. Ask, or wait
  for "do final render pass"; low-res reviews and small check renders are
  fine.
- Fixing a guess cost rounds. When a note says "looks wrong", find the frame
  (the owner may give a time: seconds x 24 = output frame), render it large
  from the shot's side, measure it, then change one thing.
- Showing only numbers is not enough; send the frames (before on top, after
  below) with the numbers.

## Blender, headless

- Workbench and EEVEE crash without EGL: render previews with Cycles at low
  samples.
- The glTF importer leaves objects in quaternion mode; a keyed Euler turn is
  ignored until `rotation_mode = "XYZ"`.
- `hide_viewport` stops an armature being evaluated; hide with `hide_render`.
- Force fields act for one substep: a kick is an impulse, `mass * speed * fps
  * substeps`, keyed for one substep.
- Time stretching switches cameras on the stretched time: keep markers in
  story frames.
- A looping copy (a conveyor) interpolates across its wrap and streaks across
  the frame: hide it over the wrap frames.
- Background jobs are capped and the container restarts: run long renders
  detached (`setsid nohup`), resumable, and wait with a loop that also ends
  when the process is gone.
- `pkill -f PATTERN` also matches the shell running it if the pattern appears
  in the command line: anchor the pattern to the process (`^/opt/tools/blender`)
  or use a bracket trick (`[b]lender`).
- Python's `hash()` is salted per process: fingerprint with md5 of sorted
  text when comparing builds.

## Picture

- A slow push-in on a small logo rounds its width and height separately each
  frame and it visibly stretches: hold it still.
- Texture detail multiplied onto a colour darkens it: normalise by the
  texture's mean.
- Grain at CRF 22 costs most of the file (22 MB with, 5 MB without).
- One palette for the whole film, from frames sampled across it, or colours
  flicker between frames.
- Cloth with default roughness from an atlas reads as latex: give it a
  fabric's shading (high roughness, low specular, sheen) and centimetre-scale
  normal detail; millimetre detail is invisible at 640 x 480.

## Motion

- A spin on the spot skates the feet; a walked arc at full stride skates
  round the curve; short steps round a tight arc read wrong. Turn head first,
  in two steps (`gait.md`).
- Contact read from the clip's lowest foot height misses a foot the clip
  carries higher (the walk's left, 2.5 cm above idle): read contacts off the
  clip's timing.
- Lock the ball of the foot, not the ankle: heel off moves the ankle, and a
  locked ankle drags the supporting foot 15 cm.
- The first step out of a blend from idle jerks if it follows the clip's own
  swing timing: ease each swing from lift-off to landing and slow the first.
- IK knee bend from the clip's knee lands on the wrong side of a moved foot;
  from the toes' direction it flips at toe off. Use the foot's level
  side-to-side axis and build the bones from the plane.
- A planted foot that does not pivot with the hips twists the thigh past a
  hip's reach; pivot it on the ball, all the way past 35 deg.
- Blending whole rotations IK to FK overshoots; blend swing and twist apart.
- Hand off to a clip where its feet already are; derive the last step from
  the clip's stride.
- Hips that lag behind the feet put a foot on the wrong side: key them over
  the feet.
- The formal walk's heel flick (88 deg knee, thigh hanging) reads as a leg
  folding back out of a turn: ease knees past 50 deg while re-planted.
- A walk played at a different pace from one the audience has already seen
  reads off: reuse the same clip at the same pace.
- Story-rate keys interpolated per bone at 24 fps let a planted foot drift
  6 to 15 mm a frame between keys: key at the output rate if it shows.
- The FK walk itself slips a little against a constant root speed (up to
  about 2 cm a frame on this clip): that is the clip, and it reads fine.

## Sound

- Cue footsteps from the frames the build prints, not a regular interval:
  turns and hand-overs change the rhythm.
- Fade the master with the picture's fade, over the same second.
- Keep only CC0 and CC-BY sources and credit every one.
