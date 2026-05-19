import { Card, UniformGrid } from '@/components/ui';
import { ARTICLES } from '@/mocked';

const Home = () => {
  return (
    <div>
      <h1 className='mb-xl'>Tech News</h1>
      <UniformGrid>
        {ARTICLES.map((article) => (
          <Card
            key={article.id}
            href='#'
            title={article.title}
            excerpt={article.excerpt}
            image={{ src: article.images[0], alt: article.title }}
          />
        ))}
      </UniformGrid>
    </div>
  );
};

export default Home;
