import { UniformGrid } from '@/components/ui';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

const renderGrid = () => {
  const { container } = render(
    <UniformGrid>
      <div data-testid='child' />
    </UniformGrid>
  );
  return container.firstChild as HTMLElement;
};

const classList = (elt: HTMLElement) =>
  elt.className.split(/\s+/).filter(Boolean);

test('UniformGrid renders its children', () => {
  renderGrid();
  expect(screen.getByTestId('child')).toBeInTheDocument();
});

test('UniformGrid applies a CSS grid layout', () => {
  expect(classList(renderGrid())).toContain('grid');
});

test('UniformGrid renders 1 column on mobile, 2 from sm, 3 from lg', () => {
  const classes = classList(renderGrid());
  expect(classes).toContain('grid-cols-1');
  expect(classes).toContain('sm:grid-cols-2');
  expect(classes).toContain('lg:grid-cols-3');
});

test('UniformGrid spaces cells with the xl spacing token', () => {
  expect(classList(renderGrid())).toContain('gap-xl');
});
