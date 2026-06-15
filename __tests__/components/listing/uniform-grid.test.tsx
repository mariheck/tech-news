import { makeArticles } from '@/__tests__/fixtures/articles';
import { UniformGrid } from '@/components/listing';
import type { ArticleMeta } from '@/types';
import { render, within } from '@testing-library/react';
import { expect, test } from 'vitest';

const articles = makeArticles(3);

const renderGrid = (input: ArticleMeta[] = articles) => {
  const { container } = render(<UniformGrid articles={input} />);
  return container.firstChild as HTMLElement;
};

const classList = (elt: HTMLElement) =>
  elt.className.split(/\s+/).filter(Boolean);

test('UniformGrid applies a CSS grid layout', () => {
  expect(classList(renderGrid())).toContain('grid');
});

test('UniformGrid renders 1 column on mobile, 2 from sm, 3 from lg', () => {
  const classes = classList(renderGrid());
  expect(classes).toContain('grid-cols-1');
  expect(classes).toContain('sm:grid-cols-2');
  expect(classes).toContain('lg:grid-cols-3');
});

test('UniformGrid spaces cells with gap-8', () => {
  expect(classList(renderGrid())).toContain('gap-8');
});

test('UniformGrid renders one medium Card per article', () => {
  const grid = renderGrid();
  const headings = within(grid).getAllByRole('heading', { level: 3 });
  expect(headings).toHaveLength(articles.length);
  for (const h of headings) {
    expect(h.className).toContain('text-xl');
  }
});

test('UniformGrid passes title, image and href through to each card', () => {
  const grid = renderGrid();
  const link = within(grid).getByRole('link', { name: /article one/i });
  expect(link).toHaveAttribute('href', '/2026-05-18/a1');
  const image = within(grid).getByRole('img', { name: 'Article one' });
  expect(image).toHaveAttribute('src', expect.stringContaining('a1.jpg'));
});

test('UniformGrid renders an empty grid when articles is empty', () => {
  const grid = renderGrid([]);
  expect(grid.children).toHaveLength(0);
});
