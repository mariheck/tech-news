---
title: "Cognition SWE-2 : frontier à -64 % dans Devin"
excerpt: "Le nouveau modèle de code basé sur Kimi K3 rivalise avec Fable 5.1"
summary: "Cognition lance SWE-2 le 10 septembre : post-entraîné sur Kimi K3 (2,8T paramètres MoE), il égale presque Fable 5.1 sur FrontierCode 1.1 et le dépasse sur Terminal-Bench 2.1, à 64 % moins cher. Disponible dans Devin Desktop et CLI."
date: 2026-09-07T00:00:00Z
reading_time: 5
sources:
  [
    { label: "CellCog : benchmarks", url: "https://cellcog.ai/blog/cognition-swe-2/" },
    { label: "Orca Router : analyse", url: "https://www.orcarouter.ai/blog/cognition-swe-2-release" },
    { label: "TopAIHubs", url: "https://topaihubs.com/articles/cognition-s-swe-2-a-new-benchmark-in-ai-for-software-engineering" }
  ]
category: 'dev-ia'
---

# Cognition SWE-2 : frontier à -64 % dans Devin

Le 10 septembre 2026, Cognition a publié SWE-2, son modèle de code le plus avancé à ce jour. Il succède à SWE-1.7 avec une base radicalement différente et une affirmation forte : **performances proches du frontier, à 64 % moins cher**.

## Base : Kimi K3 de Moonshot AI

SWE-2 est post-entraîné à partir de **Kimi K3**, le modèle Mixture-of-Experts de Moonshot AI. Kimi K3 est un MoE de **2 800 milliards de paramètres totaux**, avec environ **104 milliards actifs par token** — soit approximativement trois fois la taille active de la base de SWE-1.7.

Cette architecture MoE à grande capacité totale et densité active modérée est désormais le pattern choisi par plusieurs acteurs (DeepSeek V4.1 Flash, Kimi K3, Fugu Ultra v2) pour atteindre des performances élevées à un coût d'inférence maîtrisé.

SWE-2 est également le **premier modèle SWE avec des niveaux d'effort de raisonnement réglables**, permettant à Devin de calibrer le coût de chaque tâche selon sa complexité.

## Benchmarks

Cognition publie les résultats suivants :

| Benchmark | SWE-2 | Fable 5.1 | GPT-6 Astra |
|---|---|---|---|
| FrontierCode 1.1 Main | – 0,9 pt | référence | + 3,3 pt |
| Terminal-Bench 2.1 | **+2,9 pt** | – | – |

Sur **FrontierCode 1.1 Main**, SWE-2 est à 0,9 point derrière Fable 5.1 et 3,3 points derrière GPT-6 Astra. C'est un écart modeste pour un modèle qui se présente comme nettement moins cher.

Sur **Terminal-Bench 2.1**, SWE-2 **devance tous les modèles du tableau**, y compris Astra, de 2,9 points. Terminal-Bench mesure la capacité à exécuter des tâches d'ingénierie via un terminal : scripts, debugging, manipulation de fichiers, CI/CD — des tâches très proches de l'usage quotidien dans Devin.

## Le claim des -64 %

Cognition annonce SWE-2 comme **64 % moins cher que le frontier** sur FrontierCode 1.1 Main. Ce chiffre mérite d'être contextualisé : il n'existe pas de tarif API public pour SWE-2. Le coût décrit est celui d'une **tâche exécutée dans Devin**, qui bundle le modèle, le scaffolding, l'environnement d'exécution et l'infrastructure de Cognition en une seule facture. La comparaison est donc faite entre le coût d'une tâche Devin SWE-2 et le coût estimé d'une tâche équivalente avec un modèle frontier externe.

## Disponibilité

SWE-2 est disponible dès le 10 septembre dans **Devin Desktop** et **Devin CLI**, avec un déploiement en cours sur Devin Web et Fusion. Il n'existe pas d'API SWE-2 publique : le modèle est uniquement accessible via les produits Cognition.

Pour les équipes utilisant Devin dans leur workflow de développement, ce lancement représente une amélioration directe des performances sur les tâches terminales et de code sans changement de prix annoncé.
