import { SectionHeading, UniformGrid } from '@/components/ui';
import { ARTICLES } from '@/mocked';

const ArchivesPage = () => {
  return (
    <div className='flex flex-col gap-xl'>
      <div className='flex flex-col gap-sm'>
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
      <SectionHeading>La semaine dernière</SectionHeading>
      <UniformGrid articles={ARTICLES} />
    </div>
  );
};

export default ArchivesPage;
