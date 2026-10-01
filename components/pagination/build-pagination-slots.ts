import type { PaginationSize } from './types';

type Slot = number | 'gap';

const sizeToSlotCount: Record<PaginationSize, number> = {
  sm: 5,
  md: 7
};

const getRange = (startPage: number, endPage: number) => {
  const length = endPage - startPage + 1;
  const range = Array.from({ length }, (_, index) => startPage + index);
  return range;
};

export const buildPaginationSlots = (
  pagesCount: number,
  currentPage: number,
  size: PaginationSize
): Slot[] => {
  const slotCount = sizeToSlotCount[size];

  if (pagesCount <= slotCount) return getRange(1, pagesCount);

  const edge = (slotCount - 1) / 2;
  const lastEdge = pagesCount - edge + 1;

  if (currentPage <= edge || currentPage >= lastEdge) {
    const isLastHeadPage = currentPage === edge;
    const isFirstTailPage = currentPage === lastEdge;
    const head = edge + (isLastHeadPage ? 1 : 0) - (isFirstTailPage ? 1 : 0);
    return [
      ...getRange(1, head),
      'gap',
      ...getRange(pagesCount - slotCount + head + 2, pagesCount)
    ];
  }

  // In the middle, a gap hiding a single page shows that page instead.
  const siblings = (slotCount - 5) / 2;
  const first = currentPage - siblings;
  const last = currentPage + siblings;

  return [
    1,
    first === 3 ? 2 : 'gap',
    ...getRange(first, last),
    last === pagesCount - 2 ? pagesCount - 1 : 'gap',
    pagesCount
  ];
};
