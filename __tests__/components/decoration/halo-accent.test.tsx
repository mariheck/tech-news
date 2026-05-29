import { HaloAccent } from '@/components/decoration';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('HaloAccent renders a decorative aria-hidden span', () => {
  render(<HaloAccent />);
  const halo = screen.getByTestId('maininfo-halo');
  expect(halo).toHaveAttribute('aria-hidden', 'true');
});

test('HaloAccent carries the halo-background gradient class', () => {
  render(<HaloAccent />);
  expect(screen.getByTestId('maininfo-halo').className).toContain(
    'halo-background'
  );
});

test('HaloAccent is absolutely positioned out of the flow', () => {
  render(<HaloAccent />);
  const halo = screen.getByTestId('maininfo-halo');
  expect(halo.className).toContain('absolute');
  expect(halo.className).toContain('pointer-events-none');
  expect(halo.className).toContain('-z-10');
});

test('HaloAccent forwards extra positioning utilities via className', () => {
  render(<HaloAccent className='hidden md:block -top-30 -left-30 -right-10' />);
  const halo = screen.getByTestId('maininfo-halo');
  expect(halo.className).toContain('hidden');
  expect(halo.className).toContain('md:block');
  expect(halo.className).toContain('-top-30');
});
