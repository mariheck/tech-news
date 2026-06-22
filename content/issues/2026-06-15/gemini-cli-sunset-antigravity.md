---
title: 'Gemini CLI éteint : bienvenue Antigravity CLI'
excerpt: 'Google force la migration vers un CLI Go fermé après 6 000 contributions.'
summary: "Le 18 juin, Google éteint Gemini CLI pour les utilisateurs grand public et impose la migration vers Antigravity CLI, un remplacement Go closed-source sans parité de fonctionnalités au lancement. La décision irrite la communauté qui a contribué 6 000 PRs à l'outil open source."
date: 2026-06-15T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'Google Developers Blog – Migration',
      url: 'https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/'
    },
    {
      label: 'The Register – Gemini CLI sunset',
      url: 'https://www.theregister.com/ai-ml/2026/05/20/bye-bye-gemini-cli-google-nudges-devs-toward-antigravity/5243605'
    },
    {
      label: 'Groundy – Migration forcée',
      url: 'https://groundy.com/articles/google-sunsets-gemini-cli-on-june-18-forced-migration-to-antigravity-cli-breaks-existing-automation/'
    },
    {
      label: 'Hacker News – Discussion',
      url: 'https://news.ycombinator.com/item?id=48196867'
    }
  ]
category: dev-ia
---

# Gemini CLI éteint : bienvenue Antigravity CLI

Le 18 juin 2026, Google a officiellement mis fin à **Gemini CLI** pour les utilisateurs de Google AI Pro, Ultra et les utilisateurs gratuits de Gemini Code Assist for Individuals. Le remplacement imposé : **Antigravity CLI**, une réécriture en Go qui arrive sans parité de fonctionnalités avec le produit qu'elle remplace.

## Ce qui s'arrête

Gemini CLI était disponible depuis moins d'un an. Construit en TypeScript, open source, il proposait 1 000 requêtes par jour gratuites et avait engrangé plus de 6 000 pull requests fusionnées de contributeurs externes, que Google citait régulièrement comme preuve du succès du projet.

Le 18 juin, les requêtes cessent d'être servies pour les tiers grand public. Les organisations utilisant Gemini Code Assist via une licence Standard ou Enterprise, ainsi que Gemini Code Assist for GitHub via Google Cloud, ne sont pas affectées.

## Ce qu'Antigravity CLI apporte — et ce qu'il n'a pas encore

Antigravity CLI conserve les fonctionnalités jugées critiques : Agent Skills, Hooks, Subagents et Extensions (renommées « Antigravity plugins »). Il s'intègre avec le modèle Gemini 3.5 Flash comme défaut et s'articule autour d'une architecture asynchrone native.

Ce qu'il ne propose pas au lancement :
- **Pas de parité de fonctionnalités** avec Gemini CLI, selon la documentation officielle
- **Modèle de quota différent** : la limite de 1 000 requêtes/jour disparaît au profit d'un plafond hebdomadaire basé sur les ressources de calcul consommées — moins prévisible pour les automations
- **Closed-source** : la décision de fermer le code source d'un outil bâti sur 6 000 contributions communautaires a déclenché de vives critiques

## La polémique open source

Le geste a particulièrement choqué la communauté : Google a accepté ces milliers de contributions, s'est appuyé sur leur existence pour valoriser l'outil, puis a remplacé l'outil open source par un produit fermé pour les utilisateurs non-enterprise. Des commentaires sur Hacker News et les forums de développeurs pointent une rupture de contrat implicite avec les contributeurs.

Generative Labs, dans un article intitulé « Google Killed Gemini CLI in Six Months. That's the Half-Life Now. », soulève une question de fond : à quelle cadence les outils d'IA de développement vont-ils être remplacés, et quel investissement cela représente-t-il pour les équipes qui les adoptent ?

## Ce que ça implique pour les développeurs

Pour ceux qui avaient intégré Gemini CLI dans des scripts ou des pipelines CI/CD, la migration est obligatoire et potentiellement cassante. Le passage à un modèle de quota hebdomadaire sur le compute plutôt que journalier sur les requêtes rend plus difficile la prédiction des coûts d'usage pour des workflows automatisés.

Cette situation renforce le débat sur la fiabilité à long terme des outils d'IA de développement et la nécessité de construire des abstractions découplées du fournisseur sous-jacent.
