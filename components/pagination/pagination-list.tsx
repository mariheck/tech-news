import classNames from 'classnames';
import { buildPaginationSlots } from './build-pagination-slots';
import { PaginationLink } from './pagination-link';
import type { PaginationPageDetails, PaginationSize } from './types';

type PaginationListProps<RouteType extends string> = {
  size: PaginationSize;
  pagesCount: number;
  currentPage: number;
  getPageDetails: (page: number) => PaginationPageDetails<RouteType>;
  className?: string;
};

export const PaginationList = <RouteType extends string>({
  size,
  pagesCount,
  currentPage,
  getPageDetails,
  className
}: PaginationListProps<RouteType>) => {
  const paginationSlots = buildPaginationSlots(pagesCount, currentPage, size);

  return (
    <ul
      className={classNames(
        'flex flex-nowrap items-center justify-center',
        className
      )}
    >
      {paginationSlots.map((slot, index) =>
        slot === 'gap' ? (
          <li
            key={`gap-${index}`}
            aria-hidden='true'
            className={classNames(
              'inline-flex size-8 items-center justify-center',
              'font-mono text-xs text-secondary select-none'
            )}
          >
            …
          </li>
        ) : (
          <li key={`page-${slot}`}>
            <PaginationLink
              page={slot}
              {...getPageDetails(slot)}
              isSelected={slot === currentPage}
            />
          </li>
        )
      )}
    </ul>
  );
};
