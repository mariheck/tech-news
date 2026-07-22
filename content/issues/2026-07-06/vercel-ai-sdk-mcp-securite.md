---
title: "L'AI SDK de Vercel détecte les MCP qui changent"
excerpt: "fingerprintTools et detectToolDrift contre le rug-pull"
summary: "Vercel AI SDK 7.0.19 ajoute fingerprintTools et detectToolDrift, deux utilitaires qui empreignent les outils MCP approuvés puis détectent leur dérive silencieuse — schémas élargis ou descriptions modifiées après coup."
date: 2026-07-06T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Digital Applied", url: "https://www.digitalapplied.com/blog/vercel-ai-sdk-mcp-tool-drift-fingerprint-security-2026" },
    { label: "Vercel changelog", url: "https://vercel.com/changelog/ai-sdk-7" }
  ]
category: 'frontend'
---

# L'AI SDK de Vercel détecte les MCP qui changent

Vercel a publié le 9 juillet 2026 la version 7.0.19 de son AI SDK, qui introduit deux nouveaux utilitaires de sécurité : `fingerprintTools` et `detectToolDrift`. Ils s'attaquent à un risque spécifique aux serveurs MCP (Model Context Protocol) : le "rug-pull", où un outil MCP approuvé par un développeur voit ses descriptions, ses schémas ou son comportement modifiés après coup, sans que l'application cliente ne s'en aperçoive.

## Empreinter puis surveiller la dérive

`fingerprintTools` calcule une empreinte des descriptions, schémas et titres des outils exposés par un serveur MCP au moment où ce serveur est approuvé par le développeur. `detectToolDrift` compare ensuite, à chaque appel ultérieur, l'état courant de ces outils à cette empreinte de référence, pour repérer une description injectée ou un schéma discrètement élargi avant que cette modification n'atteigne le modèle et n'influence son comportement.

## Une détection, pas un blocage automatique

Point important : ces utilitaires détectent la dérive mais ne bloquent rien automatiquement — c'est au code applicatif de décider quoi faire d'une dérive détectée, qu'il s'agisse de journaliser l'événement, d'alerter l'utilisateur ou de désactiver l'outil concerné. Ce choix de conception laisse la responsabilité de la politique de sécurité au développeur plutôt que d'imposer un comportement par défaut qui pourrait casser des intégrations légitimes.

Pour toute équipe frontend qui construit des agents connectés à des serveurs MCP tiers — un pattern de plus en plus courant depuis la standardisation du protocole — cette fonctionnalité comble une lacune de sécurité réelle : jusqu'ici, rien dans l'AI SDK ne permettait de vérifier qu'un outil MCP approuvé restait celui qui avait été audité initialement.
