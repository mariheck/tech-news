import type { ArticleMeta } from '@/types';
import { formatWeekRange, type CardOrigin } from '@/utils';
import { SectionHeading } from './section-heading';
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
    <section className='flex flex-col gap-8'>
      <SectionHeading>{formatWeekRange(weekStart)}</SectionHeading>
      <UniformGrid articles={articles} from={from} />
    </section>
  );
};
