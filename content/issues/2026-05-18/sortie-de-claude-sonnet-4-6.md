---
title: 'Sortie de Claude Sonnet 4.6 : ce qui change pour le code agentique'
excerpt: 'Tool use plus stable, contexte 1M, latence en baisse de 30%. Bench réel sur trois agents en production.'
summary: 'Anthropic publie Sonnet 4.6 avec un tool use nettement plus fiable, un contexte étendu à 1M tokens, et une latence en baisse de 30%. On a fait tourner trois agents de prod dessus pendant une semaine.'
date: 2026-05-18T00:00:00Z
reading_time: 9
sources:
  [
    { label: 'Anthropic release notes', url: 'anthropic.com/news/sonnet-4-6' },
    { label: 'Bench SWE-Bench Verified', url: 'swebench.com/leaderboard' },
    {
      label: 'Cookbook : tool use patterns',
      url: 'github.com/anthropics/cookbook'
    }
  ]
category: 'Autres'
---

# Sortie de Claude Sonnet 4.6 : ce qui change pour le code agentique

Anthropic publie Claude Sonnet 4.6 mardi, avec trois angles d'amélioration qui matter pour quiconque construit des agents en production : tool use plus fiable, contexte étendu à 1M tokens, et latence en baisse de 30% sur les workloads agentiques.

On a fait tourner trois agents de prod dessus pendant une semaine : un agent de migration de code, un agent de support client, et notre propre setup interne autour des PR reviews. Verdict honnête, pas du marketing.

## Tool use : c'est le vrai changement

Sur la 4.5, on observait environ 4% de calls d'outils malformés sur des chaînes longues (10+ tools en cascade). Sur la 4.6, on tombe sous 0.5% sur le même corpus. Pour un agent qui orchestre dix appels à la suite, ça change tout : avant, un workflow sur quatre échouait quelque part. Maintenant, on enchaîne.

## Contexte 1M : utile, mais avec discipline

Le passage à 1M tokens est utile pour des cas spécifiques : indexer un repo complet, analyser une trace de logs longue, comparer plusieurs versions d'un même document. Mais la qualité dégrade au-delà de ~400k tokens injectés brut. La règle reste : ne pas remplir parce qu'on peut. RAG bien fait beat brute force.

### Latence : -30% sur des workloads agentiques

Sur notre PR reviewer (chaîne de 6 à 12 calls outils), on passe d'une médiane à 14s à une médiane à 9.5s. C'est mesurable dans l'UX : l'agent se sent réactif, on n'a plus besoin d'expliquer aux nouveaux collègues qu'il faut attendre.
