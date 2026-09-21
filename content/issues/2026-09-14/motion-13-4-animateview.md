---
title: "Motion 13.4 : AnimateView s'appuie sur React 19.3"
excerpt: "Des transitions de vue prêtes à l'emploi pour React"
summary: "Motion 13.4.0 introduit AnimateView, qui enveloppe le ViewTransition stabilisé de React 19.3 avec des transitions à ressort et des cibles dynamiques. useSpring gagne aussi un retargeting ~80 % plus rapide."
date: 2026-09-14T00:00:00Z
reading_time: 5
sources:
  [
    { label: "npm — motion", url: "https://www.npmjs.com/package/motion" },
    { label: "Motion Docs — AnimateView", url: "https://motion.dev/docs/react-animate-view" },
    { label: "Motion Magazine", url: "https://motion.dev/magazine/a-view-transitions-api-for-the-rest-of-us" }
  ]
category: 'design'
---

# Motion 13.4 : AnimateView s'appuie sur React 19.3

Le 14 septembre 2026, la librairie d'animation Motion (anciennement Framer Motion) a publié sa version 13.4.0, dont la nouveauté principale est le composant **AnimateView**.

## Une couche prête à l'emploi sur ViewTransition

AnimateView s'appuie directement sur le composant `<ViewTransition>` de React, stabilisé dans React 19.3 le 9 septembre 2026, lui-même construit sur l'API View Transition du navigateur. Motion documente cette API navigateur comme puissante mais délicate à manier telle quelle ; AnimateView vient lisser ses aspérités en la combinant à la fonction `animate()` de Motion.

Concrètement, AnimateView permet d'animer la transition entre deux vues avec des ressorts (spring), des cibles dynamiques et des contrôles d'animation qui n'existent pas nativement dans l'API navigateur brute. Le composant est disponible depuis un point d'entrée séparé, `motion/react-animate-view`, distinct du paquet principal `motion/react`, et nécessite React et React DOM en version 19.3 ou supérieure — les autres API de Motion pour React continuent, elles, de fonctionner avec React 18.

## Autres nouveautés de la 13.4

La version apporte également :

- un **retargeting environ 80 % plus rapide** pour `useSpring` et `springValue`, la fonction qui recalcule une animation à ressort quand sa valeur cible change en cours de route ;
- `animate.addEffect()`, pour piloter des cibles qui ne sont pas des éléments du DOM ;
- `threeEffect` (`motion/three`), pour animer des objets Three.js avec la même API `animate()`.

## Pourquoi ça compte

Les transitions de vue natives du navigateur restent verbeuses et peu flexibles à orchestrer finement — absence de ressorts, de contrôle fin du timing, de cibles arbitraires. En construisant AnimateView directement sur le `<ViewTransition>` de React, Motion positionne sa librairie comme la couche d'ergonomie de référence pour exploiter cette API sans en subir les limites, dès la semaine suivant la stabilisation de son support par React.
