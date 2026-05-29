import type { ArticleMeta } from '@/types';
import { articleToCardProps, type CardOrigin } from '@/utils';
import { Card } from './card';

type UniformGridProps = { articles: ArticleMeta[]; from?: CardOrigin };

export const UniformGrid = ({ articles, from }: UniformGridProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {articles.map((article, idx) => (
        <Card
          key={`${article.slug}-${idx}`}
          variant='medium'
          {...articleToCardProps(article, from)}
        />
      ))}
    </div>
  );
};
