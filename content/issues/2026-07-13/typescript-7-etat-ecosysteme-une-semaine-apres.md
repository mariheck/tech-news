---
title: "TypeScript 7 : l'écosystème, une semaine après"
excerpt: "ESLint bloqué, Vue et Svelte en attente : le vrai état de l'écosystème"
summary: "Une semaine après la GA de TypeScript 7.0 (compilateur Go, 10x plus rapide), le bilan est nuancé : des gains de build spectaculaires, mais typescript-eslint non supporté, et Vue, Svelte et Astro incapables de lancer leurs vérificateurs de templates."
date: 2026-07-13T00:00:00Z
reading_time: 7
sources:
  [
    { label: "Digital Applied – TS7 one week in", url: "https://www.digitalapplied.com/blog/typescript-7-native-compiler-early-adopter-migration-readiness" },
    { label: "Microsoft – TS 7.0 annonce", url: "https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/" },
    { label: "Dev Encyclopedia – ESLint cassé", url: "https://devencyclopedia.com/blog/typescript-7-broke-eslint-ts-jest-ts-morph" },
    { label: "TechTimes – Vue et Svelte", url: "https://www.techtimes.com/articles/320049/20260710/typescript-7-now-stable-10-faster-builds-not-vue-svelte-yet.htm" },
    { label: "Digital Applied – playbook migr.", url: "https://www.digitalapplied.com/blog/typescript-7-0-ga-native-compiler-migration-playbook-2026" }
  ]
category: 'frontend'
---

# TypeScript 7 : l'écosystème, une semaine après

TypeScript 7.0 est passé en disponibilité générale (GA) le 8 juillet 2026, avec son compilateur réécrit en Go : builds entre 8x et 12x plus rapides selon les projets, language server amélioré, et support Unicode corrigé dans les littéraux de template. Une semaine après ce lancement, le tableau est plus contrasté qu'il n'y paraît. Le compilateur lui-même est stable — mais l'écosystème d'outillage qui tourne autour n'était pas prêt.

## Les gains de performance : confirmés en conditions réelles

Les chiffres annoncés par Microsoft se vérifient en pratique. Le codebase de VS Code, qui compilait en 77,8 secondes avec TypeScript 6, tombe à 7,5 secondes avec TS7 — un facteur 10,4x. Playwright passe de 11,1 secondes à 1,1 secondes. Des retours terrain signalent des projets passant de 45–60 secondes à 4–8 secondes, cohérents avec les 8–12x annoncés.

L'amélioration du language server est tout aussi significative : réduction de plus de 80 % des commandes language server en échec et de plus de 60 % des plantages du serveur par rapport à TypeScript 6.0. C'est cet aspect — la fluidité de l'expérience dans l'éditeur — qui constitue le gain le plus immédiat pour un développeur au quotidien.

## Le problème central : l'absence d'API programmatique stable

La friction de l'écosystème provient d'un seul point : TypeScript 7 n'expose pas encore d'API programmatique stable. Or, plusieurs outils critiques s'appuient précisément sur cette API pour intégrer TypeScript dans leur propre compilateur ou service de langage.

**ESLint / typescript-eslint** : Le support de TypeScript 7 a été demandé dès le jour du lancement et la requête a été fermée comme « not planned », le fix étant de la responsabilité de TypeScript 7.1 côté API, pas de typescript-eslint. ESLint core est bloqué dans la même situation.

**Vue, Svelte, Astro** : Les trois frameworks utilisent Volar comme vérificateur de types pour les templates. Volar intègre TypeScript dans son propre compilateur via l'API programmatique. Sans API stable dans TS7, Volar ne peut pas adopter le compilateur Go — ce qui signifie que `vue-tsc`, `svelte-check` et le vérificateur d'Astro continuent de tourner sur TypeScript 6 pour l'instant. L'issue typescript-eslint #12518 (ouverte le 8 juillet, fermée comme « not planned ») documente ce blocage en détail.

**ts-jest et ts-morph** : Même situation. Ces outils dépendent de l'API programmatique et ne peuvent pas exploiter le compilateur Go avant TypeScript 7.1.

## Le contournement recommandé

Microsoft a anticipé le problème et publie un package de compatibilité : `@typescript/typescript6`. La stratégie recommandée par la communauté early adopter est de faire cohabiter les deux versions :

- **TypeScript 7** pour les vérifications de type via `tsc` (le compilateur en ligne de commande) : c'est là que le gain de performance est total.
- **TypeScript 6** (via `@typescript/typescript6`) exclusivement pour ESLint, ts-jest et tout outil dépendant de l'API programmatique.

Cette cohabitation est explicitement supportée et documentée par Microsoft. Elle n'est pas idéale à long terme, mais elle permet de commencer à bénéficier des gains de build sans casser le lint ni les tests.

## Ce qui arrive avec TypeScript 7.1

Microsoft a décrit TypeScript 7.1 comme la version qui fermera les écarts d'écosystème restants — principalement la livraison de l'API programmatique stable qui permettra à Volar et aux vérificateurs de templates d'adopter le compilateur Go. Le calendrier habituel des releases TypeScript est de trois à quatre mois entre versions mineures, ce qui pointe vers une sortie aux alentours d'octobre 2026.

## À retenir pour un dev frontend

Si votre stack est React/Next.js sans Vue ni Svelte, la migration vers TypeScript 7 est possible dès maintenant avec le contournement ESLint. Les gains sur `tsc` justifient l'adoption, surtout sur un monorepo ou un codebase conséquent.

Si vous utilisez Vue, Svelte ou Astro, il est plus sage d'attendre TypeScript 7.1 avant de migrer — non pas parce que le compilateur est défaillant, mais parce que la vérification de types de vos templates ne bénéficiera pas du compilateur Go tant que l'API programmatique ne sera pas stabilisée.
