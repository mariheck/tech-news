---
title: "UX pour agents IA : les patterns pratiques pour rendre le système visible"
excerpt: "Part 2 de la série Smashing : les patterns concrets pour remplacer spinners et barres de progression dans les interfaces agentiques."
summary: "Les interfaces agentiques échouent quand elles réutilisent les conventions des apps classiques (spinner, barre de progression fixe). Cette série documente les patterns qui fonctionnent : checklists dynamiques, toggles 'voir le raisonnement', indicateurs d'étape multi-phases."
date: 2026-05-11T00:00:00Z
readingTime: 7
sources:
  - label: "Smashing Mag – Part 2"
    url: "https://www.smashingmagazine.com/2026/05/practical-interface-patterns-ai-transparency/"
  - label: "Smashing Mag – Part 1"
    url: "https://www.smashingmagazine.com/2026/04/identifying-necessary-transparency-moments-agentic-ai-part1/"
  - label: "Designing For Agentic AI"
    url: "https://www.smashingmagazine.com/2026/02/designing-agentic-ai-practical-ux-patterns/"
category: design
---

Le 13 mai, Smashing Magazine a publié la **Part 2** de sa série sur les interfaces pour agents IA, centrée sur les patterns d'implémentation pratiques. Là où la Part 1 (avril) posait le diagnostic — quand et pourquoi la transparence est nécessaire —, la Part 2 entre dans le concret : quels composants construire, comment les organiser, quelles conventions établir.

## Le problème de fond

Les patterns UX classiques — spinner, barre de progression, "Chargement..." — ont été conçus pour des opérations courtes et prévisibles. Les agents IA opèrent différemment :

- **Durée imprévisible** : une tâche peut prendre 3 secondes ou 3 minutes selon ce que l'agent découvre en chemin
- **État ramifié** : l'agent peut bifurquer, échouer sur un sous-objectif et tenter une alternative
- **Décisions intermédiaires** : l'agent prend des micro-décisions à chaque étape qui peuvent impacter le résultat final

Réutiliser un spinner générique sur ces workflows crée de l'anxiété et de la méfiance — l'utilisateur ne sait pas si l'agent "fait quelque chose" ou s'il est bloqué.

## Les patterns documentés

### 1. Dynamic Checklist

Une checklist qui se construit en temps réel au fur et à mesure que l'agent identifie les sous-tâches. Chaque item a un état : en attente, en cours, terminé, échoué. Contrairement à une barre de progression linéaire, la checklist dynamique communique **la structure de la tâche** en cours d'exécution.

Point de vigilance documenté : éviter de mettre à jour la checklist trop fréquemment — un rafraîchissement à chaque micro-étape crée un effet stroboscopique anxiogène.

### 2. Thinking Toggle

Un composant escamotable qui expose le **raisonnement intermédiaire** de l'agent. Collapsed par défaut (pour ne pas surcharger les utilisateurs non-techniques), il peut être déplié par ceux qui veulent comprendre les décisions prises.

Le pattern résout un problème réel : les utilisateurs avancés veulent la transparence, les utilisateurs occasionnels ne veulent pas être noyés dans des logs internes. Un toggle bien placé satisfait les deux profils.

### 3. Phase Indicators

Pour les workflows à plusieurs phases distinctes (ex : recherche → analyse → synthèse → rédaction), un indicateur de phase visible communique la progression structurelle sans promettre un timing. C'est plus honnête qu'une barre de progression qui prétend mesurer quelque chose qu'elle ne mesure pas.

### 4. Consent Checkpoints

Pour les actions irréversibles ou à fort impact (envoi d'emails, modifications en base, appels API payants), l'article préconise des **points de consentement explicites** — l'agent s'arrête, décrit ce qu'il s'apprête à faire, et attend une confirmation. Différent d'un modal classique : le checkpoint affiche le contexte complet de la décision (quelle donnée, quel impact, quelle alternative possible).

## Ce qu'il faut éviter

La série documente aussi les anti-patterns fréquents :
- **Masquer les erreurs** : si un sous-objectif échoue et que l'agent tente une alternative, l'afficher plutôt que de le dissimuler derrière un "optimisation en cours"
- **Fausse précision** : ne pas afficher "42 % terminé" si c'est calculé de façon arbitraire
- **Trop de verbosité** : exposer les logs système complets sans filtrage décourage l'adoption

## Contexte de la série

Cette Part 2 s'inscrit dans un effort éditorial de Smashing Magazine sur les interfaces pour le design agentique, initié en février avec un premier article sur les patterns UX de contrôle et de consentement. La série arrive à point nommé : 2026 voit les équipes produit intégrer des agents dans des interfaces grand public — Notion (annoncé cette même semaine), des assistants SaaS, des outils de code comme Claude Code — et les conventions UX pour ces contextes sont encore largement à inventer.
