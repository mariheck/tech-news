import ArchivesPage from '@/app/archives/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Archives page displays "last week" section', () => {
  render(<ArchivesPage />);
  expect(
    screen.getByRole('heading', { level: 2, name: 'La semaine dernière' })
  ).toBeInTheDocument();
});
