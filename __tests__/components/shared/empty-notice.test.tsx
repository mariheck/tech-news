import { EmptyNotice } from '@/components/shared';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('EmptyNotice renders its message in a paragraph', () => {
  render(<EmptyNotice>Aucun article cette semaine.</EmptyNotice>);
  const notice = screen.getByText('Aucun article cette semaine.');
  expect(notice.tagName).toBe('P');
});

test('EmptyNotice keeps its muted text above the WCAG AA contrast floor', () => {
  // text-primary/60 ≈ 5.9:1 on plum-base clears AA 4.5:1; /50 (~4.47:1) did not.
  render(<EmptyNotice>Aucun article cette semaine.</EmptyNotice>);
  expect(screen.getByText('Aucun article cette semaine.').className).toContain(
    'text-primary/60'
  );
});
