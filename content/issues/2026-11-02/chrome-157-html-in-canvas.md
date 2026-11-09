---
title: "Chrome 157 : HTML-in-Canvas passe stable"
excerpt: "Du DOM interactif dans un canvas, sans origin trial"
summary: "Chrome 157 passe stable avec l'API HTML-in-Canvas (DOM interactif dans un canvas 2D/WebGL/WebGPU), un text-overflow à chaîne personnalisée, et 213 correctifs de sécurité dont 7 critiques."
date: 2026-11-02T00:00:00Z
reading_time: 3
sources:
  [
    { label: "SmartScope", url: "https://smartscope.blog/en/blog/chrome-157-stable-released-213-security-fixes-7-2026/" },
    { label: "Chrome for Developers", url: "https://developer.chrome.com/blog/html-in-canvas" }
  ]
category: 'frontend'
---

# Chrome 157 : HTML-in-Canvas passe stable

Google a fait passer **Chrome 157** en version stable le 3 novembre 2026, avec son lot de nouveautés pour le développement web et 213 correctifs de sécurité, dont 7 critiques.

## HTML-in-Canvas quitte l'origin trial

La nouveauté la plus notable est le passage en stable de **HTML-in-Canvas**, après une période d'origin trial. Cette API permet de dessiner du contenu DOM **interactif**, mis en forme via HTML/CSS classique, directement à l'intérieur d'un `<canvas>`, puis de le post-traiter avec Canvas 2D, WebGL ou WebGPU (via l'attribut `layoutsubtree` et les méthodes `drawElementImage` / `copyElementImage`). Concrètement, cela permet d'intégrer du texte ou des mises en page de qualité DOM dans des pipelines de rendu jusque-là réservés au canvas brut — un cas d'usage direct pour les interfaces jeux, visualisations WebGL/WebGPU ou effets personnalisés.

## Un `text-overflow` plus expressif

Côté CSS, la propriété `text-overflow` accepte désormais une **chaîne de caractères personnalisée** en plus de `clip` et `ellipsis`, pour remplacer une ligne tronquée par un texte au choix (par exemple `(suite)`) plutôt qu'être limité aux points de suspension.

## Pourquoi ça compte

HTML-in-Canvas ouvre une piste concrète pour qui construit des interfaces riches en WebGL/WebGPU et veut y injecter du texte ou des composants DOM sans sacrifier la qualité de rendu typographique — à garder en tête dès qu'un projet mélange canvas et contenu structuré.
