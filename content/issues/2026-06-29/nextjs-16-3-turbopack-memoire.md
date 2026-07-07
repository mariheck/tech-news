---
title: "Next.js 16.3 : Turbopack fait fondre l'usage mémoire"
excerpt: "Le cache Turbopack divise la RAM des gros projets par 10"
summary: "La preview Next.js 16.3 du 29 juin ajoute l'éviction mémoire à Turbopack (jusqu'à -90 % de RAM sur de gros projets), un cache de build persistant entre les runs, et le portage Rust du React Compiler."
date: 2026-06-29T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Next.js – Turbopack 16.3", url: "https://nextjs.org/blog/next-16-3-turbopack" },
    { label: "Build with Matija", url: "https://www.buildwithmatija.com/blog/nextjs-16-3-preview-instant-navigations-turbopack-ai" }
  ]
category: 'frontend'
---

# Next.js 16.3 : Turbopack fait fondre l'usage mémoire

Le 29 juin 2026, Vercel a publié une nouvelle preview de Next.js 16.3 (installable via `npm install next@preview`), cette fois centrée sur Turbopack plutôt que sur les Instant Navigations déjà couvertes la semaine précédente. L'axe principal : réduire drastiquement la consommation mémoire du bundler sur les projets de grande taille.

## Éviction mémoire : les chiffres annoncés

Vercel documente le gain sur deux cas concrets. Sur le dashboard interne de Vercel, un projet d'une cinquantaine de routes voit sa consommation mémoire Turbopack passer d'environ 21,5 Go à environ 2 Go. Sur nextjs.org lui-même, la consommation tombe de 4,6 Go à 840 Mo. Le mécanisme repose sur une éviction mémoire qui libère les données de compilation devenues inutiles au lieu de les garder en cache indéfiniment pendant toute la durée du process de build.

Pour les équipes qui ont vu leurs CI ou leurs machines de dev swapper sur de gros monorepos, c'est directement actionnable : moins de risque d'OOM kill en CI, moins besoin de runners surdimensionnés.

## Cache de build persistant

Deuxième ajout : un cache de build persistant, qui survit entre deux exécutions de build. Jusqu'ici, Turbopack reconstruisait une partie du travail de compilation à chaque run ; ce cache permet de réutiliser les résultats précédents d'un build à l'autre, ce qui réduit le temps de build incrémental en local comme en CI.

## `import.meta.glob` compatible Vite

Next.js 16.3 ajoute également le support de `import.meta.glob`, l'API de Vite pour importer dynamiquement des ensembles de fichiers via un pattern glob. Pour les équipes qui migrent d'un projet Vite vers Next.js — ou qui maintiennent du code partagé entre les deux — c'est une source de friction en moins.

## React Compiler en Rust

Enfin, la preview intègre le portage Rust du React Compiler, déjà évoqué dans l'écosystème comme un chantier en cours chez Vercel pour accélérer les temps de build liés à la memoization automatique. Son intégration directe dans le pipeline Turbopack de 16.3 en fait un test grandeur nature avant une possible stabilisation.

## Ce que ça change en pratique

Cette preview ne change rien à l'API applicative : aucun code à réécrire. C'est une optimisation d'infrastructure de build pure, qui bénéficie surtout aux projets volumineux où Turbopack tournait déjà en watch mode ou en CI sur des machines contraintes en mémoire. Comme pour toute preview, mieux vaut la tester sur une CI dédiée avant de l'activer sur la branche principale — Vercel n'a pas communiqué de date précise pour la stabilisation de 16.3.
