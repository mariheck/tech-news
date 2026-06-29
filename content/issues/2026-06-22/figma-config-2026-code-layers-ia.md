---
title: "Figma Config 2026 : Code Layers et l'IA générative"
excerpt: "Le design s'exécute, le code se dessine — Config 2026"
summary: "Config 2026 (23-25 juin, Moscone Center SF) déploie Code Layers (design → code live éditable côte à côte), les shaders via l'agent IA, les plugins génératifs créés par prompt et l'intégration Weave. L'agent Figma ajoute la recherche web temps réel."
date: 2026-06-22T00:00:00Z
reading_time: 6
sources:
  [
    { label: "Figma blog – Config 2026 recap", url: "https://www.figma.com/blog/config-2026-recap/" },
    { label: "Figma – What's new Config 2026", url: "https://help.figma.com/hc/en-us/articles/39582753756695-What-s-new-from-Config-2026" },
    { label: "Snappr – Figma Code Layers", url: "https://www.snappr.com/news/story/figma-config-2026" },
    { label: "explainx.ai – Config 2026 recap", url: "https://explainx.ai/blog/figma-config-2026-complete-recap-motion-code-shaders-ai-2026" }
  ]
category: 'dev-ia'
---

# Figma Config 2026 : Code Layers et l'IA générative

La conférence Config 2026 s'est tenue du 23 au 25 juin à Moscone Center (San Francisco) devant 8 000 participants. La keynote du chief product officer Yuhki Yamashita a résumé le cap de l'entreprise en une phrase : *« Code is material for design. »* Six fonctionnalités majeures ont été annoncées, dont plusieurs entrent en beta progressive dès le 24 juin. Cet article couvre le volet IA et code ; le volet animation est traité séparément (voir Figma Motion).

## Code Layers : du design au code en direct

**Code Layers** est sans doute l'annonce la plus structurante pour le workflow design-to-code. Le principe : convertir n'importe quelle couche de design en code live directement dans Figma, puis éditer le code et le design côte à côte dans le même fichier. Toute modification du code se répercute instantanément sur le design, et inversement.

L'objectif affiché est de faire du code une *matière* de design au même titre que les formes, les couleurs ou les composants — et non plus un artefact produit après coup. Le déploiement de Code Layers est prévu pour **juillet 2026**.

Ce que ça change concrètement : un designer peut voir comment une décision de layout se traduit en CSS Grid ou en Flexbox en temps réel, et un développeur peut affiner le composant directement dans l'environnement de design sans switcher d'outil.

## Shaders via l'agent IA

Figma introduit la génération de **shaders** par prompt : dans l'interface de l'agent Figma, décrivez un effet visuel (gradient animé, bruit de Perlin, effet de verre) et l'agent génère le code GLSL correspondant, appliqué directement sur vos couches.

Cette feature est en **open beta sur les plans payants avec Full seat** depuis le 24 juin. Elle s'adresse d'abord aux cas d'usage d'identité visuelle et de motion branding, où les équipes ont besoin d'effets non photoréalistes mais techniquement non triviaux.

## Plugins génératifs

Config 2026 annonce la possibilité de **créer des plugins Figma par prompt**. Au lieu d'écrire du code JavaScript pour étendre Figma, vous décrivez en langage naturel ce que le plugin doit faire, et l'agent génère le plugin complet. Ces plugins génératifs sont distribués via le marketplace Figma Community.

Déploiement progressif depuis le **24 juin 2026**.

## Weave Tools sur le canvas principal

Les **Weave Tools** — des outils de flux de travail collaboratif introduits en 2025 — arrivent sur le canvas principal de Figma pour les plans Professional et au-dessus avec Full seat. Auparavant limités à FigJam, ils permettent de faire circuler des données structurées (tableaux, listes, assets) directement entre des zones du canvas.

## Agent Figma amélioré : recherche web et skills

L'agent Figma embarqué reçoit deux améliorations significatives :

- **Recherche web en temps réel** : l'agent peut maintenant effectuer des recherches web depuis Figma pour trouver des références visuelles, des bonnes pratiques UX ou des données de contenu réel, sans quitter le fichier.
- **Skills et connectors** : l'agent supporte désormais des skills personnalisables et des connectors vers des services externes, ce qui ouvre la porte à des intégrations CMS, DAM ou analytics directement depuis le canvas.

Les chats de l'agent sont également visibles par toute l'équipe, ce qui facilite la transparence sur les décisions de design assistées par IA.

## Une bascule vers le design exécutable

Config 2026 marque un tournant dans la philosophie de Figma : le fichier de design n'est plus seulement une spécification — il devient progressivement un artefact exécutable. Code Layers en est la démonstration la plus directe, mais les shaders et les plugins génératifs vont dans le même sens : réduire la distance entre l'intention créative et son implémentation technique.
