const SITE_URL = 'https://makartzfilms.com';
const ORG_NAME = 'MakArtz Films';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: ORG_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/og-default.jpg`,
  },
  description: 'An independent film agency based in Los Angeles and New York.',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@makartzfilms.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.instagram.com/makartzfilms',
    'https://vimeo.com/makartzfilms',
    'https://www.imdb.com/company/makartzfilms',
    'https://www.linkedin.com/company/makartzfilms',
  ],
};

export function movieSchema(film: {
  title: string;
  director: string;
  year: number;
  genre: string[];
  description: string;
  posterImage: string;
  slug: string;
  imdbUrl?: string;
  streamingLinks?: { label: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: film.title,
    url: `${SITE_URL}/films/${film.slug}`,
    director: {
      '@type': 'Person',
      name: film.director,
    },
    datePublished: String(film.year),
    genre: film.genre,
    description: film.description,
    image: film.posterImage,
    productionCompany: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: SITE_URL,
    },
    ...(film.imdbUrl && { sameAs: film.imdbUrl }),
    ...(film.streamingLinks?.length && {
      potentialAction: film.streamingLinks.map((link) => ({
        '@type': 'WatchAction',
        target: link.url,
      })),
    }),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  updatedDate?: Date;
  featuredImage?: string;
  slug: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.pubDate.toISOString(),
    dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
    image: post.featuredImage ?? `${SITE_URL}/og-default.jpg`,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-default.jpg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/journal/${post.slug}`,
    },
    ...(post.section && { articleSection: post.section }),
  };
}

export function articleSchema(note: {
  title: string;
  description: string;
  author: string;
  pubDate: Date;
  updatedDate?: Date;
  featuredImage?: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'OpinionNewsArticle'],
    headline: note.title,
    description: note.description,
    author: {
      '@type': 'Person',
      name: note.author,
    },
    datePublished: note.pubDate.toISOString(),
    dateModified: (note.updatedDate ?? note.pubDate).toISOString(),
    image: note.featuredImage ?? `${SITE_URL}/og-default.jpg`,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/notes/${note.slug}`,
    },
    articleSection: note.category,
  };
}
