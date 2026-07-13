---
title: "Devin embarque SWE-1.7, un modèle de code quasi frontière"
excerpt: "1000 tokens/seconde via Cerebras, à moindre coût"
summary: "Cognition lance SWE-1.7, un modèle de codage entraîné par RL sur une base Kimi K2.7, exécuté à ~1000 tokens/seconde via Cerebras dans Devin, avec des scores proches de GPT-5.5 sur SWE-Bench et Terminal-Bench."
date: 2026-07-06T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Winbuzzer", url: "https://winbuzzer.com/2026/07/09/cognition-swe-17-adds-near-frontier-coding-scores-to-devin-xcxwbn/" },
    { label: "Mervin Praison", url: "https://mer.vin/2026/07/cognition-swe-1-7-devin-coding-model-near-frontier-benchmarks-at-lower-cost/" }
  ]
category: 'dev-ia'
---

# Devin embarque SWE-1.7, un modèle de code quasi frontière

Cognition, l'éditeur de l'agent de développement autonome Devin, a lancé le 8 juillet 2026 SWE-1.7, un nouveau modèle de codage entraîné par apprentissage par renforcement sur une base Kimi K2.7. Le modèle tourne à environ 1000 tokens par seconde grâce à l'infrastructure d'inférence Cerebras, et est directement intégré dans les trois interfaces de Devin : Web, Desktop et CLI.

## Des scores proches des modèles frontières

Sur les benchmarks publiés par Cognition, SWE-1.7 obtient 42,3% sur FrontierCode 1.1 Main, 81,5% sur Terminal-Bench 2.1 et 77,8% sur SWE-Bench Multilingual. Ces résultats sont positionnés par Cognition comme proches du niveau de GPT-5.5 sur des tâches de résolution de bugs et de code multilingue, tout en visant un coût d'exploitation inférieur grâce à la vitesse d'inférence Cerebras et à l'entraînement RL ciblé sur des tâches d'ingénierie logicielle plutôt que sur un entraînement généraliste.

## Une stratégie de modèle propriétaire pour un agent vertical

Ce lancement confirme une tendance chez les éditeurs d'agents de développement verticaux : plutôt que de se reposer exclusivement sur des modèles tiers (GPT, Claude, Gemini), Cognition investit dans son propre modèle spécialisé, optimisé spécifiquement pour les patterns d'usage de Devin — résolution de tickets, navigation de repository, exécution de tests. C'est une approche similaire à celle observée chez d'autres agents de code qui cherchent à réduire leur dépendance aux API des laboratoires de modèles frontières tout en maîtrisant mieux leur latence et leurs coûts.

Pour un développeur qui évalue des agents de code autonomes, SWE-1.7 ajoute une option supplémentaire dans un paysage où la vitesse d'exécution — ici revendiquée via Cerebras — devient un argument de différenciation aussi important que le score brut sur les benchmarks.
