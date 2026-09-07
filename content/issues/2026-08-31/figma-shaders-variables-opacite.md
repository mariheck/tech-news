---
title: "Figma : shaders animés et variables d'opacité"
excerpt: "L'IA de Figma génère des effets animés, l'opacité entre en variables"
summary: "Le 3 septembre, Figma déploie deux mises à jour majeures : les shaders génératifs IA deviennent animés et interactifs (réactifs à la souris, publiables en communauté), et l'opacité peut enfin être liée à une variable numérique sans détacher la couleur de sa librairie."
date: 2026-08-31T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Figma Release Notes", url: "https://www.figma.com/release-notes/" },
    { label: "Figma Blog", url: "https://www.figma.com/blog/how-we-built-generative-plugins-and-shaders/" }
  ]
category: 'design'
---

# Figma : shaders animés et variables d'opacité

Le 3 septembre 2026, Figma publie deux mises à jour distinctes, toutes deux susceptibles de changer le workflow quotidien des designers et des développeurs frontend qui travaillent étroitement avec Figma.

## Shaders génératifs IA : l'animation et l'interactivité arrivent

Les shaders génératifs avaient fait leur apparition à Config 2026 (juin) comme remplissages statiques créés à partir d'un prompt. Cette nouvelle mise à jour leur apporte deux capacités essentielles :

### Shaders animés et interactifs

Il est désormais possible de demander à l'agent Figma de générer un shader qui **incorpore du mouvement** et qui est **réactif aux mouvements de la souris**. En pratique, cela signifie que des effets de fond, des textures ou des remplissages peuvent réagir dynamiquement à l'interaction — un comportement qui était auparavant réservé à du code WebGL ou GLSL écrit manuellement.

Pour un designer ou un développeur en exploration créative, c'est un raccourci significatif pour prototyper des expériences visuelles riches sans quitter Figma.

### Publication communautaire et organisationnelle

Les shaders et plugins génératifs peuvent désormais être **partagés sur la Figma Community** ou publiés en privé pour son organisation (plans Organization et Enterprise). Un accès à la visualisation du code source et au téléchargement est également disponible.

**Mises à jour MCP** : L'API MCP (Model Context Protocol) de Figma est mise à jour pour permettre aux agents tiers d'afficher et de modifier les shaders génératifs directement.

## Variables d'opacité : enfin liées à la librairie

La seconde mise à jour adresse un manque historique du système de variables Figma : il était jusqu'ici impossible de **lier l'opacité d'une couleur à une variable numérique** sans rompre le lien avec la librairie de couleurs.

Désormais :

- L'opacité peut être définie sur une variable de couleur en utilisant une **variable numérique**, et ces variables peuvent être scopées spécifiquement pour une utilisation dans les variables de couleur.
- Il est possible d'**aliaser l'opacité** tout en maintenant le lien de couleur avec la librairie — plus besoin de détacher et d'ajuster manuellement.
- La mise à jour d'opacité à l'échelle se fait dans la **modale des variables**, sans avoir à parcourir chaque instance.

### Ce que ça résout concrètement

Pour un design system, cela change la façon de gérer les états désactivés, les overlays, les scrims et les couches semi-transparentes. Plutôt que de dupliquer une couleur pour créer sa variante opaque, on définit maintenant la couleur une fois et on contrôle son opacité via une variable. Si l'opacité d'un overlay change dans la spec, une seule mise à jour propagera le changement partout.

## Pourquoi ces deux mises à jour comptent ensemble

Ces deux releases illustrent deux directions parallèles dans lesquelles Figma pousse son produit en 2026 : d'un côté, l'IA générative qui entre dans le territoire de l'animation et de l'interactivité ; de l'autre, la maturité des systèmes de design avec des primitives de token plus expressives. Pour les équipes qui maintiennent un design system tout en explorant des interfaces visuellement riches, les deux sont pertinents.
