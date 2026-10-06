# Turning a character and walking off: the gait recipe

The library has no turn clip. The plate shop's suit turns round to leave on
the walk clip with his legs re-planted by `gait.py`, then hands back to the
clip and walks out. This took six rounds of notes to get right; this is the
version that was approved, and why each part is the way it is.

## What the owner asked for, in order

1. A spin on the spot skated the feet. A walked arc at full stride: "the guy
   should take smaller steps as he turns".
2. Short steps round an arc: "smaller steps is the wrong approach. Usually
   the upper body will rotate first then legs follow and turning only takes a
   couple steps". Also: "his knees are bent the wrong way".
3. Two steps, the right pivoting, the left swinging 1.28 m round it: "second
   left leg too far apart when he turns, looks unnatural".
4. Walking away still re-planted: "walking away needs to use fk 100%".
5. Still: "there's still leg twisting", then "his leg is breaking".
6. "why dont you just reuse the inital walk cycle after hes done turning?"

## The recipe

**Order of the body.** The head comes round first, then the chest, then the
hips (`turn_lead`: the hips' yaw curve read ahead by `LEAD_HEAD` and
`LEAD_CHEST` story frames, 4 and 2). Twist it up the spine (spine_01 0.25,
spine_02 0.6, spine_03 1.0 of the chest's lead, the neck and head on top) and
carry the chest's turn out along both arms, fingers included, or the
shoulders come off. Keep the lead modest: the chest at most about 26 deg
ahead of the hips and the head about 50; double that read as over-rotated.
Start the head before the feet move, even while the arms are still lowering
a gun.

**Two steps, from where the feet actually are.** Look at the stance he
leaves from (the shooting stance had the feet 0.64 m apart, left forward)
and pick the turn direction that does not cross the legs: with the left foot
forward, turn right. Step 1 closes the stance: the far foot comes back in
beside the other (0.2 m apart), turned most of the way. Step 2 steps off
toward the exit a full stride: not authored, but derived as where the walk
clip has that foot when the other is at step 1, so the hand-over to the clip
starts with both feet exactly where the clip puts them. A short authored
second step (0.38 m against the clip's 0.71) left the other foot 0.3 m off
and the blend dragged it.

**Hips over the feet.** Key the hips' path through the middle of the two
planted feet at the closing step, a little behind (`HIPS_BACK` 0.10 m) and
to the side the turn leaves room on (`HIPS_LEFT` 0.065 m), and leave the
last key at the walk's speed along the exit. Hips left behind the feet put a
foot on the wrong side of the body and the thigh swings in across it.

**Timing from the clip.** `gait.contacts(body, lib, clip)` measures when
each ball comes down and lifts in the clip. Start the clip's clock where the
foot that must step first is about to lift (`TURN_PHASE`), and bend the
clock (a Hermite in clip time, slow off the mark) so the clip's own foot
comes down on `TURN_END` at the pace the walk will continue at. Read each
foot's contact off that clock, not off a floor height: the walk carries the
left foot 2.5 cm higher than idle and a fixed floor never saw it land.

**Planted feet.** The ball of a planted foot holds still; the heel peels up
round it; the foot pivots on it with the hips (`PIVOT` 0.7 of the hips'
turn) and all the way once it points more than `HIP_TURN` (35 deg) from the
hips, a hip's comfortable reach. Past that the thigh twists in its socket
(41 to 49 deg measured before the limit). A foot in the air rises before it
travels, then travels eased from lift-off to landing, bowed round the
outside of the other foot (`CLEAR`), turning to its landing heading. Lift
and tip each step by its own length against the clip's stride, not by a
stride share: a long swing lifted like a short one drags.

**Legs reach their feet with two-bone IK, built from planes.** Bend each
knee toward its own toes, taking the foot's heading from its side-to-side
axis, which stays level however far the foot tips. The ankle-to-toe vector
does not: at toe off the toes point back past the vertical and the knee is
sent backward (17 cm behind the hip-ankle line was measured). Build the thigh
and shin rotations from their direction and that knee side (`aim`), not by
minimal rotations from the clip's knee, which can sit on the wrong side of a
moved foot. Let the pelvis rise until the stance legs are as straight as the
clip's.

**Hand back to the clip.** Over `HAND_OVER` (7) frames after `TURN_END`,
while a foot is in the air, blend each leg bone back to the clip as its
direction and its twist about that direction separately (`twist_blend`).
Blending whole rotations mixes swing with twist and overshot both ends: the
left hip swung from -41 to +81 deg in two frames. Then the legs are the
clip's own, untouched. Ease the clip's knee (`KNEE_EASY`: past 50 deg, bend
0.4 as far) only while the legs are re-planted, fading with them: the formal
walk flicks its heel up behind with the thigh still hanging (88 deg), which
out of a turn, from the side, reads as a leg folding back.

**Walk out on the walk in's cycle.** Same clip, same pace (1.24x here),
same ground speed, from the hand-over on. It looked choppy at the clip's own
speed with easing on top; reusing the walk the owner had already seen and
liked fixed it.

**Plant from a moment the switch cannot be seen.** The IK rebuilds a leg its
own way, which differs from the clip's (the idle had a 43 deg shin twist
under a forward knee). Start the planting under a cut or a white-out
(`PLANT_FROM`, the shot's flash), not mid-shot.

## Checking a turn

- `scene.py` prints `STEP` (each step's frame, how far the ball moved, how
  far the foot turned) and `GAIT` (frames a leg falls short of its foot;
  a couple of centimetres at a toe off is fine).
- `check_legs.py` on every output frame from the planting to the end: hip
  turn -40 to +45, knee twist within 20, foot twist within 30, no knee folding
  back, no knee or ankle on the other's side, no thigh swung in past 12, no
  jump over 10 deg a frame. The approved turn: 0 of 193 flagged.
- `scripts/foot_plot.py` from `scripts/motion_report.py --json`: footprints
  from above; a planted foot is one bright mark, a turn reads as feet
  stepping round the hips.
- `scripts/follow_sheet.py` from the shot camera's side, every output frame,
  enlarged: the twist check passed while the leg still read as broken
  (folding, not twisting). Look as well as measure.
