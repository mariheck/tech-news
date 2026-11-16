---
title: "Node.js corrige 7 failles critiques HTTP/2 et TLS"
excerpt: "7 CVE High sur les lignes 22, 24 et 26 : à patcher"
summary: "Le 11 novembre 2026, le projet Node.js publie des correctifs de sécurité sur les lignes 22.x, 24.x et 26.x : 7 CVE de sévérité High, dont un crash HTTP/2 à distance et un contournement d'authentification TLS."
date: 2026-11-09T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Node.js", url: "https://nodejs.org/en/blog/vulnerability/november-2026-security-releases" }
  ]
category: 'frontend'
---

# Node.js corrige 7 failles critiques HTTP/2 et TLS

Le 11 novembre 2026, le projet Node.js a publié des releases de sécurité sur ses trois lignes actives — **v22.23.5**, **v24.22.3** et **v26.13.1** — pour corriger sept vulnérabilités de sévérité **High**, ainsi que plusieurs failles Medium et Low.

## Les failles les plus sensibles

Parmi les correctifs HTTP/2 : un crash à distance déclenché via une assertion `CHECK_EQ`, et une fuite de heap provoquée par une écriture TLS de longueur zéro. Le module `respondWithFile()` était par ailleurs exposé à un use-after-free. Enfin, une faille de renégociation TLS 1.2 permettait de contourner l'authentification côté client — un vecteur particulièrement sensible pour tout service exposant une API derrière du TLS mutuel.

## Versions concernées

Les trois branches actives de Node.js sont touchées et doivent être mises à jour : 22.x, 24.x et 26.x. Aucune branche n'est épargnée, ce qui élargit la surface d'exposition à la quasi-totalité des déploiements en production.

## Pourquoi ça compte

Pour une équipe frontend, l'impact dépasse le simple serveur applicatif : Node.js porte aussi la chaîne de build (bundlers, serveurs de dev, CI/CD). Un crash HTTP/2 à distance ou un contournement d'authentification TLS justifie une mise à jour rapide, sur les environnements de production comme sur l'outillage interne.
