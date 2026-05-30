---
title: "Anthropic lance ses agents managés et signe SpaceX"
excerpt: "Code with Claude 2026 : agents autonomes, Claude Code boosté et contrat SpaceX."
summary: "Lors de sa conférence Code with Claude à San Francisco, Anthropic a lancé Claude Managed Agents (Dreaming, Outcomes, Multiagent), doublé les limites Claude Code, et signé un contrat compute de 1,25 Md$/mois avec SpaceX."
date: 2026-05-04T00:00:00Z
reading_time: 4
sources:
  - { label: "Code with Claude 2026", url: "https://claude.com/code-with-claude" }
  - { label: "Simon Willison recap", url: "https://simonwillison.net/2026/May/6/code-w-claude-2026/" }
  - { label: "The Register - SpaceX deal", url: "https://www.theregister.com/ai-and-ml/2026/05/06/claude-hitches-a-ride-on-spacexs-datacenter-capacity/5231252" }
category: actus-ia
---

# Anthropic lance ses agents managés et signe SpaceX

Le 6 mai 2026, Anthropic tenait sa conférence développeurs **Code with Claude** à San Francisco — une première pour la société, qui prévoit deux dates supplémentaires à Londres (20-21 mai) et Tokyo (10 juin). Avec plus de 15 annonces produit en une seule journée, c'est la semaine la plus chargée de l'histoire de la société en termes de lancement.

## Claude Managed Agents : trois nouvelles capacités

Le cœur de la conférence était le lancement de **Claude Managed Agents**, une infrastructure permettant aux agents de s'améliorer et de s'orchestrer de manière autonome. Trois fonctionnalités ont été annoncées :

### Dreaming (Research Preview)

En dehors des sessions actives, les agents peuvent désormais **passer en revue leurs sessions passées**, en extraire des patterns récurrents et rédiger des notes mémoire pour s'améliorer. Baptisée « Dreaming », cette capacité rapproche les agents d'un comportement d'apprentissage continu sans nécessiter de fine-tuning explicite.

### Outcomes (Public Beta)

Il est désormais possible de **définir des critères de succès** pour une tâche déléguée à un agent. Celui-ci itère alors de manière autonome jusqu'à satisfaire les conditions définies, sans intervention manuelle entre les tentatives.

### Multiagent Orchestration (Public Beta)

Claude peut maintenant **orchestrer une flotte d'agents** pour décomposer des tâches complexes. Un agent coordinateur délègue des sous-tâches à des agents spécialisés qui travaillent en parallèle, avant de synthétiser leurs résultats.

## Claude Code : limites doublées

Pour les utilisateurs de Claude Code (l'interface CLI d'Anthropic pour le développement), les **rate limits ont été doublées** sur la fenêtre de 5 heures pour les plans Pro, Max, Team et Enterprise. Les limites API de la plateforme ont également été relevées globalement.

## Le deal SpaceX : 1,25 milliard de dollars par mois

En marge des annonces produit, la conférence a été marquée par une révélation stratégique majeure : Anthropic a signé un **contrat de procurement compute avec SpaceX** pour une capacité dans le centre de données Colossus de la société. Le montant : **1,25 milliard de dollars par mois**, soit environ 45 milliards sur trois ans.

Le CEO Dario Amodei a par ailleurs déclaré lors de la conférence qu'Anthropic affichait une **croissance annualisée d'environ 80×** sur l'usage et le revenu de son premier trimestre 2026 — un chiffre qui illustre la vélocité de l'adoption de Claude dans les workflows professionnels.

## Ce que ça change pour les développeurs

L'annonce des Managed Agents représente un changement de paradigme dans la façon de concevoir des workflows IA : au lieu de piloter chaque étape d'un agent manuellement, il devient possible de définir un objectif et de laisser le système itérer. La capacité Dreaming introduit en plus une forme de mémoire organisationnelle autonome.

Pour les équipes utilisant Claude Code au quotidien, le doublement des rate limits est une amélioration concrète immédiate, notamment pour les sessions longues de refactoring ou de génération de tests.
