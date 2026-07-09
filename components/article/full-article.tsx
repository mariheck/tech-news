import { ScrollToTop } from '@/components/shared';
import type { Article } from '@/types';
import {
  accentToCssVar,
  accentToLightCssVar,
  articleHref,
  categoryToAccent
} from '@/utils';
import type { CSSProperties } from 'react';
import { ArticleBody } from './article-body';
import { MainInfo } from './main-info';
import { MarkAsRead } from './mark-as-read';
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
      data-accent={accent}
      style={style}
      className='grid grid-cols-1 md:grid-cols-[280px_1fr] md:gap-[clamp(2.5rem,6vw,5.5rem)]'
    >
      <ScrollToTop />
      <MarkAsRead href={articleHref({ date: article.date, slug: article.slug })} />
      <MainInfo
        summary={article.summary}
        date={article.date}
        readingTime={article.readingTime}
        sources={article.sources}
        className='mb-8 md:mb-0 md:sticky md:top-28 md:pt-2 md:self-start'
      />

      <ArticleBody
        title={article.title}
        category={article.category}
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
