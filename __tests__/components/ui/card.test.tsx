import { Card } from '@/components/ui';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  href: '/articles/next-16',
  title: 'Next.js 16',
  image: { src: '/images/next-16.jpg', alt: 'Next.js 16 cover' }
};

const defaultCard = <Card {...commonProps} />;

const largeCard = <Card size='lg' {...commonProps} />;

const smallCard = <Card size='sm' {...commonProps} />;

const horizontalCard = <Card direction='horizontal' {...commonProps} />;

const excerptCard = (
  <Card excerpt='Lorem ipsum dolor sit amet.' {...commonProps} />
);

test('Card renders a link pointing to the given href', () => {
  render(defaultCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link).toHaveAttribute('href', '/articles/next-16');
});

test('Card renders the title as a level-3 heading', () => {
  render(defaultCard);
  expect(
    screen.getByRole('heading', { level: 3, name: 'Next.js 16' })
  ).toBeInTheDocument();
});

test('Card renders an image with the given src and alt', () => {
  render(defaultCard);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute('src', expect.stringContaining('next-16.jpg'));
});

test('Card lifts and casts a peach halo on hover and keyboard focus', () => {
  render(defaultCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });

  expect(link.className).toMatch(/hover:-translate-y-/);
  expect(link.className).toMatch(/focus-visible:-translate-y-/);
  expect(link.className).toContain('hover:shadow-card-lift-peach');
  expect(link.className).toContain('focus-visible:shadow-card-lift-peach');
});

test('Card with size="lg" renders the title at the large title scale', () => {
  render(largeCard);
  const heading = screen.getByRole('heading', { level: 3, name: 'Next.js 16' });
  expect(heading.className).toContain('text-[clamp(1.5rem,2.2vw,1.875rem)]');
});

test('Card with size="sm" renders the title at the small title scale', () => {
  render(smallCard);
  const heading = screen.getByRole('heading', { level: 3, name: 'Next.js 16' });
  expect(heading.className).toContain('text-[17px]');
});

test('Card uses direction="vertical" by default (flex column layout)', () => {
  render(defaultCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('flex-col');
});

test('Card with direction="horizontal" lays out image and content side by side', () => {
  render(horizontalCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).not.toContain('flex-col');
});

test('Card without excerpt renders no excerpt paragraph', () => {
  render(defaultCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  const paragraph = link.querySelector('p');
  expect(paragraph).toBeNull();
});

test('Card with an excerpt renders the excerpt text inside the link', () => {
  render(excerptCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  const paragraph = link.querySelector('p');
  expect(paragraph).not.toBeNull();
  expect(paragraph).toHaveTextContent('Lorem ipsum dolor sit amet.');
  expect(paragraph!.className).toContain('line-clamp-2');
});
