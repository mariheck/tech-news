import { Header } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Header is a banner landmark', () => {
  render(<Header />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
