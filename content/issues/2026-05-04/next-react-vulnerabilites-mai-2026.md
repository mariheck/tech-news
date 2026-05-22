---
title: "Next.js et React : 12 CVEs critiques, mise à jour immédiate requise"
excerpt: "Vercel et Meta corrigent 12 failles dans Next.js et React Server Components le 6 mai."
summary: "Le 6 mai 2026, Vercel publie des correctifs pour 11 failles dans Next.js et 1 dans React Server Components. Middleware bypass, XSS, SSRF et DoS : les déploiements self-hosted en App Router sont les plus exposés. Mise à jour vers 15.5.18 ou 16.2.6 requise immédiatement."
date: 2026-05-04T00:00:00Z
readingTime: 5
sources:
  - label: "Vercel Changelog"
    url: "https://vercel.com/changelog/next-js-may-2026-security-release"
  - label: "Netlify Changelog"
    url: "https://www.netlify.com/changelog/2026-05-08-react-nextjs-security-vulnerabilities/"
  - label: "Cloudflare WAF Mitigations"
    url: "https://developers.cloudflare.com/changelog/post/2026-05-06-react-nextjs-vulnerabilities/"
  - label: "Cyber Kendra"
    url: "https://www.cyberkendra.com/2026/05/react-and-nextjs-hit-with-12-security.html"
  - label: "webhani.com — 13 CVEs"
    url: "https://www.webhani.com/blog/nextjs-security-release-may-2026"
  - label: "Akamai — CVE-2026-23864"
    url: "https://www.akamai.com/blog/security-research/cve-2026-23864-react-nextjs-denial-of-service"
category: frontend
---

Le 6 mai 2026, Vercel et Meta ont divulgué conjointement douze vulnérabilités de sécurité : onze dans Next.js et une dans le package `react-server-dom-*`. Un correctif de suivi a été publié le 7 mai. La sévérité et l'étendue de cette publication en font l'une des plus significatives pour l'écosystème Next.js depuis l'affaire du middleware bypass de décembre 2025.

## Ce qui a été patché

Les vulnérabilités se répartissent en cinq catégories :

**Middleware bypass (2 CVEs)**

- **CVE-2026-44575** : des URLs spécialement forgées avec suffixe `.rsc` ou `segment-prefetch` peuvent résoudre vers la page cible sans jamais déclencher les règles de middleware — permettant d'accéder à du contenu protégé sans vérification d'autorisation.
- **CVE-2026-44574** : des query parameters injectés dans la requête modifient les valeurs de routes dynamiques, contournant à nouveau les middlewares de protection.

**SSRF (1 CVE)**

- **CVE-2026-44578** : un attaquant non authentifié peut, via une requête HTTP forgée ciblant le handler WebSocket upgrade, forcer le processus Next.js à émettre un GET interne vers n'importe quel hôte accessible depuis le serveur — services de métadonnées cloud, panneaux d'administration, APIs internes — et lire la réponse. Ce vecteur n'affecte **pas** les déploiements hébergés sur la plateforme Vercel.

**XSS (1 CVE)**

- **CVE-2026-44581** : une faille introduit un vecteur de cross-site scripting dans les applications App Router qui utilisent des CSP nonces — retournant précisément contre les utilisateurs le mécanisme censé les protéger.

**Déni de service (3 CVEs et plus)**

- **CVE-2026-23869** (CVSS 7.5) : une requête HTTP forgée ciblant un endpoint de Server Function peut, lors de la désérialisation, déclencher une utilisation CPU excessive menant au DoS. Ne requiert aucune authentification.
- **CVE-2026-23864** : DoS par épuisement mémoire dans React Server Components et Next.js App Router.
- **CVE-2026-23870** : DoS via React Server Components, CVSS 7.5, affectant Next.js 13.x, 14.x, 15.x et 16.x.

## Versions affectées et correctifs

| Composant | Versions affectées | Version corrigée |
|---|---|---|
| Next.js | 13.x, 14.x, 15.x, 16.x | **15.5.18** / **16.2.6** |
| react-server-dom-* | 19.0.x, 19.1.x, 19.2.x | 19.0.6 / 19.1.7 / 19.2.6 |

**Important :** aucun patch n'est prévu pour les versions 13.x et 14.x. Les projets sur ces versions doivent migrer vers 15.5.18 ou 16.2.6.

## Ce que vous devez faire maintenant

1. **Mettre à jour Next.js** vers 15.5.18 ou 16.2.6 et redéployer.
2. **Si vous utilisez `react-server-dom-*` hors de Next.js**, synchroniser la version du package React Server Components avec votre minor React (19.0.6, 19.1.7 ou 19.2.6).
3. **Déploiements self-hosted** : priorité absolue sur le CVE-2026-44578 (SSRF) et les middleware bypass — la plateforme Vercel gère ces mitigations côté infrastructure, mais aucun autre hébergeur ne peut garantir la même chose sans mise à jour.

Cloudflare a également publié des règles WAF pour atténuer les vecteurs connus pendant la période de migration. Pour les environnements Netlify, la mise à jour et le redéploiement suffisent : les dépendances patched React Server Components sont embarquées dans les versions corrigées de Next.js.

## Contexte

Cette publication intervient moins d'un mois après un DoS critique ciblant les mêmes composants (avril 2026) et confirme que la surface d'attaque des Server Components en production est activement explorée. L'intégration croissante de React Server Components dans des architectures d'agents IA (Server Actions, Server Functions) élargit mécaniquement les vecteurs exposés. À surveiller de près dans les semaines à venir.
