---
title: "WebMCP : rendre le web lisible par les agents IA"
excerpt: "Google propose un standard pour exposer fonctions JS et formulaires HTML aux agents navigateur."
summary: "Annoncé à Google I/O 2026, WebMCP est en origin trial sur Chrome 149. Il permet d'exposer des fonctions JS et des formulaires HTML aux agents IA navigateur. Booking.com, Shopify et Instacart s'engagent sur le standard avant sa disponibilité générale."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Chrome for Developers - WebMCP", url: "https://developer.chrome.com/docs/ai/webmcp" },
    { label: "Chrome at I/O 26", url: "https://developer.chrome.com/blog/chrome-at-io26" },
    { label: "WebDeveloper.com", url: "https://webdeveloper.com/news/google-webmcp-chrome-149-origin-trial/" },
    { label: "DEV Community - WebMCP", url: "https://dev.to/tejas1643/webmcp-is-the-most-important-thing-google-announced-at-io-2026-and-almost-nobody-is-talking-about-1j8m" }
  ]
category: "frontend"
---

# WebMCP : rendre le web lisible par les agents IA

WebMCP est probablement l'annonce de Google I/O 2026 la moins spectaculaire en surface, et la plus structurante à moyen terme pour les développeurs web. C'est un standard ouvert — annoncé le 19 mai, avec une documentation publiée le 18 — qui permet aux sites d'exposer des outils structurés aux agents IA navigateur : fonctions JavaScript et formulaires HTML annotés.

## Le problème que ça résout

Aujourd'hui, un agent IA qui tente d'interagir avec un site web doit le scraper ou simuler des clics — une approche fragile, lente et sujette aux erreurs de désynchronisation avec le DOM. WebMCP renverse ce modèle : c'est le site lui-même qui déclare quelles fonctions il rend disponibles, avec leurs schémas d'entrée, de sortie et d'effets de bord.

## Deux APIs d'intégration

**API impérative (JavaScript)** — les développeurs définissent des outils directement en JS. Adaptée à la navigation programmatique, la logique de formulaire complexe ou la gestion d'état applicatif.

**API déclarative (HTML)** — des attributs d'annotation sur les formulaires HTML existants créent automatiquement des outils WebMCP. Idéale pour les sites qui veulent exposer leurs flux sans modifier leur logique applicative.

## Statut de standardisation

L'origin trial WebMCP démarre avec Chrome 149. La spec est hébergée dans le W3C Web Machine Learning Community Group — elle n'est pas encore sur le Standards Track officiel du W3C. Pour l'instant, le seul agent qui consomme ces outils est Gemini in Chrome (l'assistant intégré à Chrome, distinct de l'application Gemini web).

## Les premiers adoptants

Booking.com, Expedia, Instacart, Intuit, Shopify et Redfin se sont engagés à implémenter WebMCP avant la disponibilité générale. C'est un signal fort : si ces acteurs livrent leur implémentation, la pression sur l'écosystème pour supporter le standard sera réelle dès que le support cross-browser arrivera.

## Ce que ça implique en pratique

Pour les équipes frontend, WebMCP est à surveiller mais pas à implémenter en urgence : l'origin trial est expérimental, Firefox et Safari ne supportent pas encore le standard, et le seul consommateur actuel est Gemini in Chrome. En revanche, les architectures qui séparent déjà fonctions métier et présentation seront naturellement les plus faciles à adapter le moment venu — un argument de plus pour des APIs bien délimitées en interne.
