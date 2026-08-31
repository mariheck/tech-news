---
title: "GitHub Copilot : agents d'org et contrôle de raisonnement"
excerpt: "La mise à jour août 2026 apporte agents orga et effort de réflexion"
summary: "GitHub Copilot pour Visual Studio reçoit les agents organisationnels partagés entre repos, les niveaux d'effort de réflexion (Low/Medium/High) et une revue de code Git dans l'IDE avant toute PR. Billing également mis à jour."
date: 2026-08-24T00:00:00Z
reading_time: 5
sources:
  [
    { label: "GitHub Changelog Copilot VS", url: "https://github.blog/changelog/2026-08-28-github-copilot-in-visual-studio-august-update-2/" },
    { label: "GitHub Changelog Billing", url: "https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/" },
    { label: "GitHub Changelog Weekly", url: "https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24/" }
  ]
category: 'dev-ia'
---

# GitHub Copilot : agents d'org et contrôle de raisonnement

Le 28 août 2026, GitHub a publié la mise à jour mensuelle de GitHub Copilot pour Visual Studio, accompagnée de changements de billing et d'un nouveau modèle dans le roster. Les nouvelles fonctionnalités sont disponibles pour tous les plans Copilot, du Free au Enterprise.

## Agents organisationnels

La nouveauté la plus structurante : les organisations et entreprises peuvent désormais **publier des agents Copilot partagés** accessibles à tous leurs membres, sur tous leurs dépôts.

Concrètement, un admin peut créer un agent spécialisé (par exemple : "Agent conformité RGPD", "Agent architecture micro-services", "Agent revue de sécurité") et le rendre disponible dans le sélecteur d'agents de tous les développeurs de l'organisation, sans que chacun ait à configurer quoi que ce soit.

Ces agents organisationnels apparaissent automatiquement dans le menu déroulant à côté des agents intégrés (Copilot, GitHub, etc.), distingués par un badge "Organization".

```
@CopilotOrg > [Agent conformité RGPD] Analyse ce endpoint pour les violations RGPD potentielles
```

C'est une évolution majeure pour les équipes engineering qui maintiennent des standards maison : au lieu de documenter les règles dans un wiki que personne ne lit, elles peuvent les encoder dans un agent que tout le monde utilise.

## Contrôle de l'effort de raisonnement

Pour les modèles qui le supportent, il est maintenant possible de choisir le **niveau d'effort de réflexion** : `Low`, `Medium` ou `High`.

| Niveau | Cas d'usage |
|---|---|
| `Low` | Autocomplétion rapide, reformulation, tâches simples |
| `Medium` | Génération de code standard, débogage de fonctions isolées |
| `High` | Architecture complexe, debugging multi-fichiers, analyse de sécurité |

Le niveau `High` consomme davantage de budget IA mais produit des réponses plus réfléchies pour les problèmes complexes. À l'inverse, `Low` réduit la latence pour les interactions qui n'ont pas besoin de raisonnement approfondi. Cette granularité permet aux développeurs de calibrer le coût/qualité selon le contexte.

## Revue de code Git dans l'IDE

L'agent Git de Copilot peut désormais **effectuer une revue de code dans Visual Studio** sur :

- Les changements non commités (working tree)
- Un commit spécifique

...avant même d'ouvrir une Pull Request. La revue apparaît sous forme de commentaires inline dans l'éditeur, avec des suggestions d'amélioration.

```
Copilot > Revue l'ensemble de mes changements non commités
```

Cela permet d'attraper les problèmes évidents (logique incorrecte, oubli de cas, code non typé) avant que le code ne parte en review humaine — une économie de cycles de feedback significative.

## Gestion des modèles améliorée

L'interface de sélection de modèles est repensée : il est maintenant possible d'épingler ses modèles favoris, de réduire ceux qu'on n'utilise pas, et d'accéder à une vue détaillée montrant capacités, taille de contexte et coût estimé de chaque modèle.

**Nouveau modèle ajouté au roster :** K2.7 Code de Moonshot AI, un modèle de codage optimisé pour les tâches de complétion et génération de code.

## Changements de billing au 1er septembre

À partir du 1er septembre :
- Les nouvelles souscriptions Business et Enterprise via carte bancaire et PayPal rouvrent.
- La facturation passe à un prépaiement en début de cycle (au lieu du post-paiement actuel).
- Le niveau d'effort de revue de code par défaut passe de `Lite` à `Balanced` le 28 septembre — les admins qui souhaitent rester sur `Lite` doivent opter explicitement avant cette date.

Les sessions d'agents cloud démarrées depuis Microsoft Teams consomment désormais des crédits IA, régis par le budget d'usage de l'organisation.
