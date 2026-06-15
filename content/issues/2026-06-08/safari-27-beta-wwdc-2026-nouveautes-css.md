---
title: 'Safari 27 beta : 58 nouveautés web présentées à WWDC'
excerpt: 'WWDC 2026 : Apple dévoile Safari 27 avec une mise à jour CSS historique.'
summary: 'À WWDC 2026 (8-12 juin), WebKit annonce Safari 27 beta avec 58 nouvelles fonctionnalités : `<select>` personnalisable en CSS, scroll anchoring, nouveaux mots-clés CSS, support de Grid Lanes (masonry natif) et 525 correctifs, le plus gros lot depuis des années.'
date: 2026-06-08T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'WebKit – News from WWDC26',
      url: 'https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/'
    },
    {
      label: '9to5Mac',
      url: 'https://9to5mac.com/2026/06/09/heres-everything-new-coming-to-safari-on-macos-27-golden-gate/'
    },
    {
      label: 'Apple Developer – WWDC26',
      url: 'https://developer.apple.com/videos/play/wwdc2026/204/'
    },
    {
      label: 'Apple Developer – Select',
      url: 'https://developer.apple.com/videos/play/wwdc2026/315/'
    }
  ]
category: design
---

# Safari 27 beta : 58 nouveautés web présentées à WWDC

La Worldwide Developers Conference 2026 (WWDC 2026) d'Apple s'est tenue du 8 au 12 juin. Parmi les annonces importantes pour les développeurs web, l'équipe WebKit a présenté **Safari 27 beta** avec un volume de nouveautés sans précédent : 58 fonctionnalités inédites et **525 correctifs**, le plus grand nombre de fixes jamais inclus dans une seule release de Safari.

## `<select>` personnalisable nativement

L'une des nouveautés les plus attendues de la communauté frontend est enfin disponible dans Safari 27 : la **personnalisation CSS complète de l'élément `<select>`** sans compromettre l'accessibilité native.

Pour l'activer, il suffit d'une déclaration CSS :

```css
select {
  appearance: base-select;
}
```

Le nouveau modèle expose plusieurs points d'accroche CSS :

- **`::picker-icon`** pour personnaliser l'icône de la flèche déroulante
- **`:open`** pour modifier l'apparence du sélecteur lorsqu'il est ouvert
- **`::picker(select)`** pour styler le panneau de liste déroulante lui-même

Jusqu'ici, styliser un `<select>` nécessitait de reconstruire entièrement le composant en JavaScript, au prix de l'accessibilité (perte du lien avec le modèle natif du système d'exploitation). Cette approche CSS-first préserve le comportement accessible intégré tout en donnant enfin le contrôle visuel attendu.

## Scroll anchoring

Safari 27 introduit le **scroll anchoring** : lorsque du contenu se charge au-dessus de la position de défilement actuelle de l'utilisateur (publicités, images tardives, notifications), la page ne saute plus brutalement vers le bas. Le navigateur ancre la position de scroll à l'élément visible, absorbant l'ajout de contenu sans saut visuel.

Ce comportement, déjà présent dans Chrome et Firefox depuis plusieurs années, était l'un des manques notoires de Safari pour les développeurs cherchant une expérience de défilement cohérente cross-browser.

## Nouvelles propriétés et mots-clés CSS

Safari 27 ajoute plusieurs primitives CSS à sa palette :

- **`:heading`** : un nouveau pseudo-class qui cible tous les éléments titres (`h1` à `h6`) en une seule règle, simplifiant la gestion typographique globale.
- **`revert-rule`** : un nouveau mot-clé qui annule uniquement la règle CSS courante sans remonter à la cascade complète, utile pour neutraliser un style dans un contexte spécifique.
- **`stretch`** pour le `box-sizing` : alignement sur Chrome/Firefox pour ce mot-clé qui permet à un élément de s'étirer pour remplir son conteneur.

## Grid Lanes intégré

Safari 27 confirme également le support de **CSS Grid Lanes** (le layout masonry natif en CSS, disponible depuis Safari 26.4). La version 27 consolide l'implémentation et renforce la compatibilité avec les nouvelles propriétés de flux d'éléments.

## WebAssembly JSPI

Pour les projets hybrides web/WASM, Safari 27 intègre **WebAssembly JavaScript Promise Integration (JSPI)**, une extension qui permet au code WebAssembly de participer nativement au modèle asynchrone de JavaScript, via `async`/`await`. Cela simplifie considérablement l'intégration de bibliothèques C/C++/Rust dans des architectures JavaScript asynchrones.

## Ce que ça change pour les développeurs

WWDC 2026 marque une accélération nette d'Apple sur la parité web. Le `<select>` personnalisable et le scroll anchoring comblent deux des irritants cross-browser les plus anciens. Pour les projets qui ciblent une bonne expérience Safari (iOS inclus), Safari 27 — attendu à l'automne avec macOS Golden Gate et iOS 27 — représente une étape importante.
