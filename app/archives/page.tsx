import { WeeklyEdition } from '@/components/ui';
import { loadIssue } from '@/utils';

const ArchivesPage = async () => {
  const issue = await loadIssue('2026-05-18');

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-3.5'>
        <div className='py-2'>
          <p className='mb-4 font-mono text-xs uppercase tracking-[0.04em] text-tertiary'>
            Archives
          </p>
          <h1 className='mb-8 text-display text-balance'>
            Toutes les éditions, semaine après semaine.
          </h1>
        </div>
        <hr className='mb-10 border-plum-subtle' />
      </div>
      <WeeklyEdition weekStart={issue.date} articles={issue.articles} />
    </div>
  );
};

export default ArchivesPage;
