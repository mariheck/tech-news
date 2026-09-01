import type { ArticleMeta } from '@/types';
import { articleToCardProps } from '@/utils';
import { Card } from './card';

type UniformGridProps = { articles: ArticleMeta[] };

export const UniformGrid = ({ articles }: UniformGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {articles.map((article, idx) => (
        <Card
          key={`${article.slug}-${idx}`}
          variant='medium'
          {...articleToCardProps(article)}
        />
      ))}
    </div>
  );
};
