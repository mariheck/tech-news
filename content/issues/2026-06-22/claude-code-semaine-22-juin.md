---
title: "Claude Code : /rewind, MCP login et −37 % CPU"
excerpt: "Une semaine dense de mises à jour pour Claude Code"
summary: "La semaine du 22 juin apporte /rewind pour reprendre une conversation avant /clear, claude mcp login/logout pour l'auth CLI, −37 % de CPU en streaming, le blocage des credentials en sandbox, les restrictions de modèles par organisation et de nombreux correctifs IDE."
date: 2026-06-22T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Claude Code changelog", url: "https://code.claude.com/docs/en/changelog" },
    { label: "Claude Code – release notes", url: "https://support.claude.com/en/articles/12138966-release-notes" }
  ]
category: 'dev-ia'
---

# Claude Code : /rewind, MCP login et −37 % CPU

La semaine du 22 juin 2026 a été particulièrement active du côté de Claude Code, avec plusieurs mises à jour qui touchent à la fois l'ergonomie, la sécurité et les performances. Voici un tour d'horizon des changements les plus significatifs.

## /rewind : reprendre avant /clear

La nouvelle commande **`/rewind`** répond à un cas d'usage fréquent : revenir à un état antérieur de la conversation sans perdre tout le contexte. Concrètement, `/rewind` permet de reprendre une session au point qui précédait le dernier `/clear`, ce qui évite de devoir repréciser tout le contexte en cas de mauvaise manipulation ou de virage dans la direction du développement.

C'est une commande simple mais dont l'absence était régulièrement citée comme source de friction dans les sessions longues.

## claude mcp login/logout : authentification CLI sans menu interactif

Deux nouvelles commandes pour gérer l'authentification des serveurs MCP sans passer par le menu interactif `/mcp` :

```bash
claude mcp login <server-name>   # ouvre le flux OAuth pour ce serveur
claude mcp logout <server-name>  # révoque l'auth
```

L'option `--no-browser` redirige le flux vers `stdin`, ce qui rend l'authentification MCP utilisable en SSH ou dans des environnements sans interface graphique — un cas d'usage courant pour les agents qui tournent sur des serveurs distants.

## −37 % de CPU en streaming

Une optimisation significative du moteur de rendu réduit l'utilisation CPU d'environ **37 % pendant le streaming de réponses**. L'effet est perceptible sur les longues générations de code ou les réponses très verboses : l'interface reste plus réactive et les autres processus du poste de développement sont moins pénalisés.

## Sécurité : blocage des credentials en sandbox

Claude Code ajoute un mécanisme de **blocage des credentials dans les environnements sandbox** : les clés API, tokens et secrets présents dans l'environnement ne sont pas transmis aux outils qui s'exécutent en mode isolé. C'est une protection importante pour les équipes qui utilisent des agents autonomes dans des pipelines CI/CD où les credentials de production pourraient être exposés.

## Restrictions de modèles par organisation

Les administrateurs d'organisations peuvent désormais définir des **restrictions sur les modèles disponibles** pour les membres de leur org. Par exemple, une organisation peut interdire l'usage de modèles non approuvés ou limiter l'accès aux modèles les plus coûteux à certains rôles. Cette feature répond aux besoins de gouvernance des équipes enterprise.

## Comportement des commandes Bash : réponse automatique

Un changement de comportement à noter : les commandes Bash exécutées dans Claude Code déclenchent désormais automatiquement une réponse de Claude sur leur output. Le comportement précédent (le résultat était ajouté au contexte sans réponse automatique) peut être restauré en ajoutant dans `settings.json` :

```json
{ "respondToBashCommands": false }
```

## Correctifs IDE et stabilité

La semaine a également apporté des correctifs ciblés :

- **JetBrains** : résolution du flickering dans les terminaux IntelliJ, PyCharm et WebStorm
- **Kitty keyboard protocol** : correction des caractères Shift+non-ASCII abandonnés (ex : Shift+ä → Ä) dans WezTerm, Ghostty et kitty
- **Wake from sleep** : correction des requêtes en streaming qui échouaient avec une erreur JSON après le réveil de la machine
- **Voice mode** : correction du `/login` requis à tort après le toggle de `/voice`

## Contexte : une semaine particulière pour les abonnements

Cette semaine de mises à jour de Claude Code intervient au moment où Anthropic retirait Fable 5 des plans Pro, Max et Team (voir l'article dédié). Les utilisateurs de ces plans n'ont plus accès à Fable 5 sans crédits supplémentaires, ce qui rend les optimisations de performance comme la réduction CPU d'autant plus pertinentes pour la fluidité de l'expérience au quotidien.
