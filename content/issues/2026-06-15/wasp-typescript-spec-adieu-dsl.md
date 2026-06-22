---
title: 'Wasp abandonne son DSL et passe TypeScript-natif'
excerpt: 'Le framework full-stack remplace sa syntaxe propriétaire par du TypeScript pur.'
summary: "Le 15 juin, Wasp annonce le remplacement de son langage de configuration propriétaire par une 'TypeScript Spec' : les apps full-stack React/Node/Prisma se définissent désormais en TypeScript natif, éliminant la barrière d'entrée du DSL tout en conservant l'abstraction haut niveau."
date: 2026-06-15T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'Wasp Blog – TypeScript Spec',
      url: 'https://wasp.sh/blog/2026/06/15/wasp-typescript-spec'
    },
    {
      label: 'JavaScript Weekly #790',
      url: 'https://javascriptweekly.com/issues/790'
    },
    {
      label: 'Wasp – Docs TypeScript',
      url: 'https://wasp.sh/docs/general/typescript'
    }
  ]
category: frontend
---

# Wasp abandonne son DSL et passe TypeScript-natif

Le 15 juin 2026, **Wasp** a publié sa plus grande évolution depuis sa création : le remplacement de son langage de configuration propriétaire (le « Wasp language ») par une **TypeScript Spec** — une façon de définir des applications full-stack React/Node.js/Prisma directement en TypeScript.

## Du DSL custom au TypeScript standard

Jusqu'ici, Wasp se distinguait par son propre langage déclaratif pour décrire l'architecture d'une application. Un fichier `.wasp` définissait les routes, les entités de données, les actions serveur et les jobs en arrière-plan, avant que le compilateur Wasp ne génère le code boilerplate correspondant.

Si l'approche avait ses vertus — haut niveau d'abstraction, génération de types end-to-end, déploiement simplifié — le DSL propriétaire créait une barrière d'entrée non négligeable. Pas d'autocomplétion TypeScript dans les IDEs, syntaxe à apprendre from scratch, écosystème d'outillage limité.

La TypeScript Spec résout ce problème à la racine : la configuration de l'app se fait maintenant dans un fichier TypeScript ordinaire, avec des types exportés par Wasp, une autocomplétion complète et un accès immédiat à l'écosystème standard (ESLint, Prettier, Jest).

```typescript
// avant : wasp.config
app myApp {
  wasp: { version: "^0.x.x" },
  title: "Mon App"
}

// après : wasp.config.ts
import { defineConfig } from 'wasp/config'

export default defineConfig({
  title: 'Mon App'
})
```

## Ce qui ne change pas

Wasp clarifie : le changement est « uniquement » une interface différente. Tout le reste reste identique — l'abstraction haut niveau des routes type-safe, les Server Actions, les Background Jobs, l'auth intégrée, le déploiement en un commande. L'outil reste fidèle à son positionnement « batteries-included, full-stack, spec-driven » dans la lignée de Rails, Laravel ou Django.

L'équipe précise que la migration depuis les fichiers `.wasp` est outillée et documentée.

## Pourquoi c'est important

Wasp rejoint ainsi une tendance plus large en 2026 : la convergence de l'écosystème JavaScript/TypeScript vers TypeScript comme lingua franca de configuration, succédant aux formats propriétaires ou JSON.

La convergence est visible partout : la config Vite, la config Tailwind v4 (via CSS-first mais avec types TypeScript), les configs Next.js, ESLint et même les manifestes de packages npm migrent vers TypeScript pour bénéficier de la validation statique.

Pour le lecteur frontend qui découvre Wasp — ou qui l'avait écarté à cause de son DSL — c'est le bon moment de reconsidérer l'outil pour des projets full-stack React où la productivité compte plus que le contrôle absolu.

## Changement cassant

La migration implique des **breaking changes** sur les projets existants. Le renommage des fichiers `.wasp` en `.wasp.ts` et la conversion de la syntaxe sont nécessaires. La Launch Week #12 de Wasp (démarrée le 15 juin) propose un guide de migration détaillé et des sessions de support communautaire.
