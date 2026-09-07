import { PaginationLink } from '@/components/pagination/pagination-link';
import { render, screen } from '@testing-library/react';
import type { Route } from 'next';
import { expect, test } from 'vitest';

// A search-param href keeps the fixture free of any real app route.
const href: Route = '?page=2';

const commonProps = {
  page: 2,
  href,
  label: 'libellé 2',
  isSelected: false
};

test('PaginationLink shows its page number', () => {
  render(<PaginationLink {...commonProps} />);
  expect(screen.getByRole('link')).toHaveTextContent('2');
});

test('PaginationLink links to the href it is given', () => {
  render(<PaginationLink {...commonProps} />);
  expect(screen.getByRole('link')).toHaveAttribute('href', '?page=2');
});

test('PaginationLink names the link with its page number and label', () => {
  render(<PaginationLink {...commonProps} />);
  expect(screen.getByRole('link')).toHaveAccessibleName('Page 2, libellé 2');
});

test('PaginationLink marks itself as the current page when selected', () => {
  render(<PaginationLink {...commonProps} isSelected />);
  expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page');
});

test('PaginationLink leaves the current marker off when not selected', () => {
  render(<PaginationLink {...commonProps} />);
  expect(screen.getByRole('link')).not.toHaveAttribute('aria-current');
});
