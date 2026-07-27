---
title: 'Firefox 153 : select natif, HDR et APIs web inédites'
excerpt: "Firefox 153 livre le select personnalisable, le HDR et de nouvelles APIs CSS."
summary: "Firefox 153 arrive le 21 juillet avec le support du select natif personnalisable, la lecture HDR sur Windows, la compatibilité ::-webkit-scrollbar, et de nouvelles fonctions CSS. sibling-index() et sibling-count() font leur entrée, encore derrière un flag."
date: 2026-07-20T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'MDN – Firefox 153 pour devs',
      url: 'https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/153'
    },
    {
      label: 'Firefox 153.0 – Notes de version',
      url: 'https://www.firefox.com/en-US/firefox/153.0/releasenotes/'
    },
    {
      label: 'Phoronix – Vulkan, JPEG-XL',
      url: 'https://www.phoronix.com/news/Firefox-153-Downloads'
    },
    {
      label: 'Edge 150 – web platform notes',
      url: 'https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/150'
    }
  ]
category: 'design'
---

# Firefox 153 : select natif, HDR et APIs web inédites

Firefox 153 est disponible depuis le 21 juillet 2026. La release consolide plusieurs chantiers engagés depuis Firefox 150 et livre, sur le plan des standards web, quelques avancées directement exploitables en production.

## Select natif personnalisable : le DOM s'ouvre enfin

L'évolution la plus structurante de cette release concerne le parsing HTML des éléments `<select>`. Jusqu'ici, le navigateur n'acceptait dans le DOM que `<option>`, `<optgroup>` et `<hr>` comme enfants valides. Firefox 153 **lève cette restriction** et autorise désormais tous les éléments HTML dans le contenu parsé d'un `<select>`.

Cette modification est la condition préalable à l'implémentation du **Customizable Select** (proposal W3C), qui permettra de styler nativement les dropdowns avec des éléments arbitraires, des icônes et du markup complet. Les spécifications du rendu visuel ne sont pas encore finalisées, mais l'architecture DOM est maintenant en place dans Firefox — suivant Chrome 130+ et Safari 26.x. La convergence des trois moteurs sur ce point ouvre la voie à un déploiement Baseline d'ici fin 2026.

## HDR video sur Windows

Firefox 153 active la **lecture vidéo en HDR sur Windows** pour les contenus encodés HDR10 et HLG. La fonctionnalité nécessite un écran compatible et un système Windows 10 1803+. Sur les machines non-HDR, le contenu est tonemapped et le rendu reste identique aux versions précédentes.

Du côté du décodage, Firefox 153 inaugure le support **Vulkan Video** sur les GPUs compatibles, permettant une accélération hardware du décodage H.264 et H.265 sur Linux et Windows via l'API Vulkan. L'encodage logiciel reste le fallback par défaut si Vulkan Video n'est pas détecté.

## Compatibilité ::-webkit-scrollbar

Firefox adopte un sous-ensemble limité du pseudo-élément non-standard `::-webkit-scrollbar`, afin d'améliorer la compatibilité avec les sites existants. Les règles supportées sont :

- Une largeur ou hauteur non nulle sur `::-webkit-scrollbar` **désactive les scrollbars overlay** pour le conteneur ciblé.
- `display: none` sur `::-webkit-scrollbar` se comporte comme `scrollbar-width: none` — la scrollbar est masquée.
- `@supports selector(::-webkit-scrollbar)` évalue désormais à `true`.

Cette addition réduit les incohérences entre Firefox et les navigateurs Chromium sur les interfaces custom. Elle n'impacte pas les styles appliqués via la spec standardisée `scrollbar-width` / `scrollbar-color`.

## Nouvelles formes CSS : `farthest-corner` et `closest-corner`

Les mots-clés `farthest-corner` et `closest-corner` sont maintenant supportés comme valeurs de rayons pour les fonctions `ellipse()` et `circle()` dans les formes CSS de base. Ces mots-clés permettent de définir la forme relative à la boîte englobante sans valeurs numériques fixes.

```css
.clip {
  clip-path: ellipse(farthest-corner at 50% 50%);
}
```

## `sibling-index()` et `sibling-count()` : derrière un flag

Firefox 153 embarque une **implémentation expérimentale** de `sibling-index()` et `sibling-count()`, les nouvelles fonctions CSS qui exposent l'index et le nombre de frères d'un élément dans le DOM. Elles sont **désactivées par défaut** et accessibles via `about:config` (préférence `layout.css.sibling-index.enabled`).

Chrome et Edge ont ces fonctions activées en stable depuis la version 137. Safari 26.x les supporte également. Avec Firefox en cours d'expérimentation, le chemin vers Baseline Newly Available est tracé — mais pas encore atteint.

## Muted attribute synchronisé pour `<audio>` et `<video>`

L'attribut `muted` des éléments `<audio>` et `<video>` reflète désormais correctement les modifications dynamiques du DOM : ajouter ou retirer `muted` via JavaScript se synchronise avec l'état de lecture et correspond à la pseudo-classe `:muted` en CSS.

## DevTools : niveau de titre dans l'accessibility tree

L'arbre d'accessibilité des DevTools affiche maintenant le **niveau des balises `<h1>`–`<h6>`** dans le highlighter et l'accessibility tree, au lieu de se limiter à indiquer qu'il s'agit d'un heading. Un gain pour les audits a11y rapides sans passer par un outil externe.

## Ce que cette release représente

Firefox 153 est une release de fond qui couvre simultanément plusieurs catégories : UX vidéo, standards d'interopérabilité, et APIs CSS expérimentales. L'ouverture du DOM des `<select>` est l'avancée la plus structurante sur le plan des standards, tandis que la compatibilité `::-webkit-scrollbar` règle des irritants concrets pour les développeurs UI qui ciblaient encore Firefox comme cas particulier.
