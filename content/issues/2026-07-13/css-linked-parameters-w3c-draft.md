---
title: "CSS Linked Parameters : variables CSS dans les SVG liés"
excerpt: "Le W3C publie un brouillon pour paramétrer les SVG via CSS"
summary: "Le CSS Working Group publie le First Public Working Draft de CSS Linked Parameters Level 1 le 14 juillet : un nouveau mécanisme pour passer des valeurs CSS (couleurs, tailles) en tant que variables d'environnement dans des ressources SVG liées par URL."
date: 2026-07-13T00:00:00Z
reading_time: 4
sources:
  [
    { label: "W3C – CSS Linked Parameters Level 1", url: "https://www.w3.org/TR/css-link-params-1/" },
    { label: "W3C News 2026", url: "https://www.w3.org/news/2026/" },
    { label: "CSS WG Draft", url: "https://drafts.csswg.org/css-link-params/" }
  ]
category: 'design'
---

# CSS Linked Parameters : variables CSS dans les SVG liés

Le 14 juillet 2026, le CSS Working Group du W3C a publié le First Public Working Draft du module **CSS Linked Parameters Level 1**. Ce document introduit un mécanisme permettant de passer des valeurs CSS en tant que variables d'environnement personnalisées dans des ressources externes liées — en premier lieu des images SVG — sans avoir à modifier ces fichiers source.

## Le problème que ça résout

Le cas le plus courant est celui du thémage des SVG : vous avez une icône ou une illustration SVG, et vous souhaitez adapter sa couleur principale à la palette de votre site — couleur de marque, mode sombre, couleur d'accent dynamique. Aujourd'hui, cela implique soit de dupliquer le SVG (un par thème), soit d'inliner le SVG dans le HTML pour accéder à ses sous-éléments via CSS, soit de recourir à des filtres CSS approximatifs pour modifier les teintes.

CSS Linked Parameters propose une troisième voie : annoter le lien vers le SVG dans la feuille de styles pour lui passer des valeurs CSS comme paramètres, que le SVG consomme en interne via `env()`.

## Le mécanisme

Le module s'appuie sur l'extension des propriétés de liaison existantes (notamment `background-image: url(...)` et les éléments `<img>`). L'idée centrale est que le document appelant peut déclarer des paramètres nommés dans la directive qui référence le SVG, et que le SVG les reçoit comme des variables d'environnement CSS — des `env()` — accessibles à l'intérieur du fichier.

Concrètement, cela permettrait par exemple de passer `--brand-color` depuis votre feuille de styles vers un SVG lié, qui l'utiliserait en remplacement de sa valeur de remplissage par défaut, sans que le SVG connaisse quoi que ce soit de votre système de design.

## Où en est la spécification

Ce document est un **First Public Working Draft** (FPWD) : c'est la première publication formelle d'une spécification dans le processus W3C, sur le chemin de la Recommendation. Elle est éditée par Tab Atkins-Bittner (Google), Daniel Holbert (Mozilla) et Jonathan Watt (Mozilla).

À ce stade, la spécification est destinée à recueillir des retours de la communauté et des implémenteurs de navigateurs. Il n'y a pas encore de support navigateur à ce jour — la publication d'un FPWD précède généralement de loin toute implémentation stable.

## Pourquoi suivre cette spec

Pour un développeur frontend soucieux des détails visuels, CSS Linked Parameters adresse un vrai besoin fonctionnel que les pratiques actuelles contournent avec des hacks coûteux (SVG inline, filtres CSS, build-time SVG transformation). Si elle aboutit, la spec permettrait d'utiliser des SVG comme ressources référencées normales (avec tous les avantages du cache, de la séparation des préoccupations et du CDN) tout en les rendant thémables dynamiquement via CSS.

Le fait que trois ingénieurs de Google et Mozilla soient co-éditeurs est un indicateur de sérieux : ce n'est pas une proposition isolée mais un travail coordonné entre deux des principaux implémenteurs de navigateurs. Cela ne préjuge pas du délai d'implémentation, mais signale que le travail de base est structuré.
