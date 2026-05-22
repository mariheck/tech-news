---
title: "SubQ : le premier LLM non-transformer avec 12 millions de tokens de contexte"
excerpt: "La startup Subquadratic lance SubQ avec 29 M$ de seed : architecture linéaire, 12M tokens."
summary: "Lancé le 5 mai 2026 avec 29 millions de dollars de seed, SubQ repose sur une architecture Subquadratic Sparse Attention (SSA) qui scale linéairement plutôt que quadratiquement. Résultat annoncé : 12 millions de tokens de contexte et jusqu'à 1000x moins de compute à fenêtre maximale — sous réserve de validation indépendante."
date: 2026-05-04T00:00:00Z
readingTime: 5
sources:
  - label: "SiliconANGLE"
    url: "https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/"
  - label: "Subquadratic — annonce officielle"
    url: "https://subq.ai/introducing-subq"
  - label: "VentureBeat"
    url: "https://venturebeat.com/technology/miami-startup-subquadratic-claims-1-000x-ai-efficiency-gain-with-subq-model-researchers-demand-independent-proof"
  - label: "DataCamp — SubQ expliqué"
    url: "https://www.datacamp.com/blog/subq-ai-explained"
  - label: "WhatLLM — modèles mai 2026"
    url: "https://whatllm.org/blog/new-ai-models-may-2026"
category: actus ia
---

Le 5 mai 2026, la startup Subquadratic — fondée à Miami par Justin Dangel (CEO) et Alex Whedon (CTO, ancien Head of Generative AI chez Meta) — a lancé SubQ accompagné d'un seed round de 29 millions de dollars. Ce qui la distingue de l'habituel flux de nouveaux modèles : SubQ n'est pas un transformer.

## Une architecture qui brise le mur quadratique

Le problème central des LLMs à grand contexte est bien connu : l'attention du transformer scale en **O(n²)** avec la longueur du contexte. Doubler la fenêtre quadruple le coût de compute.

SubQ introduit la **Subquadratic Sparse Attention (SSA)**, un mécanisme d'attention qui scale en **O(n)** linéaire. Le principe : pour chaque token de requête, le modèle sélectionne dynamiquement un sous-ensemble restreint de positions **en fonction du contenu** plutôt que de patterns fixes, puis calcule une attention exacte uniquement sur ces positions sélectionnées. Il n'y a pas de compression approximative ni de kernel trick — juste une sélection sparse pilotée par la sémantique.

## Les chiffres avancés

Subquadratic annonce des performances remarquables :

- **Fenêtre de contexte** : 12 millions de tokens nativement (vs 1 million pour les meilleurs modèles frontier actuels)
- **À 1 million de tokens** : 50x plus rapide et 50x moins cher que les modèles frontier comparables, tout en maintenant une meilleure précision
- **À 12 millions de tokens** : environ **1000x moins de compute** que les modèles traditionnels à cette échelle

Ces chiffres sont ceux publiés par Subquadratic. VentureBeat rapporte que plusieurs chercheurs indépendants ont demandé des benchmarks reproductibles et des évaluations tierces avant d'accepter les claims à 1000x — ce qui reste, à ce stade, une demande ouverte.

## Cas d'usage et produits

L'architecture SSA est explicitement conçue pour les cas d'usage à contexte long qui font souffrir les transformers :

- **Analyse de repos entiers** en une seule fenêtre de contexte
- **Analyse multi-documents longs** (rapports financiers, documentation technique, corpus juridiques)
- **Recherche multi-sources** sans découpage

Subquadratic lance deux produits :

- **SubQ API** : accès pour développeurs et équipes enterprise au contexte 12M tokens
- **SubQ Code** : agent de coding en CLI, conçu pour charger une codebase complète en contexte unique

## Financement

Le seed de 29 M$ réunit Justin Mateen (co-fondateur de Tinder), Javier Villamizar (ex-SoftBank Vision Fund), ainsi que des investisseurs early-stage d'Anthropic, OpenAI, Stripe et Brex.

## Ce qu'il faut retenir

L'architecture SSA, si ses performances se confirment à l'examen indépendant, représenterait une rupture réelle avec le paradigme transformer dominant depuis 2017. L'enjeu pour l'écosystème dev est concret : un agent capable de lire un repo entier en contexte change la nature des tâches déléguables. À suivre de près lorsque des évaluations indépendantes seront publiées.
