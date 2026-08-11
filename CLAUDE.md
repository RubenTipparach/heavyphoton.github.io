# Heavy Photon — working notes

## Brand: use these two lockups, nothing else

`branding/` holds a lot of exploration — three original concepts, a raygun v2
family with eight cuts, plus an `iterations/` archive. **Two of them are final.
Everything else is history, kept for reference.**

| Use it for | File | Shape |
|---|---|---|
| **Primary.** Wide placements: site hero, boot screen, card, banners, headers | `branding/raygun-v2-branded.svg` | 4.39:1 — HEAVY across the gun, PHOTON in relief on the cyan beam |
| **Small / tight spaces.** Badges, avatars, stamps, anywhere the wide cut can't breathe | `branding/raygun-v2-compact.svg` | 1.87:1 — gun-only, HEAVY across it, PHOTON tucked under |

Not final, do not reach for: `raygun-v2-mainline`, `-strike`, `-sticker`,
`-icon`, `-embossed`, the `-steel` cuts, the `concept1/2/3` files, and anything
under `iterations/`.

The steel cuts are the same two lockups debossed on a bolted plate. They are a
*treatment* of the finals, not separate marks — use them only when a plate is
explicitly wanted, and never on artwork or a coloured background.

> Note: `branding/README.md` calls `raygun-v2-mainline.svg` the "Primary
> lockup". That line is stale — it describes the state of the exploration
> before the final pick. This file wins.

### Web-ready cuts

The files in `branding/` carry an opaque `#0B0E14` backing rect and slack in the
viewBox, so they are wrong to drop straight onto a page. Transparent,
tight-cropped versions live in `work/public/branding/` and are regenerated with:

```sh
python3 branding/export_web_svg.py
```

### Palette

Ink `#0B0E14`, bone `#F2F0E9`, ion cyan `#3EE0FF`.

TENEBRIS renders in a PICO-8 palette, so anything sitting next to game art
should borrow from that rather than inventing colours: black `#000000`, deep
space blue `#1D2B53`, red `#FF004D`, orange `#FFA300`, yellow `#FFEC27`,
green `#008751`, blue `#29ADFF`, indigo `#83769C`, white `#FFF1E8`.

## Repo layout

- `work/` — the Vite source for heavyphoton.com. Edit here.
- `docs/` — the **built output**, served by GitHub Pages. Never hand-edit;
  run `npm run build` from `work/` and commit what changes.
  Note `emptyOutDir: false`, so old hashed bundles pile up in `docs/assets/`;
  delete any you orphan in the same commit.
- `docs/tenebris/` — the playable TENEBRIS demo build.
- `branding/` — logo source SVGs, `genlogos.py` that generates them, and PNG
  exports. `genlogos.py` refuses to overwrite an SVG that has been re-saved
  from Inkscape, so hand edits are safe.
- `businesscard/` — business card generator and press files. See its README.

## Print work

US business card: 3.5 × 2 in trim, 1/8 in bleed every edge, 1/8 in safe margin
inside the trim. Anything that touches an edge must run the full bleed.
