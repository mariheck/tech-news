---
title: "OpenAI retire o3 de ChatGPT et consolide son offre"
excerpt: "Le modèle de raisonnement o3 quitte ChatGPT après 90 jours de préavis"
summary: "Après un préavis de 90 jours, OpenAI a retiré le 26 août les modèles o3 de l'interface ChatGPT. L'API reste disponible jusqu'au 11 décembre 2026, où gpt-5.6-sol prendra le relais. Les workflows GPT custom sur o3 sont impactés dès maintenant."
date: 2026-08-24T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Forkast News", url: "https://forkast.news/openai-retired-o3-from-chatgpt-today-the-real-cost-is-the-churn-it-forces-on-everyone-else/" },
    { label: "OpenAI News", url: "https://openai.com/news/product-releases/" }
  ]
category: 'actus-ia'
---

# OpenAI retire o3 de ChatGPT et consolide son offre

Le 26 août 2026, OpenAI a officiellement retiré les modèles **o3** de l'interface ChatGPT, complétant ainsi une période de sunset de 90 jours annoncée le 28 mai. C'est la première fois qu'un modèle de raisonnement majeur est forcément retiré d'un produit IA grand public — et les implications pour les développeurs qui ont construit dessus vont au-delà du simple changement de modèle.

## Ce qui change

**Dans ChatGPT :** o3 et o3-mini ne sont plus accessibles depuis le 26 août. Les utilisateurs sont automatiquement redirigés vers les modèles de la famille GPT-5.6, qui intègrent maintenant des capacités de raisonnement natives.

**Via l'API :** les endpoints o3 restent opérationnels jusqu'au **11 décembre 2026**. À cette date, ils seront remplacés par `gpt-5.6-sol`, qui occupe déjà la tête de Terminal-Bench 2.1 avec un score de 89,5%.

**Les GPT custom :** c'est là que l'impact est le plus immédiat. Les développeurs qui ont configuré des GPT personnalisés dans ChatGPT en sélectionnant o3 comme modèle de base se retrouvent avec des assistants dont le comportement de raisonnement peut différer de manière significative.

## Pourquoi ça pose problème

o3 avait un cadre de raisonnement particulier — une cadence de "réflexion" visible, une façon de décomposer les problèmes — sur laquelle des workflows entiers ont été calibrés. GPT-5.6, bien que plus performant sur les benchmarks globaux, raisonne différemment.

Le problème n'est pas les performances brutes : c'est la **rupture de comportement**. Les prompts optimisés pour o3, les chaînes de pensée attendues, les formats de sortie produits par le modèle : tout cela peut se dégrader de façon non évidente avec un nouveau modèle.

## La première retraite forcée d'un modèle de raisonnement

Ce qui est notable ici, c'est le précédent que cela crée. o3 est le premier grand modèle de raisonnement — pas seulement un modèle de complétion — à être forcément retiré d'un produit IA de masse avec un préavis limité.

Cela signale que l'écosystème IA entre dans une phase de **gestion de cycle de vie des modèles** plus agressive. Les labs qui gèrent plusieurs familles de modèles (reasoning vs. standard, fast vs. thorough) vont rationaliser leurs offres au fur et à mesure que les nouvelles générations absorbent les cas d'usage des anciennes.

## Ce qu'il faut faire maintenant

Pour les développeurs avec des workflows sur o3 :

1. **Tester immédiatement** le comportement de vos GPT custom et agents API avec `gpt-5.6-sol` ou `gpt-5.6-terra`.
2. **Auditer vos prompts système** : o3 était sensible à certaines formulations de chaîne de pensée qui ne s'appliquent pas de la même façon à GPT-5.6.
3. **Planifier la migration API avant le 11 décembre** : ne pas attendre la dernière minute.

La bonne nouvelle : GPT-5.6-Sol est significativement moins cher grâce à la baisse de prix du 21 août (-80% sur certains tiers). La migration devrait être économiquement neutre ou positive.
