import { Card } from '@/components/ui';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  href: '/articles/next-16',
  title: 'Next.js 16',
  excerpt: 'Lorem ipsum dolor sit amet.',
  image: { src: '/images/next-16.jpg', alt: 'Next.js 16 cover' }
};

const mediumCard = <Card {...commonProps} />;
const largeCard = <Card variant='large' {...commonProps} />;
const horizontalCard = <Card variant='horizontal' {...commonProps} />;

test('Card renders a link pointing to the given href', () => {
  render(mediumCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link).toHaveAttribute('href', '/articles/next-16');
});

test('Card renders the title as a level-3 heading', () => {
  render(mediumCard);
  expect(
    screen.getByRole('heading', { level: 3, name: 'Next.js 16' })
  ).toBeInTheDocument();
});

test('Card renders an image with the given src and alt', () => {
  render(mediumCard);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute('src', expect.stringContaining('next-16.jpg'));
});

test('Card lifts and casts a peach halo on hover and keyboard focus', () => {
  render(mediumCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });

  expect(link.className).toMatch(/hover:-translate-y-/);
  expect(link.className).toMatch(/focus-visible:-translate-y-/);
  expect(link.className).toContain('hover:shadow-card-lift-peach');
  expect(link.className).toContain('focus-visible:shadow-card-lift-peach');
});

test('Card defaults to the medium variant (20px title, vertical stack)', () => {
  render(mediumCard);
  const heading = screen.getByRole('heading', { level: 3 });
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(heading.className).toContain('text-xl');
  expect(link.className).toContain('flex-col');
});

test('Card variant="large" renders title at the clamp scale and stacks vertically', () => {
  render(largeCard);
  const heading = screen.getByRole('heading', { level: 3 });
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(heading.className).toContain('text-[clamp(1.5rem,2.2vw,1.875rem)]');
  expect(link.className).toContain('flex-col');
});

test('Card variant="horizontal" lays out image and content side by side with 42% image basis', () => {
  render(horizontalCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).not.toContain('flex-col');
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  const imageWrapper = image.parentElement;
  expect(imageWrapper?.className).toContain('basis-[42%]');
  expect(imageWrapper?.className).toContain('shrink-0');
});

test('Card medium variant constrains width to min 13.75rem, max 23.75rem, fills column', () => {
  render(mediumCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-55');
  expect(link.className).toContain('max-w-95');
});

test('Card large variant constrains width to min 17.5rem, max 40rem, fills column', () => {
  render(largeCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-70');
  expect(link.className).toContain('max-w-160');
});

test('Card horizontal variant constrains width to min 20rem, max 32.5rem, fills column', () => {
  render(horizontalCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-80');
  expect(link.className).toContain('max-w-130');
});

test('Card large variant renders excerpt at body type (1.07rem) clamped to 3 lines', () => {
  render(largeCard);
  const paragraph = screen.getByText('Lorem ipsum dolor sit amet.');
  expect(paragraph.className).toContain('text-[1.07rem]');
  expect(paragraph.className).toContain('line-clamp-3');
});

test('Card medium variant renders excerpt at 16px clamped to 2 lines', () => {
  render(mediumCard);
  const paragraph = screen.getByText('Lorem ipsum dolor sit amet.');
  expect(paragraph.className).toContain('text-base');
  expect(paragraph.className).toContain('line-clamp-2');
});

test('Card horizontal variant renders excerpt at 0.95rem clamped to 2 lines', () => {
  render(horizontalCard);
  const paragraph = screen.getByText('Lorem ipsum dolor sit amet.');
  expect(paragraph.className).toContain('text-[0.95rem]');
  expect(paragraph.className).toContain('line-clamp-2');
});
