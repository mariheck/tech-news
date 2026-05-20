import type { Article } from '@/types';

export const articleToCardProps = (article: Article) => ({
  href: '#',
  title: article.title,
  excerpt: article.excerpt,
  image: { src: article.images[0], alt: article.title }
});
