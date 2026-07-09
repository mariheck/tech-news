export const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

// Absolute origin used for metadataBase, canonical URLs, the sitemap and robots.
// PLACEHOLDER: set NEXT_PUBLIC_SITE_URL in production to the real domain.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tech-news.example.com';
