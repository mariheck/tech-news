import { CATEGORIES, type CategorySlug } from '@/types';
import { categoryToAccent } from '@/utils';
import { CategoryBadge } from './category-badge';

type CategoryFilterProps = {
  basePath: string;
  visible?: CategorySlug[];
  active?: CategorySlug;
};

export const CategoryFilter = ({
  basePath,
  visible,
  active
}: CategoryFilterProps) => {
  const items = visible
    ? CATEGORIES.filter((c) => visible.includes(c.slug))
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
        {items.map((c) => (
          <li key={c.slug}>
            <CategoryBadge
              label={c.label}
              accent={categoryToAccent[c.slug]}
              href={`?cat=${c.slug}`}
              active={active === c.slug}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
