---
name: MakArtz Films — Step 1 Complete
description: Status and architecture decisions from Step 1 of the 18-step MakArtz Films site build
type: project
---

Astro scaffold complete. `npm run build` passes cleanly. All 10 pages build to `dist/`.

**Stack:** Astro 6 (static) · @astrojs/sitemap · GitHub Pages · makartzfilms.com

**Why:** Zero JS by default for Core Web Vitals; Content Collections + Zod for type-safe Markdown; withastro/action for zero-config GitHub Pages deploy.

**Key architecture decisions:**
- Schema: Organization (not LocalBusiness), Movie, BlogPosting, Article+OpinionNewsArticle, AboutPage, ContactPage, WebPage
- Journal categories: Festivals, Distribution, Filmmaking, Interviews, Industry
- URL slugs: /films/[slug], /journal/[slug], /notes/[slug] — no dates, no years in URLs
- noindex: privacy page only; everything else indexed
- Fonts: EB Garamond (serif) + Syne (sans)
- Design tokens in src/styles/global.css — --black, --cream, --red, --muted, --border

**How to apply:** Step 2 and beyond build content pages on top of this scaffold. BaseLayout wraps all pages. SEO strategy is in seo-strategy.md — consult it for every page build.
