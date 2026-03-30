import { defineCollection, z } from 'astro:content';

const films = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    director: z.string(),
    year: z.number(),
    genre: z.array(z.string()),
    logline: z.string(),
    synopsis: z.string(),
    posterImage: z.string(),
    trailerUrl: z.string().optional(),
    streamingLinks: z.array(z.object({
      label: z.string(),
      url: z.string()
    })).optional(),
    festivalHistory: z.array(z.string()).optional(),
    cast: z.array(z.string()).optional(),
    crew: z.array(z.object({
      role: z.string(),
      name: z.string()
    })).optional(),
    runtime: z.string().optional(),        // e.g. "1h 34m"
    language: z.string().default('English'),
    imdbUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorSlug: z.string(),             // links to team member
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    description: z.string().max(160),   // enforced meta description length
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    category: z.enum(['Festivals', 'Distribution', 'Filmmaking', 'Interviews', 'Industry']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorSlug: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    description: z.string().max(160),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    category: z.string(),
    relatedFilm: z.string().optional(),  // slug of related film
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    headshotImage: z.string().optional(),
    headshotAlt: z.string().optional(),  // always explicit for accessibility + SEO
    imdbUrl: z.string().optional(),
    personalSiteUrl: z.string().optional(),
    linkedinUrl: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { films, journal, notes, team };
