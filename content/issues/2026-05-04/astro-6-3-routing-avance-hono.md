---
title: "Astro 6.3 : routing avancé et intégration Hono"
excerpt: "Astro 6.3 introduit un routing custom expérimental avec support Hono natif."
summary: "Astro 6.3 lance en expérimental l'advancedRouting : un fichier src/app.ts permet une gestion de requêtes sur mesure via les API astro/fetch et astro/hono (Hono middleware). Inclut aussi le traitement SVG opt-in et AstroCookies.consume()."
date: 2026-05-04T00:00:00Z
reading_time: 3
sources:
  - { label: "Astro 6.3.0 release", url: "https://github.com/withastro/astro/releases/tag/astro%406.3.0" }
category: frontend
---

# Astro 6.3 : routing avancé et intégration Hono

Astro 6.3.0 est sorti le 7 mai 2026 avec une fonctionnalité expérimentale significative : `advancedRouting`, qui ouvre la porte à une gestion des requêtes entièrement personnalisée, avec un support natif du framework Hono.

## `experimental.advancedRouting`

Cette nouvelle option expérimentale permet aux développeurs de créer un fichier **`src/app.ts`** à la racine du projet pour prendre le contrôle total du traitement des requêtes HTTP, en dehors du système de routing basé sur le système de fichiers d'Astro.

Deux nouvelles API sont exposées pour cela :

### `astro/fetch`

Une API de bas niveau alignée sur le standard Web Fetch. Elle donne accès direct au flux de requêtes HTTP pour implémenter des logiques de routing, de middleware ou de transformation entièrement sur mesure.

### `astro/hono`

Une intégration native avec **Hono**, le framework web ultra-léger et performant qui a gagné une popularité significative pour son API expressJs-like et sa compatibilité multi-runtime. Les middlewares Hono existants (authentification, rate limiting, CORS, compression…) peuvent désormais être composés directement dans un projet Astro.

```ts
// src/app.ts
import { createMiddleware } from 'astro/hono';
import { cors } from 'hono/cors';

export default createMiddleware(
  cors({ origin: 'https://example.com' })
);
```

Cette approche positionne Astro comme une option sérieuse pour les projets qui ont besoin à la fois du système de fichiers et de middlewares HTTP avancés.

## Traitement SVG opt-in

Un nouveau flag **`image.dangerouslyProcessSVG`** (désactivé par défaut) permet d'activer explicitement la rastérisation des fichiers SVG via Sharp. Le nom du flag est intentionnel : le traitement de SVG provenant de sources non fiables comporte des risques de sécurité, et Astro préfère un opt-in délibéré.

## `AstroCookies.consume()`

Nouvelle méthode **`AstroCookies.consume()`** permettant de marquer un cookie comme consommé et d'en récupérer les en-têtes `Set-Cookie` correspondants. L'ancienne méthode statique est dépréciée mais maintenue pour la compatibilité.

## Robustesse des images distantes

L'optimisation d'images distantes supporte désormais jusqu'à **10 redirections** avec des messages d'erreur explicites en cas de non-correspondance d'URL finale. Ajout aussi d'une gestion des erreurs de retry sur les imports d'`astro-island` en cas de problèmes réseau transitoires.

## Correction de sécurité

Un correctif a été appliqué pour une **vulnérabilité d'injection de template HTML** dans les redirections du serveur de développement. À noter également : la valeur string `"false"` est désormais correctement convertie en `false` dans les form actions d'array booléen.

---

En parallèle, **Astro 7.0.0-alpha.1** a été publié le 9 mai — premier jalon public de la prochaine branche majeure, signalant la compatibilité officielle avec Vite 8 (qui a supprimé l'avertissement précédemment affiché).
