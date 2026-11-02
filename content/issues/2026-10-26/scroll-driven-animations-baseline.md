---
title: "Scroll-driven animations atteignent Baseline"
excerpt: "Firefox 159 complète le support cross-navigateur"
summary: "Avec Firefox 159 (27 octobre 2026), les animations pilotées par le scroll deviennent Baseline « Newly available » : support désormais acquis dans Chrome, Edge, Safari et Firefox, sans dépendre de JavaScript ni d'IntersectionObserver."
date: 2026-10-26T00:00:00Z
reading_time: 3
sources:
  [
    { label: "MDN – Firefox 159", url: "https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/159" },
    { label: "Web Features Explorer", url: "https://web-platform-dx.github.io/web-features-explorer/features/scroll-driven-animations/" },
    { label: "Chrome for Developers", url: "https://developer.chrome.com/articles/scroll-driven-animations" }
  ]
category: 'design'
---

# Scroll-driven animations atteignent Baseline

Le 27 octobre 2026, Firefox 159 active par défaut les **scroll-driven animations**, la fonctionnalité CSS qui permet de piloter une animation directement par la position de scroll. Avec ce support, la fonctionnalité franchit le seuil **Baseline « Newly available »** : elle est désormais disponible dans les quatre navigateurs majeurs — Chrome et Edge depuis 2023, Safari depuis la version 26 (septembre 2025), et maintenant Firefox.

## Ce que permettent ces animations

Les scroll-driven animations introduisent deux nouvelles timelines CSS : `scroll()`, liée à la position de scroll d'un conteneur, et `view()`, liée à la visibilité d'un élément dans son conteneur de scroll. Elles remplacent des patterns auparavant tenus par du JavaScript (écouteurs de scroll, `IntersectionObserver`) par une déclaration purement CSS, exécutée sur le thread de composition du navigateur.

## Pourquoi ça compte

Pour les interfaces avec parallax, reveal au scroll ou barres de progression de lecture, le passage en Baseline change la donne : ces effets peuvent désormais être livrés en CSS pur, sans fallback JavaScript ni risque de jank lié au thread principal, sur l'ensemble des navigateurs grand public.
