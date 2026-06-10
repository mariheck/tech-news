---
title: "Microsoft Build : les modèles MAI, sans données OpenAI"
excerpt: "MAI-Thinking-1 et MAI-Code-1-Flash : Microsoft s'émancipe."
summary: "À Microsoft Build 2026, Microsoft annonce sa famille MAI : sept modèles maison, entraînés sans données OpenAI. MAI-Thinking-1 (raisonnement) et MAI-Code-1-Flash (coding, déployé dans Copilot) réduisent la dépendance stratégique et les coûts."
date: 2026-06-01T00:00:00Z
reading_time: 6
sources:
  [
    { label: "CNBC – Microsoft MAI models", url: "https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html" },
    { label: "Microsoft Blog – Build 2026", url: "https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-ai-announcements/" }
  ]
category: 'actus-ia'
---

# Microsoft Build : les modèles MAI, sans données OpenAI

Microsoft Build 2026 s'est tenu à San Francisco les 2 et 3 juin. L'annonce la plus structurante pour l'industrie : Microsoft présente sa famille de modèles **MAI** — sept modèles d'IA maison, développés indépendamment d'OpenAI. Une rupture stratégique majeure pour une entreprise qui a investi plus de 13 milliards de dollars dans OpenAI.

## MAI-Thinking-1 : le modèle de raisonnement

**MAI-Thinking-1** est le fleuron de la famille. Ses caractéristiques :

- **35 milliards de paramètres actifs** (architecture MoE)
- **Fenêtre de contexte de 256 000 tokens**
- **Raisonnement en chaîne de pensée** avec capacités multi-étapes
- **Entraîné sans données propriétaires OpenAI** — c'est le point central que Microsoft met en avant

Sur le benchmark **SWE Bench Pro**, Microsoft annonce que MAI-Thinking-1 rivalise avec Claude Opus 4.6 de la famille Claude 4.x. Les chiffres exacts n'ont pas été publiés au moment de l'annonce, mais la revendication positionne explicitement le modèle dans la catégorie frontier.

MAI-Thinking-1 est disponible via Azure AI Foundry pour les entreprises.

## MAI-Code-1-Flash : le modèle de coding dans Copilot

**MAI-Code-1-Flash** est le modèle optimisé pour le code. Il est plus compact (15 milliards de paramètres) et conçu pour être rapide et économique :

- Optimisé pour la complétion de code, la génération et l'explication
- **Déployé sur tous les plans GitHub Copilot** dès le 2 juin — Pro, Pro+, Business et Enterprise
- Priorité à la latence faible pour l'expérience inline en IDE

Pour les développeurs qui utilisent Copilot quotidiennement, MAI-Code-1-Flash est maintenant le modèle qui s'exécute derrière leurs suggestions de code, sans configuration supplémentaire.

## La famille MAI au complet

Les deux modèles annoncés au public sont les vitrines d'une famille plus large. Microsoft évoque sept modèles MAI au total, couvrant différentes modalités et cas d'usage. Les noms et détails des cinq autres n'ont pas encore été publiés au moment de cette conférence.

## Pourquoi c'est structurant

### Réduction de la dépendance à OpenAI

La relation Microsoft-OpenAI est à la fois un partenariat et une dépendance. En développant ses propres modèles, Microsoft :

1. **Réduit les coûts** — chaque inférence via GPT-4o ou GPT-5 a un prix. MAI-Code-1-Flash dans Copilot signifie des millions d'inférences quotidiennes qui ne transitent plus par l'API OpenAI.
2. **Reprend le contrôle du roadmap** — Microsoft n'est plus soumis aux délais de release d'OpenAI pour faire évoluer ses produits.
3. **Diversifie le risque** — si la relation avec OpenAI évolue, Microsoft dispose maintenant d'une alternative viable.

### Implications pour l'écosystème

Pour les utilisateurs de GitHub Copilot, l'implication immédiate est positive : plus de modèles disponibles en rotation signifie des latences potentiellement meilleures et une amélioration continue indépendante des cycles de release OpenAI.

Pour l'industrie, Microsoft rejoint Google (Gemini), Anthropic (Claude) et Amazon (Nova) dans le camp des grandes entreprises tech qui contrôlent leurs propres modèles frontières. OpenAI perd un peu plus son statut de fournisseur incontournable.

## Les autres annonces notables de Build

Build 2026 n'a pas été seulement la conférence des modèles MAI. Le GitHub Copilot SDK est passé en disponibilité générale le même jour, et l'application Copilot a été étendue en technical preview à tous les abonnés. Ces annonces font l'objet d'articles dédiés dans cette édition.
