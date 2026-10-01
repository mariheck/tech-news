import { Pagination } from '@/components/pagination';
import { render, screen, within } from '@testing-library/react';
import type { Route } from 'next';
import { expect, test, vi } from 'vitest';

// A search-param href keeps the fixture free of any real app route.
const pageHref = (page: number): Route => `?page=${page}`;

const commonProps = {
  pagesCount: 3,
  currentPage: 1,
  'aria-label': 'Naviguer entre les pages',
  getPageDetails: (page: number) => ({
    href: pageHref(page),
    label: `libellé ${page}`
  })
};

// Page links are named `Page N, …`, so only the prev/next links carry a
// direction.
const prevNextLinks = () =>
  screen.getAllByRole('link', { name: /^Page (précédente|suivante), / });
const currentPage = () =>
  screen
    .getAllByRole('link')
    .find((link) => link.getAttribute('aria-current') === 'page');

test('Pagination renders a nav landmark under the label it is given', () => {
  render(<Pagination {...commonProps} />);
  expect(
    screen.getByRole('navigation', { name: 'Naviguer entre les pages' })
  ).toBeInTheDocument();
});

test('Pagination marks the current page it is given', () => {
  render(<Pagination {...commonProps} currentPage={2} />);
  expect(currentPage()).toHaveAccessibleName('Page 2, libellé 2');
});

test('Pagination only asks for the details of the pages it renders', () => {
  const getPageDetails = vi.fn(commonProps.getPageDetails);
  render(
    <Pagination
      {...commonProps}
      pagesCount={30}
      currentPage={15}
      getPageDetails={getPageDetails}
    />
  );
  expect(getPageDetails).not.toHaveBeenCalledWith(10);
});

test('Pagination links every page to its href', () => {
  render(<Pagination {...commonProps} />);
  expect(
    screen.getAllByRole('link', { name: 'Page 3, libellé 3' })[0]
  ).toHaveAttribute('href', '?page=3');
});

test('Pagination links the prev/next links to their href', () => {
  render(<Pagination {...commonProps} currentPage={2} />);
  expect(
    screen.getByRole('link', { name: 'Page précédente, libellé 1' })
  ).toHaveAttribute('href', '?page=1');
});

test('Pagination renders nothing for a single page', () => {
  const { container } = render(<Pagination {...commonProps} pagesCount={1} />);
  expect(container).toBeEmptyDOMElement();
});

test('Pagination renders nothing for a current page below the first', () => {
  const { container } = render(<Pagination {...commonProps} currentPage={0} />);
  expect(container).toBeEmptyDOMElement();
});

test('Pagination renders nothing for a current page past the last', () => {
  const { container } = render(<Pagination {...commonProps} currentPage={4} />);
  expect(container).toBeEmptyDOMElement();
});

test('Pagination leaves the previous side empty on the first page', () => {
  render(<Pagination {...commonProps} currentPage={1} />);
  expect(prevNextLinks()).toHaveLength(1);
  expect(prevNextLinks()[0]).toHaveAccessibleName('Page suivante, libellé 2');
});

test('Pagination leaves the next side empty on the last page', () => {
  render(<Pagination {...commonProps} currentPage={3} />);
  expect(prevNextLinks()).toHaveLength(1);
  expect(prevNextLinks()[0]).toHaveAccessibleName('Page précédente, libellé 2');
});

test('Pagination shows the page label on the prev/next link', () => {
  render(<Pagination {...commonProps} currentPage={2} />);
  expect(
    screen.getByRole('link', { name: 'Page précédente, libellé 1' })
  ).toHaveTextContent('libellé 1');
});

// Its column starts at the page edge, so it has to hug the page numbers itself.
test('Pagination pushes the previous link against the page numbers', () => {
  render(<Pagination {...commonProps} currentPage={2} />);
  expect(
    screen.getByRole('link', { name: 'Page précédente, libellé 1' })
  ).toHaveClass('justify-self-end');
});

test('Pagination includes the numbered pages', () => {
  render(<Pagination {...commonProps} currentPage={2} />);
  const nav = screen.getByRole('navigation', {
    name: 'Naviguer entre les pages'
  });
  expect(
    within(nav).getAllByRole('link', { name: 'Page 1, libellé 1' })
  ).not.toHaveLength(0);
});

// Both variants sit in the DOM (jsdom ignores CSS): each one is told apart by
// its slot count and carries the visibility toggle for its breakpoint.
const listWithSlots = (count: number) =>
  screen
    .getAllByRole('list')
    .find((list) => list.querySelectorAll('li').length === count);

test('Pagination shows a five-slot list below lg only', () => {
  render(<Pagination {...commonProps} pagesCount={30} currentPage={15} />);
  expect(listWithSlots(5)).toHaveClass('lg:hidden');
});

test('Pagination centres the five-slot list between the prev/next links', () => {
  render(<Pagination {...commonProps} pagesCount={30} currentPage={15} />);
  expect(listWithSlots(5)).toHaveClass('col-start-2');
});

test('Pagination shows a seven-slot list from lg up only', () => {
  render(<Pagination {...commonProps} pagesCount={30} currentPage={15} />);
  expect(listWithSlots(7)).toHaveClass('max-lg:hidden');
});
