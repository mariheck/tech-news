---
title: "MDASH : Microsoft bat le benchmark CyberGym avec un système de sécurité multi-agents"
excerpt: "Microsoft publie MDASH, 100+ agents IA qui ont découvert 16 CVE dans Windows et atteint 88,45 % sur CyberGym — un record publié."
summary: "MDASH orchestre plus de 100 agents spécialisés sur un ensemble de modèles frontier et distillés pour détecter, débattre et prouver des vulnérabilités exploitables de bout en bout. Il supplante Anthropic Mythos Preview (83,1 %) sur CyberGym."
date: 2026-05-11T00:00:00Z
readingTime: 6
sources:
  - label: "Microsoft Security Blog"
    url: "https://www.microsoft.com/en-us/security/blog/2026/05/12/defense-at-ai-speed-microsofts-new-multi-model-agentic-security-system-tops-leading-industry-benchmark/"
  - label: "GeekWire"
    url: "https://www.geekwire.com/2026/microsofts-multi-agent-ai-system-tops-anthropics-mythos-on-cybersecurity-benchmark/"
  - label: "Neowin"
    url: "https://www.neowin.net/news/microsoft-unveils-mdash-a-multi-model-agentic-ai-system-that-beats-anthropics-mythos/"
  - label: "Secure in Seconds – 16 CVE"
    url: "https://www.secureinseconds.com/blog/2026-05-15-microsoft-mdash-ai-vulnerability-hunter"
category: actus ia
---

Le 12 mai, Microsoft a publié sur son Security Blog les détails de **MDASH** (Multi-model Distributed Agentic Security Harness), développé par son équipe Autonomous Code Security. MDASH orchestre plus de 100 agents IA spécialisés pour détecter et prouver des vulnérabilités exploitables dans des logiciels réels — de bout en bout, sans intervention humaine.

## Architecture : la division du travail entre agents

MDASH ne repose pas sur un seul modèle puissant, mais sur une **chaîne de spécialistes** :

1. **Préparation du code** — normalisation, extraction de la surface d'attaque
2. **Scan** — identification des patterns suspects
3. **Validation** — confirmation de l'exploitabilité réelle (élimination des faux positifs)
4. **Débat** — cross-validation entre agents pour éliminer les doublons
5. **Génération de preuve** — rédaction d'un PoC ou d'un chemin d'exploitation documenté
6. **Validation du patch** — vérification que le correctif proposé supprime réellement la vulnérabilité

L'ensemble s'appuie sur un **ensemble de modèles frontier et distillés** : certains agents utilisent des modèles lourds pour le raisonnement complexe, d'autres des modèles plus rapides pour les tâches répétitives.

## Résultats sur CyberGym

Sur le benchmark **CyberGym** (1 507 vulnérabilités réelles), MDASH a obtenu **88,45 %** — le meilleur score publié à ce jour sur ce leaderboard.

| Système | Score |
|---|---|
| **MDASH (Microsoft)** | **88,45 %** |
| Mythos Preview (Anthropic) | 83,1 % |
| GPT-5.5 (OpenAI) | 81,8 % |

## Découvertes réelles : 16 CVE dans Windows

Au-delà du benchmark, MDASH a été utilisé en conditions réelles sur la stack réseau et d'authentification Windows. Il a identifié **16 nouvelles CVE**, dont **4 failles RCE critiques** — incluses dans le Patch Tuesday de mai 2026.

C'est ce que les équipes de sécurité appellent un résultat de _real-world utility_ : le système ne score pas seulement bien sur des tests académiques, il trouve des vulnérabilités critiques dans des logiciels de production massifs.

## Mise en perspective avec DELEGATE-52

Il est notable que les deux publications majeures de Microsoft cette semaine semblent se contredire : DELEGATE-52 (11 mai) montre que les agents IA échouent sur les tâches longues en contexte professionnel général, tandis que MDASH prouve qu'un pipeline agentique très spécialisé peut exceller sur un domaine précis.

La leçon est peut-être que la **spécialisation du pipeline agentique est déterminante** — des agents généralistes sur des tâches générales donnent des résultats décevants ; des pipelines dédiés, avec des étapes de validation rigoureuses, peuvent être très performants.
