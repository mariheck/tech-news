---
title: "Cursor 3.3 : PR Review intégré et contrôles enterprise"
excerpt: "Cursor embarque la revue de PR dans l'IDE et renforce la gestion enterprise."
summary: "En une semaine, Cursor a lancé des contrôles enterprise (allow/blocklists de modèles, alertes de dépenses, analytics) et sorti la version 3.3 avec un onglet PR Review complet et l'exécution parallèle de tâches en sous-agents."
date: 2026-05-04T00:00:00Z
reading_time: 3
sources:
  - { label: "Cursor Changelog 04-05-26", url: "https://cursor.com/changelog/05-04-26" }
  - { label: "Cursor Changelog 07-05-26", url: "https://cursor.com/changelog/05-07-26" }
  - { label: "Opsera + Cursor partnership", url: "https://www.prnewswire.com/news-releases/opsera-and-cursor-partner-to-embed-autonomous-ai-agents-directly-into-ai-sdlc-workflows-for-next-gen-ai-driven-development-302762277.html" }
category: dev-ia
---

# Cursor 3.3 : PR Review intégré et contrôles enterprise

Cursor a publié deux mises à jour majeures en l'espace d'une semaine : des contrôles d'administration enterprise le 4 mai, puis la version 3.3 le 7 mai avec une fonctionnalité de revue de PR complète et l'exécution parallèle de sous-agents.

## Contrôles enterprise (4 mai)

### Gestion fine des modèles

Les administrateurs peuvent désormais configurer des **listes d'autorisation et de blocage de modèles** au niveau du fournisseur et du modèle individuel, avec des critères additionnels sur la vitesse et la taille de fenêtre de contexte. Les nouvelles versions de modèles ou de fournisseurs peuvent être bloquées par défaut. Une migration des blocklists existantes est requise avant le 1er juin.

### Alertes de dépenses

Cursor introduit des **seuils de dépense progressifs** avec alertes automatiques à 50 %, 80 % et 100 % de l'enveloppe budgétaire définie — plus nuancés qu'un simple plafond dur qui couperait l'accès brutalement.

### Analytics par surface

Le tableau de bord d'utilisation est désormais filtrable par utilisateur et par surface produit : clients Cursor, Cloud Agents, automations, Bugbot et Security Review. Une visibilité plus fine sur la consommation réelle de l'IA dans le workflow de développement.

## Cursor 3.3 (7 mai)

### PR Review : la revue de code sans quitter l'IDE

L'ajout le plus notable de Cursor 3.3 est un **onglet PR Review complet** directement dans l'éditeur. Il regroupe :

- Les threads de revue inline, navigables directement dans le contexte du code
- Les commentaires de haut niveau sur la PR
- Un onglet **Commits** listant l'historique de la PR
- Un onglet **Changes** avec arborescence de fichiers modifiés

L'ensemble du cycle de vie d'une pull request — création, revue, résolution de commentaires, merge — est désormais accessible sans naviguer vers GitHub ou GitLab.

### Build in Parallel

La commande « Build in Parallel » construit un **graphe de dépendances** entre les étapes d'une tâche et expédie les étapes indépendantes simultanément à des sous-agents asynchrones. L'objectif : réduire le temps total sur les tâches composites (tests, lint, build, documentation) en exploitant la parallélisation là où elle est possible.

### Quick-action pills et `/multitask`

Des **pills d'actions rapides** permettent d'épingler les compétences fréquemment utilisées pour un accès direct. La nouvelle commande **`/multitask`** dans l'éditeur déclenche la parallélisation de sous-agents pour une tâche donnée.

## Intégration Opsera (5 mai)

Le 5 mai, Opsera a annoncé un partenariat avec Cursor pour intégrer ses agents DevSecOps directement dans l'IDE. Trois agents sont disponibles via cette intégration :

- **Architecture Analyzer** — valide le code généré par l'IA par rapport aux patterns d'architecture définis
- **Security and SQL Scanner** — analyse statique des risques de sécurité et d'exposition de données au moment de l'écriture
- **Compliance Auditor** — automatise la collecte de preuves pour SOC 2, HIPAA, PCI-DSS et GDPR
