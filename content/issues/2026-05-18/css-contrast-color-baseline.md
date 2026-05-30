---
title: "contrast-color() : l'accessibilité couleur en CSS natif"
excerpt: 'La fonction qui calcule le bon contraste est enfin cross-browser et Baseline Newly Available.'
summary: "contrast-color() atteint le Baseline Newly Available dans Chrome 147, Firefox 146 et Safari 26.0. Le navigateur calcule à la volée la couleur de texte accessible sur n'importe quel fond, avec une syntaxe étendue pour contrôler le ratio cible."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'Smashing Mag – contrast-color()',
      url: 'https://www.smashingmagazine.com/2026/05/building-self-correcting-color-systems-contrast-color/'
    }
  ]
category: 'design'
---

# contrast-color() : l'accessibilité couleur en CSS natif

Depuis plusieurs années, garantir un contraste de texte accessible sur un fond dynamique exigeait soit JavaScript (calcul WCAG en runtime), soit une duplication de tokens (une couleur pour fond clair, une pour fond foncé). `contrast-color()` résout le problème nativement, et elle est désormais disponible dans **tous les navigateurs majeurs** — Chrome 147, Firefox 146 et Safari 26.0 — ce qui lui donne le statut **Baseline Newly Available**.

## Ce que fait `contrast-color()`

La fonction calcule à la volée, au moment du style, la couleur parmi un ensemble de candidates qui offre le meilleur ratio de contraste avec un fond de référence. La syntaxe de base :

```css
color: contrast-color(var(--surface-color));
```

Ici, le navigateur choisit entre noir et blanc pour maximiser le contraste sur `--surface-color`. C'est le cas d'usage le plus simple — et déjà suffisant pour des systèmes de thèmes basés sur une variable de couleur de fond.

## La syntaxe étendue de CSS Color Level 6

CSS Color Level 6 étend la fonction avec deux paramètres supplémentaires : une liste de couleurs candidates et un ratio cible.

```css
color: contrast-color(
  var(--surface-color) vs var(--text-primary),
  var(--text-secondary),
  black target 4.5
);
```

Le navigateur parcourt les candidates dans l'ordre et retourne la première qui atteint le ratio WCAG AA (4.5:1 pour le texte normal). Si aucune candidate ne satisfait le ratio, il retourne celle avec le meilleur score disponible.

Ce mécanisme permet de construire des systèmes de thèmes où le texte s'adapte automatiquement à n'importe quelle couleur de fond définie par l'utilisateur — design tokens dynamiques, customisation par client, modes high-contrast.

## Un problème de fond

Les chiffres cités dans l'article de Smashing Magazine sont frappants : **83,9 % des homepages** analysées présentaient encore des échecs de contraste de texte en 2026. Ce n'est pas principalement un problème de volonté des équipes — c'est un problème de fragile : les couleurs changent, les composants s'assemblent différemment selon le contexte, les tokens évoluent. Sans automatisation, les régressions de contraste sont quasi inévitables.

`contrast-color()` est la première réponse native du CSS à ce problème systémique. L'article de Smashing Magazine est à ce jour le guide le plus complet sur la syntaxe étendue de CSS Color Level 6, publié exactement au moment où la fonction atteint le support universel.

## Intégration dans un design system

Pour les équipes qui maintiennent un design system, la migration vers `contrast-color()` peut être progressive :

1. Identifier les tokens de couleur de surface qui varient selon le contexte
2. Remplacer les paires `--text-on-surface-light` / `--text-on-surface-dark` par une seule valeur calculée via `contrast-color()`
3. Valider que les candidats couvrent les cas de contraste attendus

L'avantage par rapport à JavaScript : le calcul se fait au niveau du style, avant le paint — pas de flash de couleur incorrecte lors du premier rendu.

## Support navigateur

| Navigateur | Version supportée |
| ---------- | ----------------- |
| Chrome     | 147+              |
| Firefox    | 146+              |
| Safari     | 26.0+             |
| Edge       | 147+ (Chromium)   |

Le polyfill JavaScript reste utile pour les navigateurs plus anciens (en particulier Firefox 145- et Safari 25-), mais la large majorité des navigateurs en production supportent maintenant la fonction nativement.
