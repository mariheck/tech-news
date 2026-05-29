---
title: 'Deno 2.8 : de 42 % à 76 % de compatibilité Node.js'
excerpt: 'Le plus grand saut de compatibilité de l''histoire de Deno, en une seule release mineure.'
summary: 'Deno 2.8 passe la compatibilité Node.js de 42 à 76,4 % en une release, ajoute deno pack, deno ci, deno transpile, triple la vitesse des installs npm à froid, supporte TypeScript 6.0 et import defer. V8 passe à 14.9.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    { label: 'Deno blog – v2.8', url: 'https://deno.com/blog/v2.8' },
    { label: 'GitHub – Deno 2.8.0 release', url: 'https://github.com/denoland/deno/releases/tag/v2.8.0' }
  ]
category: 'frontend'
---

# Deno 2.8 : de 42 % à 76 % de compatibilité Node.js

Deno 2.8.0 est sorti le 22 mai avec l'étiquette que l'équipe elle-même lui a collée : "biggest minor release ever". Le chiffre qui justifie cette qualification : la compatibilité avec l'API Node.js passe de **42 % à 76,4 %** en une seule version — soit 3 405 tests Node.js qui passent sur 4 457. C'est le plus grand gain de compatibilité enregistré en une release dans l'histoire de Deno.

## Ce que ça change concrètement

La promesse de Deno a longtemps été "meilleur DX, mêmes packages npm" — mais la réalité en production était souvent plus nuancée. À 42 % de compatibilité, trop de packages Node qui s'appuient sur des APIs internes ou peu documentées échouaient silencieusement. À 76 %, la majorité des projets Node peuvent être migrés sans réécriture significative.

Le throughput de `node:http` a doublé, passant de **8 000 à 18 000 req/s**. Les installs npm à froid sont **3,66× plus rapides**. Pour les projets qui consomment beaucoup de packages, l'impact sur la DX de CI/CD est immédiat.

## Les nouveaux sous-commandes

Deno 2.8 enrichit significativement la CLI :

**`deno why`** — trace la chaîne de dépendances qui amène un package dans le graphe, pratique pour déboguer des imports transitifs inattendus.

**`deno pack`** — génère une tarball npm depuis un module Deno, permettant de publier des packages compatibles npm/jsr depuis le même codebase.

**`deno ci`** — installs reproductibles pour les pipelines CI, comportement similaire à `npm ci` : strict sur le lockfile, pas de mise à jour automatique.

**`deno transpile`** — transpilation à la demande de TypeScript et JSX en JavaScript, utilisable en dehors du contexte d'exécution standard.

**`deno upgrade pr`** — teste des builds issus de PR Deno avant qu'ils soient mergés, pour les contributeurs ou les équipes qui suivent Deno de très près.

**`deno audit fix`** — résout automatiquement les vulnérabilités connues dans les dépendances, à la manière de `npm audit fix`.

## TypeScript 6, import defer, et V8 14.9

Le support de **TypeScript 6.0.3** arrive en même temps. TypeScript 6 avait été publié en mai et apportait notamment une meilleure inférence des types conditionnels et des améliorations de performance du compilateur — Deno suit de très près le cycle TypeScript.

**`import defer`** (stage 4 TC39) est supporté : les modules sont résolus à l'import mais leur exécution est différée au premier accès. Utile pour les modules lourds dont on n'a besoin que dans certains chemins d'exécution.

Autres ajouts : **OffscreenCanvas** et **Geometry Interfaces** (utiles pour les workers qui manipulent du rendu 2D), et V8 mis à jour vers **14.9**.

## Résumé de l'impact

Deno 2.8 franchit un seuil psychologique : à 76 %, la majorité des projets Node réels sont portables sans réécriture. Combiné aux gains de performances (npm installs, http throughput) et à la suite d'outils CLI qui comblent les lacunes restantes, c'est la release qui fait basculer Deno d'un runtime "intéressant pour les nouveaux projets" à une alternative sérieuse pour des projets Node existants.
