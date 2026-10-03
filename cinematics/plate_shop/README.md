# Plate shop: the Heavy Photon cinematic

A 28.6 second cutscene in the style of a late-90s game cinematic. A prisoner
stamps license plates alone on the night shift. A figure in a suit walks in,
puts a photon gun to the back of his head and fires. He falls onto the feed
table, and the suit turns round, head first, and walks out. The camera rises over
the last plate he stamped, the Heavy Photon lockup, and the plate dissolves
into the 3D logo, which holds for 3 seconds and fades to black in 1.

The finished film is 640 x 480, letterboxed, 256 colours, 24 fps, with a
vignette and motion blur (no film grain), and a soundtrack from OpenGameArt.
It is [`film/plate_shop.mp4`](film/plate_shop.mp4), with its storyboard in
[`film/storyboard.png`](film/storyboard.png).

## How it is built

```
cine_bodies.json + cine_faces.json
  -> build_cine.py     the two bodies, by fps-game-demo's NPC pipeline -> bodies/*.glb
scene.py               Blender: set, textures, bodies, clips, ragdoll, cameras -> OUT/scene.blend
  -> blender -a        Cycles                                             -> OUT/frames/
finish.py --final      the logo dissolve, hold and fade to black, vignette,
                       letterbox, one 256-colour palette                  -> OUT/final/
make_videos.sh         frames + audio/soundtrack.wav                      -> OUT/plate_shop.mp4
storyboard.py          one frame per shot, with timings                   -> OUT/storyboard.png
audio/mix.py           the soundtrack from audio/sources/                 -> audio/soundtrack.wav
```

```sh
blender -b --factory-startup --python build_cine.py
blender -b --factory-startup -P scene.py -- --out out --final
blender -b out/scene.blend -a
python3 finish.py out --final
sh make_videos.sh out
python3 storyboard.py out
```

`--lo` instead of `--final` builds a 192 x 108 quick look (24 samples); with
neither it is 768 x 432. A final render is 590 frames at about 17 s each on
a 4-core CPU with no GPU, so a little under 3 hours.

It needs Blender 4.5 LTS, Python 3 with Pillow and numpy, ffmpeg, and a
checkout of [fps-game-demo](https://github.com/RubenTipparach/fps-game-demo)
beside this repository (set `FPS_GAME_DEMO` if it is elsewhere): the bodies
come from its NPC pipeline, the animation from its copy of the Universal
Animation Library, and the textures from its Material Maker set. Its
`tools/deps/fetch_character_tools.py` fetches the MPFB packs the body build
needs. `paths.py` finds both repositories.

## What each piece does

- **build_cine.py** builds the bodies exactly as the game builds an NPC
  (`tools/blender/build_npcs.py`), from the two rows in `cine_bodies.json`,
  and hands MPFB the face targets in `cine_faces.json` as each human is
  created. The faces are pushed past average so each reads at a glance, the
  way StarCraft's cinematic cast does: the prisoner square-headed, slab-jawed
  and bull-necked; the suit long, gaunt and hook-nosed.
- **scene.py** builds the whole scene in one run. The bodies lose half their
  triangles (5,450 and 6,435), and the skin gets its roughness, a stronger
  normal map, a pore bump and subsurface. The shooter's skin is taken down to
  a tenth so his face stays a shape under the brim, and his suit is shaded
  as wool (`tailored_wool`): rough, little specular, a soft sheen at grazing
  angles, and creases, the yarn's slub, its fuzz and a twill's ribs as
  normal detail chained after the garment's own normal map. The prisoner's
  stripes are painted on his suit in the shader.
- **clips.py** puts the [Universal Animation Library](https://quaternius.com/packs/universalanimationlibrary.html)
  clips on the MPFB rig: both skeletons are brought to the same arms-down
  rest and each bone takes its source bone's world rotation away from it. The
  prisoner lifts plates and feeds the press (`PickUp_Table`, `Interact`); the
  suit walks in (`Walk_Formal_Loop`, at 1.24x to fit the cut), aims and fires
  two-handed (`Pistol_Idle_Loop`, `Pistol_Shoot`) and walks out. His arms are
  raised about the shoulders until the gun sits at the prisoner's eye line,
  and the gun is gripped so its barrel runs at his head on the frame it fires.
- **gait.py** turns the suit round to leave. The library has no turn clip,
  so the walk is re-planted for the turn only. He turns to his right the
  way people do: his head comes round first, then his chest (`LEAD_HEAD`,
  `LEAD_CHEST`, twisted up the spine and carried out along the arms), then
  his hips, and his feet follow in two steps. He is still in the shooting
  stance, feet 0.64 m apart, so the left foot comes back in beside the right
  as he comes round (`TURN_STEP`, 0.20 m apart), and the right steps off
  toward the door a full stride, to where the walk clip has it with the left
  foot there; his hips ride over his feet as he turns (`HIPS_BACK`,
  `HIPS_LEFT`). The ball of each planted foot stays put while
  the heel peels up, and the foot pivots on it as the hips turn, all the
  way once it points `HIP_TURN` from them, so no thigh twists in its
  socket; a foot in the air rises, then travels eased round the outside of
  the other; two-bone IK bends each knee toward its toes, taking the foot's
  heading from its level side-to-side axis (at toe off the toes point back
  past the vertical). His feet are planted from the shot's white-out
  (`PLANT_FROM`), which hides the switch from the clip. The walk clip's
  clock is bent so its own right foot comes down on that second step, with
  the hips where the clip has them over it, and from there (`TURN_END`,
  over `HAND_OVER` frames, each leg bone's swing and twist blended on their
  own) the legs go back to the clip: he walks out exactly as he walked in: the same clip, sped up
  the same 1.24x the walk in is to fit S4, untouched, all forward
  kinematics. Only while the legs are re-planted does no knee fold past
  `KNEE_EASY` (the formal walk flicks its heel up behind with the thigh
  still hanging, which out of the turn read as a leg folding back), and the
  easing fades out with the re-planting. The build prints each step (`STEP`) and any frame
  a leg cannot reach its foot (`GAIT`); `audio/mix.py` cues the footsteps
  on the `STEP` frames.
- **check_legs.py** measures every rendered frame of a body's legs, the
  in-betweens of the 15 fps keys included: each hip's turn, each knee's and
  foot's twist, which way each knee folds, whether the legs scissor (a knee
  or ankle on the other's side, a thigh swung in across the body), and any
  of them jumping, and flags what leaves a natural range
  (`blender -b out/scene.blend -P check_legs.py -- suit 398 590`; it exits
  non-zero on a flag). From the shot's white-out to the end it flags none
  of the suit's 193 frames.
- **ragdoll.py** turns the prisoner into a Bullet ragdoll on the shot: eleven
  boxes with jointed limits, kicked for one substep, simulated among the set's
  colliders and baked back onto his bones.
- **surfaces.py** box-projects fps-game-demo's textures onto the blockout,
  tinted to keep each material's colour.
- **finish.py** cuts in the logo. The plate is the 3D logo's own frame in
  sheet metal, the primary lockup's parts (`branding/render3d/shapes.json`)
  inside it, and the last shot frames it exactly as the end card frames the
  logo (84 % of the width, centred; `scene.LOGO_FILL`), so the dissolve is a
  cross-fade in place. The logo holds still (a slow push rounds a small
  logo's width and height apart, and it stretches), then fades to black over
  `FADE_OUT`. `--final` then adds the 90s finish and reduces the whole film
  to one palette, so colours never flicker between frames.

The cut is authored in 15 fps story frames and every motion is baked at 15;
Blender's time stretching renders it at 24 (`scene.retime`). Camera cuts stay
in story frames, because Blender switches cameras on the stretched time.

## Credits

- Animation: the Universal Animation Library by Quaternius, CC0.
- Bodies: [MPFB2](https://github.com/makehumancommunity/mpfb2) (code GPLv3,
  not shipped) with the MakeHuman system assets, CC0.
- Textures: fps-game-demo's Material Maker set.
- Sound: see `audio/CREDITS.md`.
- The logo: `branding/render3d/`, this repository.
