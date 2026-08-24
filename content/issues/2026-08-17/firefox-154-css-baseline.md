---
title: "Firefox 154 : sibling-index() et text-box en Baseline"
excerpt: "Quatre fonctions CSS franchissent le seuil d'interopérabilité cross-browser."
summary: "Le 18 août 2026, Firefox 154 propulse sibling-index(), text-box et line-clamp sans préfixe au rang de Baseline Newly Available. Le CSS Typed Object Model est aussi désormais disponible dans tous les navigateurs majeurs."
date: 2026-08-17T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'MDN Firefox 154 for devs', url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/154' },
    { label: 'Firefox 154.0 release notes', url: 'https://www.firefox.com/en-US/firefox/154.0/releasenotes/' },
    { label: '9to5Linux – Firefox 154', url: 'https://9to5linux.com/mozilla-firefox-154-is-now-available-for-download-heres-whats-new' },
    { label: 'gihyo.jp – sibling & text-box', url: 'https://gihyo.jp/article/2026/08/firefox-154-support-css-sibling-count-index-and-text-box' },
    { label: 'WebProNews – Firefox 154', url: 'https://www.webpronews.com/firefox-154-arrives-with-ai-shortcut-stronger-local-network-guards-and-fresh-web-tools' }
  ]
category: 'design'
---

# Firefox 154 : sibling-index() et text-box en Baseline

Firefox 154 est sorti le 18 août 2026 et marque une étape importante pour l'interopérabilité CSS : plusieurs fonctionnalités très attendues par la communauté frontend atteignent enfin le statut **Baseline Newly Available**, signifiant qu'elles fonctionnent désormais dans les dernières versions stables de tous les navigateurs majeurs.

## sibling-index() et sibling-count() : le comptage natif des siblings

Ces deux fonctions CSS permettent d'accéder, au moment du style, à la position d'un élément parmi ses frères et à leur nombre total — sans JavaScript, sans attributs `data-*` manuels, sans compteurs CSS artificiels.

```css
/* Appliquer un délai de transition progressif à chaque enfant */
li {
  transition-delay: calc(sibling-index() * 50ms);
}

/* Calculer une largeur relative au nombre total de siblings */
td {
  width: calc(100% / sibling-count());
}
```

`sibling-index()` retourne la position de l'élément (à partir de 1) parmi ses siblings dans le DOM. `sibling-count()` retourne le nombre total d'éléments siblings, en comptant l'élément lui-même. Les deux fonctions s'intègrent naturellement dans `calc()`, ouvrant la voie à des layouts et animations staggerés 100 % CSS.

Jusqu'ici, ce type d'animation en cascade nécessitait soit un attribut style inline généré par JavaScript (`style="--i: 3"`), soit une série de règles `:nth-child()` à écrire à la main. Firefox 154 marque l'entrée de `sibling-index()` en **Baseline Newly Available**, suivant Chrome qui avait livré la fonctionnalité plus tôt dans l'année.

## text-box : maîtriser l'espacement typographique natif

Firefox 154 implémente `text-box-trim`, `text-box-edge` et le shorthand `text-box`, qui permettent de contrôler l'espace dans la direction de bloc autour du texte — en particulier le leading optique au-dessus de la première ligne et en dessous de la dernière.

```css
.heading {
  /* Éliminer l'espace implicite au-dessus et en dessous du texte */
  text-box: trim-both cap alphabetic;
}
```

Ces propriétés résolvent un problème classique : aligner visuellement du texte avec des éléments adjacents est difficile parce que les navigateurs incluent par défaut un leading invisible au-dessus de la capitale et en dessous de la baseline. `text-box-trim: trim-both` retire ce leading, et `text-box-edge` précise quelle métrique de font utiliser comme référence. Le résultat : des espacements typographiques précis sans compensation `margin-top` empirique.

Firefox 154 les passe également en **Baseline Newly Available**, confirmant le support cross-browser.

## line-clamp sans préfixe -webkit-

La propriété `line-clamp` est désormais supportée sans le préfixe `-webkit-` dans Firefox 154. Une bonne nouvelle pour l'écosystème : la version non-préfixée peut maintenant être utilisée en production pour les projets ciblant les navigateurs récents.

Nuance à retenir : dans cette implémentation, `line-clamp` ne supporte pas encore les valeurs `no-ellipsis` et la valeur `<string>` pour personnaliser le marqueur de troncature. La version avec `-webkit-` reste nécessaire si vous ciblez des navigateurs plus anciens.

## CSS Typed Object Model API

Firefox 154 implémente le CSS Typed Object Model (CSS Typed OM), une API JavaScript qui expose les valeurs CSS comme des objets typés plutôt que comme des chaînes de caractères brutes. La manipulation des propriétés CSS via `element.attributeStyleMap` devient ainsi plus robuste et performante.

```js
// Avant (CSS OM classique, chaînes)
element.style.opacity = '0.5';

// Avec CSS Typed OM
element.attributeStyleMap.set('opacity', CSS.number(0.5));
element.attributeStyleMap.get('opacity'); // CSSUnitValue { value: 0.5, unit: 'number' }
```

L'API était déjà disponible dans Chrome et Safari. Firefox 154 complète le support cross-browser.

## Autres nouveautés Firefox 154

Sur le plan de la sécurité, Firefox 154 renforce les protections d'accès réseau local pour les WebSockets, dans le prolongement des efforts de l'initiative Private Network Access. Les navigateurs compatibles devront bientôt vérifier que le serveur cible autorise explicitement les connexions WebSocket depuis le réseau public vers le réseau local.

Côté DevTools, la visionneuse JSON intègre un nouveau fil d'Ariane (breadcrumb) en bas du panneau, indiquant l'emplacement précis de l'entrée sélectionnée dans la structure JSON. Un petit gain ergonomique lors du débogage de payloads profondément imbriqués.

## Ce que ça change pour vos projets

Avec Firefox 154, les fonctionnalités suivantes passent officiellement en **Baseline Newly Available** — ce qui signifie qu'elles peuvent être utilisées sans polyfill ni fallback dans les projets qui ciblent les dernières versions des navigateurs majeurs :

| Fonctionnalité       | Usage                              |
| -------------------- | ---------------------------------- |
| `sibling-index()`    | Staggering, layouts relatifs       |
| `text-box`           | Espacement typographique précis    |
| CSS Typed OM         | Manipulation CSS typée en JS       |

`sibling-count()` et `line-clamp` non-préfixé sont également disponibles dans Firefox, même si leur statut Baseline complet dépend de la synchronisation entre tous les navigateurs. Consultez le tableau de compatibilité MDN pour confirmer le support selon vos cibles.
