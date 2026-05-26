---
title: "CSS sibling-index() : staggering natif sans JavaScript"
excerpt: "Deux fonctions CSS Level 5 : sibling-index() et sibling-count() pour du staggering d'animations natif."
summary: "sibling-index() et sibling-count(), supportées depuis Chrome 137 et Safari TP 226, permettent à un élément de connaître sa position et le total de ses frères. Résultat : staggering d'animations sans JavaScript, en une ligne de calc(). Un tutoriel Smashing Magazine publié le 21 mai détaille les cas d'usage."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Smashing Magazine", url: "https://www.smashingmagazine.com/2026/05/mathematical-layouts-sibling-index-sibling-count/" },
    { label: "MDN - sibling-index()", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-index" },
    { label: "MDN - sibling-count()", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/sibling-count" },
    { label: "Caniuse - sibling-count", url: "https://caniuse.com/wf-sibling-count" }
  ]
category: "design"
---

# CSS sibling-index() : staggering natif sans JavaScript

Depuis des années, créer des animations en cascade sur une liste en CSS pur nécessitait soit d'écrire autant de règles `:nth-child()` que d'éléments, soit de passer par JavaScript pour injecter un `--delay` sur chaque nœud. Deux nouvelles fonctions de CSS Values and Units Module Level 5, disponibles depuis Chrome 137, changent la donne : `sibling-index()` et `sibling-count()`.

## Ce que font ces fonctions

**`sibling-index()`** retourne un entier représentant la position de l'élément courant parmi ses frères dans le DOM. L'index commence à 1.

**`sibling-count()`** retourne le nombre total d'éléments frères (enfants directs du même parent), en incluant l'élément lui-même.

Ces valeurs sont calculées par le navigateur et s'utilisent directement dans des expressions `calc()`.

## Le cas d'usage phare : l'animation staggered

```css
.item {
  animation: fadeIn 0.4s ease both;
  animation-delay: calc(sibling-index() * 0.08s);
}
```

En une ligne, chaque élément reçoit un délai proportionnel à sa position — sans JavaScript, sans attribut HTML généré dynamiquement. La durée peut également s'adapter à la taille de la liste :

```css
.item {
  animation-duration: calc(0.6s + sibling-count() * 0.02s);
}
```

Résultat : une cascade dont la durée totale s'ajuste automatiquement selon le nombre d'éléments.

## Au-delà des animations

Smashing Magazine publie le 21 mai un tutoriel signé Durgesh Rajubhai Pawar qui illustre des cas moins évidents : espacements non uniformes, tailles progressives, palettes de couleurs dégradées par position. Ces effets nécessitaient jusqu'ici des variables CSS injectées côté serveur ou du JavaScript.

## Support navigateur et progressive enhancement

| Navigateur | Statut |
|-----------|--------|
| Chrome 137+ | Supporté |
| Safari Technology Preview 226 | Supporté |
| Firefox | En cours (bugzilla 1953973) |
| Baseline | Pas encore atteint |

La stratégie recommandée est le progressive enhancement via `@supports` :

```css
@supports (animation-delay: calc(sibling-index() * 1s)) {
  .item {
    animation-delay: calc(sibling-index() * 0.08s);
  }
}
```

Les navigateurs non supportés reçoivent le fallback défini en dehors du bloc — tous les utilisateurs voient les éléments, seuls ceux sur Chrome 137+ voient la cascade animée.

## À retenir

`sibling-index()` et `sibling-count()` sont des briques de bas niveau avec un impact pratique immédiat sur les animations de listes. La portée est plus large que le staggering : tout layout qui dépend de la position d'un élément parmi ses pairs devient exprimable en CSS pur. Pas encore cross-browser, mais déjà utilisable en production avec une dégradation propre.
