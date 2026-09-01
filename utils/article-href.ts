import type { ArticleMeta, ArticleRoute } from '@/types';
import { toIsoDay } from './to-iso-day';

type Params = Pick<ArticleMeta, 'date' | 'slug'>;

export const articleHref = ({ date, slug }: Params): ArticleRoute => {
  const formattedDate = toIsoDay(date);
  const href: ArticleRoute = `/${formattedDate}/${slug}`;

  return href;
};
