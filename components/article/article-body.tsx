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
      <div className='relative mb-9'>
        <HeroImage src={image} alt={title} />
        <span className='text-label absolute top-2.5 right-3 text-[0.6rem] text-(--accent-light) sm:top-4 sm:right-5.5 md:text-[0.7rem]'>
          {categoryToLabel[category]}
        </span>
      </div>
      <StyledMarkdown markdown={content} />
    </div>
  );
};
