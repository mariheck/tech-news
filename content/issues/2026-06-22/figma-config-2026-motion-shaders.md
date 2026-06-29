---
title: "Figma Motion : l'animation native arrive sur le canvas"
excerpt: "Keyframes, bézier et spring physics — sans quitter Figma"
summary: "Config 2026 (24 juin) lance Figma Motion en open beta : une timeline d'animation native avec keyframes, presets, courbes bézier et spring physics, directement sur le canvas Figma. Disponible sur tous les plans, y compris gratuit."
date: 2026-06-22T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Figma blog – Config 2026 recap", url: "https://www.figma.com/blog/config-2026-recap/" },
    { label: "Figma – Config 2026 aide", url: "https://help.figma.com/hc/en-us/articles/39582753756695-What-s-new-from-Config-2026" },
    { label: "explainx.ai – Figma Motion", url: "https://explainx.ai/blog/figma-config-2026-complete-recap-motion-code-shaders-ai-2026" },
    { label: "Figma Config 2026 site", url: "https://config.figma.com/san-francisco/" }
  ]
category: 'design'
---

# Figma Motion : l'animation native arrive sur le canvas

Annoncé lors de la keynote de Config 2026 le 24 juin à Moscone Center, **Figma Motion** est peut-être la fonctionnalité la plus attendue de l'histoire récente de Figma. Après des années de prototypage rudimentaire (transitions d'écrans, smart animate), Figma dispose enfin d'une timeline d'animation native complète, directement intégrée dans le canvas.

## Ce que Figma Motion apporte

**Figma Motion** est un outil d'animation timeline-based, fonctionnant directement sur les layers du canvas Figma, sans plugin tiers. Ses capacités :

- **Timeline par keyframes** : définissez des états initiaux et finaux pour n'importe quelle propriété (position, opacité, taille, couleur, transformation), Figma interpole automatiquement.
- **Presets d'animation** : une bibliothèque de presets directement applicables pour accélérer le prototypage de transitions courantes.
- **Courbes bézier** : contrôle précis des courbes d'accélération/décélération avec un éditeur visuel, identique à ce qu'on retrouve dans After Effects ou dans les outils CSS.
- **Spring physics** : des animations basées sur des paramètres physiques (masse, raideur, amortissement) pour des transitions qui « sentent » le poids sans avoir à tweaker des courbes manuellement.

La feature est en **open beta sur tous les plans Figma**, y compris le plan gratuit, depuis le 24 juin 2026.

## Pourquoi c'est important pour le workflow design

Jusqu'ici, le gap entre l'animation imaginée dans Figma et l'animation livrée par un développeur était important. Les designers utilisaient des outils séparés — ProtoPie, Principle, After Effects — pour prototyper les animations, puis les transmettaient sous forme de vidéos ou de spécifications textuelles. Ce handoff était source d'interprétation et d'aller-retours.

Avec Figma Motion, la timeline d'animation devient un artefact partagé dans le fichier Figma. Les paramètres de spring (stiffness: 200, damping: 20) sont directement lisibles par le développeur qui les transpose en `animation: { type: 'spring', stiffness: 200, damping: 20 }` dans Motion ou Framer Motion. La distance de traduction diminue sensiblement.

## La différence avec Smart Animate

Smart Animate (disponible depuis 2019) permettait de créer des transitions entre des frames en faisant correspondre automatiquement les layers de même nom. C'était utile pour des prototypes basiques, mais limité : pas de contrôle sur la courbe, pas de timeline, pas de séquençage multi-étapes.

Figma Motion est d'une nature différente : c'est un environnement d'animation complet avec séquençage multi-keyframes, physique et gestion fine des timings. Smart Animate reste disponible pour les cas d'usage simples ; Figma Motion prend en charge les animations complexes.

## Concurrence et positionnement

Figma Motion positionne Figma directement face à ProtoPie et Principle pour les workflows d'animation UI, avec l'avantage d'être intégré dans l'outil que les équipes utilisent déjà pour le design statique. La mise sur le plan gratuit est une décision agressive qui réduit encore la barrière à l'adoption.

Pour les équipes qui utilisent des outils d'animation dédiés en parallèle de Figma, la question de consolider les deux en un seul outil se pose désormais sérieusement.
