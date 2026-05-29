---
title: 'Claude Managed Agents s''ouvre aux infras privées'
excerpt: 'Sandboxes self-hosted et tunnels MCP : vos agents sur votre infrastructure, orchestrés par Anthropic.'
summary: 'Anthropic passe les sandboxes self-hosted en public beta et lance les MCP tunnels en research preview : les agents Claude peuvent désormais exécuter des outils sur votre propre infra (Cloudflare, Modal, Vercel) et atteindre des serveurs MCP en réseau privé.'
date: 2026-05-18T00:00:00Z
reading_time: 6
sources:
  [
    { label: 'Claude – Managed Agents updates', url: 'https://claude.com/blog/claude-managed-agents-updates' },
    { label: 'The Decoder – self-hosted sandbox', url: 'https://the-decoder.com/anthropic-adds-self-hosted-sandboxes-and-mcp-tunnels-to-claude-managed-agents/' },
    { label: 'TechCrunch – Code with Claude', url: 'https://techcrunch.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/' }
  ]
category: 'dev-ia'
---

# Claude Managed Agents s'ouvre aux infras privées

Lors du Code with Claude London (19-20 mai), Anthropic a annoncé deux évolutions des Managed Agents qui s'attaquent directement aux deux plus gros blocages enterprise à l'adoption des agents en production : la souveraineté des données et l'accès aux systèmes internes.

## Sandboxes self-hosted : l'exécution reste chez vous

Jusqu'ici, les Managed Agents d'Anthropic exécutaient les outils dans des sandboxes gérées côté Anthropic. Le problème pour les équipes enterprise : les données sortent du périmètre, ce qui rend l'utilisation sur des bases de code propriétaires ou des données sensibles impossible ou très encadrée.

Les **sandboxes self-hosted** passent en **public beta**. Le principe : l'orchestration reste chez Anthropic (Claude reçoit les instructions, raisonne, décide quelle action prendre), mais l'exécution des outils se fait dans l'infrastructure du client. Les plateformes supportées au lancement :

- **Cloudflare Workers**
- **Daytona** (environnements de dev éphémères)
- **Modal** (compute à la demande)
- **Vercel** (fonctions serverless)

Les premiers adoptants — Amplitude, Clay, Rogo — valident le modèle sur des cas d'usage réels. L'architecture sépare nettement la couche de raisonnement (Anthropic) de la couche d'exécution (client), ce qui répond aux exigences DLP de la plupart des équipes sécurité enterprise.

## MCP Tunnels : atteindre les systèmes internes sans ouvrir les firewalls

Le deuxième blocage : les agents Managed ne peuvent pas contacter des serveurs MCP qui tournent dans un réseau privé. La solution habituelle — ouvrir un port inbound — est incompatible avec la plupart des politiques de sécurité réseau.

Les **MCP tunnels** arrivent en **research preview**. Ils fonctionnent sur un principe de gateway sortant uniquement : un processus léger tourne dans le réseau interne et établit une connexion outbound vers Anthropic. L'agent peut ensuite appeler les outils du serveur MCP interne via ce tunnel, sans aucune règle firewall inbound.

L'utilité est immédiate pour les équipes qui ont externalisé leur CI/CD, leurs bases de données internes, ou leurs registres de packages privés derrière un VPN.

## Code with Claude : le contexte enterprise

Ces annonces s'inscrivent dans la conférence développeurs "Code with Claude" tenue à Londres les 19 et 20 mai — simultanément avec Google I/O, ce qui dit quelque chose sur les tensions concurrentielles de la semaine. Lors de la conférence, des clients enterprise comme Spotify (99%+ d'adoption des ingénieurs) et Delivery Hero ont présenté comment ils ont restructuré leurs équipes engineering autour de Claude Code.

Anthropic a également annoncé deux fonctionnalités en preview plus avancée : **Dreaming** (les agents apprennent de leurs sessions passées pour améliorer leur comportement) et **Outcomes** (boucles goal-directed : l'agent continue jusqu'à atteindre un objectif défini, pas seulement jusqu'à l'expiration de la session).

L'annonce des sandboxes self-hosted combinée aux MCP tunnels dessine un arc produit cohérent : Anthropic veut être le cerveau des agents d'entreprise, tout en laissant les muscles — l'exécution — sur l'infrastructure existante du client.
