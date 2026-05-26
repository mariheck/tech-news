---
title: "Gemini 3.5 Flash dépasse le Pro à Google I/O 2026"
excerpt: "Google lance un Flash qui surpasse son Pro 2025 en coding et agentique, 4× plus rapide."
summary: "Présenté le 19 mai à Google I/O, Gemini 3.5 Flash surpasse Gemini 3.1 Pro sur le code et l'agentique — 4× plus rapide, 40% moins cher — avec 1M de contexte à $1,50/$9 par million de tokens. Il devient le modèle par défaut dans Antigravity 2.0."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: "MarkTechPost", url: "https://www.marktechpost.com/2026/05/20/google-introduces-gemini-3-5-flash-at-i-o-2026-a-faster-and-cheaper-model-for-ai-agents-and-coding/" },
    { label: "Simon Willison", url: "https://simonwillison.net/2026/May/19/gemini-35-flash/" },
    { label: "TokenMix Blog", url: "https://tokenmix.ai/blog/gemini-3-5-pro-release-date-google-io-2026" },
    { label: "LLM Stats", url: "https://llm-stats.com/blog/research/gemini-3.5-flash-launch" }
  ]
category: "actus-ia"
---

# Gemini 3.5 Flash dépasse le Pro à Google I/O 2026

Le 19 mai 2026, au premier jour de Google I/O, Google DeepMind a rendu Gemini 3.5 Flash généralement disponible. Premier modèle de la nouvelle génération 3.5, il s'impose comme la référence de Google pour le code et les agents — et remplace Gemini 3.1 Flash en production dès ce jour.

## Un Flash qui surpasse le Pro de l'année dernière

C'est le positionnement inattendu de la semaine : Gemini 3.5 Flash n'est pas un modèle léger de compromis. Google revendique qu'il surpasse Gemini 3.1 Pro — son propre modèle flagship du cycle précédent — sur les benchmarks de coding et d'agentique, tout en tournant 4× plus vite et en coûtant environ 40% de moins.

Sur Terminal-Bench 2.1, benchmark d'exécution autonome en terminal, il obtient 76,2%. La combinaison vitesse/qualité à coût réduit est précisément ce qui freinait la généralisation des boucles agentiques en production.

## Pricing et fenêtre de contexte

| Paramètre | Valeur |
|-----------|--------|
| Identifiant API | `gemini-3.5-flash` (stable) |
| Input | $1,50 / M tokens |
| Output | $9 / M tokens |
| Input en cache | $0,15 / M tokens (−90 %) |
| Contexte | 1 M tokens |

Les régions hors global sont facturées $1,65 / $9,90. Le grounding Google Search natif est inclus dans le prix de base.

## Multimodal et intégré partout

Gemini 3.5 Flash accepte du texte, des images, de l'audio, de la vidéo et des PDF en entrée. Il est déployé dans l'ensemble de l'écosystème Google dès le jour de l'annonce : application Gemini, AI Mode dans Search, Google AI Studio, Android Studio, Antigravity 2.0 (modèle par défaut), et Gemini Enterprise Agent Platform.

## Ce que ça change

Pour les équipes déjà sur l'API Gemini, la migration depuis `gemini-3-flash-preview` vers `gemini-3.5-flash` est l'action prioritaire. Pour les autres, c'est un modèle à évaluer sérieusement : la réduction de cache à −90% le rend particulièrement attractif pour les workflows à fort volume de tokens répétés — documentation, revue de code multi-passes, agents à mémoire longue.
