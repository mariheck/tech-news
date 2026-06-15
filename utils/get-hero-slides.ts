import type { Article, ArticleMeta, CategorySlug } from '@/types';
import { listIssueDates } from './list-issue-dates';
import { loadIssue } from './load-issue';

const HERO_WEEKS = 5;

// The home hero shows one lead article per edition over the last HERO_WEEKS, newest
// first. With a category filter, each week contributes its highest-priority article of
// that category (first match in index.md order) — weeks without one are dropped, so the
// hero may show fewer than the available editions.
export const getHeroSlides = async (
  category?: CategorySlug
): Promise<ArticleMeta[]> => {
  const dates = (await listIssueDates()).slice(0, HERO_WEEKS);
  const issues = await Promise.all(dates.map((date) => loadIssue(date)));

  return issues
    .map((issue) =>
      category
        ? issue.articles.find((article) => article.category === category)
        : issue.articles[0]
    )
    .filter((article): article is Article => article !== undefined);
};
