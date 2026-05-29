import { categoryToAccent } from '@/utils';
import { expect, test } from 'vitest';

test('categoryToAccent maps each editorial category to its accent name', () => {
  expect(categoryToAccent).toEqual({
    frontend: 'turquoise',
    design: 'raspberry',
    'dev-ia': 'copper',
    'actus-ia': 'iris'
  });
});
