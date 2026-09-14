---
title: "Chrome 153 inaugure le cycle de release bimensuel"
excerpt: "Google accélère les mises à jour avec de nouvelles API web"
summary: "Chrome 153, sorti le 8 septembre, inaugure la cadence bimensuelle de Google. Au programme : overflow:scroll clip en CSS, éléments HTML <camera> et <microphone>, Iterator.zip() en JavaScript et un parser XML en Rust."
date: 2026-09-07T00:00:00Z
reading_time: 5
sources:
  [
    { label: "9to5Google", url: "https://9to5google.com/2026/09/08/chrome-updates-two-weeks/" },
    { label: "Chrome for Developers", url: "https://developer.chrome.com/blog/new-in-chrome-153" },
    { label: "Chrome release notes 153", url: "https://developer.chrome.com/release-notes/153" },
    { label: "tbreak.com", url: "https://tbreak.com/chrome-two-week-release-cycle-2026/" },
    { label: "AndroidHeadlines", url: "https://www.androidheadlines.com/2026/09/google-chrome-153-update-two-week-release-cycle.html" }
  ]
category: 'frontend'
---

# Chrome 153 inaugure le cycle de release bimensuel

Le 8 septembre 2026, Google a publié Chrome 153 sur desktop (Windows, macOS, Linux), Android et iOS. Au-delà des nouvelles fonctionnalités, cette version marque un changement structurel : **Chrome passe à un cycle de mise à jour toutes les deux semaines**, contre quatre semaines auparavant.

## Un cycle bimensuel synchronisé avec Firefox et Edge

Ce passage à deux semaines aligne Chrome sur la cadence de Microsoft Edge. Firefox effectue le même mouvement simultanément, avec Firefox 155 qui inaugure lui aussi une cadence bimensuelle en septembre 2026. L'objectif commun est de livrer plus rapidement les corrections de sécurité et les nouvelles fonctionnalités aux utilisateurs qui maintiennent leur navigateur à jour.

Pour les développeurs, cela signifie des livraisons de fonctionnalités plus fréquentes mais plus petites — et un chemin vers la disponibilité Baseline potentiellement plus court pour les nouvelles API web.

## Nouvelles capacités CSS : overflow + clip

Chrome 153 étend la propriété CSS `overflow` pour supporter les combinaisons de valeurs scrollables et `clip`. Il est désormais possible d'écrire :

```css
.container {
  overflow: scroll clip; /* scroll horizontal, clip vertical */
  overflow: auto clip;   /* auto horizontal, clip vertical */
}
```

Auparavant, les deux axes s'appliquaient avec la même valeur ou nécessitaient des `overflow-x` et `overflow-y` séparés sans possibilité de combiner `scroll`/`auto` avec `clip`. Cette combinaison répond à un besoin fréquent dans les carrousels et les scrolleurs horizontaux qui doivent bloquer tout débordement vertical.

## Nouveaux éléments HTML : `<camera>` et `<microphone>`

Chrome 153 livre les éléments HTML `<camera>` et `<microphone>`, deux contrôles déclaratifs pour la capture média à une seule capacité. L'objectif est de simplifier l'accès à la caméra ou au micro sans avoir à passer par l'API `getUserMedia()` complète et sa gestion de permissions JavaScript.

```html
<camera></camera>
<microphone></microphone>
```

Ces éléments sont des premiers pas vers une intégration native de la capture média dans le HTML, dans la lignée de ce que `<video>` et `<audio>` ont fait pour la lecture.

## JavaScript : Iterator.zip() et Iterator.zipKeyed()

La méthode `Iterator.zip()` est désormais disponible dans le runtime JavaScript de Chrome. Elle permet de synchroniser l'avancement de plusieurs itérateurs en parallèle, retournant des tuples d'éléments correspondants.

```js
const a = [1, 2, 3][Symbol.iterator]();
const b = ['a', 'b', 'c'][Symbol.iterator]();

for (const [num, letter] of Iterator.zip(a, b)) {
  console.log(num, letter); // 1 'a', 2 'b', 3 'c'
}
```

`Iterator.zipKeyed()` fait de même avec des clés nommées. Ce sont des ajouts utiles pour les transformations de données fonctionnelles sans dépendances externes.

## Sécurité : parser XML réécrit en Rust

Chrome 153 remplace son moteur de parsing XML par une implémentation en Rust memory-safe pour les scénarios courants. Cette réécriture interne réduit la surface d'attaque liée aux vulnérabilités mémoire dans le traitement XML, une catégorie de failles historiquement fréquente dans les moteurs C++.

## Formulaires intelligents par défaut

À partir de Chrome 153, la fonctionnalité de compréhension intelligente des formulaires (autofill IA) est activée par défaut pour tous les utilisateurs, sans opt-in.
