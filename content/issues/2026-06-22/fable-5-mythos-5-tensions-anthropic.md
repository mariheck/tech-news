---
title: "Fable 5 et Mythos 5 : une semaine sous tension"
excerpt: "Restriction gouvernementale, retrait des plans et levée partielle"
summary: "Le 23 juin, Fable 5 quitte les plans Pro/Max/Team d'Anthropic (crédits requis désormais). Le 26 juin, le Secrétaire au Commerce américain lève partiellement la restriction sur Mythos 5 pour certaines entités — Fable 5 reste bloqué pour les ressortissants étrangers."
date: 2026-06-22T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Anthropic – Fable/Mythos statement", url: "https://www.anthropic.com/news/fable-mythos-access" },
    { label: "CNBC – Anthropic Fable Mythos ban", url: "https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" },
    { label: "Bloomberg – Anthropic Fable Mythos", url: "https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5" },
    { label: "Jerusalem Post – Mythos 5 retour", url: "https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900712" }
  ]
category: 'actus-ia'
---

# Fable 5 et Mythos 5 : une semaine sous tension

La semaine du 22 juin a apporté deux développements majeurs dans le dossier Fable 5 / Mythos 5 d'Anthropic, qui tient en haleine l'industrie depuis le 12 juin. Pour comprendre les événements de la semaine, voici le contexte.

## Rappel : la directive d'export control du 12 juin

Le 12 juin, Anthropic a reçu une directive gouvernementale américaine ordonnant la suspension immédiate de l'accès à **Fable 5** et **Mythos 5** pour tout ressortissant étranger, qu'il soit situé aux États-Unis ou à l'étranger — y compris les employés étrangers d'Anthropic eux-mêmes. La raison invoquée : le gouvernement aurait eu connaissance d'une méthode de contournement (jailbreak) de Fable 5, consistant à demander au modèle de lire une codebase et de corriger ses failles.

Anthropic a mis les modèles hors ligne pour tous les clients afin d'assurer la conformité, tout en exprimant publiquement son désaccord avec la décision.

## 23 juin : Fable 5 retiré des plans d'abonnement

Le 23 juin 2026, Anthropic a procédé à un changement tarifaire distinct de la directive export : **Fable 5 a été retiré des plans Pro, Max, Team et Enterprise basés sur les sièges**. Jusqu'au 22 juin, Fable 5 était inclus dans ces abonnements pendant une période promotionnelle. À partir du 23 juin, utiliser Fable 5 (pour les utilisateurs américains auxquels il est accessible) nécessite des crédits d'usage supplémentaires.

Ce retrait est indépendant de la directive export — il concerne les utilisateurs américains non soumis à la restriction des ressortissants étrangers.

## 26 juin : Mythos 5 partiellement relevé, Fable 5 toujours bloqué

Le 26 juin, le Secrétaire au Commerce Howard Lutnick a envoyé une lettre au directeur de l'informatique d'Anthropic qui révise partiellement la directive initiale, mais **uniquement pour Mythos 5, pas pour Fable 5** :

- **Mythos 5** : aucune licence n'est désormais requise pour l'export, la réexportation ou le transfert vers les entités listées dans l'Annexe A et les employés étrangers d'Anthropic. Mythos 5 redevient accessible pour ces catégories.
- **Fable 5** : reste soumis à la directive initiale. Les ressortissants étrangers n'y ont toujours pas accès.

La lettre représente un assouplissement significatif pour Mythos 5, dont l'utilisation était la plus répandue dans les workflows d'ingénierie en entreprise — notamment via des intégrations API. Fable 5, le modèle phare public, reste bloqué sans calendrier de levée annoncé.

## Ce que ça signifie pour les équipes

Pour les équipes internationales qui travaillaient avec des modèles Anthropic :

- **Mythos 5 (claude-opus-4-8)** est de nouveau disponible via l'API pour les entités de l'Annexe A et les employés étrangers d'Anthropic. Les intégrations peuvent être réactivées.
- **Fable 5 (claude-fable-5)** reste inaccessible pour les ressortissants étrangers. Les pipelines qui s'appuyaient sur ce modèle doivent basculer sur Mythos 5 ou sur d'autres modèles.

La situation reste volatile. Anthropic a indiqué suivre l'évolution réglementaire de près, et le dossier reste ouvert.

## Un signal fort sur la régulation des modèles de pointe

Cette séquence illustre une tendance de fond : les modèles IA de frontière sont de plus en plus perçus comme des actifs stratégiques par les gouvernements, au même titre que des technologies à double usage. La semaine d'OpenAI avec la preview limitée de GPT-5.6 Sol (accès restreint à ~20 entreprises approuvées par le gouvernement) confirme cette trajectoire. La question de qui peut accéder à quels modèles, dans quelles conditions géographiques, devient un enjeu opérationnel réel pour les équipes qui développent des produits IA.
