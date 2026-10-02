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
- **Source:** *3J Pictures Brand Book 2026* (Júpiter × Volume Productions). Logo, font, palette and visual elements below come from it; do not deviate without explicit approval.
- **Direction:** Cinematic editorial. Blackboard canvas, full-bleed film imagery, deep brand reds, clean geometric sans headlines.
- **Decoration level:** Minimal. Typography, imagery and the brand star do the work. The arch-and-star pattern is used only as a faint texture on Wrath brand panels. No gradients.
- **Mood:** Dark, premium, and moody. The site should feel like a theater going quiet before the lights drop.

## Logo
- **Files:** `src/assets/brand/lockup.svg` (horizontal, nav/footer), `mark.svg` (symbol only), `stacked.svg` (symbol over wordmark), `star.svg` (the four-point star). All use `fill="currentColor"`, so they take the text colour of their parent. Import them as components: `import Lockup from '../../assets/brand/lockup.svg'`.
- **Public copies:** `public/brand/star.svg` (CSS masks), `public/brand/pattern-white.svg` (tile), `public/brand/logo-512.png` (schema.org logo).
- **Approved colourways:** black on white, white on Wrath, white on Blackboard, white on dark photography, Wrath on white. Never another colour, never rotated, stretched, covered, or placed on a low-contrast background.
- **Clear space:** at least the height of the symbol on every side of the horizontal lockup.

## Typography
- **Typeface:** `Poppins` for everything: titles, body, UI, labels. Brand-book italic is Poppins Light Italic (300); use `<em>` inside `.display`/`.heading-1`/`.heading-2` for it.
- **Loading:** Google Fonts via `<link>` in `BaseHead.astro` (`Poppins:ital,wght@0,300..700;1,300;1,400`).
- **CSS vars:** `--font-display` and `--font-sans` both resolve to `'Poppins', system-ui, sans-serif`.
- **Scale (utility classes in `typography.css`):**
  - `.display`: 600, `clamp(2rem, 6vw, 5.5rem)`, line-height ~1.04, `-0.03em`
  - `.heading-1`: 600, `clamp(1.6rem, 3.2vw, 2.75rem)`, `-0.02em`
  - `.heading-2`: 600, `clamp(1.4rem, 2.7vw, 2.25rem)`, `-0.02em`
  - `.heading-3`: 500, `clamp(1.1rem, 1.8vw, 1.5rem)`
  - `.body-large`: `clamp(1rem, 1.1vw, 1.2rem)`
  - `.body`: `1rem`
  - `.eyebrow`: 600, uppercase, `0.18em`, led by a brand-red star. White on dark, Rose Madder on white (`.section--light` handles it).
  - `.caption`: `0.8rem`, `0.08em`
  - `.prose`: long-form body (film storylines, journal)

## Color
- **Palette (brand book):**
  - White `#FFFFFF` (`--white`)
  - Rose Madder Lake `#9B2727` (`--rose`, also `--red` / `--sienna` / `--amber`): primary accent **fill**. CTAs, active rules, stars, scrollbar, selection.
  - Wrath `#7C0A0A` (`--wrath`, also `--red-dark`): hover/pressed, full-bleed brand panels (marquee, home CTA).
  - Blackboard `#1C1C1C` (`--blackboard`, also `--ink`): site canvas.
- **Contrast rule:** the brand reds are only ~2:1 against Blackboard, so **never set red text on dark surfaces.** On dark, red appears as fills, underlines, rules and the star; text stays white. Red text is fine on white (Rose Madder is ~7:1 on white). Form error text on charcoal uses `#FF8A80`.
- **Dark surfaces:** `--ink #1C1C1C`, `--ink2 #232323`, `--ink3 #2A2A2A`, `--ink4 #383838`.
- **Light surfaces:** white `#ffffff` (`--parchment`/`--cream`), plus `--parchment3 #f0f0f0`.
- **Text on dark:** primary `#ffffff` · body `rgba(255,255,255,0.72)` · muted `rgba(255,255,255,0.58)`. (Tuned for WCAG AA; do not lower.)
- **Text on light:** primary `#1C1C1C` · body `rgba(28,28,28,0.78)` · muted `rgba(28,28,28,0.62)`.
- **Borders:** dark `rgba(255,255,255,0.1)` · light `rgba(28,28,28,0.12)`.
- **Focus ring:** `2px solid currentColor`, so it always contrasts with its own surface.
- **Theme:** This is a dark-first site. "Light mode" is not a user toggle; it's per-section (white sections punctuate the dark). Nav is transparent over heroes; on dark pages it uses `darkNav` (light links).

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
- `.btn` base: Poppins, `0.8rem`, `600`, uppercase, `0.12em`, square, `0.85rem 2rem`.
- `.btn--primary` — filled red, white text (works on any bg; hover → `#9E3222`).
- `.btn--ghost` — transparent, white text/border (for dark sections).
- `.btn--ghost-dark` — transparent, ink text/border (for white sections).
- `.btn--cta-white` / `.btn--cta-outline` — for use on red section backgrounds.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-10 | Documented existing design system as-is | Codified the mature cinematic black/white/red + EB Garamond/Inter system already in `global.css`/`typography.css` as the source of truth. Created by /design-consultation. |
| 2026-09-30 | Rebranded to the 3J Pictures Brand Book 2026 | New arch-and-star logo (inline SVG), Poppins replaces EB Garamond/Inter, palette → White / Rose Madder Lake / Wrath / Blackboard, star used for eyebrows/bullets, arch pattern on Wrath panels. Red text removed from dark surfaces for contrast. |
