---
title: 'Copilot CLI 1.0.62 : plugins extensibles et sous-agents'
excerpt: 'GitHub Copilot CLI évolue : plugins, sous-agents configurables et diff amélioré.'
summary: 'La v1.0.62 du 13 juin apporte au CLI GitHub Copilot la possibilité pour les plugins de distribuer des extensions installables, la configuration fine des sous-agents (modèle, effort de raisonnement, tier contextuel), une vue diff enrichie et une commande /app.'
date: 2026-06-08T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'GitHub Copilot CLI – Releases',
      url: 'https://github.com/github/copilot-cli/releases'
    },
    {
      label: 'Havoptic – Changelog',
      url: 'https://www.havoptic.com/tools/github-copilot'
    },
    {
      label: 'AI Coding Agents 2026',
      url: 'https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/'
    }
  ]
category: dev-ia
---

# Copilot CLI 1.0.62 : plugins extensibles et sous-agents

Le 13 juin 2026, GitHub a publié la version **1.0.62 du GitHub Copilot CLI**. Si cette release ne modifie pas l'architecture du produit, elle consolide deux axes majeurs de l'évolution récente du CLI : l'extensibilité via les plugins et la configuration fine des sous-agents.

## Les plugins peuvent désormais distribuer des extensions

Jusqu'ici, les plugins Copilot CLI apportaient des outils et des commandes. La v1.0.62 va plus loin : les plugins peuvent désormais **embarquer et distribuer des extensions** installables par les utilisateurs directement depuis le marketplace de plugins.

Ce changement ouvre la voie à un écosystème de contributions tierces plus riche, où une équipe peut publier un plugin qui installe à son tour un ensemble d'outils ou de workflows adaptés à un contexte spécifique (conventions d'un monorepo, intégration avec un service interne, etc.).

## Sous-agents configurables par l'utilisateur

La v1.0.62 introduit des commandes de configuration fine pour les **sous-agents** orchestrés par Copilot CLI. Via les paramètres utilisateur ou le picker `/subagents` (alias `/agents`), il est maintenant possible de définir :

- **Le modèle** utilisé par chaque sous-agent (permettre à un sous-agent de raisonnement lourd de tourner sur un modèle plus puissant)
- **L'effort de raisonnement** (niveau de profondeur du raisonnement, utile pour arbitrer entre vitesse et qualité)
- **Le tier contextuel** (quantité de contexte fournie au sous-agent)

Cette granularité permet d'optimiser les coûts et les performances selon la nature des tâches déléguées à chaque sous-agent.

## Améliorations de la vue diff

La vue diff intégrée au CLI reçoit trois ajouts pratiques :

- **Content search** : recherche dans le contenu du diff avec surlignage des correspondances
- **Navigation `n` / `N`** : accéder au résultat suivant/précédent directement depuis le clavier (comme dans vim ou less)
- **Coloration des correspondances** : les termes recherchés sont mis en évidence dans le contexte du diff

## Commande `/app`

La nouvelle commande slash `/app` ouvre l'application GitHub native (sur macOS/Windows) ou bascule vers un fallback navigateur si l'app n'est pas installée. Pratique pour accéder rapidement à la PR ou à l'issue liée à la session courante.

## Améliorations d'ergonomie

- Les dialogues Ask et les fenêtres de saisie défilent désormais **avec la timeline** au lieu de couvrir la sortie de l'agent — une boîte de dialogue haute ne masque plus les logs précédents
- Les termes saisis par l'utilisateur sont affichés dans le chip de recherche pour rappeler le contexte de filtrage actif

## En perspective

Ces ajouts s'inscrivent dans la tendance de fond du Copilot CLI : devenir une plateforme d'agents orchestrables plutôt qu'un simple assistant de code. La configuration des sous-agents par modèle et par effort de raisonnement préfigure des workflows où différentes étapes d'un pipeline d'agents utilisent des modèles différents selon leur complexité — une approche de plus en plus courante dans les architectures d'automatisation IA avancées.
