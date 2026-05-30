---
title: 'Vercel AI SDK 6 : agents composables et human-in-the-loop'
excerpt: 'Agents réutilisables, contrôle humain via un flag, intégration LangChain.'
summary: 'AI SDK 6 publie la spécification LM v3 avec des agents composables réutilisables en UI, jobs ou API, le contrôle human-in-the-loop via un simple flag needsApproval, et une intégration LangChain réécrite. Version rétrocompatible.'
date: 2026-05-11T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'Vercel AI SDK 6 blog', url: 'https://vercel.com/blog/ai-sdk-6' },
    { label: 'GitHub vercel/ai releases', url: 'https://github.com/vercel/ai/releases' },
    { label: 'Digital Applied deep dive', url: 'https://www.digitalapplied.com/blog/vercel-ai-sdk-6-deep-dive-features-tool-calls-2026' }
  ]
category: 'frontend'
---

# Vercel AI SDK 6 : agents composables et human-in-the-loop

Vercel a publié **AI SDK 6** le 15 mai 2026. Cette version majeure introduit la spécification **Language Model v3** qui restructure la façon dont les agents sont définis et orchestrés dans les applications JavaScript. Point important : la version est **rétrocompatible** pour la grande majorité des usages existants, aucune migration lourde n'est requise.

## Agents composables et réutilisables

La nouveauté centrale de SDK 6 est le concept d'**agents composables**. Un agent se définit une fois — ses outils, son modèle, ses instructions — et peut être instancié dans n'importe quel contexte : un composant React, un job en arrière-plan ou un endpoint API, sans dupliquer la configuration.

```ts
import { createAgent, ToolLoopAgent } from 'ai';

const reviewAgent = createAgent({
  model: openai('gpt-4o'),
  tools: { readFile, writeFile, runTests },
  system: 'You are a code reviewer...',
});

// Réutilisable dans une UI, une route API ou un cron
const result = await reviewAgent.run('Review the PR diff');
```

Le `ToolLoopAgent` intégré gère automatiquement la boucle d'appel LLM → exécution d'outils → itération, sans qu'on ait à écrire cette logique manuellement.

## Human-in-the-loop avec needsApproval

Le contrôle humain dans les boucles d'agents était jusqu'ici une plomberie custom. SDK 6 l'expose via un flag simple sur chaque outil :

```ts
const tools = {
  deleteFile: {
    needsApproval: true,  // Pause et demande confirmation avant d'exécuter
    execute: async ({ path }) => { /* ... */ },
  },
};
```

Quand un agent tente d'appeler un outil marqué `needsApproval: true`, la boucle se met en pause, l'état est sérialisé et une notification peut être envoyée à l'utilisateur. Celui-ci approuve ou rejette depuis l'interface. Le mécanisme est compatible avec les architectures serverless (l'état suspendu peut être stocké en base).

## Support des outils provider-specific

SDK 6 étend le support des **outils natifs des providers** — web search chez OpenAI, code execution chez Anthropic, memory management chez d'autres — avec une API unifiée. On déclare les capacités souhaitées et le SDK sélectionne l'implémentation provider adéquate.

## Réécriture de l'intégration LangChain

Le package `@ai-sdk/langchain` a été entièrement réécrit pour supporter LangChain et LangGraph modernes. Deux nouvelles fonctions facilitent l'interopérabilité :
- `toBaseMessages()` : convertit les messages UI du SDK au format LangChain
- `toUIMessageStream()` : transforme les event streams LangGraph en stream UI compatible SDK

## Performances

En benchmark interne avec `gpt-4o-mini`, AI SDK affiche **18ms de latence cold-start** contre 23ms pour LangChain. Pour les applications serverless où chaque cold-start compte, la différence est mesurable en pratique.

## Migration depuis SDK 5

Vercel recommande de mettre à jour directement sans passer par une migration complexe. Les seules breaking changes concernent les types de bas niveau de la spec LM v3, qui n'affectent que les implémentations de providers custom.
