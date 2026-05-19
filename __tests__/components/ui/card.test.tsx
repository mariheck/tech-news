import { Card } from '@/components/ui';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const card = (
  <Card
    variant='default'
    href='/articles/next-16'
    title='Next.js 16'
    image={{ src: '/images/next-16.jpg', alt: 'Next.js 16 cover' }}
  />
);

test('Card renders a link pointing to the given href', () => {
  render(card);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link).toHaveAttribute('href', '/articles/next-16');
});

test('Card renders the title as a level-3 heading', () => {
  render(card);
  expect(
    screen.getByRole('heading', { level: 3, name: 'Next.js 16' })
  ).toBeInTheDocument();
});

test('Card renders an image with the given src and alt', () => {
  render(card);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute('src', expect.stringContaining('next-16.jpg'));
});

test('Card lifts and casts a peach halo on hover and keyboard focus', () => {
  render(card);
  const link = screen.getByRole('link', { name: /next\.js 16/i });

  expect(link.className).toMatch(/hover:-translate-y-/);
  expect(link.className).toMatch(/focus-visible:-translate-y-/);
  expect(link.className).toContain('hover:shadow-card-lift-peach');
  expect(link.className).toContain('focus-visible:shadow-card-lift-peach');
});
