import { FullArticle } from '@/components/ui';
import { listArticleParams, loadArticle } from '@/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

type Params = { date: string; slug: string };
type ArticlePageProps = { params: Promise<Params> };

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

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { date, slug } = await params;

  if (!ISO_DATE.test(date)) notFound();

  const article = await loadArticle(date, slug).catch(() => null);

  if (!article) notFound();

  return <FullArticle article={article} />;
};

export default ArticlePage;
