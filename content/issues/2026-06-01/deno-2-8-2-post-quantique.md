---
title: "Deno 2.8.2 : crypto post-quantique et kernel Jupyter réécrit"
excerpt: "ML-DSA, ML-KEM et ChaCha20 entrent dans Deno. Le kernel Jupyter aussi."
summary: "Deno 2.8.2 (3 juin) intègre la cryptographie post-quantique FIPS : ML-DSA (FIPS 204) et ML-KEM (FIPS 203), plus ChaCha20-Poly1305 et SHA-3 HMAC. La commande deno compile reçoit --bundle amélioré, et le kernel Jupyter est réécrit en JavaScript natif."
date: 2026-06-01T00:00:00Z
reading_time: 5
sources:
  [
    { label: "GitHub – Deno v2.8.2", url: "https://github.com/denoland/deno/releases/tag/v2.8.2" }
  ]
category: 'frontend'
---

# Deno 2.8.2 : crypto post-quantique et kernel Jupyter réécrit

Deno 2.8.2 est sorti le 3 juin 2026 avec un lot de fonctionnalités inhabituellement dense pour une version patch. Les deux ajouts les plus significatifs : l'intégration des **algorithmes cryptographiques post-quantiques** standardisés par le NIST, et la **réécriture complète du kernel Jupyter** en JavaScript natif.

## Cryptographie post-quantique

Deno 2.8.2 est parmi les premiers runtimes JavaScript à intégrer les **algorithmes post-quantiques** standardisés par le NIST en 2024, maintenant en voie de déploiement dans les applications production :

### ML-DSA (FIPS 204) — signature post-quantique

**ML-DSA** (Module Lattice-based Digital Signature Algorithm) est l'algorithme de signature numérique post-quantique standardisé sous FIPS 204. Il remplace RSA et ECDSA dans les contextes où la résistance aux ordinateurs quantiques est requise :

```js
const { publicKey, privateKey } = await crypto.subtle.generateKey(
  { name: 'ML-DSA', level: 44 }, // niveaux : 44, 65, 87
  true,
  ['sign', 'verify']
);

const signature = await crypto.subtle.sign('ML-DSA', privateKey, data);
const valid = await crypto.subtle.verify('ML-DSA', publicKey, signature, data);
```

### ML-KEM (FIPS 203) — encapsulation de clés post-quantique

**ML-KEM** (Module Lattice-based Key Encapsulation Mechanism), standardisé sous FIPS 203, est l'alternative post-quantique à ECDH pour l'échange de clés :

```js
const { publicKey, privateKey } = await crypto.subtle.generateKey(
  { name: 'ML-KEM', level: 768 }, // niveaux : 512, 768, 1024
  true,
  ['deriveBits']
);
```

### Autres ajouts cryptographiques

- **ChaCha20-Poly1305** : chiffrement authentifié largement utilisé dans TLS 1.3, désormais disponible via `crypto.subtle`
- **SHAKE / cSHAKE / TurboSHAKE** : fonctions de hash extensibles de la famille SHA-3
- **SHA-3 HMAC** : codes d'authentification de message basés sur SHA-3

Ces ajouts permettent à Deno de couvrir les suites cryptographiques modernes sans dépendances externes.

## `deno compile --bundle` amélioré

La commande `deno compile` reçoit un flag `--bundle` avec des capacités améliorées :

- **Résolution des dépendances** : les imports ESM sont correctement résolus et inclus dans le bundle
- **Support de `--minify`** : combiné avec `--bundle`, produit un exécutable optimisé
- **Tree-shaking** : les exports non utilisés sont éliminés lors du bundling

```bash
deno compile --bundle --minify --output=my-app ./src/main.ts
```

L'objectif est de simplifier la distribution d'applications Deno en un seul binaire optimisé — sans avoir besoin d'un outil de bundling séparé comme esbuild ou Rollup.

## Kernel Jupyter réécrit en JavaScript

Deno embarque depuis un moment un **kernel Jupyter** qui permet de l'utiliser comme backend pour les notebooks Jupyter et JupyterLab. Ce kernel était implémenté avec une dépendance sur **zeromq** (la bibliothèque de messagerie sur laquelle Jupyter s'appuie pour la communication entre le kernel et l'interface).

Dans 2.8.2, le kernel est entièrement réécrit en JavaScript natif, éliminant la dépendance zeromq. Les avantages :

- **Taille réduite** : zeromq est une dépendance native volumineuse
- **Portabilité améliorée** : moins de dépendances natives signifie moins de problèmes de compilation sur des architectures exotiques
- **Maintenance simplifiée** : un seul langage (TypeScript/JavaScript) pour l'ensemble du runtime

Pour les développeurs qui utilisent Deno dans des environnements de data science ou d'expérimentation (notamment avec les capacités de Jupyter pour l'intégration TypeScript), c'est une amélioration de stabilité et de compatibilité.

## Deno vs Bun vs Node.js en 2026

L'ajout de la cryptographie post-quantique dans Deno 2.8.2 est un différenciateur concret par rapport à Node.js (qui n'a pas encore ces algorithmes) et Bun (centré sur la performance plutôt que sur les nouvelles APIs Web). Pour les projets qui anticipent une migration vers TLS post-quantique ou qui travaillent dans des secteurs où la conformité FIPS sera bientôt obligatoire (finance, défense, santé), Deno 2.8.2 est maintenant une option viable.
