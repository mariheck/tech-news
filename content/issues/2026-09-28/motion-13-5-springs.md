---
title: "Motion 13.5 : des springs overdamped façon SwiftUI"
excerpt: "Bounce négatif pour amortir les animations"
summary: "Motion (ex-Framer Motion) 13.5 ajoute le support du bounce négatif dans les springs pour des animations overdamped façon SwiftUI, et réduit la taille du composant `<m>` d'environ 20%."
date: 2026-09-28T00:00:00Z
reading_time: 2
sources:
  [
    { label: "Motion Changelog", url: "https://motion.dev/changelog" }
  ]
category: 'design'
---

# Motion 13.5 : des springs overdamped façon SwiftUI

Le 1er octobre 2026, la bibliothèque d'animation **Motion** (anciennement Framer Motion) a publié sa version **13.5.0**, avec une nouvelle option de réglage pour ses animations à ressort.

## Un bounce négatif pour amortir le mouvement

La nouveauté principale est le support d'un paramètre `bounce` négatif, de **0 à -1**, qui permet de définir des springs **overdamped** : des animations qui ralentissent sans jamais dépasser leur cible, à la manière du mapping par ratio d'amortissement utilisé dans SwiftUI. Jusqu'ici, `bounce` ne permettait de régler que l'intensité du rebond, pas son absence contrôlée.

## Un gain de poids non négligeable

Motion 13.5 réduit aussi la taille du composant `<m>` d'environ **20%**, et celle du hook `useSpring` d'environ **10%**.

## Pourquoi ça compte

Le réglage overdamped donne accès à un registre d'animation déjà familier aux développeurs iOS/SwiftUI — des mouvements qui s'arrêtent net sans rebond — directement dans l'API de springs de Motion, sans recourir à des courbes d'easing personnalisées.
