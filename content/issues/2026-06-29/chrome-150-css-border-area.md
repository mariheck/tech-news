---
title: "Chrome 150 : le CSS rattrape enfin Safari"
excerpt: "background-clip: border-area débarque sur Chromium"
summary: "Chrome 150 (stable, 30 juin) ajoute background-clip: border-area en parité avec Safari, rend la propriété zoom animable et introduit des modificateurs de requête sur url() comme cross-origin() et integrity()."
date: 2026-06-29T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Chrome 150 release notes", url: "https://developer.chrome.com/release-notes/150" },
    { label: "New in Chrome 150", url: "https://developer.chrome.com/blog/new-in-chrome-150" },
    { label: "WebKit – border-area", url: "https://webkit.org/blog/16214/background-clip-border-area/" }
  ]
category: 'design'
---

# Chrome 150 : le CSS rattrape enfin Safari

Chrome 150 est passé stable le 30 juin 2026. Au-delà des 382 correctifs de sécurité inclus dans cette release (dont un correctif DevTools de sévérité moyenne), trois nouveautés CSS méritent l'attention d'un développeur qui soigne ses interfaces au pixel près.

## `background-clip: border-area`, enfin sur Chromium

WebKit avait introduit `background-clip: border-area` avant Chrome : cette valeur permet de clipper le fond d'un élément sur la zone réellement peinte par la bordure, en tenant compte de `border-width` et `border-style`, mais en ignorant la transparence éventuelle de `border-color`. C'est la technique qui permet de construire des bordures en dégradé complexes sans passer par le bricolage habituel à base de `border-image` ou de pseudo-éléments superposés.

Avec Chrome 150, Chromium rattrape Safari sur cette fonctionnalité précise. C'est un rattrapage de moteur à moteur plutôt qu'une nouveauté simultanée sur l'ensemble des navigateurs : Firefox n'a pas encore confirmé de support à ce stade, donc la fonctionnalité n'atteint pas encore le statut Baseline "Newly available" qui exigerait les trois moteurs majeurs. Elle reste néanmoins utilisable en production dès lors que votre matrice de support se limite à Chromium et WebKit.

```css
.card {
  border: 4px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(45deg, #fca5a5, #a78bfa) border-area;
}
```

## `zoom` devient animable

La propriété `zoom`, longtemps cantonnée à un usage non standard hérité d'Internet Explorer avant sa normalisation récente en CSS, devient interpolable dans Chrome 150. Concrètement, elle peut désormais être animée en CSS ou pilotée via la Web Animations API, ce qui ouvre la porte à des effets de zoom fluides sans recourir à `transform: scale()` — utile quand on veut zoomer en gardant le flux de layout intact plutôt qu'en superposant un calque transformé.

## Des modificateurs de sécurité sur `url()`

Chrome 150 ajoute aussi des modificateurs de requête directement dans la syntaxe `url()` : `cross-origin()`, `integrity()` et `referrer-policy()`. L'idée est de pouvoir exprimer, au niveau CSS, les mêmes contraintes de sécurité qu'on poserait aujourd'hui via des attributs HTML (`crossorigin`, `integrity`, `referrerpolicy`) sur une balise `<img>` ou `<link>` — utile notamment pour charger des polices ou des images externes avec une vérification d'intégrité, sans dépendance à du HTML additionnel.

## Ce que ça change en pratique

Aucune de ces trois fonctionnalités n'impose de migration : ce sont des additions, pas des breaking changes. `background-clip: border-area` est la plus directement exploitable pour du design d'interface — à réserver, pour l'instant, aux projets qui peuvent se permettre un fallback gracieux sur Firefox tant que le support n'y est pas confirmé.
