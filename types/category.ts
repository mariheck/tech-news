export type CategorySlug =
  | 'frontend'
  | 'design'
  | 'dev-ia'
  | 'actus-ia'
  | 'autres';

export type AccentName =
  | 'peach'
  | 'turquoise'
  | 'raspberry'
  | 'copper'
  | 'iris'
  | 'linen';

export type Category = {
  slug: CategorySlug;
  label: string;
  accent: AccentName;
};

export const CATEGORIES: readonly Category[] = [
  { slug: 'frontend', label: 'Frontend', accent: 'turquoise' },
  { slug: 'design', label: 'Design', accent: 'raspberry' },
  { slug: 'dev-ia', label: 'Dev IA', accent: 'copper' },
  { slug: 'actus-ia', label: 'Actus IA', accent: 'iris' },
  { slug: 'autres', label: 'Autres', accent: 'linen' }
] as const;
