---
title: 'Gemini 3.5 Flash : vitesse frontier et IA agentique'
excerpt: 'Google lance Gemini 3.5 Flash à l'I/O 2026 : 4× plus rapide, même niveau frontier.'
summary: 'Google dévoile Gemini 3.5 Flash à l'I/O 2026 : son modèle le plus rapide toutes classes confondues, taillé pour les agents et le code. 4× plus vite que les autres frontier models, à 1,50 $/9 $ le million de tokens avec une fenêtre de contexte de 1M.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    { label: 'Google blog – Gemini 3.5', url: 'blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/' },
    { label: 'Google I/O 2026 annonces', url: 'blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/' },
    { label: 'Gemini 3.5 Flash – MarkTechPost', url: 'marktechpost.com/2026/05/20/google-introduces-gemini-3-5-flash-at-i-o-2026-a-faster-and-cheaper-model-for-ai-agents-and-coding/' },
    { label: 'Gemini 3.5 Flash – Simon Willison', url: 'simonwillison.net/2026/May/19/gemini-35-flash/' },
    { label: 'Gemini 3.5 Flash – GitHub Copilot', url: 'github.blog/changelog/2026-05-19-gemini-3-5-flash-is-generally-available-for-github-copilot/' }
  ]
category: 'actus-ia'
---

# Gemini 3.5 Flash : vitesse frontier et IA agentique

Google a levé le rideau sur Gemini 3.5 Flash le 19 mai 2026 lors de son Google I/O annuel. Premier modèle de la série 3.5, il est disponible dès l'annonce via l'API Gemini, Google AI Studio, Android Studio et l'application Gemini grand public — et est déjà intégré au mode IA de Google Search.

## Un positionnement clairement orienté agents et code

Google décrit Gemini 3.5 Flash comme son **modèle le plus fort pour les tâches agentiques et le développement** à ce jour. Il surpasse Gemini 3.1 Pro sur plusieurs benchmarks critiques :

- **Terminal-Bench 2.1** : 76,2 %
- **MCP Atlas** : 83,6 %
- **GDPval-AA** : 1 656 Elo
- **CharXiv Reasoning** (compréhension multimodale) : 84,2 %

Ces chiffres positionnent 3.5 Flash au-dessus du Pro précédent sur les tâches longues, multi-étapes et orientées outil — exactement les scénarios qui intéressent les équipes qui construisent des pipelines agentiques.

## 4× plus rapide que les autres modèles frontier

L'avancée la plus significative est le rapport intelligence/vitesse. Mesuré en tokens de sortie par seconde, Gemini 3.5 Flash est **4 fois plus rapide** que les autres modèles de niveau frontier actuellement disponibles. Pour les workflows où la latence compte — agents en temps réel, copilotes de code en streaming, chatbots grand public — c'est un levier concret.

## Tarification et fenêtre de contexte

Le modèle arrive à **1,50 $ / 9 $ par million de tokens** (entrée/sortie) avec une **fenêtre de contexte de 1 million de tokens**. À titre de comparaison, c'est un niveau de prix cohérent avec la gamme Flash précédente, malgré des performances qui rivalisent avec le tier Pro.

Gemini 3.5 Flash est également disponible dès maintenant pour GitHub Copilot (annoncé le même jour via le GitHub Changelog).

## Et Gemini 3.5 Pro ?

Google a confirmé que Gemini 3.5 Pro est en développement actif et déjà utilisé en interne. Son déploiement public est prévu pour le mois suivant. Les benchmarks de 3.5 Flash laissent entendre que Pro établira un nouveau plafond de performance pour la série.

## Antigravity 2.0 et WebMCP dans le sillage de l'I/O

L'annonce de 3.5 Flash s'inscrit dans un Google I/O dense pour les développeurs. Parmi les autres annonces notables de la keynote : Antigravity 2.0 — la plateforme de développement agentique de Google — passe en version majeure avec une CLI complète, des sandboxes cross-plateforme et des politiques Git renforcées. Google a également présenté **WebMCP**, un standard web ouvert proposé en collaboration avec Microsoft et incubé au W3C, qui permet aux développeurs d'exposer des fonctions JavaScript et des formulaires HTML comme des outils structurés appelables par des agents IA dans le navigateur. L'origin trial démarre avec Chrome 149.
