---
title: 'OpenAI Codex débarque sur iOS et Android'
excerpt: 'Pilotez vos sessions Codex depuis votre mobile, sur tous les plans.'
summary: 'OpenAI lance une preview de Codex dans l'app ChatGPT mobile. L'iPhone ou l'Android devient un panneau de contrôle pour des sessions actives sur Mac ou Linux : révision des outputs, approbation des commandes et suivi des diffs en temps réel.'
date: 2026-05-11T00:00:00Z
reading_time: 4
sources:
  [
    { label: 'OpenAI Work with Codex anywhere', url: 'https://openai.com/index/work-with-codex-from-anywhere/' },
    { label: 'TechCrunch - Codex on mobile', url: 'https://techcrunch.com/2026/05/14/openai-says-codex-is-coming-to-your-phone/' },
    { label: '9to5Mac - iOS & Android', url: 'https://9to5mac.com/2026/05/14/openai-brings-codex-control-to-chatgpt-for-iphone-and-android/' }
  ]
category: 'dev-ia'
---

# OpenAI Codex débarque sur iOS et Android

OpenAI a annoncé le 14 mai 2026 la disponibilité de **Codex dans l'app ChatGPT mobile**, en preview sur iOS et Android. La release est ouverte à tous les plans ChatGPT, y compris le plan gratuit.

## Le mobile comme panneau de contrôle, pas comme environnement d'exécution

Le point crucial : Codex ne s'exécute **pas sur le téléphone**. L'app mobile est un panneau de contrôle distant pour des sessions Codex déjà actives sur Mac, Linux, ou un environnement cloud managé.

Concrètement, le téléphone affiche :
- La liste des sessions actives et leur état
- Les sorties terminal en temps réel
- Les diffs de fichiers avec visualisation inline
- Les résultats des tests
- Les demandes d'approbation de commandes

Les fichiers, credentials, permissions et configurations locales restent sur la machine source.

## Ce qu'on peut faire depuis le mobile

Depuis l'app, on peut :
- **Parcourir tous ses threads** Codex actifs
- **Réviser les outputs** : lire les logs, les diffs produits et les résultats de tests
- **Approuver ou rejeter des commandes** en attente de validation
- **Changer de modèle** si plusieurs sont configurés
- **Démarrer une nouvelle session** sur un repo déjà connecté

L'experience est intentionnellement asymétrique : on peut superviser et orienter, pas coder directement depuis l'app mobile. C'est un choix de design délibéré, adapté aux développeurs qui veulent garder un œil sur un agent tournant en fond pendant qu'ils sont en déplacement.

## Déploiement et accès

La preview est disponible dans toutes les régions supportées par ChatGPT. Le support pour **Codex on Windows** est annoncé comme prochain sur la feuille de route. La fonctionnalité n'est pas encore exposée via l'API OpenAI et reste réservée aux utilisateurs de l'app ChatGPT.

## Contexte

Cette release s'inscrit dans la stratégie d'OpenAI pour rendre Codex omniprésent dans le workflow des développeurs. Codex CLI (interface terminal) reste l'outil de référence pour le travail sur machine ; l'app mobile complète le dispositif pour la supervision à distance, un besoin que Claude Code et Cursor n'adressent pas encore nativement.
