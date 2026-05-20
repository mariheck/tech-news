import { FeatureGrid } from '@/components/ui';
import { ARTICLES } from '@/mocked';
import classNames from 'classnames';

const Home = () => {
  return (
    <div className='flex flex-col gap-xl'>
      <h2
        className={classNames(
          'text-xs text-secondary',
          'font-mono font-bold',
          'uppercase tracking-widest',
          'flex items-center gap-sm',
          "after:content-['']",
          'after:h-px after:bg-plum-subtle',
          'after:flex-1'
        )}
      >
        <span>Cette semaine</span>
      </h2>
      <FeatureGrid articles={ARTICLES} />
    </div>
  );
};

export default Home;
