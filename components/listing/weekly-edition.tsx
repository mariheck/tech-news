import type { ArticleMeta } from '@/types';
import { formatWeekRange, type CardOrigin } from '@/utils';
import { EmptyNotice } from '@/components/shared';
import { SectionHeading } from '@/components/typo';
import { UniformGrid } from './uniform-grid';

type WeeklyEditionProps = {
  weekStart: Date;
  articles: ArticleMeta[];
  from?: CardOrigin;
};

export const WeeklyEdition = ({
  weekStart,
  articles,
  from
}: WeeklyEditionProps) => {
  return (
    <section className='flex flex-col gap-8 w-full'>
      <SectionHeading>{formatWeekRange(weekStart)}</SectionHeading>
      {articles.length ? (
        <UniformGrid articles={articles} from={from} />
      ) : (
        <EmptyNotice>Aucun article cette semaine.</EmptyNotice>
      )}
    </section>
  );
};
