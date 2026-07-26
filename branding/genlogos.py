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
