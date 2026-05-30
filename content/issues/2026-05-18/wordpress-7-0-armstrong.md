---
title: 'WordPress 7.0 Armstrong : refonte admin et IA native'
excerpt: "Première refonte visuelle de l'admin depuis 2013 et client IA multi-provider pour 43 % du web."
summary: 'WordPress 7.0 livre la première refonte admin depuis 2013 avec DataViews, quatre nouveaux blocs, un client IA natif compatible OpenAI/Gemini/Claude, et une visibilité responsive par bloc sans CSS. La collaboration temps réel est reportée à la 7.1.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'WordPress News – Armstrong',
      url: 'https://wordpress.org/news/2026/05/armstrong/'
    },
    {
      label: 'InMotion – WP 7.0 features',
      url: 'https://www.inmotionhosting.com/support/edu/wordpress/wordpress-news/wordpress-7-0-armstrong-released/'
    }
  ]
category: 'design'
---

# WordPress 7.0 Armstrong : refonte admin et IA native

WordPress 7.0, nommé "Armstrong" en hommage à Louis Armstrong, est sorti le 20 mai après un report depuis avril. C'est une release qui touche simultanément l'expérience éditeur (nouveaux blocs, contrôles typographiques), l'interface d'administration (première refonte visuelle depuis 2013), et l'intégration IA (client natif multi-provider). Pour un CMS qui propulse environ **43 % du web**, les implications sont larges.

## La refonte admin : DataViews remplace les listes historiques

La partie la plus visible de 7.0 pour les développeurs et les administrateurs est la refonte complète du dashboard d'administration. C'est la première intervention visuelle significative depuis 2013 — treize ans de dette UI.

La refonte s'appuie sur **DataViews**, le nouveau composant de liste/grille introduit dans Gutenberg et maintenant promu dans l'admin core. Les interfaces de gestion des articles, des pages et des utilisateurs adoptent un format plus dense et actionnable, avec tri, filtrage et actions en masse révisés.

Pour les développeurs qui maintiennent des plugins avec des interfaces admin custom, la transition vers DataViews est importante : les APIs `WP_List_Table` vont progressivement être supplantées, et il vaut mieux anticiper la migration.

## Nouveaux blocs : Breadcrumbs, Icons, Heading, Gallery

7.0 ajoute quatre blocs dans l'éditeur :

**Breadcrumbs** : fil d'Ariane configurable depuis l'éditeur, sans PHP custom.

**Icons** : bibliothèque d'icônes SVG inline avec contrôles de couleur et de taille dans l'éditeur.

**Heading** (refonte) : le bloc titre bénéficie de contrôles typographiques avancés — interlignage, espacement des lettres, transformation (majuscules / minuscules / capitalize), et graisses granulaires.

**Gallery** (refonte) : le bloc galerie intègre maintenant un diaporama avec lightbox natif, remplaçant les solutions tierces qui étaient la règle pour cette fonctionnalité.

## Visibilité responsive par bloc, sans CSS

La nouveauté la plus pratique pour la conception de contenu : chaque bloc peut maintenant être configuré pour s'afficher ou se masquer selon le type d'appareil (mobile, tablette, desktop), directement depuis l'éditeur, sans écrire de CSS. Le contrôle est exposé dans le panneau latéral de chaque bloc, sous "Visibilité".

C'est un changement de paradigme pour les équipes qui gèrent du contenu responsive — les éditeurs non-techniques peuvent contrôler la mise en page mobile sans dépendre d'un développeur pour des classes CSS de visibilité.

## Client IA natif : OpenAI, Gemini, Claude

WordPress 7.0 embarque un **client IA natif** accessible aux plugins. Il supporte OpenAI, Gemini et Claude comme providers, avec un système d'API key géré depuis les réglages généraux. Les plugins qui s'appuient sur ce client bénéficient d'un contexte éditeur enrichi : accès au contenu de la page, aux métadonnées, aux taxonomies.

Pour les agences et les freelances qui développent des plugins WordPress, cela ouvre un nouveau surface d'intégration standardisé — plutôt que chaque plugin implémentant sa propre connexion à l'IA.

## PHP-only block registration

7.0 finalise la **registration de blocs en PHP uniquement**, sans fichier JSON de métadonnées séparé. Les contrôles de l'inspector (Sidebar) sont générés automatiquement depuis les attributs PHP déclarés. C'est une simplification significative du workflow de développement de blocs, qui était alourdi par la synchronisation entre PHP, JSON et JavaScript.

## Ce qui ne vient pas encore

La **collaboration temps réel** (édition simultanée façon Google Docs) était annoncée pour la 7.0 mais a été reportée à la 7.1. Pas de date pour la 7.1 à ce stade.
