---
title: "Figma août 2026 : édition vectorielle et chat détachable"
excerpt: "Figma refine l'édition vectorielle, son panneau agent et son MCP entreprise"
summary: "Les release notes de fin août 2026 apportent l'effacement et la recoloration de vecteurs sur canvas, la détachabilité du panneau agent en fenêtre flottante, et la gestion centralisée du serveur MCP via IdP pour les plans Enterprise."
date: 2026-08-24T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Figma Release Notes", url: "https://www.figma.com/release-notes/" },
    { label: "Figma AI Credits FAQ", url: "https://help.figma.com/hc/en-us/articles/42614902212887-AI-credit-updates-FAQ" },
    { label: "ReleaseBot Figma", url: "https://releasebot.io/updates/figma" }
  ]
category: 'design'
---

# Figma août 2026 : édition vectorielle et chat détachable

Entre le 24 et le 26 août 2026, Figma a publié plusieurs mises à jour dans ses release notes couvrant l'édition vectorielle, le panneau d'agent IA et la gestion entreprise du serveur MCP. Aucune de ces fonctionnalités n'est une révolution isolée, mais ensemble elles améliorent significativement l'expérience de travail quotidienne.

## Édition vectorielle : effacement et recoloration sur canvas

Deux nouvelles opérations vectorielles arrivent dans **Figma Draw** et **Design** :

- **Eraser tool sur les chemins vectoriels** : il est maintenant possible d'effacer des portions de chemins vectoriels directement sur le canvas, sans passer par l'édition de nœud. L'outil se comporte comme une gomme : on "peint" sur le vecteur et les segments disparaissent.

- **Recoloration de régions** : les régions fermées d'un vecteur peuvent être recolorées directement, sans avoir à sélectionner et modifier chaque segment individuellement.

Ces deux fonctionnalités rendent les corrections sur des illustrations importées ou créées à la main nettement plus rapides. Jusqu'ici, modifier un vecteur complexe nécessitait de sélectionner les bons nœuds ou de manipuler les segments en mode édition vectorielle — un processus parfois fastidieux. L'approche "peindre sur le canvas" est plus directe et intuitive.

## Panneau agent détachable en fenêtre flottante

Sur les applications desktop macOS et Windows, le panneau de chat IA peut désormais être **détaché en fenêtre autonome**. La fenêtre reste visible pendant que vous naviguez entre les frames, utilisez d'autres outils ou changez de page dans votre fichier.

Ce changement répond à un problème pratique : le panneau intégré disparaissait dès qu'on cliquait en dehors. La fenêtre flottante permet de maintenir une conversation active avec l'agent tout en travaillant normalement sur le design. C'est particulièrement utile pour les workflows itératifs où l'on demande à l'agent de générer des variantes tout en ajustant manuellement.

## Administration MCP centralisée pour Enterprise

Pour les plans Organisation et Enterprise, les administrateurs peuvent désormais gérer la connexion du serveur MCP Figma (qui permet aux agents IA comme Claude d'interagir avec les fichiers Figma) **via leur fournisseur d'identité** (Okta, Azure AD, etc.).

Concrètement : les membres de l'organisation n'ont plus à s'authentifier individuellement ni à cliquer sur des invites de consentement répétées lors de l'utilisation d'agents IA via MCP. L'authentification est gérée au niveau organisationnel, avec les mêmes politiques d'accès que pour les autres outils.

Pour les équipes qui utilisent déjà Claude Code ou d'autres clients MCP pour automatiser des tâches Figma (export de tokens, génération de composants, audit de design systems), cette centralisation simplifie considérablement le déploiement à l'échelle.

## Mise à jour des crédits IA (25 août)

Figma a également mis à jour son modèle d'allocation de crédits IA le 25 août. Tous les plans (souscription annuelle et pay-as-you-go) bénéficient d'une nouvelle allocation, avec une option de recharge progressive. Le FAQ officiel détaille les quotas par plan.

## En résumé

Ces mises à jour confirment la direction de Figma pour la deuxième moitié de 2026 : améliorer l'ergonomie de l'édition vectorielle pour concurrencer Illustrator sur son terrain, et fluidifier l'intégration des agents IA dans le workflow design — à la fois pour les utilisateurs individuels (panneau détachable) et pour les grandes organisations (MCP centralisé).
