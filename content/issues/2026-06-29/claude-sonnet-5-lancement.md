---
title: "Claude Sonnet 5, nouveau modèle par défaut d'Anthropic"
excerpt: "Le Sonnet le plus agentique, gratuit par défaut"
summary: "Anthropic lance Claude Sonnet 5 le 30 juin : modèle par défaut sur Free et Pro, disponible sur Max, Team, Enterprise, Claude Code et la Claude Platform, avec tarif promo API à 2$/10$ par Mtok jusqu'au 31 août."
date: 2026-06-29T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Anthropic – Claude Sonnet 5", url: "https://www.anthropic.com/news/claude-sonnet-5" },
    { label: "GitHub Changelog", url: "https://github.blog/changelog/2026-06-30-claude-sonnet-5-is-generally-available-for-github-copilot/" },
    { label: "vals.ai – SWE-bench", url: "https://www.vals.ai/benchmarks/swebench" }
  ]
category: 'actus-ia'
---

# Claude Sonnet 5, nouveau modèle par défaut d'Anthropic

Le 30 juin 2026, Anthropic a annoncé Claude Sonnet 5, qui remplace Sonnet 4.6 comme modèle par défaut sur les plans Free et Pro de Claude.ai. Le modèle est également disponible sur les plans Max, Team et Enterprise, ainsi que dans Claude Code et sur la Claude Platform (API). C'est la cinquième itération de la ligne Sonnet, positionnée par Anthropic comme le modèle le plus agentique de la gamme à ce jour.

## Ce qui change concrètement

Anthropic met en avant la capacité de Sonnet 5 à planifier et exécuter des tâches longues de façon autonome : usage d'outils, de terminal et de navigateur sans supervision constante. C'est cette dimension "agentique" — plus que le seul raisonnement brut — qui différencie cette version des précédentes, dans la continuité de ce que la gamme Claude Code avait déjà amorcé.

Sur le plan tarifaire, Anthropic propose une promotion sur l'API : 2$ par million de tokens en entrée et 10$ par million de tokens en sortie, jusqu'au 31 août 2026, avant un retour probable aux tarifs standards de la gamme Sonnet.

## Adoption immédiate par l'écosystème

Le même jour, GitHub a annoncé la disponibilité générale de Claude Sonnet 5 dans GitHub Copilot, signe que le modèle est immédiatement intégré aux outils tiers plutôt que réservé aux seuls produits Anthropic. Framer a suivi dans la même semaine (voir notre article dédié), ce qui confirme une stratégie de distribution large dès le lancement plutôt qu'un déploiement progressif.

## Où se situe Sonnet 5 face au reste de la gamme

Anthropic a également, la même semaine, remis en circulation deux modèles plus haut de gamme — Claude Fable 5 et Claude Mythos 5 — après la levée de restrictions à l'export imposées par le gouvernement américain (voir notre article séparé sur le sujet). Sur le benchmark SWE-bench Verified, qui mesure la capacité à résoudre de vrais tickets GitHub, le classement relevé début juillet sur vals.ai place Claude Mythos 5 en tête à 95,5 %, suivi de Claude Fable 5 à 95 % et de Claude Opus 4.8 à 88,6 %. Sonnet 5 n'apparaît pas en tête de ce classement précis, ce qui confirme sa vocation de modèle par défaut rapide et économique plutôt que de modèle de pointe absolu — ce rôle restant occupé par Fable 5 et Mythos 5.

## Pourquoi ça compte pour un dev frontend

Pour un développeur qui s'appuie sur Claude Code ou Copilot au quotidien, ce changement de modèle par défaut se traduit directement par un changement de comportement de l'assistant : plus d'autonomie sur les tâches multi-étapes (refactor, migration, correction de tests), mais aussi une facture API potentiellement différente si vous consommez Sonnet via l'API en dehors des interfaces chat. La fenêtre promotionnelle jusqu'au 31 août est l'occasion de tester la bascule sans surcoût avant que les tarifs ne se stabilisent.
