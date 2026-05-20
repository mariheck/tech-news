import { FeatureGrid } from '@/components/ui';
import { ARTICLES } from '@/mocked';

const Home = () => {
  return (
    <div className='flex flex-col gap-xl'>
      <h1>Tech News</h1>
      <FeatureGrid articles={ARTICLES} />
    </div>
  );
};

export default Home;
