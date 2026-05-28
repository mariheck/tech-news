import { HeroImage, StyledMarkdown } from '@/components/ui/shared';
import type { Article } from '@/types';
import { categoryToAccent, categoryToLabel } from '@/utils';
import { CategoryBadge } from '../category';

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
      <div className='mb-12 md:mb-9 relative'>
        <div className='absolute top-3 right-4 z-10 md:hidden'>
          <CategoryBadge
            label={categoryToLabel[category]}
            accent={categoryToAccent[category]}
          />
        </div>
        <HeroImage src={image} alt={title} />
      </div>
      <StyledMarkdown markdown={content} />
    </div>
  );
};
