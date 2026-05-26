import { CATEGORIES } from '@/types';
import { expect, test } from 'vitest';

test('CATEGORIES exposes the 5 editorial categories in canonical order', () => {
  expect(CATEGORIES.map((c) => c.slug)).toEqual([
    'frontend',
    'design',
    'dev-ia',
    'actus-ia',
    'autres'
  ]);
});

test('Every category has a non-empty label and an accent name', () => {
  for (const c of CATEGORIES) {
    expect(c.label.length).toBeGreaterThan(0);
    expect(c.accent).toMatch(/^(turquoise|raspberry|copper|iris|linen)$/);
  }
});

test('Category accent assignment matches the spec', () => {
  const byKey = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.accent]));
  expect(byKey).toEqual({
    frontend: 'turquoise',
    design: 'raspberry',
    'dev-ia': 'copper',
    'actus-ia': 'iris',
    autres: 'linen'
  });
});

test('Labels are the user-facing French strings expected on the filter', () => {
  const byKey = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.label]));
  expect(byKey).toEqual({
    frontend: 'Frontend',
    design: 'Design',
    'dev-ia': 'Dev IA',
    'actus-ia': 'Actus IA',
    autres: 'Autres'
  });
});
