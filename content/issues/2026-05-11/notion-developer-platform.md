---
title: 'Notion 3.5 : Workers, agents externes et sync de bases de données'
excerpt: 'Le 13 mai, Notion lance sa Developer Platform : déployez du code custom, branchez vos agents tiers et synchronisez vos données.'
summary: 'Notion 3.5 introduit une Developer Platform complète avec Workers (code hébergé), une External Agent API pour intégrer des agents tiers comme Claude Code ou Cursor, et un Database Sync alimenté par Workers pour garder ses bases Notion à jour depuis Salesforce, Postgres et autres.'
date: 2026-05-11T00:00:00Z
reading_time: 6
sources:
  [
    { label: 'Notion Blog', url: 'notion.com/blog/introducing-developer-platform' },
    { label: 'Notion Releases 3.5', url: 'notion.com/releases/2026-05-13' },
    { label: 'TechCrunch', url: 'techcrunch.com/2026/05/13/notion-just-turned-its-workspace-into-a-hub-for-ai-agents' }
  ]
category: 'actus ia'
---

# Notion 3.5 : Workers, agents externes et sync de bases de données

Le 13 mai 2026, Notion a publié la version 3.5 en introduisant une Developer Platform. L'annonce regroupe trois composants distincts — Workers, External Agent API et Database Sync — accompagnés d'un outil CLI. L'ambition est explicite : faire de Notion un hub d'orchestration pour les agents IA et les workflows automatisés, pas seulement un espace de documentation.

## Workers : du code hébergé dans Notion

Workers permet de déployer du code directement dans le runtime hébergé de Notion. Les cas d'usage annoncés couvrent la synchronisation de données entrantes, la construction d'outils personnalisés et le déclenchement d'actions via webhooks, sans avoir à gérer d'infrastructure externe.

Workers est disponible en public bêta sur les plans Business et Enterprise, et reste gratuit jusqu'en août. Le CLI associé — ntn — s'installe en une commande et permet d'authentifier, lire et écrire dans Notion, gérer et déployer des Workers depuis le terminal ou un IDE.

## External Agent API : les agents tiers comme participants natifs

L'External Agent API ouvre le workspace aux agents construits en dehors de Notion. À l'ouverture, les partenaires intégrés sont Claude Code, Cursor, Codex et Decagon. Selon Notion, ces agents deviennent des « first-class workspace participants » : ils voient les bases de données, peuvent lire et écrire du contenu et s'exécuter comme n'importe quel autre automatisme interne.

C'est une réponse directe à l'essor des agents de code autonomes qui opèrent en dehors de toute interface, avec le risque de fragmenter les sources de vérité. En leur donnant accès natif à Notion, la plateforme se positionne comme le contexte central de ces agents.

## Database Sync : brancher Salesforce ou Postgres en quelques lignes

Database Sync, alimenté par Workers, permet de connecter un système de données externe — Zendesk, Salesforce, Postgres, entre autres — à une base Notion et de maintenir le tout synchronisé automatiquement. Pas de copier-coller manuel, pas de feuille Google intermédiaire.

## Contexte

Depuis le lancement des Custom Agents en février 2026, Notion annonce que ses utilisateurs ont construit plus d'un million d'agents. La Developer Platform est la suite logique : outiller les équipes techniques pour aller plus loin que les agents no-code et permettre des intégrations sur mesure à l'échelle.
