import type { ArticleMeta } from '@/types';
import { articleToCardProps } from '@/utils';
import { Card } from './card';
import { EmptyNotice } from './shared';

type FeatureGridProps = { articles: ArticleMeta[] };

const HORIZONTAL_PEER_COUNT = 3;

export const FeatureGrid = ({ articles }: FeatureGridProps) => {
  const [feature, ...rest] = articles;
  const horizontalPeers = rest.slice(0, HORIZONTAL_PEER_COUNT);
  const desktopTail = rest.slice(HORIZONTAL_PEER_COUNT);

  return articles.length > 0 ? (
    <>
      <div className='flex flex-col gap-8 sm:hidden'>
        {articles.map((article, idx) => (
          <Card
            key={`${article.slug}-${idx}`}
            variant='medium'
            {...articleToCardProps(article)}
          />
        ))}
      </div>

      <div className='hidden sm:flex flex-col gap-8 lg:hidden'>
        {feature && (
          <Card
            variant='large'
            {...articleToCardProps(feature)}
            excerpt={feature.summary}
          />
        )}
        <div className='grid grid-cols-2 gap-8'>
          {rest.map((article, idx) => (
            <Card
              key={`${article.slug}-${idx}`}
              variant='medium'
              {...articleToCardProps(article)}
            />
          ))}
        </div>
      </div>

      <div className='hidden lg:flex flex-col gap-8'>
        <div className='grid grid-cols-2 gap-8'>
          {feature && (
            <Card
              variant='large'
              {...articleToCardProps(feature)}
              excerpt={feature.summary}
            />
          )}
          <div className='flex flex-col justify-between gap-8'>
            {horizontalPeers.map((article, idx) => (
              <Card
                key={`${article.slug}-${idx}`}
                variant='horizontal'
                {...articleToCardProps(article)}
              />
            ))}
          </div>
        </div>
        {desktopTail.length > 0 && (
          <div className='grid grid-cols-3 gap-8'>
            {desktopTail.map((article, idx) => (
              <Card
                key={`${article.slug}-${idx}`}
                variant='medium'
                {...articleToCardProps(article)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  ) : (
    <EmptyNotice>Aucun article cette semaine.</EmptyNotice>
  );
};
