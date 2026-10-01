---
title: "RCE critique dans next/og : patchez Next.js d'urgence"
excerpt: "CVSS 9.5 dans ImageResponse, mise à jour immédiate"
summary: "Vercel corrige en urgence une RCE critique (CVE-2026-94545, CVSS 9.5) dans ImageResponse de next/og, causée par un défaut d'échappement SVG dans Satori. Next.js 16.3.6 et 15.5.26 sont disponibles."
date: 2026-09-21T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Next.js Blog", url: "https://nextjs.org/blog/nextjs-security-update-september-22-2026" },
    { label: "GitHub Advisory", url: "https://github.com/vercel/next.js/security/advisories/GHSA-vcvr-r3jv-pc5j" },
    { label: "Netlify Changelog", url: "https://www.netlify.com/changelog/2026-09-22-nextjs-imageresponse-vulnerability/" }
  ]
category: 'frontend'
---

# RCE critique dans next/og : patchez Next.js d'urgence

Le 22 septembre 2026, Vercel a publié une mise à jour de sécurité en urgence pour Next.js, corrigeant une vulnérabilité critique d'exécution de code à distance (RCE) dans l'implémentation Node.js de `ImageResponse`, le générateur d'images dynamiques du module `next/og`.

## Une faille notée 9.5 sur 10

Référencée **CVE-2026-94545** (GHSA-vcvr-r3jv-pc5j), la faille obtient un score CVSS de **9.5**, un niveau critique. Elle touche les versions de Next.js comprises entre 16.2.0 et 16.3.5 lorsqu'elles utilisent `ImageResponse` côté serveur pour générer des images Open Graph, des cartes de partage social ou tout visuel rendu dynamiquement.

L'origine du problème remonte à **Satori**, la bibliothèque de rendu JSX-vers-SVG utilisée en amont par `next/og` (GHSA-wx4j-mvgx-mqwp) : un défaut d'échappement dans la sérialisation SVG permet d'injecter du contenu exécutable dans le document généré.

## Next.js 15.x épargné du RCE, mais durci quand même

Bonne nouvelle pour les projets encore sur Next.js 15 : cette branche **n'est pas vulnérable au RCE**. Vercel a toutefois publié Next.js **15.5.26** en parallèle, qui intègre un durcissement préventif de la même surface de code.

Pour Next.js 16, la version corrigée est **16.3.6**.

## Que faire maintenant

Si votre projet génère des images dynamiques via `next/og` (`ImageResponse`), la mise à jour n'est pas optionnelle :

```bash
npm install next@16.3.6
# ou, si vous êtes encore sur la branche 15
npm install next@15.5.26
```

Vercel a par ailleurs annoncé une seconde salve de correctifs de sécurité prévue pour le 30 septembre (16.3.7 / 15.5.27), qui doit regrouper neuf vulnérabilités supplémentaires — à surveiller de près la semaine prochaine.
