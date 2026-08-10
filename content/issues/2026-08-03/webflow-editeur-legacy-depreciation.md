---
title: "Webflow retire son éditeur legacy : ce qui change au 4 août"
excerpt: "Le legacy Editor Webflow s'arrête, place aux Client Seats"
summary: "Webflow a retiré son legacy Editor le 4 août 2026, remplacé par l'Edit Mode et les Client Seats. Les fonctions de whitelabel liées à l'ancien éditeur disparaissent définitivement, impactant les agences qui offraient des accès clients personnalisés."
date: 2026-08-03T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Webflow Blog", url: "https://webflow.com/blog/legacy-editor-deprecation" },
    { label: "Paddle Creative", url: "https://www.paddlecreative.co.uk/blog/webflow-edit-mode-client-seats-guide" },
    { label: "TFB Digital", url: "https://www.tfbdigital.com/blogs/webflow-legacy-editor-retirement/" },
    { label: "Code Designs", url: "https://codedesigns.eu/webflow-is-retiring-its-legacy-editor-on-august-4-heres-what-to-do-before-then/" },
    { label: "Contra", url: "https://contra.com/community/9X9FABJP-the-webflow-legacy-editor-retires-august" }
  ]
category: 'design'
---

# Webflow retire son éditeur legacy : ce qui change au 4 août

Depuis le **4 août 2026**, le legacy Editor de Webflow n'est plus disponible. Ce n'est pas une surprise — la migration était annoncée depuis mai — mais beaucoup d'équipes découvrent maintenant les implications concrètes, notamment côté agences.

## Qu'était le legacy Editor ?

Le legacy Editor était une couche d'édition de contenu superposée au site en production. Les clients y accédaient via une URL spéciale (`?edit`) pour modifier des textes, images et données sans toucher au design dans Webflow Designer. Pratique, mais architecturalement fragile : l'éditeur fonctionnait en overlay sur le site live, créant des conflits avec les animations personnalisées, le code custom, et les intégrations complexes.

## Ce qui le remplace

**Edit Mode** est le nouveau système d'édition de contenu, intégré directement dans le Webflow Designer plutôt qu'en overlay sur le site live. L'avantage principal : il n'interfère pas avec le code personnalisé ou les animations.

**Les Client Seats** sont le nouveau modèle d'accès pour les clients finaux. Le système est basé sur des rôles :

- **Content Editor** : peut modifier le contenu (textes, images, données)
- **Publisher** : peut modifier ET publier
- **Commenter** : peut laisser des commentaires dans le canvas

## Ce qui disparaît définitivement

La fonctionnalité la plus impactée pour les agences : **le whitelabel de l'éditeur**. Jusqu'ici, le legacy Editor pouvait être personnalisé pour masquer la marque Webflow — une feature exclusive à certains plans qui permettait aux agences de présenter un outil d'édition sous leur propre marque à leurs clients.

Cette fonctionnalité ne migre pas vers Edit Mode. Elle disparaît avec le legacy Editor.

Les équipes qui avaient des accès legacy Editor non migrés avant le 4 août **ont perdu cet accès** à la date de coupure. Les utilisateurs qui n'avaient pas accepté leur invitation de migration n'ont plus d'accès éditeur.

## Impact pratique pour les agences

Pour les agences Webflow, le changement est significatif sur plusieurs points :

1. **Formation clients** : l'interface Edit Mode est différente du legacy Editor — les clients qui utilisaient l'éditeur quotidiennement doivent être reformés
2. **Facturation** : les Client Seats ont leur propre modèle de tarification — vérifier les plans Webflow pour comprendre combien de seats sont inclus
3. **Whitelabel perdu** : si l'offre d'agence incluait un éditeur de contenu white-label pour le client, il faut repenser cette proposition

## Ce que ça révèle sur la stratégie Webflow

La suppression du legacy Editor s'inscrit dans un mouvement plus large de repositionnement de Webflow. La plateforme se positionne désormais comme une **workspace complète pour les équipes produit** (Webflow Sites, Webflow Make pour la génération AI, Webflow Buzz pour le marketing, Webflow Draw) plutôt que comme un simple outil de création de sites.

L'Edit Mode est plus robuste techniquement que le legacy Editor, mais moins flexible pour les configurations complexes. C'est un compromis délibéré en faveur de la stabilité et de l'intégration dans l'écosystème Webflow élargi.

## Actions à prendre maintenant

Si vous gérez des sites Webflow avec des accès client :

1. Vérifier qui avait des accès via le legacy Editor et les re-inviter en Client Seats
2. Tester Edit Mode sur les sites avec animations et code custom
3. Revoir la structure de facturation avec Webflow pour les Client Seats supplémentaires
4. Informer vos clients de la nouvelle interface et préparer des guides
