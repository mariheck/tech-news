---
title: "GitHub Copilot passe aux AI Credits, nouveau plan Max"
excerpt: "Facturation à la consommation et palier Max à 100 $/mois."
summary: "Depuis le 1er juin, tous les plans GitHub Copilot basculent vers une facturation à la consommation en AI Credits (tokens). Un nouveau palier Copilot Max à 100 $/mois (20 000 crédits/mois) cible les utilisateurs intensifs d'agents."
date: 2026-06-01T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – billing", url: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/" }
  ]
category: 'dev-ia'
---

# GitHub Copilot passe aux AI Credits, nouveau plan Max

À partir du 1er juin 2026, GitHub réforme en profondeur la structure tarifaire de Copilot. La facturation par requêtes disparaît au profit d'un système d'**AI Credits** basés sur la consommation de tokens. Un nouveau palier **Copilot Max** à 100 $/mois est également lancé pour les utilisateurs les plus intensifs.

## Fin de la facturation par requêtes

Le modèle précédent facturait Copilot par nombre de complétions et de messages chat — une approximation grossière qui ne reflétait pas la réalité des coûts d'inférence, très variable selon les modèles utilisés (GPT-4o vs MAI-Code-1-Flash vs Claude Sonnet ne coûtent pas la même chose par token).

Le nouveau système en **AI Credits** est directement corrélé aux tokens consommés. Chaque plan inclut une enveloppe mensuelle de crédits, et les crédits non utilisés ne se reportent pas au mois suivant.

## Nouveaux plans et tarifs

| Plan | Prix | Crédits |
|---|---|---|
| Copilot Pro | 10 $/mois | enveloppe standard |
| Copilot Pro+ | 39 $/mois | enveloppe élargie |
| Copilot Business | prix entreprise | enveloppe Business |
| Copilot Enterprise | prix entreprise | enveloppe Enterprise |
| **Copilot Max** | **100 $/mois** | **20 000 crédits** |

Le plan **Max** est la nouveauté principale. Avec 20 000 crédits mensuels, il cible les développeurs qui utilisent massivement les agents Copilot — sessions longues, éditions multi-fichiers, interactions fréquentes avec les modèles les plus capables.

## Ce qui change concrètement

**Pour l'utilisation classique (complétion inline, chat)**, l'impact sera minimal — les tâches légères consomment peu de tokens et restent dans les enveloppes des plans existants.

**Pour les sessions d'agents** (planification de tâches, éditions autonomes, itérations longues), la consommation de tokens est beaucoup plus élevée. C'est pour ces usages que le plan Max a été conçu — et que la migration vers les AI Credits crée un alignement entre prix et usage réel.

**Pour les entreprises sur Business/Enterprise**, le passage aux AI Credits permet une meilleure visibilité budgétaire : les équipes peuvent suivre la consommation par développeur et par projet, là où la facturation par siège était opaque sur l'usage réel.

## Lecture

Cette évolution tarifaire reflète un changement de paradigme dans l'usage de Copilot : on est passé de l'outil de complétion (usage relativement prévisible) à l'orchestrateur d'agents (usage très variable, parfois très intensif). La facturation à la consommation est plus honnête dans ce contexte.

Le plan Max à 100 $/mois positionne GitHub directement face aux offres Cursor Premium (96 $/siège/mois, restructuré la même semaine) et aux abonnements intensifs des autres éditeurs IA. La compétition entre plateformes de coding IA se déplace des fonctionnalités vers les modèles économiques.
