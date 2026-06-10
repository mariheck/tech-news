---
title: "TC39 avance 11 propositions ECMAScript en juin 2026"
excerpt: "Iterator.concat, ArrayBuffer immuable et APIs binaires avancent."
summary: "TC39 a avancé 11 propositions JavaScript lors de sa réunion début juin. Les plus notables : Iterator.concat() pour chaîner des itérateurs, Immutable ArrayBuffer avec .transferToImmutable(), des fonctions de précision mathématique et de nouvelles APIs binaires."
date: 2026-06-01T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Socket.dev – TC39 11 proposals", url: "https://socket.dev/blog/tc39-advances-11-proposals-for-math-precision-binary-apis-and-more" }
  ]
category: 'frontend'
---

# TC39 avance 11 propositions ECMAScript en juin 2026

TC39, le comité qui standardise JavaScript via ECMAScript, a tenu sa réunion de début juin 2026 et avancé **11 propositions** dans le processus de standardisation. Voici les plus significatives pour le développement web quotidien.

## Iterator.concat() : combiner des itérateurs

**`Iterator.concat()`** est la proposition la plus directement utile de cette session. Elle ajoute une méthode statique qui combine plusieurs itérateurs en un seul :

```js
const evens = [2, 4, 6].values();
const odds = [1, 3, 5].values();

const all = Iterator.concat(evens, odds);
// → 2, 4, 6, 1, 3, 5

// Fonctionne avec les méthodes de la proposition Iterator Helpers
const result = Iterator.concat(evens, odds)
  .filter(n => n > 2)
  .take(3)
  .toArray();
// → [4, 6, 3]
```

La proposition s'intègre naturellement avec les **Iterator Helpers** (déjà en stage avancé), qui apportent `.map()`, `.filter()`, `.take()` et autres sur les itérateurs. `Iterator.concat()` complète cet ensemble pour les cas où on veut traiter séquentiellement plusieurs sources de données lazily sans créer de tableaux intermédiaires.

Statut : la proposition avance vers le stage suivant, ce qui signifie une standardisation formelle dans ECMAScript 2027 ou 2028.

## Immutable ArrayBuffer : mémoire partagée en lecture seule

**Immutable ArrayBuffer** résout un problème de sécurité dans le partage de mémoire entre workers. Aujourd'hui, un `SharedArrayBuffer` partagé entre un worker et le thread principal peut être modifié par l'un ou l'autre — ce qui impose de la synchronisation et des vérifications de cohérence.

La proposition ajoute deux méthodes :
- **`.transferToImmutable()`** : transfère le contenu de l'ArrayBuffer dans un nouveau buffer immuable (l'original est neurotomisé)
- **`.sliceToImmutable()`** : crée un buffer immuable à partir d'une plage

```js
const buffer = new ArrayBuffer(1024);
// ... remplissage des données ...

const frozen = buffer.transferToImmutable();
// frozen ne peut plus être modifié
// Peut être partagé librement entre workers sans risque de modification

const worker = new Worker('./consumer.js');
worker.postMessage({ data: frozen }, [frozen]); // transfert zero-copy
```

Les buffers immuables peuvent être transférés entre workers en **zero-copy** — sans duplication — puisque l'immuabilité garantit qu'aucun des destinataires ne peut modifier les données sous-jacentes.

## Précision mathématique et APIs binaires

Plusieurs propositions autour de la **précision numérique** avancent ensemble. JavaScript utilise le format IEEE 754 double précision pour tous ses nombres, ce qui introduit des imprécisions bien connues sur les arithmétiques décimales. Les propositions en cours visent à exposer des opérations qui préservent la précision pour des cas comme le calcul financier ou scientifique.

Les **APIs binaires** concernent principalement une meilleure manipulation des structures de données binaires — parsing de formats de fichiers, protocoles réseau, WebAssembly interop. Les détails des propositions spécifiques ne sont pas encore documentés publiquement mais incluent des primitives pour lire et écrire des types numériques avec contrôle explicite de l'endianness et de l'alignement.

## Comment suivre les propositions

Le répertoire officiel `tc39/proposals` sur GitHub liste toutes les propositions avec leur statut actuel. Pour les propositions les plus proches de la standardisation (Stage 3 et 4), il est pertinent de vérifier le support dans les moteurs JavaScript actuels — V8 (Chrome, Node.js), SpiderMonkey (Firefox) et JavaScriptCore (Safari) implémentent souvent les propositions Stage 3 en mode expérimental.

Les onze propositions avancées cette session seront formellement discutées lors de la prochaine réunion TC39 et pourraient être intégrées dans ECMAScript 2027 pour les plus avancées.
