import { HeroImage } from '@/components/decoration';
import { StyledMarkdown } from '@/components/typo';
import type { Article } from '@/types';
import { categoryToLabel } from '@/utils';

type ArticleBodyProps = Pick<
  Article,
  'title' | 'category' | 'image' | 'content'
>;

export const ArticleBody = ({
  title,
  category,
  image,
  content
}: ArticleBodyProps) => {
  return (
    <div className='max-w-180'>
      <div className='mb-9 relative'>
        <HeroImage src={image} alt={title} />
        <span className='absolute top-2.5 right-3 sm:top-4 sm:right-5.5 text-label text-[0.6rem] md:text-[0.7rem] text-(--accent-light)'>
          {categoryToLabel[category]}
        </span>
      </div>
      <StyledMarkdown markdown={content} />
    </div>
  );
};
