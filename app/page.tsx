import { CategoryFilter } from '@/components/category';
import { HeroSlideshow, UniformGrid } from '@/components/listing';
import { EmptyNotice } from '@/components/shared';
import { PageHeading, SectionHeading } from '@/components/typo';
import { getHeroSlides, getLastIssueDate, loadIssue } from '@/server';
import {
  filterByCategory,
  formatWeekRange,
  getExpectedLastMonday,
  isCategorySlug,
  toIsoDay
} from '@/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

type HomeProps = Pick<PageProps<'/'>, 'searchParams'>;

const Home = async ({ searchParams }: HomeProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const latestDate = await getLastIssueDate();
  const issue = latestDate ? await loadIssue(latestDate) : null;
  const heroSlides = await getHeroSlides(active);

  const isLastWeek = latestDate === toIsoDay(getExpectedLastMonday());

  return (
    <div className='flex w-full flex-col gap-8 md:gap-16'>
      <div>
        <p className='mt-4 font-mono text-xs tracking-[0.04em] text-tertiary uppercase'>
          tech.news
        </p>
        <PageHeading>L’essentiel de la tech, chaque lundi.</PageHeading>
        <CategoryFilter basePath='/' active={active} />
      </div>

      {heroSlides.length > 0 && (
        <HeroSlideshow key={active ?? 'all'} slides={heroSlides} />
      )}

      {issue ? (
        <div className='flex w-full flex-col gap-8'>
          <SectionHeading>
            {isLastWeek
              ? 'Les actus de la semaine dernière'
              : formatWeekRange(issue.date)}
          </SectionHeading>

          <UniformGrid articles={filterByCategory(issue.articles, active)} />
        </div>
      ) : (
        <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
      )}
    </div>
  );
};

export default Home;
