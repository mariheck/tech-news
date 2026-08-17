---
title: "Copilot JetBrains : mémoire persistante et Ollama en local"
excerpt: "Votre IDE retient vos préférences et tourne des modèles offline"
summary: "Le 11 août, GitHub ajoute la mémoire persistante et le support Ollama dans GitHub Copilot for JetBrains. Les préférences de l'IA traversent désormais les sessions, et les modèles locaux peuvent remplacer les appels cloud depuis IntelliJ, WebStorm ou PyCharm."
date: 2026-08-10T00:00:00Z
reading_time: 3
sources:
  [
    { label: "GitHub Changelog – JetBrains update", url: "https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains/" },
    { label: "Axentia – Ollama JetBrains guide", url: "https://axentia.in/blog/github-copilot-ollama-jetbrains-run-local-models-in-your-ide" },
    { label: "Kimbodo – AI coding Aug 11", url: "https://kimbodo.com/ai-coding-developer-tools-august-11-2026/" }
  ]
category: 'dev-ia'
---

# Copilot JetBrains : mémoire persistante et Ollama en local

Le 11 août 2026, GitHub a livré une mise à jour notable de **GitHub Copilot for JetBrains** avec deux fonctionnalités distinctes : la **mémoire persistante** et l'intégration d'**Ollama comme provider BYOK** (Bring Your Own Key / model).

## Mémoire persistante : l'IA qui se souvient de vous

Jusqu'ici, chaque session Copilot dans IntelliJ IDEA, WebStorm ou PyCharm repartait de zéro. Vos préférences implicites (style de code favori, bibliothèques préférées, conventions de nommage que vous utilisez dans votre projet) devaient être réapprises à chaque conversation.

Avec la mémoire persistante, Copilot accumule et conserve ces informations entre les sessions. La fonctionnalité est pilotée via le toggle **Copilot Memory** dans les paramètres Copilot du portail GitHub. Les entreprises qui souhaitent ne pas activer la mémoire pour des raisons de conformité peuvent la désactiver globalement.

Techniquement, la mémoire fonctionne comme un contexte additionnel injecté en début de chaque conversation. Copilot synthétise les patterns observés dans vos sessions précédentes (langages utilisés, frameworks, style d'erreurs fréquentes) et les intègre dans le prompt système.

## Ollama : des modèles locaux dans l'IDE

La deuxième nouveauté est l'intégration d'**Ollama comme provider BYOK** dans JetBrains. Ollama est un runtime qui permet d'exécuter des LLMs directement sur une machine locale (CPU ou GPU) — Llama 3, Mistral, Qwen, Gemma, ou n'importe quel modèle compatible GGUF.

Depuis le plugin JetBrains, vous pouvez désormais configurer Ollama comme provider dans les paramètres Copilot. Copilot route alors les requêtes vers votre instance Ollama locale plutôt que vers les serveurs GitHub.

**Cas d'usage concrets :**

- **Confidentialité du code** : les équipes travaillant sur du code propriétaire ou sous NDA peuvent garder les requêtes hors des serveurs cloud.
- **Coût** : les organisations à fort volume de requêtes Copilot peuvent réduire les coûts en faisant tourner des modèles locaux sur leurs propres machines.
- **Offline** : les développeurs sans connexion stable (transports, zones sans réseau) peuvent continuer à utiliser l'IA.

La sélection du modèle (quel modèle Ollama utiliser) se fait via le model picker habituel de Copilot dans JetBrains — la même interface que pour choisir entre Gemini, Claude ou GPT.

## Ce que ça ne fait pas (encore)

Le support Ollama dans JetBrains est actuellement en phase de déploiement et limité à la complétion de code et au chat — pas à l'agent mode ou aux code reviews automatiques. Les fonctionnalités agentiques (Copilot Edits, pull request summaries) continuent de pointer vers des modèles cloud.

La mémoire persistante, quant à elle, ne synchronise pas encore entre JetBrains et VS Code. Si vous alternez entre les deux IDEs, les mémoires sont distinctes.
