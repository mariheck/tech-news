import { PageHeader, PageStack } from '@/components/layout';
import { HeroSlideshow, UniformGrid } from '@/components/listing';
import { EmptyNotice } from '@/components/shared';
import { SectionHeading } from '@/components/typo';
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
  const activeCategory = isCategorySlug(cat) ? cat : undefined;

  const latestDate = await getLastIssueDate();
  const issue = latestDate ? await loadIssue(latestDate) : null;
  const heroSlides = await getHeroSlides(activeCategory);

  const isLastWeek = latestDate === toIsoDay(getExpectedLastMonday());

  return (
    <PageStack>
      <PageHeader
        eyebrow='tech.news'
        title='L’essentiel de la tech, chaque lundi.'
        basePath='/'
        activeCategory={activeCategory}
      />

      {heroSlides.length > 0 && (
        <HeroSlideshow key={activeCategory ?? 'all'} slides={heroSlides} />
      )}

      {issue ? (
        <div className='flex w-full flex-col gap-8'>
          <SectionHeading>
            {isLastWeek
              ? 'Les actus de la semaine dernière'
              : formatWeekRange(issue.date)}
          </SectionHeading>

          <UniformGrid
            articles={filterByCategory(issue.articles, activeCategory)}
          />
        </div>
      ) : (
        <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
      )}
    </PageStack>
  );
};

export default Home;
