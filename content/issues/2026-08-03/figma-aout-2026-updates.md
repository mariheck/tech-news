---
title: "Figma : dossiers imbriqués et contrôles IA pour les admins"
excerpt: "Figma améliore l'organisation et la gouvernance IA en août 2026"
summary: "Figma introduit les dossiers imbriqués pour organiser les fichiers à l'échelle des grandes équipes, et des contrôles d'administration IA permettant aux admins de définir des quotas de crédits IA par utilisateur avec un système de demande d'augmentation."
date: 2026-08-03T00:00:00Z
reading_time: 3
sources:
  [
    { label: "Figma Release Notes", url: "https://www.figma.com/release-notes/" },
    { label: "Figma Newsroom", url: "https://www.figma.com/newsroom/" },
    { label: "Releasebot Figma Aug. 2026", url: "https://releasebot.io/updates/figma" },
    { label: "Mean.ceo Figma News", url: "https://blog.mean.ceo/figma-news-august-2026/" }
  ]
category: 'design'
---

# Figma : dossiers imbriqués et contrôles IA pour les admins

Figma a déployé deux nouvelles fonctionnalités en ce début août 2026 : les **dossiers imbriqués** pour organiser les fichiers, et des **contrôles d'administration des crédits IA**. Ces deux ajouts s'adressent aux équipes qui ont dépassé la phase d'adoption initiale et se retrouvent à gérer Figma à l'échelle.

## Dossiers imbriqués : une organisation longtemps attendue

Les dossiers imbriqués sont une fonctionnalité réclamée depuis longtemps par les équipes design. Jusqu'à présent, Figma ne permettait qu'un seul niveau de dossiers dans les projets et les pages, ce qui rendait l'organisation des fichiers laborieuse dès qu'une équipe dépassait quelques dizaines de fichiers.

Désormais, les équipes peuvent créer une **hiérarchie de dossiers** à plusieurs niveaux :

```
📁 Design System
  📁 Composants
    📁 Atoms
    📁 Molecules
    📁 Organisms
  📁 Tokens
  📁 Documentation
📁 Projets
  📁 2026-Q3
    📁 Feature-A
    📁 Feature-B
```

### Ce qui change en pratique

Pour une équipe qui maintient un système de design, la hiérarchie permet de séparer clairement les composants par niveau d'abstraction (atomic design), les tokens visuels, et la documentation — le tout dans un seul projet Figma bien structuré.

Pour les agences qui gèrent plusieurs clients, l'imbrication permet d'organiser les livrables par client, puis par projet au sein de chaque client.

Les dossiers imbriqués sont disponibles pour tous les plans Figma (Starter, Professional, Organization, Enterprise).

## Contrôles d'administration IA

La deuxième nouveauté s'adresse aux admins d'organisations Figma utilisant les fonctionnalités IA (Make, Buzz, et les outils de génération dans le Design Editor).

Les admins peuvent désormais :

1. **Définir des limites de crédits IA par utilisateur** : allouer un quota mensuel par membre plutôt qu'un pool partagé sans visibilité
2. **Recevoir des demandes d'augmentation** : quand un utilisateur atteint sa limite, il envoie une demande que l'admin peut approuver ou refuser depuis le panneau d'administration
3. **Suivre la consommation** : tableau de bord de consommation des crédits IA par utilisateur et par équipe

### Pourquoi c'est pertinent maintenant

L'adoption de Figma Make (génération de prototypes et de code depuis des prompts) et Figma Buzz (contenu marketing) a explosé depuis leur sortie. Sans contrôle, les équipes se retrouvaient à consommer des crédits IA de façon imprévisible, avec des factures difficiles à anticiper.

Ces contrôles permettent aux DSIs et aux design leads de **gouverner l'usage de l'IA** dans leur organisation : allouer plus de crédits aux profils qui en ont besoin (lead designers, rôles produit), et limiter les usages non essentiels.

## Contexte : Figma comme workspace complète

Ces deux mises à jour s'inscrivent dans la stratégie de Figma de devenir une workspace produit complète plutôt qu'un simple outil de design. L'organisation à grande échelle (dossiers imbriqués) et la gouvernance de l'IA (contrôles admin) sont deux aspects structurants pour les équipes qui intègrent Figma dans leurs processus d'entreprise.

La feuille de route de Figma pour le reste de 2026 semble focalisée sur cette direction : renforcer l'intégration design-développement (handoff CSS plus précis, synchro avec Git) et consolider les outils IA dans un cadre organisationnel maîtrisé.
