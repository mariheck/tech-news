import { PageStack } from '@/components/layout';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('PageStack renders the children it is given', () => {
  render(
    <PageStack>
      <p>Contenu</p>
    </PageStack>
  );
  expect(screen.getByText('Contenu')).toBeInTheDocument();
});

// jsdom evaluates no CSS, so the shared rhythm is asserted as a class contract.
test('PageStack carries the shared page rhythm', () => {
  const { container } = render(
    <PageStack>
      <p>Contenu</p>
    </PageStack>
  );
  expect(container.firstElementChild).toHaveClass(
    'flex',
    'w-full',
    'flex-col',
    'gap-8',
    'md:gap-16'
  );
});
