---
title: "React Aria, troisième base officielle de shadcn/ui"
excerpt: "La bibliothèque d'accessibilité d'Adobe rejoint shadcn aux côtés de Radix"
summary: "shadcn/ui intègre React Aria Components (Adobe) comme troisième base officielle aux côtés de Radix et Base UI. Disponible via `--base aria` dans la CLI, avec les huit styles shadcn et un focus fort sur l'accessibilité native."
date: 2026-07-13T00:00:00Z
reading_time: 5
sources:
  [
    { label: "shadcn – changelog React Aria", url: "https://ui.shadcn.com/docs/changelog/2026-07-react-aria" },
    { label: "X @shadcn – annonce", url: "https://x.com/shadcn/status/2078142090177806773" },
    { label: "daily.dev – React Aria shadcn", url: "https://daily.dev/posts/react-aria-components-are-now-available-in-shadcn-ui-gyzi6eyu9" }
  ]
category: 'design'
---

# React Aria, troisième base officielle de shadcn/ui

Le 18 juillet 2026, shadcn a annoncé l'intégration officielle de React Aria Components (Adobe) comme troisième base de composants dans shadcn/ui, aux côtés de Radix UI et Base UI. C'est le résultat d'un travail d'intégration approfondi : tous les composants, la documentation, la CLI et les styles ont été mis à jour pour prendre en charge React Aria.

## Ce que React Aria apporte à shadcn

React Aria est la bibliothèque de composants d'accessibilité développée et maintenue par l'équipe de Spectrum (Adobe). Elle se distingue par une approche « headless » orientée comportements et état : chaque composant gère l'accessibilité (ARIA, navigation au clavier, focus management, annonces screen reader) sans imposer de styles visuels.

L'intégration dans shadcn/ui signifie concrètement que vous pouvez désormais initialiser un projet shadcn avec React Aria comme fondation de composants, tout en bénéficiant de l'ensemble de l'écosystème shadcn : CLI, presets, système de styles, et les huit variantes visuelles (Vega, Nova, Maia, Lyra, Mira, Luma, Rhea et Sera).

React Aria est disponible au même niveau que Base UI et Radix dans le flow `shadcn/create`. La commande `--base aria` dans la CLI permet d'initialiser un projet avec React Aria dès le départ.

## Ce qui reste isolé

L'intégration est propre sur le plan de la modularité : les state selectors et les dépendances spécifiques à React Aria sont scoped au registry Aria, ce qui signifie qu'ils n'interfèrent pas avec les composants Base UI ou Radix existants. Un projet peut cohabiter avec les deux bases sans conflit de versions.

Les composants Base UI et Radix existants restent inchangés dans leur fonctionnement. Il n'y a pas de migration forcée : React Aria est une option supplémentaire, pas un remplacement.

## Pourquoi c'est important pour un dev frontend

L'accessibilité est un des domaines où les équipes font le plus de dette technique. Les composants shadcn construits sur React Aria arrivent avec les comportements d'accessibilité intégrés par défaut — navigation au clavier, gestion du focus, attributs ARIA corrects — sans que le développeur ait à les implémenter ou à auditer chaque composant manuellement.

Pour une équipe qui construit un design system interne ou un produit B2B avec des contraintes d'accessibilité réglementaires (EAA, WCAG 2.2 AA), disposer d'une base React Aria directement dans shadcn réduit significativement la surface de travail sur ce sujet.

C'est aussi une réponse indirecte à une critique récurrente de shadcn : la bibliothèque offrait beaucoup de contrôle visuel, mais l'accessibilité était parfois laissée à la charge du développeur selon la base choisie. Avec React Aria, shadcn propose maintenant une option où l'accessibilité est la première priorité de la fondation de composants.

## Le contexte : l'évolution rapide de shadcn en juillet 2026

Ce lancement s'inscrit dans une série de mises à jour shadcn en juillet 2026. Le 10 juillet, shadcn avait déjà annoncé `shadcn/typeset`, un système de styles typographiques pour HTML et markdown rendu. Ces deux annonces témoignent d'une accélération du rythme de livraison du projet, qui s'oriente de plus en plus vers un écosystème complet plutôt qu'une simple bibliothèque de composants.
