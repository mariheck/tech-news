import { CategoryFilter } from '@/components/category';
import { FeatureGrid } from '@/components/listing';
import { EmptyNotice } from '@/components/shared';
import { PageHeading, SectionHeading } from '@/components/typo';
import {
  filterByCategory,
  formatWeekRange,
  getExpectedLastMonday,
  getLastIssueDate,
  isCategorySlug,
  loadIssue
} from '@/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

type HomeProps = {
  searchParams: Promise<{ cat?: string }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const latestDate = await getLastIssueDate();
  const issue = latestDate ? await loadIssue(latestDate) : null;

  const isLastWeek =
    latestDate === getExpectedLastMonday().toISOString().slice(0, 10);

  return (
    <div className='flex flex-col gap-8 w-full'>
      <div className='mb-8'>
        <PageHeading>L’essentiel de la tech, chaque lundi.</PageHeading>
        <CategoryFilter basePath='/' active={active} />
      </div>

      {issue ? (
        <>
          <SectionHeading>
            {isLastWeek
              ? 'Les actus de la semaine dernière'
              : formatWeekRange(issue.date)}
          </SectionHeading>
          <FeatureGrid articles={filterByCategory(issue.articles, active)} />
        </>
      ) : (
        <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
      )}
    </div>
  );
};

export default Home;
