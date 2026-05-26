import { CATEGORIES, type CategorySlug } from '@/types';
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
        <CategoryBadge
          label='Tous'
          accent='peach'
          href={basePath}
          active={active === undefined}
        />
        {items.map((c) => (
          <CategoryBadge
            key={c.slug}
            label={c.label}
            accent={c.accent}
            href={`?cat=${c.slug}`}
            active={active === c.slug}
          />
        ))}
      </ul>
    </nav>
  );
};
