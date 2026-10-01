import { PageHeader, PageStack } from '@/components/layout';
import { WeeklyEdition } from '@/components/listing';
import { ArchiveMenu, MonthNavigation } from '@/features/archive';
import { getArchiveIssueDates, loadIssue } from '@/server';
import {
  filterByCategory,
  formatMonth,
  getMonthHref,
  isCategorySlug,
  isMonthKey,
  listArchiveMonths,
  listMonthIssueDates,
  toIsoDay
} from '@/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ArchiveMonthPageProps = PageProps<'/archives/[month]'>;
type Params = Awaited<ArchiveMonthPageProps['params']>;

export const dynamicParams = false;

export const generateStaticParams = async (): Promise<Params[]> => {
  const months = listArchiveMonths(await getArchiveIssueDates());
  const formattedMonths = months.map((month) => ({ month }));
  return formattedMonths;
};

export const generateMetadata = async ({
  params
}: Pick<ArchiveMonthPageProps, 'params'>): Promise<Metadata> => {
  const { month } = await params;

  if (!isMonthKey(month)) return {};

  const monthLabel = formatMonth(month);

  return {
    title: `Archives - ${monthLabel}`,
    description: `Les éditions hebdomadaires de tech.news publiées en ${monthLabel}.`,
    alternates: { canonical: getMonthHref({ month }) }
  };
};

const ArchiveMonthPage = async ({
  params,
  searchParams
}: ArchiveMonthPageProps) => {
  const { month } = await params;
  const { cat } = await searchParams;

  const activeCategory = isCategorySlug(cat) ? cat : undefined;

  const archiveDates = await getArchiveIssueDates();
  const archivedMonths = listArchiveMonths(archiveDates);

  if (!archivedMonths.includes(month)) notFound();

  const datesToLoad = listMonthIssueDates(archiveDates, month);
  const issues = await Promise.all(datesToLoad.map((date) => loadIssue(date)));

  return (
    <PageStack>
      <PageHeader
        eyebrow='Archives'
        title='Toutes les éditions, semaine après semaine.'
        basePath={getMonthHref({ month })}
        activeCategory={activeCategory}
        trailing={
          <ArchiveMenu
            months={archivedMonths}
            current={month}
            category={activeCategory}
          />
        }
      />
      <div className='flex flex-col gap-16'>
        {issues.map((issue) => (
          <WeeklyEdition
            key={toIsoDay(issue.date)}
            weekStart={issue.date}
            articles={filterByCategory(issue.articles, activeCategory)}
          />
        ))}
      </div>

      <MonthNavigation
        months={archivedMonths}
        currentMonth={month}
        activeCategory={activeCategory}
      />
    </PageStack>
  );
};

export default ArchiveMonthPage;
