---
title: "Inkling : le premier modèle open-weight de Mira Murati"
excerpt: "Un MoE multimodal open-weight de 975B pour personnaliser votre IA"
summary: "Thinking Machines Lab (fondé par l'ex-CTO d'OpenAI Mira Murati) publie Inkling le 15 juillet : un modèle open-weight de 975B paramètres (41B actifs), multimodal texte/image/audio, fenêtre d'1M tokens et conçu pour être fine-tuné."
date: 2026-07-13T00:00:00Z
reading_time: 5
sources:
  [
    { label: "TechCrunch – Inkling launch", url: "https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/" },
    { label: "Thinking Machines – blog", url: "https://thinkingmachines.ai/news/introducing-inkling/" },
    { label: "MarkTechPost – spécifications", url: "https://www.marktechpost.com/2026/07/15/thinking-machines-lab-releases-inkling-a-975b-parameter-open-weights-multimodal-moe-with-41b-active-parameters-and-controllable-thinking-effort/" },
    { label: "Artificial Analysis – classement", url: "https://artificialanalysis.ai/articles/thinking-machines-has-released-inkling-the-new-leading-u-s-open-weights-model" }
  ]
category: 'actus-ia'
---

# Inkling : le premier modèle open-weight de Mira Murati

Le 15 juillet 2026, Thinking Machines Lab a publié Inkling, son premier modèle d'IA maison. L'entreprise est fondée par Mira Murati, ancienne CTO d'OpenAI jusqu'à fin 2024, et a levé des fonds significatifs autour de sa vision d'une IA plus personnalisable et moins monolithique que les modèles de fondation fermés.

## Architecture et spécifications

Inkling est un modèle Mixture-of-Experts (MoE) de type transformer avec 975 milliards de paramètres au total, dont 41 milliards sont actifs lors de chaque inférence. Il a été pré-entraîné sur 45 billions de tokens couvrant du texte, des images, de l'audio et de la vidéo.

La fenêtre de contexte est de 1 million de tokens. Le modèle supporte nativement le raisonnement sur du texte, des images et de l'audio. Une capacité de « pensée contrôlable » (controllable thinking effort) permet d'ajuster dynamiquement la profondeur du raisonnement selon le besoin, offrant ainsi un équilibre entre coût et performance par requête.

Alongside Inkling, Thinking Machines a également mis à disposition en preview Inkling-Small : un modèle plus léger avec 12 milliards de paramètres actifs, entraîné avec une recette similaire, visant de bonnes performances à moindre coût et latence.

## La stratégie de Thinking Machines

Le positionnement d'Inkling est délibérément différent de celui des grands modèles fermés : il n'est pas présenté comme « le meilleur modèle global disponible aujourd'hui, open ou closed ». Thinking Machines assume cette limitation et met en avant d'autres qualités : la combinaison de multimodalité, de raisonnement efficient et de la possibilité de télécharger et de modifier les poids directement.

La plateforme Tinker, développée par Thinking Machines, est présentée comme le point d'entrée pour fine-tuner Inkling. C'est cette vision — un modèle de base open-weight pensé pour être adapté, pas juste consommé — qui traduit la conviction de l'entreprise contre les modèles « taille unique ».

Sur le classement d'Artificial Analysis, Inkling se positionne comme le meilleur modèle open-weight américain au moment de son lancement — ce qui en fait une alternative concrète à Kimi K3 (chinois) pour les équipes qui ont des préférences géographiques ou réglementaires sur l'origine des modèles.

## Ce que ça change pour un développeur

L'intérêt principal d'Inkling pour un développeur frontend utilisant de l'IA dans son workflow est la possibilité de le fine-tuner sur ses propres données : un codebase interne, des composants spécifiques, des conventions de nommage ou un design system propriétaire. Les modèles closed-source ne permettent pas ce niveau d'adaptation.

La multimodalité text/image/audio ouvre des cas d'usage de génération UI à partir de maquettes ou de screenshots, un terrain sur lequel les modèles de vision sont de plus en plus sollicités dans les workflows design-to-code.

L'annonce d'Inkling-Small en preview laisse anticiper une gamme de modèles à différents points de la courbe coût/performance — un pattern classique que les labs etablis comme Anthropic et OpenAI utilisent depuis longtemps, mais que les labs open-weight commencent seulement à adopter.
