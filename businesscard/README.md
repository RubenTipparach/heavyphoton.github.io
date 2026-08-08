# Heavy Photon — business card

Two-sided US business card. Front is a full-bleed TENEBRIS frame with the
raygun lockup on a translucent black bar; back is black with a QR to
`https://heavyphoton.com/#home` and contact details.

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
| `preview-front-guides.png`, `preview-back-guides.png` | bleed / trim / safe proof |
| `preview-both.png` | both sides side by side |

## How the art is handled

`source/tenebris-station.webp` is a 4× upscale of a 375 × 121 native frame,
with webp ringing on every hard edge. `cardlib.load_art_native` takes the
median of each 4 × 4 block to recover the native frame and snaps it back to a
flat palette, so the card prints as crisp pixel art instead of mush. It is
then scaled up with nearest-neighbour only — never a smoothing filter.

The capture is 3.10:1 and the card is 1.67:1, so the frame is widened rather
than cropped hard: `grow_sky` adds native pixel rows above the capture,
extending the starfield at its measured density and continuing the habitat
modules straight up (they are vertically banded, so they read as running out
of frame). That keeps both modules, both engine plumes and the hub on a card
that would otherwise have to crop about a fifth of the structure away.

## QR code

Styled from the capture's own PICO-8 palette: chamfered modules washing from
ink black into the art's deep space blue, chamfered finder rings with a
navy pupil, and the raygun roundel in the middle carried by error-correction
level H.

Scan reliability is enforced, not assumed. `make_cards.py` asserts every dark
module colour holds at least 7:1 contrast against the plate, and `verify()`
decodes the QR back out of the finished card at four sizes down to 460 px
wide with blur applied, failing the build if any of them miss. The bright
yellow/red/cyan accents live on the frame *outside* the quiet zone, where
they cannot cost the scanner anything.
