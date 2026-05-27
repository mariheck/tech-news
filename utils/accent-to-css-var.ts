import type { AccentName } from '@/types';

export const accentToCssVar: Record<AccentName, string> = {
  peach: 'var(--color-accent-peach)',
  turquoise: 'var(--color-accent-turquoise)',
  raspberry: 'var(--color-accent-raspberry)',
  copper: 'var(--color-accent-copper)',
  iris: 'var(--color-accent-iris)',
  linen: 'var(--color-accent-linen)'
};

export const accentToLightCssVar: Record<AccentName, string> = {
  peach: 'var(--color-accent-peach-light)',
  turquoise: 'var(--color-accent-turquoise-light)',
  raspberry: 'var(--color-accent-raspberry-light)',
  copper: 'var(--color-accent-copper-light)',
  iris: 'var(--color-accent-iris-light)',
  linen: 'var(--color-accent-linen-light)'
};
