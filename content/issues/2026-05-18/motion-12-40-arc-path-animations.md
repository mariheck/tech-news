---
title: 'Motion 12.40 : trajectoires arc et contrôle des boucles'
excerpt: "Deux versions en une semaine qui comblent deux lacunes importantes de l'API animations."
summary: 'Motion sort 12.39 (repeatType/repeatDelay dans les séquences) et 12.40 (helper arc() et option path pour les trajectoires courbes) en une semaine. Les animations de chemin arrivent nativement dans React sans GSAP MotionPath ni calcul SVG.'
date: 2026-05-18T00:00:00Z
reading_time: 4
sources: [{ label: 'Motion changelog', url: 'https://motion.dev/changelog' }]
category: 'design'
---

# Motion 12.40 : trajectoires arc et contrôle des boucles

Motion (anciennement Framer Motion) a sorti deux versions en l'espace d'une semaine — 12.39.0 le 18 mai et 12.40.0 le 21 mai — qui comblent deux lacunes distinctes mais importantes de l'API. La bibliothèque dépasse les 3,6 millions de téléchargements hebdomadaires et reste la référence pour les animations React.

## Motion 12.39 : `repeatType` et `repeatDelay` dans les séquences

Jusqu'à cette version, le contrôle des boucles (`repeatType`, `repeatDelay`) n'était disponible que dans les animations standalone via `animate()`. Dans les séquences (la timeline `sequence([...])` ), ces options étaient ignorées — ce qui forçait à sortir de la séquence pour gérer les répétitions manuellement.

12.39 comble cette lacune : `repeatType` et `repeatDelay` fonctionnent désormais à l'intérieur des blocs de séquence. Un segment qui doit boucler en `mirror` avec un délai entre chaque itération peut maintenant être exprimé directement :

```ts
sequence([
  [
    element,
    { x: 100 },
    { duration: 0.4, repeat: 2, repeatType: 'mirror', repeatDelay: 0.1 }
  ],
  [otherElement, { opacity: 1 }]
]);
```

La release corrige également deux régressions : les re-runs de variants sur des tableaux de keyframes identiques (faux positifs qui déclenchaient une ré-animation inutile) et un bug drag en présence de layout reorders React 19.

## Motion 12.40 : l'option `path` et le helper `arc()`

12.40 est la release la plus structurante pour les animations visuelles avancées. Elle ajoute :

**L'option `path` dans `transition`** — permet de spécifier un chemin de déplacement pour l'élément animé, distinct de sa trajectoire de transformation habituelle. La valeur est un SVG path string ou un objet de points.

**Le helper `arc()`** — génère un arc de cercle paramétrique entre la position initiale et la position finale d'une animation. Au lieu de définir un chemin SVG entier, on passe simplement les coordonnées et le rayon d'arc souhaité :

```ts
animate(element, { x: 200, y: 0 }, { path: arc({ radius: 80 }) });
```

Avant cette version, animer un élément le long d'une trajectoire courbe dans React requérait soit le plugin MotionPath de GSAP, soit une implémentation manuelle de courbes de Bézier paramétriques. Les deux approches ajoutaient de la complexité pour des cas d'usage courants : icône qui décrit un arc, carte qui sort en courbe, badge qui rejoint sa cible.

`arc()` gère automatiquement l'orientation de l'arc (sens horaire / anti-horaire), son amplitude et l'interpolation le long du chemin. Pour les trajectoires plus complexes (chemins SVG multi-segments), l'option `path` raw reste disponible.

## Impact pour les UIs créatives

Ces deux releases clôturent des tickets qui traînaient dans le backlog Motion depuis la v11. Pour les équipes qui utilisent déjà Motion comme unique dépendance d'animation, elles éliminent le besoin de recourir à GSAP pour les cas d'animation avancée — et donc d'avoir deux systèmes d'animation en parallèle dans un projet React.

La convergence de l'API Motion vers une gestion complète des chemins et des boucles dans les séquences est cohérente avec la direction prise par la v12 : une bibliothèque capable de couvrir 95 % des besoins d'animation frontend sans hybridation avec d'autres libs.
