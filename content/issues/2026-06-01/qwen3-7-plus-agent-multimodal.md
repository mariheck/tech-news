---
title: "Qwen3.7-Plus : agent GUI qui devance GPT-5.4 sur écrans"
excerpt: "1M tokens, vision + code + GUI, 6× moins cher que Max."
summary: "Alibaba lance Qwen3.7-Plus (2 juin) : modèle multimodal propriétaire avec 1M tokens de contexte, vision, vidéo, raisonnement et exécution de code. Agent GUI autonome à 79.0 sur ScreenSpot Pro (contre 67.4 pour GPT-5.4), à 0,40 $/M tokens en entrée."
date: 2026-06-01T00:00:00Z
reading_time: 5
sources:
  [
    { label: "MarkTechPost – Qwen3.7-Plus", url: "https://www.marktechpost.com/2026/06/02/alibabas-qwen-team-launches-qwen3-7-plus-adding-vision-deep-reasoning-tool-invocation-and-autonomous-iteration-on-the-bailian-platform/" }
  ]
category: 'actus-ia'
---

# Qwen3.7-Plus : agent GUI qui devance GPT-5.4 sur écrans

Le 2 juin 2026, l'équipe Qwen d'Alibaba lance **Qwen3.7-Plus** sur la plateforme Bailian. Le modèle combine vision, vidéo, raisonnement profond et exécution de code dans une architecture conçue pour l'agentivité autonome — avec une fenêtre de contexte d'un million de tokens et un tarif qui le positionne comme alternative sérieuse aux modèles frontières propriétaires.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Fenêtre de contexte | 1 000 000 tokens |
| Modalités | Texte, image, vidéo, code |
| Invocation d'outils | Oui (natif) |
| Itération autonome | Oui |
| Prix entrée | 0,40 $/M tokens |
| Prix sortie | non communiqué |

Le prix d'entrée à **0,40 $/M tokens** est 6× moins élevé que Qwen3.7-Max, le modèle le plus puissant de la famille. C'est une décision de positionnement délibérée : Alibaba rend l'accès à un modèle multimodal capable accessible pour des volumes importants.

## Performances en tant qu'agent GUI

Le cas d'usage le plus différenciant de Qwen3.7-Plus est sa capacité à **agir comme agent sur des interfaces graphiques** — navigateurs, applications mobiles, interfaces desktop. Sur le benchmark **ScreenSpot Pro**, qui mesure la précision avec laquelle un modèle peut localiser et interagir avec des éléments d'interface à partir d'instructions en langage naturel :

| Modèle | ScreenSpot Pro |
|---|---|
| **Qwen3.7-Plus** | **79.0** |
| GPT-5.4 | 67.4 |
| Claude Opus 4.6 | 49.5 |

Un écart de 12 points sur GPT-5.4 et de près de 30 points sur Claude Opus 4.6 place Qwen3.7-Plus comme le modèle de référence pour les tâches d'automatisation d'interface.

## Multimodalité et raisonnement profond

Qwen3.7-Plus traite nativement les images, les vidéos (pour l'analyse d'écrans et de workflows), et génère du code exécutable en boucle d'itération fermée. Le modèle peut :

1. Observer un écran ou une vidéo d'interface
2. Planifier une séquence d'actions
3. Générer et exécuter le code correspondant
4. Observer le résultat et itérer

Ce cycle observation-planification-exécution-correction est ce qui le distingue d'un simple modèle multimodal — c'est un **agent**, pas juste un classificateur visuel.

## Contexte de 1M tokens

La fenêtre d'un million de tokens est suffisante pour ingérer l'intégralité d'un projet de design (fichiers Figma exportés, assets, specs) ou d'une codebase frontend de taille moyenne. Pour les agents qui doivent maintenir un contexte complet sur des tâches longues — refactoring de design system, migration d'architecture — cette fenêtre change profondément ce qui est possible sans chunking manuel.

## Implications pour les développeurs frontend

Pour un développeur frontend, les cas d'usage les plus intéressants de Qwen3.7-Plus sont :

- **Tests automatisés d'UI** : un agent qui navigue l'interface comme un utilisateur, signale les régressions visuelles et les problèmes d'accessibilité
- **Documentation automatique** : analyse des composants visuels et génération de documentation à partir d'écrans
- **Scraping et extraction de données** : interagir avec des interfaces non-API via vision + code

La disponibilité via Bailian (plateforme cloud Alibaba) implique que les données transitent par l'infrastructure d'Alibaba — un point à considérer pour les projets avec des contraintes de souveraineté des données.
