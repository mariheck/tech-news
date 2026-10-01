---
title: "Plugin4Shell : faille critique dans 4 agents IA"
excerpt: "Claude Code, Codex, Copilot et Gemini CLI touchés"
summary: "Plugin4Shell contourne le SHA pinning des plugins et permet une exécution de code à distance sans interaction. Claude Code et Codex sont corrigés, Copilot ne l'est pas et Google déprécie Gemini CLI plutôt que de le patcher."
date: 2026-09-14T00:00:00Z
reading_time: 5
sources:
  [
    { label: "The Hacker News", url: "https://thehackernews.com/2026/09/plugin4shell-lets-repository-owners.html" },
    { label: "Help Net Security", url: "https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/" },
    { label: "Cybersecurity News", url: "https://cybersecuritynews.com/plugin4shell-zero-click-rce/" },
    { label: "Forkast", url: "https://forkast.news/plugin4shell-bypasses-sha-pinning-across-all-four-major-ai-coding-agents/" }
  ]
category: 'dev-ia'
---

# Plugin4Shell : faille critique dans 4 agents IA

Le 17 septembre 2026, les chercheurs en sécurité d'AIR Security ont divulgué **Plugin4Shell**, une vulnérabilité critique d'exécution de code à distance sans interaction utilisateur ("zero-click RCE"), touchant simultanément quatre agents de code IA parmi les plus utilisés : Claude Code, OpenAI Codex, GitHub Copilot et Google Gemini CLI.

## Le mécanisme : un SHA pinning qui ne vérifie rien

Les marketplaces de plugins de ces agents verrouillent chaque extension à une version précise en épinglant le hash de commit du code source ("SHA pinning") — la méthode standard pour garantir qu'un plugin installé correspond bien à la version revue et approuvée.

Le problème : les agents concernés vérifient qu'ils ont bien récupéré un objet portant le hash attendu, mais ne vérifient jamais que le contenu réellement livré correspond à ce hash. Sur un hébergeur Git qui autorise la création d'une branche dont le nom ressemble à un hash de commit, le propriétaire du dépôt d'un plugin peut faire pointer ce nom vers un tout autre code. L'agent installe alors ce code différent tout en rapportant, à tort, qu'il tourne sur la version verrouillée et auditée.

Un propriétaire de dépôt de plugin malveillant — ou un compte compromis — peut ainsi substituer silencieusement du code arbitraire à celui qu'un développeur pensait avoir figé, sans qu'aucune action de sa part ne soit nécessaire pour déclencher l'exécution.

## Un correctif à deux vitesses

La réponse des quatre éditeurs concernés diverge fortement :

- **Claude Code** : corrigé par Anthropic dans la version 2.1.179.
- **OpenAI Codex** : corrigé dans la version 0.146.0.
- **GitHub Copilot** : Microsoft n'avait publié aucun correctif au moment de la divulgation.
- **Google Gemini CLI** : Google a choisi de ne pas corriger l'outil et de le déprécier purement et simplement, recommandant aux utilisateurs de migrer vers Antigravity.

## Pourquoi ça compte

Plugin4Shell est présenté par plusieurs médias spécialisés comme la première faille de type "supply chain" à toucher, à cette échelle, l'écosystème émergent des marketplaces de plugins pour agents de code IA. Le SHA pinning est justement le mécanisme sur lequel s'appuient de nombreuses équipes pour auditer une fois un plugin puis lui faire confiance durablement — le voir contourné aussi simplement remet en question la solidité de cette hypothèse à travers tout le secteur.

Pour les équipes utilisant l'un de ces quatre agents avec des plugins tiers, la première action reste de vérifier la version installée et d'appliquer sans délai le correctif disponible, ou de retirer temporairement les plugins non indispensables tant qu'aucun correctif n'existe.
