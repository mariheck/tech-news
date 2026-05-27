import type { Article } from '@/types';
import { accentToCssVar, accentToLightCssVar, categoryToAccent } from '@/utils';
import type { CSSProperties } from 'react';
import { ArticleBody } from './article-body';
import { MainInfo } from './main-info';
import { Sources } from './sources';

type FullArticleProps = {
  article: Article;
};

export const FullArticle = ({ article }: FullArticleProps) => {
  const accent = categoryToAccent[article.category];
  const style = {
    '--accent': accentToCssVar[accent],
    '--accent-light': accentToLightCssVar[accent]
  } as CSSProperties;

  return (
    <article
      style={style}
      className='grid grid-cols-1 md:grid-cols-[280px_1fr] md:gap-[clamp(2.5rem,6vw,5.5rem)]'
    >
      <MainInfo
        category={article.category}
        summary={article.summary}
        date={article.date}
        readingTime={article.readingTime}
        sources={article.sources}
        className='mb-6 md:mb-0 md:sticky md:top-28 md:pt-2 md:self-start'
      />

      <ArticleBody
        title={article.title}
        image={article.image}
        content={article.content}
      />

      {/* Mobile screen only */}
      <Sources
        sources={article.sources}
        className='md:hidden mt-10 pt-6 border-t border-(--accent-light)/25'
      />
    </article>
  );
};
