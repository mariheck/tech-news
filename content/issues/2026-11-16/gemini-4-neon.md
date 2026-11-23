---
title: "Gemini 4 Neon : Google mise sur le code à moindre coût"
excerpt: "Un modèle entre Carbon et Hydrogen"
summary: "Google lance Gemini 4 Neon, positionné entre Gemini 4 Carbon et Hydrogen dans Google Antigravity, avec une tarification et des bancs d'essai qui le présentent comme une alternative moins coûteuse pour le code complexe."
date: 2026-11-16T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Google Blog", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/" },
    { label: "Google Antigravity", url: "https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/" },
    { label: "InfoWorld", url: "https://www.infoworld.com/article/4250618/google-launches-gemini-4-neon-touting-lower-costs-for-complex-ai-coding-tasks.html" }
  ]
category: 'actus-ia'
---

# Gemini 4 Neon : Google mise sur le code à moindre coût

Le 18 novembre 2026, Google a lancé **Gemini 4 Neon**, un nouveau modèle positionné entre **Gemini 4 Carbon** (le plus puissant) et **Gemini 4 Hydrogen** (le plus rapide), déployé dans l'API Gemini via Google AI Studio, Gemini for Business, et pour les abonnés Google AI Pro/Ultra dans **Google Antigravity** et l'application Gemini.

## Un modèle pensé pour le code, à prix réduit

Neon est tarifé à 3$/15$ par million de tokens en entrée/sortie. Selon InfoWorld, Google revendique un coût par tâche inférieur d'environ 32% à celui de Carbon sur l'Artificial Analysis Intelligence Index en réglage de raisonnement élevé. Des tests indépendants menés par Cursor sur CursorBench 4.1 situent Neon à 63,7%, contre 61,5% pour Carbon et 57,3% pour Hydrogen, pour un coût par tâche de 6,54$ contre 8,52$ pour Carbon — soit environ 23% d'écart. Les chiffres de gain varient selon les sources et la méthode de calcul (par tâche plutôt que par token), à vérifier sur ses propres charges de travail avant d'en tirer des conclusions définitives.

## Orchestration avec Hydrogen dans Antigravity

Dans l'IDE Antigravity, la fonctionnalité Orchestrator peut désormais associer Neon comme planificateur à Hydrogen comme exécutant au sein d'une même session. Neon est aussi devenu le modèle par défaut de l'IDE pour les utilisateurs n'ayant pas fait de choix explicite, avec quatre niveaux de raisonnement disponibles.

## Pourquoi ça compte

Avec Neon, Google segmente sa gamme à la manière d'OpenAI avec Astra/Sol : un modèle milieu de gamme taillé pour le code à un coût mieux maîtrisé que le haut de gamme, et une orchestration multi-modèles qui devient un argument de vente à part entière pour les outils de dev assistés par IA.
