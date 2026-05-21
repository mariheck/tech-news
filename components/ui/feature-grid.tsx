import type { Article } from '@/types';
import { articleToCardProps } from '@/utils';
import { Card } from './card';

type FeatureGridProps = { articles: Article[] };

const HORIZONTAL_PEER_COUNT = 3;

export const FeatureGrid = ({ articles }: FeatureGridProps) => {
  const [feature, ...rest] = articles;
  const horizontalPeers = rest.slice(0, HORIZONTAL_PEER_COUNT);
  const desktopTail = rest.slice(HORIZONTAL_PEER_COUNT);

  return (
    <>
      <div className='flex flex-col gap-8 sm:hidden'>
        {articles.map((article) => (
          <Card
            key={article.id}
            variant='medium'
            {...articleToCardProps(article)}
          />
        ))}
      </div>

      <div className='hidden sm:flex flex-col gap-8 lg:hidden'>
        {feature && <Card variant='large' {...articleToCardProps(feature)} />}
        <div className='grid grid-cols-2 gap-8'>
          {rest.map((article) => (
            <Card
              key={article.id}
              variant='medium'
              {...articleToCardProps(article)}
            />
          ))}
        </div>
      </div>

      <div className='hidden lg:flex flex-col gap-8'>
        <div className='grid grid-cols-2 gap-8'>
          {feature && <Card variant='large' {...articleToCardProps(feature)} />}
          <div className='flex flex-col justify-between gap-8'>
            {horizontalPeers.map((article) => (
              <Card
                key={article.id}
                variant='horizontal'
                {...articleToCardProps(article)}
              />
            ))}
          </div>
        </div>
        {desktopTail.length > 0 && (
          <div className='grid grid-cols-3 gap-8'>
            {desktopTail.map((article) => (
              <Card
                key={article.id}
                variant='medium'
                {...articleToCardProps(article)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
