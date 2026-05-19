export const ARTICLES = [
  {
    id: 'next-16',
    title:
      'Next.js 16, tour de la release : breaking changes et impact migration',
    excerpt:
      'Turbopack stable par défaut, refonte du cache, nouvelles APIs server. Le calendrier de migration et ce qui casse vraiment en prod.',
    summary:
      'Vercel publie Next.js 16 avec Turbopack stable, un cache repensé en profondeur, et des breaking changes ciblés. On passe en revue ce qui mérite votre semaine de migration et ce qui peut attendre le prochain trimestre.',
    images: ['/images/next.jpg'],
    date: '11 mai 2026',
    duration: '8 minutes',
    sources: [
      { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' },
      { label: 'RFC: cache directives', url: 'github.com/vercel/next.js' },
      { label: 'Migration codemods', url: 'github.com/vercel/next-codemod' }
    ]
  },
  {
    id: 'css-scroll',
    title: 'Animations CSS scroll-driven : chorégraphier la page au scroll',
    excerpt:
      'animation-timeline, scroll() et view() débarquent stables sur tous les navigateurs majeurs. Patterns concrets et gotchas perf.',
    summary:
      'Les animations scroll-driven en CSS pur sortent enfin du flag Chrome. On regarde les patterns qui marchent vraiment, ceux qui tuent la perf, et comment dégrader proprement sur les navigateurs en retard.',
    images: ['/images/css.jpg'],
    date: '11 mai 2026',
    duration: '6 minutes',
    sources: [
      {
        label: 'CSS Scroll-Driven Animations spec',
        url: 'drafts.csswg.org/scroll-animations'
      },
      { label: 'Bramus demos', url: 'scroll-driven-animations.style' },
      {
        label: 'Caniuse animation-timeline',
        url: 'caniuse.com/css-scroll-timeline'
      }
    ]
  },
  {
    id: 'design-2026',
    title:
      'Tendances web design 2026 : moins de visuels théâtraux, plus de clarté native',
    excerpt:
      'Retour de la sobriété éditoriale, fin du brutalist gratuit, type expressive contenue. Les sites qui marquent en 2026.',
    summary:
      'Après trois ans de surenchère visuelle, les sites qui marquent en 2026 reviennent à une sobriété éditoriale assumée. Typographie expressive mais contenue, motion à dose homéopathique, retour des grilles solides.',
    images: ['/images/design.jpg'],
    date: '11 mai 2026',
    duration: '7 minutes',
    sources: [
      { label: 'Awwwards SOTY 2026', url: 'awwwards.com/sotd' },
      { label: 'CSS Design Awards Q1', url: 'cssdesignawards.com' },
      { label: 'Site Inspire collection', url: 'siteinspire.com/2026' }
    ]
  },
  {
    id: 'sonnet-46',
    title: 'Sortie de Claude Sonnet 4.6 : ce qui change pour le code agentique',
    excerpt:
      'Tool use plus stable, contexte 1M, latence en baisse de 30%. Bench réel sur trois agents en production.',
    summary:
      'Anthropic publie Sonnet 4.6 avec un tool use nettement plus fiable, un contexte étendu à 1M tokens, et une latence en baisse de 30%. On a fait tourner trois agents de prod dessus pendant une semaine.',
    images: ['/images/sonnet.jpg'],
    date: '11 mai 2026',
    duration: '9 minutes',
    sources: [
      {
        label: 'Anthropic release notes',
        url: 'anthropic.com/news/sonnet-4-6'
      },
      { label: 'Bench SWE-Bench Verified', url: 'swebench.com/leaderboard' },
      {
        label: 'Cookbook : tool use patterns',
        url: 'github.com/anthropics/cookbook'
      }
    ]
  }
];
