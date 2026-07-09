import { READ_ARTICLES_STORAGE_KEY } from './constants';

export const getReadList = (): string[] => {
  try {
    const rawData = window.localStorage.getItem(READ_ARTICLES_STORAGE_KEY);
    if (!rawData) return [];
    const parsedData: unknown = JSON.parse(rawData);
    return Array.isArray(parsedData) ? parsedData : [];
  } catch {
    return [];
  }
};
