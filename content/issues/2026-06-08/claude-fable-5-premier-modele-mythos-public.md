---
title: 'Claude Fable 5, premier modèle Mythos au grand public'
excerpt: 'Anthropic dévoile Fable 5, la première IA Mythos-class publique.'
summary: "Le 9 juin, Anthropic lance Claude Fable 5 : son premier modèle Mythos-class accessible au public, avec 80,3 % sur SWE-Bench Pro, une fenêtre de contexte d'un million de tokens et des capacités agentiques inédites pour un modèle grand public."
date: 2026-06-08T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'Anthropic – Annonce officielle',
      url: 'https://www.anthropic.com/news/claude-fable-5-mythos-5'
    },
    {
      label: 'TechCrunch',
      url: 'https://techcrunch.com/2026/06/09/anthropics-claude-fable-5-is-a-version-of-mythos-the-public-can-access-today/'
    },
    {
      label: 'CNBC',
      url: 'https://www.cnbc.com/2026/06/09/anthropic-mythos-claude-fable-5.html'
    },
    {
      label: 'Vellum AI – Benchmarks',
      url: 'https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained'
    }
  ]
category: actus-ia
---

# Claude Fable 5, premier modèle Mythos au grand public

Le 9 juin 2026, Anthropic a lancé **Claude Fable 5**, le premier modèle de sa nouvelle classe « Mythos » à être rendu accessible au grand public. C'est un jalon majeur pour la compagnie, qui positionne ce modèle au-dessus de sa gamme Opus et le présente comme son outil le plus puissant jamais mis à disposition des développeurs.

## Un modèle de la classe Mythos rendu « sûr pour le grand public »

La classe Mythos est le niveau supérieur de la nomenclature interne d'Anthropic. Jusqu'ici, seuls des partenaires gouvernementaux sélectionnés avaient eu accès à des modèles de cette famille via le programme Project Glasswing. Fable 5 représente la version que l'équipe a jugée suffisamment sécurisée pour une diffusion large, grâce à un ensemble de garde-fous applicatifs qui bloquent les réponses dans moins de 5 % des sessions.

## Performances de premier plan

Les benchmarks publiés le jour du lancement sont éloquents :

- **SWE-Bench Pro : 80,3 %**, soit environ 11 points au-dessus du modèle suivant dans ce classement — un écart plus grand que celui qui sépare ce second modèle de Gemini 3.1 Pro.
- Performances de référence en raisonnement multidisciplinaire, vision, recherche scientifique et analyse financière agentique.

Pour comparaison, Claude Opus 4.8, le modèle phare précédent, affichait environ 69 % sur SWE-Bench Pro.

## Fenêtre de contexte et capacités agentiques

Fable 5 prend en charge une **fenêtre de contexte d'un million de tokens**, utilisable sur des projets de grande envergure, des bases de code entières ou des documents longs. La nouveauté la plus marquante est sa capacité à exécuter des tâches longues durée de façon autonome : le modèle conserve le fil de raisonnement sur des millions de tokens et peut maintenir des notes internes pour améliorer ses propres sorties au fil d'une session.

Anthropic le qualifie de modèle conçu pour du « long-horizon agentic work » : tâches multi-étapes, gestion d'erreurs automatique, collaboration sur des workflows complexes sans supervision constante.

## Disponibilité et tarification

Fable 5 était disponible dès le 9 juin sur :

- L'API Claude (clé API directe)
- AWS Bedrock
- Microsoft Azure AI Foundry
- Snowflake Cortex AI

**Prix :** 10 $ par million de tokens en entrée et 50 $ par million de tokens en sortie — soit le double d'Opus 4.8 (5 $/25 $).

Du 9 au 22 juin, Fable 5 était inclus sans surcoût dans les plans Pro, Max, Team et Enterprise à siège. À partir du 23 juin, son utilisation sur ces plans nécessite des crédits d'usage supplémentaires.

## Claude Mythos 5, la version restreinte

Simultanément, Anthropic a rendu disponible **Claude Mythos 5** pour les partenaires de Project Glasswing et des chercheurs sélectionnés en biologie. Ce modèle sans garde-fous grand public offre des performances encore supérieures, mais son accès reste strictement contrôlé.

## Ce que ça change pour les développeurs frontend et les équipes IA

Pour un développeur habitué à orchestrer des agents ou à automatiser des revues de code, Fable 5 représente un saut qualitatif significatif : la capacité à analyser de très grandes bases de code en un seul contexte, à corriger des bugs complexes sur plusieurs fichiers, et à maintenir la cohérence sur des tâches longues durée sans rechargements manuels du contexte.
