import {
  CategoryFilter,
  FeatureGrid,
  PageHeading,
  SectionHeading
} from '@/components/ui';
import { filterByCategory, isCategorySlug, loadIssue } from '@/utils';

type HomeProps = {
  searchParams: Promise<{ cat?: string }>;
};

const Home = async ({ searchParams }: HomeProps) => {
  const { cat } = await searchParams;
  const active = isCategorySlug(cat) ? cat : undefined;

  const issue = await loadIssue('2026-05-18');
  const articles = filterByCategory(issue.articles, active);

  return (
    <div className='flex flex-col gap-8'>
      <div className='mb-8'>
        <PageHeading>L’essentiel de la tech, chaque lundi.</PageHeading>
        <CategoryFilter basePath='/' active={active} />
      </div>

      <SectionHeading>Les actus de la semaine dernière</SectionHeading>
      <FeatureGrid articles={articles} />
    </div>
  );
};

export default Home;
