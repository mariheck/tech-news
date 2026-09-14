---
title: "DeepSeek V4.1 Flash : open source et multimodal"
excerpt: "MIT, 552B paramètres, 1M de contexte, $0,15/M tokens"
summary: "DeepSeek lance V4.1 Flash le 10 septembre : 552B paramètres MoE, licence MIT ouverte, multimodal texte+images, contexte 1 million de tokens et prix ultra-compétitif à $0,15/M input."
date: 2026-09-07T00:00:00Z
reading_time: 5
sources:
  [
    { label: "DataNorth : annonce", url: "https://datanorth.ai/news/deepseek-releases-deepseek-v4-1-flash" },
    { label: "PANews : date officielle", url: "https://panews.io/articles/01a0856e-2bce-75c8-bca5-2be6af74ffd9" },
    { label: "Emergent : multimodal", url: "https://emergent.sh/news/deepseek-v4-1-flash-launches-multimodal" },
    { label: "CellCog : analyse", url: "https://cellcog.ai/blog/deepseek-v4-1-flash-release-date/" },
    { label: "CCLeaks : open weights", url: "https://ccleaks.com/news/deepseek-v4-1-flash-open-weights-sep-2026" },
    { label: "Bitrue : guide accès", url: "https://www.bitrue.com/blog/deepseek-v4-1-flash" }
  ]
category: 'actus-ia'
---

# DeepSeek V4.1 Flash : open source et multimodal

Le 10 septembre 2026, DeepSeek a publié DeepSeek-V4.1-Flash sous licence MIT avec les poids ouverts sur Hugging Face. La sortie avait été annoncée quelques jours plus tôt par l'équipe, avec un lancement ciblé autour du 10 septembre (heure de Pékin).

## Architecture Mixture-of-Experts

DeepSeek-V4.1-Flash est un modèle Mixture-of-Experts (MoE) de **552 milliards de paramètres totaux**, avec environ **8 milliards de paramètres actifs par token**. Ce ratio est l'une des caractéristiques clés du modèle : une large capacité de représentation à un coût d'inférence maîtrisé.

Le modèle a été entraîné à partir de zéro sur **45 000 milliards de tokens** de texte et d'images mélangés. La fenêtre de contexte atteint **1 million de tokens**, positionnant V4.1 Flash dans la même catégorie que les modèles récents de Anthropic et Google sur ce critère.

## Multimodal natif : texte et images

V4.1 Flash lit des images en entrée et produit du texte en sortie. Cette capacité multimodale est entraînée nativement et non greffée après coup — une différence architecturale significative par rapport à certains modèles antérieurs qui ajoutaient la vision via un encoder séparé.

D'après DeepSeek, V4.1 Flash **surpasse V4 Pro sur tous les benchmarks comparés** : performance brute, coût, vitesse et temps de complétion total. C'est une amélioration notable puisque V4 Pro était jusqu'ici le meilleur modèle de la famille DeepSeek.

## Tarification et accès

L'aspect le plus frappant est le prix :

- **Entrée** : $0,15 par million de tokens (hors pic) / $0,60 en pic
- **Sortie** : $0,60 par million de tokens

À titre de comparaison, les modèles frontier concurrents (GPT-6 Astra, Claude Fable 5.1) se positionnent à $10/M en entrée et $50/M en sortie. DeepSeek V4.1 Flash est donc **entre 15 et 65 fois moins cher** selon la direction considérée.

Les poids sont téléchargeables sur Hugging Face sous la licence MIT — ce qui signifie une utilisation commerciale libre, y compris pour du fine-tuning ou du déploiement auto-hébergé.

## Positionnement dans l'écosystème

V4.1 Flash se positionne comme une alternative open source et économique aux modèles frontier propriétaires. Pour les développeurs frontend travaillant sur des intégrations d'IA légères (autocomplétion, résumé, génération de contenu, analyse d'images d'interface), l'ouverture des poids combinée au prix d'API agressif ouvre des cas d'usage qui étaient prohibitifs à ce tarif.

La disponibilité sur OpenRouter aux côtés des API DeepSeek élargit encore les options d'accès sans avoir à déployer les poids localement (lesquels nécessitent une infrastructure conséquente à 552B paramètres, même en MoE).
