---
title: "Claude Code v2.1.139 : vue centralisée des sessions et commande /goal en preview"
excerpt: "La release du 12 mai apporte l'agent view (dashboard multi-sessions) et /goal, qui maintient Claude en exécution jusqu'à l'atteinte d'un objectif défini."
summary: "Claude Code v2.1.139 apporte en Research Preview l'agent view — un tableau de bord de toutes les sessions (actives, bloquées, terminées) — et /goal, une commande qui fixe une condition de fin et boucle jusqu'à ce qu'elle soit satisfaite."
date: 2026-05-11T00:00:00Z
readingTime: 4
sources:
  - label: "Releasebot – Claude Code"
    url: "https://releasebot.io/updates/anthropic/claude-code"
  - label: "Claude Code Changelog"
    url: "https://code.claude.com/docs/en/changelog"
category: dev ia
---

Le 12 mai, Anthropic a livré **Claude Code v2.1.139** avec deux nouvelles fonctionnalités orientées workflows agentiques multi-sessions.

## Agent View (Research Preview)

L'**agent view** est une liste unifiée de toutes les sessions Claude Code — qu'elles soient en cours d'exécution, bloquées (en attente d'une permission utilisateur) ou terminées. Jusqu'ici, suivre plusieurs sessions en parallèle obligeait à alterner entre des terminaux distincts sans visibilité globale.

Cette vue centralise l'état de chaque session en temps réel, et permet notamment de :
- Repérer rapidement une session bloquée qui attend une confirmation
- Suivre la progression de plusieurs tâches lancées en arrière-plan (`--bg`)
- Accéder à un historique récent des sessions terminées

La fonctionnalité est actuellement en **Research Preview**, ce qui signifie qu'elle peut évoluer ou être retirée avant sa stabilisation.

## Commande /goal

La commande `/goal` permet de **définir une condition de complétion** en langage naturel. Une fois le goal posé, Claude travaille en boucles autonomes jusqu'à ce que la condition soit satisfaite, sans attendre une instruction à chaque étape.

Exemple d'usage : `/goal tous les tests passent et le lint est propre`. Claude exécutera des cycles d'implémentation/test/lint en autonomie et s'arrêtera uniquement quand les deux conditions sont réunies.

C'est une avancée vers le modèle _fire and forget_ sur des tâches bien définies, tout en maintenant l'utilisateur informé via l'agent view.

## Corrections notables (40+ bug fixes)

La release 2.1.139 embarque également :
- Correction d'un **auth deadlock** pouvant bloquer les sessions longues
- Correction de la limite de 16 MB sur les streams SSE MCP
- **v2.1.140 (13 mai)** : résolution d'un bug sur `/goal` avec `disableAllHooks`, régression sur le hot-reload des settings symlinkés, et drop de connexion en mode `claude --bg`
