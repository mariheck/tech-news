---
title: "SubQ 1M : le premier LLM sans architecture transformer"
excerpt: "Subquadratic lance un LLM à 12M tokens de contexte sans attention quadratique."
summary: "La startup Subquadratic présente SubQ 1M-Preview, premier LLM fondé sur une architecture non-transformer (SSA), capable de traiter 12 millions de tokens de contexte à une fraction du coût des modèles frontier. Levée de 29 M$ à 500 M$ de valorisation."
date: 2026-05-04T00:00:00Z
reading_time: 3
sources:
  [
    { label: 'Subquadratic - Introducing SubQ', url: 'https://subq.ai/introducing-subq' },
    { label: 'SiliconAngle', url: 'https://siliconangle.com/2026/05/05/subquadratic-launches-29m-bring-12m-token-context-windows-ai/' }
  ]
category: 'actus-ia'
---

# SubQ 1M : le premier LLM sans architecture transformer

Le 5 mai 2026, la startup **Subquadratic** a présenté **SubQ 1M-Preview**, qu'elle positionne comme le premier grand modèle de langage construit sur une architecture entièrement sous-quadratique — abandonnant la structure transformer qui a dominé le domaine depuis 2017.

## Le problème avec l'attention quadratique

Dans les architectures transformer classiques, la complexité de calcul de l'attention croît de manière **quadratique** avec la longueur du contexte : doubler le contexte quadruple le coût de calcul. C'est pourquoi les fenêtres de contexte étendues (1M+ tokens) restent coûteuses et lentes même pour les modèles frontier.

## SSA : Subquadratic Sparse Attention

Subquadratic a développé une architecture propriétaire baptisée **SSA (Subquadratic Sparse Attention)**. Son principe : pour chaque token de requête, l'attention sélectionne un **sous-ensemble sparse de positions** dans le contexte, basé sur le contenu — plutôt que d'évaluer toutes les paires token-à-token.

Le résultat : la complexité de calcul évolue de manière **linéaire** avec la longueur du contexte, pas quadratique.

**Chiffres revendiqués par Subquadratic :**
- ~52× plus rapide que FlashAttention à 1 million de tokens
- ~1 000× de réduction du calcul d'attention par rapport aux modèles frontier à contexte maximal
- Fenêtre de contexte native de **12 millions de tokens** au lancement

## Positionnement tarifaire

Le pricing de SubQ 1M-Preview vise délibérément le segment long-contexte : Subquadratic revendique un coût approximativement **5 fois inférieur** à celui de Claude Opus ou GPT-5.5 pour les workloads à contexte étendu.

Cette différentiation tarifaire cible les cas d'usage où les modèles frontier sont prohibitifs : analyse de grandes bases de code, traitement de longs documents légaux ou médicaux, pipelines RAG sur corpus volumineux.

## Financement et ambitions

La société a annoncé simultanément une **levée de 29 millions de dollars** en seed round, à une valorisation d'environ 500 millions de dollars. Parmi les investisseurs figurent Justin Mateen (cofondateur de Tinder) et Javier Villamizar, ancien de SoftBank et investisseur précoce chez Anthropic, OpenAI et Stripe.

Le CEO Justin Dangel a déclaré : *« Les transformers ont défini la dernière décennie de l'IA. »* — une formulation qui résume sans détour l'ambition de repositionner le paradigme dominant.

## À surveiller

SubQ 1M est disponible en **preview** — ce n'est pas encore une version de production stable. L'architecture SSA devra prouver sa robustesse sur des benchmarks variés et dans des conditions de production réelles. Mais l'approche technique est suffisamment différenciée pour mériter attention, notamment si les revendications de performance se confirment à l'échelle.
