---
title: "Mechanical Turk ferme : l'IA tue ce qu'elle a nourri"
excerpt: "Amazon clôt après 21 ans le service qui a entraîné les modèles d'IA"
summary: "Amazon ferme définitivement Mechanical Turk le 30 septembre 2026. La plateforme de micro-tâches humaines, créée en 2005, a massivement contribué à l'entraînement des LLMs — ceux-là mêmes qui rendent aujourd'hui son modèle économique obsolète."
date: 2026-08-24T00:00:00Z
reading_time: 4
sources:
  [
    { label: "CNBC", url: "https://www.cnbc.com/2026/08/25/amazon-service-that-jeff-bezos-called-artificial-ai-is-shutting-down.html" }
  ]
category: 'actus-ia'
---

# Mechanical Turk ferme : l'IA tue ce qu'elle a nourri

Le 25 août 2026, Amazon a confirmé la fermeture définitive d'**AWS Mechanical Turk** (AMT) au 30 septembre 2026. Les nouvelles inscriptions avaient été fermées le 30 juillet. Vingt et un ans après son lancement, la plateforme qui a joué un rôle central dans la construction de l'IA moderne s'éteint — emportée par les mêmes systèmes qu'elle a contribué à entraîner.

## Une ironie historique

Jeff Bezos, en lançant Mechanical Turk en 2005, l'avait décrit comme de **l'"artificial artificial intelligence"** — de l'intelligence humaine déguisée en automatisation pour accomplir des tâches que les ordinateurs ne pouvaient pas faire. Le nom lui-même fait référence au célèbre automate joueur d'échecs du XVIIIe siècle, qui cachait un joueur humain à l'intérieur.

L'ironie est totale : pendant deux décennies, des centaines de milliers de "Turkers" du monde entier ont cliqué, annoté, transcrit, classifié et labellisé des millions de données. Ces datasets — images annotées, textes corrigés, sentiments étiquetés — ont directement alimenté l'entraînement des modèles de machine learning, dont les LLMs.

Aujourd'hui, ces mêmes LLMs accomplissent automatiquement la quasi-totalité des tâches pour lesquelles Mechanical Turk était utilisé : annotation d'images, modération de contenu, transcription audio, classification de textes. Le marché s'est évaporé.

## L'impact sur l'écosystème de la recherche

Mechanical Turk n'était pas seulement un outil commercial : c'était l'infrastructure de recherche en sciences cognitives et en NLP la plus utilisée au monde. Des milliers d'études académiques ont été menées via AMT pour recruter des sujets humains rapidement et à faible coût.

La fermeture crée un vide que la communauté cherche à combler. Prolific, Appen et Scale AI existent, mais aucun ne réplique exactement la combinaison de coût, de volume et d'accessibilité d'AMT pour la recherche académique.

## Ce que ça révèle sur les tendances de l'IA

La mort de Mechanical Turk est un signal fort sur la maturité de l'automatisation IA. Les tâches "simples pour un humain, difficiles pour une machine" qui constituaient le cœur d'AMT ont été absorbées dans les capacités de base des modèles multimodaux actuels.

Pour les développeurs qui intégraient AMT dans leurs pipelines (collecte de données d'entraînement, validation humaine de sorties IA), l'alternative principale est désormais d'utiliser **RLHF via des plateformes spécialisées** (Scale AI, Labelbox) ou, de plus en plus, de remplacer le jugement humain par des **LLM-judges** — c'est-à-dire des LLMs évaluant d'autres LLMs.

Ce dernier point mérite réflexion : à force d'utiliser des modèles pour valider d'autres modèles, on ferme la boucle de feedback. Les données synthétiques et les évaluations automatisées réduisent la diversité des signaux d'entraînement. La question de la qualité des prochaines générations de modèles entraînés sans données humaines fraîches reste ouverte.

## Une époque qui se termine

Au-delà de l'analyse technique, la fermeture d'AMT marque symboliquement la fin d'une ère. Celle où l'IA avait besoin d'armées de travailleurs humains pour progresser. Cette transition a des implications économiques réelles pour les "Turkers" qui dépendaient de ces revenus — une population souvent invisibilisée dans les récits glorieux de l'IA.

L'IA a mangé les données, puis a mangé les emplois de ceux qui les produisaient.
