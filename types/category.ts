export type CategorySlug =
  | 'frontend'
  | 'design'
  | 'dev-ia'
  | 'actus-ia'
  | 'autres';

export type Category = {
  slug: CategorySlug;
  label: string;
};

export const CATEGORIES: readonly Category[] = [
  { slug: 'frontend', label: 'Frontend' },
  { slug: 'design', label: 'Design' },
  { slug: 'dev-ia', label: 'Dev IA' },
  { slug: 'actus-ia', label: 'Actus IA' },
  { slug: 'autres', label: 'Autres' }
] as const;
