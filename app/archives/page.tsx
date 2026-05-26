import { CategoryFilter, PageHeading, WeeklyEdition } from '@/components/ui';
import { filterByCategory, isCategorySlug, loadIssue } from '@/utils';

type ArchivesPageProps = {
  searchParams: Promise<{ cat?: string }>;
};

const ArchivesPage = async ({ searchParams }: ArchivesPageProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const issue = await loadIssue('2026-05-18');
  const articles = filterByCategory(issue.articles, active);

  return (
    <div className='flex flex-col gap-8'>
      <div className='mb-8'>
        <p className='mt-4 font-mono text-xs uppercase tracking-[0.04em] text-tertiary'>
          Archives
        </p>
        <PageHeading>Toutes les éditions, semaine après semaine.</PageHeading>
        <CategoryFilter basePath='/archives' active={active} />
      </div>

      <WeeklyEdition weekStart={issue.date} articles={articles} />
    </div>
  );
};

export default ArchivesPage;
