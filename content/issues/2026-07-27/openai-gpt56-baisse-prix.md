---
title: "OpenAI divise par 5 le prix de GPT-5.6 Luna et Terra"
excerpt: "Luna passe à 0,20 $/MTok : GPT-5.6 devient accessible aux use cases à volume."
summary: "Le 30 juillet 2026, OpenAI a réduit jusqu'à 80 % le prix de ses deux modèles GPT-5.6 d'entrée et de milieu de gamme. Luna passe de 1 $/MTok à 0,20 $/MTok en entrée, Terra de 10 $/MTok à 2 $/MTok. GPT-5.6 Sol, le flagship, reste inchangé à 5 $/30 $/MTok."
date: 2026-07-27T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Tech Startups – OpenAI price cut July 30", url: "https://techstartups.com/2026/07/30/top-tech-news-today-july-30-2026-google-intel-microsoft-mit-nvidia-softbank-xai-more/" },
    { label: "BuildFastWithAI – AI news July 30", url: "https://www.buildfastwithai.com/blogs/ai-news-today-july-30-2026" },
    { label: "AI Tools Recap – GPT-5.6 tiers July", url: "https://aitoolsrecap.com/Blog/AINewsJuly2026.aspx" }
  ]
category: 'actus-ia'
---

# OpenAI divise par 5 le prix de GPT-5.6 Luna et Terra

Le **30 juillet 2026**, OpenAI a annoncé une baisse de prix allant jusqu'à **80 %** sur deux de ses trois variantes GPT-5.6. La structure tarifaire complète du modèle est désormais :

| Modèle | Input ($/MTok) | Output ($/MTok) | Variation |
|--------|---------------|-----------------|-----------|
| GPT-5.6 Sol | 5,00 | 30,00 | inchangé |
| GPT-5.6 Terra | **2,00** | **12,00** | −80 % |
| GPT-5.6 Luna | **0,20** | **1,20** | −80 % |

## Les trois niveaux du modèle

GPT-5.6 est disponible depuis début juillet en trois niveaux de capacité :

- **Sol** : le niveau flagship. Performances maximales pour les tâches de raisonnement complexe, les agents longue durée et les cas d'usage professionnels exigeants.
- **Terra** : compromis performance/prix. Adapté aux cas où la qualité Sol n'est pas indispensable mais où Luna manquerait de profondeur.
- **Luna** : le niveau optimisé pour le volume et la latence. Maintenant à 0,20 $/MTok en entrée — aligné avec les modèles flash/haiku de la concurrence.

## Ce que cette baisse change concrètement

À **0,20 $/MTok en entrée**, GPT-5.6 Luna devient compétitif sur les use cases à volume élevé :

- **Embeddings et classification à grande échelle** : traitements batch de millions de documents
- **Pipelines de modération de contenu** : où le coût par item doit rester très bas
- **Features temps réel** : auto-complétion, extraction d'entités, reformulation légère

Luna était auparavant à environ 1 $/MTok, un niveau qui excluait de nombreux use cases économiques. À 0,20 $/MTok, il rejoint la fourchette des modèles « économiques » des autres labs.

## 100 000 chercheurs avec accès gratuit

En parallèle de la baisse tarifaire, OpenAI a annoncé offrir un **accès gratuit à ses modèles frontier** (niveau Sol) à environ 100 000 chercheurs jusqu'en 2027. Cette initiative vise à stimuler la recherche académique sur les frontier models en dehors des labs.

## Le contexte : pression concurrentielle

Cette baisse intervient dans un contexte de compression des marges sur les API d'inférence. Plusieurs facteurs :

- **L'open source qui monte** : Kimi K3 et DeepSeek V4, publiés en open weights, dominent certains benchmarks et sont hostables pour zéro coût API
- **Gemini Flash** de Google à des prix similaires pour les tâches légères
- **Baisse continue des coûts de compute** : les prix spot GPU ont été divisés par 2-3 depuis fin 2024

Pour les développeurs frontend qui utilisent des APIs LLM dans leurs applications, la baisse de Luna ouvre la porte à des **features enrichies dans des contextes où le budget IA par requête était un frein** — résumés à la volée, extraction de données dans des formulaires, personnalisation légère de contenu.

---

Il faut noter qu'une baisse de 80 % de Luna représente une compression significative des revenus potentiels d'OpenAI si le volume ne compense pas. À court terme, c'est un signal clair que la compétition sur les prix API LLM s'accélère.
