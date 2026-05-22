import type { ArticleMeta } from '@/types';
import { formatWeekRange } from '@/utils';
import { SectionHeading } from './section-heading';
import { UniformGrid } from './uniform-grid';

type WeeklyEditionProps = {
  weekStart: Date;
  articles: ArticleMeta[];
};

export const WeeklyEdition = ({ weekStart, articles }: WeeklyEditionProps) => {
  return (
    <section className='flex flex-col gap-8'>
      <SectionHeading>{formatWeekRange(weekStart)}</SectionHeading>
      <UniformGrid articles={articles} />
    </section>
  );
};
