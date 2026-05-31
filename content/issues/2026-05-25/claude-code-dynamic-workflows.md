---
title: "Claude Code orchestre jusqu'à 1 000 agents en parallèle"
excerpt: "Les Dynamic Workflows transforment Claude en chef d'orchestre multi-agents"
summary: "Claude Code ouvre Dynamic Workflows en research preview : Claude génère un script d'orchestration JS, une runtime déploie jusqu'à 1 000 sous-agents en parallèle. Déjà utilisé pour réécrire 750 000 lignes de code en 11 jours."
date: 2026-05-25T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'MarkTechPost',
      url: 'https://www.marktechpost.com/2026/05/28/anthropic-ships-claude-opus-4-8-alongside-dynamic-workflows-and-cheaper-fast-mode-with-workflows-capped-at-1000-subagents/'
    },
    {
      label: 'Claude Code changelog',
      url: 'https://code.claude.com/docs/en/changelog'
    },
    {
      label: 'Pasquale Pillitteri',
      url: 'https://pasqualepillitteri.it/en/news/3663/claude-code-dynamic-workflows-anthropic-research-preview'
    },
    {
      label: 'Medium – Illumination',
      url: 'https://medium.com/illumination/claude-codes-dynamic-workflows-the-ai-agent-architecture-that-just-rewrote-750-000-lines-of-code-d605a1d9b6d4'
    },
    {
      label: 'Reworked',
      url: 'https://www.reworked.co/digital-workplace/anthropic-announces-dynamic-workflows-in-claude-code/'
    }
  ]
category: 'dev-ia'
---

# Claude Code orchestre jusqu'à 1 000 agents en parallèle

Le 28 mai 2026, Anthropic a ouvert en research preview une fonctionnalité qui change structurellement ce qu'on peut confier à un agent IA dans un projet logiciel : les **Dynamic Workflows**. Le principe — un orchestrateur sépare des agents exécutants — n'est pas nouveau en soi. Ce qui l'est, c'est la façon dont Claude Code l'implémente, et l'ampleur des cas d'usage qu'il ouvre dès maintenant.

## Comment ça fonctionne

Lorsque vous utilisez le mot **"workflow"** dans un prompt (ce déclencheur est configurable dans `/config`), Claude ne traite plus la tâche de façon linéaire. Il rédige d'abord un **script JavaScript d'orchestration** qui définit la décomposition du problème, les dépendances entre tâches et le nombre de sous-agents à déployer. Une runtime séparée — distincte de Claude lui-même — exécute ensuite ce script en arrière-plan.

Les sous-agents sont plafonnés à **1 000 par workflow**. Chaque sous-agent peut appeler des outils, lire et écrire des fichiers, exécuter du code. Les résultats sont synthétisés après comparaison interne et vérification croisée entre agents. La progression est sauvegardée, de sorte qu'une interruption ne repart pas de zéro.

## Disponibilité

Les Dynamic Workflows sont disponibles dans Claude Code CLI, Desktop, VS Code, sur l'API et les plateformes cloud majeures :

- **Max et Team** : activés par défaut
- **Pro** : activation manuelle requise
- **Enterprise** : activation par l'administrateur

## L'exemple qui parle

Jarred Sumner — créateur de Bun, le runtime JavaScript alternatif à Node.js — a utilisé les Dynamic Workflows en avant-première pour **réécrire environ 750 000 lignes de code** sur son propre projet en **11 jours**, en conservant **99,8 % de la suite de tests existante au vert**. Ce chiffre illustre concrètement ce que signifie « orchestration à grande échelle » : non pas un LLM qui génère du code en rafale, mais un système qui décompose, parallélise, vérifie et réconcilie.

## Ce que ça change dans la pratique

Les Dynamic Workflows s'adressent à des travaux qui étaient jusqu'ici difficilement délégables à un agent unique :

- **Migrations de codebase** : changer une dépendance majeure dans 200 fichiers, tester chaque module de façon isolée, consolider les résultats.
- **Refactoring à grande échelle** : appliquer des patterns cohérents sur une surface de code étendue, sans casser les contrats d'interface.
- **Génération de tests** : créer des tests unitaires pour tous les modules d'un service en parallèle, avec vérification de couverture par module.
- **Audits de sécurité** : scanner simultanément de multiples fichiers ou packages selon différentes règles.

## Ce qu'il faut surveiller

Comme pour toute technologie agentic puissante, les risques sont proportionnels à l'autonomie accordée. Anthropic recommande de configurer avec soin le périmètre des outils accessibles aux sous-agents — en particulier sur les actions irréversibles (écriture en base, push vers des branches de production). Le plafond de 1 000 agents est aussi une limite pratique : les tâches très fragmentées peuvent générer des coûts API significatifs. Un monitoring de la consommation de tokens et des résultats intermédiaires reste indispensable.

La version 2.1.157 de Claude Code (29 mai) a également introduit la possibilité de charger automatiquement les plugins depuis `.claude/skills/` et une commande `claude plugin init <name>` pour scaffoldir un nouveau plugin — une évolution complémentaire qui permet de personnaliser les outils disponibles pour les sous-agents.
