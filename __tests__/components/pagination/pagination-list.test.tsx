import { PaginationList } from '@/components/pagination/pagination-list';
import { render, screen, within } from '@testing-library/react';
import type { Route } from 'next';
import { expect, test } from 'vitest';

// A search-param href keeps the fixture free of any real app route.
const pageHref = (page: number): Route => `?page=${page}`;

const commonProps = {
  size: 'md' as const,
  getPageDetails: (page: number) => ({
    href: pageHref(page),
    label: `libellé ${page}`
  })
};

// The gaps are aria-hidden, so the slots are read off the DOM rather than by role.
const slotLabels = (container: HTMLElement) =>
  [...container.querySelectorAll('li')].map((item) => item.textContent);

test('PaginationList marks the current page', () => {
  render(<PaginationList {...commonProps} pagesCount={3} currentPage={3} />);
  expect(
    screen.getByRole('link', { name: 'Page 3, libellé 3' })
  ).toHaveAttribute('aria-current', 'page');
});

test('PaginationList names each page by its number and label', () => {
  render(<PaginationList {...commonProps} pagesCount={3} currentPage={3} />);
  expect(
    screen.getByRole('link', { name: 'Page 2, libellé 2' })
  ).toBeInTheDocument();
});

test('PaginationList links each page to its href', () => {
  render(<PaginationList {...commonProps} pagesCount={3} currentPage={3} />);
  expect(
    screen.getByRole('link', { name: 'Page 2, libellé 2' })
  ).toHaveAttribute('href', '?page=2');
});

test('PaginationList lists every page when there are seven or fewer', () => {
  const list = render(
    <PaginationList {...commonProps} pagesCount={7} currentPage={1} />
  ).container;
  expect(within(list).getAllByRole('listitem')).toHaveLength(7);
});

test('PaginationList truncates a long list around the current page', () => {
  const { container } = render(
    <PaginationList {...commonProps} pagesCount={30} currentPage={15} />
  );
  expect(slotLabels(container)).toEqual([
    '1',
    '…',
    '14',
    '15',
    '16',
    '…',
    '30'
  ]);
});

test('PaginationList keeps the first and last page reachable when truncated', () => {
  render(<PaginationList {...commonProps} pagesCount={30} currentPage={15} />);
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('30')).toBeInTheDocument();
});

test('PaginationList always renders seven slots once the list is truncated', () => {
  for (let page = 1; page <= 30; page++) {
    const { container, unmount } = render(
      <PaginationList {...commonProps} pagesCount={30} currentPage={page} />
    );
    expect(slotLabels(container)).toHaveLength(7);
    unmount();
  }
});

test('PaginationList splits the slots between both ends on the first page', () => {
  const { container } = render(
    <PaginationList {...commonProps} pagesCount={30} currentPage={1} />
  );
  expect(slotLabels(container)).toEqual(['1', '2', '3', '…', '28', '29', '30']);
});

test('PaginationList leans toward the start when the current page reaches it', () => {
  const { container } = render(
    <PaginationList {...commonProps} pagesCount={30} currentPage={3} />
  );
  expect(slotLabels(container)).toEqual(['1', '2', '3', '4', '…', '29', '30']);
});

test('PaginationList shows a page rather than a gap hiding that single page', () => {
  const { container } = render(
    <PaginationList {...commonProps} pagesCount={30} currentPage={4} />
  );
  expect(slotLabels(container)).toEqual(['1', '2', '3', '4', '5', '…', '30']);
});

test('PaginationList leans toward the end when the current page reaches it', () => {
  const { container } = render(
    <PaginationList {...commonProps} pagesCount={30} currentPage={28} />
  );
  expect(slotLabels(container)).toEqual([
    '1',
    '2',
    '…',
    '27',
    '28',
    '29',
    '30'
  ]);
});

test('PaginationList lists every page when there are five or fewer at size sm', () => {
  const { container } = render(
    <PaginationList {...commonProps} size='sm' pagesCount={5} currentPage={1} />
  );
  expect(slotLabels(container)).toEqual(['1', '2', '3', '4', '5']);
});

test('PaginationList always renders five slots at size sm once truncated', () => {
  for (let page = 1; page <= 30; page++) {
    const { container, unmount } = render(
      <PaginationList
        {...commonProps}
        size='sm'
        pagesCount={30}
        currentPage={page}
      />
    );
    expect(slotLabels(container)).toHaveLength(5);
    unmount();
  }
});

test('PaginationList drops the neighbours of the current page at size sm', () => {
  const { container } = render(
    <PaginationList
      {...commonProps}
      size='sm'
      pagesCount={30}
      currentPage={15}
    />
  );
  expect(slotLabels(container)).toEqual(['1', '…', '15', '…', '30']);
});

test('PaginationList leans toward the start at size sm', () => {
  const { container } = render(
    <PaginationList
      {...commonProps}
      size='sm'
      pagesCount={30}
      currentPage={2}
    />
  );
  expect(slotLabels(container)).toEqual(['1', '2', '3', '…', '30']);
});
