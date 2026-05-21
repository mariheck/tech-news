---
title: "Notion 3.5 : Workers, External Agent API et Database Sync"
accroche: "Notion devient une plateforme pour agents IA : Workers hébergés, API pour agents externes, synchronisation de bases de données."
résumé: "Le 13 mai 2026, Notion a lancé sa version 3.5 avec une Developer Platform complète : Workers (runtime de code hébergé), External Agent API (pour intégrer Claude Code, Cursor, Codex...) et Database Sync (Zendesk, Salesforce, Postgres). Le workspace devient un hub d'orchestration d'agents."
semaine: "Semaine du 11 au 17 mai 2026"
temps_de_lecture: "5min"
sources:
  - titre: "Notion 3.5 release notes"
    url: "https://www.notion.com/releases/2026-05-13"
  - titre: "Notion Developer Platform — blog"
    url: "https://www.notion.com/blog/introducing-developer-platform"
  - titre: "Notion AI agent hub — TechCrunch"
    url: "https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/"
  - titre: "Notion Workers pricing"
    url: "https://www.notion.com/help/understand-pricing-for-workers"
  - titre: "Notion Dev Day 2026 — Matthias Frank"
    url: "https://matthiasfrank.de/en/notion-workers-dev-day-2026/"
catégorie: "IA"
---

# Notion 3.5 : Workers, External Agent API et Database Sync

Le 13 mai 2026, Notion a lancé sa version 3.5 et annoncé simultanément une **Developer Platform** structurée autour de trois primitives : Workers, External Agent API, et Database Sync. L'annonce s'accompagnait d'un Dev Day diffusé en ligne. Ce n'est pas une simple mise à jour — c'est un repositionnement de Notion comme plateforme d'orchestration.

## Notion Workers : du code hébergé sans infrastructure

Les **Notion Workers** sont un runtime hébergé permettant de déployer du code personnalisé directement dans Notion, sans serveur externe. Un Worker reçoit des webhooks, exécute de la logique métier, et peut ensuite agir dans Notion ou appeler des APIs tierces.

Exemples concrets d'usage mentionnés au lancement :
- Clore automatiquement des tâches Notion quand une pull request merge sur GitHub
- Mettre à jour un CRM Notion quand un abonnement change dans Stripe
- Transformer et enrichir des données entrantes avant de les insérer dans une base Notion

Pendant la beta, les Workers sont **gratuits**. À partir du 11 août 2026, ils seront facturés en crédits Notion : 0,0023 $ par exécution, soit environ 4 348 runs pour 1 000 crédits mensuels (10 $). Les Workers sont disponibles dès maintenant en beta publique sur les plans Business et Enterprise.

## External Agent API : les agents tiers deviennent des participants du workspace

L'**External Agent API** (et son SDK, actuellement en alpha sur liste d'attente) permet d'intégrer des agents externes dans Notion comme des participants à part entière. Au lancement, quatre agents sont supportés : **Claude Code, Cursor, Codex** (OpenAI), et **Decagon** (service client IA).

Ces agents apparaissent dans la liste des agents du workspace, peuvent discuter directement dans Notion, et prendre des actions. En pratique, un agent comme Claude Code peut lire et modifier des pages Notion, consulter des bases de données, et déclencher des Workers — sans quitter son environnement natif.

Cette API transforme Notion en couche d'orchestration : au lieu de copier-coller du contexte entre outils, les agents ont un accès structuré aux informations déjà présentes dans le workspace.

## Database Sync : les données externes entrent dans Notion

Le troisième pilier est la **Database Sync**, construite sur Workers : elle permet de connecter n'importe quel système externe disposant d'une API — Zendesk, Salesforce, PostgreSQL, et d'autres — vers des bases de données Notion, avec une mise à jour automatique.

Cela résout un problème récurrent : maintenir un wiki ou un CRM Notion synchronisé avec des systèmes source-of-truth externes, sans scripts de synchronisation artisanaux.

## Ce que ça change dans les workflows de développement

Cette version de Notion est particulièrement intéressante pour les équipes qui utilisent déjà un agent de code comme Claude Code ou Cursor : la documentation, les tickets, et les specs rédigées dans Notion deviennent directement accessibles par l'agent, qui peut les lire, les mettre à jour et les lier à des PRs GitHub via Workers.

Le positionnement est clair : Notion ne concurrence pas les outils de code, il s'y intègre comme couche de contexte et d'orchestration.

## Sources

- [Notion 3.5 — Release notes officielles](https://www.notion.com/releases/2026-05-13)
- [Introducing Notion's Developer Platform — Notion Blog](https://www.notion.com/blog/introducing-developer-platform)
- [Notion just turned its workspace into a hub for AI agents — TechCrunch](https://techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents/)
- [Workers pricing — Notion Help](https://www.notion.com/help/understand-pricing-for-workers)
- [Notion Workers: Dev Day 2026 — Matthias Frank](https://matthiasfrank.de/en/notion-workers-dev-day-2026/)
