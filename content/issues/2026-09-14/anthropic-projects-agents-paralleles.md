---
title: "Claude Code : des agents parallèles coordonnés"
excerpt: "Projects se réinvente autour d'un coordinateur d'agents"
summary: "Anthropic lance en bêta une refonte de Projects dans Claude Code : un coordinateur découpe une demande et la délègue à plusieurs agents cloud en parallèle, chacun sur sa branche, avant d'assembler le résultat."
date: 2026-09-14T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Claude Blog", url: "https://claude.com/blog/projects-redesigned" },
    { label: "Unite.AI", url: "https://www.unite.ai/anthropic-redesigns-claude-code-projects-to-coordinate-agent-threads/" },
    { label: "The Decoder", url: "https://the-decoder.com/anthropic-keeps-pushing-claude-code-toward-autonomous-coding-with-new-parallel-agent-workflows/" },
    { label: "MLQ.ai", url: "https://mlq.ai/news/anthropic-opens-parallel-claude-code-projects-beta-to-select-pro-and-max-users/" }
  ]
category: 'dev-ia'
---

# Claude Code : des agents parallèles coordonnés

Le 17 septembre 2026, Anthropic a annoncé une refonte en profondeur de "Projects" dans Claude Code, introduisant un modèle de travail organisé autour d'agents parallèles coordonnés plutôt que d'un unique agent traitant les tâches l'une après l'autre.

## Un coordinateur qui délègue et assemble

Le nouveau fonctionnement repose sur un "coordinateur" qui reçoit la demande de l'utilisateur, la découpe en sous-tâches, puis délègue chacune d'elles à un thread d'agent Claude Code distinct, exécuté dans le cloud. Chaque agent travaille sur sa propre branche — ou sa propre copie du dépôt — de manière isolée.

Une fois le travail effectué, chaque agent exécute les tests correspondants et ouvre sa propre pull request. Le coordinateur assemble ensuite les contributions des différents threads pour produire le résultat final présenté à l'utilisateur.

## Déploiement progressif

L'accès à cette nouvelle version de Projects est pour l'instant en bêta limitée, réservée aux abonnés Pro et Max qui utilisent déjà les sessions cloud de Claude Code. Anthropic prévoit une extension progressive de la disponibilité vers les offres Team et Enterprise dans un second temps.

## Pourquoi ça compte

Cette annonce s'inscrit dans une tendance plus large de l'industrie vers l'orchestration de plusieurs agents autonomes travaillant en parallèle sur un même projet, plutôt qu'un agent unique suivant une chaîne de tâches séquentielle. Pour les équipes de développement, la promesse est de paralléliser des chantiers auparavant traités les uns après les autres — par exemple plusieurs correctifs indépendants ou plusieurs petites fonctionnalités — en confiant chaque sous-tâche à un agent dédié, avec une supervision humaine concentrée sur l'assemblage final plutôt que sur chaque étape intermédiaire.
