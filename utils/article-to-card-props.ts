import type { ArticleMeta } from '@/types';
import { articleHref } from './article-href';
import { categoryToAccent } from './category-to-accent';
import { categoryToLabel } from './category-to-label';

export const articleToCardProps = (article: ArticleMeta) => {
  return {
    href: articleHref({ date: article.date, slug: article.slug }),
    title: article.title,
    excerpt: article.excerpt,
    category: categoryToLabel[article.category],
    image: { src: article.image, alt: article.title },
    accent: categoryToAccent[article.category]
  };
};
