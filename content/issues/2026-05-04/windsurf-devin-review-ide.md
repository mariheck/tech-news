---
title: "Windsurf apporte Devin Review directement dans l'IDE"
excerpt: "La revue de code IA passe de cloud-only à disponible dans Windsurf pour tous."
summary: "Windsurf intègre Devin Review dans l'IDE pour tous les abonnés avec 2 semaines d'essai, et lance Quick Review, un outil d'analyse 10× plus rapide propulsé par SWE-check, exclusif à Windsurf."
date: 2026-05-04T00:00:00Z
reading_time: 3
sources:
  - { label: "Windsurf - Devin Review", url: "https://windsurf.com/blog/devin-review-windsurf" }
category: dev-ia
---

# Windsurf apporte Devin Review directement dans l'IDE

Le 6 mai 2026, Windsurf a annoncé deux fonctionnalités de revue de code IA simultanément : **Devin Review**, désormais accessible directement dans l'IDE, et **Quick Review**, une alternative plus rapide basée sur SWE-check, exclusive à Windsurf. La version 2.2.17 a été publiée le même jour pour les embarquer.

## Devin Review dans l'IDE

Devin Review était jusqu'ici une fonctionnalité cloud-only, exécutée à distance et intégrée dans des workflows CI/CD. À la date de son intégration dans Windsurf, elle tournait déjà sur **des centaines de milliers d'exécutions par jour** dans cet environnement cloud.

Sa migration dans l'IDE change l'expérience : la revue de code IA devient accessible directement sur les modifications locales, dans le même espace de travail que le code lui-même. Elle est disponible pour **tous les abonnés self-serve**, avec une période d'essai gratuite de **deux semaines** incluse dans les abonnements existants.

## Quick Review : SWE-check pour la détection rapide

Windsurf introduit en parallèle **Quick Review**, son propre outil de détection de bugs — présenté comme **10× plus rapide** que Devin Review pour une analyse de surface.

Quick Review s'appuie sur **SWE-check**, une capacité exclusive à Windsurf qui analyse les changements locaux comme une revue secondaire agentique. Il est disponible en trois modes :
- **SWE-check (gratuit)** — analyse de base incluse sans coût supplémentaire
- **GPT-5.5** — analyse plus approfondie, facturée au token
- **Opus 4.7** — analyse maximale, facturée au token

L'idée est de proposer deux niveaux de revue : Quick Review pour le feedback rapide en développement, Devin Review pour une analyse complète avant merge.

## Positionnement face à la concurrence

Cette semaine marque une convergence notable : Cursor 3.3 (sorti le 7 mai) embarque également un onglet PR Review complet dans l'IDE. La revue de code IA intégrée à l'éditeur est en train de devenir une fonctionnalité standard des IDE orientés IA, au même titre que l'autocomplétion ou la génération de code.

La différence de positionnement : Cursor met l'accent sur l'intégration complète du cycle PR (création, revue, merge), tandis que Windsurf se distingue avec SWE-check comme moteur d'analyse propriétaire et la philosophie d'un outil de détection rapide en parallèle d'une revue profonde.
