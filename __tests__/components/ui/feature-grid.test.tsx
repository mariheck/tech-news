import { makeArticles } from '@/__tests__/fixtures/articles';
import { FeatureGrid } from '@/components/ui';
import type { Article } from '@/types';
import { render, within } from '@testing-library/react';
import { expect, test } from 'vitest';

const articles = makeArticles(6);

const renderLayouts = (input: Article[] = articles) => {
  const { container } = render(<FeatureGrid articles={input} />);
  const [mobile, tablet, desktop] = Array.from(
    container.children
  ) as HTMLElement[];
  return { mobile, tablet, desktop };
};

const classList = (elt: HTMLElement) =>
  elt.className.split(/\s+/).filter(Boolean);

const MEDIUM_HEADING_CLASS = 'text-xl';
const LARGE_HEADING_CLASS = 'text-[clamp(1.5rem,2.2vw,1.875rem)]';
const HORIZONTAL_HEADING_CLASS = 'text-[1.065rem]';

test('Mobile layout: 1-col stack of medium cards, hidden from md up', () => {
  const { mobile } = renderLayouts();
  const classes = classList(mobile);
  expect(classes).toContain('flex');
  expect(classes).toContain('flex-col');
  expect(classes).toContain('gap-xl');
  expect(classes).toContain('md:hidden');

  const headings = within(mobile).getAllByRole('heading', { level: 3 });
  expect(headings).toHaveLength(articles.length);
  for (const h of headings) {
    expect(h.className).toContain(MEDIUM_HEADING_CLASS);
  }
});

test('Tablet layout: 1 large card + 2-col medium grid, visible only between md and lg', () => {
  const { tablet } = renderLayouts();
  const classes = classList(tablet);
  expect(classes).toContain('hidden');
  expect(classes).toContain('md:flex');
  expect(classes).toContain('lg:hidden');

  const featureHeading = within(tablet).getByRole('heading', {
    level: 3,
    name: 'Article one'
  });
  expect(featureHeading.className).toContain(LARGE_HEADING_CLASS);

  const grid = tablet.children[1] as HTMLElement;
  const gridClasses = classList(grid);
  expect(gridClasses).toContain('grid');
  expect(gridClasses).toContain('grid-cols-2');

  const restHeadings = within(grid).getAllByRole('heading', { level: 3 });
  expect(restHeadings).toHaveLength(articles.length - 1);
  for (const h of restHeadings) {
    expect(h.className).toContain(MEDIUM_HEADING_CLASS);
  }
});

test('Desktop editorial row: 2-col grid with large card + flex-col of 3 horizontal cards', () => {
  const { desktop } = renderLayouts();
  const classes = classList(desktop);
  expect(classes).toContain('hidden');
  expect(classes).toContain('lg:flex');

  const editorialRow = desktop.children[0] as HTMLElement;
  const rowClasses = classList(editorialRow);
  expect(rowClasses).toContain('grid');
  expect(rowClasses).toContain('grid-cols-2');

  const featureHeading = within(editorialRow).getByRole('heading', {
    level: 3,
    name: 'Article one'
  });
  expect(featureHeading.className).toContain(LARGE_HEADING_CLASS);

  const horizontalStack = editorialRow.children[1] as HTMLElement;
  const stackClasses = classList(horizontalStack);
  expect(stackClasses).toContain('flex');
  expect(stackClasses).toContain('flex-col');
  expect(stackClasses).toContain('justify-between');

  const horizontalHeadings = within(horizontalStack).getAllByRole('heading', {
    level: 3
  });
  expect(horizontalHeadings).toHaveLength(3);
  for (const h of horizontalHeadings) {
    expect(h.className).toContain(HORIZONTAL_HEADING_CLASS);
  }
});

test('Desktop tail: 3-col medium grid of articles past the editorial row', () => {
  const { desktop } = renderLayouts();
  const tail = desktop.children[1] as HTMLElement;
  const tailClasses = classList(tail);
  expect(tailClasses).toContain('grid');
  expect(tailClasses).toContain('grid-cols-3');

  const tailHeadings = within(tail).getAllByRole('heading', { level: 3 });
  expect(tailHeadings).toHaveLength(articles.length - 4);
  for (const h of tailHeadings) {
    expect(h.className).toContain(MEDIUM_HEADING_CLASS);
  }
});

test('Desktop tail is omitted when fewer than 5 articles are provided', () => {
  const { desktop } = renderLayouts(articles.slice(0, 4));
  expect(desktop.children).toHaveLength(1);
});

test('FeatureGrid passes title, excerpt, image and href through to each card', () => {
  const { mobile } = renderLayouts();

  const link = within(mobile).getByRole('link', { name: /article one/i });
  expect(link).toHaveAttribute('href', '#');

  const image = within(mobile).getByRole('img', { name: 'Article one' });
  expect(image).toHaveAttribute('src', expect.stringContaining('a1.jpg'));

  expect(within(mobile).getByText('Excerpt one.')).toBeInTheDocument();
});

test('FeatureGrid renders all three layouts without crashing on an empty articles array', () => {
  const { mobile, tablet, desktop } = renderLayouts([]);
  expect(mobile).toBeDefined();
  expect(tablet).toBeDefined();
  expect(desktop).toBeDefined();
  expect(within(mobile).queryAllByRole('heading')).toHaveLength(0);
});
