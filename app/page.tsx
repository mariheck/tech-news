import { FeatureGrid, SectionHeading } from '@/components/ui';
import { ARTICLES } from '@/mocked';

const Home = () => {
  return (
    <div className='flex flex-col gap-xl'>
      <SectionHeading>Cette semaine</SectionHeading>
      <FeatureGrid articles={ARTICLES} />
    </div>
  );
};

export default Home;
