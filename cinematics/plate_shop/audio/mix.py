#!/usr/bin/env python3
"""Rebuild soundtrack.wav for the prison plate shop cinematic (28.6 s).

Every sound comes from sources/ (OpenGameArt.org downloads, see credits.json).
Change the cue times below and run:

    python3 mix.py

Needs numpy, scipy and soundfile (pip install numpy scipy soundfile), and
py7zr only if a .7z archive in sources/ has not been extracted yet.

Levels are set relative to the peak of the ray gun shot (the loudest moment).
The whole mix is then scaled so its true peak sits at MASTER_PEAK_DBFS, and
the script prints where the loudest moment landed and each stem's peak.
Set STEMS_DIR=some/folder to also write every stem as its own wav.
"""
from pathlib import Path
import os
import sys
import zipfile

import numpy as np
import soundfile as sf
from scipy.signal import butter, sosfilt, fftconvolve, resample_poly
from math import gcd

# ---------------------------------------------------------------------------
# CUE TIMES (seconds from 0.0)
# ---------------------------------------------------------------------------
TOTAL_LEN = 28.6           # the picture: 3 s of logo, then 1 s fade to black, 686 frames, 28.58 s
FADE_OUT = 1.0             # the master fades to silence with the picture's fade to black

BED_START = 0.0            # room tone, press flywheel hum, conveyor
BED_FADE_START = 23.7
BED_END = 24.5

PRESS_STAMPS = [2.60, 5.40, 8.20, 11.00, 13.80]   # ram hits the plate
PRESS_CLOSEUP = 5.40       # this stamp is louder
PRESS_CLOSEUP_BOOST_DB = 4.0

DOOR_START = 6.67          # latch
DOOR_END = 7.50

STEPS_IN_FIRST = 7.07      # footsteps in (toward camera)
STEPS_IN_INTERVAL = 0.538
STEPS_IN_LAST_MAX = 13.33
STEPS_IN_DB = (-20.0, -6.0)    # first, last step, relative to shot peak

CHARGE_START = 14.13       # ray gun charge whine
CHARGE_END = 16.53         # ends exactly on the shot
SHOT = 16.53               # plasma zap + low boom

BODY_FALL_START = 16.70    # body onto metal table
BODY_FALL_END = 17.10

TINNITUS_START = 16.60     # faint high ringing after the shot
TINNITUS_END = 19.00
TINNITUS_PITCH = 4.0       # x the source beep's pitch

# footsteps out: his feet as scene.py plants them (its STEP lines: the frame each
# ball comes down, / 15, less 0.03 s for the heel)
STEPS_OUT_TURN = [19.04, 19.50, 19.90, 20.37, 20.84]   # the short steps he turns round on
STEPS_OUT_WALK = [21.37, 22.04, 22.70, 23.37, 24.04]   # then walking away
STEPS_OUT_TURN_DB = -11.0      # short steps land softer
STEPS_OUT_DB = (-9.0, -26.0)   # first, last walking step, relative to shot peak

WHOOSH_START = 23.73       # reverse swell into the logo
LOGO_HIT = 24.50           # deep impact + dark synth sting, tail to the end

# ---------------------------------------------------------------------------
# LEVELS (dB relative to the shot's peak, which ends up at MASTER_PEAK_DBFS)
# One-shots are peak-relative, beds are RMS-relative.
# ---------------------------------------------------------------------------
MASTER_PEAK_DBFS = -1.0

ROOM_HUM_RMS = -39.0
ROOM_AIR_RMS = -44.0
FLYWHEEL_RMS = -38.0
CONVEYOR_RMS = -45.0
DRONE_RMS = -47.0
DRONE_LOGO_SWELL_DB = 6.0

PRESS_DB = -9.0
DOOR_DB = -11.0
CHARGE_DB = (-34.0, -7.0)  # level at CHARGE_START, at CHARGE_END
BODY_THUD_DB = -6.0
TABLE_METAL_DB = -10.0
CLATTER_DB = -15.0
TINNITUS_DB = -38.0
WHOOSH_DB = -10.0
LOGO_IMPACT_DB = -7.0
LOGO_SYNTH_DB = -13.0

ROOM_REVERB_SEND_DB = -15.0
HALL_REVERB_SEND_DB = -8.0

SR = 48000
SEED = 1997
STEMS_DIR = os.environ.get("STEMS_DIR")   # set to also write each stem as a wav

AUDIO = Path(__file__).resolve().parent
S = AUDIO / "sources"
OUT = AUDIO / "soundtrack.wav"

JC_MECH = S / "jc-sounds-mechanical-pack-vol-1/mechanical_pack_vol_1_x/Mechanical Pack Vol 1"
JC_SCIFI = S / "jc-sounds-sci-fi-pack-vol-1/scifi_pack_vol_1_x/SciFi Pack Vol 1"
GQ = S / ("free-cinematic-sound-effects/gregor_quendel_-_free_cinematic_sound_effects_-_mp3_x/"
          "Gregor Quendel - Designed Series - Free Downloads")
FANTOZZI = S / "fantozzis-footsteps-grasssand-stone/Fantozzi-footsteps_x/Fantozzi-footsteps/flac"
CONGUS = S / "footsteps-on-different-surfaces/footsteps_0_x/footsteps/boots"
RUBBERDUCK_MW = S / "100-cc0-metal-and-wood-sfx/100-CC0-wood-metal-SFX_x"
RUBBERDUCK_BF = S / "75-cc0-breaking-falling-hit-sfx/sfx_breaking_and_falling_x"

SRC = {
    # beds
    "room_hum": S / "the-shop/legit_audio_-_the_shop_free_sfx_wav_x/TheShopCollection_convenience_store_drinks_fridge_drone.wav",
    "room_air": S / "droning-sound-effects/drone63.wav",
    "flywheel": JC_MECH / "Loops/Loop_Mechanical Pack Vol 1_Large Wooden Device Turning.wav",
    "conveyor": JC_MECH / "Loops/Loop_Mechanical Pack Vol 1_Conveyor Belt Machine Running.wav",
    "drone": GQ / "Gregor Quendel - Designed Atmospheres - Free Sounds/Gregor Quendel - Designed Atmospheres - Harmonic - 018.mp3",
    # press
    "press": [JC_MECH / f"Singles/Single_Mechanical Pack Vol 1_Large Mechanical Press Hit and Pressure Release_0{i}.wav"
              for i in (1, 2, 3, 4, 5)],
    "press_clang": S / "impact/qubodupImpact_x/qubodupImpact/qubodupImpactMetal.flac",
    # door
    "door_latch": RUBBERDUCK_MW / "lock_open_01.ogg",
    "door_creak": S / "iron-door/iron_door_0.ogg",
    "door_weight": S / "door-open-door-close-set/qubodup-DoorSet_x/qubodup-DoorSet/flac/qubodup-DoorOpen07.flac",
    # footsteps
    "step_heel": [FANTOZZI / f"Fantozzi-Stone{s}{i}.flac" for s in "LR" for i in (1, 2, 3)],
    "step_body": [CONGUS / f"{i}.ogg" for i in range(9)],
    # ray gun
    "charge_main": JC_SCIFI / "Single_SciFi Pack Vol 1_Energy Build Up_Med_var 1.wav",
    "charge_whine": JC_SCIFI / "Single_SciFi Pack Vol 1_Energy BuildUp_Short_var 2_04.wav",
    "charge_cannon": S / "doomsday-laser-cannon-sound-effect/doomsday_laser_cannon_short.wav",
    "shot_zap": JC_SCIFI / "Single_SciFi Pack Vol 1_Energy Shot_v2_02.wav",
    "shot_charged": JC_SCIFI / "Single_SciFi Pack Vol 1_Energy Shot Charged_v1_01.wav",
    "shot_boom": JC_SCIFI / "Single_SciFi Pack Vol 1_Heavy Plasma Shot_01.wav",
    # body fall
    "body_thud": S / "body-hitting-ground/body_hits.wav",
    "table_metal": S / "metal-impact-sounds/thud3.wav",
    "clatter": RUBBERDUCK_BF / "bfh1_metal_falling_02.ogg",
    "clink": S / "metal-impact-sounds/clink3.wav",
    # after the shot
    "tinnitus": S / "beep-sound/beep.ogg",
    # logo
    "whoosh": GQ / "Gregor Quendel - Designed Fire - Free Sounds/Gregor Quendel - Designed Fire - Short - Swoosh Burst Sizzling 01.mp3",
    "logo_sub": GQ / "Gregor Quendel - Designed Sci-Fi - Free Sounds/02_Effects/Gregor Quendel - Designed Sci-Fi - Noids_Korvax_01.mp3",
    "logo_mid": GQ / "Gregor Quendel - Designed Mecha - Free Sounds/Gregor Quendel - Designed Mecha - Elements - Impact 01.mp3",
    "logo_synth": GQ / "Gregor Quendel - Designed Atmospheres - Free Sounds/Gregor Quendel - Designed Atmospheres - Harmonic - 008 - IV.mp3",
}

# archives that the paths above are extracted from (extracted on demand)
ARCHIVES = [
    S / "jc-sounds-mechanical-pack-vol-1/mechanical_pack_vol_1.7z",
    S / "jc-sounds-sci-fi-pack-vol-1/scifi_pack_vol_1.7z",
    S / "free-cinematic-sound-effects/gregor_quendel_-_free_cinematic_sound_effects_-_mp3.zip",
    S / "fantozzis-footsteps-grasssand-stone/Fantozzi-footsteps.7z",
    S / "footsteps-on-different-surfaces/footsteps_0.zip",
    S / "100-cc0-metal-and-wood-sfx/100-CC0-wood-metal-SFX.zip",
    S / "75-cc0-breaking-falling-hit-sfx/sfx_breaking_and_falling.zip",
    S / "the-shop/legit_audio_-_the_shop_free_sfx_wav.zip",
    S / "impact/qubodupImpact.7z",
    S / "door-open-door-close-set/qubodup-DoorSet.7z",
]


# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------
def ensure_extracted():
    for a in ARCHIVES:
        dest = a.with_name(a.name.rsplit(".", 1)[0] + "_x")
        if dest.exists() or not a.exists():
            continue
        print("extracting", a.name)
        if a.suffix == ".zip":
            zipfile.ZipFile(a).extractall(dest)
        else:
            import py7zr
            py7zr.SevenZipFile(a).extractall(dest)


_cache = {}


def load(path):
    """Read any source as float64 stereo at SR."""
    path = Path(path)
    if path in _cache:
        return _cache[path].copy()
    try:
        x, sr = sf.read(str(path), always_2d=True, dtype="float64")
    except Exception:          # older libsndfile without MP3: decode with ffmpeg
        import subprocess
        raw = subprocess.run(["ffmpeg", "-v", "quiet", "-i", str(path), "-f", "f32le",
                              "-ac", "2", "-ar", str(SR), "-"], capture_output=True, check=True).stdout
        x, sr = np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64), SR
    if x.shape[1] == 1:
        x = np.repeat(x, 2, axis=1)
    x = x[:, :2]
    if sr != SR:
        g = gcd(sr, SR)
        x = resample_poly(x, SR // g, sr // g, axis=0)
    _cache[path] = x
    return x.copy()


def db(v):
    return 10.0 ** (v / 20.0)


def sec(t):
    return int(round(t * SR))


def mono(x):
    return x if x.ndim == 1 else x.mean(axis=1)


def pan(m, p):
    """Pan a mono signal, p in [-1 (left), 1 (right)]. Centre is unity in both
    channels and the near channel never goes above unity."""
    gl = np.cos(max(0.0, p) * np.pi / 2)
    gr = np.cos(max(0.0, -p) * np.pi / 2)
    return np.stack([m * gl, m * gr], axis=1)


def peak(x):
    return np.max(np.abs(x)) + 1e-12


def rms(x):
    return np.sqrt(np.mean(x ** 2)) + 1e-12


def norm_peak(x):
    return x / peak(x)


def norm_rms(x):
    return x / rms(x)


def fade(x, fin=0.0, fout=0.0):
    x = x.copy()
    n = len(x)
    if fin > 0:
        k = min(n, sec(fin))
        x[:k] *= np.sin(np.linspace(0, np.pi / 2, k))[:, None] ** 2
    if fout > 0:
        k = min(n, sec(fout))
        x[n - k:] *= np.cos(np.linspace(0, np.pi / 2, k))[:, None] ** 2
    return x


def cut(x, t0, t1=None):
    return x[sec(t0):(sec(t1) if t1 is not None else None)]


def filt(x, kind, hz, order=2):
    sos = butter(order, hz, kind, fs=SR, output="sos")
    return sosfilt(sos, x, axis=0)


def varispeed(x, r0, r1, n_out, start=0.0):
    """Tape-style resample with a playback rate gliding from r0 to r1 (pitch follows)."""
    r = np.linspace(r0, r1, n_out)
    pos = start * SR + np.concatenate([[0.0], np.cumsum(r[:-1])])
    idx = np.arange(len(x))
    return np.stack([np.interp(pos, idx, x[:, c], right=0.0) for c in range(x.shape[1])], axis=1)


def loop_to(x, n, xfade=0.5):
    """Loop x to n samples, crossfading each seam (equal power)."""
    k = sec(xfade)
    out = x[: min(n, len(x))].copy()
    while len(out) < n:
        a = out[-k:]
        b = x[:k]
        w = np.linspace(0, np.pi / 2, k)[:, None]
        seam = a * np.cos(w) + b * np.sin(w)
        out = np.concatenate([out[:-k], seam, x[k:]])
    return out[:n]


def onset(x, thresh_db=-12.0, after=0.0, frame=0.002):
    """Time (s) of the first 2 ms frame within thresh_db of the loudest frame."""
    m = np.abs(mono(x))
    f = sec(frame)
    n = len(m) // f
    e = np.sqrt(np.mean(m[: n * f].reshape(n, f) ** 2, axis=1))
    a = int(after / frame)
    hit = np.nonzero(e[a:] >= e[a:].max() * db(thresh_db))[0]
    return (a + hit[0]) * frame


def place(bus, x, t, gain=1.0):
    """Add x into bus starting at time t (s); clipped to the bus length.
    The last 15 ms are faded so a sample that stops abruptly cannot click."""
    k = min(len(x), sec(0.015))
    x = x.copy()
    x[len(x) - k:] *= np.linspace(1, 0, k)[:, None] if x.ndim == 2 else np.linspace(1, 0, k)
    i = sec(t)
    if i < 0:
        x = x[-i:]
        i = 0
    n = min(len(x), len(bus) - i)
    if n > 0:
        bus[i:i + n] += x[:n] * gain


def make_ir(rt60, length, predelay, lp_hz, hp_hz, seed):
    rng = np.random.default_rng(seed)
    n = sec(length)
    t = np.arange(n) / SR
    ir = rng.standard_normal((n, 2)) * (10 ** (-3 * t / rt60))[:, None]
    ir = filt(ir, "low", lp_hz)
    ir = filt(ir, "high", hp_hz)
    ir = np.vstack([np.zeros((sec(predelay), 2)), ir])
    return ir / np.sqrt(np.sum(ir ** 2, axis=0))


def reverb(x, ir):
    return np.stack([fftconvolve(x[:, c], ir[:, c])[: len(x)] for c in range(2)], axis=1)


def step_times(first, interval, last_max):
    out = []
    t = first
    while t <= last_max + 1e-9:
        out.append(round(t, 4))
        t += interval
    return out


# ---------------------------------------------------------------------------
# build
# ---------------------------------------------------------------------------
def main():
    ensure_extracted()
    missing = [p for v in SRC.values() for p in (v if isinstance(v, list) else [v]) if not Path(p).exists()]
    if missing:
        sys.exit("missing sources:\n  " + "\n  ".join(map(str, missing)))

    rng = np.random.default_rng(SEED)
    N = sec(TOTAL_LEN)

    def bus():
        return np.zeros((N, 2))

    # --- 1. the shot first: everything else is levelled against its peak ---
    shot = bus()
    zap = mono(load(SRC["shot_zap"]))
    zap = pan(norm_peak(zap), 0.0)
    place(shot, zap, SHOT - onset(zap), 1.0)
    chg = norm_peak(mono(load(SRC["shot_charged"])))
    chg = pan(chg, 0.0)
    place(shot, chg, SHOT - onset(chg, -3.0), db(-3.0))
    boom = load(SRC["shot_boom"])
    boom = norm_peak(filt(boom, "high", 28))
    place(shot, boom, SHOT - onset(boom), db(-1.0))
    shot_peak = peak(shot)
    ref = shot_peak            # 0 dB "relative to the shot"

    def rel(v):
        return ref * db(v)

    stems = {}                 # direct sound, one bus per cue group

    def stem(name):
        if name not in stems:
            stems[name] = bus()
        return stems[name]

    room_send = bus()          # to the concrete room reverb
    hall_send = bus()          # to the long hall reverb (logo)
    stem('shot')[:] += shot
    room_send += shot * db(-6)

    # --- 2. beds: room tone, flywheel hum, conveyor (fade 23.7 -> 24.5) ---
    bed_len = sec(BED_END - BED_START)
    bed_env = np.ones(bed_len)
    fs_, fe = sec(BED_FADE_START - BED_START), bed_len
    bed_env[fs_:fe] = np.cos(np.linspace(0, np.pi / 2, fe - fs_)) ** 2
    bed_env[: sec(0.25)] *= np.linspace(0, 1, sec(0.25))   # no click at t=0

    hum = loop_to(load(SRC["room_hum"]), bed_len, xfade=1.0)
    hum = norm_rms(filt(filt(hum, "high", 35), "low", 5000, order=4))   # drop a faint 8 kHz whine
    air = load(SRC["room_air"])[sec(20.0):sec(20.0) + bed_len]
    air = norm_rms(filt(air, "low", 4000))
    fly = load(SRC["flywheel"])
    fly = varispeed(fly, 0.85, 0.85, int(len(fly) / 0.85))     # a heavier, slower mass
    fly = loop_to(fly, bed_len, xfade=0.6)
    fly = norm_rms(filt(filt(fly, "high", 40), "low", 2500))  # hum, not wooden ticks
    fly = fly @ np.array([[0.9, 0.35], [0.35, 0.9]])      # lean left, toward the press
    con = loop_to(load(SRC["conveyor"]), bed_len, xfade=0.6)
    con = norm_rms(filt(con, "high", 60))
    con = con @ np.array([[0.45, 0.2], [0.2, 0.95]])      # lean right
    beds = (hum * rel(ROOM_HUM_RMS) + air * rel(ROOM_AIR_RMS)
            + fly * rel(FLYWHEEL_RMS) + con * rel(CONVEYOR_RMS)) * bed_env[:, None]
    place(stem('beds'), beds, BED_START)
    place(room_send, (fly * rel(FLYWHEEL_RMS) + con * rel(CONVEYOR_RMS)) * bed_env[:, None], BED_START, db(-10))

    # --- 3. drone under everything, swelling slightly into the logo ---
    drone = load(SRC["drone"])[sec(6.0):sec(6.0) + N]
    drone = norm_rms(filt(drone, "high", 30))
    denv = np.ones(N)
    denv[: sec(3.0)] = np.linspace(0, 1, sec(3.0))
    a, b = sec(WHOOSH_START - 1.0), sec(LOGO_HIT)
    denv[a:b] = np.linspace(1, db(DRONE_LOGO_SWELL_DB), b - a)
    denv[b:] = db(DRONE_LOGO_SWELL_DB) * np.linspace(1, 0, N - b) ** 1.5
    stem('drone')[:] += drone * rel(DRONE_RMS) * denv[:, None]

    # --- 4. press stamps ---
    clang = norm_peak(mono(load(SRC["press_clang"])))
    for k, t in enumerate(PRESS_STAMPS):
        p = norm_peak(mono(load(SRC["press"][k % len(SRC["press"])])))
        hit = onset(p, -6.0, after=0.3)
        g = PRESS_DB + (PRESS_CLOSEUP_BOOST_DB if abs(t - PRESS_CLOSEUP) < 1e-6 else 0.0)
        stamp = np.zeros(len(p) + sec(1.0))
        stamp[: len(p)] += p
        c = varispeed(clang[:, None], 0.8, 0.8, sec(0.7))[:, 0]
        i = sec(hit - onset(c[:, None]))
        stamp[i:i + len(c)] += c * db(-8)
        x = pan(norm_peak(stamp), -0.25)
        place(stem('press'), x, t - hit, rel(g))
        place(room_send, x, t - hit, rel(g) * db(-4))

    # --- 5. steel door ---
    latch = load(SRC["door_latch"])
    latch = cut(latch, onset(latch, -6.0) - 0.01)          # just the latch clunk
    latch = fade(norm_peak(mono(latch))[:, None], 0.002, 0.15)[:, 0]
    creak = norm_peak(mono(load(SRC["door_creak"])))
    weight = mono(load(SRC["door_weight"]))
    weight = norm_peak(varispeed(weight[:, None], 0.8, 0.8, sec(1.2))[:, 0])
    door_len = DOOR_END - DOOR_START
    door = np.zeros(sec(door_len + 0.1))
    door[: len(latch)] += latch[: len(door)] * db(-3)
    j = sec(0.06)
    c = creak[: len(door) - j]
    door[j:j + len(c)] += c
    w = weight[: len(door) - j]
    door[j:j + len(w)] += w * db(-5)
    door = fade(door[:, None], 0.0, 0.3)[:, 0]
    door = pan(norm_peak(door), -0.6)
    place(stem('door'), door, DOOR_START, rel(DOOR_DB))
    place(room_send, door, DOOR_START, rel(DOOR_DB) * db(-4))

    # --- 6. footsteps (hard dress shoes on concrete) ---
    heels = [norm_peak(mono(load(p))) for p in SRC["step_heel"]]
    bodies = [norm_peak(mono(load(p))) for p in SRC["step_body"]]

    def footstep(i):
        h = heels[i % len(heels)]
        bd = bodies[(i * 4) % len(bodies)]
        r = 1.0 + rng.uniform(-0.035, 0.035)
        h = varispeed(h[:, None], r, r, int(len(h) / r))[:, 0]
        x = np.zeros(max(len(h), len(bd)) + 10)
        oh, ob = onset(h[:, None], -9.0), onset(bd[:, None], -9.0)
        x[: len(h)] += h
        k = max(0, sec(oh - ob))
        x[k:k + len(bd)] += bd[: len(x) - k] * db(-9)
        x = filt(x[:, None], "high", 70)[:, 0]
        return norm_peak(x), onset(x[:, None], -9.0)

    def order(n):
        # cycle the six heel takes, never the same take twice in a row
        seq, last = [], -1
        for _ in range(n):
            choices = [c for c in range(len(heels)) if c != last]
            last = int(rng.choice(choices))
            seq.append(last)
        return seq

    t_in = step_times(STEPS_IN_FIRST, STEPS_IN_INTERVAL, STEPS_IN_LAST_MAX)
    lv_in = np.linspace(STEPS_IN_DB[0], STEPS_IN_DB[1], len(t_in))
    pan_in = np.linspace(-0.55, 0.05, len(t_in))
    for t, lv, p, i in zip(t_in, lv_in, pan_in, order(len(t_in))):
        x, o = footstep(i)
        g = lv + rng.uniform(-0.6, 0.6)
        place(stem('steps_in'), pan(x, p), t - o, rel(g))
        place(room_send, pan(x, p), t - o, rel(g) * db(2 - 0.3 * (lv - STEPS_IN_DB[0])))

    t_out = STEPS_OUT_TURN + STEPS_OUT_WALK
    lv_out = np.concatenate([np.full(len(STEPS_OUT_TURN), STEPS_OUT_TURN_DB),
                             np.linspace(STEPS_OUT_DB[0], STEPS_OUT_DB[1], len(STEPS_OUT_WALK))])
    pan_out = np.concatenate([np.full(len(STEPS_OUT_TURN), 0.05),
                              np.linspace(0.05, -0.55, len(STEPS_OUT_WALK))])
    for t, lv, p, i in zip(t_out, lv_out, pan_out, order(len(t_out))):
        x, o = footstep(i)
        x = filt(x[:, None], "low", 9000 - 250 * max(0.0, STEPS_OUT_DB[0] - lv))[:, 0]   # duller as he recedes
        g = lv + rng.uniform(-0.6, 0.6)
        place(stem('steps_out'), pan(x, p), t - o, rel(g))
        place(room_send, pan(x, p), t - o, rel(g) * db(2 + 0.3 * max(0.0, STEPS_OUT_DB[0] - lv)))

    # --- 7. ray gun charge: rising whine ending exactly on the shot ---
    clen = sec(CHARGE_END - CHARGE_START)
    main_src = mono(load(SRC["charge_main"]))[:, None]
    avail = 1.92                       # usable build-up before the file's own release
    r_end = 1.06
    r_start = 2 * avail / (CHARGE_END - CHARGE_START) - r_end
    ch = varispeed(main_src, r_start, r_end, clen, start=0.03)[:, 0]
    ch = norm_peak(ch)
    wh_src = mono(load(SRC["charge_whine"]))[:, None]
    wlen = sec(1.15)
    wh = norm_peak(varispeed(wh_src, 0.85, 1.35, wlen, start=0.10)[:, 0])
    whine = np.zeros(clen)
    whine += ch
    whine[clen - wlen:] += wh * np.linspace(0.2, 1.0, wlen) * db(-4)
    env = db(np.linspace(CHARGE_DB[0], CHARGE_DB[1], clen) - CHARGE_DB[1])
    whine = whine * env
    whine = fade(whine[:, None], 0.08, 0.006)[:, 0]
    whine = pan(norm_peak(whine), 0.0)
    place(stem('charge'), whine, CHARGE_START, rel(CHARGE_DB[1]))
    place(room_send, whine, CHARGE_START, rel(CHARGE_DB[1]) * db(-8))
    can = load(SRC["charge_cannon"])
    can_hit = onset(can, -3.0, after=1.5)
    can = fade(norm_peak(can), 0.0, 0.6)
    can_env = np.ones(len(can))
    can_env[: sec(can_hit)] = db(np.linspace(-14, -4, sec(can_hit)))
    place(stem('charge'), can * can_env[:, None], SHOT - can_hit, rel(-8.0))

    # --- 8. body falls onto the metal table ---
    bh = load(SRC["body_thud"])
    t0 = 1.9                                          # second take in the file
    bh = cut(bh, t0, t0 + 1.4)
    bh = norm_peak(mono(bh))
    o = onset(bh[:, None], -6.0)
    place(stem('body'), pan(bh, 0.12), BODY_FALL_START + 0.02 - o, rel(BODY_THUD_DB))
    place(room_send, pan(bh, 0.12), BODY_FALL_START + 0.02 - o, rel(BODY_THUD_DB) * db(-4))
    tm = norm_peak(mono(load(SRC["table_metal"])))
    tm = varispeed(tm[:, None], 0.75, 0.75, int(len(tm) / 0.75))[:, 0]
    o = onset(tm[:, None], -6.0)
    place(stem('body'), pan(norm_peak(tm), 0.15), BODY_FALL_START + 0.03 - o, rel(TABLE_METAL_DB))
    place(room_send, pan(norm_peak(tm), 0.15), BODY_FALL_START + 0.03 - o, rel(TABLE_METAL_DB))
    cl = norm_peak(mono(load(SRC["clatter"])))
    o = onset(cl[:, None], -6.0)
    place(stem('body'), pan(cl, 0.3), BODY_FALL_START + 0.09 - o, rel(CLATTER_DB))
    place(room_send, pan(cl, 0.3), BODY_FALL_START + 0.09 - o, rel(CLATTER_DB))
    ck = norm_peak(mono(load(SRC["clink"])))
    o = onset(ck[:, None], -6.0)
    tclink = min(BODY_FALL_END - 0.12, BODY_FALL_START + 0.27)
    place(stem('body'), pan(ck, 0.35), tclink - o, rel(CLATTER_DB - 4))
    place(room_send, pan(ck, 0.35), tclink - o, rel(CLATTER_DB - 4))

    # --- 9. tinnitus: the CC0 beep, looped with continuous phase and pitched up ---
    beep = mono(load(SRC["tinnitus"]))
    seg = beep[sec(0.05):sec(0.45)]
    zc = np.nonzero((seg[:-1] < 0) & (seg[1:] >= 0))[0]
    zc = zc + seg[zc] / (seg[zc] - seg[zc + 1])          # sub-sample zero crossings
    period = (zc[-1] - zc[0]) / (len(zc) - 1)
    loop_len = period * (len(zc) - 1)
    tlen = sec(TINNITUS_END - TINNITUS_START)
    pos = zc[0] + np.mod(np.arange(tlen) * TINNITUS_PITCH, loop_len)
    tone = np.interp(pos, np.arange(len(seg)), seg)
    tenv = np.ones(tlen)
    tenv[: sec(0.25)] = np.linspace(0, 1, sec(0.25)) ** 0.5
    tenv[sec(0.25):] = np.linspace(1, 0, tlen - sec(0.25)) ** 1.6
    tone = norm_peak(tone) * tenv
    place(stem('tinnitus'), pan(tone, 0.0), TINNITUS_START, rel(TINNITUS_DB))
    print(f"tinnitus tone {TINNITUS_PITCH * SR / period:.0f} Hz")

    # --- 10. reverse swell into the logo, then the hit and the sting ---
    sw = load(SRC["whoosh"])
    sw_peak = onset(sw, -1.0)
    wl = LOGO_HIT - WHOOSH_START
    sw = cut(sw, max(0.0, sw_peak - wl), sw_peak + 0.02)
    sw = fade(norm_peak(sw), 0.12, 0.02)
    synth = load(SRC["logo_synth"])[sec(4.0):sec(4.0) + sec(TOTAL_LEN - LOGO_HIT + 0.5)]
    synth = norm_peak(filt(synth, "high", 60))
    rev = synth[: sec(wl)][::-1] * np.linspace(0, 1, sec(wl))[:, None] ** 2.5   # reversed sting
    swell = np.zeros((sec(wl) + sec(0.02), 2))
    swell[: len(sw)] += sw
    swell[: len(rev)] += norm_peak(rev) * db(-3)
    swell = norm_peak(swell)
    place(stem('logo'), swell, WHOOSH_START, rel(WHOOSH_DB))
    place(hall_send, swell, WHOOSH_START, rel(WHOOSH_DB) * db(-6))

    tail = TOTAL_LEN - LOGO_HIT
    sub = load(SRC["logo_sub"])
    sub = norm_peak(filt(sub, "high", 25))
    mid = norm_peak(load(SRC["logo_mid"]))
    imp = np.zeros((sec(tail), 2))
    o1, o2 = sec(onset(sub, -12.0)), sec(onset(mid, -12.0))
    s1 = sub[o1:o1 + len(imp)]
    s2 = mid[o2:o2 + len(imp)]
    imp[: len(s1)] += s1
    imp[: len(s2)] += s2 * db(-2)
    imp = norm_peak(fade(imp, 0.0, 0.4))
    st = synth[: sec(tail)]
    senv = np.exp(-np.arange(len(st)) / SR / 1.1)
    senv[: sec(0.006)] *= np.linspace(0, 1, sec(0.006))
    st = norm_peak(st * senv[:, None])
    st = fade(st, 0.0, 0.35)
    place(stem('logo'), imp, LOGO_HIT, rel(LOGO_IMPACT_DB))
    place(stem('logo'), st, LOGO_HIT, rel(LOGO_SYNTH_DB))
    place(hall_send, imp, LOGO_HIT, rel(LOGO_IMPACT_DB) * db(-4))
    place(hall_send, st, LOGO_HIT, rel(LOGO_SYNTH_DB))

    # --- 11. reverbs and master ---
    room_ir = make_ir(rt60=1.15, length=1.6, predelay=0.018, lp_hz=5500, hp_hz=120, seed=SEED)
    hall_ir = make_ir(rt60=3.2, length=3.6, predelay=0.03, lp_hz=4500, hp_hz=60, seed=SEED + 1)
    stems["room_reverb"] = reverb(room_send, room_ir) * db(ROOM_REVERB_SEND_DB)
    stems["hall_reverb"] = reverb(hall_send, hall_ir) * db(HALL_REVERB_SEND_DB)
    mix = sum(stems.values())
    mix = filt(mix, "high", 22)
    mix = fade(mix, 0.0, FADE_OUT)    # down to silence with the picture's fade to black

    # master: the loudest point, measured as true peak (4x oversampled), lands on
    # MASTER_PEAK_DBFS, less 2 LSB of room for the dither
    pk = peak(mix)
    at = np.argmax(np.max(np.abs(mix), axis=1)) / SR
    true_pk = np.max(np.abs(resample_poly(mix, 4, 1, axis=0)))
    g = (db(MASTER_PEAK_DBFS) - 2.0 / 32768) / max(pk, true_pk)
    mix *= g
    print(f"pre-master peak {20*np.log10(pk):.2f} dBFS (true peak {20*np.log10(true_pk):.2f}) "
          f"at {at:.3f} s (shot at {SHOT:.2f} s)")
    print("stem peaks after master gain (dBFS):")
    for name, x in stems.items():
        a = np.max(np.abs(x), axis=1)
        print(f"  {name:12s} {20*np.log10(a.max()*g + 1e-12):6.1f} at {a.argmax()/SR:6.2f} s")
        if STEMS_DIR:
            Path(STEMS_DIR).mkdir(parents=True, exist_ok=True)
            sf.write(str(Path(STEMS_DIR) / f"{name}.wav"), (x * g).astype(np.float32), SR, subtype="FLOAT")
    if not (SHOT - 0.05 <= at <= SHOT + 0.6):
        print("WARNING: the loudest moment is not the shot; lower that cue or raise the shot")

    # 16-bit with TPDF dither, guarded against the ceiling
    lsb = 1.0 / 32768
    d = (rng.random(mix.shape) - rng.random(mix.shape)) * lsb
    out = np.clip(np.round((mix + d) * 32767), -32767, 32767).astype(np.int16)
    assert len(out) == N
    assert 20 * np.log10(np.max(np.abs(out)) / 32768) <= MASTER_PEAK_DBFS
    sf.write(str(OUT), out, SR, subtype="PCM_16")
    print(f"wrote {OUT} ({len(out)/SR:.3f} s, {len(out)} samples, peak "
          f"{20*np.log10(np.max(np.abs(out))/32768):.2f} dBFS)")


if __name__ == "__main__":
    main()
