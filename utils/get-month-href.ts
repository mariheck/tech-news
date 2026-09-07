import type { ArchiveMonthRoute, CategorySlug } from '@/types';

type Params = {
  month: string;
  category?: CategorySlug;
};

export const getMonthHref = ({
  month,
  category
}: Params): ArchiveMonthRoute => {
  const href: ArchiveMonthRoute = category
    ? `/archives/${month}?cat=${category}`
    : `/archives/${month}`;

  return href;
};
