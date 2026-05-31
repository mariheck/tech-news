---
title: "Node.js 26 : Temporal API activée par défaut"
excerpt: "La nouvelle API de dates JavaScript est enfin dispo sans flag dans Node.js 26."
summary: "Node.js 26.0.0 active par défaut l'API Temporal, embarque V8 14.6 et introduit node:ffi en 26.1.0. Plusieurs API historiques sont supprimées. La branche entre en LTS en octobre 2026."
date: 2026-05-04T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Node.js 26.0.0 blog', url: 'https://nodejs.org/en/blog/release/v26.0.0' },
    { label: 'Node.js 26.1.0 blog', url: 'https://nodejs.org/en/blog/release/v26.1.0' },
    { label: 'Node.js v26.0.0 release', url: 'https://github.com/nodejs/node/releases/tag/v26.0.0' },
    { label: 'Node.js v26.1.0 release', url: 'https://github.com/nodejs/node/releases/tag/v26.1.0' }
  ]
category: 'frontend'
---

# Node.js 26 : Temporal API activée par défaut

Node.js 26.0.0 est sorti le 5 mai 2026 en tant que nouvelle version « Current », suivie dès le 7 mai par Node.js 26.1.0. Cette version marque une étape majeure : l'API Temporal, attendue depuis des années, est désormais disponible sans aucun flag expérimental.

## Temporal API : la fin de l'enfer des dates en JavaScript

L'une des annonces les plus significatives de Node.js 26 est l'**activation par défaut de l'API Temporal**, la refonte complète de la gestion des dates et heures en JavaScript. Temporal remplace l'objet `Date` — notoirement défaillant — par un ensemble d'API modernes, immuables et conscientes des fuseaux horaires.

Pour que Temporal fonctionne dans Node.js 26, une **chaîne d'outils Rust** est désormais requise dans les environnements de build. C'est un changement de build requis à noter si vous compilez Node.js depuis les sources.

Les développeurs peuvent désormais utiliser `Temporal.PlainDate`, `Temporal.ZonedDateTime`, `Temporal.Duration` et leurs équivalents directement, sans import ni flag.

## V8 14.6 et nouvelles méthodes JavaScript

Node.js 26 embarque **V8 14.6** (issu de Chromium 146), qui apporte plusieurs nouveautés du langage :

- **`Map.prototype.getOrInsert(key, defaultValue)`** et **`Map.prototype.getOrInsertComputed(key, fn)`** — deux méthodes d'upsert permettant d'insérer une valeur dans une Map seulement si la clé n'existe pas encore
- **`Iterator.concat(...iterables)`** — concaténation d'itérateurs sans avoir à les matérialiser en tableaux

## Breaking changes

La migration vers Node.js 26 implique plusieurs suppressions :

- **`http.writeHeader()`** supprimé — utiliser `writeHead()` à la place (API identique)
- **Modules `_stream_*` hérités** supprimés (`_stream_readable`, `_stream_writable`, etc.) — passer aux classes `stream.Readable`, `stream.Writable` standard
- **`module.register()`** marqué comme déprécié à l'exécution
- **`--experimental-transform-types`** supprimé

**Exigences de build relevées :**
- GCC ≥ 13.2 (abandon de GCC 12)
- Python ≥ 3.10 (Python 3.9 abandonné)
- Rust toolchain requis (pour Temporal)

**Undici 8.0.2** est embarqué comme client HTTP interne.

## Node.js 26.1.0 : module FFI et améliorations crypto

Deux jours après la sortie du major, **Node.js 26.1.0** a introduit plusieurs ajouts notables :

### Module `node:ffi` (expérimental)

Accessible via le flag `--experimental-ffi`, le nouveau module `node:ffi` permet de charger des bibliothèques natives dynamiques et d'appeler des symboles natifs directement depuis JavaScript — sans écrire de binding C++. L'accès est contrôlé par `--allow-ffi` dans le cadre du Permission Model.

### Crypto

- **`crypto.randomUUIDv7()`** — génère un UUID v7 (basé sur le timestamp, tri chronologique garanti)
- **`crypto.diffieHellman()`** accepte désormais les données de clé directement

### Test runner

- Support des mock timers pour `AbortSignal.timeout`
- Randomisation de l'ordre d'exécution des tests
- Nouvelle méthode `getTestContext()`

### SQLite

- `serialize()` et `deserialize()` pour la sérialisation des bases SQLite en mémoire
- Améliorations de performances pour les données ASCII

## Calendrier LTS

Node.js 26 est actuellement en phase « Current » et **entrera en LTS (Long Term Support) en octobre 2026**. C'est la ligne recommandée pour commencer à se familiariser avec Temporal et les nouvelles API, avant de la déployer en production à l'automne.
