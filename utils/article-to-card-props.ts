import type { ArticleMeta } from '@/types';
import { categoryToAccent } from './category-to-accent';
import { categoryToLabel } from './category-to-label';

export const articleToCardProps = (article: ArticleMeta) => {
  const date = article.date.toISOString().slice(0, 10);
  const href = `/${date}/${article.slug}`;
  return {
    href,
    title: article.title,
    excerpt: article.excerpt,
    category: categoryToLabel[article.category],
    image: { src: article.image, alt: article.title },
    accent: categoryToAccent[article.category]
  };
};
