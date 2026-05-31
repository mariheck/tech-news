---
title: 'Vercel Sandbox peut désormais exécuter Docker'
excerpt: 'Les agents IA peuvent builder des containers sans toucher à la machine hôte'
summary: "Vercel Sandbox supporte l'installation et l'exécution de Docker au sein d'un sandbox isolé. Les agents peuvent désormais builder des containers et installer des paquets système sans affecter la machine hôte."
date: 2026-05-25T00:00:00Z
reading_time: 3
sources:
  [
    { label: 'Vercel changelog', url: 'https://vercel.com/changelog' },
    {
      label: 'Vercel community weekly',
      url: 'https://community.vercel.com/t/vercel-weekly-2026-05-25/42396'
    },
    {
      label: 'Releasebot – Vercel',
      url: 'https://releasebot.io/updates/vercel'
    }
  ]
category: 'frontend'
---

# Vercel Sandbox peut désormais exécuter Docker

La semaine du 27 au 29 mai 2026, Vercel a déployé plusieurs évolutions notables sur sa plateforme. La plus structurelle : **Vercel Sandbox supporte désormais Docker**. Un changement discret mais qui étend considérablement les cas d'usage des agents IA dans les workflows de déploiement.

## Docker dans un sandbox isolé

**Vercel Sandbox** est un environnement d'exécution cloud conçu pour les agents IA : il leur permet de lancer des processus, modifier des fichiers et exécuter du code sans toucher à l'environnement de production ni à la machine locale du développeur.

Avec la mise à jour du 29 mai, un agent peut désormais :

- **Installer Docker** dans le sandbox
- **Builder des images container** depuis un Dockerfile
- **Installer des paquets système** avec `apt`, `brew` ou équivalent
- **Modifier des fichiers** dans un environnement entièrement isolé

Le tout sans risque pour l'hôte : quand le sandbox se termine, tout disparaît avec lui. Pour les workflows d'agents qui doivent tester des configurations de déploiement, construire des images avant publication ou valider des Dockerfiles générés par IA, c'est un niveau de sécurité qu'il était difficile d'obtenir autrement.

## AI Gateway : liste d'autorisation des providers

Le 28 mai, Vercel a annoncé que l'**AI Gateway** supporte désormais une liste d'autorisation des providers au niveau de l'équipe. Les administrateurs peuvent restreindre les providers IA autorisés à servir des requêtes — seuls les providers approuvés sont routés. Cette gouvernance devient importante à mesure que les équipes enterprise définissent des politiques autour des données envoyées à des tiers.

## Turborepo 2.9.15

La semaine a aussi vu la sortie de **Turborepo 2.9.15** (27 mai) avec des correctifs de fiabilité, une couverture de profiling renforcée, une meilleure gestion de l'OpenTelemetry, la préservation des peer packages pnpm, le support du root `.gitignore` pour le pruning, et du profilage d'allocations heap. Une mise à jour de maintenance pour les monorepos qui utilisent Turborepo en production.

## Redesign de la liste des déploiements

Vercel a également redessiné l'interface de la liste des déploiements avec une **mise en page plus dense** : plus de déploiements visibles simultanément, environnements regroupés avec leurs statuts, branches et commits plus faciles à scanner. L'expérience mobile a également été améliorée pour les équipes qui suivent l'activité de déploiement depuis un téléphone.

## Changement de tarification des invocations de fonctions

À partir du 29 mai, Vercel migre les clients Pro et nouveaux clients Enterprise d'une **tarification par package vers une tarification à l'unité** pour les invocations de fonctions. Le nouveau tarif : **0,0000006 $ par invocation** (soit 0,60 $ par million), ce qui correspond à l'ancien tarif mais sans engagement de volume minimum. Pour les projets à faible volume, c'est plus flexible — pour les projets très actifs, la différence est négligeable.
