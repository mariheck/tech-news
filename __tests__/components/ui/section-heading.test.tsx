import { SectionHeading } from '@/components/ui';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('SectionHeading renders the label as a level-2 heading', () => {
  render(<SectionHeading>Cette semaine</SectionHeading>);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Cette semaine' })
  ).toBeInTheDocument();
});

test('SectionHeading renders a hairline divider after the label', () => {
  render(<SectionHeading>Cette semaine</SectionHeading>);
  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading.className).toContain("after:content-['']");
  expect(heading.className).toContain('after:h-px');
  expect(heading.className).toContain('after:bg-plum-subtle');
  expect(heading.className).toContain('after:flex-1');
});
