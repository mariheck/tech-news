---
title: "GitHub Copilot : sandboxing local et nouveaux modèles"
excerpt: "Preview publique d'un bac à sable pour les agents"
summary: "GitHub Copilot ajoute Opus 5.5, GPT-6 Sol/Luna et Grok 4.7, un mode sandboxing local en preview publique pour limiter l'accès des agents, un suivi OpenTelemetry, et une mise à jour de VS Code 1.139."
date: 2026-09-21T00:00:00Z
reading_time: 4
sources:
  [{ label: "GitHub Changelog", url: "https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/" }]
category: 'dev-ia'
---

# GitHub Copilot : sandboxing local et nouveaux modèles

Dans sa release hebdomadaire publiée le 25 septembre 2026 (couvrant la semaine du 21 septembre), GitHub Copilot a intégré plusieurs nouveautés côté modèles et sécurité des agents.

## Nouveaux modèles disponibles

Selon les plans souscrits, Copilot ajoute l'accès à **Claude Opus 5.5**, **GPT-6 Sol**, **GPT-6 Luna** et **Grok 4.7**, permettant de choisir le modèle le plus adapté à chaque tâche — y compris de **changer de modèle en cours de conversation**, sans redémarrer la session.

## Sandboxing local en preview publique

La nouveauté la plus structurante de cette release est le passage en **preview publique** d'un mode de sandboxing local pour les agents Copilot. Il limite l'accès des agents aux fichiers, au réseau et aux identifiants du poste de travail pendant l'exécution de tâches autonomes — une réponse directe aux inquiétudes sur les agents de code qui opèrent avec des permissions trop larges.

## Autres changements de la semaine

- Un suivi d'activité des agents via **OpenTelemetry**, pour observer et auditer leur comportement dans les pipelines d'entreprise.
- Mises à jour synchronisées de **VS Code 1.139** : support des Dev Containers pour les sessions Copilot, et une "Compact View" pour l'interface de chat.
- Intégrations rafraîchies pour **Slack, Microsoft Teams et JetBrains**.

Le sandboxing local rejoint une tendance plus large de la semaine (voir aussi Cursor un peu plus loin dans ce numéro) : les éditeurs d'outils de code IA investissent désormais autant dans la **sécurisation** des agents autonomes que dans leurs capacités brutes.
