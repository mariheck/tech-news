---
title: "Vite+ 1.0 : un toolchain JS tout-en-un"
excerpt: "Vite, Vitest, Rolldown, Oxlint réunis en une CLI"
summary: "VoidZero (Cloudflare) lance Vite+ 1.0, un toolchain JS unifié autour d'une CLI `vp` : Vite 8, Vitest 5, Rolldown, Oxlint et Oxfmt, avec un lint jusqu'à 18x plus rapide qu'ESLint."
date: 2026-09-28T00:00:00Z
reading_time: 3
sources:
  [
    { label: "VoidZero", url: "https://voidzero.dev/posts/announcing-vite-plus-1-0" },
    { label: "daily.dev", url: "https://daily.dev/posts/announcing-vite-1-0-ii7ghgg9k" },
    { label: "How2Shout", url: "https://www.how2shout.com/news/vite-plus-1-0-voidzero-cloudflare.html" }
  ]
category: 'frontend'
---

# Vite+ 1.0 : un toolchain JS tout-en-un

Le 28 septembre 2026, VoidZero — l'entreprise d'Evan You, créateur de Vite, désormais rattachée à Cloudflare — a publié la version stable **1.0** de **Vite+**, un toolchain JavaScript unifié piloté par une seule CLI, `vp`.

## Un seul outil pour tout le cycle de développement

Vite+ couvre le runtime, la gestion de paquets, le serveur de dev, le linting, le formatage, les tests, le build et le packaging, en s'appuyant sur des briques déjà établies de l'écosystème Vite : **Vite 8**, **Vitest 5**, **Rolldown**, **Oxlint** et **Oxfmt**. L'ensemble est publié sous licence MIT.

## Des gains de performance chiffrés

VoidZero revendique des gains significatifs : **Vitest 5** jusqu'à **50% plus rapide**, **Oxlint** **12 à 18 fois** plus rapide qu'ESLint, et **Oxfmt** **7 fois** plus rapide que Prettier.

## Pourquoi ça compte

Vite+ pousse plus loin la logique déjà entamée par Rolldown et Oxc : remplacer la pile JS historique (Webpack, ESLint, Prettier) par des outils réécrits pour la vitesse, tout en gardant Vite comme point d'ancrage commun à l'ensemble de la chaîne.
