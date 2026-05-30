import { CategoryFilter } from '@/components/category';
import { FeatureGrid, HeroSlideshow } from '@/components/listing';
import { EmptyNotice } from '@/components/shared';
import { PageHeading, SectionHeading } from '@/components/typo';
import {
  filterByCategory,
  formatWeekRange,
  getExpectedLastMonday,
  getHeroSlides,
  getLastIssueDate,
  isCategorySlug,
  loadIssue
} from '@/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

type HomeProps = {
  searchParams: Promise<{ cat?: string }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const latestDate = await getLastIssueDate();
  const issue = latestDate ? await loadIssue(latestDate) : null;
  const heroSlides = await getHeroSlides(active);

  const isLastWeek =
    latestDate === getExpectedLastMonday().toISOString().slice(0, 10);

  return (
    <div className='flex flex-col gap-16 w-full'>
      <div>
        <p className='mt-4 font-mono text-xs uppercase tracking-[0.04em] text-tertiary'>
          tech.news
        </p>
        <PageHeading>L’essentiel de la tech, chaque lundi.</PageHeading>
        <CategoryFilter basePath='/' active={active} />
      </div>

      {heroSlides.length > 0 && (
        <HeroSlideshow key={active ?? 'all'} slides={heroSlides} />
      )}

      {issue ? (
        <div className='flex flex-col gap-8 w-full'>
          <SectionHeading>
            {isLastWeek
              ? 'Les actus de la semaine dernière'
              : formatWeekRange(issue.date)}
          </SectionHeading>

          <FeatureGrid articles={filterByCategory(issue.articles, active)} />
        </div>
      ) : (
        <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
      )}
    </div>
  );
};

export default Home;
