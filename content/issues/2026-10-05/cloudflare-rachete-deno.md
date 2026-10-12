---
title: "Cloudflare rachète Deno et son créateur Ryan Dahl"
excerpt: "L'équipe Deno rejoint Cloudflare pour les Workers"
summary: "Cloudflare annonce que toute l'équipe de Deno, dont son créateur Ryan Dahl, rejoint l'entreprise pour fusionner le runtime Deno avec workerd et faciliter le self-hosting des Workers."
date: 2026-10-05T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Cloudflare Blog", url: "https://blog.cloudflare.com/deno-joins-cloudflare/" },
    { label: "The New Stack", url: "https://thenewstack.io/cloudflare-acquires-deno-ryan-dahl/" }
  ]
category: 'frontend'
---

# Cloudflare rachète Deno et son créateur Ryan Dahl

Cloudflare a annoncé le 9 octobre 2026, dans un billet signé Kenton Varda et **Ryan Dahl**, que l'équipe entière derrière **Deno** — le runtime JavaScript/TypeScript créé par Dahl après Node.js — rejoint l'entreprise. Les montants de l'opération n'ont pas été communiqués ; Deno avait jusque-là levé environ 26 millions de dollars, dont une série A menée par Sequoia.

## Fusionner workerd et celld

L'objectif affiché est de fusionner **workerd**, le runtime qui fait tourner les Workers et Durable Objects de Cloudflare, avec **celld**, l'implémentation open source de Deno pour Workers/Durable Objects sortie en août 2026. Le but : simplifier le self-hosting des Workers en dehors de l'infrastructure Cloudflare.

## Ce qui change pour les utilisateurs de Deno

Le runtime Deno autonome reçoit encore douze mois de correctifs de bugs et de sécurité avant l'arrêt de son développement — il restera open source. **Deno Deploy**, le service d'hébergement, doit fermer dans les six mois suivant l'annonce, avec un accompagnement à la migration prévu pour les clients payants. Le registre **JSR** continuerait, lui, de tourner sur l'infrastructure Cloudflare.

## Pourquoi ça compte

C'est un nouveau chapitre dans la consolidation des runtimes JavaScript : après avoir créé Node.js puis Deno pour le corriger, Ryan Dahl rejoint l'un des plus gros opérateurs d'edge computing du marché — un signal fort sur l'avenir des runtimes JS/TS indépendants face aux plateformes intégrées.
