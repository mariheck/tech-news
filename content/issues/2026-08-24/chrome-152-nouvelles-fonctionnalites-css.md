---
title: "Chrome 152 : alpha(), drag CSS et Baseline autocorrect"
excerpt: "De nouvelles capacités CSS arrivent en stable dans Chrome et Edge 152"
summary: "Chrome 152 ship l'alpha() CSS pour les couleurs relatives, les pseudo-classes Media State pour audio/vidéo, CSSPseudoElement pour ::backdrop, window-drag pour les PWA de bureau, et autocorrect atteint Baseline cross-navigateur."
date: 2026-08-24T00:00:00Z
reading_time: 6
sources:
  [
    { label: "Chrome for Developers", url: "https://developer.chrome.com/blog/new-in-chrome-152" },
    { label: "Chrome Release Notes 152", url: "https://developer.chrome.com/release-notes/152" },
    { label: "Edge Web Platform 152", url: "https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/152" }
  ]
category: 'design'
---

# Chrome 152 : alpha(), drag CSS et Baseline autocorrect

Chrome 152 est sorti le 25 août 2026, suivi de Edge 152 le 27 août. Au-delà des corrections de bugs habituelles, cette version livre plusieurs fonctionnalités CSS et plateforme web qui méritent l'attention des développeurs frontend : une nouvelle syntaxe pour les couleurs relatives, des pseudo-classes pour l'état des médias, un accès JavaScript aux pseudo-éléments, et l'arrivée de `window-drag` pour les PWA de bureau.

## La fonction `alpha()` : transparence relative d'une couleur

La nouvelle fonction CSS `alpha()` permet d'appliquer ou de modifier le canal alpha d'une couleur existante, sans avoir à réécrire toute la valeur de couleur.

```css
/* Syntaxe */
alpha(from <color> / <alpha-value>)

/* Exemples */
.card {
  background: alpha(from var(--color-primary) / 0.15);
  border: 1px solid alpha(from var(--color-primary) / 0.4);
}
```

Cette syntaxe s'inscrit dans le système des **Relative Color Syntax** déjà disponible. Là où `color(from red hsl h s calc(l - 10%))` permettait de modifier la luminosité, `alpha()` offre un raccourci élégant pour la transparence. Fini les variables CSS en double (`--color-primary` + `--color-primary-20`) : une seule variable suffit, et la transparence est calculée à la volée.

Selon les release notes de Edge 152, la fonction est désormais disponible dans les deux navigateurs Chromium.

## Media State Pseudo-classes : cibler l'état des médias en CSS

Chrome 152 ajoute un ensemble de pseudo-classes permettant de styler les éléments `<audio>` et `<video>` en fonction de leur état de lecture :

| Pseudo-classe | État ciblé |
|---|---|
| `:playing` | Lecture en cours |
| `:paused` | En pause |
| `:seeking` | En cours de scrubbing |
| `:buffering` | Mise en mémoire tampon |
| `:stalled` | Téléchargement bloqué |
| `:muted` | Son coupé |
| `:volume-locked` | Volume verrouillé par le système |

```css
video:playing .play-btn { display: none; }
video:paused .play-btn { display: block; }
video:buffering .spinner { opacity: 1; }
```

Ces pseudo-classes permettent d'éliminer du JavaScript de gestion d'état dans les players vidéo custom — les transitions visuelles peuvent être entièrement pilotées en CSS.

## CSSPseudoElement : accès JavaScript aux pseudo-éléments

L'interface `CSSPseudoElement` est enrichie dans Chrome 152. Les pseudo-éléments `::backdrop`, `::scroll-marker` et `::view-transition` sont maintenant accessibles programmatiquement, ce qui permet d'ajouter des écouteurs d'événements directement sur ces surfaces.

L'exemple le plus concret : détecter un clic sur le `::backdrop` d'un `<dialog>` pour le fermer.

```javascript
const dialog = document.querySelector('dialog');
const backdrop = dialog.pseudo('::backdrop');
backdrop.addEventListener('click', () => dialog.close());
```

Jusqu'ici, cette interaction nécessitait de calculer si le clic se produisait en dehors de la boîte de dialogue — une heuristique fragile. L'accès direct au pseudo-élément simplifie considérablement ce pattern.

## `window-drag` : zones de drag pour les PWA installées

La propriété CSS `window-drag` permet de désigner des régions d'une PWA installée comme zones de déplacement de la fenêtre (équivalent à la barre de titre native).

```css
.app-header {
  app-region: drag; /* ancienne syntaxe Electron */
  window-drag: drag; /* nouvelle propriété CSS standard */
}

.app-header button {
  window-drag: no-drag; /* exclure les boutons cliquables */
}
```

Cette propriété était attendue depuis longtemps par les développeurs de PWA de bureau — notamment ceux qui utilisent la `window-controls-overlay` pour créer des interfaces vraiment natives. Edge 152 la ship également.

## `autocorrect` : Baseline Newly Available

L'attribut HTML `autocorrect` — qui contrôle la correction automatique dans les champs de texte — atteint le statut **Baseline Newly Available** avec Chrome 152. Cela signifie qu'il est désormais pris en charge dans tous les navigateurs majeurs (Chrome, Edge, Firefox, Safari).

```html
<input type="text" autocorrect="on" />
<textarea autocorrect="off"></textarea>
```

Ce statut Baseline confirme qu'il est maintenant possible de l'utiliser sans polyfill ni feature detection dans les nouveaux projets.

## À retenir

Chrome 152 continue la tendance des dernières versions : chaque release apporte plusieurs fonctionnalités CSS qui réduisent la dépendance au JavaScript pour des comportements qui sont intrinsèquement visuels ou liés à l'état de l'interface. La fonction `alpha()`, les Media State pseudo-classes et `CSSPseudoElement` suivent toutes cette logique.
