---
title: "Tailwind CSS 4.3 : scrollbars, couleurs et webpack"
excerpt: "Tailwind v4.3 : scrollbars natifs, 4 nouvelles palettes et plugin webpack."
summary: "Tailwind CSS 4.3 ajoute les utilitaires de scrollbar natifs, @container-size pour requêtes de hauteur, 4 nouvelles palettes (mauve, olive, mist, taupe) et un plugin webpack first-class pour les builds Next.js."
date: 2026-05-04T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Tailwind CSS v4.3 blog', url: 'https://tailwindcss.com/blog/tailwindcss-v4-3' },
    { label: 'GitHub release v4.3.0', url: 'https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.0' }
  ]
category: 'design'
---

# Tailwind CSS 4.3 : scrollbars, couleurs et webpack

Tailwind CSS 4.3.0 a été publié le 8 mai 2026, concentrant deux cycles de releases en une seule livraison. Au programme : le stylage natif des scrollbars, de nouveaux utilitaires de layout, quatre nouvelles palettes de couleurs et un plugin webpack officiel qui change la donne pour les projets Next.js.

## Scrollbar styling natif

La fonctionnalité la plus attendue de cette version : un ensemble complet d'**utilitaires de scrollbar** en première partie, sans plugin tiers.

```html
<div class="scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 scrollbar-gutter-stable">
  ...
</div>
```

Les nouveaux utilitaires :
- **`scrollbar-{auto,thin,none}`** — contrôle la largeur et la visibilité de la scrollbar
- **`scrollbar-thumb-{color}`** — couleur du curseur de défilement
- **`scrollbar-track-{color}`** — couleur de la piste de défilement
- **`scrollbar-gutter-{auto,stable,stable both-edges}`** — gestion de l'espace réservé à la scrollbar pour éviter les layout shifts

## Container queries par hauteur

Nouvel utilitaire **`@container-size`** permettant d'écrire des container queries basées sur la **hauteur** du conteneur, en plus de la largeur déjà supportée. Utile pour les composants qui s'adaptent à l'espace vertical disponible, comme des sidebars ou des panneaux redimensionnables.

## Nouvelles propriétés CSS

- **`zoom-*`** — utilitaires pour la propriété CSS `zoom` (ex: `zoom-150` pour 150%)
- **`tab-*`** — contrôle de `tab-size` pour l'indentation des tabulations dans les éléments `<pre>` et `<code>`
- **`font-features-*`** — accès aux fonctionnalités OpenType (ligatures, chiffres tabulaires, petites majuscules…)

## Quatre nouvelles palettes de couleurs

Tailwind 4.3 ajoute quatre nouvelles teintes à la palette standard :
- **Mauve** — gris légèrement violacé
- **Olive** — vert désaturé et chaud
- **Mist** — gris bleuté doux
- **Taupe** — beige grisé

Ces quatre palettes viennent compléter les teintes existantes pour couvrir des directions visuelles souvent demandées par les designers.

## Utilitaires logiques étendus

De nouveaux utilitaires pour les propriétés logiques CSS (essentiels pour les layouts multilingues et RTL) :
- **`pbs-*`**, **`mbs-*`** — padding/margin en début de bloc
- **`inline-*`**, **`block-*`** — sizing en dimensions logiques
- Nouveaux utilitaires `inset` logiques

## Variants et utilitaires fonctionnels

- **Stacked et compound variants** dans `@variant` — empiler des conditions de variant pour des sélecteurs CSS plus précis
- Support de **`--default()`** dans `--value()` et `--modifier()`  dans les définitions d'utilitaires fonctionnels

## Plugin webpack first-class

Jusqu'ici, Tailwind v4 était optimisé pour les environnements Vite. La version 4.3 introduit un **plugin webpack officiel** qui apporte des performances de build significativement améliorées pour les projets basés sur webpack — dont Next.js (qui utilise webpack en `pages/` ou pour certains cas d'usage legacy) et d'autres outils de build.

C'est un signal fort de la part de Tailwind Labs : l'écosystème webpack reste une cible de premier plan, même à l'ère de Vite et Turbopack.
