import type { ArticleMeta } from '@/types';
import { toIsoDay } from './to-iso-day';

type Params = Pick<ArticleMeta, 'date' | 'slug'>;

export const articleHref = ({ date, slug }: Params) => {
  const formattedDate = toIsoDay(date);
  const href = `/${formattedDate}/${slug}`;

  return href;
};
