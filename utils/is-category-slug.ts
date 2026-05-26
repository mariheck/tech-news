import { CATEGORIES, type CategorySlug } from '@/types';

const VALID_SLUGS: ReadonlySet<string> = new Set(
  CATEGORIES.map((c) => c.slug)
);

export const isCategorySlug = (
  value: string | undefined
): value is CategorySlug => value !== undefined && VALID_SLUGS.has(value);
