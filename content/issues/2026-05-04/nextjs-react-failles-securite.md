---
title: "Next.js et React : alerte sécurité, 13 CVE"
excerpt: "Mise à jour critique obligatoire pour les projets Next.js auto-hébergés."
summary: "Vercel a publié un patch coordonné pour Next.js (15.5.18 et 16.2.6) et React (19.x), corrigeant 13 vulnérabilités — SSRF, DoS via RSC, XSS et cache poisoning. Toute installation auto-hébergée doit être mise à jour immédiatement."
date: 2026-05-04T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'Next.js Security Release', url: 'https://vercel.com/changelog/next-js-may-2026-security-release' },
    { label: 'Cloudflare WAF mitigation', url: 'https://developers.cloudflare.com/changelog/post/2026-05-06-react-nextjs-vulnerabilities/' },
    { label: 'Netlify response', url: 'https://www.netlify.com/changelog/2026-05-08-react-nextjs-security-vulnerabilities/' },
    { label: 'React 19.2.6 release', url: 'https://github.com/facebook/react/releases/tag/v19.2.6' },
    { label: 'Webhani - analyse du patch', url: 'https://www.webhani.com/blog/nextjs-security-release-may-2026' }
  ]
category: 'frontend'
---

# Next.js et React : alerte sécurité, 13 CVE

Le 6 mai 2026, Vercel a publié une mise à jour de sécurité coordonnée pour Next.js et React, corrigeant un total de 13 vulnérabilités. Une opération rare par son ampleur, qui a immédiatement mobilisé l'ensemble de l'écosystème d'hébergement.

## Les versions patchées

Côté **Next.js**, les deux versions corrigées sont **15.5.18** et **16.2.6**. Les versions intermédiaires des mineurs 15.x et 16.x ne reçoivent pas de rétroportage : la mise à niveau est impérative. Une première tentative de patch (versions 15.5.16 et 16.2.5) publiée dans la journée du 6 mai s'est révélée incomplète lorsque Turbopack est utilisé comme bundler ; un correctif de suivi a été publié le 7 mai.

Côté **React**, trois patches simultanés ont couvert toutes les lignes supportées : **19.0.6**, **19.1.7** et **19.2.6**. Ces mises à jour concernent les adaptateurs React Server Components — `react-server-dom-webpack`, `react-server-dom-parcel` et `react-server-dom-turbopack`.

## Les vulnérabilités majeures

### CVE-2026-23870 — DoS via React Server Components

Une faille dans le protocole RSC permettait à un attaquant d'envoyer des requêtes malformées pour provoquer une consommation mémoire excessive côté serveur. Le risque : saturation de l'instance et déni de service. Tous les projets utilisant les composants serveur de React sont concernés.

### CVE-2026-44578 — SSRF via WebSocket

Le gestionnaire d'upgrade WebSocket des versions auto-hébergées de Next.js (à partir de 13.4.13) pouvait être détourné pour initier des requêtes vers des services internes non exposés. Cette vulnérabilité est particulièrement critique en environnement cloud ou micro-services, où des API internes sont accessibles depuis le serveur Next.js.

### Autres vecteurs corrigés

- **Contournement de middleware** en App Router (prefetch de segments) et Pages Router (routes i18n)
- **Cache poisoning** sur les routes mettant en cache des réponses dynamiques
- **XSS** via nonces CSP ou scripts `beforeInteractive` dans `<Head>`
- **Abus de l'API d'optimisation d'images** pouvant entraîner une charge serveur excessive

Sur les 13 CVE, 6 sont classées « High » par Vercel.

## Réponse immédiate de l'écosystème

L'ampleur de la divulgation a déclenché des réactions rapides :

- **Cloudflare** a déployé des règles WAF dès le 6 mai pour mitiger les vecteurs SSRF et DoS connus au niveau réseau, protégeant les projets auto-hébergés derrière son infrastructure avant même la mise à jour des packages
- **Netlify** a publié le 8 mai ses recommandations pour les projets sur sa plateforme, confirmant que ses mitigations d'infrastructure étaient actives
- **Vercel** a activé des protections côté infrastructure pour les projets gérés directement sur sa plateforme

## Ce que vous devez faire

**Si votre projet est auto-hébergé (serveur propre, Docker, etc.) :**

1. Mettre à jour Next.js vers **15.5.18** ou **16.2.6** selon votre branche
2. Mettre à jour les packages `react-server-dom-*` vers **19.0.6**, **19.1.7** ou **19.2.6** selon votre ligne React
3. Vérifier que les en-têtes WebSocket ne peuvent pas être forgés par des requêtes externes dans votre configuration de reverse proxy
4. Invalider les caches des routes App Router après la mise à jour

**Si votre projet est déployé sur Vercel, Netlify ou Cloudflare :** les mitigations d'infrastructure sont actives, mais la mise à niveau des packages reste fortement recommandée pour la correction définitive.
