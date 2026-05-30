---
title: 'Grok Build : le CLI agentic de xAI en beta'
excerpt: '8 sous-agents parallèles, exécution locale, support du protocole ACP.'
summary: 'xAI lance Grok Build, un CLI de coding agent écrit en Rust avec planification supervisée, jusqu'à 8 sous-agents parallèles, exécution 100% locale et support du protocole ACP. La beta est réservée aux abonnés SuperGrok Heavy.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'xAI Introducing Grok Build', url: 'https://x.ai/news/grok-build-cli' },
    { label: 'TechLoy early beta review', url: 'https://www.techloy.com/grok-build-early-beta-6-ways-xais-new-ai-coding-agent-plans-to-take-on-claude-code/' },
    { label: 'Pasquale Pillitteri review', url: 'https://pasqualepillitteri.it/en/news/2584/grok-build-xai-cli-2026' }
  ]
category: 'dev-ia'
---

# Grok Build : le CLI agentic de xAI en beta

xAI a lancé **Grok Build** en beta le 14 mai 2026. Concurrent direct de Claude Code et du CLI Codex d'OpenAI, Grok Build est un agent de coding terminal-native écrit en Rust, alimenté par le modèle `grok-build-0.1`. Tour d'horizon de ce qui le distingue.

## Plan-Review-Approve : l'utilisateur reste maître

Avant d'exécuter quoi que ce soit, Grok Build produit un plan détaillé de ce qu'il va faire, étape par étape. L'utilisateur peut :
- Approuver le plan tel quel
- Commenter des étapes individuelles
- Réécrire entièrement le plan en langage naturel

Une fois approuvé, chaque changement de fichier apparaît comme un diff propre dans le terminal, avec demande de validation avant application. Ce workflow en deux temps (planification puis exécution) vise à redonner de la visibilité sur ce que l'agent fait réellement.

## Jusqu'à 8 sous-agents parallèles

Un prompt peut spawner jusqu'à **8 sous-agents** qui travaillent chacun sur leur branche de la codebase. Chaque sous-agent a une tâche précise et un périmètre de fichiers défini. Le plan principal agrège leurs sorties dans une vue unifiée.

C'est l'argument le plus fort de Grok Build pour les tâches de refactoring large ou les migrations de dépendances, où plusieurs parties du code peuvent être traitées indépendamment.

## Exécution locale et compatibilité air-gap

L'ensemble du code s'exécute **sur la machine de l'utilisateur**. Rien dans la codebase n'est transmis aux serveurs de xAI pendant une session — seuls les prompts et les réponses du modèle transitent via l'API. L'outil est également compatible avec les environnements **air-gap** une fois l'installation initiale effectuée.

## Support du protocole ACP

Grok Build supporte le protocole **ACP (Agent Client Protocol)**, ce qui le rend interopérable avec les outils qui implémentent ce standard. Il accepte également les serveurs **MCP** existants, ce qui permet de brancher les mêmes contextes d'outils que ceux configurés dans d'autres clients.

## Modèle et disponibilité

Le modèle `grok-build-0.1` dispose d'une fenêtre de contexte de 256 000 tokens et supporte les entrées texte et image. La beta est ouverte depuis le 14 mai aux abonnés **SuperGrok Heavy** (299 $/mois), avec une extension prévue aux abonnés SuperGrok et X Premium+ à partir du 25 mai.

## Positionnement face à la concurrence

Grok Build arrive dans un marché déjà animé : Claude Code (Anthropic), Codex CLI (OpenAI), Cursor et Gemini CLI (Google) se disputent l'attention des développeurs. Ses différenciateurs principaux sont la transparence du workflow (plan explicite avant exécution), la parallélisation native des sous-agents et l'exécution entièrement locale. La disponibilité limitée aux abonnés premium reste le frein principal pour une adoption large à ce stade.
