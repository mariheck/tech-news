import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Home page displays "this week" section heading', async () => {
  render(await Home());
  expect(
    screen.getByRole('heading', {
      level: 2,
      name: 'Les actus de la semaine dernière',
    })
  ).toBeInTheDocument();
});

test('Home page displays a display-level page heading', async () => {
  render(await Home());
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'L’essentiel de la tech, chaque lundi.',
    })
  ).toBeInTheDocument();
});
