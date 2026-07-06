---
title: "Cascade est mort, vive Devin Local : vérifiez votre CI"
excerpt: "L'agent local de Windsurf est retiré le 1er juillet"
summary: "Cascade, l'agent local historique de Windsurf (devenu Devin Desktop), est mis en fin de vie le 1er juillet 2026 au profit de Devin Local, une réécriture Rust avec sous-agents parallèles à migrer manuellement en CI."
date: 2026-06-29T00:00:00Z
reading_time: 4
sources:
  [
    { label: "byteiota – Cascade EOL", url: "https://byteiota.com/cascade-eol-july-1-2026-devin-local-migration/" },
    { label: "andrew.ooo – migration guide", url: "https://andrew.ooo/answers/cascade-eol-july-1-2026-migrate-devin-local-cursor-claude-code/" },
    { label: "Web Developer", url: "https://webdeveloper.com/news/windsurf-devin-desktop-cascade-eol/" }
  ]
category: 'dev-ia'
---

# Cascade est mort, vive Devin Local : vérifiez votre CI

Cascade, l'agent local qui propulsait l'éditeur Windsurf, a été officiellement mis en fin de vie le 1er juillet 2026. Windsurf avait déjà été rebrandé Devin Desktop début juin par Cognition (l'éditeur de Devin, qui avait racheté Windsurf), mais Cascade continuait de tourner sous le capot jusqu'à cette date couperet.

## Ce qui remplace Cascade

Cascade laisse place à Devin Local, décrit par Cognition comme une réécriture complète en Rust, avec un système de sous-agents s'exécutant en parallèle plutôt que séquentiellement. Cognition revendique jusqu'à 30 % d'efficience en tokens supplémentaire par rapport à Cascade, une amélioration directement liée au changement d'architecture plutôt qu'à un simple changement de modèle sous-jacent.

## La bascule n'est pas totalement automatique

Pour l'usage interactif dans l'éditeur, la migration se fait sans action de la part de l'utilisateur : redémarrer l'éditeur après le 1er juillet suffit à basculer sur Devin Local, tous les réglages Windsurf étant portés automatiquement selon la FAQ de Cognition.

Le point d'attention concret concerne l'automatisation : tout pipeline CI, script ou règle de workflow qui invoque explicitement Cascade par son nom doit être repointé manuellement vers Devin Local avant la date de bascule, sous peine de voir ces automatisations échouer silencieusement. C'est le cas typique d'un breaking change qui ne touche pas l'usage quotidien dans l'IDE, mais qui casse une CI qui référence un binaire ou une commande nommée explicitement.

## Ce que ça change en pratique

Si votre équipe utilise Windsurf/Devin Desktop uniquement en usage interactif, il n'y a rien à faire de particulier au-delà de redémarrer l'éditeur. Si en revanche des scripts de CI, des hooks Git ou des tâches planifiées invoquent Cascade nommément — un cas fréquent pour les équipes qui avaient automatisé des revues de code ou des générations de tests via l'agent local — il faut auditer ces configurations avant le 1er juillet pour éviter une rupture silencieuse de pipeline.
