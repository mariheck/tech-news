import { FeatureGrid, SectionHeading } from '@/components/ui';
import { loadIssue } from '@/utils';

const Home = async () => {
  const issue = await loadIssue('2026-05-18');

  return (
    <div className='flex flex-col gap-8'>
      <SectionHeading>Cette semaine</SectionHeading>
      <FeatureGrid articles={issue.articles} />
    </div>
  );
};

export default Home;
