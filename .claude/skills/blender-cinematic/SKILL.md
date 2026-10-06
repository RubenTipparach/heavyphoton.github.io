---
name: blender-cinematic
description: Make a scripted, late-90s style game cinematic or cutscene in Blender, from previz to a finished, scored film, the way Heavy Photon's plate shop cinematic (cinematics/plate_shop/) was made - MPFB bodies from fps-game-demo, Universal Animation Library clips retargeted onto them, Bullet ragdolls, foot-planted turns, Cycles at 15 fps story timing rendered at 24, a 640x480 256-colour finish, and an OpenGameArt soundtrack. Use this whenever the user wants a new cinematic, cutscene, trailer shot, intro, logo sting with characters or any animated short built in Blender; wants the plate shop film changed, re-timed, re-shaded, re-scored or re-rendered; or is fixing character motion in these scripts (a turn, a walk, sliding or twisting or folding legs, a ragdoll), even if they never say "skill", "pipeline" or "cinematic".
---

# Scripted Blender cinematics

Everything is built from scripts in one run: no hand-saved .blend, nothing
clicked in the UI. A change is a script change, a rebuild (seconds) and a
render. The worked example is `cinematics/plate_shop/`; its README is the
manual for that film and its code is the reference implementation. This
skill is the method around it and the rules learned making it.

Read `references/pipeline.md` before building or changing a scene,
`references/gait.md` before touching how a character turns or walks, and
`references/lessons.md` when something looks wrong (most problems have been
hit once already).

## How the owner works

These came from the owner's own notes while the plate shop film was made.
They matter more than any technique below.

- **Previz first, low resolution.** Build with `--lo` (192 x 108, 24
  samples) and send a review film. Iterate on notes at that size. A low-res
  render of one shot takes minutes; a final pass takes hours.
- **Never start a final-quality render without an explicit go.** Low-res
  reviews and small check renders are fine to run unasked; a final pass is
  not. Starting one unasked was stopped three times ("Stop render I never
  approved"). After an approval, render; after any later change to the
  animation, the approval is spent.
- **Send what you render.** Every review goes to the owner as files
  (`SendUserFile`: the mp4, plus contact sheets or a before and after), with
  a one-line caption of what changed. Do not describe a render you have not
  sent.
- **When a note says something looks wrong, look and measure before
  changing anything.** Render the moment large, from the shot's own side
  (`scripts/follow_sheet.py`), on every output frame, and measure it
  (`check_legs.py`, `scripts/motion_report.py`). Name the frames and the
  numbers in the reply. Several rounds were lost to fixing a guess.
- **The established look** (keep it unless told otherwise):
  - 640 x 480 letterboxed 16:9 picture, 256 colours from one palette for the
    whole film, Floyd-Steinberg dither, 24 fps, vignette, motion blur;
  - no film grain (it was tried and taken out);
  - the end logo holds perfectly still (a slow push stretched it), then the
    picture and the sound fade to black together over 1 s;
  - a threatening figure stays a shape (the shooter's face is taken down to
    a tenth of its colour under the brim);
  - cloth reads as cloth (the suit was shaded as wool after reading as
    latex).
- **How people move, per the owner:** a character turns head first, then
  chest, then hips, and the feet follow in a couple of steps (not many small
  ones); a walk is the clip's own forward kinematics; once a walk cycle has
  been seen and liked, reuse it (same clip, same pace) instead of re-timing
  a new one.
- **Writing rules:** never use an em dash or an en dash anywhere (code,
  comments, docs, commits, PR text, chat). Commit and push each coherent
  change with a message that says why; keep the film's README current in the
  same commit.

## The pipeline

| Stage | Script | Writes | Run |
| --- | --- | --- | --- |
| bodies | `build_cine.py` + `cine_bodies.json` + `cine_faces.json` | `bodies/*.glb` | `blender -b --factory-startup --python build_cine.py` |
| scene | `scene.py` (+ `clips.py`, `gait.py`, `ragdoll.py`, `retarget.py`, `surfaces.py`) | `OUT/scene.blend`, `timing.json`, `s9_plate.json` | `blender -b --factory-startup -P scene.py -- --out OUT --lo` (or `--final`) |
| render | Blender | `OUT/frames/f_NNNN.png` | `blender -b OUT/scene.blend -a` (or `-s A -e B -a`) |
| finish | `finish.py` | `OUT/final/` | `python3 finish.py OUT --final` |
| encode | `make_videos.sh` | `OUT/plate_shop.mp4` | `sh make_videos.sh OUT` |
| storyboard | `storyboard.py` | `OUT/storyboard.png` | `python3 storyboard.py OUT` |
| sound | `audio/mix.py` (sources from `audio/fetch_sources.py`) | `audio/soundtrack.wav` | `python3 audio/mix.py` |
| checks | `check_legs.py`, this skill's `scripts/` | reports, sheets | see below |

Blender 4.5 LTS is at `/opt/tools/blender-4.5.14-linux-x64/blender`. Render
with Cycles on the CPU: Workbench and EEVEE crash headless here (no EGL). The
scene needs a checkout of fps-game-demo beside this repository (bodies,
animation library, textures); `paths.py` finds it, or set `FPS_GAME_DEMO`.
Keep scratch builds (`OUT`) in the session scratchpad, never in the repo.

## Making a new cinematic

1. **Copy the plate shop's layout** into `cinematics/<name>/`: `scene.py`,
   `clips.py`, `retarget.py`, `gait.py`, `ragdoll.py`, `surfaces.py`,
   `finish.py`, `storyboard.py`, `make_videos.sh`, `paths.py`,
   `check_legs.py`, `build_cine.py`, `audio/`. Strip the plate shop's set,
   props and beats out of `scene.py`; keep the machinery.
2. **Cast.** Add rows to the bodies JSON (sex, age, height, muscle, skin,
   clothes and tints) and face targets to the faces JSON, pushed past
   average so each reads at a glance. Build them.
3. **Write the beats as shots** in 15 fps story frames: `SHOTS` in
   `scene.py` (cuts) and in `storyboard.py` (captions). One beat, one shot.
4. **Block out the set** from boxes with box-projected textures
   (`surfaces.py`), then the lights. Dark, few sources, hard shafts.
5. **Perform the bodies with clips** on a `clips.Track` per character:
   segments of library clips, a root path, layers for added turns, and a
   `legs` hook for planted feet (`references/pipeline.md`).
6. **Cameras on markers** in story frames.
7. **Previz at `--lo`**, send it, iterate on notes.
8. **Sound** once the timing settles: cue the effects on the frames things
   happen (footsteps on the frames feet come down; `scene.py` prints them).
9. **Final pass** only on the owner's go, then finish, encode, storyboard,
   copy the film and storyboard into `film/`, commit, push.

## Story time and render time

The cut is authored and every motion baked at 15 story frames a second;
Blender's time stretching (`frame_map_old` 15, `frame_map_new` 24) renders
it at 24, so output frame = story frame x 1.6. Keep timeline markers (camera
cuts) in story frames: Blender switches cameras on the stretched time.
`timing.json` holds the mapping for `finish.py`.

Measure motion at output frames, not story frames. Blender fills each
output frame by interpolating every bone's rotation on its own between the
story keys, so a planted foot that is exact on the keys drifts between them
(6 to 15 mm a frame was measured on the plate shop turn). To remove that,
solve and key the legs at the output rate instead.

## Characters

- **Bodies** come from fps-game-demo's NPC pipeline (MPFB2, MakeHuman CC0
  assets) as glbs on a 53-bone game rig. `retarget.lowpoly` halves their
  triangles under the armature; `skin_detail` wires the normal map's alpha to
  roughness and adds pores and subsurface; `in_shadow` darkens a face; a
  garment's atlas tile can be re-shaded on its own (`tailored_wool`,
  `convict_stripes`) without touching shoes or eyes.
- **Animation** is the Universal Animation Library (Quaternius, CC0),
  retargeted through a "down rest" (legs and arms straightened to hang down,
  facing +Y): each target bone takes its source bone's world rotation away
  from the down rest. A segment's clock can be a function of the frame, which
  is how a clip's cadence is bent to land a foot on a chosen frame.
- **Turns and walks** use `gait.py` on top of the clips; the recipe and its
  numbers are in `references/gait.md`.
- **Ragdolls** (`ragdoll.py`): eleven Bullet boxes with generic constraints,
  kicked by a one-substep impulse (`mass * speed * fps * substeps`), with the
  set's colliders, then baked back onto the bones. Stiffen the knees and
  enable deactivation so a body stays where it lands.

## Finishing and sound

`finish.py` cuts the render into the end card and gives it the 90s finish:
the last shot frames its subject at exactly the share of the picture the end
card gives the logo, so the dissolve is a cross-fade in place; the logo
holds still and fades to black; then vignette, letterbox, and one palette
built from frames sampled across the whole film so colours never flicker.
Without grain the dithered film encodes small (5 MB at CRF 22); check the
encode against the master frames (PSNR in the mid-30s dB is fine).

Sound comes from OpenGameArt, CC0 and CC-BY only; `audio/CREDITS.md` credits
every file and a CC-BY credit must travel with the film. Sources are fetched,
not committed. `mix.py` places every cue in seconds, fades the master with the
picture, and normalises to a true-peak ceiling.

## Checking motion

Run these on the built scene before sending a review, and always after a note
about motion:

- `blender -b OUT/scene.blend -P check_legs.py -- ARMATURE FIRST LAST`:
  every output frame's hip turn, knee and foot twist, knee direction,
  scissoring, and jumps against natural ranges; exits non-zero on a flag.
- `scripts/motion_report.py`: planted-foot slide, knee bend and the heel
  kick-back, hip swing, ankle range; `--json` for `scripts/foot_plot.py`
  (top-down footprints, the quickest way to see a turn's steps).
- `scripts/follow_sheet.py` then `scripts/contact_sheet.py`: a camera that
  follows the character on every frame, from the shot camera's side,
  tiled and labelled; `--pairs` for a before and after.
- `scene.py` itself prints each authored step (`STEP`) and any frame a leg
  could not reach its foot (`GAIT`).

Numbers do not replace looking: the twist check passed while the leg still
read as broken (it was folding, not twisting). Measure, then look at the
frames enlarged.

## Rendering for real

A final pass is hours of CPU (about 20 s a frame at 640 x 360, 32 samples,
motion blur), and the container can restart under it, killing every process.

- Run it detached and resumable: `(setsid nohup sh scripts/resumable_render.sh
  OUT/scene.blend FIRST LAST > /dev/null 2>&1 &)`. It keeps finished frames,
  drops a frame cut off mid-write, and writes `OUT/render_done` at the end.
  After a restart, run the same command again.
- Wait for it with a background loop that ends when `render_done` exists or
  Blender is gone, not with sleeps; a restart stops the waiter too, so
  re-check on wake.
- Only re-render what changed. Prove the rest is identical first with
  `scripts/scene_fingerprint.py` (bone positions per object and frame, every
  material value and link, render settings) on the old and new builds, check
  every reused PNG opens at the right size, re-render from a frame or two
  before the first change (motion blur and key interpolation reach back),
  and say in the commit which frames came from where.
- When stopping a render, match the Blender process itself
  (`pkill -f "^/opt/tools/blender.* -b OUT/scene.blend"`): a looser pattern
  matches the shell running pkill and kills it.

## Lessons

`references/lessons.md` has the full list with causes and fixes. The ones
that cost most:

- An IK knee aimed along the ankle-to-toe vector bends backward at toe off
  (the toes point back past the vertical). Take a foot's heading from its
  level side-to-side axis.
- Blending whole bone rotations from IK to FK mixes swing with twist and can
  overshoot both; blend direction and twist separately.
- Hand off to a clip only where the feet already are where the clip puts
  them; author the last step to the clip's own stride.
- A planted foot must pivot on its ball as the hips turn (about 35 deg is a
  hip's comfortable reach); otherwise the thigh twists in its socket.
- The formal walk flicks its heel up behind with the thigh still hanging; out
  of a turn, from the side, that reads as a leg folding back.
- Contact detection from a fixed floor misses a foot the clip carries higher
  (the walk carries the left foot 2.5 cm above idle); read contacts off the
  clip's own timing.
