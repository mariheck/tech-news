---
title: 'React 19 : patches coordonnés avec Next.js le 21 juillet'
excerpt: "React 19.0.8, 19.1.9 et 19.2.8 patchent les performances RSC le même jour."
summary: "Le 21 juillet, React publie trois patches (v19.0.8, v19.1.9, v19.2.8) coordonnés avec le patch de sécurité Next.js. Les correctifs ciblent les performances de décodage dans React Server Components. Mise à jour recommandée pour les apps Next.js sur App Router."
date: 2026-07-20T00:00:00Z
reading_time: 3
sources:
  [
    {
      label: 'GitHub – React 19.2.8 release',
      url: 'https://github.com/react/react/releases/tag/v19.2.8'
    },
    {
      label: 'GitHub – React 19.1.9 release',
      url: 'https://github.com/react/react/releases/tag/v19.1.9'
    },
    {
      label: 'GitHub – React 19.0.8 release',
      url: 'https://github.com/react/react/releases/tag/v19.0.8'
    },
    {
      label: 'Medium – React ecosystem juillet',
      url: 'https://medium.com/@onix_react/whats-new-in-react-ecosystem-july-edition-678b75c3fdca'
    }
  ]
category: 'frontend'
---

# React 19 : patches coordonnés avec Next.js le 21 juillet

Le 21 juillet 2026 — même jour que le patch de sécurité Next.js — React a publié trois nouvelles versions de maintenance couvrant les branches actives de React 19 :

- **React 19.0.8**
- **React 19.1.9**
- **React 19.2.8**

## Ce qui change : performances RSC

Les trois versions partagent un correctif principal : **des améliorations de performance dans le décodage des React Server Components** (RSC). Le PR #37087, contribué par eps1lon, optimise le pipeline de décodage côté client, réduisant le temps de traitement des payloads RSC de grande taille.

Le gain est particulièrement visible sur les pages avec de nombreux Server Components imbriqués ou des payloads RSC volumineux (listes, tables, dashboards). Pour les applications Next.js utilisant l'App Router en production, la mise à jour peut apporter une amélioration mesurable des métriques de temps d'interaction (INP, LCP) sur les navigations côté client.

## Relation avec le patch Next.js

La synchronisation de date n'est pas anodine : les patches React 19.x ont été coordonnés avec la sortie de Next.js 15.5.21 / 16.2.11. Certaines CVE Next.js impliquent la couche Server Components, et les correctifs React sont la fondation sur laquelle les correctifs Next.js s'appuient.

Si vous appliquez le patch Next.js de juillet (recommandé pour les 9 CVE), la mise à jour React est incluse dans la dépendance — npm ou pnpm mettra automatiquement React à jour vers la version patchée si vous avez une contrainte de version compatible (`^19.x`).

## Quelle version cibler ?

| Votre React | Version patchée | Commande |
| --- | --- | --- |
| 19.0.x | 19.0.8 | `npm install react@19.0.8 react-dom@19.0.8` |
| 19.1.x | 19.1.9 | `npm install react@19.1.9 react-dom@19.1.9` |
| 19.2.x | 19.2.8 | `npm install react@19.2.8 react-dom@19.2.8` |

## Ce que ça ne change pas

Ces releases sont des **patches de maintenance**, pas des versions mineures avec de nouvelles fonctionnalités. Les APIs publiques de React 19 ne changent pas. Il n'y a pas de mise à jour de la documentation, pas de nouveaux hooks, pas de modifications des primitives RSC existantes.

Pour les utilisateurs de Next.js sur App Router, la recommandation est simple : appliquer le patch Next.js inclut déjà les fixes React nécessaires. Pour les projets React standalone (Vite, Remix, autres), une mise à jour explicite est nécessaire.
