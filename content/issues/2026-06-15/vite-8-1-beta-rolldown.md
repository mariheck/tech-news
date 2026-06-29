---
title: 'Vite 8.1.0-beta.0 : Rolldown continue d'évoluer'
excerpt: 'Première beta de la série 8.1 pour le bundler Rust-powered de référence.'
summary: "Le 15 juin, Vite publie la première beta de sa version 8.1, poursuivant l'itération sur l'architecture Rolldown. Pour les équipes en production sur Vite 8, c'est l'occasion de valider les améliorations en amont de la release stable."
date: 2026-06-15T00:00:00Z
reading_time: 2
sources:
  [
    {
      label: 'Vite – Releases GitHub',
      url: 'https://github.com/vitejs/vite/releases'
    },
    {
      label: 'Vite – Changelog',
      url: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
    },
    {
      label: 'VoidZero – Vite 8 Beta annonce',
      url: 'https://voidzero.dev/posts/announcing-vite-8-beta'
    }
  ]
category: frontend
---

# Vite 8.1.0-beta.0 : Rolldown continue d'évoluer

Le 15 juin 2026, l'équipe Vite a publié **Vite 8.1.0-beta.0**, première beta de la série 8.1, poursuivant l'itération sur l'architecture Rolldown introduite avec Vite 8.0.

## Rappel : Vite 8 et Rolldown

Vite 8, sorti plus tôt cette année, a remplacé la combinaison esbuild (développement) + Rollup (production) par **Rolldown**, un bundler écrit en Rust développé par VoidZero. L'objectif était de disposer d'un outil unique pour les deux phases — développement et production — en maintenant les performances d'esbuild tout en apportant les capacités de plugins et de tree-shaking de Rollup.

Résultat mesuré sur des projets réels : des gains de vitesse allant jusqu'à 10–30× sur les builds de production par rapport à l'ancienne combinaison Rollup. L'exemple de Linear, cité par VoidZero, passait de 46 secondes à 6 secondes de build.

## Ce que la beta 8.1.0 apporte

La beta 8.1.0 représente une itération incrémentale sur la fondation Rolldown. Elle vise principalement des améliorations de stabilité, de gestion CSS et d'environnements de build, avec des correctifs sur des régressions découvertes après la sortie de Vite 8.0 stable.

Pour les équipes déjà sur Vite 8, tester cette beta permet de valider la compatibilité de leurs plugins et de leurs configurations avant la release stable de 8.1.

## Statut de l'écosystème Rolldown

Rolldown et son compagnon **Oxc** (linter et parser Rust) continuent de bénéficier d'investissements actifs de la part de VoidZero. L'objectif à terme est de proposer une chaîne d'outillage JavaScript complète en Rust — de la résolution de modules à la minification — sous une interface familière aux utilisateurs de Vite.

La beta 8.1.0 n'est pas un changement de cap : c'est une confirmation que l'écosystème Vite itère rapidement sur sa nouvelle architecture, avec un cycle de release stable qui s'annonce pour les prochaines semaines.
