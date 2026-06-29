---
title: "GPT-5.6 : Sol, Terra et Luna en preview limité"
excerpt: "OpenAI dévoile sa famille de modèles la plus puissante"
summary: "OpenAI lance le 26 juin GPT-5.6 Sol, Terra et Luna en preview restreint à ~20 entreprises sous accord gouvernemental. Sol introduit le mode ultra multi-agents et le max reasoning effort. Terra est 2× moins cher que GPT-5.5 à performances comparables."
date: 2026-06-22T00:00:00Z
reading_time: 6
sources:
  [
    { label: "OpenAI – GPT-5.6 Sol preview", url: "https://openai.com/index/previewing-gpt-5-6-sol/" },
    { label: "Axios – GPT-5.6 Sol restrictions", url: "https://www.axios.com/2026/06/26/openai-gpt-sol-terra-luna-trump" },
    { label: "VentureBeat – GPT-5.6 Sol", url: "https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov" },
    { label: "MarkTechPost – GPT-5.6 analyse", url: "https://www.marktechpost.com/2026/06/26/openai-previews-gpt-5-6-with-sol-terra-and-luna-tiered-models-new-reasoning-modes-limited-access/" }
  ]
category: 'actus-ia'
---

# GPT-5.6 : Sol, Terra et Luna en preview limité

Le 26 juin 2026, OpenAI a lancé une preview limitée de GPT-5.6, une nouvelle famille de trois modèles qui marque l'étape la plus ambitieuse de la compagnie depuis GPT-5. L'accès ne s'ouvre qu'à une vingtaine d'entreprises sélectionnées avec l'aval du gouvernement américain, ce qui en fait la sortie la plus contrôlée de l'histoire d'OpenAI.

## Trois modèles, une même famille

La famille GPT-5.6 se décline en trois niveaux de puissance et de coût :

- **Sol** — le modèle phare, présenté comme « le plus puissant jamais produit par OpenAI ». Il est conçu pour les tâches les plus exigeantes : raisonnement complexe, sessions de code prolongées, workflows agentiques avancés et applications à enjeux de sécurité élevés.
- **Terra** — le modèle intermédiaire. Il atteint des performances comparables à GPT-5.5 mais à **2× le coût inférieur** ($2,50 / $15 par million de tokens en entrée/sortie). Ciblé sur la productivité quotidienne.
- **Luna** — le modèle rapide et économique ($1 / $6 par million de tokens). Il mise sur la vitesse de réponse et le faible coût pour les cas d'usage à haut volume.

## Ce qui change côté raisonnement

GPT-5.6 introduit deux nouveaux modes de raisonnement qui vont plus loin que les curseurs habituels :

**Max reasoning effort** — Sol peut disposer de beaucoup plus de temps de calcul pour réfléchir avant de répondre. Les benchmarks internes d'OpenAI montrent des gains sensibles sur des problèmes de mathématiques avancées et d'ingénierie logicielle que le mode standard ne résolv pas de manière fiable.

**Ultra mode** — au lieu d'un seul modèle travaillant en isolation, le mode ultra décompose le problème en sous-tâches et déploie plusieurs sous-agents en parallèle pour les traiter simultanément. C'est la première fois qu'un produit OpenAI expose nativement une architecture multi-agents à l'utilisateur final, sans passer par un framework tiers comme AutoGPT ou LangGraph.

## Accès sous contrôle gouvernemental

Le choix de ne déployer qu'auprès d'une vingtaine d'entreprises autorisées par le gouvernement américain est inédit. OpenAI explique avoir « passé plusieurs semaines à trouver des faiblesses et à durcir le système contre des attaques réelles ». Le délai d'ouverture plus large au grand public n'a pas été précisé, mais la compagnie évoque « les prochaines semaines ».

Cette restriction intervient dans un contexte tendu : Anthropic vient d'être confrontée à une directive d'export control sur ses propres modèles Fable 5 et Mythos 5 (voir l'article dédié). La pression réglementaire autour des modèles de pointe s'intensifie des deux côtés.

## Ce que ça change pour les développeurs

Pour les équipes qui auront accès à Sol, le mode ultra multi-agents change fondamentalement la manière d'architechter les pipelines d'IA. Plutôt qu'un seul appel à un LLM capable, il devient possible de décomposer des tâches longues (audit de codebase, refactor multi-fichiers, génération de suites de tests) en branches parallèles, puis de synthétiser les résultats. C'est une approche que des outils comme Claude Code ou Cursor Automations implémentent déjà côté tooling — GPT-5.6 l'intègre directement dans le modèle.

Terra reste le candidat naturel pour les intégrations en production à coût maîtrisé. À performance GPT-5.5 et à moitié prix, il devrait s'imposer rapidement dans les pipelines d'assistance au code, de génération de contenu et de RAG dès que l'accès sera généralisé.

## Tarifs en résumé

| Modèle | Input ($/M tokens) | Output ($/M tokens) |
|--------|-------------------|---------------------|
| Sol    | $5                | $30                 |
| Terra  | $2,50             | $15                 |
| Luna   | $1                | $6                  |
