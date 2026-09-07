import type { Route } from 'next';

export type PaginationPageDetails<RouteType extends string> = {
  href: Route<RouteType>;
  label: string;
};

export type PaginationSize = 'sm' | 'md';
