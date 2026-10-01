import { Pagination } from '@/components/pagination';
import type { CategorySlug } from '@/types';
import { formatMonth, getMonthHref } from '@/utils';

type MonthNavigationProps = {
  months: string[];
  currentMonth: string;
  activeCategory?: CategorySlug;
};

export const MonthNavigation = ({
  months, // `months` comes most-recent-first
  currentMonth,
  activeCategory
}: MonthNavigationProps) => {
  const chronologicalMonths = [...months].reverse(); // pages count from the oldest month

  const getPageDetails = (page: number) => {
    const month = chronologicalMonths[page - 1];
    return {
      href: getMonthHref({ month, category: activeCategory }),
      label: formatMonth(month)
    };
  };

  return (
    <Pagination
      pagesCount={chronologicalMonths.length}
      currentPage={chronologicalMonths.indexOf(currentMonth) + 1}
      getPageDetails={getPageDetails}
      aria-label='Naviguer entre les mois'
      className='pt-8 md:pt-12'
    />
  );
};
