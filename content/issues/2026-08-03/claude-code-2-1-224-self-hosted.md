---
title: "Claude Code 2.1.224 : self-hosted et agents multi-machines"
excerpt: "Claude Code peut désormais tourner sur votre propre infrastructure"
summary: "La version 2.1.224 de Claude Code introduit les self-hosted environments (Team et Enterprise), le messaging cross-session entre agents sur différentes machines, et supprime le plafond de 200 sous-agents par session."
date: 2026-08-03T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Clauding.de", url: "https://clauding.de/en/posts/claude-code-2-1-224-self-hosted-runner" },
    { label: "Unite.AI", url: "https://www.unite.ai/claude-code-sessions-can-now-run-on-infrastructure-your-team-controls/" },
    { label: "GitHub Release", url: "https://github.com/anthropics/claude-code/releases/tag/v2.1.224" },
    { label: "DevelopersIO", url: "https://dev.classmethod.jp/en/articles/20260807-cc-updates-v2-1-224/" },
    { label: "Claude Hub", url: "https://www.claudehub.fr/en/blog/claude-code-2-1-224-cross-session-messaging-sandbox-fix/" }
  ]
category: 'dev-ia'
---

# Claude Code 2.1.224 : self-hosted et agents multi-machines

La version 2.1.224 de Claude Code, publiée le 7 août, est l'une des releases les plus significatives de l'été. Elle apporte deux fonctionnalités majeures pour les équipes qui utilisent Claude Code en production : la possibilité d'exécuter les sessions sur leur propre infrastructure, et la communication entre agents sur des machines distinctes.

## Self-hosted environments : vos sessions, votre infra

La commande `claude self-hosted-runner` transforme une machine ou un container en hôte d'exécution pour les sessions Claude Code web, mobile et desktop.

```bash
claude self-hosted-runner start --plan team
```

Concrètement, une session Claude Code ouverte depuis le web ou l'app mobile peut désormais s'exécuter sur un serveur que vous maîtrisez, avec :

- Accès au réseau interne (repos privés, APIs internes, bases de données)
- Respect de vos politiques de compliance (les fichiers, secrets et artéfacts de build ne quittent pas votre infra)
- Outillage personnalisé disponible dans l'environnement d'exécution
- Contrôle sur les ressources CPU/RAM allouées aux sessions

**Disponibilité** : plans Team et Enterprise uniquement.

### Pourquoi c'est important

Jusqu'ici, les équipes qui voulaient que Claude Code accède à des ressources internes (un cluster Kubernetes interne, un registre npm privé, une base de données de développement) devaient passer par des tunnels ou des workarounds. L'auto-hébergement résout ce problème proprement.

## Cross-session messaging : les agents se parlent

La deuxième nouveauté majeure est le **messaging cross-session** : les sessions Claude Code peuvent désormais s'envoyer des messages entre elles, y compris sur des machines différentes.

Deux nouvelles APIs sont disponibles dans les agents :

- `ListAgents` : découvrir les sessions actives sur le réseau (y compris les self-hosted runners)
- `SendMessage` : envoyer un message à une session spécifique

```bash
# Dans une session A, envoyer un message à la session B
claude agents list
# → session-b (frontend-server, active)

claude send session-b "Tests de la PR #42 terminés, tu peux merger"
```

Ce mécanisme ouvre la porte à des workflows multi-agents coordonnés où un agent orchestrateur délègue à des sous-agents spécialisés sur des machines dédiées (une pour les tests, une pour le build, une pour le déploiement).

## Suppression du plafond de 200 sous-agents

Dans les versions précédentes, une session Claude Code était limitée à 200 sous-agents par session. Ce plafond bloquait les workflows d'automatisation intensive (migrations de code à grande échelle, audits de sécurité sur de grands repos). La 2.1.224 retire ce plafond.

## Archive plugin source

Il est maintenant possible d'installer des plugins Claude Code depuis une archive ZIP hébergée en HTTPS, sans passer par git ou npm :

```bash
claude plugin install https://example.com/mon-plugin.zip --sha256 abc123...
```

Le paramètre `--sha256` (optionnel mais recommandé) vérifie l'intégrité de l'archive avant installation. C'est utile pour distribuer des plugins internes dans un environnement d'entreprise sans exposer un registre npm.

## Corrections de sécurité

La release corrige un bypass de sandbox : les règles `denyRead` ou `denyWrite` avec un chemin terminant par un slash (comme `denyRead: "~/.aws/"`) pouvaient être contournées silencieusement sur Linux et macOS. Le bug est corrigé.

Au total, la 2.1.224 embarque 31 changements : 5 nouvelles fonctionnalités, 5 éléments liés à la sécurité, et 13 corrections de bugs.
