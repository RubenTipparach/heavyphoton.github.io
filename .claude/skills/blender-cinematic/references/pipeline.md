# The pipeline, module by module

The reference implementation is `cinematics/plate_shop/`. Names below are
that film's; a new cinematic copies the machinery and replaces the content.

## Contents

1. scene.py: one run builds everything
2. Bodies: build_cine.py and retarget.py
3. Materials on bodies
4. Clips: clips.py
5. Placing and keying a performance
6. Ragdoll: ragdoll.py
7. Set, props, textures, lights
8. Cameras and the cut
9. Story time to render time
10. Finish: finish.py
11. Sound: audio/
12. Encode and storyboard

## 1. scene.py: one run builds everything

`blender -b --factory-startup -P scene.py -- --out OUT [--lo | --final]`
deletes the default objects and builds the whole film into
`OUT/scene.blend`: materials, set, props, the two bodies with their
performances keyed on every story frame, the ragdoll baked, lights, cameras on
markers, the exposure flash, and the render settings. It writes
`OUT/timing.json` (story to output mapping, the dissolve, the hold) and
`OUT/s9_plate.json` (where the last plate lands on screen, for the dissolve).
A build takes about 10 s, so iterate by rebuilding, not by editing a .blend.

Render sizes: `--lo` 192 x 108 at 24 samples (previz), default 768 x 432 at 16,
`--final` 640 x 360 at 32 with motion blur (the picture inside the 640 x 480
letterbox). Denoising on, 4 bounces, standard view transform with no look
(late-90s CG did not tone map).

The build prints what to check: `WALK` (speed and timing of the walk in),
`TURN`, `LEAD` (how far the chest and head lead the hips), `STEP` (each
authored step and each walk footfall, with frames and seconds), `GAIT`
(frames a leg could not reach its foot, with the shortfall), `AIM`, `REACH`.

## 2. Bodies: build_cine.py and retarget.py

`build_cine.py` wraps fps-game-demo's `tools/blender/build_npcs.py` (MPFB2
with the MakeHuman CC0 asset packs; `tools/deps/fetch_character_tools.py`
fetches them). A body row in the bodies JSON sets sex, age, height, muscle,
weight, proportions, race mix, skin and tone, eyes, eyebrows, hair, and
clothes with tints. Face targets from the faces JSON are handed to MPFB's
HumanService as each human is created; push them past average (square
heads, slab jaws, gaunt cheeks, hooked noses) so each face reads at a
glance, StarCraft-cinematic style. The output is one skinned mesh per body on
MPFB's 53-bone `game_engine` rig, in `bodies/*.glb` (git-ignored, rebuilt
from the JSON).

`retarget.import_body` imports a glb and wraps it as a `Body`. Two details:
the glTF importer leaves objects in quaternion rotation mode (set
`rotation_mode = "XYZ"` or the turn you key is ignored), and the glb faces
-Y while the scene's characters face +Y (`TURN`, a half turn on the armature
object). `Body.solve_world(A, wrot, pelvis)` turns world rotations per bone
into armature-space matrices down the chain; `Body.key` keys the armature
object and every bone at a frame, keeping quaternion signs continuous.
`retarget.lowpoly(body, 0.5)` decimates with X symmetry and applies it under
the armature, so the skin weights come with it.

## 3. Materials on bodies

- `skin_detail`: the build's normal maps carry roughness in alpha (oily
  T-zone, drier cheeks; cloth on clothes), which the importer leaves unwired;
  wire it. Push skin normals for close shots, chain a fine Voronoi pore bump on
  the UVs, add subsurface.
- `in_shadow`: multiply a face's colour down (0.1) so a figure under a hat
  brim stays a shape the key light only rims.
- Garment atlas tiles: the outfit material is one atlas shared by clothes,
  shoes and eyes. Mask the garment's tile by UV (`GARMENT_TILE`) and re-shade
  only that: `convict_stripes` paints bands off the undeformed (Generated)
  height; `tailored_wool` gives wool's shading (roughness 0.86, specular
  0.22, sheen 0.45 at roughness 0.38) and normal detail chained after the
  garment's normal map, all off Generated coordinates scaled by the rest
  bounding box to metres so it rides the cloth: sparse ridged creases a few
  centimetres across (longer round the limbs), a 1.5 cm yarn slub that also
  heathers the colour, millimetre fuzz, and twill ribs. Detail finer than a
  centimetre is invisible at 640 x 480; the creases and slub are what read.
  Too much crease looks like crumpled paper; a tailored suit is mostly smooth.

## 4. Clips: clips.py

The Universal Animation Library (`ual_standard.glb` in fps-game-demo) is
keyed on a Rigify DEF skeleton. `clips.Library` imports it once, samples a
clip on demand (every source frame, in the target's terms) and interpolates
between samples (`pose(clip, t)`). The retarget goes through the down rest:
both skeletons' rest poses with arms and legs straightened to hang down,
facing +Y; a source bone's world rotation away from its down rest is applied
to the target bone's down rest. `clips.prepare(body)` gives a body its down
rest, leg length and pelvis position. Hide the library's armature with
`hide_render` only: a viewport-hidden armature is never evaluated.

Useful clips: `Idle_Loop`, `Walk_Formal_Loop` (cycle 1.333 s, 1.27 m/s on
this cast), `Walk_Loop`, `PickUp_Table`, `Interact`, `Pistol_Idle_Loop`,
`Pistol_Shoot`, `Push_Loop`, `Sitting_*`, `Death01`, `Hit_Chest`. There is
no turn clip (see `gait.md`). `Library.walk_speed(clip)` measures a walk's
ground speed from its planted foot.

## 5. Placing and keying a performance

A `clips.Track(lib, fps)` is a performance:

- `play(f0, f1, clip, t0, rate, loop, blend)`: a segment, cross-faded from
  the one before over `blend` frames. `t0` may be a function of the frame
  that returns clip time outright, for a varying cadence (how a clip's foot
  is landed on a chosen frame).
- `root`: frame to (x, y, yaw); `hold`, `move`, `turn` fill it.
- `layers`: functions of the frame returning {bone: world quaternion} turned
  on top (a head turned to listen; an upper body leading a turn, carried down
  the spine and out along the arms so the shoulders stay on).
- `legs`: a function (frame, A, world rotations, pelvis) returning new ones
  (`gait.Gait`: planted feet and IK).

`clips.solve(body, lib, track, f, fix)` returns the armature and bone
matrices for a frame (`pose_world` gives the world rotations before `legs`).
`fix` turns given bones about their chain roots (raising arms to aim). Key
every bone every story frame with `Body.key`, so the .blend needs nothing but
its own keys. Fit a walk to a cut by playing it faster (the plate shop's walk
in is 1.24x) and moving the root at the walk speed times that rate, so the
feet stay planted.

## 6. Ragdoll: ragdoll.py

On the frame of the hit the body becomes eleven Bullet boxes (`segments`)
joined by generic constraints with joint limits (the knee to 35 deg), among
box colliders for the set (`collider`). Blender's force fields act for only
one substep, so the kick is an impulse: `force = mass * speed * fps *
substeps` keyed on for one substep, aimed from the bolt's direction with a
little sideways lean. Turn deactivation on so the body comes to rest instead
of sliding off a table; stiffen joints that buckle. `simulate` bakes the
boxes' motion and `pose_at` puts it back on the bones for keying.

## 7. Set, props, textures, lights

Build the set from boxes, cylinders and curves (`box`, `cyl`, `ball`,
`_curve`), parented into props. `surfaces.apply` box-projects fps-game-demo's
Material Maker textures (albedo plus ORM) onto them, tinted to each
material's colour; normalise detail by the texture's mean luminance or it
darkens the colour. A conveyor of copies: hide each copy across its wrap
frames, or interpolation drags it across the screen. A plate in relief:
the logo's parts as curves, extruded and bevelled, on a chamfered frame
(`logo_plate`). Light dark: moonlight shafts through bars (volumetric fog in
a box), one lit press, practicals; an emissive glow and a keyed point light
for a weapon's charge; an exposure flash keyed constant for a white-out.

## 8. Cameras and the cut

`camera(name, loc, target, lens, ...)` places a camera aimed at a point,
optionally moving over a span; `cameras()` builds one per shot and binds them
to timeline markers named after the shots, in story frames. A shot that has
to match a 2D card (the plate dissolving into the logo) is framed by
computing the distance that gives the subject exactly the card's share of the
picture (`plate_camera`, `LOGO_FILL` 0.84 of the width, centred), and the
build writes where it actually landed (`plate_on_screen`) for `finish.py` to
match to the pixel.

## 9. Story time to render time

`retime()` sets the render to 24 fps with `frame_map_old` 15 and
`frame_map_new` 24, the frame range in output frames, and writes
`timing.json`. Markers stay in story frames. Output frame = story x 1.6.
Blender interpolates each bone between story keys on its own, so check motion
on output frames, and expect a planted foot to drift a little between keys
(solve and key at the output rate to remove it).

## 10. Finish: finish.py

`python3 finish.py OUT [--final]` reads the render and writes `OUT/final/`:
frames as rendered up to the dissolve; the dissolve (the plate cross-fades
into the logo card in place, through a cyan bloom); the hold (the logo card
still, at exactly the size it dissolved into: resizing a small logo frame by
frame rounds width and height apart and it visibly stretches); the fade out
(`FADE_OUT` 1 s to black). `--final` adds the vignette (grain is available
but off), letterboxes to 640 x 480, and reduces the whole film to one
256-colour palette built from 48 frames sampled across it (median cut), with
Floyd-Steinberg dither.

## 11. Sound: audio/

`fetch_sources.py` downloads the OpenGameArt sources (git-ignored, about
220 MB) listed with their licences in `credits.json`; only CC0 and CC-BY;
`CREDITS.md` gives every credit, and a CC-BY credit must be posted with the
film. `mix.py` places every cue in seconds as constants at the top (door,
footsteps in and out as lists of times, charge whine, shot, body fall,
tinnitus, whoosh into the logo, logo hit and tail), adds a room and a hall
reverb, fades the master over the last `FADE_OUT` with the picture, and
normalises to a true-peak ceiling. Cue footsteps on the frames the build's
`STEP` lines print (heel a few hundredths of a second before the ball);
footfalls get quieter and duller as a character walks away.

## 12. Encode and storyboard

`sh make_videos.sh OUT` encodes `OUT/final/` with `audio/soundtrack.wav`
(libx264, preset slow, CRF 22, yuv420p, AAC 160k, `-shortest`; a 4x nearest
copy for low-res renders). `python3 storyboard.py OUT` tiles one frame per
shot with its timecode, frame count and caption (shots in story frames, in
`SHOTS`). The film and storyboard are committed to `film/`; the README says
the length, the look and the credits.
