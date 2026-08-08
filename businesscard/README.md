# Heavy Photon — business card

Two-sided US business card. Front is a full-bleed TENEBRIS frame and nothing
else; back is black and carries all the branding — the `raygun-v2-branded`
lockup, contact details, and a QR to `https://heavyphoton.com/#home` with the
`raygun-v2-compact` cut in its centre. (See `../CLAUDE.md` for which lockups
are final.)

`make_cards.py` also writes `alt-front-bar-*` — the earlier front treatment,
with a translucent black bar carrying the lockup along the bottom — in case
that one is wanted instead.

Everything in `out/` is generated. Rebuild with:

```sh
pip install pillow numpy qrcode cairosvg zxing-cpp
python3 make_cards.py
```

## Print specs

|              | size            | notes                                   |
|--------------|-----------------|-----------------------------------------|
| Trim         | 3.5 × 2.0 in    | the finished card                       |
| Bleed        | 3.75 × 2.25 in  | 0.125 in overflow on every edge         |
| Safe area    | 3.25 × 1.75 in  | nothing important outside this          |
| Resolution   | 600 dpi         | 2250 × 1350 px per side                 |
| Colour       | RGB             | convert to the printer's CMYK profile   |

Send the printer `heavy-photon-business-card.pdf` (or the two
`*-bleed-600dpi.png` files) and tell them the artwork already includes
1/8 in bleed. The art, the bottom bar and the back's gradient all run out
past the trim line, so a cutter drifting up to 1/8 in never exposes paper.

## Files in `out/`

| file | what it is |
|------|------------|
| `heavy-photon-business-card.pdf` | 2-page press PDF at 3.75 × 2.25 in |
| `front-bleed-600dpi.png`, `back-bleed-600dpi.png` | press rasters |
| `front-bleed-300dpi.png`, `back-bleed-300dpi.png` | 300 dpi equivalents |
| `preview-front-trimmed.png`, `preview-back-trimmed.png` | what the cut card looks like |
| `alt-front-bar-bleed-600dpi.png`, `preview-front-bar-trimmed.png` | alternate front: black bar + lockup |
| `preview-front-guides.png`, `preview-back-guides.png` | bleed / trim / safe proof |
| `preview-both.png` | both sides side by side |

## How the art is handled

`source/tenebris-station.webp` is an upscaled screenshot with webp ringing on
every hard edge. `cardlib.detect_block` recovers the upscale factor (4× for
this capture, 375 × 121 native), `load_art_native` collapses each block to its
median and snaps the result back to a flat palette, so the card prints as
crisp pixel art instead of mush. It is then scaled up with nearest-neighbour
only — never a smoothing filter.

The whole capture goes on the card. It spans the card's width, the planet
runs off the bottom bleed, and the height is made up with starfield matched
to the capture's own star density (`sky_band`). The ship's pixels are never
cropped into, repeated or synthesised. The one seam in this capture — the
right habitat module running off the top of the *file* — is dimmed into
space over its last rows (`fade_offframe_top`), which only darkens existing
pixels. A wider grab with the whole station in frame makes that fade
unnecessary: drop it into `source/` and re-run, and the framing adapts by
itself. `ART_WIN_X` / `ART_WIN_W` in `make_cards.py` hand-place a crop
window if you ever want one.

## QR code

Styled from the capture's own PICO-8 palette: chamfered modules washing from
ink black into the art's deep space blue, chamfered finder rings with a navy
pupil, and the compact lockup on a dark tile in the middle, carried by
error-correction level H.

Scan reliability is enforced, not assumed. `make_cards.py` asserts every dark
module colour holds at least 7:1 contrast against the plate, and `verify()`
decodes the QR back out of the finished card at four sizes down to 460 px
wide with blur applied, failing the build if any of them miss. The bright
yellow/red/cyan accents live on the frame *outside* the quiet zone, where
they cannot cost the scanner anything.
