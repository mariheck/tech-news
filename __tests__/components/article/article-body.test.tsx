import { ArticleBody } from '@/components/article';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  title: 'Next.js 16',
  category: 'frontend',
  image: '/images/2026-05-18/next-js-16.jpg',
  content: '# Next.js 16\n\nVercel a publié Next.js 16 mardi soir.'
} as const;

test('ArticleBody renders the HeroImage with the article title as alt', () => {
  render(<ArticleBody {...commonProps} />);
  const img = screen.getByRole('img', { name: 'Next.js 16' });
  expect(img).toHaveAttribute('src', expect.stringContaining('next-js-16.jpg'));
});

test('ArticleBody pipes content through StyledMarkdown — H1 from the first line shows up', () => {
  render(<ArticleBody {...commonProps} />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Next.js 16' })
  ).toBeInTheDocument();
});

test('ArticleBody renders the first markdown paragraph', () => {
  render(<ArticleBody {...commonProps} />);
  expect(
    screen.getByText(/Vercel a publié Next\.js 16 mardi soir/)
  ).toBeInTheDocument();
});

test('ArticleBody caps its outer wrapper at max-w-180', () => {
  const { container } = render(<ArticleBody {...commonProps} />);
  const wrapper = container.firstElementChild;
  expect(wrapper?.className).toContain('max-w-180');
});
