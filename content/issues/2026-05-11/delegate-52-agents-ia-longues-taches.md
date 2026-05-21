---
title: "DELEGATE-52 : les agents IA dégradent systématiquement les documents de travail"
excerpt: "Des chercheurs Microsoft ont simulé 52 workflows pros : même les meilleurs modèles perdent en moyenne 25 % du contenu des documents sur 20 interactions."
summary: "Le benchmark DELEGATE-52 révèle que les LLMs frontier corrompent les documents de travail sur les tâches longues, avec une dégradation moyenne de 50 % tous modèles confondus. Les agents agentiques font encore pire que les modèles seuls."
date: 2026-05-11T00:00:00Z
readingTime: 6
sources:
  - label: "The Register – 11 mai"
    url: "https://www.theregister.com/ai-ml/2026/05/11/microsoft-researchers-find-ai-models-and-agents-cant-handle-long-running-tasks/5238263"
category: actus ia
---

Le 11 mai, des chercheurs de Microsoft ont publié les résultats d'une étude qui remet en perspective les promesses des agents IA sur les tâches professionnelles complexes. Le benchmark **DELEGATE-52** simule des workflows multi-étapes dans 52 domaines professionnels — rédaction de code, cristallographie, notation musicale, analyse de données financières — pour mesurer comment les LLMs gèrent la délégation de tâches longues.

## Ce que mesure DELEGATE-52

Le protocole est simple : le modèle est chargé d'éditer et de compléter un document de travail sur une séquence de **20 interactions déléguées**. Après chaque interaction, les chercheurs mesurent la dégradation du document par rapport à l'original (contenu perdu, structure abîmée, données corrompues).

Le benchmark cible délibérément le type de tâche pour lequel les éditeurs de logiciels IA promettent le plus : les **workflows longue durée à plusieurs étapes**.

## Les résultats

Les chiffres sont sévères :

- Les **modèles frontier** (Gemini 3.1 Pro, Claude 4.6 Opus, GPT-5.4) perdent en moyenne **25 % du contenu des documents** sur 20 interactions déléguées.
- La **dégradation moyenne tous modèles confondus** atteint **50 %**.
- Dans **80 % des conditions simulées**, au moins un modèle frontier dégrade le document d'au moins 20 %.

### Les agents font pire que les modèles seuls

Contre-intuitivement, équiper les modèles d'outils (lecture de fichiers, écriture, exécution de code) via un harness agentique n'améliore pas les résultats — ça les aggrave. Les quatre modèles testés en mode agentique cumulent en moyenne **6 % de dégradation supplémentaire** par rapport aux mêmes modèles sans outils.

Les chercheurs avancent plusieurs explications : les agents tendent à réécrire plus agressivement, à perdre le contexte des sections non éditées, et à introduire des erreurs de format ou de structure que les interactions suivantes ne corrigent pas.

## Pourquoi c'est important

Cette étude arrive à un moment où les éditeurs de logiciels (GitHub Copilot, Anthropic, OpenAI, Google) positionnent leurs agents comme des collègues numériques capables de prendre en charge des projets entiers. DELEGATE-52 pose une question directe : **peut-on déléguer un document de travail important à un agent IA sur plusieurs dizaines d'interactions sans le dégrader ?**

La réponse, pour l'instant, est non — même avec les meilleurs modèles disponibles.

Les chercheurs ne concluent pas à l'inutilité des agents, mais insistent sur la nécessité de :
- **Checkpoints humains réguliers** entre chaque phase significative
- **Mécanismes de validation** des documents entre chaque interaction
- **Tests formels sur des benchmarks longs** avant tout déploiement en production sur des tâches à fort enjeu
