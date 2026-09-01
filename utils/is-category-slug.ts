import type { CategorySlug } from '@/types';
import { CATEGORIES } from './categories';

const VALID_SLUGS: ReadonlySet<string> = new Set(CATEGORIES);

// `value` mirrors what Next can hand a page: a repeated search param
// (`?cat=a&cat=b`) arrives as an array, which is rejected like any other
// non-slug — the app filters on one category at a time.
export const isCategorySlug = (
  value: string | string[] | undefined
): value is CategorySlug => typeof value === 'string' && VALID_SLUGS.has(value);
