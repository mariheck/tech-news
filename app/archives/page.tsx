import { CategoryFilter } from '@/components/category';
import { WeeklyEdition } from '@/components/listing';
import { EmptyNotice } from '@/components/shared';
import { PageHeading } from '@/components/typo';
import {
  filterByCategory,
  getArchiveIssueDates,
  isCategorySlug,
  loadIssue
} from '@/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archives',
  description:
    'Toutes les éditions hebdomadaires de tech.news, semaine après semaine.',
  alternates: { canonical: '/archives' }
};

type ArchivesPageProps = {
  searchParams: Promise<{ cat?: string }>;
};

const ArchivesPage = async ({ searchParams }: ArchivesPageProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const archiveDates = await getArchiveIssueDates();
  const allIssues = await Promise.all(
    archiveDates.map((date) => loadIssue(date))
  );

  const filteredArchives = allIssues.map((issue) => ({
    ...issue,
    articles: filterByCategory(issue.articles, active)
  }));

  return (
    <div className='flex flex-col gap-8 md:gap-16 w-full'>
      <div>
        <p className='mt-4 font-mono text-xs uppercase tracking-[0.04em] text-tertiary'>
          Archives
        </p>
        <PageHeading>Toutes les éditions, semaine après semaine.</PageHeading>
        <CategoryFilter basePath='/archives' active={active} />
      </div>

      {filteredArchives.length ? (
        <div className='flex flex-col gap-16'>
          {filteredArchives.map((issue) => (
            <WeeklyEdition
              key={issue.date.toISOString()}
              weekStart={issue.date}
              articles={issue.articles}
              from='archives'
            />
          ))}
        </div>
      ) : (
        <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
      )}
    </div>
  );
};

export default ArchivesPage;
