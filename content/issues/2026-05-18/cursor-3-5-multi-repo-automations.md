---
title: 'Cursor 3.5 : les agents opèrent sur plusieurs repos'
excerpt: 'Multi-repo simultané, Automations dans l''Agents Window et templates no-repo : Cursor 3.5 s''affirme.'
summary: 'Cursor 3.5 intègre les Automations dans l''Agents Window, ouvre le support multi-repo (commits coordonnés sur plusieurs dépôts simultanément) et lance cinq templates no-repo prêts à l''emploi pour Slack, analytics et finance.'
date: 2026-05-18T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Cursor changelog – 3.5', url: 'https://cursor.com/changelog/05-20-26' },
    { label: 'ChatForest – Cursor 3.3–3.5', url: 'https://chatforest.com/builders-log/cursor-3-3-3-5-parallel-agents-pr-review-automations/' }
  ]
category: 'dev-ia'
---

# Cursor 3.5 : les agents opèrent sur plusieurs repos

Cursor 3.5 est sorti le 20 mai avec trois évolutions qui marquent une progression nette vers l'autonomie agentique — et notamment un cap franchi sur le travail multi-dépôts, qui était jusqu'ici l'une des limites structurelles des outils de code assisté.

## Automations dans l'Agents Window

Jusqu'à la 3.5, les Automations Cursor n'étaient accessibles que depuis l'interface web `cursor.com/automations`. Dans la 3.5, elles sont intégrées directement dans la fenêtre Agents de l'IDE — la même surface où s'exécutent les agents de code interactifs.

Ce n'est pas seulement un changement de surface : ça permet de configurer, lancer et monitorer des Automations depuis le contexte de développement, sans passer par le navigateur. La séparation IDE / web était perçue comme une friction par les équipes qui utilisaient les Automations intensivement.

## Multi-repo : commits coordonnés sur plusieurs dépôts

C'est la fonctionnalité la plus significative de la release. Les agents Cursor peuvent maintenant **raisonner et committer sur plusieurs dépôts simultanément** dans une seule Automation.

Ce que ça rend possible : une modification qui impacte un monorepo parent et un package publié séparément peut être gérée par un seul agent, avec des commits cohérents dans les deux repos. De même pour des migrations qui touchent une API et tous ses clients.

Pour les équipes qui maintiennent des architectures distribuées ou des systèmes avec plusieurs packages npm, c'est un changement de catégorie : on passe d'un assistant de fichiers à un outil capable de raisonner sur les relations entre dépôts.

## No-repo Automations : cinq templates prêts à l'emploi

La 3.5 introduit les **no-repo Automations** — des agents qui s'exécutent sans être attachés à un dépôt de code. Cinq templates sont disponibles au lancement :

- **Slack digest** : résumé quotidien des canaux sélectionnés
- **Product analytics** : suivi et rapport automatisé d'événements produit
- **Product FAQ** : maintien d'une base de FAQ à partir de tickets de support
- **Finance** : reporting financier automatisé depuis des sources de données définies
- **Customer health** : scoring et alertes sur la santé client

Ces templates sont exécutés par des agents qui n'ont pas besoin de contexte de code : ils accèdent à des APIs, des bases de données ou des services configurés dans l'Automation. C'est une extension claire du périmètre de Cursor au-delà du développement pur.

## Tarification : 50 % de réduction à la sortie

Toutes les nouvelles exécutions d'Automation lancées dans les 7 jours suivant la sortie bénéficient d'une **réduction de 50 %**. C'est un signal commercial fort pour inciter les équipes à tester les nouvelles capacités multi-repo et no-repo.

## Positionnement

Cursor 3.5 s'inscrit dans une semaine où Anthropic (Claude Code Managed Agents) et Google (Antigravity 2.0) ont également fait des annonces majeures sur l'autonomie agentique. La pression concurrentielle est visible dans la cadence de releases — Cursor affiche maintenant des mises à jour hebdomadaires, avec des fonctionnalités structurantes à chaque version mineure.
