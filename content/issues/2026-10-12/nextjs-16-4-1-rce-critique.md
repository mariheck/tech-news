---
title: "Next.js corrige deux failles RCE critiques"
excerpt: "16.4.1 corrige deux CVE critiques notées CVSS 9.5"
summary: "Vercel a publié Next.js 16.4.1 et 15.5.28 le 14 octobre pour corriger deux failles RCE non authentifiées notées CVSS 9.5 : une dans les fonctions `use cache`, l'autre dans l'API d'optimisation d'images. Une faille DoS dans les Server Actions est aussi corrigée."
date: 2026-10-12T00:00:00Z
reading_time: 2
sources:
  [
    { label: "Advisory RCE use cache", url: "https://github.com/vercel/next.js/security/advisories/GHSA-673q-mjm6-r5xr" },
    { label: "Advisory RCE Image Opt", url: "https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw" },
    { label: "Next.js 16.4.1 notes", url: "https://github.com/vercel/next.js/releases/tag/v16.4.1" }
  ]
category: 'frontend'
---

# Next.js corrige deux failles RCE critiques

Le 14 octobre 2026, l'équipe Next.js a publié en urgence les versions **16.4.1** et **15.5.28**, qui corrigent deux failles de sécurité **critiques** notées CVSS v4 **9.5** — exploitables sans authentification, sans privilège ni interaction utilisateur.

## Deux chemins d'exécution de code distants

La première faille ([GHSA-673q-mjm6-r5xr](https://github.com/vercel/next.js/security/advisories/GHSA-673q-mjm6-r5xr)) touche l'App Router : une fonction `use cache` qui retourne plusieurs tableaux typés peut être détournée pour exécuter du code arbitraire côté serveur. Elle affecte les versions 16.0.0 à 16.4.0.

La seconde ([GHSA-2464-fhr4-w9xw](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw), CVE-2026-96889) vient d'une bibliothèque mémoire tierce utilisée par l'API d'optimisation d'images sur Linux/glibc. Son périmètre est plus large : 10.0.0 à 15.5.27, et 16.0.0 à 16.4.0. Le correctif nécessite aussi de mettre à jour `sharp` vers la version 0.35.5 ou supérieure.

Le même correctif referme une troisième faille, de sévérité "High", permettant un déni de service via les Server Actions.

## Pourquoi ça compte

Les deux failles critiques sont exploitables à distance, sans authentification, avec un impact maximal sur la confidentialité, l'intégrité et la disponibilité : tout projet en App Router ou utilisant l'optimisation d'images doit mettre à jour sans délai vers 16.4.1 ou 15.5.28.
