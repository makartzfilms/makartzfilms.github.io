# MakArtz Films

**Stack:** Astro (static) · GitHub Pages · `@astrojs/sitemap`
**Domain:** makartzfilms.com · **Repo:** makartzfilms/makartzfilms.github.io · **Branch:** main

---

## Stack Rationale

| Decision | Reason |
|---|---|
| **Astro** | Zero JS shipped by default — optimal Core Web Vitals (direct ranking signal) |
| **Content Collections + Zod** | Type-safe Markdown for films, journal posts, director's notes, and team members — add new content with only a Markdown file |
| **`@astrojs/sitemap`** | Auto-generates `sitemap-index.xml` at build time |
| **`withastro/action`** | Official GitHub Action deploys to GitHub Pages with zero configuration |
| **Manual `<head>` via BaseHead** | Precise control over meta, OG, JSON-LD per page and per content type |
| Hugo (rejected) | Fast but Go templates are harder to maintain for a design-heavy custom site |
| Eleventy (rejected) | Great DX, but requires more manual wiring at this project scale |
| Plain HTML (rejected) | Not maintainable across 11+ pages + dynamic content collections |

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built output locally
```

---

## How to Add a New Film

Create a file at `src/content/films/[kebab-case-title].md`. Required frontmatter:

```yaml
---
title: "The Title"
director: "Director Name"
year: 2025
genre: ["Drama", "Independent"]
logline: "One sentence. Max 25 words."
synopsis: "Full synopsis. 150–300 words."
posterImage: "/images/films/film-slug/poster.jpg"
featured: false
---
```

Optional fields: `trailerUrl`, `streamingLinks`, `festivalHistory`, `cast`, `crew`, `runtime`, `language`, `imdbUrl`

Poster images go in `public/images/films/[slug]/`. Dimensions: 800×1200px minimum (2:3 aspect ratio).

---

## How to Add a Team Member

Create a file at `src/content/team/[firstname-lastname].md`. Required frontmatter:

```yaml
---
name: "First Last"
title: "Job Title"
bio: "Biography in plain text."
order: 1
---
```

Optional fields: `headshotImage`, `headshotAlt`, `imdbUrl`, `personalSiteUrl`, `linkedinUrl`

Lower `order` numbers appear first on the Team page.

---

## How to Publish a Journal Post

Create a file at `src/content/journal/[kebab-case-title].md`:

```yaml
---
title: "Post Title"
author: "Author Name"
authorSlug: "firstname-lastname"    # matches team member filename
pubDate: 2025-03-29
description: "Meta description. Max 160 characters. Must include target keyword."
category: "Distribution"            # Festivals | Distribution | Filmmaking | Interviews | Industry
draft: false                        # Set to true while writing; false to publish
---
```

Optional fields: `updatedDate`, `featuredImage`, `featuredImageAlt`, `tags`

**Categories:** `Festivals` · `Distribution` · `Filmmaking` · `Interviews` · `Industry`

**Content guidelines:** Open with a direct answer to the implied question in the first 40–60 words. See `seo-strategy.md` for GEO and E-E-A-T requirements.

---

## How to Publish a Director's Note

Create a file at `src/content/notes/[kebab-case-title].md`:

```yaml
---
title: "Note Title"
author: "Author Name"
authorSlug: "firstname-lastname"
pubDate: 2025-03-29
description: "Meta description. Max 160 characters."
category: "Development"             # Free-form string for notes
draft: false
---
```

Optional fields: `updatedDate`, `featuredImage`, `featuredImageAlt`, `relatedFilm` (slug of related film)

---

## SEO Notes

All SEO decisions — keywords, schema architecture, URL strategy, E-E-A-T signals, Core Web Vitals implementation rules, GEO guidelines — are documented in [seo-strategy.md](seo-strategy.md).

**Key rules for every content contributor:**
- `description` frontmatter field = meta description. Max 160 characters. Include target keyword.
- All images must have explicit `width` and `height` attributes to prevent CLS.
- Film poster images must use the `.poster-container` class (2:3 aspect ratio).
- Do not publish posts with `draft: true` — they will not appear in the sitemap or indexes.

---

## Deployment

Deploying is automatic: push to `main` → GitHub Actions builds and deploys to GitHub Pages.

The workflow is at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

**Manual trigger:** Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow."

---

## DNS Setup

Point `makartzfilms.com` to GitHub Pages:

**A Records** (root domain):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (www subdomain):
```
www → makartzfilms.github.io
```

After DNS propagates (up to 48h):

1. GitHub repo → **Settings** → **Pages**
2. Set **Custom domain** → `makartzfilms.com`
3. Check **Enforce HTTPS** ✓

The `public/CNAME` file in this repo contains `makartzfilms.com` and is committed — GitHub Pages reads it automatically to configure the custom domain on deploy.
