export type FrontmatterValue =
  | string
  | number
  | boolean
  | Date
  | FrontmatterValue[]
  | { [key: string]: FrontmatterValue };

export type ParsedMarkdown<T = Record<string, FrontmatterValue>> = {
  data: T;
  content: string;
};
