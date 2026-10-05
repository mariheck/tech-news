---
title: "SvelteKit 3.0 arrive avec le CLI sv en 1.0"
excerpt: "Migration assistée, nouveaux types, déploiements simplifiés"
summary: "SvelteKit 3.0 sort avec le CLI communautaire sv en version 1.0. Au menu : types TypeScript améliorés, API d'adaptateurs mise à jour, et migration assistée via `sv migrate`."
date: 2026-09-28T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Svelte Blog", url: "https://svelte.dev/blog/sveltekit-3-is-here" },
    { label: "ByteIota", url: "https://byteiota.com/sveltekit-3-0-ships-breaking-changes-and-how-to-fix/" },
    { label: "GitHub sv CLI", url: "https://github.com/sveltejs/cli/releases/tag/sv%401.0.0" }
  ]
category: 'frontend'
---

# SvelteKit 3.0 arrive avec le CLI sv en 1.0

Le 1er octobre 2026, l'équipe Svelte a publié **SvelteKit 3.0**, le même jour que la version **1.0** du CLI communautaire **sv**, qui officialise l'API d'add-ons jusque-là maintenue par la communauté.

## Ce qui change

SvelteKit 3.0 apporte des **types TypeScript améliorés**, une **API d'adaptateurs** mise à jour, et relève les versions de Node.js requises (**18.20+, 20.10+ ou 22+**). Des déploiements "zero-config" sont désormais possibles vers des plateformes comme Render.

## Une migration en grande partie automatisée

L'équipe met en avant `sv migrate` et la commande dédiée `sv migrate sveltekit-3`, qui prennent en charge l'essentiel de la mise à niveau depuis SvelteKit 2.

## Pourquoi ça compte

Le passage du CLI `sv` en 1.0 officialise un système d'add-ons qui était jusque-là porté par la communauté : les intégrations tierces (UI, tests, déploiement) gagnent un canal de distribution stable, en parallèle de la montée en version majeure du framework lui-même.
