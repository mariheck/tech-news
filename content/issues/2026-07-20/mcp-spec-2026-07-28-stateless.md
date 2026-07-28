---
title: 'MCP passe stateless : la plus grande révision du protocole'
excerpt: "MCP 2026-07-28 : plus de session, plus de handshake, HTTP standard suffit."
summary: "Le RC de la spec MCP 2026-07-28 supprime les sessions et le handshake : chaque requête est autonome, les serveurs tournent derrière un load balancer ordinaire. Les extensions (MCP Apps, Tasks), l'auth OAuth/OIDC renforcée et une politique de dépréciation formelle complètent la refonte."
date: 2026-07-20T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'MCP Blog – RC 2026-07-28',
      url: 'https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/'
    },
    {
      label: 'TechCrunch – MCP plus simple',
      url: 'https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/'
    },
    {
      label: 'The Register – stateful past',
      url: 'https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/5276722'
    },
    {
      label: 'WorkOS – auth changes',
      url: 'https://workos.com/blog/mcp-2026-spec-agent-authentication'
    },
    {
      label: 'Stacktree – ce qui change',
      url: 'https://stacktr.ee/blog/mcp-2026-spec-changes'
    }
  ]
category: 'actus-ia'
---

# MCP passe stateless : la plus grande révision du protocole

Le release candidate de la spec **MCP 2026-07-28** est disponible depuis la semaine du 20 juillet. La version finale est attendue le 28 juillet. C'est la révision la plus importante du Model Context Protocol depuis son lancement, et son impact sur toute l'infrastructure des agents IA sera significatif : le protocole abandonne son modèle stateful et devient **entièrement stateless**.

## Le problème que résout cette révision

Depuis son lancement, MCP fonctionnait sur un modèle de **session permanente** : une connexion s'établissait avec un handshake (`initialize`), générait un `Mcp-Session-Id`, et toutes les requêtes suivantes portaient cet identifiant. Conséquences pour l'infrastructure :

- **Sessions sticky obligatoires** : le load balancer devait router chaque requête vers le même serveur backend
- **Session store partagé** : les instances de serveur devaient se synchroniser sur l'état de session
- **Deep packet inspection à la gateway** : impossible de router sur de simples headers HTTP standards

Ce modèle fonctionnait en développement local mais devenait un obstacle dès qu'on cherchait à scaler horizontalement un serveur MCP en production.

## Ce que change la spec 2026-07-28

### Suppression des sessions

`Mcp-Session-Id` et le handshake `initialize` sont **supprimés**. Chaque requête est désormais auto-portante : elle inclut tout le contexte nécessaire dans ses headers et son payload.

```
# Avant
POST /mcp HTTP/1.1
Mcp-Session-Id: sess_abc123
Content-Type: application/json
{ "method": "tools/call", ... }

# Après
POST /mcp HTTP/1.1
Mcp-Method: tools/call
Mcp-Name: my-tool-server
Content-Type: application/json
{ "method": "tools/call", ... }
```

Un serveur MCP stateless peut maintenant tourner derrière **n'importe quel load balancer round-robin**. Pas de sticky sessions. Pas de session store Redis. Pas d'inspection du payload à la gateway.

### Nouveaux headers obligatoires

Tous les clients doivent désormais inclure :

- `Mcp-Method` — le nom de la méthode appelée (permet le routing gateway sans inspecter le body)
- `Mcp-Name` — l'identifiant du serveur MCP cible

Ces headers remplacent l'information qui était auparavant implicite dans la session.

### Cache côté client avec `ttlMs`

Les serveurs peuvent désormais indiquer dans leur réponse `tools/list` un champ `ttlMs` — la durée pendant laquelle un client peut mettre en cache la liste des outils sans la redemander. Cela réduit les appels répétés sur des workflows en boucle.

## Extensions comme citoyens de première classe

La spec 2026-07-28 formalise les **extensions MCP** :

### MCP Apps

Les **MCP Apps** permettent aux serveurs de rendre des interfaces utilisateur côté client. Un serveur peut maintenant exposer des UI React rendues dans le client (compatible Claude, Cursor, et tout client implémentant MCP Apps). Le cas d'usage est d'afficher des composants interactifs — un sélecteur de fichiers, un formulaire de configuration, un graphe — directement dans l'interface de l'agent.

### Tasks (sortie du core)

La gestion de tâches longues est **migrée hors du core** vers l'extension Tasks. Cela permet de garder le protocole de base léger tout en offrant une gestion d'état pour les opérations asynchrones aux serveurs qui en ont besoin.

## Authentification : OAuth 2.0 et OIDC renforcés

Six SEPs (Specification Enhancement Proposals) alignent l'auth MCP sur **OAuth 2.0** et **OpenID Connect** standards. Les implications :

- Les tokens MCP s'obtiennent via des flows OAuth standard (authorization code, client credentials)
- Les scopes MCP sont déclarables dans les discovery documents OIDC
- La vérification de token peut se déléguer à n'importe quel IdP compatible OIDC

Pour les entreprises qui déploient des serveurs MCP internes, cela simplifie l'intégration avec les IdP existants (Okta, Azure AD, Keycloak) sans développer d'auth custom.

## Politique de dépréciation formelle

La spec adopte pour la première fois un **lifecycle formel** pour ses fonctionnalités :

1. **Active** — fonctionnalité supportée
2. **Deprecated** — fonctionnalité maintenue 12 mois minimum avant suppression
3. **Removed** — fonctionnalité supprimée

Les trois premières dépréciations sont annoncées avec la spec 2026-07-28 : `roots`, `sampling` et `logging` passent en Deprecated. Ils restent fonctionnels pendant au moins 12 mois — jusqu'en juillet 2027 minimum.

## SDKs beta disponibles

Les beta des SDKs **Python, TypeScript, Go et C#** sont disponibles pour tester la nouvelle spec. Le cycle de validation (10 semaines, se terminant fin juillet) permet aux mainteneurs de détecter les incompatibilités avant la finalisation.

## Ce qui casse

La migration n'est pas transparente :

- **Serveurs MCP existants** : doivent supprimer la logique de session et accepter des requêtes stateless
- **Clients MCP** : doivent inclure les nouveaux headers `Mcp-Method` et `Mcp-Name`
- **Infrastructure** : les session stores et sticky sessions peuvent être d��sactivés (bonne nouvelle)

Les 12 mois de période de dépréciation pour `roots`, `sampling` et `logging` laissent une fen��tre confortable pour migrer le code existant.
