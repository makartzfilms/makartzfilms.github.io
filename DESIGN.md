# Design System — 3J Pictures

> Source of truth for all visual and UI decisions. Read this before changing any
> styling, typography, color, spacing, or layout. Do not deviate without explicit
> approval. Values are defined in `src/styles/global.css` and `src/styles/typography.css`.

## Product Context
- **What this is:** Marketing and portfolio site for 3J Pictures, an independent film studio.
- **Who it's for:** Audiences, festival programmers, press, and collaborators discovering the studio's films.
- **Space/industry:** Independent film / genre studio (mystery, suspense, horror, science fiction, drama).
- **Project type:** Editorial marketing site (Astro static site).
- **Memorable thing:** Cinematic and serious. A movie studio, not a template. Films come first, in full-bleed and in the dark.

## Aesthetic Direction
- **Direction:** Cinematic editorial. Near-black canvas, full-bleed film imagery, one hot red accent, serif headlines.
- **Decoration level:** Minimal. Typography, imagery, and the single accent do all the work. No gradients, no texture, no decorative shapes.
- **Mood:** Dark, premium, and moody. The site should feel like a theater going quiet before the lights drop.

## Typography
- **Display/Hero:** `EB Garamond` — serif, high-contrast, editorial. Tight tracking (`-0.02em`), scales to `clamp(2.2rem, 7vw, 6.5rem)`. Carries the studio's title-card feel.
- **Body / UI / Labels:** `Inter` — sans-serif, weights 300–700.
- **Data/Tables:** `Inter` (no dedicated tabular face at present).
- **Eyebrows:** `Inter`, uppercase, letter-spacing `0.18em`, small (`clamp(0.65rem, 0.75vw, 0.8rem)`). Usually red on dark, red on light.
- **Loading:** Google Fonts via `<link>` in `BaseHead.astro` (`EB+Garamond:ital,wght@0,400..700;1,400..500`, `Inter:wght@300..700`).
- **CSS vars:** `--font-serif: 'EB Garamond', Georgia, serif;` · `--font-sans: 'Inter', system-ui, sans-serif;`
- **Scale (utility classes in `typography.css`):**
  - `.display` — serif, `clamp(2.2rem, 7vw, 6.5rem)`, line-height ~1.06, `-0.02em`
  - `.heading-1` — serif, `clamp(1.75rem, 3.5vw, 3rem)`
  - `.heading-2` — serif, `clamp(1.5rem, 3vw, 2.5rem)`
  - `.heading-3` — serif, `clamp(1.2rem, 2vw, 1.75rem)`
  - `.body-large` — sans, `clamp(1rem, 1.1vw, 1.2rem)`
  - `.body` — sans, `1rem`
  - `.eyebrow` — sans, uppercase, `0.18em`, `clamp(0.65rem, 0.75vw, 0.8rem)`
  - `.caption` — sans, `0.8rem`, `0.08em`
  - `.prose` — serif body for long-form (film storylines, journal)
- **Note:** `Inter` is a generic default. EB Garamond is the distinctive half of the pairing. If the brand is ever sharpened, replacing Inter with a more characterful grotesk is the first move — but only with explicit approval, since it touches every page.

## Color
- **Approach:** Restrained. One accent (red), everything else is ink/white/gray. Color is rare and always means something (action, active, emphasis).
- **Accent — Red:** `#E03020` (`--red` / `--sienna` / `--amber` all alias this). Used for CTAs, eyebrows, active nav, `::selection`, scrollbar, hover fills. Hover/pressed darken: `#9E3222`.
- **Dark canvas (default):** `--ink #111111`, with `--ink2 #1A1A1A`, `--ink3 #222222`, `--ink4 #333333` for layered surfaces. Site background is `--ink`.
- **Light surfaces:** white `#ffffff` (`--parchment`/`--cream`), plus `--parchment3 #f0f0f0`. Used for alternating light sections (About mission, Team).
- **Text on dark:** primary `#ffffff` · body `rgba(255,255,255,0.65)` · muted `rgba(255,255,255,0.38)`.
- **Text on light:** primary `#111111` · body `rgba(17,17,17,0.72)` · muted `rgba(17,17,17,0.42)`.
- **Borders:** dark `rgba(255,255,255,0.1)` · light `rgba(17,17,17,0.12)`.
- **Semantic:** none defined yet. If needed, keep them muted and subordinate to the red accent.
- **Theme:** This is a dark-first site. "Light mode" is not a user toggle; it's per-section (white sections punctuate the dark). Nav is transparent over heroes; on dark pages it uses `darkNav` (light links + a frosted chip behind the logo).

## Spacing
- **Base unit:** 8px (`--space-1: 0.5rem`).
- **Density:** Spacious. Big vertical rhythm; heroes are full viewport.
- **Scale:** `--space-1 .5rem` · `-2 1rem` · `-3 1.5rem` · `-4 2rem` · `-6 3rem` · `-8 4rem` · `-12 6rem` · `-16 8rem` · `-24 12rem`.
- **Sections:** `.section-container` = `60px 0` (`40px 0` on mobile). `.container` max-width `1400px`, side padding `--space-6` (`--space-3` on mobile).

## Layout
- **Approach:** Editorial. Full-bleed cinematic heroes; asymmetric, image-forward composition; credits-forward film detail pages (labeled Starring / Directed by / Written by / Release blocks).
- **Max content width:** `1400px` container; long-form/detail columns cap ~`820px`.
- **Film hero:** full-viewport (`100svh`) still image, centered outline play button + "Watch Trailer", bottom bar of genre · title · year. Trailer plays in place.
- **Poster aspect:** enforced `2 / 3` via `.poster-container` (object-fit cover).
- **Border radius:** Sharp. Effectively `0` on buttons, cards, and sections. Corners stay square by default — this is a brand signal, not an oversight. Only the nav logo chip and the play circle are rounded.

## Motion
- **Approach:** Intentional. Reveal-on-scroll (fade + upward translate via `.reveal` / `.reveal-grid` toggling `.visible`), staggered for grids. No decorative or scroll-jacking motion.
- **Easing:** `--ease-cinematic: cubic-bezier(0.25, 0.46, 0.45, 0.94)` for reveals/moves; `ease` for simple hovers.
- **Duration:** `--duration-fast 200ms` (hovers) · `--duration-base 400ms` (reveals) · `--duration-slow 700ms` (hero/large).

## Buttons
- `.btn` base: Inter, `0.8rem`, `600`, uppercase, `0.12em`, square, `0.85rem 2rem`.
- `.btn--primary` — filled red, white text (works on any bg; hover → `#9E3222`).
- `.btn--ghost` — transparent, white text/border (for dark sections).
- `.btn--ghost-dark` — transparent, ink text/border (for white sections).
- `.btn--cta-white` / `.btn--cta-outline` — for use on red section backgrounds.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-10 | Documented existing design system as-is | Codified the mature cinematic black/white/red + EB Garamond/Inter system already in `global.css`/`typography.css` as the source of truth. Created by /design-consultation. |
