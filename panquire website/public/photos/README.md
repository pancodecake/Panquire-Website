# Photographs

`bike-t01.jpg` is a clean 900x711 frame lifted from the `bikeOut` reference
render (bike at rest), with the two UI fragments that bled into the crop
painted out. The hero and the lead-capture background use it.

The featured-products stage does not use this folder. It plays the renders in
`public/media/featured/` directly; see `featured` in `src/data/site.ts`.

The files below are referenced but not in the repository. Export them from the
two Claude Design projects and drop them in here — every page checks for its
file at build time and swaps the placeholder slot for the real photograph with
no code change.

| File | Source project | Path in project |
|---|---|---|
| `bike-t01.png` | T-MAN Landing Page (`b4b78bea…`) | `design/assets/photos/bike-t01.png` — transparent PNG, better than the extracted JPEG; over the 256 KiB read cap, so export it by hand |
| `bike-t01-wide.png` | T-MAN Landing Page (`b4b78bea…`) | `design/assets/photos/bike-t01-wide.png` |
| `rider-liam.png` | T-MAN Landing Page (`b4b78bea…`) | `design/assets/photos/rider-liam.png` |
| `avatar-liam.png` | T-MAN Landing Page (`b4b78bea…`) | `design/assets/photos/avatar-liam.png` |
| `t01.jpg` | T-01 Product Page (`fa0e5ca7…`) | `assets/t01.jpg` |

If you replace `bike-t01.jpg` with the transparent `bike-t01.png`, update the
two `/photos/bike-t01.jpg` references in `src/pages/index.astro` (hero and lead
capture). A cut-out PNG also removes the hard-edged rectangle the JPEG shows
inside the hero's radial mask today.
