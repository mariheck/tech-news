---
title: '@vitejs/plugin-rsc : le support RSC officiel pour Vite'
excerpt: "Le plugin RSC passe sous l'organisation @vitejs : RSC first-class dans Vite."
summary: "Le plugin React Server Components pour Vite rejoint l'organisation officielle @vitejs avec la v0.5.28. Basé sur l'Environment API de Vite, il apporte le HMR, le CSS code-splitting automatique et une architecture multi-environnements framework-agnostique."
date: 2026-07-20T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'GitHub – vitejs/vite-plugin-rsc',
      url: 'https://github.com/vitejs/vite-plugin-rsc'
    },
    {
      label: 'npm – @vitejs/plugin-rsc',
      url: 'https://www.npmjs.com/package/@vitejs/plugin-rsc'
    },
    {
      label: 'Medium – React ecosystem juillet',
      url: 'https://medium.com/@onix_react/whats-new-in-react-ecosystem-july-edition-678b75c3fdca'
    }
  ]
category: 'frontend'
---

# @vitejs/plugin-rsc : le support RSC officiel pour Vite

La semaine du 20 juillet, le plugin React Server Components pour Vite a franchi une étape importante : il rejoint l'organisation officielle **@vitejs** sur npm et GitHub. La version **0.5.28**, publiée sous `@vitejs/plugin-rsc`, marque la reconnaissance par l'équipe Vite du support RSC comme fonctionnalité de premier ordre de l'écosystème.

## Contexte : RSC hors de Next.js

Jusqu'ici, React Server Components en dehors de Next.js nécessitait des solutions non officielles, des forks expérimentaux, ou une implémentation manuelle avec Webpack/Rollup. Vite, devenu le bundler de référence pour la majorité des projets React modernes (Remix, TanStack Start, projets custom), n'avait pas de solution officielle pour RSC.

`@vitejs/plugin-rsc` comble ce vide. Il est **framework-agnostique** — il ne présuppose pas de convention de routing ni de structure de projet — et s'intègre dans n'importe quel setup Vite existant.

## Architecture : l'Environment API de Vite

Le plugin repose sur l'**Environment API** de Vite (stabilisée dans Vite 6), qui permet de définir plusieurs environnements d'exécution dans un seul processus de build. `@vitejs/plugin-rsc` exploite cette primitive pour séparer le graphe de modules client et serveur :

- L'**environnement serveur** (Node.js ou Bun) résout les Server Components, accède aux ressources backend et génère le payload RSC
- L'**environnement client** (navigateur) résout les Client Components et hydrate les payloads reçus

Cette séparation est traitée nativement par Vite — pas de hack de résolution de modules, pas de double bundling manuel. La frontière `'use client'` / `'use server'` est détectée automatiquement.

## Fonctionnalités clés

### HMR pour les Server et Client Components

Le Hot Module Replacement fonctionne sur les deux côtés de la frontière RSC. Une modification d'un Server Component invalide uniquement le payload RSC concerné et déclenche une revalidation côté client sans rechargement complet de la page. Les Client Components se comportent exactement comme dans un projet Vite classique.

### CSS code-splitting automatique

Le plugin extrait automatiquement les styles CSS importés dans les Server Components et les injecte en tant que `<link>` dans le payload RSC. Résultat : les styles sont disponibles avant l'hydratation, sans flash de contenu non stylé (FOUC). C'est le même comportement que Next.js App Router, mais disponible dans n'importe quel setup Vite.

### Directives `'use client'` et `'use server'`

Les directives standard de React sont supportées nativement :

```tsx
// server-component.tsx (aucune directive = Server Component par défaut)
import { readFile } from 'fs/promises'

const ServerComponent = async () => {
  const data = await readFile('./data.json', 'utf-8')
  return <pre>{data}</pre>
}

// client-component.tsx
'use client'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

Les Server Actions (`'use server'` dans une fonction) sont également supportées, avec génération automatique des endpoints POST correspondants.

## Installation

```bash
npm install @vitejs/plugin-rsc
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import rsc from '@vitejs/plugin-rsc'

export default defineConfig({
  plugins: [rsc()],
})
```

Le plugin détecte automatiquement l'entrée React et configure les environnements. Une option `serverEntry` permet de spécifier un point d'entrée serveur custom pour les setups avancés.

## Ce que ça change pour l'écosystème

Le passage sous l'organisation `@vitejs` n'est pas qu'un changement de namespace. Il signale que :

1. **Le plugin sera maintenu à long terme** par l'équipe Vite, pas par un contributeur individuel
2. **Les breaking changes de Vite** (API publiques) tiendront compte de la compatibilité RSC
3. **Les frameworks** construits sur Vite (TanStack Start, Analog, et d'autres) ont désormais une base officielle pour implémenter RSC sans dupliquer l'effort

Pour les équipes utilisant Vite en dehors de Next.js — en particulier avec TanStack Router ou des setups React custom — c'est la voie d'adoption RSC recommandée.
