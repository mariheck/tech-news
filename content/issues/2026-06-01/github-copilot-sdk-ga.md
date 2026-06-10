---
title: "Le SDK GitHub Copilot passe en disponibilité générale"
excerpt: "Intégrez le moteur d'agents Copilot dans vos propres apps."
summary: "Le GitHub Copilot SDK est en disponibilité générale depuis le 2 juin. Il expose le même moteur d'agents que l'app Copilot (planification, édition de fichiers, streaming, sessions multi-tours, MCP) en Node.js, Python, Go, .NET, Rust et Java."
date: 2026-06-01T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – Copilot SDK GA", url: "https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/" }
  ]
category: 'dev-ia'
---

# Le SDK GitHub Copilot passe en disponibilité générale

Le 2 juin 2026, lors de Microsoft Build, GitHub annonce que le **GitHub Copilot SDK** est désormais en disponibilité générale. Après plusieurs mois de preview, le SDK permet à tout développeur d'intégrer le moteur d'agents de Copilot dans ses propres applications — en production, sans restrictions de preview.

## Ce que le SDK expose

Le Copilot SDK n'est pas une simple API de complétion de texte. Il expose le **moteur d'agents complet** qui fait tourner l'application Copilot, avec toutes ses capacités :

- **Planification de tâches** : l'agent décompose une instruction complexe en étapes, qu'il exécute séquentiellement ou en parallèle
- **Invocation d'outils** : lecture/écriture de fichiers, exécution de commandes shell, navigation web
- **Édition de fichiers** : diff appliqué directement, pas seulement une sortie texte
- **Streaming** : les tokens arrivent au fur et à mesure, sans attendre la réponse complète
- **Sessions multi-tours** : l'agent maintient un contexte de conversation entre les appels

## Support des langages

Le SDK est disponible pour six langages à la GA :

| Langage | Package |
|---|---|
| Node.js / TypeScript | `@github/copilot-sdk` |
| Python | `github-copilot-sdk` |
| Go | `github.com/github/copilot-sdk-go` |
| .NET / C# | `GitHub.Copilot.Sdk` |
| Rust | `copilot-sdk` |
| Java | `com.github.copilot:sdk` |

## Support MCP et outils personnalisés

Le SDK supporte nativement les **serveurs MCP** (Model Context Protocol). Un développeur peut connecter le SDK à n'importe quel serveur MCP — base de données, système de fichiers distant, API interne — et l'agent Copilot pourra y accéder comme il accède aux outils intégrés.

Les **outils personnalisés** peuvent également être définis au niveau du SDK : il suffit de déclarer la signature d'une fonction (nom, paramètres, description) et l'agent décidera quand l'invoquer en fonction de la tâche.

## Cas d'usage types

**Intégration dans des pipelines CI/CD** : déclencher une session d'agent à chaque PR pour effectuer une code review automatique, vérifier la couverture de tests ou générer un changelog.

**Assistants spécialisés** : construire un assistant IA propre à un contexte métier (design system, codebase interne, documentation) sans partir de zéro — en tirant parti du moteur d'agents Copilot avec un contexte et des outils personnalisés.

**Automatisation de tâches répétitives** : migration de composants vers une nouvelle version d'un framework, mise à jour de dépendances, refactoring selon des règles de lint.

## Prérequis

Le SDK nécessite une licence **GitHub Copilot Business** ou **Enterprise** — il n'est pas disponible pour les plans Pro et Pro+. L'accès au SDK est inclus dans la licence existante, sans surcoût.

La documentation complète et les exemples sont disponibles sur la page GitHub de l'organisation `github/copilot-sdk`.
