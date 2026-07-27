---
title: 'Claude Opus 5 : intelligence frontier, moitié prix'
excerpt: "Anthropic lance Opus 5 : intelligence proche de Fable 5 au prix d'Opus 4.8."
summary: "Claude Opus 5 est disponible depuis le 24 juillet 2026. Fenêtre de contexte de 1M tokens, thinking activé par défaut, nouveau mode d'effort 'xhigh', et pricing identique à Opus 4.8 ($5/$25 par MTok). Le modèle prend la tête des benchmarks Frontier-Bench et GDPval-AA."
date: 2026-07-20T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'Anthropic – Introducing Claude Opus 5',
      url: 'https://www.anthropic.com/news/claude-opus-5'
    },
    {
      label: 'TechCrunch – Anthropic launches Opus 5',
      url: 'https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/'
    },
    {
      label: 'Fortune – Opus 5 effort toggle',
      url: 'https://fortune.com/2026/07/24/anthropic-debuts-claude-opus-5-with-feature-that-lets-users-toggle-between-cost-and-capability/'
    },
    {
      label: 'MarkTechPost – Opus 5 frontier',
      url: 'https://www.marktechpost.com/2026/07/24/meet-the-new-claude-opus-5-frontier-class-agentic-coding-and-computer-use-at-unchanged-opus-pricing/'
    },
    {
      label: 'Axios – Anthropic releases Opus 5',
      url: 'https://www.axios.com/2026/07/24/anthropic-releases-new-model-opus-5'
    }
  ]
category: 'actus-ia'
---

# Claude Opus 5 : intelligence frontier, moitié prix

Le 24 juillet 2026, Anthropic a lancé **Claude Opus 5**, son nouveau modèle phare. Le message d'Anthropic est clair : Opus 5 se rapproche de l'intelligence de Fable 5 — le modèle frontier d'Anthropic, suspendu puis restauré en juillet — mais à **la moitié de son coût**. Et à **pricing identique à son prédécesseur Opus 4.8**, rendant la migration économiquement transparente.

## Spécifications techniques

| Paramètre | Valeur |
| --- | --- |
| Identifiant API | `claude-opus-5` |
| Fenêtre de contexte | **1 million de tokens** |
| Max output | 128 000 tokens |
| Prix entrée | $5,00 / MTok |
| Prix sortie | $25,00 / MTok |
| Thinking | Activé par défaut |
| Knowledge cutoff | Mai 2026 |

La fenêtre de 1M tokens est flat-rate : un prompt de 900 000 tokens est facturé au même taux par token qu'un prompt de 900 tokens. Aucun surcoût pour les contextes longs.

## Le toggle d'effort : de `low` à `xhigh`

La nouveauté la plus remarquée est l'introduction d'un **niveau d'effort configurable**. Opus 5 propose désormais quatre niveaux :

- `low` — réponses courtes, pensée réduite au minimum
- `medium` — comportement par défaut, similaire à Opus 4.8 en mode non-thinking
- `high` — profondeur d'analyse accrue, plus de tokens de thinking
- `xhigh` — nouveau niveau, raisonnement étendu pour les tâches complexes

Dans l'API, le paramètre s'appelle `thinking` avec un budget contrôlable, mais les SDKs officiels exposent désormais un helper de haut niveau pour sélectionner le niveau sans gérer le budget manuellement. Anthropic recommande `high` pour les tâches de coding complexes et `xhigh` pour les workflows multi-étapes ou la recherche scientifique.

## Thinking activé par défaut

Contrairement à Opus 4.8 où le mode extended thinking devait être demandé explicitement, **Opus 5 pense par défaut**. Le modèle génère une chaîne de raisonnement interne avant de répondre, ce qui améliore la cohérence sur les tâches longues et réduit les hallucinations sur les faits récents (le knowledge cutoff est repoussé à mai 2026, le plus à jour de tous les modèles Claude).

Pour les cas où la latence prime sur la qualité, le mode `low` désactive pratiquement le thinking.

## Fast mode à 2x le coût, 2,5x la vitesse

Opus 5 propose un **fast mode** disponible sur Claude Max. Le fast mode coûte 2× le tarif standard mais s'exécute environ 2,5× plus vite — un compromis favorable pour les applications interactives où la latence perçue est critique.

## Benchmarks

Selon Anthropic, Opus 5 prend la **première place sur Frontier-Bench** (benchmark composite de codage et de raisonnement) et sur **GDPval-AA** (knowledge tasks en conditions réelles). Sur les benchmarks scientifiques (biologie structurale, bioinformatique, chimie organique), les évaluations indépendantes confirment des scores supérieurs à Opus 4.8.

Anthropic concède qu'Opus 5 "arrive proche" de Fable 5 sans l'égaler sur toutes les dimensions, notamment sur les tâches les plus ouvertes de recherche originale.

## Déploiement et migration

Opus 5 est le modèle par défaut sur **Claude Max** et le modèle le plus puissant disponible sur **Claude Pro**. Il remplace Opus 4.8 comme modèle de référence dans l'API Anthropic.

Pour les développeurs déjà sur `claude-opus-4-8`, la migration est drop-in : même pricing, fenêtre de contexte identique, APIs compatibles. La seule adaptation à prévoir est la gestion du thinking par défaut, qui génère des tokens supplémentaires non visibles dans la réponse finale mais facturés.

## Nouveauté plateforme : modification des outils mid-conversation

En parallèle du lancement, Anthropic a déployé en **beta** la possibilité pour les développeurs de **modifier les outils accessibles en cours de conversation** sans réinitialiser le cache de prompt. Jusqu'ici, changer le schéma d'outils disponibles invalidait le cache et forçait un rechargement coûteux du contexte. Cette limitation est maintenant levée pour les comptes API avec accès beta.
