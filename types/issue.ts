import type { Article } from './article';

export type Issue = {
  date: Date;
  intro: string;
  articles: Article[];
};
