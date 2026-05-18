import { Footer } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Footer is a contentinfo landmark', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
