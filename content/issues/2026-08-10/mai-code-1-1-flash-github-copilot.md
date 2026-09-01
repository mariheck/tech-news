---
title: "MAI-Code-1.1-Flash : 73 % moins cher, la vision en plus"
excerpt: "Microsoft accélère avec un modèle de coding compact et moins coûteux"
summary: "Depuis le 11 août, MAI-Code-1.1-Flash est disponible dans GitHub Copilot. Le modèle ajoute la compréhension d'images, améliore de 22 % les scores Terminal-Bench 2.1 et réduit son prix de liste de 73 %. MAI-Code-1-Flash est retiré le 10 septembre."
date: 2026-08-10T00:00:00Z
reading_time: 4
sources:
  [
    { label: "GitHub Changelog – MAI-Code-1.1-Flash", url: "https://github.blog/changelog/2026-08-11-mai-code-1-1-flash-available-in-github-copilot/" },
    { label: "Microsoft AI – annonce", url: "https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/" },
    { label: "Neowin – contexte marché", url: "https://www.neowin.net/news/microsoft-releases-mai-code-11-flash-coding-model-to-better-compete-with-chinese-models/" },
    { label: "AI News Bank – retraite MAI-Code-1", url: "https://www.ainewsbank.com/posts/github-copilot-mai-code-1-1-flash-september-retirement" }
  ]
category: 'dev-ia'
---

# MAI-Code-1.1-Flash : 73 % moins cher, la vision en plus

Depuis le 11 août 2026, **MAI-Code-1.1-Flash** est en déploiement progressif dans toutes les surfaces de GitHub Copilot. Ce successeur direct de MAI-Code-1-Flash (sorti en juin) cumule trois améliorations concrètes : l'ajout de la vision native, des gains de performance sur le coding et une réduction de prix de 73 %.

## Ce qui change par rapport à MAI-Code-1-Flash

### Vision native

MAI-Code-1.1-Flash comprend les images directement, sans preprocessing. Dans le contexte de Copilot, cela ouvre des cas d'usage pratiques :

- Coller une capture d'écran d'une interface et demander une implémentation React correspondante.
- Partager un screenshot d'erreur de build et obtenir une analyse contextualisée.
- Décrire un layout visuel (mockup, wireframe) et obtenir du code CSS ou Tailwind.

La version 1.0 du modèle ne gérait pas du tout les images, ce qui limitait son périmètre aux requêtes textuelles.

### Performances en hausse

Sur Terminal-Bench 2.1, utilisé dans le Copilot CLI, MAI-Code-1.1-Flash progresse de **22 %** par rapport à MAI-Code-1-Flash. Sur les tâches .NET spécifiquement, le gain atteint **15 %**.

Par ailleurs, le modèle utilise **25 % moins de tokens** pour accomplir les mêmes tâches et génère les réponses **25 % plus vite** (mesure en tokens streamés). Pour les workflows de génération automatisée où la latence et le coût par requête comptent, ces chiffres sont significatifs.

### Tarif : -73 %

MAI-Code-1.1-Flash coûte environ 73 % moins cher que MAI-Code-1-Flash, selon Microsoft. La compagnie attribue ce gain aux « avancées en efficience de modèle et d'inférence » sans détailler les paramètres exacts. Il positionne MAI-Code-1.1-Flash comme le choix naturel pour les workflows à haut volume ou à faible budget token.

## Migration : MAI-Code-1-Flash s'arrête le 10 septembre

GitHub a annoncé la **retraite de MAI-Code-1-Flash le 10 septembre 2026** sur toutes les surfaces Copilot. Les utilisateurs qui ont configuré des workflows basés explicitement sur MAI-Code-1-Flash ont donc environ un mois pour migrer.

Dans la plupart des cas, la migration est transparente (même API, même interface) mais la présence de la vision dans 1.1-Flash peut modifier le comportement sur des requêtes qui incluent désormais des images par défaut.

## Positionnement dans l'écosystème Copilot

MAI-Code-1.1-Flash n'est pas le modèle le plus puissant du catalogue Copilot (Gemini 3.7 Flash et Claude Sonnet 5 y sont aussi disponibles), mais il est conçu pour un profil précis : tâches légères, faible latence, coût minimal. Pour les équipes Enterprise qui gèrent des volumes importants de complétion de code ou de génération de commentaires, c'est le candidat économique par excellence.

La même semaine, la mise à jour hebdomadaire Copilot (changelog du 13 août) mentionne aussi l'arrivée de **Kimi K3** en déploiement progressif — un modèle de Moonshot AI qui élargit encore la sélection disponible dans Copilot.
