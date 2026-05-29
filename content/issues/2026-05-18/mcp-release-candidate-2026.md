---
title: 'MCP Release Candidate : le protocole agentique se fige'
excerpt: 'Transport stateless, MCP Apps en iframes, spec finale le 28 juillet. Le registre dépasse 9 600 serveurs.'
summary: 'Le Release Candidate MCP est verrouillé au 21 mai : transport stateless (six SEPs), MCP Apps permettant des UIs HTML dans le host, et spec finale prévue le 28 juillet. Le registre officiel dépasse 9 650 serveurs.'
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'MCP blog – roadmap 2026', url: 'https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/' },
    { label: 'The New Stack – MCP roadmap', url: 'https://thenewstack.io/model-context-protocol-roadmap-2026/' }
  ]
category: 'actus-ia'
---

# MCP Release Candidate : le protocole agentique se fige

Le Release Candidate de la spécification MCP (Model Context Protocol) a été verrouillé le 21 mai. La spec finale est attendue pour le **28 juillet 2026**. Pour les développeurs qui construisent des serveurs MCP ou intègrent des clients MCP dans leurs outils, c'est le signal que l'API sur laquelle s'appuyer est désormais stable.

## Le changement structurant : un transport stateless

Le changement architectural le plus important du RC est la refonte complète du transport : **MCP devient stateless au niveau du protocole**, à travers six SEPs (Spec Enhancement Proposals) coordonnées.

Dans la version précédente, MCP supposait une connexion persistante entre le client et le serveur — ce qui compliquait le déploiement dans des environnements sans état (serverless, edge, workers). Avec le transport stateless du RC, chaque interaction est autonome : le serveur n'a pas besoin de maintenir de session active entre les appels.

En pratique, cela signifie :
- Des serveurs MCP déployables comme des fonctions serverless (Cloudflare Workers, Vercel Functions, AWS Lambda)
- Une réduction significative de la complexité de déploiement pour les intégrations légères
- Une meilleure compatibilité avec les infrastructures existantes des équipes enterprise

## MCP Apps (SEP-1865) : des UIs HTML dans le host

La nouveauté fonctionnelle la plus notable du RC est **MCP Apps**. Les serveurs peuvent désormais livrer des interfaces HTML interactives qui sont rendues dans des iframes sandboxées à l'intérieur du client host.

Ce que ça ouvre : un serveur MCP qui gère des données de projet peut livrer une UI de visualisation directement dans Claude Desktop ou Cursor, plutôt que de retourner uniquement du texte ou du JSON. Les outils de data, les dashboards de CI/CD, les explorateurs de logs — tous peuvent maintenant avoir une surface d'interface propre, sans que l'utilisateur quitte son client MCP.

## Politique de cycle de vie des fonctionnalités

Le RC formalise aussi une **politique de lifecycle** des fonctionnalités : Active → Deprecated → Removed, avec un minimum de **12 mois entre chaque étape**. Pour les développeurs qui construisent sur MCP, c'est une garantie de stabilité : une fonctionnalité ne peut pas disparaître du jour au lendemain.

## Le registre dépasse 9 650 serveurs

À la date du 24 mai, le registre officiel MCP recensait **9 652 serveurs**. La croissance de l'écosystème est rapide : la disponibilité d'intégrations prêtes à l'emploi (GitHub, Jira, Slack, bases de données, APIs) est devenue un argument de poids pour les équipes qui évaluent quel protocole d'agents standardiser.

## Ce que ça change pour les développeurs

Si vous maintenez un serveur MCP ou intégrez MCP dans un produit, quelques actions concrètes :

1. **Tester la compatibilité stateless** : si votre serveur maintient un état de session, le RC est le bon moment pour refactorer vers un modèle sans état
2. **Explorer MCP Apps** : si votre serveur expose des données qui bénéficieraient d'une visualisation, SEP-1865 ouvre cette possibilité sans dépendance externe
3. **Planifier la migration vers la spec finale** : 28 juillet comme date cible, avec une fenêtre de 12 mois minimum sur toutes les fonctionnalités stables avant deprecation

Le contexte d'ensemble renforce l'urgence : avec Google qui propose WebMCP pour les navigateurs et Anthropic qui intègre les MCP tunnels dans les Managed Agents, le protocole s'inscrit maintenant dans plusieurs stacks majeures simultanément.
