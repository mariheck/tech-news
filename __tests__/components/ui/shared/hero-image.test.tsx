import { HeroImage } from '@/components/ui/shared';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const commonProps = {
  src: '/images/2026-05-18/next-js-16.jpg',
  alt: 'Next.js 16 hero'
};

test('HeroImage renders an image with the given src and alt', () => {
  render(<HeroImage {...commonProps} />);
  const img = screen.getByRole('img', { name: 'Next.js 16 hero' });
  expect(img).toHaveAttribute('src', expect.stringContaining('next-js-16.jpg'));
});

test('HeroImage wraps the image in a 16:9 rounded container', () => {
  const { container } = render(<HeroImage {...commonProps} />);
  const wrapper = container.querySelector('div');
  expect(wrapper?.className).toContain('aspect-video');
  expect(wrapper?.className).toContain('rounded-2xl');
});

test('HeroImage applies object-cover on the image', () => {
  render(<HeroImage {...commonProps} />);
  const img = screen.getByRole('img');
  expect(img.className).toContain('object-cover');
});

test('HeroImage renders the inset edge ring (decorative, aria-hidden)', () => {
  const { container } = render(<HeroImage {...commonProps} />);
  const ring = container.querySelector('[aria-hidden="true"]');
  expect(ring).not.toBeNull();
  expect(ring?.className).toContain('ring-1');
  expect(ring?.className).toContain('ring-inset');
});

test('HeroImage forwards extra classes via the className prop', () => {
  const { container } = render(<HeroImage {...commonProps} className='mb-9' />);
  const wrapper = container.querySelector('div');
  expect(wrapper?.className).toContain('mb-9');
});
