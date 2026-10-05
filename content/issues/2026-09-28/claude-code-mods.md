---
title: "Claude Code : les Mods pour personnaliser l'agent"
excerpt: "Du comportement et de l'UI en TypeScript"
summary: "Claude Code lance les Mods, un système en TypeScript pour personnaliser le comportement et l'interface de l'agent, dans une mise à jour qui touche aussi plugins, MCP et accessibilité."
date: 2026-09-28T00:00:00Z
reading_time: 2
sources:
  [
    { label: "Claude Code Changelog", url: "https://code.claude.com/docs/en/changelog" }
  ]
category: 'dev-ia'
---

# Claude Code : les Mods pour personnaliser l'agent

Le 30 septembre 2026, Anthropic a publié une mise à jour de **Claude Code** introduisant les **Mods**, un système permettant d'écrire en **TypeScript** des extensions de comportement et d'interface pour la CLI et l'application de bureau.

## Personnaliser au-delà des plugins et de MCP

Les Mods viennent s'ajouter aux mécanismes déjà existants de plugins et de serveurs MCP, mais ciblent spécifiquement le remplacement ou l'enrichissement de comportements et d'éléments d'interface de l'agent lui-même, plutôt que l'ajout d'outils externes.

## Une mise à jour plus large

La même livraison corrige aussi plusieurs points : un compteur de confirmation de permissions ("2 sur 5"), la prise en charge de la souris pour les listes qui dépassent l'écran, un bug de double ouverture du navigateur lors du rafraîchissement des identifiants, et une perte de tours après l'échec d'un lot d'appels d'outils en parallèle avec `--resume`/`--continue`.

## Pourquoi ça compte

Les Mods ouvrent la personnalisation de Claude Code à un niveau plus profond que les plugins classiques : modifier le comportement et l'UI de l'agent directement en TypeScript, plutôt que de se limiter à lui fournir de nouveaux outils.
