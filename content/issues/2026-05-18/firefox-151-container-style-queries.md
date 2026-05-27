---
title: 'Firefox 151 rend les container style queries Baseline'
excerpt: 'Firefox 151 (mai 2026) active les style queries, feature désormais disponible partout.'
summary: 'Sorti le 19 mai 2026, Firefox 151 active les container style queries par défaut, rendant cette feature CSS officiellement Baseline. Elle permet d'appliquer des styles en fonction des custom properties d'un conteneur parent, avec support de la syntaxe de comparaison (>, <, >=, <=).'
date: 2026-05-18T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'MDN – Firefox 151 dev notes', url: 'developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/151' },
    { label: 'Firefox 151 release notes', url: 'firefox.com/en-US/firefox/151.0/releasenotes/' },
    { label: '9to5Linux – Firefox 151', url: '9to5linux.com/firefox-151-is-now-available-for-download-this-is-whats-new' },
    { label: 'Bugzilla – container style queries', url: 'bugzilla.mozilla.org/show_bug.cgi?id=2030645' }
  ]
category: 'design'
---

# Firefox 151 rend les container style queries Baseline

Firefox 151 est sorti le **19 mai 2026**. La mise à jour la plus notable pour les développeurs web : l'activation par défaut des **container style queries**, qui deviennent ainsi une feature Baseline disponible dans tous les navigateurs majeurs — Chrome, Edge, Safari et maintenant Firefox.

## Qu'est-ce que les container style queries ?

Les container queries de taille (`@container`) sont connues depuis un moment, mais leur pendant *style* était jusqu'ici limité à Chromium. La syntaxe `style()` permet d'interroger les **valeurs calculées des custom properties** d'un conteneur parent et d'appliquer des styles à ses enfants en conséquence.

```css
@container style(--variant: featured) {
  .card {
    border-color: var(--accent);
    font-size: 1.125rem;
  }
}
```

Le composant lui-même n'a pas besoin de connaître sa variante — c'est le contexte parent qui la communique via une custom property. Le résultat est un découplage propre entre logique de layout et logique de style.

## Support de la syntaxe de comparaison

Firefox 151 va plus loin en supportant la **syntaxe de plage** dans les style queries. Il est maintenant possible de comparer des valeurs numériques avec les opérateurs `>`, `<`, `>=` et `<=` :

```css
@container style(--priority >= 2) {
  .badge {
    background: var(--accent);
  }
}
```

Cela ouvre la porte à des systèmes de design qui expriment des niveaux d'importance, des indices ou des états ordonnés directement via des variables CSS, sans couche JavaScript.

## CSSContainerRule.conditions côté JS

Du côté des APIs JavaScript, Firefox 151 supporte également la propriété `CSSContainerRule.conditions`, qui reflète un `@container` comme un tableau d'objets représentant chaque condition individuelle. Utile pour inspecter ou manipuler programmatiquement les règles container.

## Autres ajouts développeurs

Firefox 151 complète le tableau avec plusieurs autres features :

- **`shadowrootslotassignment`** sur les éléments `<template>` : permet de déclarer le comportement d'assignation des slots pour les shadow roots directement en HTML.
- **Web Serial API** sur desktop : accès aux périphériques série (microcontrôleurs, imprimantes 3D, CNC) depuis le navigateur.
- **Mise à jour de l'Anchor Positioning** : la propriété `position-anchor` passe à `normal` par défaut ; les popovers qui utilisent `anchor()` ou `anchor-center` doivent maintenant opter explicitement avec `position-anchor: auto`.

## Pourquoi c'est important

Les container style queries étaient la dernière pièce manquante pour construire des composants véritablement "context-aware" en CSS pur. Avec Firefox 151, on peut commencer à les utiliser en production sans polyfill — à condition de ne pas cibler des navigateurs trop anciens.
