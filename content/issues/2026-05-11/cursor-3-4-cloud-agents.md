---
title: 'Cursor 3.4 : environnements cloud pour les agents'
excerpt: 'Multi-repo, Dockerfile + secrets de build, rollback et audit logs.'
summary: 'Cursor 3.4 permet aux équipes de configurer des environnements cloud dédiés à leurs agents : multi-dépôts, config Dockerfile avec secrets de build sécurisés, cache 70% plus rapide, historique de versions avec rollback et logs d'audit complets.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Cursor Changelog 13 mai', url: 'https://cursor.com/changelog/05-13-26' },
    { label: 'Cursor Blog Cloud Agents', url: 'https://cursor.com/blog/cloud-agent-development-environments' },
    { label: 'PrimeAI Center review', url: 'https://primeaicenter.com/cursor-cloud-agents-dev-environments/' }
  ]
category: 'dev-ia'
---

# Cursor 3.4 : environnements cloud pour les agents

Cursor a publié la version 3.4 le 13 mai 2026. La mise à jour se concentre sur la configuration des **environnements de développement cloud** pour les agents, une demande forte des équipes qui veulent standardiser la façon dont leurs agents accèdent au code et aux dépendances.

## Multi-repo : un environnement, plusieurs dépôts

Les Cloud Agents et les automations Cursor supportent désormais les **environnements multi-dépôts**. Une configuration unique peut regrouper tous les repos qu'un agent doit connaître pour son travail, et cette configuration est réutilisée d'une session à l'autre.

C'est un changement pratique pour les monorepos décomposés en plusieurs dépôts GitHub ou pour les architectures microservices où un agent doit naviguer entre plusieurs codebases pour effectuer un refactoring.

## Dockerfile amélioré et secrets de build

Cursor 3.4 améliore sensiblement le workflow **Dockerfile** pour les environnements cloud :

- **Debugging plus simple** : la configuration d'environnement est lisible directement dans l'interface Cursor, plus besoin de l'inspecter via CLI.
- **Secrets de build** : il est maintenant possible d'accéder à des registres privés de packages depuis le Dockerfile sans exposer les credentials dans l'image finale. Les secrets sont scoped au step de build et n'arrivent jamais dans l'environnement de l'agent en runtime.
- **Cache de layers** : le système de layers Dockerfile détecte les changements précisément et ne recompile que les layers affectés. Résultat : les builds qui atteignent le cache sont **70% plus rapides**.

## Versioning et rollback des environnements

Chaque environnement cloud a maintenant son propre **historique de versions**. On peut voir l'historique des changements, comparer deux états et effectuer un rollback vers une version antérieure si une mise à jour de l'environnement casse les builds des agents. Les admins peuvent restreindre le droit de rollback à leur seul rôle.

## Audit log et contrôle des secrets

Un **audit log** capture toutes les actions effectuées sur les environnements par les membres de l'équipe : création, modification, rollback, changement de secrets. Les équipes de sécurité obtiennent une visibilité complète sans avoir à instrumenter elles-mêmes les changements.

Les secrets et les règles d'egress peuvent maintenant être définis **au niveau de l'environnement** plutôt que globalement, ce qui permet de cloisonner les accès entre différents contextes de travail des agents.

## Contexte

Ces améliorations s'adressent principalement aux équipes qui utilisent Cursor en mode organisationnel, où plusieurs développeurs partagent des environments de référence pour leurs agents. Pour les usages solo, la mise à jour est moins impactante mais le cache plus rapide et les secrets de build sont utiles dans tous les contextes.
