---
title: "Node.js corrige une RCE critique dans Brotli"
excerpt: "CVE-2026-111497, mise à jour immédiate conseillée"
summary: "Le 21 octobre 2026, le projet Node.js publie 10 correctifs de sécurité, dont une faille critique du décodeur Brotli pouvant mener à une exécution de code à distance. Node 22, 24 et 26 sont concernés."
date: 2026-10-19T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Node.js Security", url: "https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" },
    { label: "The Hacker News", url: "https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html" },
    { label: "Qualys Blog", url: "https://blog.qualys.com/product-tech/2026/10/23/node-js-patches-brotli-remote-code-execution-flaw-find-vulnerable-runtimes-before-attackers-do" }
  ]
category: 'frontend'
---

# Node.js corrige une RCE critique dans Brotli

Le 21 octobre 2026, le projet Node.js a publié une salve de **10 correctifs de sécurité**, touchant les branches **22.x**, **24.x** et **26.x**. La faille la plus sérieuse concerne le décodeur Brotli embarqué dans le runtime.

## Une écriture hors limites dans le décodeur Brotli

Référencée **CVE-2026-111497**, la vulnérabilité provient d'une écriture hors limites (*out-of-bounds write*) dans le décodeur Brotli intégré à Node.js : une entrée malformée peut dépasser un tampon interne de 8 octets, ouvrant la voie à un plantage, une fuite mémoire, ou dans le pire des cas une **exécution de code à distance**. Elle est notée **High** et touche les trois branches maintenues.

Les versions corrigées sont **22.23.4**, **24.22.1** et **26.12.1**. Les branches antérieures à Node 22, déjà en fin de vie, ne reçoivent aucun correctif.

## Neuf autres failles, de High à Low

Le lot inclut aussi trois autres failles **High** liées à la validation réseau : une troncature de nom d'hôte via un octet NUL dans `dns.resolve*()` (CVE-2026-105482), un contournement de `tls.checkServerIdentity()` par IP en chiffres pleine largeur (CVE-2026-105483), et une confusion octal/décimal sur des IPv4 à zéro de tête qui fait valider un certificat pour la mauvaise adresse (CVE-2026-106069). Trois de ces correctifs réparent plus complètement des failles déjà patchées par le passé.

S'ajoutent des failles **Medium** (rejeu de réponses sur sockets keep-alive, contournement DNS par IPv4 non canonique, caches de `crypto.randomUUID()` et `randomInt()` figés dans les snapshots de démarrage) et **Low** (fuite via `zlib.ZipFile`, règles `--allow-fs-read`/`--allow-fs-write` trop permissives, `fs.realpathSync()` contournant le Permission Model).

## Pourquoi ça compte

D'après des analyses parues le 23 octobre, le bug Brotli proviendrait d'un code de décodage partagé avec **Bun** et certaines implémentations **Python**, ce qui élargirait potentiellement la surface d'impact au-delà de Node.js — à vérifier auprès de ces projets respectifs avant de conclure à une exposition directe.
