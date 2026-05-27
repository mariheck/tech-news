---
title: 'Anthropic protège ses agents IA avec MCP tunnels'
excerpt: 'Sandboxes auto-hébergés et MCP tunnels pour garder données et outils en interne.'
summary: 'Anthropic annonce deux nouvelles capacités pour Claude Managed Agents : des sandboxes auto-hébergés (bêta publique) et des MCP tunnels (preview) qui permettent aux entreprises de garder données sensibles et exécution d'outils dans leur périmètre de sécurité.'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Anthropic – MCP tunnels annonce', url: 'claude.com/blog/claude-managed-agents-updates' },
    { label: 'InfoQ – MCP tunnels', url: 'infoq.com/news/2026/05/claude-mcp-tunnels/' },
    { label: 'The Decoder – sandboxes & tunnels', url: 'the-decoder.com/anthropic-adds-self-hosted-sandboxes-and-mcp-tunnels-to-claude-managed-agents/' },
    { label: 'The New Stack – MCP tunnels', url: 'thenewstack.io/anthropic-mcp-tunnels-sandboxes/' }
  ]
category: 'dev-ia'
---

# Anthropic protège ses agents IA avec MCP tunnels

Le 19 mai 2026, lors de la conférence développeurs **Code with Claude** à Londres, Anthropic a annoncé deux nouvelles fonctionnalités pour Claude Managed Agents : les **MCP tunnels** (research preview) et les **sandboxes auto-hébergés** (bêta publique). L'objectif commun : permettre aux entreprises de déployer des agents IA autonomes sans pour autant exposer leurs systèmes internes à l'infrastructure cloud d'Anthropic.

## Le problème que ça résout

Les entreprises qui veulent utiliser des agents IA autonomes se heurtent systématiquement au même blocage : l'agent doit accéder à des bases de données internes, des APIs propriétaires, des systèmes de ticketing ou des bases de connaissances — mais ces ressources ne peuvent pas quitter le périmètre de sécurité de l'organisation. Jusqu'ici, la seule option était d'ouvrir des règles de pare-feu entrantes, ce qui va à l'encontre des politiques de sécurité de la plupart des entreprises.

## MCP tunnels : zéro exposition réseau

Les MCP tunnels résolvent ce problème par inversion du sens de connexion. Plutôt qu'Anthropic se connecte aux serveurs internes, **l'organisation déploie une passerelle légère qui établit une connexion chiffrée sortante** vers l'infrastructure Anthropic. Aucune règle de pare-feu entrante n'est nécessaire.

Via ce tunnel, l'agent peut appeler des MCP servers privés qui exposent les outils internes (requêtes SQL, appels d'API internes, lecture de tickets, consultation de la base de connaissances) sans que ces serveurs soient jamais accessibles depuis l'internet public.

La fonctionnalité est actuellement en **research preview limitée** — un accès anticipé est à demander auprès d'Anthropic.

## Sandboxes auto-hébergés : l'exécution reste chez vous

La deuxième annonce concerne l'environnement d'exécution des outils. Avec les sandboxes auto-hébergés, **la couche d'exécution des outils tourne sur l'infrastructure contrôlée par le client** — ou via des providers managés partenaires : Cloudflare, Daytona, Modal et Vercel.

Une distinction importante à garder en tête : la boucle agentique elle-même — orchestration, gestion du contexte, récupération d'erreurs — continue de s'exécuter sur les serveurs d'Anthropic. Seule l'exécution des outils se déplace dans le périmètre client. Cette séparation permet de garder les données sensibles en interne sans sacrifier l'orchestration managée.

Les sandboxes auto-hébergés sont disponibles dès maintenant en **bêta publique** pour tous les clients Anthropic.

## Un pivot structurant pour l'IA en entreprise

Ces deux fonctionnalités signalent une maturité croissante des offres agentiques : on passe de démos impressionnantes à des déploiements qui satisfont les contraintes réelles des DSI. La capacité à garder données et exécution en interne tout en s'appuyant sur une orchestration managée est précisément le compromis que les équipes sécurité attendent avant d'autoriser des agents autonomes en production.
