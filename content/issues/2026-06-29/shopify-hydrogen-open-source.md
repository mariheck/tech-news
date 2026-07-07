---
title: "Vercel et Shopify réinventent Hydrogen en open source"
excerpt: "Hydrogen quitte son runtime propriétaire pour tout le monde"
summary: "À Vercel Ship 26 le 30 juin, Vercel et Shopify annoncent la reconstruction complète de Hydrogen : open source, agnostique du runtime, avec adaptateurs pour Next.js, Remix, Astro, Svelte et Nuxt."
date: 2026-06-29T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Vercel – Hydrogen rebuild", url: "https://vercel.com/blog/vercel-and-shopify-are-rebuilding-hydrogen" },
    { label: "Vercel Ship 26 NYC", url: "https://vercel.com/ship/nyc" },
    { label: "Vercel Ship 2026 recap", url: "https://vercel.com/blog/vercel-ship-2026-recap" }
  ]
category: 'frontend'
---

# Vercel et Shopify réinventent Hydrogen en open source

Le 30 juin 2026, lors de la conférence Vercel Ship 26 à New York, Vercel et Shopify ont annoncé une reconstruction complète de Hydrogen, le framework e-commerce de Shopify jusqu'ici pensé pour tourner spécifiquement sur l'infrastructure Vercel/Oxygen.

## De framework propriétaire à couche agnostique

Le changement de fond : Hydrogen devient open source et agnostique du runtime. Concrètement, le nouveau Hydrogen n'imposera plus un framework ni un hébergeur particulier — les équipes pourront le brancher sur Next.js, Remix, Astro, Svelte ou Nuxt via des adaptateurs dédiés, plutôt que d'être contraintes au couple React + Vercel qui prévalait jusque-là.

Une API "bring-your-own-framework" est également annoncée, ce qui laisse la porte ouverte à des intégrations avec des frameworks non listés officiellement, du moment qu'ils implémentent le contrat d'adaptateur attendu par Hydrogen.

## Calendrier

Vercel vise un dépôt public dès juillet 2026, avec une bêta annoncée pour le troisième trimestre 2026. Rien n'indique à ce stade de date de disponibilité stable au-delà de cette bêta.

## Vercel Services, en toile de fond

La même conférence a aussi servi de cadre à l'annonce de Vercel Services, qui fait des microservices un citoyen de première classe de la plateforme Vercel : déploiement conjoint du frontend et du backend, avec communication service-à-service qui ne transite plus par l'internet public. Un signal supplémentaire que Vercel élargit son offre au-delà du seul frontend Next.js.

## Pourquoi ça compte pour un dev frontend

Pour les équipes e-commerce qui avaient adopté Hydrogen tout en souhaitant migrer vers un autre framework (ou qui l'évitaient justement à cause du lock-in Vercel/React), cette réécriture lève la principale objection technique. Reste à voir, une fois le dépôt public ouvert, si la qualité des adaptateurs tiers suit le rythme de l'adaptateur Next.js d'origine — c'est souvent là que les promesses d'agnosticisme de runtime se heurtent à la réalité de la maintenance.
