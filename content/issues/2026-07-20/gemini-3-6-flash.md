---
title: 'Gemini 3.6 Flash : moins cher, meilleur en coding'
excerpt: "Google lance Gemini 3.6 Flash : 17 % moins de tokens, +12 pts sur GDPval-AA."
summary: "Google lance Gemini 3.6 Flash le 21 juillet avec un gain de 12 points sur GDPval-AA et une réduction de 17 % des tokens de sortie, au prix identique. Trois modèles sortent en même temps : 3.6 Flash, 3.5 Flash-Lite et 3.5 Flash Cyber (cybersécurité, accès restreint)."
date: 2026-07-20T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'TechCrunch – trois nouveaux Gemini',
      url: 'https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/'
    },
    {
      label: '9to5Google – Gemini 3.6 Flash launch',
      url: 'https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/'
    },
    {
      label: 'TechTimes – benchmarks et pricing',
      url: 'https://www.techtimes.com/articles/321268/20260722/gemini-36-flash-cuts-token-costs-scores-higher-every-benchmark.htm'
    },
    {
      label: 'Memeburn – guide benchmarks',
      url: 'https://memeburn.com/gemini-3-6-flash-benchmarks-and-pricing-guide-2026/'
    },
    {
      label: 'Coursiv – Gemini 3.6 Flash guide',
      url: 'https://coursiv.io/blog/gemini-3-6-flash'
    }
  ]
category: 'actus-ia'
---

# Gemini 3.6 Flash : moins cher, meilleur en coding

Le 21 juillet 2026, Google DeepMind a publié **trois nouveaux modèles Gemini** simultanément. Le plus significatif pour les développeurs est **Gemini 3.6 Flash** — la mise à jour du modèle de travail de Google, conçu pour les workflows agentiques et le coding à haut débit. Les deux autres sont Gemini 3.5 Flash-Lite (le plus économique de la gamme) et Gemini 3.5 Flash Cyber (spécialisé cybersécurité, accès restreint).

Notons l'absence de Gemini 3.5 Pro, dont le lancement avait été annoncé "dans le mois suivant" lors de l'I/O 2026 en mai. Google ne s'est pas exprimé sur ce calendrier.

## Gemini 3.6 Flash en détail

### Pricing identique à 3.5 Flash, avec une r��duction effective

| | Gemini 3.5 Flash | Gemini 3.6 Flash |
| --- | --- | --- |
| Entrée (par MTok) | $1,50 | $1,50 |
| Sortie (par MTok) | $9,00 | **$7,50** |

Le tarif d'entrée reste inchangé mais le prix de sortie baisse de 17 %. Couplé à la réduction de tokens générés, le coût effectif par tâche diminue sensiblement.

### 17 % de tokens de sortie en moins

Gemini 3.6 Flash génère **17 % moins de tokens** que 3.5 Flash pour accomplir des tâches équivalentes. Le modèle prend moins d'étapes de raisonnement intermédiaires, fait moins d'appels d'outils redondants, et structure ses réponses de manière plus dense. Pour des workflows en boucle serrée (évaluation → outil → action → évaluation), cette réduction a un impact direct sur la facture et la latence.

### Benchmarks

| Benchmark | Gemini 3.5 Flash | Gemini 3.6 Flash |
| --- | --- | --- |
| DeepSWE (coding agent) | 37 % | **49 %** |
| GDPval-AA (knowledge) | 1 349 | **1 421** |
| OSWorld-Verified (computer use) | 78,4 % | **83,0 %** |

Sur le benchmark DeepSWE — qui mesure la capacité d'un agent à compléter des tâches de software engineering de bout en bout — Gemini 3.6 Flash passe de 37 à 49 %, soit **+12 points**. L'amélioration sur le computer use (+4,6 points sur OSWorld) est également notable pour les usages UI automation.

L'Artificial Analysis Intelligence Index reste à 50 pour les deux modèles, ce qui suggère une amélioration concentrée sur les usages techniques plutôt qu'une élévation du niveau général.

### Qualité du code

Les tests publiés par Google montrent une **réduction des modifications de code non souhaitées** et des boucles d'exécution sur les tâches de refactoring. Le mod��le génère du code plus ciblé sur ce qui lui est demandé, avec moins d'ajout non sollicité de fonctionnalités adjacentes.

## Gemini 3.5 Flash-Lite : l'option économique

Gemini 3.5 Flash-Lite est le modèle le plus économique de la gamme Gemini en 2026. Il est positionné pour les cas d'usage à volume très élevé où la qualité absolue est secondaire : classification, résumé rapide, filtrage, triage.

Aucun détail de pricing n'a été communiqué dans l'annonce officielle.

## Gemini 3.5 Flash Cyber : cybersécurité, accès gouvernemental

Gemini 3.5 Flash Cyber est un modèle fine-tuné pour la détection et la correction de vulnérabilités. Il est disponible uniquement pour les gouvernements et les partenaires de confiance dans le cadre d'un **programme pilote à accès restreint**. Google ne précise pas les benchmarks spécifiques ni le pricing.

## Disponibilité

Gemini 3.6 Flash est accessible immédiatement dans la Gemini API via Google AI Studio et Vertex AI. Le modèle est identifiable par son identifiant API (`gemini-3.6-flash`). Les applications utilisant `gemini-3.5-flash` devront mettre à jour l'identifiant pour bénéficier du nouveau modèle.

## La question Gemini 3.5 Pro

L'absence de Gemini 3.5 Pro dans cette release est remarquée. Depuis l'I/O 2026 en mai, Google avait annoncé une sortie dans les semaines suivantes. La communication du 21 juillet évacue le sujet sans s'expliquer, ce qui laisse supposer que les évaluations internes ne satisfont pas encore les critères de lancement.
