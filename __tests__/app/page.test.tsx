import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Home page displays "this week" section', () => {
  render(<Home />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'Cette semaine' })
  ).toBeInTheDocument();
});
