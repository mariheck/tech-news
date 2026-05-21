import { SectionHeading, UniformGrid } from '@/components/ui';
import { ARTICLES } from '@/mocked';

const ArchivesPage = () => {
  return (
    <div className='flex flex-col gap-xl'>
      <SectionHeading>La semaine dernière</SectionHeading>
      <UniformGrid articles={ARTICLES} />
    </div>
  );
};

export default ArchivesPage;
