import type { AccentName, CategorySlug } from '@/types';

export const categoryToAccent: Record<CategorySlug, AccentName> = {
  frontend: 'turquoise',
  design: 'raspberry',
  'dev-ia': 'copper',
  'actus-ia': 'iris',
  autres: 'linen'
};
