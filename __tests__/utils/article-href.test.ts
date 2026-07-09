import { articleHref } from '@/utils';
import { expect, test } from 'vitest';

test('articleHref builds /<YYYY-MM-DD>/<slug> from date and slug', () => {
  expect(
    articleHref({ date: new Date('2026-05-18T00:00:00Z'), slug: 'a1' })
  ).toBe('/2026-05-18/a1');
});
