---
title: 'Cursor Composer 2.5 : agents parallèles à prix réduit'
excerpt: 'Cursor lance Composer 2.5 le 18 mai : agents parallèles, benchmarks frontier, 0,50 $/M.'
summary: 'Cursor publie Composer 2.5 le 18 mai 2026, un agent de coding basé sur Kimi K2.5 entraîné avec 25× plus de tâches synthétiques. Il permet de lancer jusqu'à 8 agents en parallèle et affiche des performances proches d'Opus 4.7 sur SWE-Bench, à 0,50 $/M de tokens en entrée.'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Cursor – Composer 2.5 blog', url: 'cursor.com/blog/composer-2-5' },
    { label: 'Cursor changelog', url: 'cursor.com/changelog' },
    { label: 'Beyond Tomorrow – Composer 2.5', url: 'beyondtmrw.org/article/cursor-composer-25-release-pricing-benchmarks-2026' },
    { label: 'ChatForest – Kimi K2.5 & Composer', url: 'chatforest.com/builders-log/cursor-composer-2-5-kimi-k2-5-coding-agent-benchmark/' }
  ]
category: 'dev-ia'
---

# Cursor Composer 2.5 : agents parallèles à prix réduit

Cursor a publié **Composer 2.5** le 18 mai 2026, marquant une progression notable sur l'axe intelligence/coût pour les sessions de coding longues durée. Le modèle sous-jacent est **Kimi K2.5** de Moonshot AI (1 trillion de paramètres, architecture MoE), entraîné avec **25× plus de tâches synthétiques** que son prédécesseur Composer 2.

## Ce qui change concrètement

Composer 2.5 est décrit comme meilleur sur les tâches de fond longues et les instructions complexes — plus fiable sur les multi-étapes, et plus agréable à "collaborer avec" selon Cursor, grâce à des améliorations comportementales sur le style de communication et la calibration de l'effort.

En termes de benchmarks, les scores rivalisent avec Claude Opus 4.7 sur SWE-Bench et Terminal-Bench, tout en s'affichant à **0,50 $ par million de tokens en entrée** — un rapport performance/prix qui se distingue nettement des modèles frontier traditionnels.

## Jusqu'à 8 agents en parallèle

La fonctionnalité la plus structurante de cette release est le support des **agents parallèles** : il est maintenant possible de lancer jusqu'à 8 agents Composer simultanément. Les cas d'usage cibles sont explicites — mises à jour de dépendances en masse, backfills de tests, propagation d'un même changement sur plusieurs services.

Cette capacité s'appuie sur **Build in Parallel**, le moteur introduit dans Cursor 3.3 (sorti le 7 mai), qui dispatche des sous-agents asynchrones sur les étapes indépendantes d'un plan d'exécution, avec un graphe de dépendances pour éviter les conflits.

## Contexte de marché

La sortie de Composer 2.5 intervient dans une semaine dense pour les outils de coding IA. GitHub Copilot a annoncé simultanément son passage à un modèle de facturation à l'usage (AI Credits, effectif au 1er juin), et le JetBrains Developer Ecosystem Survey 2026 fait état d'une multiplication par 6 des utilisateurs de Claude Code en neuf mois (de 3 % en avril 2025 à 18 % en janvier 2026). La pression sur Cursor pour rester compétitif à la fois sur le prix et la performance est réelle.

Composer 2.5 répond sur les deux tableaux : il amène des performances frontier via un modèle open-weight efficace, à un prix qui rend viables les workflows longs et répétitifs sans exploser les budgets API.
