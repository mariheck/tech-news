---
title: "Figma Make : l'agent IA édite votre code depuis le canvas"
excerpt: 'Annotez, promptez en chat, commitez sans jamais ouvrir le terminal'
summary: 'Figma Make entre en bêta limitée avec de nouvelles capacités : édition directe, chat pour décrire les changements, et intégration MCP avec votre design system. Un agent IA modifie le code source et ouvre une PR sans terminal.'
date: 2026-05-25T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'Figma release notes',
      url: 'https://www.figma.com/release-notes/'
    },
    {
      label: 'ChatForest review',
      url: 'https://chatforest.com/reviews/figma-ai-design-agent-canvas-code-to-canvas-2026/'
    },
    {
      label: 'Help Center Figma May 2026',
      url: 'https://help.figma.com/hc/en-us/articles/40219873508247-Release-notes-roundup-May-2026'
    },
    { label: 'Releasebot – Figma', url: 'https://releasebot.io/updates/figma' }
  ]
category: 'dev-ia'
---

# Figma Make : l'agent IA édite votre code depuis le canvas

Le 28 mai 2026, Figma a ouvert une bêta limitée de nouvelles capacités dans **Figma Make** — l'outil d'IA générative de la plateforme orienté vers la production de code. Cette mise à jour redéfinit le flux design-to-code en connectant directement le canvas Figma à votre dépôt local, via un agent IA qui prend en charge les modifications et la PR.

## Ce qui change avec cette bêta

Jusqu'ici, Figma Make générait du code à partir de designs, mais l'intégration avec un codebase existant restait superficielle. La bêta du 28 mai franchit un cap en introduisant quatre nouvelles capacités liées à votre base de code réelle.

### 1. Édition directe sur le produit

Connectez Make à votre dépôt local, et vous pouvez **annoter des éléments de l'interface**, ajuster l'espacement, échanger des composants directement sur l'interface en live — et l'agent IA applique les modifications correspondantes dans le code source.

### 2. Chat pour décrire les changements

Une interface de **chat en langage naturel** permet de décrire les modifications souhaitées. L'agent interprète la description, la traduit en edits de code, et vous présente un aperçu avant toute application.

### 3. Intégration Figma MCP

Collez l'URL d'un frame ou d'un composant Figma, et l'agent construit à partir de **votre design system réel** — les tokens, composants et patterns déjà définis dans votre fichier Figma. Il ne génère pas de composants génériques : il instancie ce que vous avez déjà.

### 4. Workflow branch et PR

Quand le résultat vous convient, vous pouvez **créer un commit et ouvrir une pull request** depuis l'interface Make, sans toucher au terminal. La boucle complète — du canvas au PR — reste dans Figma.

## Contraintes et disponibilité

Cette bêta est uniquement disponible dans l'**application desktop Beta pour Mac**. Figma indique une extension à d'autres plateformes dans les prochaines semaines.

Pendant la durée de la bêta, les crédits IA ne sont **pas consommés** — ce qui laisse de la marge pour explorer sans contrainte économique. La tarification à l'usage en crédits sera annoncée avant la sortie en disponibilité générale.

## Positionnement dans l'écosystème

Figma Make se positionne directement face aux outils comme Cursor, Windsurf ou Claude Code — mais depuis le design, et non depuis l'éditeur de code. Le différenciateur revendiqué est la connexion native au design system Figma : un agent qui connaît vos composants existants, qui travaille avec vos tokens, et qui ne réinvente pas de primitives UI à chaque génération.

Pour les équipes qui pratiquent un flux design-review-code itératif, c'est une proposition sérieuse. La question reste ouverte sur la gestion des cas complexes — composants très personnalisés, états dynamiques multiples, logique métier — mais la bêta invite à le tester.

La même semaine, il faut noter que Figma avait déjà lancé son **agent de design natif en bêta fermée** le 20 mai (intégré directement au canvas pour les tâches de design). Make ajoute donc la dimension code à cet écosystème d'agents qui prend forme autour de la plateforme.
