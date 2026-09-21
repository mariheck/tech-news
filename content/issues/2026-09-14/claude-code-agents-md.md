---
title: "Claude Code lit désormais AGENTS.md nativement"
excerpt: "Claude Code s'aligne sur la convention cross-agents"
summary: "Claude Code 2.1.277 lit automatiquement un fichier AGENTS.md en l'absence de CLAUDE.md, rejoignant la convention déjà adoptée par Codex, Cursor et Copilot. Le fallback est réglable et pas encore disponible sur Bedrock, Vertex AI et Foundry."
date: 2026-09-14T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Claude Code Changelog", url: "https://code.claude.com/docs/en/changelog" },
    { label: "Crypto Briefing", url: "https://cryptobriefing.com/anthropic-claude-code-agents-md-support/" },
    { label: "Runtime Wire", url: "https://runtimewire.com/article/claude-code-adds-agents-md-support" },
    { label: "X — Addy Osmani", url: "https://x.com/addyosmani/status/2101010420282855566" }
  ]
category: 'dev-ia'
---

# Claude Code lit désormais AGENTS.md nativement

Anthropic a publié le 18 septembre 2026 la version 2.1.277 de Claude Code, qui ajoute la prise en charge native du fichier `AGENTS.md` comme source d'instructions de projet.

## Un fallback pour la convention cross-agents

Concrètement, quand un projet ne contient pas de fichier `CLAUDE.md`, Claude Code va désormais chercher et lire automatiquement un fichier `AGENTS.md` à la place. Cette convention, un fichier markdown à la racine du projet décrivant les règles et le contexte pour un agent de code, était déjà adoptée par plusieurs concurrents — OpenAI Codex, Cursor et GitHub Copilot notamment — mais restait jusqu'ici absente de Claude Code en tant que fallback natif.

Le comportement est réglable via le paramètre "Project instructions" accessible dans `/config`, ce qui permet aux équipes de choisir explicitement quelle convention de fichier privilégier plutôt que de subir un ordre de priorité imposé.

Anthropic précise que ce fallback n'est pas disponible au lancement sur les déploiements via Amazon Bedrock, Google Vertex AI et Microsoft Foundry — seule l'offre directe de Claude Code en bénéficie pour l'instant.

## Pourquoi ça compte

À mesure que les équipes de développement utilisent plusieurs agents de code en parallèle — un sur un poste local, un autre en CI, un troisième pour la revue de code — maintenir un fichier d'instructions différent pour chacun devient vite ingérable. La convergence des principaux agents du marché vers une convention commune de fichier à la racine du dépôt réduit cette duplication, même si chaque éditeur continue de proposer son propre format supplémentaire en complément.
