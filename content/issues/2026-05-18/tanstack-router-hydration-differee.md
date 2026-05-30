---
title: "TanStack Router introduit l'hydratation différée"
excerpt: "Code-split des boundaries d'hydration, HTML SSR préservé et replay des interactions : une réponse au PPR de Next.js."
summary: "TanStack Start peut code-splitter ses boundaries d'hydratation, préserver le HTML SSR pendant le chargement des bundles et rejouer les interactions en file. Une alternative au Partial Pre-Rendering de Next.js, disponible dans @tanstack/react-router 1.170.5."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    {
      label: 'TanStack Router release',
      url: 'https://github.com/TanStack/router/releases/tag/release-2026-05-20-1004'
    }
  ]
category: 'frontend'
---

# TanStack Router introduit l'hydratation différée

La release TanStack Router du 20 mai (version `@tanstack/react-router@1.170.5`, 24 packages mis à jour) introduit l'**hydratation différée** pour TanStack Start. C'est une primitive SSR significative qui s'attaque à l'un des problèmes les plus persistants des SPA avec rendu serveur : la période morte entre la réception du HTML et le moment où l'application devient interactive.

## Le problème que ça résout

Dans une app SSR classique, le HTML arrive rapidement mais l'application n'est pas utilisable tant que le bundle JavaScript n'est pas chargé et que l'hydratation n'est pas complète. Si le bundle est lourd ou si la connexion est lente, l'utilisateur voit une page figée — le HTML est là, mais cliquer ne fait rien.

Les solutions existantes (streaming SSR, Suspense boundaries, lazy loading) réduisent ce problème mais ne le résolvent pas entièrement : les interactions lancées pendant l'hydratation sont souvent perdues.

## Ce qu'apporte l'hydratation différée de TanStack

TanStack Start peut maintenant **code-splitter les hydration boundaries** : chaque section de la page génère son propre chunk JavaScript au build. Quand la page charge :

1. Le HTML SSR est rendu immédiatement et reste visible tel quel pendant que les chunks chargent
2. Chaque section s'hydrate indépendamment quand son chunk est prêt
3. Les interactions déclenchées avant la fin de l'hydratation d'une section sont **rejouées dans l'ordre** une fois le chunk chargé — rien n'est perdu

Le troisième point est le plus important. Le "replay" des interactions différées transforme la période d'hydratation d'une zone grise (cliquer ne fait rien) en une zone buffériée (cliquer fonctionne, avec un léger délai).

## Comparaison avec Next.js Partial Pre-Rendering

TanStack Start rejoint Next.js PPR et Astro Server Islands dans l'espace des approches d'hydratation partielle, mais avec quelques différences :

**Similitudes** : les deux approches permettent aux sections statiques d'être immédiatement interactives pendant que les sections dynamiques chargent.

**Différences** : le model TanStack est entièrement orienté React (Suspense boundaries, tree splitting React), sans génération statique à l'avance. PPR de Next.js combine génération statique et streaming dynamique, ce qui suppose un déploiement sur infrastructure compatible (Vercel ou équivalent).

Pour les équipes qui ont déjà investi dans TanStack Start et ne sont pas sur Vercel, l'hydratation différée offre des garanties de DX comparables sans changer d'infrastructure.

## Autres changements de la release

**`params.priority`** — nouvelle option de route pour départager des routes avec le même score de matching. Utile dans les cas de routes ambiguës qui se chevauchent.

**Fix HMR** — un bug de rechargement à chaud sur les index de routes a été corrigé. En développement, les modifications de route déclenchaient parfois un état incohérent.

**Hydratation avant le match initial** — l'hydratation est maintenant garantie avant le premier match de route côté client, ce qui corrigeait un flash visuel lors de navigations initiales complexes.

## Ce que ça change pour les projets TanStack Start

Si vous utilisez TanStack Start en production avec des pages qui mélangent contenu statique et données dynamiques chargées côté serveur, l'hydratation différée est une amélioration applicable progressivement : annoter les boundaries existantes avec les nouveaux attributs de code-splitting suffit pour commencer à en bénéficier, sans réécriture de l'architecture.
