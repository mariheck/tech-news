---
title: 'Copilot Studio : les agents computer-use en GA'
excerpt: 'Microsoft premier hyperscaler à atteindre la GA du computer use enterprise.'
summary: 'Microsoft rend les Computer Use Agents de Copilot Studio généralement disponibles dans toutes les géographies commerciales. OpenAI CUA et Claude Sonnet 4.5 sont les modèles GA, avec Key Vault, audit Purview et routing human-in-the-loop.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Microsoft Community Hub', url: 'https://techcommunity.microsoft.com/blog/copilot-studio-blog/computer-using-agents-in-microsoft-copilot-studio-are-now-generally-available/4519427' },
    { label: 'Microsoft Copilot Blog mai', url: 'https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/new-and-improved-computer-using-agents-a-new-workflows-experience-and-real-time-voice-experiences/' },
    { label: 'Digital Applied CUA guide', url: 'https://www.digitalapplied.com/blog/copilot-studio-computer-use-agents-ga-deep-dive' }
  ]
category: 'actus-ia'
---

# Copilot Studio : les agents computer-use en GA

Microsoft a rendu les **Computer Use Agents (CUA)** de Copilot Studio **généralement disponibles** le 13 mai 2026, dans toutes les géographies commerciales Power Platform. Microsoft devient ainsi le premier grand hyperscaler à atteindre la GA sur le computer use en production.

## Ce qu'est le computer use dans Copilot Studio

Un Computer Use Agent peut contrôler une interface graphique de logiciel comme le ferait un humain : clic sur des boutons, saisie dans des formulaires, navigation dans des menus, lecture d'écrans. Contrairement aux RPA traditionnelles (UiPath, Automation Anywhere) qui reposent sur des sélecteurs fragiles, les CUA de Copilot Studio utilisent la vision et le raisonnement du modèle pour s'adapter aux changements d'interface sans reconfiguration.

## Modèles disponibles en GA

| Modèle | Statut | Coût par step |
|--------|--------|---------------|
| OpenAI CUA | GA | 5 Copilot Credits |
| Claude Sonnet 4.5 | GA | 5 Copilot Credits |
| Claude Sonnet 4.6 | Expérimental | Non supporté en prod |
| Claude Opus 4.6 | Expérimental | Non supporté en prod |

Les modèles expérimentaux permettent de tester des capacités plus récentes mais ne bénéficient pas du SLA de production.

## Fonctionnalités de sécurité enterprise

La GA s'accompagne d'un ensemble de contrôles destinés aux équipes sécurité :

- **Azure Key Vault** : les credentials utilisés par les agents pour s'authentifier aux applications cibles sont stockés dans Key Vault, pas dans la configuration de l'agent.
- **Microsoft Purview audit logging** : chaque action des agents est tracée dans Purview, avec l'identité de l'opérateur, la cible et le résultat.
- **Human-in-the-loop** : les workflows peuvent inclure des points de validation humaine avant l'exécution d'étapes sensibles.
- **Windows 365 Cloud PC** : les agents peuvent opérer sur des pools de Cloud PC isolés plutôt que sur les postes physiques des utilisateurs.

## Disponibilité géographique

Le déploiement couvre toutes les régions commerciales Power Platform : États-Unis, Europe, Asie-Pacifique, Émirats arabes unis. Un déploiement vers les clouds gouvernementaux est prévu pour le second semestre 2026.

## Contexte concurrentiel

La GA de Microsoft devance Anthropic (toujours en beta sur son computer use) et Google (en preview). Dans l'écosystème enterprise, la combinaison Copilot Studio + Power Platform + Azure donne à Microsoft un avantage d'intégration significatif pour les workflows d'automatisation qui touchent à des logiciels métier existants.

## Ce que ça change pour les développeurs frontend

Pour les équipes web, l'intérêt est indirect mais réel : les CUA peuvent automatiser des opérations répétitives dans les outils de gestion (Jira, Confluence, SharePoint) ou des workflows de QA sur des applications web, sans écrire d'intégration API ni de scripts RPA fragiles. La barrière d'entrée est celle de Copilot Studio, pas du code.
