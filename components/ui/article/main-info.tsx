import { CategoryBadge } from '@/components/ui/category';
import { BackLink, HaloAccent } from '@/components/ui/shared';
import type { Article } from '@/types';
import { categoryToAccent, categoryToLabel } from '@/utils';
import classNames from 'classnames';
import { MetaData } from './meta-data';
import { Sources } from './sources';

type MainInfoProps = Pick<
  Article,
  'category' | 'summary' | 'date' | 'readingTime' | 'sources'
> & {
  backHref: string;
  className?: string;
};

export const MainInfo = ({
  category,
  summary,
  date,
  readingTime,
  sources,
  backHref,
  className
}: MainInfoProps) => {
  return (
    <aside
      aria-label="Métadonnées de l'article"
      className={classNames('relative flex flex-col gap-6', className)}
    >
      <HaloAccent className='hidden md:block -top-30 -left-30 -right-10' />

      <div className='flex md:flex-col gap-6 justify-between md:justify-normal'>
        <div className='flex items-center justify-between'>
          <BackLink href={backHref} className='mb-auto md:mb-0' />
          <div className='hidden md:block'>
            <CategoryBadge
              label={categoryToLabel[category]}
              accent={categoryToAccent[category]}
            />
          </div>
        </div>
        <p className='hidden md:block text-[1.0625rem] leading-[1.55] text-primary text-balance'>
          {summary}
        </p>

        <MetaData
          date={date}
          readingTime={readingTime}
          className='mr-1 md:mr-0 md:py-4.5 md:border-y md:border-(--accent-light)/25'
        />
      </div>

      <Sources sources={sources} className='hidden md:flex' />
    </aside>
  );
};
