---
title: "Bun 1.4.3 intègre un vérificateur de types TypeScript"
excerpt: "bun check, un remplaçant annoncé de tsc --noEmit"
summary: "Bun 1.4.3 ajoute bun check, un vérificateur de types TypeScript intégré que Bun dit 3 à 6,4 fois plus rapide que tsc, validé sur la suite de conformité TypeScript 7.0.2 et 72 projets open source."
date: 2026-10-05T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Bun Blog", url: "https://bun.com/blog/bun-v1.4.3" }
  ]
category: 'frontend'
---

# Bun 1.4.3 intègre un vérificateur de types TypeScript

Bun a publié le 10 octobre 2026 la version **1.4.3**, qui introduit `bun check`, un vérificateur de types TypeScript intégré directement au runtime. Conçu comme un remplaçant direct de `tsc --noEmit`, `bun check` ne fait que vérifier les types : il n'émet aucun fichier de sortie.

## Les chiffres avancés par Bun

Sur son propre banc d'essai (Apple Silicon, 16 cœurs, non vérifié de façon indépendante), Bun affirme que `bun check` tourne de 3 à 6,4 fois plus vite que `tsc` 7.0.2, tout en consommant moins de mémoire. L'équipe dit avoir fait passer à son outil l'intégralité des 51 210 tests de la suite de conformité de TypeScript 7.0.2.

## Une compatibilité testée à grande échelle

Bun a comparé les résultats de `bun check` et de `tsc` sur 72 projets open source, pour un total de 1 103 configurations : 1 102 d'entre elles produisent un résultat strictement identique entre les deux outils, les seuls écarts survenant lorsque l'option `strict` est désactivée.

## Pourquoi ça compte

Le typechecking fait partie des étapes les plus coûteuses d'une CI frontend sur de gros monorepos. Si les chiffres de Bun se confirment en usage réel, `bun check` pourrait devenir une alternative crédible à `tsc --noEmit` pour accélérer les pipelines, sans changer l'outillage TypeScript du projet.
