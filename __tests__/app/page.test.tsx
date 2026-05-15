import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Page', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'Tech News' })
  ).toBeInTheDocument();
});
