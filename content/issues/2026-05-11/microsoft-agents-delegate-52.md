---
title: 'DELEGATE-52 : les agents IA dégradent silencieusement les documents longs'
excerpt: 'Un benchmark Microsoft sur 52 domaines révèle que les meilleurs LLMs perdent 25 % du contenu sur des workflows documentaires longs.'
summary: 'Microsoft publie DELEGATE-52, un benchmark de 52 domaines professionnels simulant des workflows documentaires longs. Les modèles frontier (Gemini 3.1 Pro, Claude 4.6 Opus, GPT 5.4) perdent en moyenne 25 % du contenu sur 20 interactions — et le mode agentique avec outils aggrave encore les résultats.'
date: 2026-05-11T00:00:00Z
reading_time: 7
sources:
  [
    { label: 'The Register', url: 'theregister.com/ai-ml/2026/05/11/microsoft-researchers-find-ai-models-and-agents-cant-handle-long-running-tasks' },
    { label: 'TechRadar', url: 'techradar.com/pro/current-llms-introduce-substantial-errors-when-editing-work-documents-microsoft-scientists-find-most-ai-models-struggle-with-long-running-tasks' },
    { label: 'Resultsense', url: 'resultsense.com/news/2026-05-12-microsoft-research-ai-agents-task-failures' }
  ]
category: 'actus ia'
---

# DELEGATE-52 : les agents IA dégradent silencieusement les documents longs

Des chercheurs de Microsoft ont publié le 11 mai 2026 les résultats d'un benchmark nommé DELEGATE-52, conçu pour mesurer la fiabilité des modèles de langage sur des workflows documentaires multi-étapes. La conclusion est difficile à ignorer : même les meilleurs modèles frontier accumulent des erreurs silencieuses sur la durée, et ces erreurs se composent au fil des interactions.

## Le protocole : 52 domaines, des documents réels, une simulation en aller-retour

DELEGATE-52 couvre 52 domaines professionnels, parmi lesquels la rédaction de code, la comptabilité, la notation musicale ou la cristallographie. Chaque domaine s'appuie sur des documents réels d'environ 15 000 tokens, auxquels le modèle doit appliquer entre 5 et 10 tâches d'édition complexes.

La particularité du benchmark est sa « round-trip relay simulation » : le modèle effectue une transformation, puis doit l'inverser. Ce protocole expose les dérives progressives et les corruptions que des tests à passage unique ne détectent pas.

## Les résultats : 25 % de perte, 50 % de dégradation moyenne

Sur 20 interactions simulées, les modèles frontier — Gemini 3.1 Pro, Claude 4.6 Opus et GPT 5.4, notamment — perdent en moyenne 25 % du contenu des documents. La dégradation moyenne toutes catégories et tous modèles confondus atteint 50 %. Le meilleur modèle du benchmark, Gemini 3.1 Pro, n'est jugé opérationnel que sur 11 des 52 domaines testés.

Les chercheurs notent que les erreurs sont « sparse but severe » : elles n'apparaissent pas à chaque interaction, mais quand elles surgissent, elles corrompent le document de manière significative et l'effet s'accumule au fil des échanges.

## Le mode agentique aggrave les choses

Un résultat particulièrement contre-intuitif : lorsque les modèles opèrent en mode agentique avec accès à des outils (lecture et écriture de fichiers, exécution de code), leurs performances se dégradent davantage que sans outils, en moyenne de 6 % supplémentaires à la fin de la simulation.

C'est un signal important à l'heure où les équipes multiplient les architectures d'agents autonomes : l'outillage accru ne compense pas les limitations structurelles des modèles sur les longues chaînes de tâches, et peut même les amplifier.

## Ce que ça change pour les workflows IA en prod

Ces résultats ne signifient pas que les LLMs sont inutilisables en production, mais ils posent des questions concrètes sur la supervision et la validation dans les pipelines longs. Pour les workflows documentaires critiques — contrats, rapports financiers, documentation technique — la confiance aveugle dans la sortie d'un agent sur de nombreuses interactions est risquée.

Des pistes pragmatiques : segmenter les workflows en étapes plus courtes avec validation humaine intermédiaire, stocker les états intermédiaires pour détecter les dérives, et éviter de déléguer des transformations réversibles sans vérification du résultat.
