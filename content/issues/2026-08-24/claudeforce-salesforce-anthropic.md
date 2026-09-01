---
title: "Claudeforce : Claude devient le cerveau de Salesforce"
excerpt: "Salesforce et Anthropic s'associent dans un deal à 300 M$ en tokens"
summary: "Salesforce et Anthropic lancent Claudeforce : Claude devient le moteur IA par défaut du CRM et de Slack, avec 37 skills sales préconstruits. Salesforce prévoit de dépenser 300 M$ en tokens Anthropic en 2026."
date: 2026-08-24T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Salesforce Press Release", url: "https://www.salesforce.com/news/press-releases/2026/08/26/salesforce-and-anthropic-announce-claudeforce/" },
    { label: "VentureBeat", url: "https://venturebeat.com/orchestration/salesforce-just-put-its-entire-crm-inside-claude-and-says-youll-never-need-its-app-again" },
    { label: "DigitalCommerce360", url: "https://www.digitalcommerce360.com/2026/08/27/salesforce-anthropic-claude-partnership-claudeforce/" }
  ]
category: 'actus-ia'
---

# Claudeforce : Claude devient le cerveau de Salesforce

Le 26 août 2026, Salesforce et Anthropic ont annoncé conjointement **Claudeforce**, un partenariat d'intégration profonde qui positionne Claude comme le moteur de raisonnement par défaut de l'ensemble de l'écosystème Salesforce. L'annonce a provoqué une hausse de 12 à 14% du cours de l'action Salesforce en after-hours. La beta ouverte est prévue pour septembre 2026.

## Le deal en chiffres

Salesforce détient déjà une participation de **300 M$** au capital d'Anthropic, acquise lors de précédentes levées de fonds. S'y ajoute désormais un engagement de **dépenser environ 300 M$ supplémentaires** en tokens Anthropic sur la seule année 2026 — ce qui fait de Salesforce l'un des clients commerciaux les plus importants d'Anthropic.

## Deux directions simultanées

Claudeforce se déploie selon deux axes complémentaires, annoncés simultanément.

### 1. Salesforce dans Claude

Un plugin Salesforce natif est disponible directement dans l'interface Claude (web, desktop, API). Il expose **37 skills sales préconstruits** qui permettent de :

- Consulter les données CRM en contexte (pipeline, comptes, opportunités)
- Mettre à jour les enregistrements Salesforce par langage naturel
- Déclencher des workflows Salesforce depuis une conversation Claude
- Analyser les performances commerciales sans ouvrir Salesforce

Ces actions sont **gouvernées** : Claude ne peut modifier que ce que l'utilisateur est autorisé à faire dans Salesforce, les permissions Salesforce s'appliquant en aval.

### 2. Claude dans Salesforce et Slack

Dans l'autre sens, Claude est intégré nativement dans :

- L'interface Salesforce CRM (suggestions contextuelles, rédaction d'emails de relance, résumés de comptes)
- Slack (agents Claude accédant aux données CRM sans quitter la conversation)

L'architecture technique, détaillée dans la couverture du 27 août, s'appuie sur une **couche MCP dédiée** : les données, workflows et règles métier Salesforce sont accessibles aux agents Claude à travers ce protocole, sans jamais exposer les données CRM brutes en dehors de la trust boundary Salesforce.

## Pourquoi c'est notable au-delà du CRM

Pour les développeurs, cet accord illustre une tendance de fond : les grands éditeurs logiciels ne cherchent plus à construire leur propre couche IA, mais à intégrer des modèles frontier directement dans leurs surfaces existantes via MCP.

La formule est simple : MCP standardise l'interface entre Claude et le système tiers, Salesforce apporte les données et les règles métier, Anthropic apporte le raisonnement. Le résultat est un agent qui "connaît" le CRM sans que les données ne transitent par les serveurs d'Anthropic sous forme brute.

Ce modèle (CRM + MCP + LLM frontier) sera probablement répliqué par d'autres éditeurs — HubSpot, SAP, ServiceNow — dans les prochains mois. La question pour les équipes de développement est de se préparer à exposer leurs propres systèmes via des serveurs MCP bien conçus, plutôt que de construire des intégrations ad-hoc.
