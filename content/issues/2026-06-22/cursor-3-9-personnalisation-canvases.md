---
title: "Cursor 3.9 : personnalisation centralisée et canvases"
excerpt: "Plugins, MCPs et skills réunis dans une page Customize"
summary: "Cursor 3.9 (22 juin) regroupe plugins, skills, MCPs, rules, commandes et hooks en une page Customize unifiée par niveau (user/team/workspace). Les canvases préconstruits partagés (Hex, Atlassian) et les leaderboards d'équipe facilitent la distribution de workflows dans les organisations."
date: 2026-06-22T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Cursor – Customize changelog", url: "https://cursor.com/changelog/customize" },
    { label: "Cursor Release Notes – juin 2026", url: "https://releasebot.io/updates/cursor" }
  ]
category: 'dev-ia'
---

# Cursor 3.9 : personnalisation centralisée et canvases

Cursor 3.9, sorti le 22 juin 2026, est une release organisationnelle autant que technique. Le changement central est une nouvelle page **Customize** qui unifie l'ensemble des extensions, règles et comportements de l'agent dans une interface commune — et qui introduit des mécanismes de partage au niveau équipe qui manquaient jusqu'ici.

## La page Customize : tout au même endroit

Jusqu'à 3.9, les plugins, skills, MCPs, règles et commandes étaient configurés dans des menus séparés. La page Customize centralise tout cela en une vue unique, organisée en trois niveaux de portée :

- **User** — paramètres qui s'appliquent à toutes les sessions de l'utilisateur, quel que soit le workspace
- **Team** — paramètres partagés automatiquement avec tous les membres de l'équipe
- **Workspace** — paramètres spécifiques au projet courant, versionnables dans le repo

Depuis cette page, on peut ajouter et gérer :
- des **plugins** (extensions de l'agent)
- des **skills** (blocs de comportement réutilisables)
- des **MCPs** (Model Context Protocol servers, intégrations externes)
- des **subagents** (délégation de tâches à des agents spécialisés)
- des **rules** (instructions permanentes dans le contexte de l'agent)
- des **commandes** (raccourcis de prompt)
- des **hooks** (scripts exécutés à des moments précis du workflow)

L'intégration avec GitLab, Bitbucket et Azure DevOps pour les repositories de plugins ouvre la porte aux organisations qui ne travaillent pas sur GitHub.

## Team Leaderboards : ce que l'équipe utilise

Cursor 3.9 affiche un **classement des plugins, skills et MCPs** les plus populaires au sein d'une équipe. L'idée est simple : quand un développeur trouve une extension utile, elle remonte naturellement dans le classement et devient visible des collègues, qui peuvent l'adopter en un clic depuis le leaderboard.

C'est une réponse directe au problème de découverte dans les grandes équipes : les outils les plus utiles restaient souvent confinés à ceux qui les avaient configurés manuellement.

## Canvases préconstruits partagés

Les plugins Cursor peuvent maintenant inclure des **canvases préconfigurés** — des templates de canvas que l'équipe peut ouvrir et réutiliser. Deux exemples concrets mentionnés dans le changelog :

- **Hex Canvas** : un canvas dédié à la construction de visualisations de données, préconfiguré avec les outils d'analyse adaptés
- **Atlassian Canvas** : une vue temps réel de tous les tickets Jira, projets et documents Confluence, consultable depuis Cursor sans changer d'application

Ces canvases servent de points d'entrée standardisés pour des tâches répétitives, partagés entre tous les membres d'une organisation.

## Ce que ça change pour les équipes

La version 3.9 positionne clairement Cursor comme un outil de plateforme autant qu'un outil individuel. Les fonctions de partage team-level (leaderboards, canvases partagés, plugins distribués via le marketplace interne) s'adressent aux équipes qui veulent standardiser leur environnement de développement IA sans imposer une configuration manuelle à chaque développeur.

C'est une évolution cohérente avec la restructuration tarifaire annoncée en juin (Standard à $32/siège/mois annuel, Premium à $96) : à ces prix, les organisations s'attendent à une proposition de valeur collective, pas seulement individuelle.
