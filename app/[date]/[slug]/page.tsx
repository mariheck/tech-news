import { FullArticle } from '@/components/article';
import { ISO_DATE, listArticleParams, loadArticle } from '@/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Params = { date: string; slug: string };
type ArticlePageProps = {
  params: Promise<Params>;
  searchParams: Promise<{ from?: string }>;
};

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
    return {
      title: `${article.title} | tech.news`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [article.image],
        type: 'article'
      }
    };
  } catch {
    return {};
  }
};

const ArticlePage = async ({ params, searchParams }: ArticlePageProps) => {
  const { date, slug } = await params;
  const { from } = await searchParams;

  if (!ISO_DATE.test(date)) notFound();

  const article = await loadArticle(date, slug).catch(() => null);

  if (!article) notFound();

  const backHref = from === 'archives' ? '/archives' : '/';

  return <FullArticle article={article} backHref={backHref} />;
};

export default ArticlePage;
