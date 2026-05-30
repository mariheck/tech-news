---
title: "Google Antigravity 2.0 : l'IDE agentique selon Google"
excerpt: 'Desktop app, CLI, SDK multi-agents : Google lance sa réponse à Cursor et Claude Code.'
summary: 'Antigravity 2.0 est une plateforme agent-first avec desktop app, CLI, SDK multi-agents et plan AI Ultra à $100/mois. La Gemini API lance en parallèle ses Managed Agents en preview : un POST suffit pour déployer un agent Linux isolé avec outils.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'TechCrunch – Antigravity 2.0',
      url: 'https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool-at-io-2026/'
    },
    {
      label: 'Marktechpost – Antigravity SDK',
      url: 'https://www.marktechpost.com/2026/05/19/google-launches-antigravity-2-0-at-i-o-2026-a-standalone-agent-first-platform-with-cli-sdk-managed-execution-and-enterprise-support/'
    },
    {
      label: 'Managed Agents – Gemini API',
      url: 'https://blog.google/innovation-and-ai/technology/developers-tools/managed-agents-gemini-api/'
    },
    {
      label: 'Winbuzzer – Managed Agents',
      url: 'https://winbuzzer.com/2026/05/20/google-opens-managed-agents-preview-in-gemini-api-xcxwbn/'
    }
  ]
category: 'dev-ia'
---

# Google Antigravity 2.0 : l'IDE agentique selon Google

Google a lancé deux produits complémentaires le 19 mai à l'I/O 2026 : **Antigravity 2.0**, une plateforme de développement agentique standalone, et les **Managed Agents** dans la Gemini API — un endpoint qui déploie un agent prêt à l'emploi en un seul appel. Les deux convergent sur le même objectif : rendre les workflows multi-agents aussi simples à déployer que des fonctions ordinaires.

## Antigravity 2.0 : la plateforme

Antigravity 2.0 est une application desktop et un outil CLI entièrement repensés autour de l'orchestration multi-agents. Ce n'est plus un addon à un IDE existant : c'est une plateforme autonome avec son propre SDK et un support entreprise.

Les fonctionnalités clés :

- **Spawn et coordination de sous-agents en parallèle** : lancer plusieurs agents simultanément, chacun avec son propre contexte et ses propres outils, orchestrés par un agent supervisor
- **Tâches en arrière-plan** : planifier des exécutions différées sans garder une session active
- **Antigravity SDK** : API programmatique pour intégrer l'orchestration agentique dans des pipelines existants
- **Support entreprise** disponible dès le lancement

La nouvelle structure tarifaire introduit un plan **AI Ultra à $100/mois** — soit 5× les limites d'usage du plan Pro. Google a également annoncé passer le plan AI Ultra de $250 à $100, une baisse de prix directement liée à l'amélioration des performances de Gemini 3.5 Flash.

## Managed Agents dans la Gemini API : un POST, un agent

En parallèle, Google ouvre les **Managed Agents** en public preview. Le principe : un seul appel POST à l'endpoint `/interactions` de la Gemini API instancie un agent Gemini 3.5 Flash dans un sandbox Linux isolé, avec trois outils préconfigurés — exécution de code, recherche web, et fetch d'URL.

```
POST https://generativelanguage.googleapis.com/v1/managed-agents/interactions
```

L'agent par défaut est `antigravity-preview-05-2026`. La facturation est simple : le compute est gratuit en preview, les tokens sont facturés aux tarifs standard Flash ($1,50 / $9,00 par million). Pas d'orchestration à écrire, pas de compute à provisionner, pas d'executor à configurer.

## Positionnement face à la concurrence

L'annonce positionne Google clairement face à Claude Code (Anthropic) et Cursor sur le segment des outils de développement agentiques. Quelques différences notables :

**Points forts d'Antigravity** : intégration native avec l'ensemble de l'écosystème Google (Android Studio, AI Studio, Gemini API), modèle Flash en backend pour des boucles plus rapides, accès unifié desktop + CLI + API.

**Ce qui reste à prouver** : la maturité en production face à des outils comme Claude Code, qui s'appuient sur des déploiements enterprise à grande échelle (Spotify, Delivery Hero, KPMG). L'annonce d'Antigravity 2.0 intervient exactement au moment où Anthropic tient sa propre conférence développeurs à Londres — la semaine a le mérite d'être claire sur les intentions concurrentielles des deux camps.
