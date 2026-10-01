import { ISO_MONTH } from './constants';

/**
 * Guards a month key from having the wrong format
 */
export const isMonthKey = (value: string): boolean => {
  return ISO_MONTH.test(value);
};
