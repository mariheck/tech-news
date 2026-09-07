---
title: "Muse Code sort de bêta avec SDK et multi-agents"
excerpt: "L'agent de code de Meta passe en GA avec des plans payants"
summary: "Le 1er septembre, Meta sort Muse Code de sa bêta. Au programme : messagerie inter-sessions, moteur de workflows multi-agents, SDK TypeScript en developer preview et des plans payants à partir de 5 $/mois. Le modèle sous-jacent reste Muse Spark 1.2."
date: 2026-08-31T00:00:00Z
reading_time: 6
sources:
  [
    { label: "Meta Developer Blog", url: "https://developer.meta.com/ai/resources/blog/muse-code-new-plans-and-features/" },
    { label: "TechCrunch", url: "https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/" },
    { label: "VentureBeat", url: "https://venturebeat.com/orchestration/meta-enters-the-ai-coding-wars-with-muse-spark-1-2-and-muse-code-with-persistent-async-background-agents" },
    { label: "claypier", url: "https://claypier.com/en/meta-muse-code-ga-pricing/" }
  ]
category: 'dev-ia'
---

# Muse Code sort de bêta avec SDK et multi-agents

Le 1er septembre 2026, Meta annonce la **general availability de Muse Code**, son agent de code en terminal lancé en bêta le 5 août. La GA s'accompagne d'un ensemble de nouvelles fonctionnalités et de plans tarifaires, transformant Muse Code d'un outil expérimental en produit commercial.

## Ce qui était en bêta, ce qui est nouveau

Le modèle sous-jacent reste **Muse Spark 1.2** pour la GA — Muse Spark 1.3 (disponible depuis le 2 septembre) sera intégré dans une mise à jour ultérieure. Les fonctionnalités principales de l'agent (planification de changements, écriture de code, validation des résultats sur de grands dépôts) restent inchangées.

Les nouvelles fonctionnalités arrivant avec la GA sont :

### Messagerie inter-sessions

Les sessions Muse Code peuvent désormais **envoyer des messages aux autres sessions** actives. Quand un changement dans une session affecte ce qu'une autre construit, elle peut transmettre un avertissement. Quand une session résout une question sur laquelle une autre est bloquée, elle peut en passer la réponse. Les messages transitent via un socket Unix entre processus locaux — aucune donnée ne traverse le réseau.

### Moteur de workflows multi-agents

**Workflows** fait évoluer la capacité multi-agents existante en bêta. Des agents spécialisés s'organisent autour d'une tâche plus large, le travail intermédiaire circule entre les étapes, et un résultat unique est renvoyé en fin de chaîne. Une salle de contrôle dédiée permet de surveiller la progression et de réorienter les agents en cours d'exécution.

### SDK TypeScript (developer preview)

Le SDK expose le moteur sous-jacent de la CLI — sessions, outils, contrôle des permissions — comme bibliothèque TypeScript. Il est possible de **piloter Muse Code programmatiquement** : démarrer et reprendre des sessions, envoyer des instructions, gérer les réponses et réagir aux actions de l'agent, sans intervention humaine au terminal. Cela ouvre la voie à des intégrations IDE, des outils d'ingénierie internes ou des produits agent autonomes construits au-dessus de Muse Code.

### Rewind

**Rewind** permet de ramener en arrière la conversation d'une session et les modifications de code jusqu'à un point antérieur choisi. Pour un outil construit autour d'agents qui s'exécutent longtemps, la granularité du retour en arrière est un mécanisme de sécurité pratique.

## Plans et tarification

| Plan | Prix | Inclus |
|---|---|---|
| Free | 0 $/mois | Usage limité |
| Starter | 5 $/mois | Usage étendu |
| Pro | Tarif non publié | Accès complet + SDK |

Les détails complets des quotas par plan sont disponibles sur la page Meta Developer.

## Positionnement concurrentiel

Avec cette GA, Muse Code entre en concurrence directe avec Claude Code d'Anthropic et Codex d'OpenAI. Le SDK en developer preview est un signal que Meta cible aussi les développeurs qui veulent construire des produits internes ou des agents personnalisés, pas seulement les utilisateurs directs du terminal.

Pour les développeurs qui testaient déjà Muse Code en bêta, la migration vers la GA est transparente. Les workflows multi-agents et la messagerie inter-sessions sont les nouvelles fonctionnalités les plus distinctives — et méritent une exploration si vos projets impliquent des tâches de refactoring étendues sur de larges bases de code.
