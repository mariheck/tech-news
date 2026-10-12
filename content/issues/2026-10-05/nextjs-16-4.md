---
title: "Next.js 16.4 : Turbopack plus léger, Cache Components"
excerpt: "Cache disque réduit, compilation paresseuse, React 19.3"
summary: "Next.js 16.4 réduit le cache disque de Turbopack de 20 à 25 %, rend la compilation paresseuse, ajoute l'API ensureStatic et généralise les Cache Components, en route vers leur activation par défaut en v17."
date: 2026-10-05T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Next.js Blog", url: "https://nextjs.org/blog/next-16-4" }
  ]
category: 'frontend'
---

# Next.js 16.4 : Turbopack plus léger, Cache Components

Vercel a publié **Next.js 16.4** le 6 octobre 2026. L'essentiel de la mise à jour porte sur **Turbopack** : le cache disque est réduit de 20 à 25 % sans aucune configuration supplémentaire, et les imports dynamiques côté client ainsi que les modules serveur compilent désormais de façon paresseuse. Un chunk de runtime est en outre partagé entre les routes, ce qui réduit la duplication de code au build.

## Une nouvelle garde-fou pour le rendu statique

Next.js 16.4 introduit l'API `ensureStatic`, qui garantit qu'une route reste statique : si du contenu dynamique s'y glisse, le build échoue plutôt que de dégrader silencieusement les performances en production. Cette release ajoute aussi le support de **React 19.3**.

## Les Cache Components gagnent du terrain

Les **Cache Components**, le mécanisme de mise en cache granulaire introduit dans les versions précédentes de Next.js 16, sont désormais recommandés pour toutes les applications et activés par défaut dans `create-next-app`. Vercel confirme son intention d'en faire le comportement par défaut dans Next.js 17.

## Pourquoi ça compte

Entre la réduction du cache Turbopack et la compilation paresseuse, cette version cible directement les temps de build et de démarrage en développement — un point sensible sur les grosses bases de code. `ensureStatic` et la généralisation des Cache Components confirment par ailleurs la direction prise par le framework vers un contrôle plus explicite du statique et du dynamique.
