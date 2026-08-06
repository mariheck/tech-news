---
title: "Chrome 151 : textStream, usermedia et crypto post-quantique"
excerpt: "Le 28 juillet, Chrome 151 apporte des API web et CSS attendues en prod."
summary: "Chrome 151 est disponible en stable depuis le 28 juillet 2026. Au menu : textStream() sur les flux byte, l'élément déclaratif <usermedia>, les métriques soft navigation pour les SPA, et l'intégration des algorithmes post-quantiques ML-KEM et ML-DSA dans la Web Cryptography API."
date: 2026-07-27T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Chrome Releases – stable channel", url: "https://chromereleases.googleblog.com/2026/" },
    { label: "Chrome 151 release notes", url: "https://developer.chrome.com/release-notes/151" },
    { label: "Chrome 151 beta blog", url: "https://developer.chrome.com/blog/chrome-151-beta" },
    { label: "Gigazine – Chrome 151 textStream", url: "https://gigazine.net/gsc_news/en/20260729-google-chrome-151" },
    { label: "digitalapplied – Chrome 151 devs", url: "https://www.digitalapplied.com/blog/chrome-151-stable-what-devs-should-note" }
  ]
category: 'frontend'
---

# Chrome 151 : textStream, usermedia et crypto post-quantique

Chrome 151 est passé en version stable le **28 juillet 2026**, apportant plusieurs API et améliorations de plateforme significatives pour les développeurs frontend. Cette version marque aussi la fin du support de macOS 12.

## `textStream()` : lire un flux comme un flux de texte

La méthode `textStream()` est maintenant disponible sur `Request`, `Response` et `Blob`. Elle permet de lire le contenu d'un flux binaire directement comme un flux de texte, sans passer par un `TextDecoderStream` intermédiaire :

```javascript
const response = await fetch('/api/stream');
for await (const chunk of response.textStream()) {
  console.log(chunk); // string directement
}
```

Avant cette API, la chaîne standard était :

```javascript
const reader = response.body
  .pipeThrough(new TextDecoderStream())
  .getReader();
```

Pour les interfaces de chat ou de génération de contenu streamé, `textStream()` simplifie considérablement le code client.

## `<usermedia>` : caméra et micro sans JavaScript

L'élément `<usermedia>` introduit une approche **déclarative** pour accéder à la caméra et au microphone :

```html
<usermedia id="cam" type="camera"></usermedia>
<video autoplay srcobject="cam"></video>
```

L'élément gère le flow complet d'autorisation (prompt, permissions, états) côté HTML. Il est activé par l'utilisateur (user-activated), ce qui signifie que le navigateur traite la demande de permission comme venant d'une interaction directe.

Pour les formulaires de prise de photo, les applications vidéo légères, ou les interfaces de scan, cela remplace plusieurs dizaines de lignes de code `getUserMedia()`.

## Métriques de navigation soft pour les SPA

Chrome 151 introduit les types d'entrées de performance `soft-navigation` et `interaction-contentful-paint` dans la Web Performance API. Jusqu'ici, les Core Web Vitals ne mesuraient que la navigation initiale — les navigations côté client dans les SPA étaient ignorées.

Ces nouvelles métriques permettent de mesurer la **latence perçue** lors de transitions de routes dans React, Vue ou SvelteKit :

```javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.entryType, entry.startTime, entry.duration);
  }
});
observer.observe({ type: 'soft-navigation', buffered: true });
observer.observe({ type: 'interaction-contentful-paint', buffered: true });
```

Le Soft Navigations panel dans DevTools affiche ces métriques avec un indicateur visuel dans la timeline.

## Cryptographie post-quantique dans la Web Crypto API

Chrome 151 ajoute les algorithmes post-quantiques à la `SubtleCrypto` API :

- **ML-KEM** (CRYSTALS-Kyber) : échange de clé résistant aux calculateurs quantiques
- **ML-DSA** (CRYSTALS-Dilithium) : signature numérique post-quantique
- **X-Wing** : hybride X25519 + ML-KEM pour la période de transition
- **ChaCha20-Poly1305** : AEAD symétrique haute performance

```javascript
const keyPair = await crypto.subtle.generateKey(
  { name: 'ML-KEM', parameterSet: 'ML-KEM-768' },
  true,
  ['encapsulate', 'decapsulate']
);
```

Ces algorithmes répondent aux recommandations NIST publiées en 2024. Leur intégration dans la Web Crypto API les rend accessibles sans dépendance externe, au même niveau que RSA ou ECDSA.

## CSS et HTML : précisions

**`ruby-overhang`** : nouvelle propriété CSS qui contrôle si les annotations ruby peuvent dépasser sur le texte adjacent (`auto`, `spaces`, `none`).

**`position-anchor` initial value** : la valeur initiale passe de `none` à `normal`, en alignement avec la spec CSS Anchor Positioning. `normal` se comporte comme `none` quand `position-area` est `none`, et comme `auto` autrement. Cette correction aligne Chrome avec Firefox et Safari.

**`shadowrootslotassignment`** : attribut sur `<template>` qui permet d'exprimer en HTML l'assignation manuelle des slots Shadow DOM, sans JavaScript.

**Momentum events** : l'attribut `momentum` sur les événements `wheel` permet de distinguer le défilement par inertie (après un geste) des entrées directes de l'utilisateur.

## Sécurité

Chrome 151 corrige **370 failles de sécurité**. C'est également la première version à exiger **macOS 13 ou supérieur** — macOS 12 Monterey n'est plus supporté.

---

La prochaine version stable, Chrome 152, est prévue pour le **25 août 2026**.
