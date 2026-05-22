---
title: "Smashing Meets Style Sheets : CSS en mouvement, ancres et jeux sans JS"
excerpt: "Le 6 mai, Smashing réunit Chris Coyier, Juan Diego Rodriguez et Lyra Rebane sur le CSS moderne."
summary: "Trois talks CSS le 6 mai 2026 : Chris Coyier explore les animations d'entrée/sortie en CSS pur, Juan Diego Rodriguez démystifie l'anchor positioning, et Lyra Rebane démontre la création de jeux interactifs sans une ligne de JavaScript. Un aperçu dense de ce que la plateforme web permet aujourd'hui."
date: 2026-05-04T00:00:00Z
readingTime: 4
sources:
  - label: "Smashing Meets Style Sheets"
    url: "https://smashingconf.com/meets-style-sheets"
  - label: "Programme de l'événement"
    url: "https://smashingconf.com/meets-style-sheets/schedule/"
  - label: "Chris Coyier — annonce"
    url: "https://chriscoyier.net/2026/03/18/meets-style-sheets/"
  - label: "Talk Coyier — YouTube"
    url: "https://www.youtube.com/watch?v=hIH1GKAMN5w"
  - label: "Talk Rodriguez — YouTube"
    url: "https://www.youtube.com/watch?v=yoTs8clU1qs"
category: design
---

Le mercredi 6 mai 2026, Smashing Magazine organisait son événement en ligne **Meets Style Sheets** — gratuit, trois heures, trois talks, un seul sujet : CSS. De 17h à 20h CET, Chris Coyier, Juan Diego Rodriguez et Lyra Rebane ont chacun pris 35 minutes pour explorer une facette de ce que permet aujourd'hui la plateforme web sans toucher à JavaScript.

## Talk 1 — Chris Coyier : « In-N-Out Styling »

Chris Coyier, co-fondateur de CodePen et créateur de CSS-Tricks, a centré son talk sur un problème d'apparence simple : comment styliser un élément **sur son chemin vers la vue** et **sur son chemin hors de la vue** — ce que CSS commence seulement à rendre possible proprement.

Le territoire couvert inclut les animations d'entrée déclenchées par le scroll, les animations de sortie (historiquement le talon d'Achille du CSS face aux bibliothèques JS), et la syntaxe moderne des `@keyframes` couplée aux scroll-driven animations. Coyier a décrit les pièges courants : la nouvelle syntaxe a des noms déroutants, et la spécificité peut devenir un problème difficile à diagnostiquer quand plusieurs mécanismes s'appliquent simultanément.

## Talk 2 — Juan Diego Rodriguez : Anchor Positioning sans perdre la tête

Juan Diego Rodriguez, contributeur régulier à Smashing Magazine, a choisi d'expliquer CSS Anchor Positioning **de l'intérieur** plutôt que par ses exemples d'usage. Le système n'a que deux ans d'existence dans les navigateurs, mais son comportement a évolué plusieurs fois depuis son arrivée — syntaxe et logique incluses — ce qui a laissé beaucoup de développeurs avec des intuitions partiellement incorrectes.

Son angle : montrer comment et pourquoi le positionnement par ancre fonctionne réellement, en remontant aux contraintes du modèle de rendu, avant de présenter des exemples pratiques de tooltips, popovers et menus positionnés sans JavaScript. CSS Anchor Positioning est aujourd'hui supporté dans tous les navigateurs majeurs.

## Talk 3 — Lyra Rebane : jeux interactifs, zéro JavaScript

Lyra Rebane, chercheuse en sécurité et passionnée de CSS extrême, a démontré ce qu'il est possible de construire avec HTML et CSS seuls — sans JavaScript, sans serveur. Son terrain : des expériences interactives et des mini-jeux fonctionnels qui exploitent les sélecteurs CSS, les pseudo-classes d'état (`:checked`, `:focus`, `:hover`) et l'architecture des combinateurs pour simuler de la logique et de l'état.

Le talk sert autant de démonstration de la puissance expressive du CSS que d'exploration des limites réelles de la plateforme — une façon de comprendre ce que CSS est vraiment capable de gérer sans déléguer au moteur JavaScript.

## Pourquoi ça compte

Les trois talks pointent dans la même direction : le CSS de 2026 couvre des cas d'usage qui nécessitaient une dépendance JavaScript il y a encore deux ou trois ans — animations de scroll, positionnement contextuel, états interactifs. La ligne entre « ce qui appartient au CSS » et « ce qui nécessite du JS » continue de se déplacer, et l'évènement illustre bien où en est cette frontière aujourd'hui.

Les replays des trois talks sont disponibles sur YouTube.
