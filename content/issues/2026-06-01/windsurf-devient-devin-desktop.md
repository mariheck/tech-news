---
title: "Windsurf devient Devin Desktop et ouvre le protocole ACP"
excerpt: "Cognition rebrand son IDE agent-native et lance l'ACP open."
summary: "Cognition rebaptise Windsurf en Devin Desktop (2 juin). L'Agent Command Center devient la surface par défaut. Devin Local est réécrit en Rust (30 % plus efficace), et l'Agent Client Protocol (ACP) open-source permet à Codex, Claude Agent ou OpenCode de tourner dans l'IDE."
date: 2026-06-01T00:00:00Z
reading_time: 6
sources:
  [
    { label: "Devin – Windsurf rebrand", url: "https://devin.ai/blog/windsurf-is-now-devin-desktop" }
  ]
category: 'dev-ia'
---

# Windsurf devient Devin Desktop et ouvre le protocole ACP

Le 2 juin 2026, Cognition annonce que **Windsurf est rebaptisé Devin Desktop**. Ce n'est pas un simple changement de nom : l'IDE passe d'un éditeur de code avec complétion IA à une **plateforme de gestion d'agents**, avec un protocole ouvert pour accueillir des agents tiers.

## L'Agent Command Center : la surface par défaut

Le changement le plus visible est l'interface. Dans Devin Desktop, l'**Agent Command Center** remplace l'onglet de code comme surface principale. Le paradigme n'est plus "éditeur de code augmenté par l'IA" mais "tableau de bord d'orchestration d'agents" dans lequel la vue code est un outil parmi d'autres.

L'Agent Command Center permet de :
- Lancer et suivre plusieurs sessions d'agents en parallèle
- Visualiser l'état et la progression de chaque agent
- Gérer les worktrees git isolés par session
- Intégrer des agents tiers via le protocole ACP

## Devin Local réécrit en Rust

L'agent local embarqué dans l'IDE — **Devin Local** — a été entièrement réécrit en Rust. Le gain annoncé : **30 % de consommation de tokens en moins** pour les mêmes tâches. Sur un usage quotidien intensif, c'est une économie non négligeable, notamment pour les plans à facturation à la consommation.

La réécriture en Rust apporte aussi des améliorations de stabilité et de latence pour les opérations sur le système de fichiers, point sensible pour un agent qui modifie du code en temps réel.

## L'Agent Client Protocol (ACP) : le changement le plus structurant

Le point le plus important de cette annonce pour l'écosystème est l'ouverture de l'**Agent Client Protocol (ACP)**, publié en open-source.

L'ACP est un protocole standardisé qui permet à n'importe quel agent compatible de s'exécuter dans Devin Desktop. Les agents officiellement supportés dès le lancement :

- **OpenAI Codex** (via plugin)
- **Claude Agent** d'Anthropic
- **OpenCode** (agent open-source)

Concrètement, un développeur peut choisir quel agent exécute une tâche — Devin Local pour les modifications de code locales, Claude Agent pour les tâches de planification et d'architecture, Codex pour les intégrations GitHub — au sein du même environnement.

ACP définit un contrat d'interface : comment un agent annonce ses capacités, comment il reçoit des instructions, comment il rapporte son état, et comment il accède aux ressources de l'IDE (système de fichiers, terminal, connexions MCP). En rendant ce protocole public, Cognition joue la carte de la plateforme ouverte plutôt que de l'écosystème fermé.

## Migration automatique

Windsurf avait une base d'utilisateurs établie. La migration vers Devin Desktop a été conçue pour être transparente :

- **Paramètres utilisateur** préservés
- **Extensions installées** maintenues
- **Connexions MCP** configurées conservées
- **Historique de sessions** transféré

Aucune action manuelle requise — le rebrand s'applique automatiquement lors de la prochaine mise à jour de l'application.

## Lecture : la convergence IDE/orchestrateur

L'annonce s'inscrit dans une tendance de fond : les éditeurs de code évoluent vers des **orchestrateurs multi-agents**. Cursor, GitHub Copilot App, et maintenant Devin Desktop poursuivent tous la même vision — un espace de travail où le développeur délègue des sous-tâches à des agents spécialisés plutôt que d'écrire chaque ligne lui-même.

Ce qui différencie Devin Desktop dans ce panorama : l'ouverture. Là où Cursor et GitHub Copilot restent des écosystèmes relativement fermés sur leurs propres modèles et agents, l'ACP est un pari sur la fragmentation productive — "que le meilleur agent pour chaque tâche gagne".

Pour un développeur frontend qui expérimente avec les workflows agents, Devin Desktop devient une option sérieuse à tester, notamment grâce au support natif de MCP et à la capacité à switcher d'un agent à l'autre sans changer d'environnement.
