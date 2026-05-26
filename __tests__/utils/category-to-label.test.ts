import { categoryToLabel } from '@/utils';
import { expect, test } from 'vitest';

test('categoryToLabel exposes the user-facing French label for every slug', () => {
  expect(categoryToLabel).toEqual({
    frontend: 'Frontend',
    design: 'Design',
    'dev-ia': 'Dev IA',
    'actus-ia': 'Actus IA',
    autres: 'Autres'
  });
});

test('Every label is non-empty', () => {
  for (const label of Object.values(categoryToLabel)) {
    expect(label.length).toBeGreaterThan(0);
  }
});
