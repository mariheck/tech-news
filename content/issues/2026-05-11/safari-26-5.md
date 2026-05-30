---
title: 'Safari 26.5 : :open, random() et Origin API'
excerpt: '63 bugs corrigés, :open pseudo-class, random() et l'Origin API.'
summary: 'Safari 26.5 livre la pseudo-classe :open pour styler dialog et details natifs, la portée element pour random(), l'Origin API, et corrige 63 bugs dont plusieurs sur les scroll-driven animations et l'anchor positioning.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'WebKit Blog Safari 26.5', url: 'https://webkit.org/blog/17938/webkit-features-for-safari-26-5/' },
    { label: 'Apple Release Notes', url: 'https://developer.apple.com/documentation/safari-release-notes/safari-26_5-release-notes' },
    { label: 'CSS Anchor Positioning MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning' }
  ]
category: 'design'
---

# Safari 26.5 : :open, random() et Origin API

Apple a publié Safari 26.5 le 11 mai 2026. Cette version mineure s'avère l'une des plus denses de l'année pour les développeurs frontend : 63 bugs corrigés et quatre nouvelles fonctionnalités CSS et Web API directement exploitables en production.

## La pseudo-classe :open

`:open` cible un élément interactif dans son état ouvert, que ce soit un `<details>`, un `<dialog>`, un `<select>` ou un `<input>` de type date ou color. Plus besoin de JavaScript pour synchroniser un indicateur visuel avec l'état du composant natif.

```css
details:open > summary::after {
  content: '▲';
}

dialog:open {
  animation: fade-in 0.2s ease;
}
```

La pseudo-classe est déjà disponible dans Chrome depuis la version 135. L'implémentation de Safari complète le tableau des navigateurs majeurs, ce qui la rend utilisable sans fallback JS sur la grande majorité des bases d'utilisateurs actuelles.

## element-scoped pour random()

La fonction CSS `random()` permet de générer une valeur aléatoire par propriété calculée. Jusqu'ici, le mot-clé `element-shared` permettait à plusieurs propriétés d'un même élément de partager la même valeur aléatoire — comportement désormais adopté comme **comportement par défaut** dans la spécification.

Safari 26.5 implémente la nouvelle syntaxe avec le mot-clé `element-scoped`, qui force une valeur différente pour chaque élément dans l'arbre DOM, même s'ils partagent la même règle CSS. C'est particulièrement utile pour les grilles d'éléments où on veut varier les délais d'animation ou les teintes sans toucher au HTML.

```css
.card {
  --delay: random(element-scoped, 0s, 0.5s);
  animation-delay: var(--delay);
}
```

## L'Origin API

L'`Origin` API expose un objet JavaScript qui encapsule l'origine d'une page (schéma, hôte, port) sous forme structurée plutôt qu'une chaîne brute. Elle facilite les comparaisons d'origines dans le code de sécurité et remplace les patterns `new URL(location.href).origin` ou les comparaisons de chaînes fragiles.

```js
const origin = window.location.origin; // string, comme avant
const originObj = location.originObj;  // Origin { scheme, host, port }
originObj.isSameOrigin(otherOrigin);   // true | false
```

## 63 corrections, notamment sur les animations scroll-driven

La liste de correctifs de cette version est particulièrement longue. Les deux domaines les plus travaillés :

**Scroll-driven animations :** plusieurs comportements incorrects sur des timelines composées (scroll() à l'intérieur d'un view()) sont réglés, ainsi que des cas où la valeur calculée de `animation-range` n'était pas mise à jour lors d'un redimensionnement de viewport.

**Anchor positioning :** trois bugs critiques corrient des cas où les éléments ancrés ne se repositionnaient pas correctement lors de changements de media queries, dans les chaînes d'ancres longues, et lors de l'utilisation des valeurs de repli `anchor()`.

Ces correctifs renforcent la stabilité de deux API que beaucoup d'équipes frontend ont commencé à déployer en production ces derniers mois.

## Autres corrections notables

- SVG : interpolation des couleurs pour les dégradés SVG corrigée
- WebRTC : plusieurs cas de déconnexion inattendus réglés
- Accessibilité : corrections dans l'arbre d'accessibilité (combobox, live regions)
- iOS/iPadOS : suggestions de datalist et comportement du curseur dans `contenteditable` corrigés
