import { PageHeading } from '@/components/typo';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('PageHeading renders the label as a level-1 heading', () => {
  render(<PageHeading>L’essentiel de la tech</PageHeading>);
  expect(
    screen.getByRole('heading', { level: 1, name: 'L’essentiel de la tech' })
  ).toBeInTheDocument();
});

test('PageHeading applies the display typography role', () => {
  render(<PageHeading>L’essentiel de la tech</PageHeading>);
  const heading = screen.getByRole('heading', { level: 1 });
  expect(heading.className).toContain('text-display');
  expect(heading.className).toContain('text-balance');
});
