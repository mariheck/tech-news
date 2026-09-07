import { PageHeader, PageStack } from '@/components/layout';
import { EmptyNotice } from '@/components/shared';
import { getArchiveIssueDates } from '@/server';
import { getMonthHref, isCategorySlug, listArchiveMonths } from '@/utils';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Archives',
  description:
    'Toutes les éditions hebdomadaires de tech.news, semaine après semaine.',
  alternates: { canonical: '/archives' }
};

type ArchivesPageProps = Pick<PageProps<'/archives'>, 'searchParams'>;

const ArchivesPage = async ({ searchParams }: ArchivesPageProps) => {
  const { cat } = await searchParams;
  const activeCategory = isCategorySlug(cat) ? cat : undefined;

  const archivedMonths = listArchiveMonths(await getArchiveIssueDates());
  const [lastMonth] = archivedMonths;

  if (lastMonth !== undefined) {
    const newPageHref = getMonthHref({
      month: lastMonth,
      category: activeCategory
    });
    redirect(newPageHref);
  }

  return (
    <PageStack>
      <PageHeader
        eyebrow='Archives'
        title='Toutes les éditions, semaine après semaine.'
        basePath='/archives'
        activeCategory={activeCategory}
      />
      <EmptyNotice>Aucun article disponible pour le moment.</EmptyNotice>
    </PageStack>
  );
};

export default ArchivesPage;
