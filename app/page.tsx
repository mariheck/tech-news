import { FeatureGrid, PageHeading, SectionHeading } from '@/components/ui';
import { loadIssue } from '@/utils';

const Home = async () => {
  const issue = await loadIssue('2026-05-18');

  return (
    <div className='flex flex-col gap-8'>
      <PageHeading>L’essentiel de la tech, chaque lundi.</PageHeading>
      <SectionHeading>Les actus de la semaine dernière</SectionHeading>
      <FeatureGrid articles={issue.articles} />
    </div>
  );
};

export default Home;
