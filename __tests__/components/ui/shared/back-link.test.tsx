import { BackLink } from '@/components/ui/shared';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('BackLink renders the "Retour" label', () => {
  render(<BackLink />);
  expect(screen.getByText(/Retour/)).toBeInTheDocument();
});

test('BackLink is display-only — it does not render an anchor', () => {
  const { container } = render(<BackLink />);
  expect(container.querySelector('a')).toBeNull();
});

test('BackLink uses mono styling at text-secondary scale', () => {
  render(<BackLink />);
  const wrapper = screen.getByText(/Retour/);
  expect(wrapper.className).toContain('font-mono');
  expect(wrapper.className).toMatch(/text-secondary/);
});

test('BackLink marks its icon as aria-hidden so the accessible name stays "Retour"', () => {
  const { container } = render(<BackLink />);
  const svg = container.querySelector('svg');
  expect(svg).not.toBeNull();
  expect(svg).toHaveAttribute('aria-hidden', 'true');
});
