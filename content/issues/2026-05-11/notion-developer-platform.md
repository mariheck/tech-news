---
title: "Notion 3.5 s'ouvre aux développeurs et devient un hub d'orchestration d'agents"
excerpt: "Notion a lancé le 13 mai une plateforme développeur complète : Workers, External Agent API, CLI et synchronisation de données tierces en temps réel."
summary: "Avec Notion 3.5, le workspace devient une couche d'orchestration : les Workers hébergent du code sans serveur, l'External Agent API connecte Claude, Codex ou des agents maison, la CLI permet l'accès programmatique depuis un terminal ou un agent IA."
date: 2026-05-11T00:00:00Z
readingTime: 6
sources:
  - label: "Notion Blog"
    url: "https://www.notion.com/blog/introducing-developer-platform"
  - label: "Notion Releases – 13 mai"
    url: "https://www.notion.com/releases/2026-05-13"
  - label: "TechCrunch – 13 mai"
    url: "https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/"
  - label: "Guide Workers – Dev Day"
    url: "https://matthiasfrank.de/en/notion-workers-dev-day-2026/"
category: actus ia
---

Le 13 mai, Notion a dévoilé sa **plateforme développeur** dans le cadre de la version 3.5 de son workspace. L'annonce marque une transformation significative du positionnement de Notion : de workspace tout-en-un, il devient une couche d'orchestration ouverte aux agents IA, aux développeurs et aux flux de données externes.

## Les quatre piliers

### 1. Notion Workers

Les Workers sont un **runtime hébergé pour du code personnalisé** — directement dans Notion, sans serveur à gérer. En pratique :

- Connexion directe aux API d'outils tiers (Zendesk, Salesforce, Postgres, etc.)
- Automatisation de transferts qui étaient jusqu'ici manuels
- Déploiement et gestion via la CLI Notion

Les Workers sont **gratuits durant la bêta**. À partir du 11 août 2026, ils seront facturés en Notion credits.

### 2. External Agent API

Notion peut désormais accueillir des agents IA externes dans son workspace. La liste supportée inclut Claude, Codex, Decagon et des agents personnalisés. Ces agents peuvent lire le contenu Notion, créer et modifier des pages, et déclencher des Workers.

Pour les équipes qui construisent des agents IA pour leurs clients ou leurs propres workflows, Notion devient un **substrat de travail natif** plutôt qu'un simple outil parmi d'autres.

### 3. Database Sync

La synchronisation de bases de données (alimentée par les Workers) importe des données depuis n'importe quel système avec une API — et les **maintient à jour automatiquement** dans des bases Notion. Cas d'usage immédiats : tickets Zendesk, pipeline CRM Salesforce, données Postgres.

### 4. Notion CLI

Une interface en ligne de commande dédiée aux développeurs et aux agents de code. Elle permet de :
- Se connecter au workspace depuis un terminal
- Lire et agir dans Notion programmatiquement
- Builder et déployer des Workers
- Intégrer Notion dans des pipelines CI/CD ou des agents IA

## Pourquoi maintenant ?

Notion positionne ce pivot comme une réponse directe à la montée des workflows agentiques dans les équipes tech. Avec Claude Code, Codex et d'autres agents de code capables d'opérer dans plusieurs outils, Notion veut être le **lieu de coordination** plutôt qu'un silo supplémentaire.

La proposition est limpide : les Workers comblent les gaps entre vos outils, Notion est la couche connective. Les agents peuvent y lire le contexte, y écrire les résultats, y déclencher des automatisations — tout en restant dans l'environnement de travail naturel des équipes.
