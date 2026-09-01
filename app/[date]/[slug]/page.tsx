import { FullArticle } from '@/components/article';
import { listArticleParams, loadArticle } from '@/server';
import { ISO_DATE, categoryToLabel } from '@/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ArticlePageProps = Pick<PageProps<'/[date]/[slug]'>, 'params'>;
type Params = Awaited<ArticlePageProps['params']>;

export const dynamicParams = false;

export const generateStaticParams = async (): Promise<Params[]> => {
  return listArticleParams();
};

export const generateMetadata = async ({
  params
}: ArticlePageProps): Promise<Metadata> => {
  const { date, slug } = await params;

  if (!ISO_DATE.test(date)) return {};

  try {
    const article = await loadArticle(date, slug);
    const canonical = `/${date}/${slug}`;
    return {
      title: article.title,
      description: article.excerpt,
      alternates: { canonical },
      // og/twitter description omitted on purpose: Next inherits it from
      // `description` (the excerpt) above. See app/layout.tsx for the rationale.
      openGraph: {
        type: 'article',
        title: article.title,
        url: canonical,
        images: [article.image],
        publishedTime: article.date.toISOString(),
        section: categoryToLabel[article.category]
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        images: [article.image]
      }
    };
  } catch {
    return {};
  }
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { date, slug } = await params;

  if (!ISO_DATE.test(date)) notFound();

  const article = await loadArticle(date, slug).catch(() => null);

  if (!article) notFound();

  return <FullArticle article={article} />;
};

export default ArticlePage;
