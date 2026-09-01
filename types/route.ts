import type { Route } from 'next';

/**
 * Href of an article page (`/<YYYY-MM-DD>/<slug>`).
 */
export type ArticleRoute = Route<`/${string}/${string}`>;
