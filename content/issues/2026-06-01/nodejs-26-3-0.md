---
title: "Node.js 26.3.0 : permission.drop, httpValidation et plus"
excerpt: "La nouvelle version mineure enrichit le modèle de permissions."
summary: "Node.js 26.3.0 (1er juin) apporte permission.drop() pour révoquer des permissions au runtime, une option httpValidation pour les headers HTTP, un Buffer.poolSize porté à 64 KiB et une mise à jour des certificats racine vers NSS 3.123.1."
date: 2026-06-01T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Node.js Blog – v26.3.0", url: "https://nodejs.org/en/blog/release/v26.3.0" }
  ]
category: 'frontend'
---

# Node.js 26.3.0 : permission.drop, httpValidation et plus

Node.js 26.3.0 est sorti le 1er juin 2026. Cette version SEMVER-MINOR de la branche Current (26.x) apporte plusieurs nouvelles fonctionnalités : une API de gestion des permissions au runtime, une validation renforcée des headers HTTP, et des ajustements internes à l'allocation mémoire des Buffers.

## `permission.drop()` : révocation de permissions au runtime

La nouveauté la plus intéressante est l'ajout de **`permission.drop()`**, une API qui permet de révoquer des permissions au cours de l'exécution du processus.

Node.js dispose depuis quelques versions d'un modèle de permissions activé via le flag `--permission` qui restreint l'accès au système de fichiers, à la création de workers et à d'autres ressources sensibles. Jusqu'ici, les permissions accordées au démarrage étaient fixes pour la durée de vie du processus.

Avec `permission.drop()`, un processus peut maintenant **réduire sa propre surface d'attaque** après avoir terminé les opérations qui nécessitaient des privilèges élevés :

```js
import { permission } from 'node:process';

// Phase d'initialisation : accès aux fichiers nécessaire
await loadConfig('./config.json');
await loadPlugin('./plugin.js');

// Suppression de la permission après chargement
permission.drop('fs');

// À partir d'ici, toute tentative d'accès au système de fichiers
// lèvera une erreur, même depuis le code chargé dynamiquement
```

Ce pattern est particulièrement utile pour les serveurs qui chargent des plugins tiers au démarrage : on accorde temporairement l'accès au filesystem pour le chargement, puis on le retire avant de commencer à traiter des requêtes.

## `httpValidation` : validation stricte des headers

Node.js 26.3.0 introduit une nouvelle option **`httpValidation`** pour les modules `node:http` et `node:https`. Quand elle est activée, les noms et valeurs de headers HTTP sont validés selon les RFC correspondantes avant transmission.

```js
const server = http.createServer({ httpValidation: true }, (req, res) => {
  // Headers malformés lèveront une erreur plutôt que d'être transmis silencieusement
  res.setHeader('X-Custom-Header', 'valeur valide');
  res.end('OK');
});
```

Par défaut, l'option est à `false` pour maintenir la compatibilité ascendante. L'activer est recommandé pour les nouvelles applications — elle prévient la transmission silencieuse de headers malformés qui peuvent conduire à des vulnérabilités d'injection HTTP.

## Buffer.poolSize porté à 64 KiB

La taille du pool interne de `Buffer` passe de 8 KiB à **64 KiB**. Ce pool est utilisé pour les allocations de petits Buffers (< 4 KiB) — l'allouer par blocs de 8 KiB signifiait des appels à l'allocateur natif fréquents pour les applications qui créent beaucoup de petits Buffers.

Le passage à 64 KiB réduit la pression sur l'allocateur et améliore les performances pour les workloads I/O intensifs (serveurs HTTP, traitement de fichiers, parsing binaire).

## Certificats racine : NSS 3.123.1

Les certificats racine embarqués sont mis à jour vers **NSS 3.123.1** (Network Security Services). Cette mise à jour inclut l'ajout de nouvelles autorités de certification et la révocation de certificats expirés ou compromis. Pour les applications Node.js qui font des requêtes HTTPS vers des APIs utilisant des certificats récents, cette mise à jour est utile.

## Note sur les binaires macOS universels

Le changelog 26.3.0 inclut un avertissement : la prise en charge des **binaires universels macOS** (qui combinent les architectures Intel x86_64 et Apple Silicon arm64 dans un seul binaire) pourrait être réduite dans une future version. Les utilisateurs macOS sur Intel qui dépendent de ces binaires devraient anticiper une transition potentielle.

Node.js 26.x est la branche Current — elle recevra le statut LTS en octobre 2026.
