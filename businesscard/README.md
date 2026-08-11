# Heavy Photon — business card

Two-sided US business card. One side is a full-bleed TENEBRIS frame, the other
is black and carries the contact details and a QR to
`https://heavyphoton.com/#home`.

`make_cards.py` writes **two complete sets**. They differ only in which side
carries the `raygun-v2-branded` lockup (see `../CLAUDE.md` for which lockups
are final) — pick one and send the printer that PDF:

| set | art side | contact side |
|-----|----------|--------------|
| default (`front-*`, `back-*`) | clean, nothing over the art | lockup above the name |
| alternate (`alt-front-*`, `alt-back-*`) | lockup on a black bar across the bottom | no lockup, contact block re-centred |

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

Each set writes the same seven files; the alternate's are prefixed `alt-`.

| file | what it is |
|------|------------|
| `heavy-photon-business-card.pdf` | 2-page press PDF at 3.75 × 2.25 in |
| `front-bleed-600dpi.png`, `back-bleed-600dpi.png` | press rasters |
| `front-bleed-300dpi.png`, `back-bleed-300dpi.png` | 300 dpi equivalents |
| `preview-front-trimmed.png`, `preview-back-trimmed.png` | what the cut card looks like |
| `preview-front-guides.png`, `preview-back-guides.png` | bleed / trim / safe proof |
| `preview-both.png` | both sides side by side |
| `heavy-photon-business-card-alt.pdf`, `alt-*`, `preview-alt-*` | the alternate set, same seven files |

## How the art is handled

`source/tenebris-station.webp` is an upscaled screenshot with webp ringing on
every hard edge. `cardlib.detect_block` recovers the upscale factor (4× for
this capture, 375 × 121 native), `load_art_native` collapses each block to its
median and snaps the result back to a flat palette, so the card prints as
crisp pixel art instead of mush. It is then scaled up with nearest-neighbour
only — never a smoothing filter.

The whole capture goes on the card, vertically centred. It spans the card's
width, the height is made up with starfield above (`sky_band`, matched to the
capture's own star density) and plain black below — no stars under the planet
horizon. The ship's pixels are never cropped into, repeated or synthesised;
where content runs off the file's top or bottom edge, its last rows are
dimmed into black (`fade_offframe`), which only darkens existing pixels, so
neither boundary prints as a hard cut line. A wider grab with the whole
station in frame makes the top fade unnecessary: drop it into `source/` and
re-run, and the framing adapts by itself. `ART_WIN_X` / `ART_WIN_W` in
`make_cards.py` hand-place a crop window if you ever want one.

## QR code

Styled from the capture's own PICO-8 palette: chamfered modules washing from
ink black into the art's deep space blue, chamfered finder rings with a navy
pupil, and a deep-space-blue frame around the plate, all carried by
error-correction level H.

Scan reliability is enforced, not assumed. `make_cards.py` asserts every dark
module colour holds at least 7:1 contrast against the plate, and `verify()`
decodes the QR back out of the finished card at four sizes down to 460 px
wide with blur applied, failing the build if any of them miss — for both sets.
The coloured frame lives *outside* the white ring and the code's own
four-module quiet zone, where it cannot cost the scanner anything.
