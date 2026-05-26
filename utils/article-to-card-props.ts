import type { ArticleMeta } from '@/types';
import { categoryToAccent } from './category-to-accent';

export const articleToCardProps = (article: ArticleMeta) => ({
  href: '#',
  title: article.title,
  excerpt: article.excerpt,
  image: { src: article.image, alt: article.title },
  accent: categoryToAccent[article.category]
});
