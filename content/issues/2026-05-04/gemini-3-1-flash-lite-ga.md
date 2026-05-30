---
title: "Gemini 3.1 Flash-Lite en disponibilité générale"
excerpt: "Le modèle Gemini le plus rapide et moins cher passe en GA avec 1M tokens."
summary: "Google passe Gemini 3.1 Flash-Lite en disponibilité générale, à 0,25$/M tokens en entrée, 2,5× plus rapide que Gemini 2.5 Flash. Fenêtre de 1 M tokens, pensée activable et benchmarks compétitifs."
date: 2026-05-04T00:00:00Z
reading_time: 3
sources:
  - { label: "Google Cloud Blog", url: "https://cloud.google.com/blog/products/ai-machine-learning/gemini-3-1-flash-lite-is-now-generally-available" }
  - { label: "Gemini API docs", url: "https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite" }
category: actus-ia
---

# Gemini 3.1 Flash-Lite en disponibilité générale

Le 8 mai 2026, Google a passé **Gemini 3.1 Flash-Lite** en disponibilité générale (GA) sur Google AI Studio et Vertex AI. Positionné comme le modèle le plus rapide et le moins coûteux de la série Gemini 3, il vise les cas d'usage à fort volume et à faible tolérance de latence.

## Tarification et performances

**Prix :**
- **0,25 $/million de tokens** en entrée
- **1,50 $/million de tokens** en sortie — soit **40 % moins cher** que Gemini 2.5 Flash sur l'output

**Vitesse (benchmarks Artificial Analysis) :**
- **2,5× plus rapide** en temps au premier token (TTFT) par rapport à Gemini 2.5 Flash
- **45 % plus rapide** en débit de sortie

En production sous charge lourde, la latence P95 pour une réponse complète est d'environ **1,8 seconde** — sous la seconde pour les tâches de classification ou d'appel d'outil.

## Capacités

- **Fenêtre de contexte** : 1 million de tokens
- **Tokens de sortie max** : 66 000 par requête
- **Modalités d'entrée** : texte, vision (images), audio, PDF
- **Niveaux de pensée** (thinking levels) activables dans AI Studio et Vertex AI

## Benchmarks

| Benchmark | Score |
|-----------|-------|
| GPQA Diamond | 86,9 % |
| MMMU Pro | 76,8 % |
| Arena.ai Elo | 1 432 |

## Cas d'usage en production

Google cite plusieurs adopteurs dans l'annonce de disponibilité générale :

- **Gladly** (service client) : réduction des coûts d'environ 60 % par rapport aux modèles de tier supérieur, sur des volumes élevés d'interactions
- **JetBrains** : intégration dans la complétion de code des IDEs
- **Ramp** et **AlphaSense** : agents financiers temps-réel
- **OffDeal** : agents finance à fort débit

## Disponibilité

Gemini 3.1 Flash-Lite est disponible via :
- **Google AI Studio** (Gemini API) — pour les développeurs individuels et les prototypes
- **Vertex AI** — pour les déploiements enterprise avec SLA et contrôles IAM

Les niveaux de pensée permettent de moduler la profondeur de raisonnement selon le besoin, ce qui le rend adapté aussi bien à la classification rapide qu'à des tâches légèrement plus complexes, tout en restant dans le segment tarifaire le plus accessible de la gamme Gemini 3.
