---
title: "Gemini 3.7 Flash : Google mise sur le coding et les agents"
excerpt: "Un Flash plus rapide, plus fort — et deux fois moins cher"
summary: "Google lance Gemini 3.7 Flash le 13 août : +33 % sur DeepSWE v1.1, première place Code Arena WebDev. Conçu pour le coding et les agents, il arrive à mi-prix jusqu'en 2027 et s'intègre immédiatement dans GitHub Copilot."
date: 2026-08-10T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Google DeepMind – Model Card", url: "https://deepmind.google/models/model-cards/gemini-3-7-flash/" },
    { label: "SiliconAngle – lancement", url: "https://siliconangle.com/2026/08/13/google-launches-gemini-3-7-flash-coding-ai-agent-projects/" },
    { label: "VentureBeat – tarifs et benchmarks", url: "https://venturebeat.com/technology/googles-gemini-3-7-flash-targets-coding-and-agents-with-a-50-introductory-price-cut" },
    { label: "Axios – contexte de sortie", url: "https://www.axios.com/2026/08/13/google-gemini-37-flash" },
    { label: "GitHub Changelog – Copilot", url: "https://github.blog/changelog/2026-08-13-gemini-3-7-flash-is-now-available-in-github-copilot/" },
    { label: "9to5Google – lancement", url: "https://9to5google.com/2026/08/13/gemini-3-7-flash-launch/" }
  ]
category: 'actus-ia'
---

# Gemini 3.7 Flash : Google mise sur le coding et les agents

Le 13 août 2026, Google DeepMind a lancé **Gemini 3.7 Flash**, troisième itération de la série Flash en moins de deux mois. Le modèle se positionne explicitement sur deux marchés prioritaires : l'assistance au code et les workflows agentiques multi-étapes. Et son arrivée s'accompagne d'un tarif de lancement réduit de moitié, valable jusqu'à fin 2026.

## Des benchmarks en forte progression

Google ne cache pas les chiffres : la progression entre Gemini 3.6 Flash et 3.7 Flash est substantielle sur les benchmarks orientés coding.

| Benchmark | Gemini 3.6 Flash | Gemini 3.7 Flash | Progression |
|-----------|-----------------|-----------------|-------------|
| DeepSWE v1.1 | 49,0 % | 65,3 % | +33 % |
| FrontierCode 1.1 Main | 34,4 % | 43,6 % | +27 % |
| Terminal-Bench 2.1 | n.c. | 85,8 % | — |
| Code Arena WebDev (Elo) | — | 1 588 | 1ère place |

Sur Code Arena WebDev — le benchmark basé sur des évaluateurs humains pour les tâches de développement web — Gemini 3.7 Flash prend la première position avec 1 588 Elo, devant Claude Sonnet 5 (1 541), Muse Spark 1.2 (1 535) et GPT-5.6 Terra (1 523).

Logan Kilpatrick, responsable produit d'AI Studio chez Google, a attribué ces gains à des « améliorations algorithmiques des équipes de Google DeepMind », sans entrainement from scratch. L'équipe a opéré des ajustements ciblés à partir des retours utilisateurs depuis la version 3.6.

## Conçu pour les agents et les développeurs

La model card de DeepMind positionne Gemini 3.7 Flash comme un modèle « fast and efficient workhorse for coding, web development, knowledge-based tasks and agent workflows ». Contrairement aux modèles de raisonnement lourd, il optimise la latence et le débit — deux paramètres critiques dans les boucles agentiques où plusieurs appels se succèdent rapidement.

Pour un frontend developer qui utilise des workflows agentiques (génération d'UI, tests automatiques, refactoring guidé par des agents), ce profil est directement pertinent : un modèle rapide et fort en code web permet de déployer des agents sans sacrifier le temps de réponse.

## Tarification : moitié prix jusqu'à fin 2026

Google introduit une tarification d'introduction agressive :

| Période | Input ($/M tokens) | Output ($/M tokens) |
|---------|-------------------|---------------------|
| Jusqu'au 31/12/2026 | $0,75 | $3,75 |
| À partir du 01/01/2027 | $1,50 | $7,50 |

Les tarifs doublement à partir de janvier 2027, mais l'incitation à adopter le modèle dès maintenant est claire. Pour les équipes qui construisent des pipelines d'IA à coût maîtrisé, la fenêtre introductoire est une opportunité réelle.

## Disponible immédiatement dans GitHub Copilot

Le même 13 août, GitHub a annoncé que Gemini 3.7 Flash est disponible dans **GitHub Copilot**, en déploiement progressif sur tous les plans (Pro, Business, Enterprise). Les utilisateurs peuvent le sélectionner dans le modèle picker de l'extension VS Code, JetBrains et dans l'interface web de Copilot Chat.

Pour les équipes déjà sur Copilot, tester Gemini 3.7 Flash sur des tâches orientées web (génération de composants React, débogage CSS, revue de code TypeScript) ne nécessite aucune migration.

## Rythme de publication et signaux du marché

Trois versions de Gemini Flash en moins de deux mois (3.5, 3.6, 3.7) suggèrent une stratégie de déploiement incrémental rapide, à la manière d'un release train. Pour les développeurs, cela signifie des améliorations fréquentes mais aussi une nécessité de réévaluer régulièrement les modèles utilisés dans leurs workflows.

La domination de Gemini 3.7 Flash sur Code Arena WebDev est un signal fort pour l'usage frontend en particulier. C'est la première fois qu'un modèle Flash dépasse les modèles "lourds" des autres labs sur ce benchmark spécifique.
