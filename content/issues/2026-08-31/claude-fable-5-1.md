---
title: "Claude Fable 5.1 : même puissance, lecture de cache 75 % moins chère"
excerpt: "Anthropic réduit drastiquement le coût des cache reads"
summary: "Anthropic publie Claude Fable 5.1 et Mythos 5.1 le 1er septembre. Même prix d'entrée/sortie que Fable 5, mais la lecture de cache passe de 1 $ à 0,25 $ par million de tokens — une réduction de 75 % qui change la donne pour les workflows RAG et les agents à longue durée de vie."
date: 2026-08-31T00:00:00Z
reading_time: 5
sources:
  [
    { label: "TechCrunch", url: "https://techcrunch.com/2026/09/01/anthropics-new-fable-release-is-cheaper-less-restrictive/" },
    { label: "VentureBeat", url: "https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads" },
    { label: "MacRumors", url: "https://www.macrumors.com/2026/09/01/anthropic-claude-fable-5-1/" },
    { label: "Thurrott", url: "https://www.thurrott.com/a-i/anthropic/340951/anthropic-releases-claude-fable-5-1-and-mythos-5-1" },
    { label: "LLM Stats", url: "https://llm-stats.com/models/claude-fable-5-1" }
  ]
category: 'actus-ia'
---

# Claude Fable 5.1 : même puissance, lecture de cache 75 % moins chère

Anthropic a annoncé le 1er septembre 2026 la disponibilité générale de **Claude Fable 5.1** et **Claude Mythos 5.1**, ses modèles les plus avancés pour le code et le travail de connaissance. Les deux modèles sont disponibles dès maintenant via l'API Claude, Amazon Web Services, Google Cloud et Microsoft Azure, appelés via l'identifiant `claude-fable-5-1`.

## Fable 5.1 vs Mythos 5.1 : deux niveaux de garde-fous

Fable 5.1 et Mythos 5.1 partagent la même architecture et les mêmes performances, mais se distinguent par leur niveau de restrictions :

- **Fable 5.1** est la version GA publique, avec les garde-fous de production standards d'Anthropic et une réduction significative des faux positifs (refus injustifiés).
- **Mythos 5.1** est accessible via des programmes à accès restreint pour des organisations vérifiées en cybersécurité et en sciences du vivant.

Pour la grande majorité des développeurs, Fable 5.1 est le modèle à utiliser.

## Ce qui change vraiment : le prix des cache reads

Le tarif en entrée (10 $/M tokens) et en sortie (50 $/M tokens) reste identique à Fable 5. La vraie nouveauté réside dans le **coût de lecture de cache**, qui passe de **1 $ à 0,25 $ par million de tokens** — soit une réduction de **75 %**.

Pour un workflow RAG typique qui relit fréquemment un même corpus documentaire, ou pour un agent de code qui maintient un contexte de projet entre ses appels, l'impact sur la facture mensuelle peut être substantiel. Les projets qui utilisent massivement le prompt caching sont les premiers bénéficiaires.

| Métrique | Fable 5 | Fable 5.1 |
|---|---|---|
| Entrée | 10 $/M | 10 $/M |
| Sortie | 50 $/M | 50 $/M |
| Cache read | 1 $/M | **0,25 $/M** |

## Amélioration de la précision et réduction des faux positifs

Au-delà du prix, Anthropic met en avant deux axes d'amélioration :

1. **Réduction des faux positifs** : Fable 5.1 est moins susceptible de refuser des requêtes légitimes que son prédécesseur. Pour les développeurs qui travaillent sur des sujets techniques sensibles (cybersécurité, analyse de vulnérabilités dans un cadre professionnel), cela se traduit par moins de friction.
2. **Performances conservées** : Anthropic affirme que les gains de performance du modèle de base sont maintenus, la version 5.1 n'étant pas une régression en termes de capacités.

## Modèle multimodal

Fable 5.1 prend en charge le texte et les images en entrée, dans la continuité de Fable 5. Cette capacité multimodale est utile pour les workflows qui analysent des maquettes, des captures d'écran d'interface, ou des diagrammes d'architecture.

## Ce que ça change en pratique

Pour un développeur frontend intégrant Claude via l'API dans ses outils ou ses pipelines d'automatisation, la mise à jour vers `claude-fable-5-1` est une décision simple : même performance, garde-fous affinés, et une réduction significative de la note de cache reads. La migration est transparente côté code — seul l'identifiant du modèle change.
