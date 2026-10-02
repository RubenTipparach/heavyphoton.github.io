# Plate shop: the Heavy Photon cinematic

A 27.5 second cutscene in the style of a late-90s game cinematic. A prisoner
stamps license plates alone on the night shift. A figure in a suit walks in,
puts a photon gun to the back of his head and fires. He falls onto the feed
table; the camera rises over the last plate he stamped, the Heavy Photon
lockup, and the plate dissolves into the 3D logo, which holds for 3 seconds.

The finished film is 640 x 480, letterboxed, 256 colours, 24 fps, with a
vignette, film grain and motion blur, and a soundtrack from OpenGameArt.
It is [`film/plate_shop.mp4`](film/plate_shop.mp4), with its storyboard in
[`film/storyboard.png`](film/storyboard.png).

## How it is built

```
cine_bodies.json + cine_faces.json
  -> build_cine.py     the two bodies, by fps-game-demo's NPC pipeline -> bodies/*.glb
scene.py               Blender: set, textures, bodies, clips, ragdoll, cameras -> OUT/scene.blend
  -> blender -a        Cycles                                             -> OUT/frames/
finish.py --final      the logo dissolve and hold, vignette, grain,
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
  a tenth so his face stays a shape under the brim. The prisoner's stripes
  are painted on his suit in the shader.
- **clips.py** puts the [Universal Animation Library](https://quaternius.com/packs/universalanimationlibrary.html)
  clips on the MPFB rig: both skeletons are brought to the same arms-down
  rest and each bone takes its source bone's world rotation away from it. The
  prisoner lifts plates and feeds the press (`PickUp_Table`, `Interact`); the
  suit walks in (`Walk_Formal_Loop`, at 1.24x to fit the cut), aims and fires
  two-handed (`Pistol_Idle_Loop`, `Pistol_Shoot`) and walks out. His arms are
  raised about the shoulders until the gun sits at the prisoner's eye line,
  and the gun is gripped so its barrel runs at his head on the frame it fires.
- **ragdoll.py** turns the prisoner into a Bullet ragdoll on the shot: eleven
  boxes with jointed limits, kicked for one substep, simulated among the set's
  colliders and baked back onto his bones.
- **surfaces.py** box-projects fps-game-demo's textures onto the blockout,
  tinted to keep each material's colour.
- **finish.py** cuts in the logo. The plate is the 3D logo's own frame in
  sheet metal, the primary lockup's parts (`branding/render3d/shapes.json`)
  inside it, and the last shot frames it exactly as the end card frames the
  logo (84 % of the width, centred; `scene.LOGO_FILL`), so the dissolve is a
  cross-fade in place. `--final` then adds the 90s finish and reduces the
  whole film to one palette, so colours never flicker between frames.

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
