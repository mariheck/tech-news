---
title: "VS Code 1.145 programme Copilot en cron"
excerpt: "Des automatisations locales planifiées en expression cron"
summary: "VS Code 1.145 ajoute la planification en expression cron pour les automatisations locales de GitHub Copilot, après l'arrivée des automatisations cloud exécutables même ordinateur éteint."
date: 2026-11-02T00:00:00Z
reading_time: 2
sources:
  [{ label: "en.ittrip.xyz", url: "https://en.ittrip.xyz/?p=64057" }]
category: 'dev-ia'
---

# VS Code 1.145 programme Copilot en cron

Microsoft a publié **VS Code 1.145** le 4 novembre 2026, qui étend les automatisations de GitHub Copilot avec la prise en charge d'expressions **cron** personnalisées pour les tâches locales.

## Une planification plus fine que les presets

Jusqu'ici limitées à des fréquences prédéfinies (horaire, quotidienne, hebdomadaire), les automatisations locales de Copilot acceptent désormais une expression cron à cinq champs, par exemple `15 9 * * MON-FRI` pour un point quotidien à 9h15 en semaine. Cette planification fine reste réservée aux automatisations **locales** ; les automatisations cloud, qui peuvent elles s'exécuter même ordinateur éteint, continuent de fonctionner avec les fréquences prédéfinies existantes.

## Pourquoi ça compte

Pour un développeur qui veut qu'un agent Copilot génère un résumé ou lance une vérification à heure fixe avant une réunion ou un stand-up, pouvoir définir précisément l'horaire plutôt que choisir parmi des créneaux figés rend l'automatisation plus utilisable au quotidien.
