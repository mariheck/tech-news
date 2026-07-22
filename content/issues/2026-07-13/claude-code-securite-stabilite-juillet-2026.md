---
title: "Claude Code : sécurité renforcée et limites prolongées"
excerpt: "Permissions renforcées, nouveaux outils et 50% de limite supplémentaire"
summary: "Claude Code déploie une mise à jour axée sécurité et stabilité : vérifications de permissions renforcées, gestion des hooks améliorée, outil EndConversation, et les limites hebdomadaires des plans Pro, Max, Team et Enterprise augmentées de 50% jusqu'au 19 juillet."
date: 2026-07-13T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Help Net Security – limites +50%", url: "https://www.helpnetsecurity.com/2026/07/13/claude-code-weekly-limits-promotion-extended/" },
    { label: "Claude Code – what's new", url: "https://code.claude.com/docs/en/whats-new" },
    { label: "Releasebot – Anthropic updates", url: "https://releasebot.io/updates/anthropic/claude-code" }
  ]
category: 'dev-ia'
---

# Claude Code : sécurité renforcée et limites prolongées

Le 13 juillet 2026, Anthropic a déployé une mise à jour de Claude Code centrée sur la stabilité, la sécurité et l'amélioration des garde-fous d'exécution. En parallèle, l'entreprise a confirmé l'extension d'une promotion sur les limites d'utilisation hebdomadaires jusqu'au 19 juillet 2026.

## Les changements de permissions et de sécurité

La mise à jour introduit plusieurs correctifs et durcissements dans la gestion des permissions d'exécution :

**Règles `dir/**` corrigées** : Un bug permettait aux règles d'autorisation de type `dir/**` d'approuver automatiquement les écritures dans des sous-répertoires imbriqués n'importe où dans l'arborescence. Ce comportement est maintenant corrigé — la règle ne s'applique qu'au chemin explicitement spécifié.

**Conditions `if:` dans les hooks** : Les conditions de hook `directory if:` correspondent désormais uniquement au répertoire de travail courant, et non à un répertoire quelconque dans la hiérarchie.

**Commandes fichier avec `-m`, `--magic-file` ou `-f`/`--files-from`** : Ces commandes nécessitent maintenant une permission explicite au lieu d'être auto-approuvées en lecture seule.

**Bash et PowerShell** : La gestion sécurisée de ces shells a été améliorée de façon générale pour éviter les exécutions involontaires.

**Nettoyage des sessions en arrière-plan** : Amélioration de la gestion des sessions background pour éviter les processus orphelins.

## Nouveaux outils et fonctionnalités

**EndConversation** : Un nouvel outil qui permet à Claude Code de marquer explicitement la fin d'une conversation, utile pour les workflows automatisés et les pipelines CI qui ont besoin d'un signal clair de terminaison.

**Progress heartbeats** : Pour les tâches longues, Claude Code envoie désormais des signaux réguliers pour indiquer que l'exécution est en cours — évitant les timeouts côté client pour les opérations de longue durée.

**Données MCP en temps réel dans les Artifacts** : Les artifacts publiés depuis Claude Code peuvent désormais accéder en direct aux données des connecteurs MCP de l'utilisateur.

**Mode screen reader** : Un mode d'accessibilité pour les sessions utilisant des lecteurs d'écran.

**Partage et collaboration** : Nouvelles options de partage et de collaboration pour les plans Team et Enterprise.

## Le changement de comportement pour /verify et /code-review

Un changement notable : les skills `/verify` et `/code-review` ne s'exécutent plus automatiquement. Ils doivent désormais être invoqués explicitement. Ce changement répond à des retours d'utilisateurs qui trouvaient ces exécutions automatiques intrusives dans certains workflows.

## La promotion des limites +50%

Depuis quelques semaines, Anthropic offrait 50% de limites hebdomadaires supplémentaires aux abonnés Pro, Max, Team et aux utilisateurs Enterprise éligibles. Cette promotion a été étendue jusqu'au 19 juillet 2026. Pour les utilisateurs intensifs de Claude Code, c'est une fenêtre utile pour tester des workflows plus gourmands avant le retour aux quotas standards.

## Ce qui compte pour votre usage quotidien

Les changements de permissions sont des correctifs de sécurité, pas des breaking changes pour les usages normaux. Si vous avez des règles d'autorisation personnalisées qui s'appuient sur des patterns `dir/**` larges pour approuver des écritures dans des sous-répertoires profonds, il peut être nécessaire de revoir ces configurations pour vérifier qu'elles fonctionnent toujours comme prévu après la mise à jour.
