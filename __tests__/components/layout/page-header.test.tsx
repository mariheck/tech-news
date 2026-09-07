import { PageHeader } from '@/components/layout';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  eyebrow: 'tech.news',
  title: 'L’essentiel de la tech, chaque lundi.',
  basePath: '/' as const
};

test('PageHeader renders its title as the level-1 heading', () => {
  render(<PageHeader {...commonProps} />);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'L’essentiel de la tech, chaque lundi.'
    })
  ).toBeInTheDocument();
});

test('PageHeader renders the eyebrow as a paragraph', () => {
  render(<PageHeader {...commonProps} />);
  expect(screen.getByText('tech.news').tagName).toBe('P');
});

test('PageHeader points the category filter at the given base path', () => {
  render(<PageHeader {...commonProps} />);
  expect(screen.getByRole('link', { name: 'Tous' })).toHaveAttribute(
    'href',
    '/'
  );
});

test('PageHeader marks the active category', () => {
  render(<PageHeader {...commonProps} activeCategory='design' />);
  expect(screen.getByRole('link', { name: 'Design' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

// The trailing slot shares the filter row so it never opens a line of its own.
test('PageHeader seats the trailing slot in the filter row', () => {
  const { container } = render(
    <PageHeader
      {...commonProps}
      trailing={<button type='button'>Mois</button>}
    />
  );
  const row = container.querySelector('nav')?.parentElement as HTMLElement;
  expect(within(row).getByRole('button', { name: 'Mois' })).toBeInTheDocument();
});

test('PageHeader renders the filter row alone without a trailing slot', () => {
  render(<PageHeader {...commonProps} />);
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test('PageHeader hides the trailing slot below sm', () => {
  render(
    <PageHeader
      {...commonProps}
      trailing={<button type='button'>Mois</button>}
    />
  );
  expect(
    screen.getByRole('button', { name: 'Mois' }).parentElement
  ).toHaveClass('max-sm:hidden');
});
