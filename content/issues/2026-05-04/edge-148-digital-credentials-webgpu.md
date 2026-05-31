---
title: "Edge 148 : Digital Credentials, WebGPU et IA locale"
excerpt: "Edge 148 : une vingtaine de nouvelles API web et IA locale embarquée."
summary: "Edge 148 livre une vingtaine de features web : Digital Credentials API, traduction et détection de langue on-device, WebGPU Compatibility Mode, CSP hashing, Lazy Loading audio/vidéo et la navigation agentique Copilot (Enterprise)."
date: 2026-05-04T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Edge 148 release notes', url: 'https://learn.microsoft.com/en-us/microsoft-edge/web-platform/release-notes/148' },
    { label: 'Edge 148 GitHub source', url: 'https://github.com/MicrosoftDocs/edge-developer/blob/main/microsoft-edge/web-platform/release-notes/148.md' }
  ]
category: 'frontend'
---

# Edge 148 : Digital Credentials, WebGPU et IA locale

Publié le 7 mai 2026, Edge 148 embarque une vingtaine de fonctionnalités web platform significatives — certaines en commun avec Chrome 148, d'autres exclusives à Edge. Un tour d'horizon des plus notables.

## Digital Credentials API

La **Digital Credentials API** permet à un site web de déclencher l'émission ou la présentation de justificatifs numériques — permis de conduire, diplôme, certificat professionnel — depuis un portefeuille numérique (digital wallet) sur l'appareil de l'utilisateur. Un protocole standardisé pour faire le lien entre les émetteurs de justificatifs et les sites web qui les demandent.

## Traduction et détection de langue on-device

Edge 148 embarque deux nouvelles API propulsées par des modèles ML intégrés :

- **Language Detector API** — détecte la langue d'un texte directement dans le navigateur, sans appel réseau
- **Translator API** — traduit du texte on-device, avec les mêmes avantages de confidentialité et de latence

Ces deux API fonctionnent sans connexion internet et ne transmettent aucune donnée à des serveurs externes.

## WebGPU Compatibility Mode

Un nouveau mode d'opt-in (**WebGPU Compatibility Mode**) étend la couverture de WebGPU aux appareils qui ne supportent pas WebGPU standard, en s'appuyant sur des API graphiques plus anciennes : **OpenGL** et **Direct3D 11**. Les développeurs ciblant un public plus large pourront activer ce mode pour gagner en compatibilité au prix d'un sous-ensemble des fonctionnalités WebGPU.

Le même Edge 148 ajoute également la feature **`linear_indexing`** pour WebGPU, qui expose les built-ins `global_invocation_index` et `workgroup_index` dans les compute shaders WGSL.

## CSP hashing avancé

La Content Security Policy gagne en granularité avec le support des **URL-hashes et eval-hashes** dans les directives `script-src`. Il devient possible d'implémenter une CSP stricte basée sur les hashes et nonces uniquement, sans recourir à `unsafe-eval` — une amélioration significative pour les applications souhaitant durcir leur posture de sécurité.

## Extended Lifetime Shared Workers

L'option **`extendedLifetime`** sur les Shared Workers maintient le worker actif brièvement après que toutes les pages clientes ont été fermées. Utile pour compléter des opérations de nettoyage ou de persistance sans risquer de les interrompre.

## Autres ajouts notables

**Alignés avec Chrome 148 :**
- CSS name-only container queries (`@container` sans `container-type`)
- `revert-rule` et `at-rule()` dans `@supports` pour la détection de fonctionnalités CSS
- `text-decoration-skip-ink: all` (CJK inclus)
- Lazy Loading pour `<video>` et `<audio>` (`loading="lazy"`)
- Web Authentication Immediate UI Mode

**Spécifiques à Edge :**
- **Content Type in Resource Timing** — nouveau champ `contentType` dans `PerformanceResourceTiming`
- **Manifest Localization for PWAs** — noms, descriptions, icônes et raccourcis de PWA localisables directement dans le manifeste
- **`avar2` font format** — support du format de variable font avancé
- **`PaymentRequest.getSecurePaymentConfirmationCapabilities()`**
- **WebRTC Data Channel `alwaysNegotiateDataChannels`**

## Copilot Agentic Browsing (Enterprise Preview)

Edge 148 introduit en preview enterprise la **navigation agentique Copilot** : Copilot peut désormais naviguer sur des sites web, remplir des formulaires et effectuer des tâches multi-étapes pour le compte de l'utilisateur. Une capacité réservée aux comptes Enterprise dans un premier temps.

Note : le pinning des web apps dans la sidebar a été supprimé le 7 mai simultanément.
