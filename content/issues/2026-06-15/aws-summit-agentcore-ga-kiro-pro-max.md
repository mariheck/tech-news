---
title: 'AWS Summit NY : AgentCore en GA, Kiro Pro Max'
excerpt: "Amazon lance l'infra de production pour agents IA et étoffe Kiro."
summary: "Au AWS Summit New York du 17 juin, Amazon rend AgentCore Harness généralement disponible : une plateforme clé en main pour déployer des agents IA en production en minutes. Kiro, l'IDE agentique de Spec, annonce un tier Pro Max avec modèles frontier et accès mobile."
date: 2026-06-15T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'AWS Blog – AgentCore Harness GA',
      url: 'https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-harness-is-now-generally-available-go-from-idea-to-production-grade-agent-in-minutes/'
    },
    {
      label: 'AWS – Top annonces Summit NY',
      url: 'https://aws.amazon.com/blogs/aws/top-announcements-of-the-aws-summit-in-new-york-2026/'
    },
    {
      label: 'AWS Weekly Roundup – 15 juin',
      url: 'https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-finops-agent-in-preview-gemma-4-on-bedrock-kiro-pro-max-and-more-june-15-2026/'
    },
    {
      label: 'TechTimes – Summit NY Kiro',
      url: 'https://www.techtimes.com/articles/318546/20260617/aws-summit-new-york-2026-kiro-brings-aerospace-spec-standards-ai-coding.htm'
    },
    {
      label: 'The Register – Kiro agentic DevOps',
      url: 'https://www.theregister.com/devops/2026/06/17/aws-hypes-continuous-agentic-devops-puts-kiro-in-your-pocket/5256365'
    }
  ]
category: dev-ia
---

# AWS Summit NY : AgentCore en GA, Kiro Pro Max

L'AWS Summit New York 2026, tenu le 17 juin au Javits Center, a été centré sur une question : comment passer du prototypage d'agents IA à leur déploiement en production fiable ? Les deux grandes annonces — la disponibilité générale d'**Amazon Bedrock AgentCore Harness** et le lancement de **Kiro Pro Max** — apportent deux réponses complémentaires.

## Amazon Bedrock AgentCore Harness en GA

AgentCore Harness est désormais généralement disponible. L'idée centrale : fournir en deux appels API tout ce qu'un agent IA nécessite pour fonctionner en production.

À partir d'une définition déclarative (modèle, outils, skills, instructions), AgentCore instancie automatiquement :
- Un **environnement sandboxé** avec système de fichiers et shell
- Une **mémoire persistante** entre les sessions
- Des **skills managés** incluant désormais une recherche web native
- De l'**observabilité** intégrée avec traçage des interactions

**Découplage modèle/agent.** AgentCore sépare la définition de l'agent de son modèle d'inférence. Il est possible de changer de modèle en cours de session — planification sur un modèle, exécution de code sur un autre — sans toucher à la logique de l'agent ni perdre le contexte.

**AgentCore Evaluations.** Le GA inclut un système d'évaluation via LLM-as-judge (helpfulness, faithfulness, safety) exécutable en temps réel, à la demande ou en batch sur des traces historiques. Des simulations avec utilisateurs synthétiques permettent de stress-tester les agents avant mise en production.

**Web Search sur AgentCore.** Un outil de recherche web est désormais intégré, exploitant la même infrastructure que Quick, Kiro et Alexa+, avec des résultats re-rankés nativement dans l'environnement AWS.

## Kiro Pro Max et l'IDE agentique sur mobile

Lancé internationalement en mai 2026, Kiro — l'IDE spec-driven qui a remplacé Amazon Q Developer — franchit une nouvelle étape avec l'annonce de **Kiro Pro Max** au Summit.

Le tier Pro Max introduit des limites d'usage étendues, l'accès aux modèles frontier les plus récents et de nouvelles capacités agentiques pour les équipes de développement.

La nouveauté la plus remarquée : une **application iOS native de Kiro** (en preview gated), permettant de démarrer, surveiller, piloter et interagir avec des sessions Kiro depuis un téléphone. Kiro est ainsi le premier IDE agentique à proposer une surface mobile dédiée pour du vrai travail d'ingénierie, au-delà de la simple visualisation.

**L'approche Spec-First.** Ce qui distingue Kiro dans l'écosystème : tout développement commence par la génération automatique de trois documents structurés (`requirements.md`, `design.md`, `tasks.md`) avant que la moindre ligne de code soit produite. Cette approche, inspirée des standards aérospatiaux formels (notation EARS), cherche à éviter la dérive architecturale qui affecte les agents de code purement chat-driven.

Plus de 2 700 développeurs de Southwest Airlines utilisent déjà Kiro pour moderniser Southwest.com, selon les chiffres partagés au Summit.

## Ce que ça signifie pour les équipes frontend

Pour un développeur frontend qui intègre de l'IA dans son workflow, ces annonces signifient concrètement que l'infrastructure pour passer d'un prototype agent à un déploiement production scalable est maintenant standardisée côté AWS. Le modèle « harness-first » d'AgentCore réduit considérablement le travail d'orchestration que les équipes devaient implémenter manuellement.

La convergence de Kiro, Claude Code, GitHub Copilot et d'autres vers des approches spec-first suggère que 2026 marque la fin de l'ère du « vibe coding » non structuré pour les workflows professionnels.
