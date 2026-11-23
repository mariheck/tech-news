---
title: "Solid 2.0 stable : l'async rejoint le cœur réactif"
excerpt: "SolidStart v2 reste sur Solid 1.x"
summary: "Solid.js atteint la version 2.0 stable après cinq ans de travail, avec les opérations asynchrones désormais intégrées au graphe réactif ; SolidStart v2 reste ciblé sur Solid 1.x."
date: 2026-11-16T00:00:00Z
reading_time: 3
sources:
  [
    { label: "AlternativeTo", url: "https://alternativeto.net/news/2026/11/solid-2-0-reaches-stable-after-five-years-rebuilding-async-into-its-reactive-core/" },
    { label: "Dev.to", url: "https://dev.to/lexlohr/what-is-new-in-solid-js20-11hk" },
    { label: "GitHub Discussion", url: "https://github.com/solidjs/solid-start/discussions/2281" }
  ]
category: 'frontend'
---

# Solid 2.0 stable : l'async rejoint le cœur réactif

Le 16 novembre 2026, le framework **Solid.js** a atteint sa version **2.0** stable, près de cinq ans après la 1.0, au terme de 23 release candidates publiées sur 14 semaines, 971 pull requests fusionnées et 753 issues closes.

## L'async entre dans le graphe réactif

Le changement central de cette version, titrée "The Long Hold" par l'équipe Solid, est architectural : les opérations asynchrones vivent désormais à l'intérieur du graphe réactif lui-même, plutôt qu'à côté de lui. Solid 1.x reste disponible et maintenu sur sa propre branche, publiée sur npm sous `solid-js@v1-latest`, avec une documentation dédiée sur v1.solidjs.com.

## SolidStart reste sur la branche 1.x

SolidStart v2, le métaframework associé à Solid, avait atteint sa propre version stable en août 2026 — mais il cible la branche **Solid 1.x**, pas la nouvelle 2.0. L'équipe le présente comme "le choix prêt pour la production pour les équipes qui maintiennent aujourd'hui des applications Solid v1". Les sources consultées ne détaillent pas de chemin de migration officiel de SolidStart vers Solid 2.0 à ce stade.

## Pourquoi ça compte

Après cinq ans de développement et 23 release candidates, Solid 2.0 change la donne sur la gestion de l'asynchrone côté réactivité — mais l'histoire côté métaframework pour du full-stack reste en suspens pour qui voudrait adopter 2.0 au-delà du cœur de la librairie.
