---
title: "Antigravity 2.0 : Google lance sa plateforme agentique"
excerpt: "CLI Go, sous-agents parallèles, sandbox cloud, Chrome DevTools IA : Antigravity devient une plateforme 5 surfaces."
summary: "Antigravity passe de simple IDE à une plateforme 5 surfaces — desktop, CLI, SDK, Managed Agents et Enterprise. La vraie nouveauté : les sous-agents parallèles et le sandboxing cloud qui isolent l'environnement local. Chrome DevTools ouvre ses logs aux agents de 20+ outils."
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    { label: "MarkTechPost - Antigravity 2.0", url: "https://www.marktechpost.com/2026/05/19/google-launches-antigravity-2-0-at-i-o-2026-a-standalone-agent-first-platform-with-cli-sdk-managed-execution-and-enterprise-support/" },
    { label: "TechCrunch", url: "https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/" },
    { label: "Google Developers Blog", url: "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/" },
    { label: "Google I/O - Chrome DevTools", url: "https://io.google/2026/explore/technical-session-2" }
  ]
category: "dev-ia"
---

# Antigravity 2.0 : Google lance sa plateforme agentique

Avec Antigravity 2.0, présenté le 19 mai à Google I/O 2026, Google ne met pas à jour un outil de coding assisté : il lance une plateforme à part entière pour orchestrer des agents de développement. Le Gemini CLI est officiellement retraité le même jour, et toute la roadmap s'organise autour d'un nouveau concept — l'agent-first development environment. L'outil est disponible en GA dès l'annonce.

## Une plateforme 5 surfaces

Antigravity 2.0 n'est plus un IDE. C'est un ensemble de cinq surfaces distinctes :

1. **Desktop App** — application standalone révisée, avec vue split et fil des sessions d'agents en cours
2. **Antigravity CLI (`agy`)** — réécrit en Go, plus rapide que son prédécesseur, conserve les Agent Skills, Hooks, Subagents et Extensions (devenus plugins Antigravity)
3. **Antigravity SDK** — pour intégrer les capacités agentiques dans ses propres outils
4. **Managed Agents API** — exécution cloud d'agents dans des sandboxes Linux isolées
5. **Gemini Enterprise Agent Platform** — version enterprise avec contrôles d'audit et de permissions

## La vraie nouveauté : les sous-agents parallèles

Ce qui distingue Antigravity des autres outils de la catégorie, c'est la gestion native des sous-agents parallèles. L'agent principal peut spawner des agents secondaires — chacun avec son propre contexte et ses propres artefacts — pour traiter plusieurs sous-tâches simultanément. Google précise que cette capacité n'est pas encore disponible dans Claude Code ni dans Cursor.

## Sandboxing : macOS local ou cloud Linux

Le terminal sandboxing local est limité à macOS via Seatbelt ; il n'y a pas d'équivalent local sur Linux ou Windows. En revanche, les Managed Agents permettent de lancer un sandbox Linux isolé dans le cloud, de laisser l'agent y exécuter du code et télécharger des fichiers librement, puis de le discarter après utilisation — sans aucune pollution de la machine locale.

## Chrome DevTools for agents

L'une des annonces les plus concrètes de I/O pour les développeurs : Chrome DevTools for agents est disponible dans le canal stable, compatible avec Antigravity et plus de 20 autres outils de coding. Les agents ont désormais accès aux logs console, au trafic réseau et aux arbres d'accessibilité pour vérifier et débugger le code sans intervention manuelle.

## Ce que ça change pour les équipes

Pour les équipes déjà sur Gemini CLI, la migration vers `agy` est la priorité immédiate — le Gemini CLI est en fin de vie. Pour les équipes qui comparent les outils de coding agentique, la combinaison sous-agents parallèles + sandbox cloud + Chrome DevTools intégrés positionne Antigravity 2.0 différemment de Claude Code et Cursor sur les workflows multi-tâches complexes.
