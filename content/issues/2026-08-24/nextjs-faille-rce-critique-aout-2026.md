---
title: "Next.js : deux failles RCE critiques corrigées"
excerpt: "16.3.3 et 15.5.24 patchent des RCE sur AVIF et Windows"
summary: "Next.js publie en urgence 16.3.3 et 15.5.24 pour corriger deux vulnérabilités RCE critiques : une via le traitement AVIF avec libheif/sharp, et une via CVE-2026-75604 ciblant les serveurs Windows avec Pages ou App Router."
date: 2026-08-24T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Next.js Security Release", url: "https://nextjs.org/blog/nextjs-security-release-august-2026-update" },
    { label: "Next.js Blog", url: "https://nextjs.org/blog/august-2026-security-release" },
    { label: "The Hacker News", url: "https://thehackernews.com/2026/08/nextjs-patches-critical-avif-and.html" },
    { label: "Netlify Changelog", url: "https://www.netlify.com/changelog/2026-08-25-nextjs-security-vulnerabilities/" }
  ]
category: 'frontend'
---

# Next.js : deux failles RCE critiques corrigées

Le 25 août 2026, l'équipe Next.js a publié des releases de sécurité urgentes pour les branches Active LTS (16.3.3) et Maintenance LTS (15.5.24). Deux vulnérabilités critiques permettant l'exécution de code arbitraire à distance (RCE) ont été identifiées et corrigées. La mise à jour est impérative pour toutes les applications auto-hébergées.

## Vulnérabilité 1 : RCE via le traitement AVIF (libheif/sharp)

La première faille concerne le pipeline d'optimisation d'images de Next.js. Lorsqu'une image au format AVIF contrôlée par un attaquant est soumise à l'optimiseur (via `next/image` ou l'API d'optimisation), une faille dans la bibliothèque `libheif` — utilisée en interne par `sharp` — permet d'exécuter du code arbitraire sur le serveur.

**Conditions d'exploitation :** l'application doit accepter des URLs d'images arbitraires (configuration `remotePatterns` large, ou upload d'images par les utilisateurs).

**Mitigation temporaire :** en attendant la propagation du correctif upstream dans `sharp`, Next.js a **désactivé l'optimisation AVIF par défaut** dans les versions patchées. Les images AVIF sont servies telles quelles, sans redimensionnement ni conversion.

Si votre application dépend de l'optimisation AVIF pour les performances, vous devrez attendre une prochaine release une fois le fix libheif intégré dans sharp.

## Vulnérabilité 2 : RCE non authentifié sur Windows (CVE-2026-75604)

La seconde vulnérabilité, référencée **CVE-2026-75604**, est encore plus préoccupante : elle permet une exécution de code à distance **sans authentification** sur les serveurs Next.js hébergés sous Windows, que l'application utilise le **Pages Router** ou l'**App Router**.

Les détails techniques précis ne sont pas encore publics (coordinated disclosure), mais la sévérité critique et l'absence d'authentification requise en font un vecteur d'attaque particulièrement dangereux.

**Périmètre :** serveurs Windows uniquement. Les déploiements Linux et macOS ne sont pas affectés par cette faille spécifique.

## Qui est concerné ?

| Situation | Action requise |
|---|---|
| App sur Vercel (quelle que soit la version) | Aucune — Vercel a appliqué les mitigations côté infrastructure |
| App auto-hébergée sous Linux/macOS | Mettre à jour pour la faille AVIF |
| App auto-hébergée sous Windows | **Mise à jour urgente** (CVE-2026-75604) |
| App sur Next.js < 15.x | Migrer vers 15.5.24 minimum |

## Comment mettre à jour

```bash
# Branche Active LTS
npm install next@16.3.3

# Branche Maintenance LTS
npm install next@15.5.24
```

Vérifiez ensuite votre configuration `next.config.*` pour identifier si vous avez des `remotePatterns` très permissifs, et auditez les points d'entrée d'images tierces dans votre application.

## Ce qu'il faut retenir

Ces deux vulnérabilités rappellent que Next.js, en tant que framework full-stack exposé au réseau, présente une surface d'attaque que les développeurs frontend ont tendance à sous-estimer. L'optimisation d'images — fonctionnalité perçue comme passive — peut devenir un vecteur d'attaque si les entrées ne sont pas strictement contrôlées.

La recommandation générale : maintenez Next.js à jour en permanence, configurez `remotePatterns` de façon restrictive, et si vous hébergez sous Windows, traitez cette mise à jour comme une priorité absolue.
