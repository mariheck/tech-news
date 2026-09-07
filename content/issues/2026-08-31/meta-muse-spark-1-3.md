---
title: "Muse Spark 1.3 : Meta s'installe au niveau frontier"
excerpt: "75,4 % sur DeepSWE 1.1 — Meta rejoint l'élite du code"
summary: "Meta publie Muse Spark 1.3 le 2 septembre. Le modèle atteint 75,4 % sur DeepSWE 1.1 et 61 sur l'AI Intelligence Index, rivalisant avec GPT-5.6 Sol. Il accomplit son travail avec 20 % de tool calls en moins et 25 % de tokens en moins que la version 1.2."
date: 2026-08-31T00:00:00Z
reading_time: 5
sources:
  [
    { label: "VentureBeat", url: "https://venturebeat.com/technology/meta-says-muse-spark-1-3-has-frontier-performance-but-its-best-results-come-from-a-model-developers-cant-broadly-use-yet" },
    { label: "Artificial Analysis", url: "https://artificialanalysis.ai/articles/muse-spark-1-3" },
    { label: "eesel AI", url: "https://www.eesel.ai/blog/muse-spark-1-3" },
    { label: "LLM Stats", url: "https://llm-stats.com/models/muse-spark-1.3" },
    { label: "BenchLM", url: "https://benchlm.ai/models/muse-spark-1-3" }
  ]
category: 'actus-ia'
---

# Muse Spark 1.3 : Meta s'installe au niveau frontier

Quatre semaines à peine après la sortie de Muse Spark 1.2, Meta publie **Muse Spark 1.3** le 2 septembre 2026. Le modèle est disponible via Muse Code et l'API Meta Model, et vient solidement positionner Meta dans le cercle très fermé des modèles frontier pour le code.

## Benchmarks : des chiffres qui parlent

| Benchmark | Score |
|---|---|
| DeepSWE 1.1 (agentic software engineering) | **75,4 %** |
| Terminal-Bench 2.1 | **88,8 %** |
| SWEAtlas CodeBase QnA | **59,4 %** |
| Long-context retrieval | **98,5 %** |
| AI Intelligence Index (xhigh) | **61** |

Le score de 61 sur l'Artificial Analysis Intelligence Index place Muse Spark 1.3 à égalité avec GPT-5.6 Sol (max) et Grok 4.6 (high). Seuls Claude Fable 5.1 et Claude Opus 5 le devancent dans ce classement — ce qui témoigne d'une montée en puissance spectaculaire de Meta en l'espace de quelques mois.

À noter : **Muse Spark 1.3 (max)**, accessible en preview limitée aux partenaires de Meta, atteint 62 sur l'AI Intelligence Index. Cette variante n'est pas encore disponible en accès général.

## Efficacité améliorée : moins de calls, moins de tokens

L'amélioration ne porte pas seulement sur les capacités brutes. Les ingénieurs de Meta ont mesuré que Muse Spark 1.3 accomplit les mêmes tâches avec :

- **20 % de tool calls en moins** que Muse Spark 1.2
- **25 % de tokens en moins** pour arriver au même résultat

Pour un agent de code qui opère sur de longues sessions, cette efficacité accrue se traduit directement en réduction de latence et de coût. La mémoire de contexte est mieux utilisée, les allers-retours avec les outils sont plus directs.

## Spécifications techniques

- **Fenêtre de contexte** : 1 million de tokens
- **Entrées** : texte, image, et vidéo
- **Accès** : Muse Code et Meta Model API

La prise en charge de la vidéo est notable : dans un contexte de développement, cela ouvre la voie à des workflows comme l'analyse de screencasts d'interfaces pour identifier des régressions visuelles, ou la compréhension de démos produit pour générer de la documentation.

## Un écosystème qui s'accélère

La sortie de Muse Spark 1.3 intervient en même temps que la GA de Muse Code (1er septembre) et la semaine du lancement de GPT-6 Astra et Claude Fable 5.1. Trois modèles frontier en une semaine est un signal fort : la compétition au sommet de l'IA pour le code n'a jamais été aussi serrée.

Pour les développeurs qui utilisent Muse Code comme agent de terminal, Muse Spark 1.3 est la mise à jour du modèle sous-jacent. Aucune action manuelle n'est requise : l'agent utilise automatiquement la nouvelle version.
