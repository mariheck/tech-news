---
title: 'Gemini 3.5 Flash : la rapidité au niveau frontier'
excerpt: 'Le modèle frontier 4× plus rapide de Google passe en GA à l''I/O 2026.'
summary: 'Google lance Gemini 3.5 Flash en GA : 4× plus rapide que les modèles frontier comparables, 76,2 % sur Terminal-Bench et 83,6 % sur MCP Atlas. Disponible immédiatement dans la Gemini API à $1,50 / $9,00 par million de tokens.'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Blog officiel Gemini 3.5', url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/' },
    { label: 'TechCrunch – Antigravity I/O', url: 'https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/' },
    { label: 'Marktechpost – Managed Agents', url: 'https://www.marktechpost.com/2026/05/19/google-launches-antigravity-2-0-at-i-o-2026-a-standalone-agent-first-platform-with-cli-sdk-managed-execution-and-enterprise-support/' }
  ]
category: 'actus-ia'
---

# Gemini 3.5 Flash : la rapidité au niveau frontier

Google a lancé Gemini 3.5 Flash en disponibilité générale le 19 mai à l'I/O 2026. Le pitch est direct : atteindre la qualité frontier sans en payer le prix en latence. Pour les équipes qui construisent des agents en boucle, c'est peut-être l'annonce la plus concrète de la semaine.

## Ce que les benchmarks confirment

Les chiffres publiés par Google positionnent le modèle clairement au-dessus de Gemini 3.1 Pro sur les tâches de codage et d'orchestration agentique :

- **Terminal-Bench 2.1** (tâches en environnement terminal réel) : **76,2 %**
- **MCP Atlas** (évaluation multi-outils pour agents) : **83,6 %**
- **CharXiv** (raisonnement multimodal sur données scientifiques) : **84,2 %**

La vélocité annoncée est 4× celle des modèles frontier comparables. Ce n'est pas un modèle qui sacrifie la profondeur pour le débit : sur les benchmarks de raisonnement multimodal, il surpasse sensiblement la génération précédente.

## Tarification

La structure tarifaire est simple et compétitive :

- **$1,50 par million de tokens en entrée**
- **$9,00 par million de tokens en sortie**

À ce niveau de prix, avec des performances aussi élevées sur les benchmarks agentiques, Gemini 3.5 Flash se positionne directement en concurrence avec les offres d'Anthropic et d'OpenAI sur le segment des agents de développement.

## Disponibilité

Le modèle est accessible immédiatement dans la Gemini API via Google AI Studio et Android Studio. Il devient par ailleurs le moteur par défaut des agents Managed d'Antigravity 2.0 (lancé au même événement). L'identifiant à utiliser dans l'API : `antigravity-preview-05-2026`.

## Ce qui manque encore

Gemini 3.5 Pro reste en cours de finalisation. Google a indiqué "d'ici le mois prochain" sans préciser davantage, ce qui laisse entendre que Flash est conçu pour tenir la charge jusqu'à la sortie du Pro — et pas seulement comme modèle intermédiaire.

## Pourquoi ça change la donne pour les agents

Construire un agent en boucle serrée — évaluation → outil → action → évaluation — imposait jusqu'ici un arbitrage douloureux entre la puissance d'un modèle frontier et une latence acceptable. Avec 4× la vitesse et des scores MCP Atlas supérieurs à 83 %, Gemini 3.5 Flash est dimensionné pour des boucles agentiques réelles. La combinaison avec les Managed Agents (un seul POST pour déployer un agent Linux isolé avec code execution, web search et fetch) en fait une stack complète, disponible aujourd'hui.
