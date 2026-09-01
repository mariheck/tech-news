---
title: "Agent Plugins 1.0 GA : un standard ouvert pour les extensions agents"
excerpt: "AWS, Cursor, GitHub, VS Code et Vercel publient un format commun"
summary: "Agent Plugins 1.0 est désormais disponible en GA dans VS Code, Copilot CLI, le SDK Copilot et l'app Copilot. Ce format de packaging ouvert (AWS, Cursor, GitHub, VS Code, Vercel) permet d'écrire une extension agent une seule fois et de la déployer partout."
date: 2026-08-10T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – weekly Aug 10", url: "https://github.blog/changelog/2026-08-13-github-copilot-weekly-releases-august-10/" },
    { label: "AWS Blog – roundup Aug 10", url: "https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-heroes-summit-web-search-on-amazon-bedrock-dogwood-kiro-crew-and-more-august-10-2026/" },
    { label: "explainx.ai – analyse Agent Plugins", url: "https://explainx.ai/blog/agent-plugins-openai-standard-aws-cursor-github-vscode-2026" },
    { label: "DEV Community – Kiro Crew", url: "https://dev.to/sarvar_04/introducing-kiro-crew-awss-open-source-ai-agent-orchestrator-1e63" }
  ]
category: 'dev-ia'
---

# Agent Plugins 1.0 GA : un standard ouvert pour les extensions agents

Depuis le 13 août 2026, **Agent Plugins 1.0** est en disponibilité générale dans quatre surfaces de GitHub Copilot : VS Code, Copilot CLI, le SDK Copilot et l'application Copilot. La spécification, co-développée par AWS, Cursor, GitHub, VS Code et Vercel, propose un format de packaging neutre et open source pour les extensions d'agents IA.

## Le problème qu'Agent Plugins résout

Jusqu'ici, écrire une extension pour un outil d'IA (une skill Copilot, un plugin Cursor, une action Kiro) signifiait produire du code spécifique à chaque plateforme. Un outil qui fonctionne dans VS Code ne fonctionne pas dans Cursor, et encore moins dans Kiro. La fragmentation est identique à celle des extensions navigateur avant la standardisation WebExtensions.

Agent Plugins propose un format de packaging commun — un artefact unique — qu'un auteur crée une fois et que n'importe quel client supportant la spécification peut consommer. Le package inclut les skills (les capacités exposées) et les configurations MCP associées.

## Ce que contient le format 1.0

La v1.0 définit :
- Un **schéma JSON** normalisé pour les métadonnées, les permissions et les points d'entrée du plugin.
- Un **guide d'implémentation pour les auteurs** : comment packager une skill, déclarer des dépendances MCP, versionner.
- Un **guide pour les clients** : comment découvrir, installer, mettre à jour et désactiver des plugins.
- Une **matrice de compatibilité publique** avec les clients actuellement supportés (VS Code, Copilot CLI, SDK Copilot, Kiro, Cursor — en déploiement progressif).

La gouvernance est publique, avec un processus de proposition ouvert pour les évolutions futures.

## Disponibilité et gestion dans Copilot

Dans GitHub Copilot, les plugins installés sont désormais gérables depuis l'interface *Customize* ou *Settings* : version courante visible, mise à jour individuelle ou groupée, désactivation. La surface la plus aboutie à ce jour est VS Code et le Copilot CLI.

Pour les développeurs qui construisent des outils d'automatisation sur des agents, ce standard réduit la friction d'adoption. Écrire un Agent Plugin une seule fois et le rendre disponible à la fois pour les utilisateurs Copilot, Kiro et Cursor potentiellement, c'est un changement de registre pour la distribution d'outils de dev.

## Kiro Crew : l'autre annonce de la semaine AWS

La même semaine AWS roundup (10 août) a introduit **Kiro Crew**, un workspace persistant et multi-agents directement dans le Kiro IDE. Kiro Crew permet de lancer plusieurs efforts en parallèle (sur plusieurs dépôts, plusieurs outils) et de déléguer à des sous-agents qui rapportent leurs avancées. Le projet est open source côté orchestrateur.

Ces deux annonces — Agent Plugins et Kiro Crew — s'inscrivent dans une même logique : des couches d'abstraction qui rendent les agents composables et portables au-delà d'un seul IDE.
