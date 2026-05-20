import { Card } from './card';

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  images: string[];
};

type FeatureGridProps = { articles: Article[] };

const HORIZONTAL_PEER_COUNT = 3;

const articleToCardProps = (article: Article) => ({
  href: '#',
  title: article.title,
  excerpt: article.excerpt,
  image: { src: article.images[0], alt: article.title }
});

export const FeatureGrid = ({ articles }: FeatureGridProps) => {
  const [feature, ...rest] = articles;
  const horizontalPeers = rest.slice(0, HORIZONTAL_PEER_COUNT);
  const desktopTail = rest.slice(HORIZONTAL_PEER_COUNT);

  return (
    <>
      <div className='flex flex-col gap-xl md:hidden'>
        {articles.map((article) => (
          <Card
            key={article.id}
            variant='medium'
            {...articleToCardProps(article)}
          />
        ))}
      </div>

      <div className='hidden md:flex flex-col gap-xl lg:hidden'>
        {feature && <Card variant='large' {...articleToCardProps(feature)} />}
        <div className='grid grid-cols-2 gap-xl'>
          {rest.map((article) => (
            <Card
              key={article.id}
              variant='medium'
              {...articleToCardProps(article)}
            />
          ))}
        </div>
      </div>

      <div className='hidden lg:flex flex-col gap-xl'>
        <div className='grid grid-cols-2 gap-xl'>
          {feature && <Card variant='large' {...articleToCardProps(feature)} />}
          <div className='flex flex-col justify-between gap-xl'>
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
          <div className='grid grid-cols-3 gap-xl'>
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
