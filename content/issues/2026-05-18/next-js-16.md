---
title: 'Next.js 16, tour de la release : breaking changes et impact migration'
excerpt: 'Turbopack stable par défaut, refonte du cache, nouvelles APIs server. Le calendrier de migration et ce qui casse vraiment en prod.'
slug: 'Vercel publie Next.js 16 avec Turbopack stable, un cache repensé en profondeur, et des breaking changes ciblés. On passe en revue ce qui mérite votre semaine de migration et ce qui peut attendre le prochain trimestre.'
date: 2026-05-18T00:00:00Z
reading_time: 8
sources:
  [
    { label: 'Next.js 16 release notes', url: 'nextjs.org/blog/next-16' },
    { label: 'RFC: cache directives', url: 'github.com/vercel/next.js' },
    { label: 'Migration codemods', url: 'github.com/vercel/next-codemod' }
  ]
category: 'Autres'
---

# Next.js 16, tour de la release : breaking changes et impact migration

Vercel a publié Next.js 16 mardi soir, avec une release plus mesurée que la 15 mais des changements structurels qu'on ne peut pas ignorer. [Turbopack passe stable par défaut](https://www.google.com/), le système de cache est repensé en profondeur, et trois APIs serveur changent de signature de manière incompatible.

Si vous maintenez une app Next en prod, ce papier liste exactement ce qui casse, ce qui se règle en deux heures avec le codemod officiel, et ce qui demandera un sprint dédié. Pas d'enthousiasme gratuit, pas de panique non plus.

## Ce qui casse vraiment

La signature de `generateMetadata` a changé pour accommoder le streaming de métadonnées. Si vous accédez à `params` ou `searchParams`, vous devez maintenant `await` avant de lire les valeurs. Le codemod gère 95% des cas, mais les composants qui passent les params en props vers d'autres helpers nécessitent une revue manuelle.

> « On a migré une app de 240 routes en deux jours. Le codemod a tout pris sauf trois helpers custom autour de `headers()`. Une demi-heure de cleanup. » — équipe plateforme, Doctolib

## Cache Components : la vraie nouveauté

Le modèle `"use cache"` introduit en preview à la 15 devient first-class. On déclare un cache au niveau composant, avec des tags pour l'invalidation et un TTL explicite. C'est plus simple que `unstable_cache` et ça remplace 80% des cas où on bricolait avec `revalidate`.

Les premiers benchmarks que j'ai pu reproduire montrent des gains TTFB de 30 à 50% sur les pages produit qui mixent contenu statique et données utilisateur, sans toucher au reste du code.

## Migration : combien de temps prévoir ?

Comptez une journée pour une app de 50 routes maintenue régulièrement. Comptez une semaine si vous avez accumulé du `getServerSideProps` non migré, du middleware custom, ou des patterns autour de l'ancien cache fetch.

Le calendrier pragmatique : tester en branch sur staging cette semaine, déployer sur un environnement preview lundi prochain, prod en début de mois. Pas plus rapide. Pas plus lent.
