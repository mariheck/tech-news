import classNames from 'classnames';
import { PaginationList } from './pagination-list';
import { PaginationPrevNext } from './pagination-prev-next';
import type { PaginationPageDetails } from './types';

type PaginationProps<RouteType extends string> = {
  pagesCount: number;
  currentPage: number;
  getPageDetails: (page: number) => PaginationPageDetails<RouteType>;
  'aria-label'?: string;
  className?: string;
};

export const Pagination = <RouteType extends string>({
  pagesCount,
  currentPage,
  getPageDetails,
  'aria-label': ariaLabel,
  className
}: PaginationProps<RouteType>) => {
  if (pagesCount <= 1 || currentPage < 1 || currentPage > pagesCount)
    return null;

  const previousPage = currentPage > 1 ? currentPage - 1 : undefined;
  const nextPage = currentPage < pagesCount ? currentPage + 1 : undefined;

  return (
    <nav
      aria-label={ariaLabel ?? 'Navigation entre les pages'}
      className={classNames(
        'grid grid-cols-[1fr_auto_1fr] items-center gap-7 md:gap-9 lg:gap-12',
        className
      )}
    >
      {!!previousPage && (
        <PaginationPrevNext
          direction='previous'
          {...getPageDetails(previousPage)}
          className='justify-self-end'
        />
      )}
      <PaginationList
        size='sm'
        pagesCount={pagesCount}
        currentPage={currentPage}
        getPageDetails={getPageDetails}
        className='col-start-2 justify-self-center lg:hidden'
      />
      <PaginationList
        size='md'
        pagesCount={pagesCount}
        currentPage={currentPage}
        getPageDetails={getPageDetails}
        className='col-start-2 justify-self-center max-lg:hidden'
      />
      {!!nextPage && (
        <PaginationPrevNext
          direction='next'
          {...getPageDetails(nextPage)}
          className='justify-self-start'
        />
      )}
    </nav>
  );
};
