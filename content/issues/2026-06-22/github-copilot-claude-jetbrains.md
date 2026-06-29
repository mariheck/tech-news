---
title: "GitHub Copilot intègre Claude dans JetBrains"
excerpt: "Claude Code CLI devient agent provider en preview public"
summary: "Le 22 juin, GitHub Copilot active Claude Code CLI comme agent provider dans JetBrains IDEs (IntelliJ, PyCharm, WebStorm) en public preview. Les agents org/enterprise sont disponibles depuis les IDEs. La CLI Copilot supporte la mise en file d'attente de messages pendant l'exécution."
date: 2026-06-22T00:00:00Z
reading_time: 5
sources:
  [
    { label: "GitHub changelog – JetBrains Claude", url: "https://github.blog/changelog/2026-06-22-new-features-and-claude-as-agent-provider-preview-in-jetbrains-ides/" },
    { label: "GitHub changelog – Copilot CLI JetBrains", url: "https://github.blog/changelog/2026-06-02-introducing-copilot-cli-and-agentic-capabilities-enhancements-in-jetbrains-ides/" }
  ]
category: 'dev-ia'
---

# GitHub Copilot intègre Claude dans JetBrains

Le 22 juin 2026, GitHub a publié une mise à jour majeure du plugin Copilot pour les IDEs JetBrains (IntelliJ IDEA, PyCharm, WebStorm, et al.). Le point le plus notable : **Claude, via Claude Code CLI, est désormais disponible comme agent provider en preview public** dans Copilot Chat, aux côtés des agents GPT-4o et Copilot natif.

## Claude comme agent Copilot : comment ça fonctionne

L'intégration repose sur Claude Code CLI installé localement. La configuration se fait en trois étapes :

1. Installer Claude Code CLI sur la machine de développement
2. Dans **Settings > Tools > GitHub Copilot > Chat**, renseigner le chemin vers l'exécutable Claude Code CLI
3. Sélectionner **Claude** dans le sélecteur d'agent dans le panneau Copilot Chat

Une fois configuré, l'agent Claude Code s'exécute en mode *bypass permissions* : toutes les modifications de fichiers et les appels d'outils sont automatiquement approuvés. Des permissions configurables sont annoncées pour une future release.

Cette approche est différente de celle de Cursor qui intègre directement les modèles via API : ici, c'est le binaire Claude Code local qui agit comme interpréteur — les appels restent donc soumis à l'abonnement Claude Code de l'utilisateur plutôt qu'à un abonnement GitHub.

## Agents organisation et enterprise

La mise à jour apporte aussi le support des **agents définis au niveau GitHub organization ou enterprise**. Les administrateurs GitHub peuvent publier un ensemble d'agents personnalisés qui deviennent automatiquement disponibles pour tous les membres de l'organisation dans leurs IDEs JetBrains, sans configuration individuelle.

C'est une brique importante pour les équipes qui veulent standardiser leurs agents de développement internes — par exemple, un agent connecté à leur gestionnaire de tickets, à leur documentation interne ou à leurs pipelines CI/CD.

## Copilot CLI : messages en file d'attente

La CLI Copilot reçoit une amélioration ergonomique importante : il est maintenant possible **d'envoyer des messages de suivi pendant qu'une requête est encore en cours d'exécution**. Plutôt que d'attendre la fin de la réponse avant de reformuler ou d'ajouter une précision, le bouton Send devient un menu déroulant avec l'option **Add to Queue** — le message est mis en attente et traité automatiquement dès que la réponse en cours se termine.

## Vue debug des agents et indicateur de crédits

Deux améliorations complémentaires pour le travail agentic :

- **Agent debug logs summary** : une vue synthétique des logs d'exécution des agents, pour diagnostiquer pourquoi une tâche a échoué ou pris un chemin inattendu.
- **Per-turn AI credits indicator** : l'interface affiche la consommation de crédits IA par échange, ce qui permet de surveiller l'usage sur les plans à crédits variables (Copilot Pro inclut $15/mois de crédits, Pro+ $70).

## Contexte : Copilot devient une plateforme d'agents

Cette release s'inscrit dans une tendance plus large : depuis l'annonce de la Copilot App et du SDK en juin, GitHub positionne Copilot comme une plateforme d'orchestration d'agents plutôt qu'un simple assistant de code. L'intégration de Claude en tant qu'agent provider interchangeable est la preuve la plus concrète de cette philosophie : l'IDE JetBrains devient un cockpit depuis lequel on peut piloter différents agents selon la tâche, avec le modèle le plus adapté.
