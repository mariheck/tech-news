---
title: 'Google I/O : le web agentique s''invite dans Chrome 147'
excerpt: 'Quinze APIs annoncées : WebMCP, HTML-in-Canvas, Partial Updates et animation-trigger.'
summary: '15 APIs web annoncées à l''I/O 2026 : view transitions scoped stables dans Chrome 147, HTML-in-Canvas en origin trial, Declarative Partial Updates, WebMCP pour les agents IA, et animation-trigger pour déclencher les animations au scroll.'
date: 2026-05-18T00:00:00Z
reading_time: 7
sources:
  [
    { label: 'Chrome for Developers – I/O 26', url: 'https://developer.chrome.com/blog/chrome-at-io26' },
    { label: 'Google I/O – Web UI session', url: 'https://io.google/2026/explore/pa-keynote-10' },
    { label: '9to5Google – tout de l''I/O', url: 'https://9to5google.com/2026/05/19/google-io-2026-news/' }
  ]
category: 'frontend'
---

# Google I/O : le web agentique s'invite dans Chrome 147

Le 19 mai à l'I/O 2026, l'équipe Chrome a annoncé quinze nouvelles fonctionnalités pour la plateforme web autour d'un fil rouge : rendre le web nativement compatible avec les agents IA, sans sacrifier les fondamentaux qui font tenir les SPAs en production.

## View transitions scoped : stable dans Chrome 147

Les **element-scoped view transitions** passent stable dans Chrome 147. Jusqu'ici les view transitions s'appliquaient à l'ensemble du document — coordonner des animations sur des fragments de page indépendants exigeait des acrobaties JavaScript. Avec la version scoped, on isole une transition sur un sous-arbre DOM : une carte qui s'ouvre, un drawer qui glisse, un widget qui se met à jour, sans que l'animation contamine le reste de la page.

La version cross-document (navigation entre pages différentes) est opérationnelle depuis quelques mois dans Chrome et Safari 18.2+. Les **two-phase view transitions** (contrôle fin entrée/sortie en deux temps) sont en phase de test.

## HTML-in-Canvas : du DOM live dans vos textures

L'API **HTML-in-Canvas** entre en origin trial. Elle permet de rasteriser des éléments HTML et CSS live directement dans un contexte 2D, une texture WebGL ou un buffer WebGPU, tout en préservant l'accessibilité, le find-in-page et l'inspection DevTools. La différence avec les approches existantes (`html2canvas`, `foreignObject` SVG) : le rendu est synchrone avec le layout réel du navigateur, pas une capture approximative.

Les usages visés : éditeurs canvas qui veulent du texte HTML rendu fidèlement, visualisations de données riches, et générateurs d'images côté client avec du vrai rendu CSS.

## Declarative Partial Updates : du streaming HTML natif

**Declarative Partial Updates** apporte du streaming HTML out-of-order nativement dans le navigateur. Le principe : des processing instructions `<?marker>` et des balises `<template>` permettent de cibler des zones de la page pour les remplacer ou les compléter à la volée, sans framework. Trois nouvelles méthodes JS : `setHTML()`, `appendHTML()`, `streamHTML()`.

En phase de test derrière un flag dans Chrome 148, c'est la réponse du web platform aux solutions type htmx ou les Server Actions de Next.js : une primitive native pour le streaming HTML partiel.

## WebMCP : les agents IA accèdent aux interfaces web

**WebMCP** est la proposition la plus structurante de l'I/O pour les développeurs frontend. Co-développé avec Microsoft et soumis au W3C, le standard permet d'annoter des fonctions JavaScript et des éléments de formulaire HTML pour les exposer comme outils structurés aux agents IA dans le navigateur.

L'idée : plutôt que de laisser un agent IA faire des captures d'écran et deviner ce qu'il voit, le développeur déclare explicitement quelles actions sont disponibles. Un origin trial démarre dans Chrome 149. Les benchmarks préliminaires montrent des gains de **8 à 12× en temps d'exécution** des tâches agentiques sur les sites implémentant WebMCP.

## Animation-trigger : finir avec les IntersectionObserver manuels

**Animation-trigger** est une propriété CSS qui déclenche une animation CSS à partir d'un événement de scroll ou d'intersection, sans JavaScript. Elle complète les scroll-driven animations (déjà disponibles) en ajoutant un mécanisme de déclenchement unique : l'animation démarre quand l'élément entre dans le viewport, et ne recommence pas. Chrome 148 (derrière flag).

## Soft Navigations API et Core Web Vitals SPA

La **Soft Navigations API** permet de signaler à Chrome qu'une navigation côté client a eu lieu, afin que les Core Web Vitals (LCP, FID) soient mesurés par segment d'URL — et pas seulement sur le chargement initial. C'est un prérequis pour que les SPAs soient évaluées équitablement dans les rapports de performance.

## Built-in AI APIs en GA dans Chrome 137+

Les APIs **Writer**, **Rewriter** et **Prompt** — qui s'appuient sur Gemma 197M embarqué dans Chrome — sont en disponibilité générale depuis Chrome 137. Les DevTools intègrent maintenant un support de débogage natif pour 20+ agents de développement.
