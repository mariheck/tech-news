---
title: "Astro 7.4.0 affine build et images"
excerpt: "--timings, images séparées build/runtime, Node 22.22+"
summary: "Astro 7.4.0 ajoute un flag --timings pour mesurer le build, sépare les services d'images entre build et runtime, rend notFound() configurable et relève la version minimale de Node.js requise à 22.22.0."
date: 2026-10-12T00:00:00Z
reading_time: 2
sources:
  [
    { label: "Astro 7.4.0 releases", url: "https://github.com/withastro/astro/releases" }
  ]
category: 'frontend'
---

# Astro 7.4.0 affine build et images

Le 15 octobre 2026, l'équipe Astro a publié la version **7.4.0**, qui ajoute plusieurs améliorations ciblées sans être un simple correctif.

## Build et rendu

Un nouveau flag **`--timings`** sur `astro build` permet de mesurer le temps passé dans chaque étape du build. Les services d'images peuvent désormais être différents entre le build et le runtime, et le comportement du prerenderer devient plus finement contrôlable.

## Fonts et page 404

Les fournisseurs de polices gagnent des callbacks dédiés, et la page `notFound()` devient configurable plutôt que figée.

## Relève la barre Node.js

Astro 7.4.0 relève aussi la version minimale de Node.js requise à **22.22.0**.

## Pourquoi ça compte

Rien de spectaculaire, mais un ensemble cohérent de petites frictions levées — mesure de build, flexibilité sur les images, contrôle plus fin du prerendering — qui facilite le quotidien des projets Astro déjà en production.
