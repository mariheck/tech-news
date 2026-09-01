---
title: "Next.js : vulnérabilité critique prévue pour le 26 août"
excerpt: "Vercel prévient d'une faille critique dans Next.js 16 et 15 à venir."
summary: "Vercel a publié le 21 août une alerte préventive : une vulnérabilité critique sera corrigée le 26 août dans Next.js 16.3.3 et 15.5.24. Les équipes auto-hébergées doivent planifier leur mise à jour."
date: 2026-08-17T00:00:00Z
reading_time: 3
sources:
  [
    { label: 'Next.js – upcoming security release', url: 'https://nextjs.org/blog/upcoming-nextjs-security-release-august-2026' },
    { label: 'programming.dev discussion', url: 'https://programming.dev/post/55351021' },
    { label: 'Next.js security advisories', url: 'https://nextjs.org/blog/tag/security' }
  ]
category: 'frontend'
---

# Next.js : vulnérabilité critique prévue pour le 26 août

Le 21 août 2026, Vercel a publié sur le blog officiel de Next.js une alerte préventive annonçant une mise à jour de sécurité planifiée pour le **26 août 2026**. La pratique de la pré-annonce — désormais habituelle chez Vercel — donne aux équipes quelques jours pour anticiper les mises à jour en production avant que le CVE complet ne soit publié.

## Ce qui est annoncé

La release de sécurité du 26 août corrigera **une vulnérabilité de sévérité critique** dans Next.js. Deux versions de correctif seront publiées simultanément :

- **Next.js 16.3.3** pour les projets sur le mineur 16
- **Next.js 15.5.24** pour les projets sur le mineur 15

La publication des versions sera accompagnée de l'advisory complet, incluant l'identifiant CVE, l'impact détaillé, les versions affectées et les instructions de mise à niveau.

## Pourquoi anticiper

Vercel encourage les équipes à planifier leurs mises à jour **avant** que le correctif ne soit disponible, précisément pour éviter le rush post-annonce. Lors des précédentes release de sécurité Next.js (janvier et mai 2026), une partie des déploiements auto-hébergés avait mis plusieurs heures à être mis à jour, laissant des surfaces d'attaque ouvertes.

Les déploiements sur **Vercel** et les CDN partenaires (Cloudflare, Netlify, Fastly) reçoivent généralement des mitigations WAF automatiques dès la publication de l'advisory — mais ces protections ne remplacent pas la mise à jour du framework côté serveur.

## Quelles versions sont concernées

L'annonce ne précise pas les versions minimes affectées, mais la pratique de Vercel consiste à patcher les deux dernières lignes majeures actives (16.x et 15.x) et à recommander la mise à niveau vers la dernière version corrigée plutôt qu'un rétroport vers des versions intermédiaires plus anciennes.

## Ce que vous devez faire maintenant

Si vous gérez des projets Next.js en production :

1. **Identifiez vos versions** : vérifiez la version exacte de Next.js dans chacun de vos `package.json`.
2. **Planifiez la mise à jour pour le 26 août ou juste après** : bloquez du temps dans votre calendrier et préparez votre pipeline CI/CD pour un déploiement rapide.
3. **Activez les notifications de sécurité GitHub** sur le dépôt `vercel/next.js` pour être alerté dès la publication de l'advisory.
4. **Vérifiez votre hébergeur** : si vous utilisez Vercel, Cloudflare ou Netlify, renseignez-vous sur les mitigations automatiques disponibles.

## Contexte : un programme de sécurité qui se structure

Vercel a adopté en 2025 un programme de divulgation coordinée pour Next.js, avec des pré-annonces systématiques plusieurs jours avant chaque release de sécurité. Le programme prévoit également la publication de post-mortems détaillés et la coordination avec les CDN et hébergeurs majeurs pour minimiser la fenêtre d'exposition.

La sévérité **critique** signifie un score CVSS généralement supérieur à 9.0 — typiquement un vecteur d'exploitation à distance sans authentification. Les détails complets seront disponibles le 26 août sur le blog Next.js et dans les advisories GitHub de `vercel/next.js`.
