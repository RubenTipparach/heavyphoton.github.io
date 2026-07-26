#!/usr/bin/env python3
"""Generate three Heavy Photon logo concepts as SVG.

Custom blocky display letterforms (no fonts, pure paths) + three marks:
  1. DROPSHIP - stealth delta ship crest, sticker/slap style
  2. MECH     - mech helmet visor lockup, esports-mark style
  3. RAYGUN   - hand cannon firing a photon so heavy the beam sags
"""
import os

OUT = os.path.dirname(os.path.abspath(__file__))

INK  = "#0B0E14"
BONE = "#F2F0E9"
VOLT = "#D8FF3E"
MAG  = "#FF3E8A"
CYAN = "#3EE0FF"

# ---------------------------------------------------------------- glyphs
# cap height 80, width 58, stem 16
GLYPHS = {
    "H": {"w": 58, "rects": [(0,0,16,80),(42,0,16,80),(16,32,26,16)]},
    "E": {"w": 58, "rects": [(0,0,16,80),(16,0,42,16),(16,32,34,16),(16,64,42,16)]},
    "A": {"w": 58, "rects": [(0,16,16,64),(42,16,16,64),(16,44,26,14)],
          "polys": [[(12,0),(46,0),(58,12),(58,16),(0,16),(0,12)]]},
    "V": {"w": 58, "polys": [[(0,0),(16,0),(29,55),(42,0),(58,0),(38,80),(20,80)]]},
    "Y": {"w": 58, "polys": [[(0,0),(16,0),(29,34),(42,0),(58,0),(37,48),(37,80),(21,80),(21,48)]]},
    "P": {"w": 58, "rects": [(0,0,16,80),(0,0,58,16),(42,0,16,48),(0,32,58,16)]},
    "O": {"w": 58, "paths": ["M12 0 H46 L58 12 V68 L46 80 H12 L0 68 V12 Z "
                              "M16 16 V64 H42 V16 Z"]},
    "T": {"w": 58, "rects": [(0,0,58,16),(21,16,16,64)]},
    "N": {"w": 58, "rects": [(0,0,16,80),(42,0,16,80)],
          "polys": [[(0,0),(16,0),(58,58),(58,80),(42,80),(0,22)]]},
    "G": {"w": 58, "paths": ["M12 0 H58 V16 H16 V64 H42 V48 H30 V32 H58 V68 "
                              "L46 80 H12 L0 68 V12 Z"]},
    "S": {"w": 58, "paths": ["M12 0 H58 V16 H16 V32 H46 L58 44 V68 L46 80 H0 "
                              "V64 H42 V48 H12 L0 36 V12 Z"]},
    "M": {"w": 66, "rects": [(0,0,16,80),(50,0,16,80)],
          "polys": [[(0,0),(16,0),(33,34),(50,0),(66,0),(66,20),(41,62),(25,62),(0,20)]]},
    " ": {"w": 26},
}

def glyph_parts(ch, x):
    g = GLYPHS[ch]
    parts = []
    for p in g.get("paths", []):
        parts.append(f'<path fill-rule="evenodd" transform="translate({x} 0)" d="{p}"/>')
    for (rx, ry, rw, rh) in g.get("rects", []):
        parts.append(f'<rect x="{x+rx}" y="{ry}" width="{rw}" height="{rh}"/>')
    for poly in g.get("polys", []):
        pts = " ".join(f"{x+px},{py}" for px, py in poly)
        parts.append(f'<polygon points="{pts}"/>')
    return parts

def wordmark(text, spacing=14, accents=None, accent_fill=None):
    """Return (svg_inner, width). accents = set of char indices in accent color."""
    accents = accents or set()
    x = 0.0
    normal, accent = [], []
    for i, ch in enumerate(text):
        if ch != " ":
            (accent if i in accents else normal).extend(glyph_parts(ch, x))
        x += GLYPHS[ch]["w"] + spacing
    inner = "".join(normal)
    if accent:
        inner += f'<g fill="{accent_fill}">' + "".join(accent) + "</g>"
    return inner, x - spacing

def justify_spacing(text, target_w):
    glyph_w = sum(GLYPHS[c]["w"] for c in text)
    return (target_w - glyph_w) / (len(text) - 1)

def svg_file(name, w, h, body, bg=None):
    bgrect = f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ""
    doc = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
           f'width="{w}" height="{h}">{bgrect}{body}</svg>')
    with open(os.path.join(OUT, name), "w") as f:
        f.write(doc)
    print("wrote", name)

# ================================================================ concept 1
def dropship(fill, accent):
    """Top-down stealth delta, nose up, in 200x260 box."""
    hull = ("M100,0 L114,34 L112,64 L140,118 L186,164 L186,190 L148,172 "
            "L148,204 L124,188 L100,204 L76,188 L52,204 L52,172 L14,190 "
            "L14,164 L60,118 L88,64 L86,34 Z")
    cockpit = "M100,46 L108,68 L100,132 L92,68 Z"
    slits = ("M70,140 L78,136 L74,168 L66,160 Z",
             "M130,140 L122,136 L126,168 L134,160 Z")
    thrust = "M84,214 L100,252 L116,214 L100,224 Z"
    parts = [f'<path fill="{fill}" d="{hull}"/>',
             f'<path fill="{accent}" d="{cockpit}"/>',
             f'<path fill="{accent}" d="{thrust}"/>']
    for s in slits:
        parts.append(f'<path fill="{INK}" d="{s}"/>')
    return "".join(parts)

def concept1():
    W, H = 640, 880
    badge = "M40,60 L60,40 L580,40 L600,60 L600,640 L320,800 L40,640 Z"
    inner = "M58,76 L72,58 L568,58 L582,76 L582,628 L320,778 L58,628 Z"
    body = [f'<path d="{badge}" fill="{INK}" stroke="{BONE}" stroke-width="14"/>',
            f'<path d="{inner}" fill="none" stroke="{VOLT}" stroke-width="4"/>']
    # descent chevrons above ship
    for i, yy in enumerate((84, 106)):
        body.append(f'<path fill="{BONE}" opacity="{0.9-0.35*i}" '
                    f'd="M284,{yy} L320,{yy+14} L356,{yy} L356,{yy+11} L320,{yy+25} L284,{yy+11} Z"/>')
    body.append(f'<g transform="translate(202 122) scale(1.18)">{dropship(BONE, VOLT)}</g>')
    target = 420
    wm1, _ = wordmark("HEAVY", justify_spacing("HEAVY", target))
    wm2, _ = wordmark("PHOTON", justify_spacing("PHOTON", target))
    body.append(f'<g fill="{BONE}" transform="translate({(W-target)/2} 448)">{wm1}</g>')
    body.append(f'<g fill="{VOLT}" transform="translate({(W-target)/2} 552)">{wm2}</g>')
    # small GAMES spaced wide
    wm3, w3 = wordmark("GAMES", 40)
    s = 0.42
    body.append(f'<g fill="{BONE}" opacity="0.85" '
                f'transform="translate({(W - w3*s)/2} 668) scale({s})">{wm3}</g>')
    svg_file("concept1-dropship.svg", W, H, "".join(body))

# ================================================================ concept 2
def mech_head(fill, accent):
    """Helmet, front view, 240x220 box."""
    helmet = ("M64,6 L176,6 L200,30 L200,92 L184,102 L184,146 L150,196 "
              "L90,196 L56,146 L56,102 L40,92 L40,30 Z")
    visor = "M52,72 L188,72 L178,108 L62,108 Z"
    # angled dark slash through visor for attitude
    slash = "M118,66 L134,66 L114,114 L98,114 Z"
    antenna = f'<rect x="154" y="-20" width="10" height="26" fill="{fill}"/>' \
              f'<rect x="152" y="-30" width="14" height="8" fill="{accent}"/>'
    earL = "M24,60 L40,66 L40,120 L24,112 Z"
    earR = "M216,60 L200,66 L200,120 L216,112 Z"
    chin = ('<rect x="104" y="150" width="8" height="26"/>'
            '<rect x="118" y="150" width="8" height="26"/>'
            '<rect x="132" y="150" width="8" height="26"/>')
    return (f'<g fill="{fill}"><path d="{helmet}"/>'
            f'<path d="{earL}"/><path d="{earR}"/></g>{antenna}'
            f'<path fill="{accent}" d="{visor}"/>'
            f'<path fill="{INK}" d="{slash}"/>'
            f'<g fill="{INK}">{chin}</g>')

def concept2():
    W, H = 1200, 420
    body = [f'<g transform="translate(64 90) scale(1.18)">{mech_head(BONE, MAG)}</g>']
    body.append(f'<rect x="408" y="76" width="8" height="268" fill="{MAG}"/>')
    wm1, _ = wordmark("HEAVY", 14)
    wm2, _ = wordmark("PHOTON", 14, accents={2}, accent_fill=MAG)  # O lit magenta
    body.append(f'<g fill="{BONE}" transform="translate(464 76) scale(1.32)">{wm1}</g>')
    body.append(f'<g fill="{BONE}" transform="translate(464 210) scale(1.32)">{wm2}</g>')
    wm3, _ = wordmark("GAMES", 40)
    body.append(f'<g fill="{BONE}" opacity="0.6" '
                f'transform="translate(468 344) scale(0.4)">{wm3}</g>')
    svg_file("concept2-mech.svg", W, H, "".join(body), bg=INK)

# ================================================================ concept 3
def raygun(fill, accent):
    """Chunky hand cannon pointing right, ~300x220 box."""
    fins = "".join(f'<rect x="{2+i*10}" y="{66+i*6}" width="7" height="{104-i*12}"/>'
                   for i in range(3))
    body_blk = ("M32,64 L128,64 L150,84 L150,150 L32,150 Z")
    grip = "M56,150 L112,150 L94,218 L40,218 Z"
    trig = f'<rect x="116" y="150" width="24" height="12" fill="{fill}"/>'
    sight = "M48,42 L112,42 L120,64 L40,64 Z"
    barrel = "M150,84 L242,84 L242,132 L150,132 Z"
    rail = f'<rect x="154" y="132" width="76" height="10" fill="{accent}"/>'
    muzzle = ("M242,66 L262,66 L262,84 L274,84 L274,130 L262,130 L262,148 "
              "L242,148 Z")
    tip = f'<rect x="274" y="94" width="14" height="26" fill="{fill}"/>'
    vents = "".join(f'<path fill="{accent}" d="M{56+i*26},76 L{68+i*26},76 '
                    f'L{62+i*26},100 L{50+i*26},100 Z"/>' for i in range(3))
    return (f'<g fill="{fill}">{fins}<path d="{body_blk}"/><path d="{grip}"/>'
            f'<path d="{sight}"/><path d="{barrel}"/><path d="{muzzle}"/></g>'
            f'{trig}{tip}{rail}{vents}')

def concept3():
    W, H = 1280, 470
    body = [f'<g transform="translate(36 96)">{raygun(BONE, CYAN)}</g>']
    # beam: straight run then SAGS under the photon's weight
    beam_y0, beam_y1 = 190, 214   # gun tip at y 96+94..96+120
    body.append(f'<path fill="{CYAN}" d="M324,{beam_y0} L900,{beam_y0} '
                f'L1010,258 L1010,282 L988,276 L890,{beam_y1} L324,{beam_y1} Z"/>')
    # the heavy photon: massive slab hanging at the drooped end
    body.append(f'<g transform="translate(1006 240) rotate(20)">'
                f'<rect x="0" y="0" width="74" height="74" fill="{BONE}"/>'
                f'<rect x="18" y="18" width="38" height="38" fill="{CYAN}"/></g>')
    # strain ticks radiating from the underside of the bend
    body.append(f'<g stroke="{CYAN}" stroke-width="6" stroke-linecap="square">'
                f'<line x1="874" y1="234" x2="858" y2="250"/>'
                f'<line x1="902" y1="246" x2="892" y2="266"/></g>')
    # wordmark riding the straight beam, slight forward slant
    wm, w = wordmark("HEAVY PHOTON", 12)
    s = 0.78
    body.append(f'<g transform="translate(368 92) scale({s}) skewX(-8)">'
                f'<g fill="{BONE}">{wm}</g></g>')
    # GAMES under the beam start
    wm3, w3 = wordmark("GAMES", 34)
    body.append(f'<g fill="{CYAN}" opacity="0.9" '
                f'transform="translate(372 244) scale(0.36) skewX(-8)">{wm3}</g>')
    svg_file("concept3-raygun.svg", W, H, "".join(body), bg=INK)

if __name__ == "__main__":
    concept1()
    concept2()
    concept3()

# ================================================================ v2 alphabet
# Sharper display cut: chamfered corners, blade-cut arm terminals,
# pointed A, near-pointed V. cap 80, width 60 (A 64), stem 18.
GLYPHS2 = {
    "H": {"w": 60, "rects": [(18,34,24,14)],
          "polys": [[(0,12),(12,0),(18,0),(18,80),(0,80)],
                    [(42,0),(60,0),(60,68),(48,80),(42,80)]]},
    "E": {"w": 60, "polys": [[(0,12),(12,0),(18,0),(18,80),(0,80)],
                             [(18,0),(60,0),(60,6),(52,14),(18,14)],
                             [(18,33),(52,33),(46,47),(18,47)],
                             [(18,66),(52,66),(60,74),(60,80),(18,80)]]},
    "A": {"w": 64, "paths": ["M23,0 L41,0 L64,80 L46,80 L41,62 L23,62 L18,80 "
                              "L0,80 Z M32,20 L37,46 L27,46 Z"]},
    "V": {"w": 60, "polys": [[(0,0),(18,0),(30,50),(42,0),(60,0),(34,80),(26,80)]]},
    "Y": {"w": 60, "polys": [[(0,0),(18,0),(30,32),(42,0),(60,0),(39,45),(39,80),(21,80),(21,45)]]},
    "P": {"w": 60, "polys": [[(0,12),(12,0),(18,0),(18,80),(0,80)]],
          "paths": ["M18,0 L48,0 L60,12 L60,36 L48,48 L18,48 L18,34 L42,34 "
                     "L46,30 L46,18 L42,14 L18,14 Z"]},
    "O": {"w": 60, "paths": ["M12,0 L48,0 L60,12 L60,68 L48,80 L12,80 L0,68 "
                              "L0,12 Z M18,16 L42,16 L44,18 L44,62 L42,64 "
                              "L18,64 L16,62 L16,18 Z"]},
    "T": {"w": 60, "polys": [[(0,0),(60,0),(60,8),(54,14),(6,14),(0,8)],
                             [(21,14),(39,14),(39,80),(27,80),(21,74)]]},
    "N": {"w": 60, "rects": [(0,0,18,80),(42,0,18,80)],
          "polys": [[(0,0),(18,0),(60,56),(60,80),(42,80),(0,26)]]},
    " ": {"w": 26},
}

def glyph_parts2(ch, x):
    g = GLYPHS2[ch]
    parts = []
    for p in g.get("paths", []):
        parts.append(f'<path fill-rule="evenodd" transform="translate({x} 0)" d="{p}"/>')
    for (rx, ry, rw, rh) in g.get("rects", []):
        parts.append(f'<rect x="{x+rx}" y="{ry}" width="{rw}" height="{rh}"/>')
    for poly in g.get("polys", []):
        pts = " ".join(f"{x+px},{py}" for px, py in poly)
        parts.append(f'<polygon points="{pts}"/>')
    return parts

def wordmark2(text, spacing=12, accents=None, accent_fill=None,
              offsets=None, skip=None):
    """v2 wordmark. offsets={idx:(dx,dy,rot)} per-glyph; skip={idx,...} omits.
    Returns (inner_svg, width, positions list of glyph x)."""
    accents = accents or set()
    offsets = offsets or {}
    skip = skip or set()
    x = 0.0
    out = []
    pos = []
    for i, ch in enumerate(text):
        pos.append(x)
        if ch != " " and i not in skip:
            parts = "".join(glyph_parts2(ch, 0))
            fill = f' fill="{accent_fill}"' if i in accents else ""
            dx, dy, rot = offsets.get(i, (0, 0, 0))
            w2 = GLYPHS2[ch]["w"] / 2
            tr = f'translate({x+dx} {dy})'
            if rot:
                tr += f' rotate({rot} {w2} 40)'
            out.append(f'<g transform="{tr}"{fill}>{parts}</g>')
        x += GLYPHS2[ch]["w"] + spacing
    return "".join(out), x - spacing, pos

def scanmask(mid, w, y=46):
    """Slanted stencil band mask for a wordmark group (local coords)."""
    return (f'<mask id="{mid}"><rect x="-80" y="-40" width="{w+160}" '
            f'height="180" fill="#fff"/>'
            f'<polygon points="-40,{y+6} {w+40},{y-4} {w+40},{y+4} -40,{y+14}" '
            f'fill="#000"/></mask>')

# ================================================================ raygun v2
def raygun2_struct():
    """Gun structural shapes, no fills (inherit from parent), ~300x220 box."""
    fins = "".join(f'<rect x="{2+i*10}" y="{66+i*6}" width="7" height="{104-i*12}"/>'
                   for i in range(3))
    return (fins +
            '<path d="M32,64 L128,64 L150,84 L150,150 L32,150 Z"'
            '/><path d="M56,150 L112,150 L94,218 L40,218 Z"'
            '/><rect x="112" y="150" width="30" height="12"'
            '/><path d="M48,42 L112,42 L120,64 L40,64 Z"'
            '/><path d="M150,84 L242,84 L242,132 L150,132 Z"'
            '/><path d="M242,66 L262,66 L262,84 L274,84 L274,130 L262,130 '
            'L262,148 L242,148 Z"/><rect x="274" y="94" width="14" height="26"/>')

def raygun2_energy(accent):
    """Gun accent details: under-rail + charge vents."""
    vents = "".join(f'<path d="M{56+i*26},76 L{68+i*26},76 '
                    f'L{62+i*26},100 L{50+i*26},100 Z"/>' for i in range(3))
    return (f'<g fill="{accent}"><rect x="154" y="132" width="76" height="10"/>'
            f'{vents}</g>')

def raygun2(fill, accent, detail=None):
    return (f'<g fill="{fill}">{raygun2_struct()}</g>{raygun2_energy(accent)}'
            f'<rect x="118" y="158" width="14" height="8" fill="{detail or INK}"/>')

# shared layout for mainline + embossed: gun fires at an asteroid, the beam
# ricochets off to the side, and a chipped shard of rock flies away
# The asteroid's flat upper-left face is the mirror: it runs at -30deg from
# (1036,224) to (1122,174), so a horizontal beam reflects up-right at 60deg.
# The beam is ONE continuous ribbon whose miter (A=1113,180 to B=1067,206)
# lies exactly along that face.
ML = {
    "W": 1280, "H": 420, "gun": (28, 86), "tx": 352, "ty": 78, "s": 0.72,
    "beam": ("M320,180 L1113,180 L1196,36 L1165,36 L1067,206 L320,206 Z"),
    "asteroid": ("M1036,224 L1122,174 L1160,190 L1196,226 L1190,278 "
                 "L1148,310 L1092,304 L1052,270 Z"),
    "craters": [(1120, 236, 14), (1158, 264, 10), (1092, 266, 9)],
    "shards": ["M1030,196 L1000,184 L1024,174 Z",
               "M1024,220 L992,226 L1014,206 Z",
               "M1044,240 L1020,262 L1012,238 Z"],
    "chip": "M1204,74 L1232,82 L1224,106 L1198,98 Z",
    "chip_ticks": ((1246, 60, 1258, 48), (1252, 88, 1268, 82)),
}

def asteroid_details(crater_fill):
    return "".join(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{crater_fill}"/>'
                   for cx, cy, r in ML["craters"])

def raygun_v2_mainline():
    """Beam ricochets off an asteroid; a chipped shard flies off. First O lit."""
    W, H = ML["W"], ML["H"]
    gx, gy = ML["gun"]
    body = [f'<path fill="{CYAN}" d="{ML["beam"]}"/>',
            f'<path fill="{BONE}" d="{ML["asteroid"]}"/>',
            asteroid_details(INK)]
    for sh in ML["shards"]:
        body.append(f'<path fill="{CYAN}" d="{sh}"/>')
    body.append(f'<path fill="{BONE}" d="{ML["chip"]}"/>')
    ticks = "".join(f'<line x1="{a}" y1="{b}" x2="{c}" y2="{d}"/>'
                    for a, b, c, d in ML["chip_ticks"])
    body.append(f'<g stroke="{CYAN}" stroke-width="6" stroke-linecap="square">'
                f'{ticks}</g>')
    wm, wmw, pos = wordmark2("HEAVY PHOTON", 12, accents={8}, accent_fill=CYAN)
    body.append(f'<g fill="{BONE}" transform="translate({ML["tx"]} {ML["ty"]}) '
                f'scale({ML["s"]})">{wm}</g>')
    body.append(f'<g transform="translate({gx} {gy})">{raygun2(BONE, CYAN)}</g>')
    svg_file("raygun-v2-mainline.svg", W, H, "".join(body), bg=INK)

def raygun_v2_embossed():
    """Same lockup stamped into a steel plate; cyan energy stays live."""
    W, H = ML["W"], ML["H"]
    gx, gy = ML["gun"]
    tx, ty, s = ML["tx"], ML["ty"], ML["s"]
    defs = (
        '<defs>'
        '<linearGradient id="plate" x1="0" y1="0" x2="0.7" y2="1">'
        f'<stop offset="0" stop-color="#2B313D"/>'
        f'<stop offset="1" stop-color="#161A23"/></linearGradient>'
        '<linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">'
        '<stop offset="0" stop-color="#C6CEDA"/>'
        '<stop offset="0.55" stop-color="#96A0B0"/>'
        '<stop offset="1" stop-color="#6C7688"/></linearGradient>'
        '<filter id="soften" x="-20%" y="-20%" width="140%" height="140%">'
        '<feGaussianBlur stdDeviation="2.2"/></filter>'
        '<filter id="glow" x="-60%" y="-60%" width="220%" height="220%">'
        '<feGaussianBlur stdDeviation="6"/></filter>'
        '</defs>')
    body = [defs,
            f'<rect width="{W}" height="{H}" fill="url(#plate)"/>',
            f'<rect x="22" y="22" width="{W-44}" height="{H-44}" fill="none" '
            f'stroke="#3A4150" stroke-width="2"/>']
    # corner bolts
    for bx, by in ((46, 46), (W-46, 46), (46, H-46), (W-46, H-46)):
        body.append(f'<circle cx="{bx+2}" cy="{by+3}" r="13" fill="#04060A" '
                    f'opacity="0.6" filter="url(#soften)"/>'
                    f'<circle cx="{bx}" cy="{by}" r="12" fill="url(#steel)"/>'
                    f'<circle cx="{bx}" cy="{by}" r="5" fill="#3A4150"/>')
    # structure content (no fills) reused across emboss layers
    wm_s, _, pos = wordmark2("HEAVY PHOTON", 12, skip={8})
    content = (f'<g transform="translate({gx} {gy})">{raygun2_struct()}</g>'
               f'<g transform="translate({tx} {ty}) scale({s})">{wm_s}</g>'
               f'<path d="{ML["asteroid"]}"/>'
               f'<path d="{ML["chip"]}"/>')
    body.append(f'<g fill="#04060A" opacity="0.75" filter="url(#soften)" '
                f'transform="translate(6 7)">{content}</g>')
    body.append(f'<g fill="#E8EEF7" transform="translate(-3 -3)">{content}</g>')
    body.append(f'<g fill="url(#steel)">{content}</g>')
    body.append(asteroid_details("#3A4150"))
    body.append(f'<g transform="translate({gx} {gy})">'
                f'<rect x="118" y="158" width="14" height="8" fill="#232936"/></g>')
    # live cyan energy: continuous ricochet beam, impact shards, glowing O,
    # chip motion ticks, vents
    o_inner = "".join(glyph_parts2("O", 0))
    ticks = "".join(f'<line x1="{a}" y1="{b}" x2="{c}" y2="{d}"/>'
                    for a, b, c, d in ML["chip_ticks"])
    energy = (f'<path d="{ML["beam"]}"/>' +
              "".join(f'<path d="{sh}"/>' for sh in ML["shards"]) +
              f'<g transform="translate({tx+pos[8]*s} {ty}) scale({s})">{o_inner}</g>'
              f'<g stroke="{CYAN}" stroke-width="6" stroke-linecap="square" '
              f'fill="none">{ticks}</g>')
    body.append(f'<g fill="{CYAN}" opacity="0.85" filter="url(#glow)">{energy}</g>')
    body.append(f'<g fill="{CYAN}">{energy}</g>')
    body.append(f'<g transform="translate({gx} {gy})">{raygun2_energy(CYAN)}</g>')
    svg_file("raygun-v2-embossed.svg", W, H, "".join(body))

def raygun_v2_strike():
    """Beam fired straight through the wordmark, slug punches out the far side."""
    W, H = 1500, 400
    body = []
    # beam behind everything, cutting through mid-letter height
    by0, by1 = 140, 164
    body.append(f'<rect x="316" y="{by0}" width="1010" height="{by1-by0}" fill="{MAG}"/>')
    body.append(f'<g transform="translate(24 46)">{raygun2(BONE, MAG)}</g>')
    # wordmark OVER the beam, both O's lit
    wm, wmw, _ = wordmark2("HEAVY PHOTON", 12, accents={8, 10}, accent_fill=MAG)
    s = 0.94
    body.append(f'<g transform="translate(372 110) skewX(-10) scale({s})">'
                f'<g fill="{BONE}">{wm}</g></g>')
    # slug punching out the far side + speed dashes
    body.append(f'<g transform="translate(1330 122) rotate(14)">'
                f'<rect width="64" height="64" fill="{BONE}"/>'
                f'<rect x="16" y="16" width="32" height="32" fill="{MAG}"/></g>')
    body.append(f'<g fill="{MAG}">'
                f'<rect x="1424" y="142" width="26" height="10"/>'
                f'<rect x="1460" y="156" width="16" height="8"/></g>')
    svg_file("raygun-v2-strike.svg", W, H, "".join(body), bg=INK)

def raygun_v2_sticker():
    """Chamfered square slap: tilted gun blasting corner-ward, stacked wordmark."""
    W, H = 760, 800
    badge = "M64,36 L696,36 L724,64 L724,672 L696,700 L64,700 L36,672 L36,64 Z"
    inner = "M76,54 L686,54 L706,74 L706,662 L686,682 L76,682 L56,662 L56,74 Z"
    body = [f'<path d="{badge}" fill="{INK}" stroke="{BONE}" stroke-width="14"/>',
            f'<path d="{inner}" fill="none" stroke="{VOLT}" stroke-width="4"/>']
    # corner deco sparks
    body.append(f'<g fill="{VOLT}"><rect x="112" y="118" width="12" height="36"/>'
                f'<rect x="100" y="130" width="36" height="12"/></g>'
                f'<rect x="164" y="176" width="10" height="10" fill="{BONE}"/>')
    # gun tilted up-right, firing toward the corner
    body.append(f'<g transform="translate(96 300) rotate(-18)">{raygun2(BONE, VOLT)}</g>')
    # short hard blast + slug near the corner
    body.append(f'<g transform="rotate(-18 96 300)">'
                f'<rect x="392" y="390" width="150" height="26" fill="{VOLT}"/>'
                f'</g>')
    body.append(f'<g transform="translate(556 200) rotate(24)">'
                f'<rect width="70" height="70" fill="{BONE}"/>'
                f'<rect x="18" y="18" width="34" height="34" fill="{VOLT}"/></g>')
    # stacked wordmark, justified, stencil scanline
    t1, t2 = "HEAVY", "PHOTON"
    target = 560
    def just2(text, tgt):
        gw = sum(GLYPHS2[c]["w"] for c in text)
        return (tgt - gw) / (len(text) - 1)
    wm1, w1, _ = wordmark2(t1, just2(t1, target), accents={1}, accent_fill=VOLT)
    wm2, w2, _ = wordmark2(t2, just2(t2, target), accents={4}, accent_fill=VOLT)
    body.append(f'<defs>{scanmask("sc1", target)}</defs>')
    body.append(f'<g fill="{BONE}" mask="url(#sc1)" '
                f'transform="translate(100 476)">{wm1}</g>')
    body.append(f'<g fill="{BONE}" mask="url(#sc1)" '
                f'transform="translate(100 580)">{wm2}</g>')
    svg_file("raygun-v2-sticker.svg", W, H, "".join(body))

def raygun_v2_icon():
    """Icon-only roundel for avatars: gun + sagging blast, no type."""
    W, H = 480, 480
    body = [f'<circle cx="240" cy="240" r="224" fill="{INK}" '
            f'stroke="{BONE}" stroke-width="12"/>',
            f'<circle cx="240" cy="240" r="196" fill="none" '
            f'stroke="{CYAN}" stroke-width="4"/>']
    body.append(f'<g transform="translate(74 160) scale(0.78) rotate(-8 150 110)">'
                f'{raygun2(BONE, CYAN)}</g>')
    # short beam that immediately sags + slug
    body.append(f'<path fill="{CYAN}" d="M300,222 L336,219 L366,266 L352,282 '
                f'L330,242 L300,244 Z"/>')
    body.append(f'<g transform="translate(340 268) rotate(18)">'
                f'<rect width="52" height="52" fill="{BONE}"/>'
                f'<rect x="13" y="13" width="26" height="26" fill="{CYAN}"/></g>')
    svg_file("raygun-v2-icon.svg", W, H, "".join(body))

raygun_v2_mainline()
raygun_v2_embossed()
raygun_v2_strike()
raygun_v2_sticker()
raygun_v2_icon()
