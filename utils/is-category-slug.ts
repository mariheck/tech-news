import type { CategorySlug } from '@/types';
import { CATEGORIES } from './categories';

const VALID_SLUGS: ReadonlySet<string> = new Set(CATEGORIES);

export const isCategorySlug = (
  value: string | undefined
): value is CategorySlug => value !== undefined && VALID_SLUGS.has(value);
