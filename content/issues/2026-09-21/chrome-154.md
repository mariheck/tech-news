---
title: "Chrome 154 : itérateurs, soulignements et iframes"
excerpt: "Iterator.includes, CSS affiné, iframes auto-sizing"
summary: "Chrome 154 passe stable avec Iterator.prototype.includes, le CSS Typed OM dans les Web Workers, scroll-marker-group en modes links/tabs, text-decoration affiné, et des iframes qui s'auto-dimensionnent."
date: 2026-09-21T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Chrome for Developers", url: "https://developer.chrome.com/blog/new-in-chrome-154" },
    { label: "GIGAZINE", url: "https://gigazine.net/gsc_news/en/20260925-google-chrome-154/" }
  ]
category: 'frontend'
---

# Chrome 154 : itérateurs, soulignements et iframes

Google a fait passer **Chrome 154** en version stable le 22 septembre 2026, sur desktop, Android et iOS, avec plusieurs nouveautés pour le développement web.

## CSS : soulignements et marqueurs de défilement affinés

La propriété CSS `scroll-marker-group` gagne des modes **`links`** et **`tabs`**, qui précisent la sémantique d'accessibilité des marqueurs de défilement pour les lecteurs d'écran. Par ailleurs, `text-decoration-inset` et `text-decoration-skip-spaces` permettent de contrôler plus finement l'apparence des soulignements — un contrôle qui demandait auparavant des contournements CSS.

## JavaScript : `Iterator.prototype.includes`

Chrome 154 ajoute `Iterator.prototype.includes`, qui teste la présence d'une valeur dans un itérateur sans avoir à le convertir en tableau au préalable. Le **CSS Typed OM** (`CSSStyleValue`) est par ailleurs désormais exposé dans les **Web Workers**, permettant de manipuler des valeurs CSS typées en dehors du thread principal.

```js
const it = [1, 2, 3][Symbol.iterator]();
it.includes(2); // true, sans conversion en array
```

## HTML : les `<iframe>` peuvent se dimensionner tout seuls

Nouveauté notable : les éléments `<iframe>` peuvent désormais **se dimensionner automatiquement selon le contenu intrinsèque de leur document embarqué**, sans passer par un échange `postMessage` entre la page hôte et l'iframe pour communiquer sa hauteur réelle — un pattern manuel très répandu jusqu'ici pour les widgets embarqués.
