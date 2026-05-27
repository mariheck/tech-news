import { HeroImage, StyledMarkdown } from '@/components/ui/shared';
import type { Article } from '@/types';

type ArticleBodyProps = Pick<Article, 'title' | 'image' | 'content'>;

export const ArticleBody = ({ title, image, content }: ArticleBodyProps) => {
  return (
    <div className='max-w-180'>
      <HeroImage src={image} alt={title} className='mb-12 md:mb-9' />
      <StyledMarkdown markdown={content} />
    </div>
  );
};
