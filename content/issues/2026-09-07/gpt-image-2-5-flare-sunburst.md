---
title: "GPT Image 2.5 : deux variantes Flare et Sunburst"
excerpt: "OpenAI scinde son API image en vitesse et en qualité"
summary: "Le 8 septembre, OpenAI lance GPT Image 2.5 avec deux modèles API distincts : Flare pour la génération rapide à volume élevé, et Sunburst pour les workflows créatifs exigeants. Disponibles dans ChatGPT et via l'API."
date: 2026-09-07T00:00:00Z
reading_time: 4
sources:
  [
    { label: "OpenAI blog", url: "https://openai.com/index/introducing-chatgpt-images-2-5/" },
    { label: "DEV : notes de migration", url: "https://dev.to/ethanmercer1/gpt-image-25-migration-notes-flare-for-throughput-sunburst-for-precision-196o" },
    { label: "CellCog : analyse", url: "https://cellcog.ai/blog/gpt-image-2-5-release-date/" },
    { label: "Orca Router", url: "https://www.orcarouter.ai/blog/gpt-image-2-5-flare-sunburst" },
    { label: "AiCybr Blog", url: "https://aicybr.com/blog/openai-gpt-image-2-5-flare-sunburst-api" }
  ]
category: 'dev-ia'
---

# GPT Image 2.5 : deux variantes Flare et Sunburst

Le 8 septembre 2026, OpenAI a lancé GPT Image 2.5, la nouvelle génération de son API de génération d'images. La particularité de cette version : elle se décline en **deux modèles API distincts**, `gpt-image-2.5-flare` et `gpt-image-2.5-sunburst`, chacun optimisé pour un usage différent.

## Flare : vitesse et volume

**Flare** est conçu pour la génération à débit élevé. OpenAI l'annonce comme offrant une qualité supérieure à GPT-Image-2 avec une **latence réduite de 50 %**. Il cible les cas d'usage à grande échelle : contenu créateur, social media, expériences produit, recherche visuelle, prototypage d'interface rapide et génération en volume.

Pour un développeur qui intègre de la génération d'images dans un workflow automatisé (fiches produits, illustrations de contenu, assets d'interface), Flare est le modèle par défaut.

## Sunburst : précision et contrôle éditorial

**Sunburst** est orienté qualité maximale et précision d'édition. Il est conçu pour les workflows créatifs premium où chaque détail compte : campagnes publicitaires, visuels produit de marque, montages photographiques exigeants.

Le différenciateur de Sunburst est sa précision lors des éditions successives — la cohérence entre les itérations d'un même sujet ou d'une même composition est meilleure que dans la version précédente.

## Amélioration communes aux deux modèles

Les deux variantes partagent des progrès sur la génération à partir de photos de référence :

- Les sujets familiers restent **plus reconnaissables** d'une transformation à l'autre
- L'éclairage et les textures sont **plus naturels**
- Le rendu de compositions stylisées à partir d'un sujet réel est amélioré

## Disponibilité et accès

Les deux modèles sont disponibles :

- **Dans ChatGPT** : sous le nom ChatGPT Images 2.5, pour tous les abonnés ChatGPT, ChatGPT Work et Codex
- **Via l'API OpenAI** : en appelant `gpt-image-2.5-flare` ou `gpt-image-2.5-sunburst`

Pour les intégrations existantes utilisant `gpt-image-2`, une migration vers `gpt-image-2.5-flare` est la voie recommandée par OpenAI pour obtenir une meilleure qualité à latence équivalente ou inférieure.
