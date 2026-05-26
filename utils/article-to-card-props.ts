import type { ArticleMeta } from '@/types';
import { categoryToAccent } from './category-to-accent';
import { categoryToLabel } from './category-to-label';

export const articleToCardProps = (article: ArticleMeta) => ({
  href: '#',
  title: article.title,
  excerpt: article.excerpt,
  badge: categoryToLabel[article.category],
  image: { src: article.image, alt: article.title },
  accent: categoryToAccent[article.category]
});
