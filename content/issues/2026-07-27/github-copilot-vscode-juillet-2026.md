---
title: "Copilot dans VS Code : vision GA, agents et git worktrees"
excerpt: "Le Copilot Vision passe en GA et les sessions agents gagnent les git worktrees."
summary: "La mise à jour Copilot VS Code de juillet 2026 (30 juillet) passe Copilot Vision en GA, redesigne la fenêtre Agents pour mieux gérer plusieurs sessions, ajoute le support des git worktrees, et permet d'exécuter des commandes terminal directement depuis le chat via le préfixe !."
date: 2026-07-27T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – Copilot VS Code juillet", url: "https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases/" },
    { label: "VS Blog – Visual Studio July agent", url: "https://devblogs.microsoft.com/visualstudio/visual-studio-july-update-meet-the-new-agent-powered-by-copilot-sdk/" },
    { label: "GitHub Changelog – Copilot Visual Studio", url: "https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-july-update/" }
  ]
category: 'dev-ia'
---

# Copilot dans VS Code : vision GA, agents et git worktrees

Le **30 juillet 2026**, GitHub a publié la mise à jour mensuelle de Copilot pour VS Code (versions v1.127 à v1.131). Cette mouture apporte plusieurs changements notables pour les workflows agentiques et la productivité quotidienne.

## Copilot Vision passe en GA

Après plusieurs mois de preview, **Copilot Vision est désormais disponible en général availability**. La fonctionnalité permet d'ajouter des images directement dans le chat Copilot : fichiers collés, glissés-déposés, ou ajoutés via le menu contextuel.

Cas d'usage pratiques pour les développeurs frontend :
- Coller une maquette et demander à Copilot d'en générer le HTML/CSS
- Partager une capture d'écran d'un bug visuel et demander un diagnostic
- Ajouter un schéma d'architecture et demander la génération du code correspondant

## Fenêtre Agents redessinée

La **fenêtre Agents** (public preview) a été significativement redessinée :

**Panneau éditeur intégré** : les fichiers et diffs s'ouvrent maintenant dans un panneau latéral à l'intérieur de la fenêtre Agents, avec une barre d'onglets partagée. Plus besoin de basculer entre la fenêtre Agents et l'éditeur principal.

**Revue de diff optimisée** : les additions et suppressions par fichier sont visibles en compteurs directement dans la liste. Une vue diff compacte et le basculement inline/côte-à-côte sont disponibles sans quitter la session.

**Navigation clavier complète** : créer, passer d'une session à l'autre, rouvrir et fermer des sessions sans toucher la souris. Les raccourcis sont scopés à la fenêtre Agents.

## Git worktrees pour les sessions agents

Copilot, Claude et Codex peuvent maintenant démarrer des sessions dans un **git worktree** — une copie isolée du dépôt qui partage l'historique Git mais a son propre répertoire de travail et sa propre branche.

```bash
# Copilot démarre automatiquement dans un worktree dédié
# si vous lancez la session depuis un worktree existant
```

L'intérêt : plusieurs sessions agents peuvent travailler en parallèle sur des branches différentes du même dépôt, sans interférences entre les fichiers de travail. Utile pour les revues d'architecture qui nécessitent de tester des approches multiples simultanément.

## Commandes terminal depuis le chat

En préfixant un message avec `!`, son contenu est exécuté comme une commande terminal dans la fenêtre Agents :

```
! npm run test -- --run
! git diff HEAD~1
! npx tsc --noEmit
```

Cette intégration permet de boucler rapidement sans changer de contexte : l'agent génère du code, vous vérifiez avec `! npm test`, et continuez la conversation avec les résultats.

## BYOK models dans la fenêtre Agents

Les modèles **BYOK** (Bring Your Own Key) — modèles tiers configurés avec votre propre clé API — sont maintenant utilisables dans la fenêtre Agents. Jusqu'ici réservés au chat classique, ils s'intègrent maintenant dans les sessions agentiques avec accès aux outils.

## Copilot dans Visual Studio

Sur Visual Studio (pas VS Code), la même semaine apporte un **nouvel agent intégré** construit sur le Copilot SDK. L'agent s'intègre dans l'IDE de façon native : il lit le contexte de la solution ouverte, comprend les types et projets, et peut modifier plusieurs fichiers de la solution en une seule session.
