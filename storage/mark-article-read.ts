import { READ_ARTICLES_STORAGE_KEY } from './constants';
import { getReadList } from './get-read-list';

export const markArticleRead = (href: string): void => {
  const readList = getReadList();

  if (readList.includes(href)) return;

  try {
    window.localStorage.setItem(
      READ_ARTICLES_STORAGE_KEY,
      JSON.stringify([...readList, href])
    );
  } catch {
    // Storage denied: the indicator simply won't remember this article.
  }
};
