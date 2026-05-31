---
title: 'Claude Code détecte 25 failles de sécurité en temps réel'
excerpt: 'Un plugin gratuit surveille SQL injection, XSS et secrets en direct'
summary: 'Anthropic publie un plugin de sécurité gratuit pour Claude Code. Actif en temps réel, il intercepte les modifications de fichiers et détecte 25 classes de vulnérabilités avant chaque commit. 157 000 téléchargements en 24 heures.'
date: 2026-05-25T00:00:00Z
reading_time: 3
sources:
  [
    {
      label: 'CyberSecurityNews',
      url: 'https://cybersecuritynews.com/free-security-plugin-for-claude-code/'
    },
    {
      label: 'Help Net Security',
      url: 'https://www.helpnetsecurity.com/2026/05/27/anthropic-claude-code-security-guidance-plugin/'
    },
    {
      label: 'SecurityWeek',
      url: 'https://www.securityweek.com/anthropic-releases-new-claude-sandbox-security-guidance-plugin/'
    },
    {
      label: 'AI Weekly',
      url: 'https://aiweekly.co/alerts/anthropic-launches-free-claude-code-security-plugin'
    },
    {
      label: 'Anthropic',
      url: 'https://www.anthropic.com/news/claude-code-security'
    }
  ]
category: 'dev-ia'
---

# Claude Code détecte 25 failles de sécurité en temps réel

Le 26 mai 2026, Anthropic a publié un plugin de sécurité gratuit pour Claude Code. Disponible pour tous les plans via la commande `/plugins`, il surveille les modifications de code en temps réel et intercepte les patterns dangereux avant qu'ils n'atteignent un commit.

## Ce que détecte le plugin

Le plugin utilise de la correspondance par expressions régulières pour identifier **25 classes de vulnérabilités à haut risque** :

- Injections SQL
- Injections de commandes système
- Cross-site scripting (XSS)
- Clés API et secrets codés en dur
- Déserialisation non sécurisée
- Validation d'entrées incorrecte

La liste couvre les catégories les plus répandues dans les rapports de sécurité de production, notamment les entrées du Top 10 OWASP.

## Comment il fonctionne

Contrairement aux scanners de sécurité classiques qui s'exécutent en fin de pipeline (avant un push ou dans la CI), ce plugin intervient **pendant la session de codage**, au moment exact où Claude modifie un fichier. Si un pattern risqué est détecté dans un diff, Claude génère un correctif inline dans la même session, sans besoin de basculer vers un outil externe.

Le flux est le suivant :

1. Claude propose une modification de fichier
2. Le plugin intercepte le diff
3. Si un pattern à risque est détecté, Claude propose une version corrigée
4. L'utilisateur valide ou rejette la suggestion

Aucun commit risqué ne passe si la correction est acceptée — le problème est traité à la source plutôt qu'en post-traitement.

## Résultats en première semaine

Le plugin a été téléchargé **157 000 fois dans les 24 premières heures** suivant sa publication. En test interne chez Anthropic, l'outil a réduit les **commentaires de sécurité en code review de 30 à 40 %** — un indicateur indirect mais significatif de la quantité de problèmes de sécurité que les agents IA introduisaient jusqu'ici sans détection précoce.

## Limites à garder en tête

L'approche regex est rapide et déterministe, mais elle a des angles morts : elle ne comprend pas le contexte métier, ne détecte pas les vulnérabilités logiques (autorisation incorrecte, race conditions, mauvaise gestion des sessions), et peut générer des faux positifs sur des patterns légitimes ressemblant à des patterns risqués.

Ce plugin est donc un **premier filtre utile**, pas un audit de sécurité complet. Il complète, mais ne remplace pas, une revue de code humaine sur les zones sensibles ni un SAST (Static Application Security Testing) approfondi.

## Installation

```
/plugins install security-guidance
```

Le plugin est disponible gratuitement sur tous les plans Claude Code (Pro, Max, Team, Enterprise). Comme les plugins Claude Code en général depuis la version 2.1.157 (29 mai), il peut également être chargé automatiquement en le plaçant dans le dossier `.claude/skills/` du projet.
