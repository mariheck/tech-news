---
title: "NoLoJS : les patterns CSS et HTML qui remplacent JavaScript"
excerpt: "Accordéon, carousel, formulaires — sans une ligne de JS"
summary: "Aaron T. Grogg publie NoLoJS sur Smashing Magazine le 12 août : une revue des patterns HTML/CSS natifs qui remplacent des composants JS courants. Accordéon, lazy load vidéo, select avancé, carousel — autant d'interactions désormais possibles sans script."
date: 2026-08-10T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Smashing Magazine – NoLoJS", url: "https://www.smashingmagazine.com/" },
    { label: "MDN – appearance: base-select", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/appearance" },
    { label: "MDN – scroll-driven animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline" }
  ]
category: 'design'
---

# NoLoJS : les patterns CSS et HTML qui remplacent JavaScript

Le 12 août 2026, **Aaron T. Grogg** a publié *NoLoJS* sur Smashing Magazine — une revue systématique des patterns d'interface qui peuvent être implémentés en HTML et CSS natifs, sans aucun JavaScript. L'article part d'un constat simple : chaque fois qu'un développeur glisse un `addEventListener` dans sa page, il rajoute une couche de logique à maintenir. Si HTML ou CSS peut s'en charger, autant les laisser faire.

## Pourquoi ce sujet maintenant

La question n'est pas nouvelle, mais le contexte a changé. En 2026, des fonctionnalités qui nécessitaient JavaScript il y a encore deux ans sont désormais natives dans tous les navigateurs majeurs :

- **Scroll-driven animations** : universellement supportées, elles permettent d'orchestrer des animations en réponse au scroll sans JavaScript sur le thread principal.
- **`@starting-style`** : les transitions d'entrée/sortie sur des éléments qui apparaissent depuis `display: none` (comme les modales) n'ont plus besoin de classes JS pour fonctionner.
- **`appearance: base-select`** : les `<select>` entièrement stylisables arrivent dans les navigateurs — ce qui a longtemps justifié des bibliothèques entières de custom dropdowns.
- **`<details>` et `<summary>`** : l'accordéon natif, sous-utilisé mais désormais stylistiquement flexible avec les animations CSS d'entrée.

## Patterns documentés

Grogg couvre plusieurs catégories, avec pour chacune le code minimal et les caveats de compatibilité :

### Accordéons interactifs

Le pattern `<details>/<summary>` avec `@starting-style` et `transition: height` (en attendant la stabilisation cross-browser de `transition: height: auto`) permet des accordéons fonctionnels sans JS. La principale limite reste la transition de hauteur sur des contenus à hauteur inconnue — le CSS seul ne résout pas encore ce cas parfaitement sans une valeur de hauteur fixe ou un `overflow` visible.

### Lazy-load vidéo

L'attribut `loading="lazy"` existe pour les images depuis longtemps. Pour les `<video>`, la combinaison `preload="none"` et une Intersection Observer remplaçait historiquement le lazy-load. L'article explore comment un scroll-driven animation trigger peut déclencher le chargement — moins fiable qu'une vraie solution JS, mais fonctionnel dans des contextes simples.

### Formulaires adaptatifs

Plusieurs éléments de formulaire qui nécessitaient du JavaScript pour ajuster leur apparence en fonction de la saisie peuvent désormais être gérés en CSS : `:valid`, `:invalid`, `:placeholder-shown`, `field-sizing: content` (pour les `<textarea>` qui s'agrandissent automatiquement).

### Carousel avec scroll snapping

Un carousel basique — avec navigation entre slides — est réalisable avec `scroll-snap-type`, `scroll-snap-align`, et les `:target` pseudo-class pour les ancres. Les indicateurs de position peuvent être pilotés via `scroll-driven animations` et `counter-increment`. Sans JS, sans bibliothèque.

## La ligne à ne pas franchir

Grogg est honnête sur les limites. NoLoJS n'est pas une déclaration de guerre au JavaScript : c'est une invitation à challenger chaque cas d'usage *avant* d'écrire du script. Le JS reste indispensable pour :

- La gestion des états complexes partagés entre composants distants.
- Les interactions nécessitant un retour réseau (recherche, soumission de formulaire avec validation serveur).
- Les composants qui doivent être accessibles au clavier de manière fine (focus trapping, ARIA live regions dynamiques).

L'article conclut sur une règle pratique : **si le comportement peut être décrit comme une transition d'état entre des propriétés CSS observables, il peut probablement être géré par CSS**. Si la logique dépend d'une source de données ou d'une interaction utilisateur non-linéaire, JavaScript reste nécessaire.

## Pourquoi c'est pertinent pour un frontend developer

Pour un développeur qui construit des interfaces — et particulièrement dans un contexte React/Next.js où chaque composant interactif est par défaut un Client Component — repérer les patterns qui peuvent rester Server Components (donc sans bundle client) est directement lié à la performance de chargement.

Un accordéon en `<details>` natif : zéro hydration, zéro bundle client. Un carousel en scroll-snap : idem. Ces économies s'accumulent sur des pages à nombreux composants.
