import { PaginationPrevNext } from '@/components/pagination/pagination-prev-next';
import { render, screen } from '@testing-library/react';
import type { Route } from 'next';
import { expect, test } from 'vitest';

// A search-param href keeps the fixture free of any real app route.
const href: Route = '?page=2';

const commonProps = {
  direction: 'next' as const,
  href,
  label: 'libellé 2'
};

test('PaginationPrevNext names the next link with its direction and label', () => {
  render(<PaginationPrevNext {...commonProps} />);
  expect(screen.getByRole('link')).toHaveAccessibleName(
    'Page suivante, libellé 2'
  );
});

test('PaginationPrevNext names the previous link with its direction and label', () => {
  render(<PaginationPrevNext {...commonProps} direction='previous' />);
  expect(screen.getByRole('link')).toHaveAccessibleName(
    'Page précédente, libellé 2'
  );
});

test('PaginationPrevNext links to the href it is given', () => {
  render(<PaginationPrevNext {...commonProps} />);
  expect(screen.getByRole('link')).toHaveAttribute('href', '?page=2');
});

test('PaginationPrevNext renders an arrow beside its label', () => {
  render(<PaginationPrevNext {...commonProps} />);
  expect(screen.getByRole('link').querySelector('svg')).toBeInTheDocument();
});

// jsdom ignores the visibility classes, so the label sits in the DOM anyway.
test('PaginationPrevNext reduces to its arrow below sm', () => {
  render(<PaginationPrevNext {...commonProps} />);
  expect(screen.getByText('libellé 2')).toHaveClass('max-sm:hidden');
});

// Reduced to its 12px arrow, the link needs 16px on each side to reach 44px.
test('PaginationPrevNext widens its hit area to 44px around the bare arrow', () => {
  render(<PaginationPrevNext {...commonProps} />);
  expect(screen.getByRole('link')).toHaveClass('before:-inset-x-4');
});
