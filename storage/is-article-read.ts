import { getReadList } from './get-read-list';

export const isArticleRead = (href: string): boolean => {
  const readList = getReadList();
  return readList.includes(href);
};
