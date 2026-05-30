---
title: 'Anthropic acquiert Stainless, maître de ses SDKs'
excerpt: 'Pour ~300 M$, Anthropic absorbe le générateur de SDKs qui équipait aussi OpenAI et Google.'
summary: "Anthropic rachète Stainless (~300 M$), la startup qui génère automatiquement SDKs, CLIs et serveurs MCP depuis des specs OpenAPI. Elle alimentait déjà tous les SDKs Anthropic officiels — et ceux d''OpenAI et Google, qui perdent l'accès."
date: 2026-05-18T00:00:00Z
reading_time: 4
sources:
  [
    {
      label: 'TechCrunch – acquisition Stainless',
      url: 'https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/'
    }
  ]
category: 'actus-ia'
---

# Anthropic acquiert Stainless, maître de ses SDKs

Anthropic a annoncé le 18 mai l'acquisition de Stainless pour un montant rapporté par The Information à **plus de 300 millions de dollars**. L'acquisition est stratégique : Stainless est la startup qui génère automatiquement des SDKs, des CLIs et des serveurs MCP depuis des spécifications OpenAPI — et elle alimentait déjà l'intégralité des SDKs officiels d'Anthropic.

## Ce que fait Stainless

Stainless automatise la génération et la maintenance de bibliothèques clientes à partir d'une spec OpenAPI. Au lieu de maintenir des SDKs Python, TypeScript, Go, Java, Ruby manuellement — avec les inévitables désynchronisations entre versions — les équipes définissent leur API une fois et Stainless génère le code client pour chaque langage, avec tests, documentation et versioning.

La startup avait une clientèle remarquable : outre Anthropic, elle gérait les SDKs d'**OpenAI**, **Google** et **Cloudflare**. C'est cette base client qui rend l'acquisition particulièrement significative.

## Les conséquences immédiates

Anthropic va **fermer les produits hébergés de Stainless** — ce qui signifie qu'OpenAI, Google et Cloudflare perdent leur accès à la plateforme. Ces équipes vont devoir migrer vers une autre solution ou internaliser la génération de leurs SDKs.

Pour Anthropic, l'acquisition fait passer la toolchain SDK en interne : meilleur contrôle qualité, itérations plus rapides, et — point non négligeable — un avantage concurrentiel sur la qualité des bibliothèques clientes Claude face aux alternatives.

## Génération de serveurs MCP

Le timing de l'acquisition est révélateur. Au moment où l'écosystème MCP (Model Context Protocol) croît rapidement — le registre officiel dépasse désormais 9 650 serveurs — Stainless générait déjà des serveurs MCP depuis des specs OpenAPI.

Anthropic intègre donc une capacité clé pour automatiser la création d'intégrations MCP, au moment précis où la demande pour ce type d'outillage explose. C'est un investissement d'infrastructure autant qu'une acquisition défensive.

## Lecture stratégique

L'acquisition de Stainless fait suite à une semaine où Anthropic a également annoncé une levée de fonds de 30 milliards de dollars à une valorisation de plus de 900 milliards, l'alliance globale avec KPMG (276 000 employés), et le recrutement d'Andrej Karpathy. C'est une semaine de consolidation et d'expansion agressive sur tous les fronts — modèles, entreprise, et maintenant toolchain de développement.

Pour les développeurs qui utilisent le SDK officiel Anthropic, la conséquence directe est positive : la qualité et la cohérence des bibliothèques clientes vont s'améliorer, avec une équipe dédiée intégrée chez Anthropic.
