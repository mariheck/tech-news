import type { Article } from '@/types';
import { articleToCardProps } from '@/utils';
import { Card } from './card';

type UniformGridProps = { articles: Article[] };

export const UniformGrid = ({ articles }: UniformGridProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl'>
      {articles.map((article) => (
        <Card
          key={article.id}
          variant='medium'
          {...articleToCardProps(article)}
        />
      ))}
    </div>
  );
};
