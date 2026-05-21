---
title: 'Animations CSS scroll-driven : chorégraphier la page au scroll'
excerpt: 'animation-timeline, scroll() et view() débarquent stables sur tous les navigateurs majeurs. Patterns concrets et gotchas perf.'
slug: 'Les animations scroll-driven en CSS pur sortent enfin du flag Chrome. On regarde les patterns qui marchent vraiment, ceux qui tuent la perf, et comment dégrader proprement sur les navigateurs en retard.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'CSS Scroll-Driven Animations spec',
      url: 'drafts.csswg.org/scroll-animations'
    },
    { label: 'Bramus demos', url: 'scroll-driven-animations.style' },
    {
      label: 'Caniuse animation-timeline',
      url: 'caniuse.com/css-scroll-timeline'
    }
  ]
category: 'Autres'
---

# Animations CSS scroll-driven : chorégraphier la page au scroll

Les animations scroll-driven en CSS pur viennent de passer stables sur Safari 18.4, ce qui en fait la dernière brique manquante pour les utiliser sans polyfill JS. animation-timeline: scroll() et view() ouvrent un terrain qu'on tentait depuis des années avec IntersectionObserver et requestAnimationFrame.

L'angle de ce papier : pas de démo gratuite. Trois patterns concrets qu'on a pu déployer en prod, deux pièges perf qu'on a payés cher, et une stratégie de dégradation propre pour les browsers qui traînent.

## Pattern 1 : la barre de progression de lecture

Un classique, désormais sans une ligne de JS. Une div fixe en haut, un animation-timeline: scroll(root), et l'animation interpole scaleX de 0 à 1 au fil du scroll. Sur un article moyen, on économise environ 8ko de JS et on gagne en fluidité.

Le piège : si la barre est rendue dans un parent avec overflow: hidden, le timeline ne se branche pas correctement. Vérifiez que le scroller est bien la racine attendue.

## Pattern 2 : reveal au viewport

Le view() timeline remplace 90% des usages d'IntersectionObserver pour des entrées discrètes. On déclare une keyframe avec opacité et translation, on cale les view-timeline-range, et le navigateur fait le reste.

Perf : ce qu'il faut surveiller
Les animations scroll-driven s'exécutent sur le compositor uniquement si vous restez sur opacity et transform. Dès que vous animez une propriété qui déclenche un layout, vous perdez le bénéfice et vous risquez de la jank visible. Auditez avec le panel Performance de Chrome avant de déployer.
