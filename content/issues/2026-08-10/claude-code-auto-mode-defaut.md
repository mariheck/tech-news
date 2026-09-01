---
title: "Claude Code passe en auto-mode par défaut sur Pro et Max"
excerpt: "Anthropic simplifie les permissions pour les plans payants"
summary: "Depuis le 14 août, le mode auto (permissions larges sans confirmation répétée) est activé par défaut dans Claude Code pour les plans Pro, Max et Team. Un changement de comportement à connaître pour les équipes qui utilisent Claude Code en production."
date: 2026-08-10T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Releasebot – Claude Code Aug 14", url: "https://releasebot.io/updates/anthropic/claude-code" },
    { label: "DigitalApplied – auto-mode", url: "https://www.digitalapplied.com/blog/claude-code-self-hosted-runners-cross-session-agent-messaging" },
    { label: "Unite.AI – Claude Code self-hosted", url: "https://www.unite.ai/claude-code-sessions-can-now-run-on-infrastructure-your-team-controls/" }
  ]
category: 'dev-ia'
---

# Claude Code passe en auto-mode par défaut sur Pro et Max

Depuis le **14 août 2026**, Anthropic a basculé le **mode auto** en paramètre par défaut pour les nouvelles sessions Claude Code sur les plans **Pro, Max et Team**. Ce changement modifie le comportement de permission dans l'agent — un point important pour les équipes qui ont des workflows basés sur Claude Code.

## Qu'est-ce que le mode auto ?

Claude Code dispose de deux modes principaux de gestion des permissions :

- **Mode normal** : l'agent demande une confirmation explicite avant chaque action potentiellement impactante — écrire dans un fichier, exécuter une commande shell, appeler un MCP server. Utile pour garder un contrôle granulaire, en particulier dans des environnements de production sensibles.

- **Mode auto** : l'agent décide de façon autonome d'exécuter les actions sans demander de confirmation à chaque étape, dans le cadre des permissions accordées à la session. Les workflows sont plus fluides et rapides, mais moins supervisés par défaut.

Jusqu'au 14 août, le mode normal était le défaut pour les nouvelles sessions. Désormais, **auto est le point de départ** sur Pro, Max et Team.

## Pourquoi ce changement ?

Anthropic explique ce changement par les retours d'utilisation : la majorité des utilisateurs de plans payants activaient manuellement l'auto-mode dès l'ouverture d'une session. Le basculement de défaut aligne le comportement produit avec l'usage réel.

Ce changement suit la même semaine la mise à disposition en **beta publique des self-hosted runners** (annoncée le 6-7 août), qui permet aux organisations sur Team et Enterprise de faire tourner les sessions Claude Code sur leur propre infrastructure. Les équipes qui hébergent Claude Code peuvent configurer le mode de permission approprié à leur politique de sécurité interne.

## Impact sur les équipes existantes

Pour les sessions déjà en cours ou les utilisateurs qui avaient configuré leurs préférences, il n'y a pas de changement rétroactif. Le mode auto s'applique uniquement aux **nouvelles sessions** créées depuis le 14 août.

**Vérifier son paramétrage actuel :**
```bash
claude --settings
```
Le mode courant est visible dans la section `permission_mode`. Pour revenir au mode normal sur une nouvelle session :
```bash
claude --permission-mode normal
```

Il est également possible de définir un défaut persistant via les settings du projet (`CLAUDE.md` ou la config locale), ce qui prend le dessus sur le défaut d'Anthropic.

## Fonctionnalités parallèles de la semaine

La même semaine a aussi vu l'arrivée d'une **checkbox auto-continue** dans Claude Code desktop, qui reprend automatiquement une session mise en pause dès que la fenêtre de limite d'utilisation se réinitialise — plus besoin de surveiller manuellement la reprise d'une session bloquée sur un quota.
