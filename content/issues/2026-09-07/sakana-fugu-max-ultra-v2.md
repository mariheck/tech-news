---
title: "Sakana lance Fugu Max et Fugu Ultra v2"
excerpt: "L'orchestration multi-agents rivalise avec le frontier"
summary: "Sakana AI publie Fugu Max et Fugu Ultra v2 le 11 septembre : deux modèles d'orchestration multi-agents qui surpassent ou égalent les modèles frontier sur 5 benchmarks sur 8, sans reposer sur des modèles propriétaires."
date: 2026-09-07T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Sakana AI blog", url: "https://sakana.ai/fugu-max-release/" },
    { label: "DataNorth", url: "https://datanorth.ai/news/sakana-ai-launches-fugu-max-and-fugu-ultra-v2" },
    { label: "Pondero", url: "https://pondero.ai/news/2026-09-12-sakana-fugu-max-ultra-v2/" },
    { label: "Orca Router", url: "https://www.orcarouter.ai/blog/fugu-ultra-v2-explained" },
    { label: "AiCybr Blog", url: "https://aicybr.com/blog/sakana-fugu-max-ultra-v2-orchestration-pricing-api" },
    { label: "MarkTechPost", url: "https://www.marktechpost.com/2026/09/10/sakana-ai-launches-fugu-max-and-fugu-ultra-v2-for-cheaper-stronger-multi-agent-orchestration/" }
  ]
category: 'actus-ia'
---

# Sakana lance Fugu Max et Fugu Ultra v2

Le 11 septembre 2026, Sakana AI a publié deux nouveaux modèles : **Fugu Max** (optimisé pour le rapport performance/coût) et **Fugu Ultra v2** (optimisé pour la qualité maximale). Ensemble, ils représentent la deuxième génération de l'architecture d'orchestration apprise de Sakana.

## L'architecture Fugu : orchestration plutôt que monolithe

Fugu n'est pas un modèle monolithique au sens classique. C'est un **système d'orchestration multi-agents appris** : un language model entraîné à router des tâches vers un pool fixe de modèles ouverts et spécialisés, et à s'appeler lui-même récursivement si nécessaire.

L'idée centrale est d'atteindre des performances frontier en combinant intelligemment des modèles moins puissants plutôt qu'en entraînant un seul modèle géant. La nouveauté de Fugu Ultra v2 est que **le pool ne comprend aucun modèle frontier propriétaire** — uniquement des modèles ouverts et des modèles spécialisés de Sakana.

## Fugu Ultra v2 : spécifications

- **Tarification** : $5/M tokens en entrée, $30/M tokens en sortie (contexte standard)
- **Capacités** : niveaux d'effort de raisonnement configurables (high, xhigh, max), function calling, structured outputs, entrées image et PDF, web search intégré
- **Cas d'usage cibles** : raisonnement complexe multi-étapes, recherche autonome, développement logiciel full-stack

## Benchmarks : meilleur ou ex-æquo sur 5 benchmarks sur 8

Selon Sakana AI, Fugu Ultra v2 obtient le **meilleur score ou un ex-æquo sur 5 des 8 benchmarks** publiés dans leur rapport :

- GDP.pdf
- Chartography
- SWEFish
- DeepSWE
- Toolathon

Ces benchmarks couvrent la compréhension de documents complexes, la génération de visualisations, et l'ingénierie logicielle — trois domaines particulièrement pertinents pour un développeur frontend travaillant avec des outils IA.

## Fugu Max : l'option économique

Fugu Max est la variante orientée coût. Avec un prix inférieur à $2/M tokens d'après DataNorth, il se positionne comme une option intermédiaire entre les modèles ouverts classiques et les orchestrateurs premium. Il cible les tâches répétitives ou à fort volume où le coût par appel compte davantage que la performance maximale.

## Ce que ça représente

L'approche Fugu illustre une tendance croissante : l'orchestration de modèles comme alternative à l'entraînement de modèles toujours plus grands. Pour les équipes qui intègrent des IA dans leur workflow de développement, un orchestrateur capable de router intelligemment entre modèles ouverts peut offrir un meilleur rapport qualité/coût qu'un abonnement fixe à un seul modèle frontier — à condition d'accepter la latence supplémentaire que l'orchestration introduit.
