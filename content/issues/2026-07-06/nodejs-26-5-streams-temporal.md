---
title: "Node.js 26.5.0 muscle les Web Streams et l'ESM"
excerpt: "blob.textStream(), imports d'addons natifs, et plus"
summary: "Node.js 26.5.0 ajoute blob.textStream(), des chemins rapides pour isUtf8()/isAscii(), un flag ESM expérimental --experimental-import-text et un débit WHATWG Streams amélioré, sur la ligne Current qui passera en LTS en octobre."
date: 2026-07-06T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Node.js blog", url: "https://nodejs.org/en/blog/release/v26.5.0" },
    { label: "InfoQ", url: "https://www.infoq.com/news/2026/07/nodejs-26-temporal/" }
  ]
category: 'frontend'
---

# Node.js 26.5.0 muscle les Web Streams et l'ESM

Node.js 26.5.0 est sorti le 8 juillet 2026 sur la ligne "Current" de la version 26, celle qui passera en LTS en octobre 2026. Cette release ajoute `blob.textStream()`, une méthode qui permet de lire le contenu d'un Blob sous forme de flux de texte sans passer par une conversion intermédiaire complète en mémoire — utile pour le traitement de gros fichiers texte côté serveur.

## Des chemins rapides pour les vérifications d'encodage

La release introduit également des chemins rapides ("fast paths") pour `isUtf8()` et `isAscii()`, deux fonctions de vérification d'encodage fréquemment appelées dans les pipelines de traitement de texte et de parsing — un gain de performance discret mais mesurable pour tout code qui valide de l'encodage en boucle. Le débit des flux WHATWG Streams (`ReadableStream`, `TransformStream`) est par ailleurs amélioré, et `ReadableStreamTee` est désormais exposé publiquement.

## Un flag ESM expérimental et le support natif des addons

Côté modules, Node.js 26.5.0 introduit le flag expérimental `--experimental-import-text`, qui permet d'importer du contenu textuel directement via la syntaxe ESM. L'import de modules natifs (addons compilés) est désormais activé par défaut, simplifiant l'interopérabilité pour les projets qui dépendent de bindings natifs. Cette version s'inscrit dans la ligne Node.js 26 qui active Temporal par défaut et embarque V8 14.6, en vue du passage en LTS prévu pour octobre 2026 — un bon moment pour les équipes frontend/fullstack de commencer à tester leur stack sur cette ligne avant la bascule.
