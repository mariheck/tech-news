---
title: "Vite+ passe en bêta : un seul outil pour tout le build"
excerpt: "VoidZero unifie Vite, Vitest, Rolldown et Oxlint"
summary: "VoidZero annonce le 2 juillet la bêta de Vite+, une toolchain unifiée regroupant Vite, Vitest, Rolldown, tsdown, Oxlint et Oxfmt avec un task runner intégré pour gérer runtime, gestionnaire de paquets et build."
date: 2026-06-29T00:00:00Z
reading_time: 4
sources:
  [
    { label: "VoidZero – Vite+ Beta", url: "https://voidzero.dev/posts/announcing-vite-plus-beta" }
  ]
category: 'frontend'
---

# Vite+ passe en bêta : un seul outil pour tout le build

Le 2 juillet 2026, VoidZero — l'entreprise fondée par Evan You pour porter la suite d'outils autour de Vite — a annoncé le passage en bêta de Vite+, une toolchain unifiée qui regroupe sous un même outil les briques jusqu'ici séparées de l'écosystème Vite.

## Ce que Vite+ regroupe

Vite+ combine Vite (dev server et bundler), Vitest (tests), Rolldown (bundler Rust qui remplace progressivement Rollup dans Vite), tsdown (build de librairies TypeScript) et le duo Oxlint/Oxfmt (linter et formatter basés sur Oxc, l'équivalent Rust d'ESLint/Prettier côté performance). L'ensemble est piloté par un task runner intégré, qui gère à la fois le runtime, le gestionnaire de paquets et la chaîne d'outils front dans un seul binaire plutôt que dans des dépendances éclatées à configurer séparément.

## Pourquoi ça compte

Aujourd'hui, un projet Vite typique assemble ces briques une par une, chacune avec sa propre configuration, ses propres versions à synchroniser et parfois des redondances (Prettier et ESLint qui se marchent sur les pieds, Vitest et Vite qui divergent en configuration). Vite+ propose de traiter cet ensemble comme un produit cohérent avec un pilotage unique, dans l'esprit de ce que d'autres écosystèmes (Deno, Bun) ont fait en intégrant nativement testeur, linter et formatter.

## Ce que ça change en pratique

La bêta ne remplace pas Vite : elle s'ajoute comme une couche d'orchestration au-dessus des outils existants, qui restent utilisables séparément si besoin. Pour une équipe qui gère déjà une configuration Vite/Vitest/ESLint stable, la bascule vers Vite+ n'est pas urgente en bêta — mais pour un nouveau projet, ou un projet qui commence à croiser des incohérences de version entre Vite, Vitest et son linter, ça vaut le coup d'être testé dès maintenant plutôt que d'attendre la stabilisation.
