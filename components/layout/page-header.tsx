import { CategoryFilter } from '@/components/category';
import { PageHeading } from '@/components/typo';
import type { CategorySlug, ListingRoute } from '@/types';
import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  basePath: ListingRoute;
  activeCategory?: CategorySlug;
  trailing?: ReactNode;
};

export const PageHeader = ({
  eyebrow,
  title,
  basePath,
  activeCategory,
  trailing
}: PageHeaderProps) => (
  <div>
    <p className='mt-4 font-mono text-xs tracking-[0.04em] text-tertiary uppercase'>
      {eyebrow}
    </p>
    <PageHeading>{title}</PageHeading>
    <div className='flex flex-wrap items-center justify-between gap-x-8 gap-y-4'>
      <CategoryFilter basePath={basePath} active={activeCategory} />
      {!!trailing && <div className='max-sm:hidden'>{trailing}</div>}
    </div>
  </div>
);
