---
title: 'Claude Code : Opus 5 par défaut et subagents en profondeur 3'
excerpt: "Claude Code intègre Opus 5 et permet aux subagents d'imbriquer leurs propres agents."
summary: "Claude Code intègre Claude Opus 5 le 24 juillet avec fast mode à $10/$50/MTok. Les subagents peuvent désormais spawner leurs propres subagents jusqu'à 3 niveaux de profondeur. Nouveaux hooks (DirectoryAdded), sandbox réseau strict et améliorations du /model picker."
date: 2026-07-20T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'Claude Code – changelog officiel',
      url: 'https://code.claude.com/docs/en/changelog'
    },
    {
      label: 'Anthropic Release Notes juillet',
      url: 'https://releasebot.io/updates/anthropic/claude-code'
    },
    {
      label: 'BitsMinds – Opus 5 pour Claude Code',
      url: 'https://www.bitsminds.com/news/claude-opus-5-launch-1m-context-xhigh-2026'
    }
  ]
category: 'dev-ia'
---

# Claude Code : Opus 5 par défaut et subagents en profondeur 3

Le 24 juillet 2026 — jour de lancement de Claude Opus 5 — Anthropic a déployé une mise à jour substantielle de **Claude Code** qui va bien au-delà du simple swap de modèle. Les améliorations couvrent l'orchestration d'agents, la sécurité réseau des sandboxes, et l'expérience de sélection de modèle.

## Claude Opus 5 comme modèle Opus par défaut

Opus 5 (`claude-opus-5`) remplace Opus 4.7 et Opus 4.8 comme modèle Opus par défaut dans Claude Code. Opus 4.7 est **retiré du fast mode** �� `/fast` s'applique désormais à Opus 5 et Opus 4.8 uniquement.

Les tarifs en fast mode :

| Modèle | Standard | Fast mode |
| --- | --- | --- |
| Claude Opus 5 | $10 / $50 MTok | 2× (estimé) |
| Claude Opus 4.8 | $10 / $50 MTok | 2× |

La fenêtre de contexte de 1M tokens d'Opus 5 change les usages dans Claude Code : des bases de code entières peuvent être chargées dans le contexte sans découpage, et les pipelines multi-fichiers s'exécutent sans perte de cohérence entre les passes.

## Subagents imbriqués : profondeur 3

La modification architecturale la plus impactante est l'**élargissement de la profondeur de subagents de 1 à 3**. Précédemment, un subagent ne pouvait pas spawner d'autres agents. Désormais :

```
Agent principal (depth 0)
  └── Subagent A (depth 1)
        └── Subagent B (depth 2)
              └── Subagent C (depth 3) ← nouveau
```

Cette capacité ouvre la voie à des architectures d'orchestration plus élaborées : un agent de recherche peut déléguer des sous-tâches à des agents spécialisés qui eux-mêmes appellent des outils via des micro-agents. La limite à 3 niveaux évite les boucles infinies tout en permettant des topologies multi-niveaux réelles.

Le **stream-json inclut désormais le forwarding de subagents imbriqués**, ce qui permet aux outils d'observabilité de tracer l'arbre complet d'exécution.

## `DirectoryAdded` hook

Un nouveau hook fait son entrée : **`DirectoryAdded`**, qui se déclenche lorsqu'une session Claude Code enregistre un nouveau répertoire de travail via `/add-dir` en cours de session.

```json
// settings.json
{
  "hooks": {
    "DirectoryAdded": [
      {
        "matcher": ".*",
        "hooks": [{ "type": "command", "command": "echo 'Nouveau dossier : $CLAUDE_DIRECTORY'" }]
      }
    ]
  }
}
```

Ce hook est particulièrement utile pour déclencher des vérifications automatiques (lint, test, analyse de dépendances) lorsqu'un agent étend son périmètre d'action à un nouveau sous-projet dans un monorepo.

## `sandbox.network.strictAllowlist`

La gestion du réseau en mode sandbox devient plus contrôlable. Le nouveau paramètre **`sandbox.network.strictAllowlist`** permet de refuser les connexions vers des hôtes non listés sans afficher de prompt à l'utilisateur :

```json
// settings.json
{
  "sandbox": {
    "network": {
      "allowlist": ["api.anthropic.com", "github.com"],
      "strictAllowlist": true
    }
  }
}
```

Sans `strictAllowlist`, les connexions non listées déclenchent un prompt d'autorisation. Avec `true`, elles sont silencieusement bloquées. Utile dans les environnements CI ou les pipelines automatis��s où les interruptions ne sont pas souhaitables.

## /model picker : mise en avant du modèle le plus récent

Le picker `/model` dans Claude Code met désormais en valeur **uniquement le nom du modèle le plus récent**, en réduisant le bruit visuel des anciens modèles. Un signal simple pour que les utilisateurs restent sur les dernières versions sans avoir à comparer des identifiants cryptiques.

## Migration depuis Opus 4.8

La migration est transparente si vous utilisez la configuration par défaut. Pour les configurations explicites :

- Remplacez `claude-opus-4-8` par `claude-opus-5` dans vos configurations
- Supprimez les configurations de thinking explicites — Opus 5 pense par défaut
- Testez les workflows de subagents si vous utilisez une profondeur 1 — le comportement de base n'a pas changé, mais vérifiez l'observabilité dans vos outils de monitoring
