import { makeArticles } from '@/__tests__/fixtures/articles';
import { WeeklyEdition } from '@/components/ui';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

const articles = makeArticles(3);

const commonProps = {
  weekStart: new Date('2026-05-18T10:00:00Z'),
  articles
};

test('WeeklyEdition renders the formatted week range as a level-2 heading', () => {
  render(<WeeklyEdition {...commonProps} />);
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: 'Semaine du 18 au 24 mai 2026'
    })
  ).toBeInTheDocument();
});

test('WeeklyEdition renders one card per article in a uniform grid', () => {
  const { container } = render(<WeeklyEdition {...commonProps} />);
  const grid = container.querySelector('.grid') as HTMLElement;
  const headings = within(grid).getAllByRole('heading', { level: 3 });
  expect(headings).toHaveLength(articles.length);
});
