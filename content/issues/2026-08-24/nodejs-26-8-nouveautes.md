---
title: "Node.js 26.8.0 : REPL coloré et SIV en Cipher"
excerpt: "Node.js Current enrichit le REPL et les API cryptographiques"
summary: "Node.js 26.8.0 ajoute la coloration syntaxique dans le REPL, les modes SIV et GCM-SIV dans les API Cipher/Decipher, StatementSync.close() pour SQLite, et stabilise TracingChannel dans diagnostics_channel."
date: 2026-08-24T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Node.js Blog v26.8.0", url: "https://nodejs.org/en/blog/release/v26.8.0" },
    { label: "GitHub Release v26.8.0", url: "https://github.com/nodejs/node/releases/tag/v26.8.0" },
    { label: "Node.js Blog v26.8.1", url: "https://nodejs.org/en/blog/release/v26.8.1" }
  ]
category: 'frontend'
---

# Node.js 26.8.0 : REPL coloré et SIV en Cipher

Node.js 26.8.0 est sorti le 26 août 2026 (suivi immédiatement d'un 26.8.1 qui corrigeait uniquement le numéro de version affiché par `node --version`). Cette release apporte plusieurs améliorations pratiques qui touchent à la fois l'expérience développeur quotidienne et les capacités cryptographiques.

## Coloration syntaxique dans le REPL

La nouveauté la plus visible de cette version : le REPL Node.js affiche désormais la **coloration syntaxique de base** pour les entrées JavaScript.

```
$ node
Welcome to Node.js v26.8.0.
> const add = (a, b) => a + b
> add(2, 3)
5
```

Les mots-clés, les chaînes, les nombres et les opérateurs sont maintenant différenciés par couleur. C'est une amélioration ergonomique longtemps attendue, qui rapproche le REPL natif de l'expérience offerte par des outils comme `bun repl` ou les REPL de Python et Ruby.

## Modes SIV et GCM-SIV dans les API Cipher

Les modes **SIV (Synthetic Initialization Vector)** et **GCM-SIV** sont maintenant accessibles dans les API `Cipher` et `Decipher` de Node.js.

Ces modes sont des variantes d'AEAD (Authenticated Encryption with Associated Data) conçues pour être robustes à la réutilisation de nonce — l'une des erreurs cryptographiques les plus fréquentes en production. Avec GCM classique, réutiliser un nonce compromet complètement la confidentialité et l'authenticité du chiffrement. GCM-SIV dégrade moins gracieusement en cas de réutilisation.

```javascript
import { createCipheriv, randomBytes } from 'crypto';

const key = randomBytes(32);
const nonce = randomBytes(12);

const cipher = createCipheriv('aes-256-gcm-siv', key, nonce);
```

Pour les équipes qui implémentent du chiffrement côté serveur avec des clés partagées entre plusieurs processus ou workers, c'est une option plus sûre que AES-GCM classique.

## `StatementSync.prototype.close()` pour SQLite

L'API SQLite intégrée à Node.js (depuis la 22.5.0) gagne la méthode `StatementSync.prototype.close()`, qui permet de libérer explicitement les ressources d'une `PreparedStatement` sans attendre le garbage collector.

```javascript
import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync(':memory:');
const stmt = db.prepare('SELECT * FROM users WHERE id = ?');

// Utilisation
const user = stmt.get(42);

// Libération explicite
stmt.close();
```

C'est particulièrement utile dans les applications longue durée avec de nombreuses requêtes préparées, où l'accumulation de handles SQLite non fermés peut entraîner des fuites mémoire.

## `TracingChannel` stable dans `diagnostics_channel`

`TracingChannel` — l'API permettant de tracer des opérations asynchrones avec des canaux de début, de fin, d'erreur et d'asyncStart/asyncEnd — quitte le statut expérimental pour devenir **stable**.

```javascript
import diagnostics_channel from 'node:diagnostics_channel';

const channel = new diagnostics_channel.TracingChannel('my-lib:operation');

channel.traceSync(fn, {
  myContextData: 'value'
});
```

Cette stabilisation est une bonne nouvelle pour les auteurs de bibliothèques qui veulent offrir une observabilité fine sans dépendre d'outils tiers.

## Mises à jour des dépendances

- Certificats racine mis à jour vers NSS 3.126
- npm mis à jour vers 11.19.0 (dans Node.js 24.20.0 LTS sorti le même jour : NSS 3.125, npm 11.19.0, SQLite 3.53.4, timezone data 2026c)

La version LTS 24.20.0, sortie simultanément, est une release de maintenance sans nouvelles fonctionnalités — elle synchronise principalement les dépendances système.
