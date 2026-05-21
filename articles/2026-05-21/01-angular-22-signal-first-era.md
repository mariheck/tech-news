---
title: "Angular 22 : l'ère Signal-first est officiellement là"
accroche: "Angular 22 stabilise Signals, le mode sans zone et les composants sans sélecteur — une refonte de fond."
résumé: "Angular 22, disponible en release candidate le 13 mai et stable autour du 16 mai 2026, marque un tournant dans l'histoire du framework : Signals, Signal Forms et l'architecture zoneless passent tous en stable, redéfinissant le modèle de réactivité Angular."
semaine: "Semaine du 11 au 17 mai 2026"
temps_de_lecture: "7min"
sources:
  - titre: "Angular 22 — VersionLog"
    url: "https://versionlog.com/angular/22.0/"
  - titre: "Angular 22 release guide"
    url: "https://www.cmarix.com/blog/latest-angular-version/"
  - titre: "Angular version history"
    url: "https://www.herodevs.com/blog-posts/angular-version-history-every-release-date-support-window-and-end-of-life-date-from-angularjs-to-angular-22"
  - titre: "Signal-First Era — Medium"
    url: "https://medium.com/angular-engineering/angular-22-the-shift-to-signal-first-zoneless-and-performance-driven-architecture-b0d5a68f51e6"
  - titre: "Angular 22 arc.dev guide"
    url: "https://arc.dev/employer-blog/angular-latest-version-your-friendly-guide-to-new-features-and-updates-in-2026/"
catégorie: "Développement web frontend"
---

# Angular 22 : l'ère Signal-first est officiellement là

Angular 22 est arrivé en release candidate le 13 mai 2026, avec une version stable attendue autour du 16 mai. Cette version est l'une des plus importantes de l'histoire du framework : elle stabilise simultanément plusieurs APIs expérimentales majeures et entérine une architecture radicalement différente de celle d'Angular 1 à 21.

## Ce qui change concrètement

### Signals et Signal Forms en stable

Les Signals — introduits en preview dans Angular 16 — atteignent leur maturité complète en v22. Un signal est un conteneur de valeur réactif : quand il change, seuls les composants qui le consomment se mettent à jour, sans déclencher une propagation dans tout l'arbre de composants.

Les **Signal Forms**, expérimentaux depuis Angular 21, passent également en stable. Contrairement aux `FormGroup` classiques, un formulaire Signal ne re-rend que le champ modifié — un formulaire à 50 champs ne se recalcule pas entièrement à chaque frappe.

Un nouvel utilitaire accompagne cette stabilisation : `debounced()`, qui retarde la propagation d'un signal par une durée configurable, idéal pour les champs de recherche et les inputs texte où déclencher la chaîne réactive à chaque keystroke n'a pas de sens.

### Zoneless et OnPush par défaut

Le mode **zoneless** — c'est-à-dire sans Zone.js — devient la norme recommandée. Zone.js patchait toutes les APIs asynchrones du navigateur (setTimeout, Promises, fetch...) pour déclencher la détection de changements. En s'en affranchissant, les applications Angular deviennent plus légères et plus prévisibles.

En parallèle, `ChangeDetectionStrategy.OnPush` devient le mode par défaut pour les nouveaux composants. Les deux changements sont cohérents : dans une architecture Signal-first, la granularité de mise à jour est gérée par les signals eux-mêmes, pas par Zone.js.

### Composants sans sélecteur

Traditionellement, chaque composant Angular nécessitait un sélecteur CSS (`app-button`, `[highlight]`, etc.) pour être utilisé dans un template. Angular 22 introduit les **Selectorless Components** : un composant peut être importé directement dans le template comme une valeur, sans passer par un sélecteur. Les erreurs de typo dans les sélecteurs deviennent impossibles, et le refactoring gagne en fiabilité.

### Vitest remplace Karma

Karma, le test runner historique d'Angular, est définitivement abandonné au profit de **Vitest**. Les temps d'exécution des tests s'en trouvent significativement réduits — les benchmarks observés mentionnent des gains de plusieurs secondes sur des suites de tests conséquentes.

### Support TypeScript 5.9 et Angular MCP Server

Angular 22 ajoute le support de TypeScript 5.9, apportant les dernières améliorations de type-checking. L'investissement dans l'**Angular MCP Server** — un serveur Model Context Protocol — se poursuit : les outils d'assistance à la complétion comme Claude, GitHub Copilot et Cursor obtiennent ainsi un meilleur contexte Angular-spécifique pour leurs suggestions.

## Ce que ça signifie pour les équipes

Pour les nouveaux projets, Angular 22 impose un modèle clair : Signals pour la réactivité, OnPush par défaut, zoneless si possible, Vitest pour les tests. Les projets existants peuvent migrer progressivement — les APIs historiques restent supportées, mais Angular 19 atteint sa fin de support en mai 2026, ce qui pousse à une migration vers Angular 20+.

L'écosystème DevExtreme annonce une compatibilité Angular 22 dès la version v26.1, ce qui témoigne de la rapidité d'adoption côté librairies tierces.

## Sources

- [Angular 22 — VersionLog](https://versionlog.com/angular/22.0/)
- [Angular 22 Release Guide — Cmarix](https://www.cmarix.com/blog/latest-angular-version/)
- [Angular version history — HeroDevs](https://www.herodevs.com/blog-posts/angular-version-history-every-release-date-support-window-and-end-of-life-date-from-angularjs-to-angular-22)
- [Angular 22: The Shift to Signal-First — Medium Angular Engineering](https://medium.com/angular-engineering/angular-22-the-shift-to-signal-first-zoneless-and-performance-driven-architecture-b0d5a68f51e6)
- [Angular 22 — Arc.dev](https://arc.dev/employer-blog/angular-latest-version-your-friendly-guide-to-new-features-and-updates-in-2026/)
