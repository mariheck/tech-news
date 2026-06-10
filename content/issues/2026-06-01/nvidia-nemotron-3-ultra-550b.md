---
title: "Nemotron 3 Ultra : 550B open-source pour les agents"
excerpt: "NVIDIA lâche son plus gros modèle ouvert, 1M de contexte."
summary: "NVIDIA publie Nemotron 3 Ultra (550B total, 55B actifs), modèle open-weight hybride Mamba-Transformer pour agents longue durée. Fenêtre de 1M tokens, 140 tokens/sec, licence OpenMDW-1.1. Meilleur modèle open-source américain selon Artificial Analysis."
date: 2026-06-01T00:00:00Z
reading_time: 6
sources:
  [
    { label: "MarkTechPost – Nemotron 3 Ultra", url: "https://www.marktechpost.com/2026/06/04/nvidia-ai-releases-nemotron-3-ultra-an-open-550b-mixture-of-experts-hybrid-mamba-transformer-for-long-running-agents/" },
    { label: "HuggingFace – Nemotron 3 Ultra", url: "https://huggingface.co/nvidia/nemotron-3-ultra-550b" }
  ]
category: 'actus-ia'
---

# Nemotron 3 Ultra : 550B open-source pour les agents

Le 4 juin 2026, NVIDIA publie **Nemotron 3 Ultra**, un modèle open-weight de 550 milliards de paramètres conçu spécifiquement pour les agents de longue durée. C'est le plus grand modèle open-source publié à ce jour par un laboratoire américain, et il arrive avec une architecture hybride inédite qui change la donne pour les workloads nécessitant de très longues fenêtres de contexte.

## L'architecture : MoE hybride Mamba-Transformer

Nemotron 3 Ultra n'est pas un Transformer dense. Il combine deux familles d'architectures :

**Mixture of Experts (MoE)** : sur les 550B paramètres totaux, seuls **55B sont actifs** à chaque inférence. Le routage dynamique active les experts pertinents selon le token traité — c'est ce qui rend l'inférence économiquement viable malgré la taille nominale impressionnante.

**Architecture hybride Mamba-Transformer** : les couches Mamba apportent une complexité **sous-quadratique** pour le traitement des séquences longues, contrairement à l'attention classique qui est quadratique en la longueur de séquence. Sur un contexte de 1 million de tokens, ce n'est pas une optimisation marginale — c'est la différence entre un modèle utilisable en production et un qui ne l'est pas.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Paramètres totaux | 550 milliards |
| Paramètres actifs | 55 milliards |
| Fenêtre de contexte | 1 000 000 tokens |
| Débit | 140 tokens/sec |
| Licence | OpenMDW-1.1 |

Le débit de **140 tokens/sec** avec 55B paramètres actifs est compétitif pour une utilisation en production — notamment pour des agents qui doivent générer de longs outputs dans des sessions multi-tours.

## Benchmark : meilleur modèle open-source américain

Selon les mesures d'**Artificial Analysis**, Nemotron 3 Ultra obtient un score de **48 sur l'Intelligence Index**, ce qui en fait le modèle open-source le plus performant publié par un laboratoire américain à ce jour.

À titre de comparaison, les modèles propriétaires frontier se situent au-dessus de 60 sur cet index, mais pour un modèle téléchargeable librement, 48 représente une avancée significative.

## Conçu pour les agents longue durée

NVIDIA positionne explicitement Nemotron 3 Ultra pour les **agents à durée de vie longue** — ce qui signifie concrètement :

- Sessions multi-tours sur des contextes de documentation ou de codebase entiers
- Tâches d'analyse sur de très grands corpus (contrats légaux, datasets scientifiques, logs)
- Agents de recherche autonomes qui maintiennent un fil de raisonnement sur des heures

La fenêtre de 1M tokens permet d'ingérer l'intégralité d'un dépôt de code de taille moyenne en un seul appel, ou d'analyser des dizaines de milliers de lignes de logs sans chunking.

## Disponibilité

Nemotron 3 Ultra est disponible via trois canaux :

- **HuggingFace** : téléchargement des poids directement
- **OpenRouter** : accès API standardisé
- **NVIDIA NIM** : microservices d'inférence optimisés pour les GPUs NVIDIA

La licence **OpenMDW-1.1** (Open Model Development and Weights) permet un usage commercial avec certaines restrictions — notamment sur l'utilisation pour entraîner des modèles concurrents.

## Pourquoi c'est notable pour les développeurs

Pour un développeur frontend qui commence à intégrer des capacités IA dans ses projets, Nemotron 3 Ultra représente une option sérieuse pour les tâches qui nécessitent de larges contextes : analyse de design systems complets, review de codebase entiers, génération de composants à partir d'une spec détaillée.

La disponibilité via OpenRouter avec une interface API standard (compatible OpenAI) simplifie l'intégration dans les pipelines existants. Et contrairement aux modèles propriétaires, les données ne transitent pas par les serveurs d'un fournisseur cloud.
