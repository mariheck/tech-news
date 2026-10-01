---
title: "Turborepo 2.11 sort du tout-JavaScript"
excerpt: "Rust, Python et Go entrent dans le monorepo Vercel"
summary: "Turborepo 2.11 ajoute un support expérimental natif pour Rust, Python et Go avec un graphe de tâches unifié, un démarrage jusqu'à 4x plus rapide, et une option --production qui exclut les paquets de dev de turbo prune."
date: 2026-09-14T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Turborepo Blog", url: "https://turborepo.dev/blog/2-11" },
    { label: "GitHub Releases", url: "https://github.com/vercel/turborepo/releases" }
  ]
category: 'frontend'
---

# Turborepo 2.11 sort du tout-JavaScript

Vercel a publié le 18 septembre 2026 la version 2.11 de Turborepo, son outil de build pour monorepos, qui marque une étape dans l'élargissement de l'outil au-delà de l'écosystème JavaScript.

## Un graphe de tâches partagé entre langages

La nouveauté principale est un support natif expérimental pour Rust, Python et Go, en plus de JavaScript. Ces différents langages de toolchain peuvent désormais cohabiter dans **un seul graphe de tâches**, ce qui permet à Turborepo d'orchestrer et de mettre en cache des builds mêlant plusieurs écosystèmes dans un même monorepo, plutôt que de cantonner l'outil aux seuls projets JavaScript/TypeScript.

Vercel annonce par ailleurs un "Time to First Task" — le délai avant que la première tâche ne démarre — jusqu'à 4 fois plus rapide que sur la version 2.9.

## Autres nouveautés

- Support de `devEngines.packageManager`, le champ standard `package.json` qui verrouille la version du gestionnaire de paquets attendu pour un projet.
- Une intégration avec le terminal Ghostty pour l'interface TUI de Turborepo.
- Un nouveau flag `--production` pour `turbo prune`, qui exclut les paquets utilisés uniquement en développement du résultat élagué.

Deux correctifs, 2.11.1 et 2.11.2, sont sortis le jour même pour corriger des régressions touchant les builds esbuild des générateurs pnpm et la gestion des flags CLI répétables.

## Pourquoi ça compte

L'ouverture de Turborepo à Rust, Python et Go répond à une réalité de plus en plus courante dans les organisations : un même dépôt mêlant un frontend JavaScript, des services backend en Go ou en Rust, et des scripts de data en Python. Pouvoir mettre en cache et orchestrer l'ensemble depuis un seul outil évite de maintenir des pipelines de build séparés par langage au sein d'un même monorepo.
