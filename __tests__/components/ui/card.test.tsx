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
const badgedCard = (
  <Card {...commonProps} badge='Frontend' accent='raspberry' />
);
const badgedCardNoAccent = <Card {...commonProps} badge='Frontend' />;

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

test('Card medium image hints sizes for the 1/2/3-column responsive layout', () => {
  render(mediumCard);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute(
    'sizes',
    '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
  );
});

test('Card large image hints sizes for the full-width to half-width layout', () => {
  render(largeCard);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute(
    'sizes',
    '(min-width: 1024px) 50vw, 100vw'
  );
});

test('Card horizontal image hints sizes for the desktop-only side-by-side layout', () => {
  render(horizontalCard);
  const image = screen.getByRole('img', { name: 'Next.js 16 cover' });
  expect(image).toHaveAttribute(
    'sizes',
    '(min-width: 1024px) 25vw, 50vw'
  );
});

test('Card lifts and casts a peach halo on hover and keyboard focus', () => {
  render(mediumCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });

  expect(link.className).toMatch(/hover:-translate-y-/);
  expect(link.className).toMatch(/focus-visible:-translate-y-/);
  expect(link.className).toContain('hover:shadow-lift');
  expect(link.className).toContain('focus-visible:shadow-lift');
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

test('Card medium variant has min-width 13.75rem and fills its column', () => {
  render(mediumCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-55');
  expect(link.className).toContain('max-w-full');
});

test('Card large variant has min-width 17.5rem and fills its column', () => {
  render(largeCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-70');
  expect(link.className).toContain('max-w-full');
});

test('Card horizontal variant has min-width 20rem and fills its column', () => {
  render(horizontalCard);
  const link = screen.getByRole('link', { name: /next\.js 16/i });
  expect(link.className).toContain('w-full');
  expect(link.className).toContain('min-w-80');
  expect(link.className).toContain('max-w-full');
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

test('Card renders the badge label as a span when a badge prop is provided', () => {
  render(badgedCard);
  const badge = screen.getByText('Frontend');
  expect(badge.tagName).toBe('SPAN');
});

test('Card omits the badge when no badge prop is provided', () => {
  render(mediumCard);
  expect(screen.queryByText('Frontend')).not.toBeInTheDocument();
});

test('Card badge inherits the card accent via the --accent CSS variable', () => {
  render(badgedCard);
  const badge = screen.getByText('Frontend');
  expect(badge.getAttribute('style')).toMatch(
    /--accent:\s*var\(--color-accent-raspberry\)/
  );
});

test('Card badge falls back to the peach accent when no accent is provided', () => {
  render(badgedCardNoAccent);
  const badge = screen.getByText('Frontend');
  expect(badge.getAttribute('style')).toMatch(
    /--accent:\s*var\(--color-accent-peach\)/
  );
});
