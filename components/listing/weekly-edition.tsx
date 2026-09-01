import type { ArticleMeta } from '@/types';
import { formatWeekRange } from '@/utils';
import { EmptyNotice } from '@/components/shared';
import { SectionHeading } from '@/components/typo';
import { UniformGrid } from './uniform-grid';

type WeeklyEditionProps = {
  weekStart: Date;
  articles: ArticleMeta[];
};

export const WeeklyEdition = ({ weekStart, articles }: WeeklyEditionProps) => {
  return (
    <section className='flex w-full flex-col gap-8'>
      <SectionHeading>{formatWeekRange(weekStart)}</SectionHeading>
      {articles.length ? (
        <UniformGrid articles={articles} />
      ) : (
        <EmptyNotice>Aucun article cette semaine.</EmptyNotice>
      )}
    </section>
  );
};
