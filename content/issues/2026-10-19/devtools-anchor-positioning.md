---
title: "DevTools ajoute un éditeur visuel d'ancrage CSS"
excerpt: "Positionner un élément ancré sans toucher au code"
summary: "Chrome DevTools introduit un éditeur visuel pour l'ancrage CSS (position-area) dans le panneau Elements, avec sélection d'ancre implicite sur les popovers et une vue d'ensemble de la zone de positionnement."
date: 2026-10-19T00:00:00Z
reading_time: 2
sources:
  [
    { label: "Chrome for Developers", url: "https://developer.chrome.com/blog/new-in-devtools-november-2026/" }
  ]
category: 'design'
---

# DevTools ajoute un éditeur visuel d'ancrage CSS

Le 20 octobre 2026, Google a publié « New in DevTools – November 2026 », qui détaille les nouveautés livrées avec **Chrome 155** et **156** pour les outils de développement.

## Un éditeur visuel pour `position-area`

Le panneau **Elements** gagne un **éditeur interactif** pour le **positionnement par ancrage CSS** (*anchor positioning*). Dans l'onglet Styles, une pastille apparaît désormais à côté de chaque déclaration `position-area` : cliquer dessus ouvre un sélecteur visuel de la grille d'ancrage, permettant de régler les deux axes ensemble ou séparément, de basculer le mot-clé `self`, et de raccourcir les mots-clés sans axe.

## Mieux visualiser les ancres implicites

Un clic droit sur l'indicateur d'un popover dans l'arbre DOM, lorsqu'un élément possède plusieurs ancres implicites, permet désormais de sélectionner celle à utiliser et d'afficher une **surimpression** de la zone de positionnement correspondante.

## Autres chantiers du mois

La mise à jour touche aussi l'inspection CSS pensée pour les agents IA (support du serveur MCP de DevTools), le panneau Application (diagnostics de provenance publicitaire, manifeste Web Install), la mémoire (détection de variables de contexte mortes), le réseau (alertes Early Hints, overrides persistants) et une navigation plus fluide dans la timeline de performance.

## Pourquoi ça compte

L'ancrage CSS reste difficile à visualiser mentalement ; un éditeur intégré directement dans DevTools réduit l'aller-retour entre code et rendu pour une fonctionnalité CSS encore récente et peu outillée.
