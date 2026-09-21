---
title: "Firefox 156 : tester des features sans syntaxe dédiée"
excerpt: "named-feature() étend les requêtes @supports en CSS"
summary: "Firefox 156, sorti le 15 septembre, ajoute named-feature() à la règle @supports pour tester la prise en charge de fonctionnalités CSS qui n'ont pas de syntaxe détectable autrement, comme les positions d'ancrage suivant les transformations."
date: 2026-09-14T00:00:00Z
reading_time: 3
sources:
  [
    { label: "MDN — Firefox 156", url: "https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/156" },
    { label: "MDN — @supports", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@supports" }
  ]
category: 'design'
---

# Firefox 156 : tester des features sans syntaxe dédiée

Mozilla a publié Firefox 156 en version stable le 15 septembre 2026. Parmi les nouveautés listées dans les notes de version pour développeurs, une fonctionnalité CSS retient l'attention des intégrateurs qui manient les requêtes de compatibilité : `named-feature()`.

## Tester ce qui n'a pas de syntaxe détectable

La règle `@supports` sert habituellement à tester si un navigateur comprend une propriété ou une valeur CSS donnée, en écrivant littéralement cette déclaration comme condition. Le problème survient pour les fonctionnalités qui n'ont pas de syntaxe CSS propre à tester — leur comportement dépend d'un réglage interne du moteur de rendu plutôt que d'une propriété déclarative.

`named-feature()` comble ce manque en introduisant un mot-clé prédéfini que l'on peut interroger directement, par exemple :

```css
@supports named-feature(anchor-position-follows-transforms) {
  /* styles appliqués seulement si le navigateur
     fait suivre les positions d'ancrage aux transformations */
}
```

Le mot-clé cité en exemple par MDN, `anchor-position-follows-transforms`, illustre bien le cas d'usage : savoir si un élément positionné avec CSS Anchor Positioning continue de suivre son ancre quand celle-ci est déplacée via `transform`, un comportement qui ne correspond à aucune propriété testable directement.

## Pourquoi ça compte

À mesure que CSS gagne des fonctionnalités de plus en plus fines, certaines n'ont plus de traduction directe en une simple propriété ou valeur interrogeable. `named-feature()` donne aux développeurs un mécanisme standardisé pour écrire des fallbacks robustes sur ce type de comportement, plutôt que de recourir à des détections fragiles côté JavaScript.
