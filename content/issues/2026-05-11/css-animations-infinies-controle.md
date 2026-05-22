---
title: 'Contrôler les animations CSS infinies : démarrer et stopper en douceur'
excerpt: 'Temani Afif publie la partie 2 de son guide : superposer une transition à une animation pour des démarrages et arrêts fluides, sans JS.'
summary: 'La deuxième partie du guide de Temani Afif sur les animations CSS infinies explore la technique de superposition d''une transition sur une animation pour obtenir des démarrages et arrêts en douceur. La partie 1 couvrait vitesse et direction via animation-composition: add, abs() et sign().'
date: 2026-05-11T00:00:00Z
reading_time: 6
sources:
  [
    { label: 'Frontend Masters Part 2', url: 'frontendmasters.com/blog/how-to-control-infinite-css-animations-part-2-of-2' },
    { label: 'Frontend Masters Part 1', url: 'frontendmasters.com/blog/how-to-control-infinite-css-animations-part-1-of-2' },
    { label: 'Web Standards', url: 'web-standards.dev/news/2026/05/infinite-css-animations' }
  ]
category: 'design'
---

# Contrôler les animations CSS infinies : démarrer et stopper en douceur

Temani Afif a publié le 15 mai 2026 la deuxième partie de son guide sur le contrôle des animations CSS infinies, sur le blog de Frontend Masters. La première partie — parue le 8 mai — traitait du contrôle de la vitesse et de la direction ; la seconde s'attaque à un problème plus délicat : les transitions d'état fluides sur une animation qui tourne en boucle.

## Rappel de la partie 1 : vitesse et direction

La première partie montre comment contrôler dynamiquement la vitesse et la direction d'une animation infinie sans la redémarrer. La technique centrale repose sur `animation-composition: add` pour superposer deux animations, des variables CSS pour la durée et un facteur de vitesse, et les fonctions mathématiques CSS `abs()` et `sign()` pour maîtriser la vélocité et la direction de façon indépendante.

Le résultat : une animation qu'on peut accélérer, ralentir ou inverser à la volée, sans interruption visuelle ni recours au JavaScript.

## La partie 2 : des démarrages et arrêts en douceur

Le problème ciblé dans la deuxième partie est différent. Lorsqu'on veut qu'un élément s'anime doucement au survol, puis s'arrête progressivement en quittant le survol, les approches naïves (basculer `animation-play-state`, modifier la durée) produisent des effets brusques ou des sauts de position.

La technique proposée par Temani Afif consiste à superposer une transition sur une animation. L'animation tourne en continu ; c'est la transition qui pilote l'entrée et la sortie de la phase active, en interpolant la valeur d'une variable CSS qui module l'intensité de l'animation.

Concrètement, l'effet obtenu est le suivant : un élément commence à tourner lentement au survol, accélère jusqu'à sa vitesse de croisière, puis décélère progressivement quand la souris quitte la zone — le tout sans une seule ligne de JavaScript.

## Pourquoi c'est utile en production

Les animations infinies sont omniprésentes dans les interfaces modernes : loaders, indicateurs d'état, effets de fond. Le problème des transitions brusques à l'entrée et à la sortie est un irritant UX courant, souvent résolu avec des bibliothèques JS comme Motion ou GSAP.

Ces deux articles de Temani Afif montrent qu'il est possible d'obtenir un contrôle fin en CSS pur, en exploitant des propriétés (`animation-composition`) et des fonctions mathématiques (`abs()`, `sign()`) encore peu connues. La dépendance à une lib JS pour ce type d'effet n'est plus justifiée dans les navigateurs modernes.
