---
title: 'sibling-index() : du stagger CSS sans JavaScript'
excerpt: 'Deux nouvelles fonctions CSS pour les effets décalés en cascade, sans JS ni :nth-child.'
summary: 'sibling-index() et sibling-count() sont deux fonctions CSS (Values & Units L5) qui donnent à chaque élément une connaissance native de sa position parmi ses voisins. Smashing Magazine en fait le tour le 21 mai : animations décalées, palettes graduelles, mises en page mathématiques — en pur CSS.'
date: 2026-05-18T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Smashing Magazine – sibling-index()', url: 'smashingmagazine.com/2026/05/mathematical-layouts-sibling-index-sibling-count/' },
    { label: 'SitePoint – native staggering', url: 'sitepoint.com/css-siblingindex-and-siblingcount-native-list-staggering-without-javascript/' },
    { label: 'MDN – sibling-index()', url: 'developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-index' },
    { label: 'Chrome Status – feature', url: 'chromestatus.com/feature/6225478530367488' }
  ]
category: 'design'
---

# sibling-index() : du stagger CSS sans JavaScript

Le 21 mai 2026, Smashing Magazine publie un tour complet des fonctions `sibling-index()` et `sibling-count()`, deux additions au **CSS Values and Units Module Level 5** qui suppriment un des derniers besoins récurrents de JavaScript côté layout : savoir où un élément se trouve parmi ses frères.

## Ce que font ces deux fonctions

`sibling-index()` retourne la **position 1-based** de l'élément parmi les enfants de son parent. Premier enfant = 1, cinquième enfant = 5. `sibling-count()` retourne le **nombre total d'enfants** du parent.

Ces deux valeurs sont utilisables directement dans des calculs CSS — `calc()`, `hsl()`, `animation-delay`, `translate`, etc. — ce qui ouvre la porte à des effets de cascade entièrement déterministes sans `:nth-child()` ni script.

## Exemples concrets

### Animation décalée

```css
li {
  animation-delay: calc(sibling-index() * 80ms);
}
```

Chaque item de liste démarre son animation 80 ms après le précédent, quel que soit le nombre d'items. Pas de classes dynamiques, pas de JS, pas de hardcoded `:nth-child(1)` → `:nth-child(n)`.

### Palette de couleur progressive

```css
.card {
  background: hsl(
    calc(200 + sibling-index() * (60 / sibling-count())),
    60%,
    55%
  );
}
```

La teinte se distribue automatiquement sur toute la gamme de 60° en fonction du nombre total de cartes. Ajoutez ou retirez un élément : la palette s'ajuste sans toucher au CSS.

### Mise en page mathématique

Smashing Magazine illustre des grilles où la taille ou la position d'un élément est une fonction de son index — type spirale logarithmique ou grille progressive — en quelques lignes de CSS pur, sans `grid-template-areas` statiques.

## Support navigateur

Chrome et les navigateurs Chromium (Edge 120+, Brave, Opera) disposent du support stable. Firefox a l'implémentation en cours avec une sortie stable attendue en Q2 2026. Safari est en développement côté WebKit.

La feature est donc aujourd'hui utilisable en production pour les contextes où Chromium est dominant (outils internes, apps web managées), et à réserver à l'enrichissement progressif pour les sites grand public en attendant Firefox stable.

## Pourquoi ça change la donne

Pendant des années, le stagger et les mises en page positionnelles ont requis soit du `:nth-child()` laborieux (qui casse dès qu'on change le nombre d'items), soit du JavaScript pour injecter des variables CSS via `style="--i: 3"`. Les deux approches ont le même défaut : elles couplent la logique de présentation à la structure ou au JS.

`sibling-index()` et `sibling-count()` déclarent ce contexte directement dans le modèle de valeurs CSS — exactement là où il devrait vivre.
