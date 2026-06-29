---
title: "Next.js 16.3 : navigations instantanées et IA native"
excerpt: "Vercel repense la navigation serveur à vitesse SPA"
summary: "Next.js 16.3 Preview (25-26 juin) introduit les Instant Navigations : un shell par route préfetché en amont, partial prefetching configurable et 'use cache' pour rendre les navigations aussi rapides qu'une SPA. Côté IA : AGENTS.md bundlé, browser agent React et MCP server allégé."
date: 2026-06-22T00:00:00Z
reading_time: 7
sources:
  [
    { label: "Next.js – Instant Navigations", url: "https://nextjs.org/blog/next-16-3-instant-navigations" },
    { label: "Next.js – AI Improvements", url: "https://nextjs.org/blog/next-16-3-ai-improvements" },
    { label: "AlternativeTo – Next.js 16.3 preview", url: "https://alternativeto.net/news/2026/6/next-js-16-3-preview-adds-instant-navigations-and-partial-prefetching/" },
    { label: "React Libraries – Next.js 16.3", url: "https://www.reactlibraries.com/news/next-js-16-3-mastering-instant-navigation" }
  ]
category: 'frontend'
---

# Next.js 16.3 : navigations instantanées et IA native

Le 25 juin 2026, Vercel a publié Next.js 16.3 en version preview (`@preview` sur npm), annoncée officiellement le lendemain. La release tourne autour d'une idée simple : rendre les navigations App Router aussi immédiates que dans une SPA, sans abandonner les bénéfices du modèle serveur. Deux axes principaux : les **Instant Navigations** et un ensemble d'améliorations IA orientées agents.

## Le problème que ça résout

Avec les versions précédentes, chaque navigation dans Next.js App Router déclenchait une requête serveur avant d'afficher quoi que ce soit. La page suivante ne s'affichait qu'une fois toutes les données chargées, ce qui créait un délai perceptible sur les routes lentes. Contrairement à une SPA classique qui peut afficher immédiatement une coquille vide pendant que les données arrivent, Next.js attendait.

## Instant Navigations : la mécanique

La réponse de Vercel s'appelle **Instant Navigations**. Le principe : préfetcher un *shell* de route plutôt qu'une page complète. Au lieu de prefetcher tout le contenu d'un lien visible dans le viewport, Next.js précharge la structure minimale nécessaire pour afficher la page suivante — la mise en page, les éléments statiques, les composants `'use cache'` — sans attendre les données dynamiques.

Le résultat : au clic, la navigation s'engage immédiatement avec la structure visible, et les données arrivent en streaming pendant que l'utilisateur regarde déjà la bonne page. C'est le comportement d'une SPA, avec la fraîcheur des données d'un modèle serveur.

### Configuration

La feature est protégée derrière deux flags dans `next.config.ts` :

```ts
// next.config.ts
export default {
  experimental: {
    cacheComponents: true,
    partialPrefetching: true,
  },
}
```

Chaque route peut ensuite contrôler finement son comportement :

```ts
// app/dashboard/page.tsx
export const instant = false // opt-out par route
export const prefetch = 'allow-runtime' // prérender les données liées au lien
```

Le marqueur `'use cache'` sur un composant ou une route est la clé : il indique à Next.js que ce segment peut être mis en cache côté client et utilisé comme shell. Le lien `<Link prefetch>` permet d'aller plus loin et de précharger aussi les données spécifiques à ce lien.

## Côté IA : outils first-party pour les agents

16.3 embarque également un lot de fonctionnalités pensées pour les flux de développement assistés par des agents IA :

**AGENTS.md bundlé** — Next.js inclut désormais un fichier `AGENTS.md` dans le projet (visible par Claude Code, Cursor, Codex) qui contient la documentation version-matched du framework. Les agents lisent automatiquement la bonne version des docs plutôt que de s'appuyer sur leurs données d'entraînement potentiellement obsolètes.

**Agent browser avec introspection React** — un browser agent peut piloter un vrai navigateur et inspecter l'état React en temps réel depuis l'IDE. C'est utile pour les agents qui doivent valider visuellement le résultat d'un changement de code.

**MCP server allégé** — le serveur MCP embarqué de Next.js a été refactorisé pour être plus compact et ciblé. Il expose les routes, les composants et les erreurs de compilation aux agents qui s'y connectent.

**Docs accessibles en Markdown** — n'importe quelle page de docs Next.js devient accessible en Markdown en ajoutant `.md` à l'URL, ce qui facilite l'ingestion par les agents.

**Erreurs actionnables** — les messages d'erreur en développement incluent maintenant des menus de correction et des prompts prêts à coller dans un agent.

## Ce que ça change en pratique

Les Instant Navigations s'adressent aux applications qui souffrent de navigations perçues comme lentes malgré un bon Time to First Byte. Si votre app a des routes avec des waterfalls de données côté serveur, le partialPrefetching peut réduire sensiblement le délai perçu sans revoir l'architecture.

La version preview est disponible via `npm install next@preview`. Une release stable est annoncée pour les prochaines semaines.
