import type { ArticleMeta } from '@/types';

export const articleToCardProps = (article: ArticleMeta) => ({
  href: '#',
  title: article.title,
  excerpt: article.excerpt,
  image: { src: article.image, alt: article.title }
});
