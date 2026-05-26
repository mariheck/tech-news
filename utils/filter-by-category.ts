import type { ArticleMeta, CategorySlug } from '@/types';

export const filterByCategory = (
  articles: ArticleMeta[],
  slug: CategorySlug | undefined
): ArticleMeta[] => {
  if (slug === undefined) return articles;
  return articles.filter((article) => article.category === slug);
};
