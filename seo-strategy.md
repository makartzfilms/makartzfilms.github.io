# MakArtz Films — SEO Strategy

**Living document. Last updated: March 29, 2026.**
This file is the authoritative SEO reference for every page build in this project. Every decision documented here must be followed in subsequent build steps. Update this document when decisions change.

---

## A1. Keyword & Audience Research

### Keyword Clusters and Page Ownership

#### Cluster 1: Independent Film Agency Identity

**Primary keyword:** `independent film agency Winter Springs FL`
**Search intent:** Navigational / Commercial Investigation
**Volume estimate:** Low-Medium (300–1,000/mo)
**Difficulty:** Medium-High (FL entertainment market is contested)
**Page:** Homepage (`/`) + About (`/about`)

Secondary / long-tail keywords:
- "indie film agency Florida"
- "independent film agency New York"
- "what does a film agency do"
- "film agency vs production company"
- "arthouse film agency United States"

**Content gap flagged:** No FL-based indie film agency is publishing editorial content that defines what an "independent film agency" is vs. a studio, talent agency, or PR firm. The term itself is under-claimed in search. Owning this definitional content is a high-priority Journal opportunity.

**Competitive landscape:** Yelp listings, ProductionHub directory, individual production companies with weak SEO dominate. A structured site with schema and E-E-A-T can outrank all of them.

---

#### Cluster 2: Script / Film Submission (Transactional)

**Primary keyword:** `submit film to distributor`
**Search intent:** Transactional (high commercial intent)
**Volume estimate:** Low-Medium (500–2,000/mo across variants)
**Difficulty:** Low-Medium
**Page:** Submit (`/submit`)

Secondary / long-tail keywords:
- "submit screenplay indie production company"
- "submit script to film agency"
- "production companies accepting unsolicited scripts"
- "how to submit your film for distribution"
- "film submission requirements distribution"

**Content gap flagged:** No working indie film agency has a clear submission page that combines transactional clarity with editorial voice explaining acquisition philosophy. Most search results are third-party aggregators (unsolicitedscripts.com, Backstage).

---

#### Cluster 3: Film Festival Strategy (Low Competition — High Priority)

**Primary keyword:** `film festival strategy consultant`
**Search intent:** Commercial Investigation / Transactional
**Volume estimate:** Very Low (100–500/mo)
**Difficulty:** Very Low (almost no competition for this exact phrase)
**Page:** About (`/about`) and future `/services/festival-strategy`

Secondary / long-tail keywords:
- "indie film festival submission strategy"
- "how to build a film festival calendar"
- "film festival consulting Florida"
- "which film festivals are worth submitting to"
- "Sundance strategy for indie filmmakers"

**Content gap flagged:** No FL-based agency is explicitly positioning as a festival strategy consultant. This is a winnable niche with zero competition from established brands. Prioritize Journal content in the `Festivals` category.

---

#### Cluster 4: Film Distribution (Highest Volume — Long Game)

**Primary keyword:** `how to get your indie film distributed`
**Search intent:** Informational (filmmaker in post-production or festival phase)
**Volume estimate:** High (10,000–50,000/mo across variants)
**Difficulty:** High (IndieFilmHustle, Celtx, No Film School, Film Independent dominate at DA 50–80+)
**Page:** Journal pillar post (`/journal/how-to-distribute-your-indie-film`) + Films catalog (`/films`)

Secondary / long-tail keywords:
- "indie film distribution guide"
- "arthouse film distributor"
- "film sales agent explained"
- "VOD distribution for independent films"
- "how to negotiate a distribution deal"

**Content gap flagged:** All ranking content is generic listicle format. No agency publishes this content from a working practitioner perspective. The first-person, consultant-voice angle on distribution is completely absent. MakArtz's moat is specific, real experience — name actual distributors, real timelines, actual deal structures.

---

#### Cluster 5: Film Financing & Grants (High Volume — Trust Required)

**Primary keyword:** `film financing and grants`
**Search intent:** Informational (filmmaker in development phase)
**Volume estimate:** High (combined variants reach 20,000–100,000/mo)
**Difficulty:** High (FilmFreeway, StudioBinder, No Film School, Film Independent dominate)
**Page:** Journal pillar post + future `/resources/film-grants`

Secondary / long-tail keywords:
- "indie film grants 2026"
- "how to write a film grant proposal"
- "fiscal sponsorship for filmmakers"
- "film tax incentives by state"
- "how to finance your independent film"

**Content gap flagged:** Funding databases are well-covered. No agency publishes content from the perspective of "how to strategically position a film for grant funding." The application strategy angle is unclaimed.

---

#### Cluster 6: Independent Filmmaker Resources (Broad Awareness)

**Primary keyword:** `independent filmmaker resources`
**Search intent:** Informational (filmmaker building toolkit)
**Volume estimate:** Medium-High (5,000–15,000/mo)
**Difficulty:** High (Sundance, No Film School, StudioBinder dominate)
**Page:** Journal + future `/resources`

Secondary / long-tail keywords:
- "filmmaker tools and resources"
- "indie film production resources"
- "free resources for independent filmmakers"
- "film production software for indie filmmakers"
- "festival submission resources"

**Content gap flagged:** All ranking content is uncurated or generic. No agency publishes a curated, opinionated resource list with practitioner commentary. Curation + context is the differentiator.

---

### Page-Level Keyword Summary

| Page | Primary Keyword | Keyword Intent |
|---|---|---|
| `/` | independent film agency Winter Springs FL | Navigational / Commercial |
| `/films` | arthouse film catalog independent cinema | Navigational / Discovery |
| `/about` | about MakArtz Films independent film agency | Navigational / Trust |
| `/journal` | independent filmmaker resources blog | Informational |
| `/submit` | submit film to distributor | Transactional |
| `/contact` | contact independent film agency Winter Springs FL | Local / Transactional |

---

## A2. Journal Content Strategy

### Rationale for Depth-Over-Volume Approach

MakArtz Films competes against editorial brands with DA 50–80+ (IndieFilmHustle, Sundance, No Film School). Volume cannot win in this landscape. The strategy is fewer, longer, more authoritative posts written from a practitioner voice — a working film agency, not a content mill.

### Confirmed Journal Categories (5)

These are the official category taxonomy used in `src/content/config.ts`.

#### 1. `Festivals`
**Rationale:** Film festival strategy is the single lowest-competition, highest-differentiation keyword cluster available to MakArtz. No FL-based agency is publishing authoritative festival strategy content. MakArtz's direct experience attending and programming festivals is the moat. Attracts filmmakers in the production and post-production phases — high-value audience.

**Target topics:** Submission strategies, festival tier analysis, how to build a festival calendar, international vs. domestic circuits, press strategy at festivals, case studies from films MakArtz has shepherded through the festival circuit.

#### 2. `Distribution`
**Rationale:** Highest search volume in the independent film space. Attracts filmmakers at the most commercially intent-rich moment of their journey (post-production, post-festival). MakArtz's practitioner angle is a clear differentiator against generic listicle content. Supports the `/submit` conversion page directly.

**Target topics:** Sales agents explained, VOD aggregators compared, theatrical distribution for indie films, how to submit to distributors, what distributors look for, arthouse distributor guide (MUBI, Film Movement, Fandor, Kino Lorber).

#### 3. `Filmmaking`
**Rationale:** High search volume in the broader filmmaker community. Craft content — script development, production, post-production — establishes MakArtz as a full-spectrum agency, not just a distributor. Supports E-E-A-T by demonstrating on-set, in-the-field experience.

**Target topics:** Script development process, working with a director on a first feature, production design for micro-budget films, post-production workflow, color grading for arthouse films.

#### 4. `Interviews`
**Rationale:** Filmmaker interview content is a primary E-E-A-T and backlink signal. Named filmmakers with IMDb credits lend third-party authority. Interviews are inherently linkable — interview subjects share them, film publications cite them. Also serves topical authority by associating MakArtz with recognized names in independent cinema.

**Target topics:** Conversations with directors MakArtz has worked with, emerging filmmakers on the festival circuit, distributors and sales agents, cinematographers, composers, editors working in the indie space.

#### 5. `Industry`
**Rationale:** Broader audience (industry professionals, not just filmmakers). Market trends, business of film, streaming landscape analysis — captures informational searchers earlier in the funnel. Establishes MakArtz as a credible industry voice beyond just production/distribution. Important for topical authority signals in Google's entity understanding of the site.

**Target topics:** Streaming landscape for indie films, theatrical exhibition trends, the role of AI in film production, global co-production trends, film market analysis (Cannes Marché, AFM, EFM), grant funding landscape changes.

---

## A3. JSON-LD Schema Architecture

### Homepage (`/`)

**Type:** `Organization`
**Decision:** Use `Organization`, NOT `LocalBusiness`. MakArtz Films is a creative agency with national (Winter Springs, FL) reach, not a storefront. `LocalBusiness` would unnecessarily constrain the entity to a single location.

**Note on `ProductionCompany`:** `productionCompany` in Schema.org is a **property**, not a type. It is used within `Movie`, `TVSeries`, and `VideoObject` schemas to point to an `Organization`. MakArtz Films' entity schema correctly uses `@type: Organization`. The `productionCompany` property is used in individual Film pages to back-link to this organization entity. This creates a semantic relationship that is explicit for both Google and AI systems.

Fields implemented: `name`, `url`, `logo`, `description`, `address` (Winter Springs, FL), `contactPoint`, `sameAs` (Instagram, Vimeo, IMDb, LinkedIn).

---

### Individual Film Pages (`/films/[slug]`)

**Type:** `Movie`
**Decision:** `Movie` is correct. Do NOT use `CreativeWork` — `Movie` is the specific type and generates richer SERP features (including potential for rich results on name search).

Fields: `name`, `director` (Person), `datePublished` (year as string), `genre`, `description`, `image`, `productionCompany` (Organization → MakArtz Films), `sameAs` (IMDb URL), `potentialAction` (WatchAction array for streaming links if present).

---

### Journal Posts (`/journal/[slug]`)

**Type:** `BlogPosting`
**Decision:** `BlogPosting` is the semantically correct subtype of `Article` for an editorial blog. NOT `Article` (which Google associates with news/magazine content) and NOT `NewsArticle`.

Fields: `headline`, `description`, `author` (Person), `datePublished`, `dateModified`, `image`, `publisher` (Organization), `mainEntityOfPage`, `articleSection`.

---

### Director's Notes Posts (`/notes/[slug]`)

**Type:** `Article` with `@type: ["Article", "OpinionNewsArticle"]`
**Decision:** Director's Notes is a personal editorial column — first-person, opinionated, tied to specific films and industry experience. `OpinionNewsArticle` is the correct subtype for this. Using both types in an array is valid JSON-LD.

Fields: Same as BlogPosting, plus `articleSection` (category).

---

### Team Page (`/team`)

**Type:** `WebPage`
**Decision:** Team page schema uses `WebPage` as the container. Individual team members would use embedded `Person` schema when the team page is built out (Step 2+).

`Person` fields per team member: `name`, `jobTitle`, `worksFor` (Organization → MakArtz Films), `sameAs` (IMDb, LinkedIn where available).

---

### About Page (`/about`)

**Type:** `AboutPage`
**Decision:** Semantic match. `mainEntity` points back to the Organization schema, creating an explicit entity relationship.

---

### Contact Page (`/contact`)

**Type:** `ContactPage`

---

### Submit Page (`/submit`)

**Decision:** No structured data. This is a pure conversion page, not a content page. Schema markup adds crawl overhead with no benefit here. FAQ schema may be added in a future step if a FAQ section is added to this page — FAQ schema on Submit would help AI systems surface answers to "how do I submit my film to MakArtz Films" type queries.

---

## A4. URL Slug & Permalink Strategy

### Films (`/films/[slug]`)

**Decision:** `/films/[kebab-case-title]` — no year in slug.

**Confirmed.** Year in URL creates maintenance issues if release year changes; year is expressed in page content and JSON-LD `datePublished`, not the URL. Clean slugs age better and avoid signaling staleness.

**Canonical:** `https://makartzfilms.com/films/[slug]`

**Example:** `/films/red-earth` (not `/films/2024/red-earth` or `/films/red-earth-2024`)

---

### Journal Posts (`/journal/[slug]`)

**Decision:** `/journal/[kebab-case-title]` — no dates in URL.

**Confirmed.** Date-based URLs (`/journal/2025/01/title`) are harder to maintain and signal content age to users in SERPs. Evergreen content performs better without visible dates in URL. Date is expressed in page metadata and JSON-LD.

**Example:** `/journal/how-to-distribute-your-indie-film` (not `/journal/2025/01/how-to-distribute-your-indie-film`)

---

### Director's Notes (`/notes/[slug]`)

**Decision:** `/notes/[kebab-case-title]` — same rationale as journal.

**Confirmed.** The section name "From the Cutting Room" is used in navigation for brand voice, but the URL path is `/notes/` for brevity and clarity.

---

### Team Members

**Decision:** No individual team member pages. Team members appear on `/team` only.

**SEO note:** Individual team member pages (`/team/firstname-lastname`) would have E-E-A-T value if team members have significant industry credits. Flag for reconsideration in a future step if any team member warrants a dedicated page for their IMDb credits, filmmaker profile, or published writing.

---

## A5. Index / Noindex Decisions

| URL | Decision | Rationale |
|---|---|---|
| `/` | **index** | Primary landing page |
| `/films` | **index** | Catalog discovery |
| `/films/[slug]` | **index** | Primary content pages; Movie schema generates rich results |
| `/journal` | **index** | Content hub; linked from sitemap |
| `/journal/[slug]` | **index** | Primary SEO traffic pages; BlogPosting schema |
| `/notes` | **index** | Editorial column; builds E-E-A-T and brand authority |
| `/notes/[slug]` | **index** | First-person practitioner content; Article/Opinion schema |
| `/team` | **index** | Builds E-E-A-T — real people, real credentials, IMDb links |
| `/about` | **index** | Authority anchor; AboutPage + Organization schema |
| `/contact` | **index** | Local SEO signal; ContactPage schema |
| `/submit` | **index** | Transactional intent — "submit film to distributor" has search value |
| `/privacy` | **noindex** | No SEO value; adds crawl noise |
| `404.html` | **noindex** | Error page; not applicable to crawl |

**Implementation:** `noindex` is controlled by the `noindex` prop on `BaseHead.astro`, which passes it to `OpenGraph.astro`. When `noindex={true}`, the component renders `<meta name="robots" content="noindex, nofollow" />`.

---

## A6. E-E-A-T Signals

Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework applies to all competitive queries as of 2025–2026 core updates. Anonymous content is actively penalized in competitive SERPs.

### Implementation Checklist

**Experience:**
- Every Journal and Notes post must demonstrate first-hand practitioner experience — not summarized research, but lived knowledge
- Specific details required: name actual festivals, real distributors, actual timeline expectations
- Author bylines on every post with verifiable industry credentials (IMDb credits, film credits, festival wins)

**Expertise:**
- Author `authorSlug` frontmatter field links to the `/team` page — this is the E-E-A-T chain
- Each team member bio should list: films worked on, festivals attended/won, distributors worked with, years of experience
- Team page Person schema includes `sameAs` pointing to IMDb and LinkedIn profiles

**Authoritativeness:**
- External mentions: IndieWire, No Film School, Filmmaker Magazine, Variety, festival press coverage, podcast appearances
- Consistent NAP (Name/Address/Phone) across IMDb Pro, LinkedIn, Film Independent, and industry directories
- `sameAs` array in Organization schema explicitly connects the entity to known external profiles

**Trustworthiness:**
- HTTPS (enforced via GitHub Pages + CNAME)
- Privacy policy at `/privacy` (noindex — does not need SEO value, just needs to exist)
- Contact page with physical address and email
- `datePublished` and `dateModified` in both frontmatter and JSON-LD on all posts
- Do not make unsubstantiated claims — all awards, credits, and festival wins must be verifiable

### Required Frontmatter for E-E-A-T Compliance

Every Journal and Notes post must include:
```yaml
author: "Full Name"
authorSlug: "firstname-lastname"
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD  # add when content is updated
```

---

## A7. Core Web Vitals — Implementation Rules

These rules apply to every component and page built in subsequent steps.

### LCP (Largest Contentful Paint) — Target: < 2.5s

- **Hero images** must use `loading="eager"` + `fetchpriority="high"` on the LCP element (typically the first above-fold image)
- All other (below-fold) images use `loading="lazy"`
- Google Fonts loaded with `<link rel="preconnect">` and `font-display=swap` (implemented in BaseHead)
- Embedded Vimeo/YouTube: always use facade pattern (static thumbnail that loads embed on click) — never auto-load iframes above the fold
- Serve images in WebP or AVIF format; compress to <150KB for above-fold images

### CLS (Cumulative Layout Shift) — Target: < 0.1

- All `<img>` tags **must** have explicit `width` and `height` attributes — enforced without exception
- Film poster images **must** use the `.poster-container` CSS class (2:3 aspect ratio container in `global.css`)
- Web fonts use `font-display: swap` to reserve space and prevent layout shift on font load
- No dynamically injected content above the fold after initial render

### INP (Interaction to Next Paint) — Target: < 200ms

- Astro ships zero JS by default — this is handled by stack choice
- Custom cursor (`Cursor.astro`) uses `passive: true` on mousemove event listener
- Scroll-reveal IntersectionObserver (`BaseHead.astro`) is non-blocking
- Nav scroll handler uses `{ passive: true }` on scroll event
- All non-critical JS is deferred (no `defer` needed in Astro — scripts in `.astro` files are automatically deferred)

### Mobile-First

- All layouts designed mobile-first using CSS with min-width breakpoints
- Touch targets minimum 44×44px for all interactive elements (nav links, buttons, CTAs)
- `@media (pointer: coarse)` hides custom cursor on touch devices (implemented in `Cursor.astro`)

---

## A8. GEO (Generative Engine Optimization)

As of early 2025, AI search engines (ChatGPT Search, Perplexity, Google AI Overviews) are a significant and growing source of content discovery. Between March–April 2025, Google AI Overview presence increased 528% for entertainment queries. These guidelines apply to all content written for MakArtz Films.

### Universal GEO Rules for Content Contributors

1. **Direct answer in opening paragraph.** Every article and page must open with a clear, standalone answer to the implied question in the first 40–60 words. AI systems extract opening sentences most frequently. Do not bury the lede.

2. **Fact density.** Include a verifiable statistic or specific data point every 150–200 words. Cited statistics increase AI citation likelihood by ~34%. For film content: box office figures, festival acceptance rates, grant amounts, streaming platform subscriber counts, production budget ranges.

3. **Structured formatting.** Use H2/H3 headers as direct questions ("What Is a Film Sales Agent?"). Use numbered lists for processes. Use definition-style blocks for industry terms. AI systems prefer modular, extractable content.

4. **Cite external sources.** Link out to Film Independent, Sundance, IndieWire, SAG-AFTRA, WGA, MPAA where relevant. This signals trustworthiness to AI systems. External linking is not harmful to SEO — it strengthens topical authority.

5. **Expert attribution.** Quote named industry professionals with their full name and title. This increases AI citation visibility.

6. **Content freshness.** Update cornerstone posts annually. Include the current year in titles where relevant ("The Indie Filmmaker's Distribution Guide — 2026 Edition"). AI platforms demonstrably prefer recently-dated content.

7. **Schema comprehensiveness.** Implement all schema types fully — do not omit optional fields. Structured data directly aids AI system comprehension and improves citation likelihood (confirmed by Google and Microsoft Bing product teams, 2025).

8. **FAQ schema.** Add FAQ schema to the About and Submit pages when built out. FAQ schema directly feeds AI Overview answers. Write FAQ answers in 40–80 words each — the ideal AI extraction length.

### Platform-Specific Notes

**ChatGPT Search:** Favors encyclopedic, definitional, structured content. Every core industry term MakArtz uses (film agency, sales agent, distribution consultant, fiscal sponsorship) should have a clear definition in at least one piece of content.

**Perplexity:** Rewards recency and community citations. Authentic, helpful participation in r/Filmmakers, r/Screenwriting, r/TrueFilm, and r/IndieFilm creates citation pathways — Perplexity cites Reddit in ~47% of responses. Do not spam; add real, specific value.

**Google AI Overviews:** Prioritizes existing top-10-ranking content. Traditional SEO and GEO are tightly coupled. Rank first, get cited. Schema markup is confirmed to give direct advantage in AI comprehension.

---

## Competitive Landscape Summary

No identified FL-based indie film agency competitor is:
- Publishing a journal with consistent topical depth
- Using structured schema data correctly
- Targeting long-tail keywords from a practitioner perspective
- Optimizing for AI citation (GEO)
- Building topic clusters around distribution, financing, or festival strategy

The landscape is dominated by either production companies with no editorial content, or third-party directories (Yelp, ProductionHub). MakArtz Films has an open runway to establish topical authority in this space with consistent, well-structured content over a 6–12 month publishing cycle.

---

## Content Priority Matrix

| Topic | Intent | Volume | Difficulty | Priority | Target URL |
|---|---|---|---|---|---|
| Indie film distribution guide | Informational | High | High | P1 — Pillar Post | `/journal/indie-film-distribution-guide` |
| Film festival strategy | Commercial | Low | Very Low | P1 — Service + Journal | `/journal/film-festival-submission-strategy` |
| Submit film to distributor | Transactional | Low-Med | Low | P1 — CTA Page | `/submit` |
| Independent film agency LA | Nav/Commercial | Low-Med | Medium | P1 — Homepage | `/` |
| Arthouse film distributor | Nav/Commercial | Low-Med | Low-Med | P2 — Journal | `/journal/arthouse-film-distributors-guide` |
| Film financing & grants | Informational | High | High | P2 — Pillar Post | `/journal/film-financing-grants-guide` |
| Independent filmmaker resources | Informational | Med-High | High | P2 — Resources | `/journal/filmmaker-resources` |

---

*This document governs all SEO implementation decisions. Do not deviate without updating this file and documenting the rationale.*
