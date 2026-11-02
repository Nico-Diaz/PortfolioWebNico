# DESIGN.md: "Escritorio al atardecer"

The portfolio is Nico's desk at dusk: a dark walnut surface lit by one warm brass lamp. Every colour comes from the reference photo (`public/img/escritorio.jpg`). The tokens live in `src/styles/global.css`.

## Color
| Token | Hex | Role |
| --- | --- | --- |
| `--nogal` | `#241c17` | Page ground (dark walnut). The body adds a radial dusk falloff from the upper left. |
| `--nogal-alto` | `#2f251f` | Raised wood surfaces |
| `--grafito` | `#171513` | Matte-black objects: language switch, monogram, picture frame, laptop lid |
| `--grafito-borde` | `#34302b` | Hairlines and dividers |
| `--laton` / `--laton-claro` | `#c29b60` / `#d9b77f` | Brass: primary buttons, links, focus ring, list ticks, selection |
| `--luz` | `#f3ddb0` | Lamp light: the glow and the email link |
| `--hoja` | `#7d9a5a` | Plant green: small status notes ("Proyecto destacado", "Proyecto de tesis") |
| `--papel` / `--papel-suave` / `--papel-tenue` | `#ece6da` / `#b8ad9c` / `#9a907f` | Text: primary, secondary and tertiary. All three pass AA on `--nogal`. |

Strategy: restrained. Warm neutrals cover the page, brass is the single accent, and green is used sparingly. Project screenshots bring their own colour.

## Type
- **One family:** Bricolage Grotesque Variable (self-hosted via `@fontsource-variable/bricolage-grotesque/standard.css`, with the wght, wdth and opsz axes).
- **Display:** weight 640, `wdth` 84, tracking −0.008em, `--step-4` (max 6rem).
- **Section titles:** weight 600, `wdth` 88, `--step-3`.
- **Body:** 1.0625rem with line-height 1.6. Line measure is capped at around 62ch.
- **Case:** sentence case everywhere. There are no eyebrows above headings and no all-caps labels.

## Signature elements
- **The lamp** (`src/components/Lamp.astro`):
  - A fixed radial glow that switches on with a brief filament stutter.
  - It then trails the pointer with exponential smoothing.
  - It persists across page navigations (`transition:persist`).
  - On touch devices and with reduced motion it stays static.
- **The framed print** (`Hero.astro`):
  - The portrait sits in a matte-black frame with a paper passe-partout, rotated 1.2°.
  - It is shown in B&W and warms to colour on hover.
- **The shelf** (`Tech.astro`):
  - Each technology is a book spine with its own height, width and cloth colour.
  - Spines lift 14px on hover and the logo takes its brand colour.
- **The laptop** (`Laptop.astro`): project screenshots sit on a dark lid with a silver base, like the laptop in the photo.

## Motion (emil-design-eng)
- **Curves:** `--ease-out: cubic-bezier(0.23,1,0.32,1)`, `--ease-in-out: cubic-bezier(0.77,0,0.175,1)`.
- **One orchestrated intro:** lamp first, then the print, then the text, staggered by 90ms with a blur-in. It plays once per session (`intro-done` class).
- **Page transitions:** Astro `<ClientRouter />`.
  - The project screenshot morphs between card and detail page (`shot-<slug>`), and so does the title (`title-<slug>`).
  - The root view crossfades in 320ms.
- **Reveal:** images uncover from the bottom with `clip-path` (IntersectionObserver, once). Content is visible without JS.
- **Small interactions:**
  - Buttons scale to 0.97 on `:active`.
  - Hover effects are gated behind `(hover: hover) and (pointer: fine)`.
  - The copy-email label swaps through a 2px blur.
- **Reduced motion:** opacity only, the lamp is static and view transitions are instant.

## Layout
- **Container:** max width 76rem; fluid gutter from 1.25rem to 3.5rem.
- **Section rhythm:** large space above each heading and none below the section; the contact section closes the page.
- **Radii:** 14px for images and panels, 22px for the featured panel, pills for buttons and stack tags.
