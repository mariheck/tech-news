---
title: "Cursor lance Origin, hébergeur Git pour l'ère IA"
excerpt: "Cursor défie GitHub avec une plateforme git pensée pour les agents IA."
summary: "Le 18 août 2026, Cursor a lancé Origin en bêta payante et publié 'Git at any scale', un billet de 27 min qui détaille son architecture S3. Conçu comme une alternative à GitHub pour les workflows agentiques."
date: 2026-08-17T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'SiliconANGLE – Cursor Origin', url: 'https://siliconangle.com/2026/08/17/cursor-launches-origin-code-hosting-service-to-compete-with-github/' },
    { label: 'Cursor – Git at any scale', url: 'https://cursor.com/blog/git-at-any-scale' },
    { label: 'explainx.ai – Origin & GitHub alt', url: 'https://explainx.ai/blog/cursor-origin-git-hosting-github-alternative-ai-agents-2026' },
    { label: 'The AI Insider – Origin', url: 'https://theaiinsider.tech/2026/08/19/cursor-launches-origin-code-hosting-platform-as-github-outages-fuel-ai-coding-competition/' },
    { label: 'Waydev – Origin pour les ingénieurs', url: 'https://waydev.co/cursor-just-rebuilt-git-for-the-agent-era-here-is-what-it-means-for-engineering-leaders/' }
  ]
category: 'dev-ia'
---

# Cursor lance Origin, hébergeur Git pour l'ère IA

Les 17 et 18 août 2026, Cursor a lancé **Origin** en bêta pour ses utilisateurs payants et publié le billet technique « Git at any scale » — une lecture de 27 minutes signée Vicent Martí, ancien contributeur GitHub durant dix ans. Le timing n'est pas anodin : GitHub subissait ce même 17 août une panne mondiale de 7 h 47 ayant atteint 20 % d'erreurs sur ses APIs, rendant le positionnement de Cursor particulièrement visible.

## Pourquoi Cursor s'attaque à l'hébergement Git

Cursor justifie Origin par un constat architectural : Git a été conçu autour d'un modèle distribué où chaque clone est une copie complète du dépôt. Cette propriété rend le démarrage d'un hébergeur Git « trompeusement simple », mais le passage à l'échelle véritablement difficile.

Les agents IA créent un nouveau régime de charge sur les dépôts : de multiples agents autonomes clonent, commitent, créent des branches et ouvrent des pull requests en parallèle. GitHub, conçu pour des flux humains asynchrones, n'a pas été architecturé pour absorber des milliers d'opérations Git concurrentes issues d'agents en continu.

## L'architecture de Continuity

Origin repose sur un système de stockage interne appelé **Continuity**, qui remplace l'architecture consensus-heavy adoptée par GitHub à l'ère de ses premiers serveurs Git par une approche write-ahead log (WAL) stocké sur **S3**.

Le principe central : S3 est la **source de vérité**. Les dépôts sur disque sont traités comme un **cache chaud**. Lorsqu'une opération Git est reçue par un serveur Origin, elle est d'abord écrite dans le WAL S3 avant d'être appliquée en local — garantissant la durabilité sans consensus distribué.

Cette décision permet à Origin de **scaler les replicas de 1 à plusieurs centaines** en fonction de la charge, chaque replica pouvant servir des opérations de lecture depuis son cache local tout en restant synchronisé via S3. Le blog décrit cela comme le remplacement d'une architecture où « rien sur le serveur n'est spécial » par une où la logique de stockage est explicitement découplée de la logique de service.

## Origin pour les workflows agentiques

La promesse principale d'Origin est l'hébergement **agent-first** : les agents Cursor (et, à terme, d'autres agents compatibles) peuvent travailler sur des branches isolées, ouvrir des PR, recevoir des revues automatiques et merger — le tout de manière concurrente et sans les frictions d'authentification et de rate-limiting qui apparaissent sur GitHub à grande échelle d'agents.

Origin intègre nativement les fonctionnalités Cursor : les branches, les PR, les diffs et les revues de code sont accessibles directement depuis l'éditeur Cursor, sans quitter l'environnement de développement.

## Disponibilité et accès

Origin est actuellement en **bêta privée** pour les utilisateurs payants de Cursor. L'initialisation d'un dépôt se fait via la CLI Cursor, avec migration possible depuis GitHub. Cursor n'a pas communiqué de date de GA.

## Contexte concurrentiel

Le lancement d'Origin s'inscrit dans une tendance plus large : les éditeurs de code IA ne veulent plus dépendre de l'infrastructure GitHub pour leurs cas d'usage les plus exigeants. Codex, le CLI OpenAI, a ajouté le support GitLab en bêta le 19 août. Cursor pousse plus loin en proposant sa propre couche d'hébergement — un pas vers la verticalisation complète du workflow de développement assisté par IA.

Le billet « Git at any scale » est disponible sur cursor.com/blog et constitue une lecture recommandée pour quiconque s'intéresse aux défis d'infrastructure des systèmes de contrôle de version à grande échelle.
