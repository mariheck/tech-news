---
title: "Panda CSS v2 : moteur Rust, CSS natif"
excerpt: "Extraction jusqu'à 37x plus rapide qu'en v1"
summary: "Panda CSS (Chakra UI) sort en v2 avec un nouveau moteur Rust basé sur Oxc, produisant du CSS natif. Extraction jusqu'à 37x plus rapide, mode watch jusqu'à 360x plus rapide qu'en v1."
date: 2026-09-28T00:00:00Z
reading_time: 2
sources:
  [
    { label: "GitHub Releases", url: "https://github.com/chakra-ui/panda/releases/tag/%40pandacss/dev%402.0.0" }
  ]
category: 'design'
---

# Panda CSS v2 : moteur Rust, CSS natif

Le 29 septembre 2026, l'équipe Chakra UI a publié **Panda CSS v2**, qui remplace le compilateur historique de cet outil de génération de CSS à partir de styles atomiques par un nouveau moteur écrit en Rust, basé sur **Oxc**.

## Du CSS natif en sortie

Le changement majeur est la sortie : Panda CSS v2 produit désormais du **CSS natif** plutôt que de passer par les couches d'abstraction précédentes, ce qui simplifie la chaîne de build pour les projets qui l'utilisent.

## Des gains de performance massifs

Les chiffres communiqués par l'équipe sont spectaculaires : extraction des styles **15 à 37 fois** plus rapide, mode watch jusqu'à **360 fois** plus rapide, et génération de `staticCss` environ **85 fois** plus rapide qu'en v1.

## Pourquoi ça compte

Panda CSS s'inscrit dans la même vague que Vite+ et Rolldown cette semaine : la réécriture en Rust des outils de build CSS/JS pour des gains de performance qui ne sont plus marginaux mais mesurés en multiples à deux chiffres.
