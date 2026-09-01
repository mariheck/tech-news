import type { CategorySlug } from '@/types';
import type { Route } from 'next';
import { CATEGORIES, categoryToAccent, categoryToLabel } from '@/utils';
import { CategoryBadge } from './category-badge';

type CategoryFilterProps = {
  basePath: Route;
  visible?: CategorySlug[];
  active?: CategorySlug;
};

export const CategoryFilter = ({
  basePath,
  visible,
  active
}: CategoryFilterProps) => {
  const items = visible
    ? CATEGORIES.filter((slug) => visible.includes(slug))
    : CATEGORIES;

  return (
    <nav aria-label='Filtrer par catégorie'>
      <ul className='flex flex-wrap gap-2.5'>
        <li key='tous'>
          <CategoryBadge
            label='Tous'
            accent='peach'
            href={basePath}
            active={active === undefined}
          />
        </li>
        {items.map((slug) => (
          <li key={slug}>
            <CategoryBadge
              label={categoryToLabel[slug]}
              accent={categoryToAccent[slug]}
              href={`?cat=${slug}`}
              active={active === slug}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
