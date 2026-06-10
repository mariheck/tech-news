---
title: "Chrome 149 : les CSS Gap Decorations arrivent en stable"
excerpt: "Adieu les hacks de bordures : les gaps CSS sont stylisables."
summary: "Chrome 149 (2 juin) livre les CSS Gap Decorations en stable : nouvelles propriétés column-rule-inset, row-rule-inset et visibility-items pour styliser les gouttières grid et flexbox. Les propriétés sont entièrement animables. Chrome 149 apporte aussi path() dans shape-outside et la Gamepad API événementielle."
date: 2026-06-01T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Chrome Dev – new in Chrome 149", url: "https://developer.chrome.com/blog/new-in-chrome-149" },
    { label: "Chrome Dev – gap decorations stable", url: "https://developer.chrome.com/blog/gap-decorations-stable" },
    { label: "Chrome Dev – DevTools 149", url: "https://developer.chrome.com/blog/new-in-devtools-149" }
  ]
category: 'design'
---

# Chrome 149 : les CSS Gap Decorations arrivent en stable

Chrome 149 a atteint la version stable le 2 juin 2026. La fonctionnalité CSS la plus attendue de cette release : les **CSS Gap Decorations**, qui permettent enfin de styliser les gouttières des layouts grid et flexbox sans recourir aux hacks de bordures habituels.

## CSS Gap Decorations : ce que c'est

Jusqu'ici, il n'existait aucun moyen natif en CSS de dessiner un séparateur visuel dans les gaps d'une grille ou d'un conteneur flex. Les développeurs s'en sortaient avec des workarounds — bordures sur les enfants, pseudo-éléments, dégradés en arrière-plan — tous fragiles et difficiles à maintenir.

Chrome 149 livre les **Gap Decorations** en stable avec un ensemble de nouvelles propriétés CSS :

```css
.grid {
  display: grid;
  gap: 1rem;
  column-rule: 1px solid #e0e0e0;
  row-rule: 2px dashed currentColor;
  column-rule-inset: 0.5rem;
  row-rule-inset: 0.25rem;
}
```

### Nouvelles propriétés

| Propriété | Rôle |
|---|---|
| `column-rule` | Style du séparateur vertical (existait en multi-column, étendu à grid/flex) |
| `row-rule` | Style du séparateur horizontal |
| `column-rule-inset` | Retrait aux extrémités de la règle verticale |
| `row-rule-inset` | Retrait aux extrémités de la règle horizontale |
| `column-rule-visibility-items` | Items autour desquels la règle est masquée |
| `row-rule-visibility-items` | Items autour desquels la règle est masquée |

### Animables

Les propriétés sont entièrement animables avec CSS transitions et animations. Cela ouvre des possibilités d'interactions subtiles — par exemple, faire apparaître un séparateur au survol d'une grille, ou animer l'épaisseur d'une règle en focus.

## Autres nouveautés CSS de Chrome 149

### `path()` et `shape()` dans `shape-outside`

Chrome 149 étend `shape-outside` — la propriété qui définit la forme autour de laquelle le texte flotte — pour accepter les fonctions `path()` et `shape()`. Auparavant limitée à `circle()`, `ellipse()` et `polygon()`, elle peut maintenant prendre des formes SVG arbitraires. Cela permet des flows typographiques complexes alignés sur des contours de formes précises.

### CSS `path-length` pour SVG

Nouvelle propriété CSS `path-length` pour les éléments SVG, qui permet de définir la longueur totale d'un chemin à des fins de calcul de `stroke-dasharray` et `stroke-dashoffset`. Simplifie significativement les animations de tracé SVG sans JavaScript.

### `image-rendering: crisp-edges` passe en Baseline

La propriété `image-rendering: crisp-edges` est maintenant **Baseline Newly Available** — elle est supportée de manière cohérente dans tous les navigateurs modernes. Pour les développeurs travaillant sur des interfaces pixel-art ou des assets basse résolution intentionnellement, c'est une bonne nouvelle de compatibilité.

## DevTools Chrome 149 : APCA et Gemini CSS

Les DevTools Chrome 149 apportent deux améliorations notables côté design et accessibilité :

**Calculateur APCA en standard** : le panneau Styles intègre désormais le modèle de contraste **APCA** (Advanced Perceptual Contrast Algorithm) comme mode par défaut, en remplacement des seuils AA/AAA du WCAG 2.x. L'APCA est considéré comme plus représentatif de la perception réelle du contraste, notamment pour les textes de petite taille et les couleurs proches du gris.

**Complétion CSS assistée par Gemini** : l'onglet Styles propose des suggestions de propriétés CSS contextuelles via Gemini. La fonctionnalité reste optionnelle et s'active dans les paramètres DevTools.

## Support navigateur

Les CSS Gap Decorations sont actuellement disponibles dans Chrome 149. Firefox et Safari n'ont pas encore annoncé de support. La propriété est donc utilisable en production avec un fallback pour les navigateurs non-Chromium si les séparateurs sont purement décoratifs.

Pour les projets ciblant exclusivement les environnements Chromium (apps Electron, navigateurs enterprise), le déploiement immédiat est sans risque.
