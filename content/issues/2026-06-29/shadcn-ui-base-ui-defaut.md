---
title: "shadcn/ui bascule sur Base UI par défaut"
excerpt: "Radix reste supporté, mais n'est plus le choix initial"
summary: "Le changelog de juillet 2026 de shadcn/ui fait de Base UI la bibliothèque headless par défaut pour npx shadcn init, Radix restant pleinement maintenu en option pour tous les composants existants."
date: 2026-06-29T00:00:00Z
reading_time: 4
sources:
  [
    { label: "shadcn/ui changelog", url: "https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default" },
    { label: "Hacker News", url: "https://news.ycombinator.com/item?id=48791328" }
  ]
category: 'design'
---

# shadcn/ui bascule sur Base UI par défaut

Début juillet 2026, shadcn/ui a publié un changelog intitulé "Base UI as the Default" : à partir de cette version, les nouveaux projets initialisés avec `npx shadcn init` utilisent Base UI comme bibliothèque de composants headless par défaut, à la place de Radix UI qui occupait ce rôle depuis la création du projet.

## Pourquoi ce changement

Selon le changelog, les projets créés via `shadcn/create` — l'outil de scaffolding le plus récent de l'écosystème — choisissaient déjà Base UI plutôt que Radix dans un ratio de deux contre un. Plutôt que de forcer une bascule complète, l'équipe a choisi de reconstruire chaque composant pour Base UI tout en conservant la même abstraction d'API, afin de laisser le choix aux développeurs plutôt que de l'imposer.

## Ce qui change concrètement

- `npx shadcn init` propose désormais Base UI comme premier choix.
- Dans la documentation, chaque page de composant s'ouvre par défaut sur l'onglet Base UI ; l'onglet Radix reste accessible en un clic.
- Radix n'est pas déprécié : l'équipe continue de le maintenir, et tout nouveau composant sortira pour les deux bibliothèques, sauf exception où un composant n'existerait que côté Base UI.
- Pour les scripts ou pipelines CI qui appellent `shadcn init` de façon non interactive en s'attendant à du Radix, il faut désormais passer explicitement le flag `-b radix` pour conserver le comportement précédent — sans quoi le projet généré basculera silencieusement sur Base UI.

## Base UI, pour rappel

Base UI est la bibliothèque de composants headless portée par l'équipe historique de Radix (rejointe par des contributeurs de Material UI), pensée dès le départ comme successeur de Radix avec une API modernisée. Son adoption croissante dans l'écosystème shadcn/ui n'est donc pas une surprise : c'est un changement de défaut porté par les mêmes personnes qui ont conçu la bibliothèque qu'il remplace.

## Ce que ça change en pratique

Si votre projet existant utilise déjà shadcn/ui avec Radix, rien ne casse : aucune migration n'est requise, les composants Radix restent maintenus à parité fonctionnelle. Le vrai point d'attention concerne l'automatisation — CI, générateurs de boilerplate, templates internes — où un appel non interactif à `shadcn init` produira désormais des composants Base UI par défaut. La discussion sur Hacker News, active dès la publication, souligne surtout la question de la cohérence des composants déjà en production si une équipe mélange les deux bibliothèques sans y prêter attention.
