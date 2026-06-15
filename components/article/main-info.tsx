import { HaloAccent } from '@/components/decoration';
import { StyledMarkdown } from '@/components/typo';
import type { Article } from '@/types';
import classNames from 'classnames';
import { MetaData } from './meta-data';
import { Sources } from './sources';

type MainInfoProps = Pick<
  Article,
  'summary' | 'date' | 'readingTime' | 'sources'
> & {
  className?: string;
};

export const MainInfo = ({
  summary,
  date,
  readingTime,
  sources,
  className
}: MainInfoProps) => {
  return (
    <aside
      aria-label="Métadonnées de l'article"
      className={classNames('relative flex flex-col gap-6', className)}
    >
      <HaloAccent className='hidden md:block -top-30 -left-30 -right-10' />

      <div className='flex md:flex-col gap-6 justify-between md:justify-normal'>
        <div className='hidden md:block'>
          <StyledMarkdown markdown={summary} />
        </div>

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
