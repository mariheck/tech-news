import { PageHeading, WeeklyEdition } from '@/components/ui';
import { loadIssue } from '@/utils';

const ArchivesPage = async () => {
  const issue = await loadIssue('2026-05-18');

  return (
    <div className='flex flex-col gap-8'>
      <div>
        <p className='mt-4 font-mono text-xs uppercase tracking-[0.04em] text-tertiary'>
          Archives
        </p>
        <PageHeading>Toutes les éditions, semaine après semaine.</PageHeading>
      </div>

      <WeeklyEdition weekStart={issue.date} articles={issue.articles} />
    </div>
  );
};

export default ArchivesPage;
