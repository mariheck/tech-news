---
title: "LLM 0.32 : raisonnement, server tools et logs redessinés"
excerpt: "Grosse mise à jour de l'outil CLI open-source LLM de Simon Willison"
summary: "LLM 0.32, la mise à jour la plus significative depuis le lancement de l'outil, apporte les reasoning traces visibles, les server-side tools, le support OpenAI Responses et un logging repensé avec SQLite content-addressable."
date: 2026-08-03T00:00:00Z
reading_time: 4
sources:
  [
    { label: "Simon Willison Blog", url: "https://simonwillison.net/2026/Aug/4/new-release-of-llm/" },
    { label: "Mastodon @simon", url: "https://fedi.simonwillison.net/@simon/117039969641535860" },
    { label: "X @simonw", url: "https://x.com/simonw/status/2084792341572001871" }
  ]
category: 'dev-ia'
---

# LLM 0.32 : raisonnement, server tools et logs redessinés

Simon Willison a publié le 4 août **LLM 0.32**, qu'il qualifie lui-même de "version la plus significative depuis le lancement initial de l'outil". Pour ceux qui ne connaissent pas : LLM est un outil en ligne de commande et une bibliothèque Python open-source qui permet d'interagir avec des centaines de modèles de langages différents via une interface unifiée.

## Qu'est-ce que LLM ?

LLM permet d'interroger n'importe quel LLM en ligne de commande ou dans du code Python, sans avoir à gérer les APIs de chaque fournisseur séparément. Un seul outil, une interface cohérente pour OpenAI, Anthropic, Google Gemini, Ollama, et une centaine d'autres modèles via des plugins.

```bash
# Interroger GPT depuis le terminal
llm "Explique le CSS anchor positioning en une phrase"

# Ou Claude
llm -m claude-opus-5 "Résume ce fichier" < rapport.txt
```

La bibliothèque Python est aussi utilisable programmatiquement dans des scripts, des agents, ou des notebooks.

## Reasoning traces visibles

La nouveauté la plus attendue : LLM 0.32 expose les **chaînes de raisonnement** (reasoning traces) des modèles qui les supportent (Claude Opus, o3, Gemini Flash Thinking, Muse Spark avec `reasoning_effort`).

```bash
# Afficher le raisonnement
llm --show-reasoning "Quel est l'algorithme optimal pour ce problème ?"
```

Les traces sont stockées dans la base de données de logs et consultables après coup — ce qui est particulièrement utile pour débugger des outputs inattendus sur des tâches complexes.

```bash
# Récupérer les traces de la dernière exécution
llm logs --show-reasoning -n 1
```

## Server-side tools

LLM 0.32 supporte désormais les **server-side tools** : des outils hébergés côté provider que le modèle peut invoquer sans les envoyer dans le contexte de la requête. OpenAI et Anthropic proposent des outils côté serveur (recherche web, exécution de code) que certains modèles peuvent appeler directement.

```python
import llm

model = llm.get_model("gpt-5.6-sol")
response = model.prompt(
    "Cherche les dernières nouveautés Next.js",
    tools=["web_search"]  # outil server-side
)
```

## Support OpenAI Responses API

L'API Responses d'OpenAI (lancée en 2025) introduit un nouveau format de réponse avec état qui permet de maintenir un contexte de conversation côté serveur. LLM 0.32 la supporte nativement, ce qui améliore les interactions multi-tours avec les modèles OpenAI.

## SQLite content-addressable pour les logs

Le système de logging a été refait. LLM 0.32 utilise un **SQLite content-addressable** : au lieu de dupliquer les tokens identiques dans plusieurs logs, le système stocke une seule fois chaque contenu et le référence par hash. Le résultat est une base de données de logs beaucoup plus compacte sur des projets avec des prompts répétitifs.

```bash
# Consulter les logs avec les nouvelles capacités de filtrage
llm logs --model claude-opus-5 --since 2026-08-01
llm logs --reasoning  # uniquement les entrées avec des reasoning traces
```

## Pourquoi c'est utile pour les développeurs frontend

LLM n'est pas réservé aux ingénieurs ML. Pour un développeur frontend qui intègre des LLMs dans son workflow, c'est un outil de prototypage et de débogage efficace :

- **Tester rapidement** un prompt sur différents modèles sans changer de code
- **Comparer les outputs** de Claude, GPT et Gemini sur le même prompt
- **Automatiser** la génération de descriptions d'images, de commentaires de code, ou d'extraits localisés depuis des scripts shell
- **Débugger** via les reasoning traces quand un modèle donne un résultat inattendu

L'outil est particulièrement adapté aux pipelines de génération de contenu statique (génération d'excerpts pour un CMS headless, par exemple) ou aux scripts d'automatisation qui appellent des LLMs ponctuellement.

```bash
# Exemple : générer des alt-texts pour toutes les images d'un dossier
for img in ./public/images/*.jpg; do
  llm -m claude-sonnet-5 "Décris cette image en 10 mots max pour un alt-text accessible" \
    -a "$img" >> alt-texts.txt
done
```

LLM est disponible via pip (`pip install llm`) et les plugins pour les différents providers via `llm install llm-anthropic`, etc.
