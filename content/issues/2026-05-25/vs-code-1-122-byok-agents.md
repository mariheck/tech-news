---
title: 'VS Code 1.122 : BYOK hors ligne et émulation mobile'
excerpt: 'Visual Studio Code libère les agents IA des contraintes de connexion GitHub'
summary: "VS Code 1.122 permet d'utiliser BYOK sans connexion GitHub pour les environnements isolés, et intègre une émulation de périphériques mobiles dans l'éditeur. L'Agents Window centralise toutes les sessions d'agents actives."
date: 2026-05-25T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'VS Code release notes',
      url: 'https://code.visualstudio.com/updates/v1_122'
    },
    {
      label: 'Visual Studio Magazine',
      url: 'https://visualstudiomagazine.com/articles/2026/05/29/vs-code-1-122-lets-byok-work-without-github-sign-in.aspx'
    },
    { label: 'fdaytalk', url: 'https://www.fdaytalk.com/vs-code-1-122-update/' }
  ]
category: 'dev-ia'
---

# VS Code 1.122 : BYOK hors ligne et émulation mobile

La version 1.122 de Visual Studio Code est sortie le 28 mai 2026. Ce cycle de release — suivi d'un correctif 1.122.1 — apporte trois évolutions de fond qui ont des implications directes pour les développeurs frontend : la libération du BYOK des contraintes d'authentification GitHub, l'arrivée d'une émulation de périphériques mobiles intégrée, et une nouvelle fenêtre dédiée aux sessions d'agents.

## BYOK sans connexion GitHub

La modification la plus significative de cette version concerne **Bring Your Own Key (BYOK)**. Jusqu'ici, l'utilisation de ses propres clés de modèles dans VS Code exigeait une connexion au compte GitHub. Avec 1.122, ce prérequis disparaît.

Concrètement, cela ouvre BYOK aux développeurs travaillant dans des **environnements air-gapped** (réseaux fermés d'entreprise, labs gouvernementaux, environnements de développement hautement sécurisés) où l'authentification GitHub est bloquée par politique. Ces équipes peuvent désormais connecter des modèles locaux — comme Ollama — ou des endpoints d'IA privés sans jamais solliciter l'extérieur.

## L'Agents Window : une vue centralisée pour les sessions d'agents

VS Code introduit l'**Agents Window**, une fenêtre compagnon dédiée à l'exploration, l'itération et la revue des sessions d'agents. Différente du panneau Chat, elle est conçue pour gérer plusieurs sessions en parallèle à travers plusieurs projets et machines distantes.

La version 1.122 établit aussi la variable d'environnement `VSCODE_AGENT` pour les commandes terminal initiées par un agent, permettant aux CLIs de détecter ce contexte et d'adapter leur comportement (sortie lisible par machine, suppression des animations de progression, pas de prompts interactifs).

Depuis le web, les développeurs peuvent accéder à l'expérience Agents sur `insiders.vscode.dev/agents` à condition d'avoir un Dev Tunnel actif — ce qui signifie que la fenêtre Agent n'est plus limitée à la machine locale.

## Émulation de périphériques mobiles intégrée

Le navigateur intégré de VS Code reçoit enfin une **émulation de périphériques mobiles** comparable à celle des DevTools de Chrome. Directement depuis l'éditeur, sans basculer vers un navigateur externe, il est désormais possible de tester :

- **Tailles d'écran** : smartphones, tablettes, formats personnalisés
- **Émulation touch** : simulation des événements tactiles
- **User-agents personnalisés** : tester le comportement conditionnel selon l'appareil

Pour les développeurs frontend travaillant sur des expériences responsive, c'est une friction de moins dans la boucle test-correction.

## Navigateur intégré persistant et améliorations du diff

Le navigateur intégré **persiste désormais entre les sessions** et ne se rafraîchit plus lors d'un retour à VS Code après une inactivité. Pour les workflows qui gardent un preview en parallèle d'un éditeur de code, l'état de navigation est maintenu.

Les contrôles de layout des changements permettent également d'ouvrir le diff en vue côte-à-côte avec le Chat, ou dans une fenêtre modale — deux modes utiles pour les workflows de revue de code assistée par agent.

## Un assistant wizard pour les rapports de bugs

VS Code 1.122 introduit un assistant de rapport de bugs qui guide la création d'issues directement depuis l'éditeur, en capturant automatiquement les détails pertinents, les captures d'écran et les enregistrements vidéo. Moins spectaculaire, mais appréciable pour contribuer à la qualité de l'outil lui-même.
