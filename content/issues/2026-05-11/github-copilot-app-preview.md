---
title: 'GitHub Copilot App : le client agentic en preview'
excerpt: 'Sessions parallèles, worktrees isolés, flux GitHub natif depuis le bureau.'
summary: 'GitHub lance une app desktop native pour pilote plusieurs agents de code en parallèle, chacun dans un worktree git isolé. Démarrage depuis une issue ou une PR, suivi en temps réel, merge automatisé après validation des checks CI.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'GitHub Changelog 14 mai', url: 'https://github.blog/changelog/2026-05-14-github-copilot-app-is-now-available-in-technical-preview/' },
    { label: 'DevOps Journal review', url: 'https://devopsjournal.io/blog/2026/05/14/github-copilot-app' },
    { label: 'byteiota deep dive', url: 'https://byteiota.com/github-copilot-app-desktop-agent-technical-preview/' }
  ]
category: 'dev-ia'
---

# GitHub Copilot App : le client agentic en preview

GitHub a publié le 14 mai 2026 une preview technique de la **GitHub Copilot App**, une application desktop native (macOS, Windows, Linux) qui marque une étape dans l'évolution du coding agent : sortir de l'IDE pour devenir un environnement de travail autonome et parallèle.

## Plusieurs agents, un seul repo, sans interférence

Le principe central de l'app repose sur l'isolation : chaque session d'agent obtient son propre **git worktree**, sa propre branche et son propre état de tâche. Trois agents travaillant simultanément sur le même dépôt ne se voient pas mutuellement.

En pratique, cela permet de lancer en parallèle des tâches distinctes — corriger un bug, écrire des tests, mettre à jour de la documentation — sans les conflits habituels liés au partage de fichiers. La gestion des worktrees est entièrement automatique ; l'utilisateur ne voit que ses sessions en cours et leur statut.

## Un flux natif GitHub de bout en bout

L'app est conçue pour rester dans l'écosystème GitHub. On peut démarrer une session depuis :
- **Une issue** : l'agent lit le contexte, les labels et l'historique de discussion pour formuler un plan.
- **Une pull request** : l'agent reprend là où une review s'est arrêtée, adresse les commentaires et relance les checks.
- **Un prompt libre** : on décrit la tâche en langage naturel.

Un **inbox** agrège les issues et PRs actives à travers tous les repos connectés, avec la possibilité de prioriser et d'assigner des sessions.

## Agent Merge

La fonctionnalité **Agent Merge** automatise la dernière étape : une fois les checks CI verts et les reviews satisfaites, l'agent peut merger lui-même la branche selon les conditions définies (approbation requise, statut de protection de branche, etc.). Cela supprime la friction de retourner dans GitHub.com pour les PRs simples.

## Accès et disponibilité

La preview technique est disponible sur invitation pour :
- **Copilot Pro et Pro+** : formulaire de demande d'accès anticipé.
- **Copilot Business et Enterprise** : accès automatique une fois que l'admin active les previews dans les paramètres d'organisation.

Les plans gratuits ne sont pas inclus dans cette preview.

## Ce que ça change par rapport à Copilot dans VS Code

Dans VS Code, l'agent Copilot partage le même espace de travail et le même checkout que le développeur. La Copilot App inverse ce modèle : **le développeur supervise**, l'agent exécute dans son propre espace, et le résultat remonte via une PR. C'est moins adapté aux sessions de pair-programming en temps réel, mais beaucoup plus efficace pour les tâches de fond qu'on peut déléguer et revoir plus tard.
