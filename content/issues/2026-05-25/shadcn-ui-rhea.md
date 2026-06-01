---
title: 'shadcn/ui Rhea : un nouveau style plus dense et compact'
excerpt: "shadcn@4.8.1 lance Rhea, une variante à haute densité d'information de Luma"
summary: 'La v4.8.1 de shadcn/ui introduit Rhea, un style à espacement réduit et contrôles plus petits pour les interfaces orientées productivité. Registry Include/Validate et Package Imports complètent la mise à jour.'
date: 2026-05-25T00:00:00Z
reading_time: 3
sources:
  [
    {
      label: 'shadcn/ui changelog – Rhea',
      url: 'https://ui.shadcn.com/docs/changelog/2026-05-rhea'
    },
    {
      label: 'shadcn/ui changelog',
      url: 'https://ui.shadcn.com/docs/changelog'
    },
    {
      label: 'GitHub – shadcn releases',
      url: 'https://github.com/shadcn-ui/ui/releases'
    }
  ]
category: 'design'
---

# shadcn/ui Rhea : un nouveau style plus dense et compact

Le 26 mai 2026, shadcn a publié la version **4.8.1** de shadcn/ui avec une nouveauté principale : **Rhea**, un nouveau style de composants conçu pour les interfaces à haute densité d'information. À côté de Luma (style par défaut depuis 2025) et des styles existants, Rhea répond à une demande récurrente de la communauté : Luma avec moins d'air.

## Rhea : des composants plus petits pour des interfaces plus denses

Rhea est décrit par l'équipe shadcn comme **"a more compact Luma"**. Le style conserve la douceur visuelle et la cohérence de formes de Luma, mais réduit :

- L'**espacement interne** des composants (padding, gaps)
- La **taille des contrôles** (boutons, inputs, selects)
- La **hauteur de ligne** par défaut

Le résultat est une interface qui affiche plus d'information dans le même espace vertical — un avantage pour les outils type dashboard, éditeurs, ou interfaces d'administration où chaque pixel d'interface compte.

## Comment l'installer

```bash
npx shadcn@latest init
# Sélectionner "Rhea" au choix du style
```

Pour les projets existants, la migration depuis un autre style implique de regénérer les composants avec `shadcn@4.8.1`. Rhea est disponible pour les deux bases supportées : **Radix UI** et **Base UI**.

## Registry Include et Validate

La v4.8.1 introduit une amélioration de la CLI qui simplifie la gestion des grandes registries de composants : **Registry Include and Validate**. Plutôt que de maintenir un seul fichier `registry.json` monolithique, les auteurs de registry peuvent désormais :

- Organiser la registry source en **plusieurs fichiers `registry.json`** thématiques
- Les composer avec `shadcn build` au moment de la publication
- Valider l'intégrité de la registry complète automatiquement

C'est une évolution qui cible surtout les design systems d'entreprise qui exposent shadcn comme couche de composants partagés à l'échelle d'une organisation.

## Package Imports et Target Aliases

La version ajoute également le support des **Package Imports et Target Aliases** dans la CLI, permettant de référencer des packages par leur nom plutôt que par un chemin relatif — un ajustement de qualité de vie qui aligne la DX sur les conventions modernes de projets TypeScript avec des alias de paths (`@/`, `~`, etc.).

## Ce que ça signifie pour votre design system

Rhea s'insère dans la stratégie de shadcn qui consiste à proposer plusieurs "styles" comme des presets visuels cohérents — plutôt que de demander à chaque équipe de customiser les composants à la main. Si vous construisez un outil data-heavy (analytics, CMS, ERP-light), Rhea réduit le travail de resserrement manuel que vous auriez fait de toute façon.

Le style ne change pas les API de composants ni les props — il agit uniquement sur les valeurs CSS et les tokens Tailwind qui pilotent l'apparence. Un switch vers Rhea est donc théoriquement non-breaking sur le plan fonctionnel.
