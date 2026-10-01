import type { Route } from 'next';

/**
 * Href of an article page (`/<YYYY-MM-DD>/<slug>`).
 */
export type ArticleRoute = Route<`/${string}/${string}`>;

/**
 * Href of an archive month page (`/archives/<YYYY-MM>`), optionally carrying
 * the active category as a search param.
 */
export type ArchiveMonthRoute = Route<`/archives/${string}`>;

/**
 * Href a listing page can point its own filters back at: a static route, or
 * one of the archive month routes.
 */
export type ListingRoute = Route | ArchiveMonthRoute;
