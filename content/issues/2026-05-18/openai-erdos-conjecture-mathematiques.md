---
title: "L'IA d'OpenAI réfute une conjecture de 80 ans"
excerpt: "Un modèle de raisonnement d'OpenAI a réfuté la conjecture d'Erdős sur les distances unitaires."
summary: "Un modèle de raisonnement d'OpenAI a réfuté la conjecture d'Erdős sur les distances unitaires, ouverte depuis 1946. La preuve relie ce problème de géométrie à la théorie algébrique des nombres via le critère de Golod-Shafarevich."
date: 2026-05-18T00:00:00Z
reading_time: 5
sources:
  [
    { label: 'TechCrunch – OpenAI math', url: 'techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/' },
    { label: 'Scientific American – Erdős', url: 'scientificamerican.com/article/ai-just-solved-an-80-year-old-erdos-problem-and-mathematicians-are-amazed/' },
    { label: 'OpenAI – annonce officielle', url: 'openai.com/index/model-disproves-discrete-geometry-conjecture/' }
  ]
category: 'actus-ia'
---

# L'IA d'OpenAI réfute une conjecture de 80 ans

Le 20 mai 2026, OpenAI a annoncé qu'un de ses modèles de raisonnement internes avait produit une preuve mathématique originale **réfutant une conjecture centrale de la géométrie discrète**, restée ouverte depuis 1946. Il s'agit du problème des distances unitaires planaires, posé par le mathématicien Paul Erdős.

## Le problème d'Erdős

La question est simple à énoncer : si l'on place *n* points dans un plan, quel est le nombre maximum de paires de points séparés exactement par une distance de 1 ? Erdős l'a posée en 1946 et l'a classée parmi les problèmes les plus accessibles à formuler et les plus difficiles à résoudre en géométrie combinatoire. Pendant 80 ans, la conjecture dominante était que la **configuration en grille carrée** était optimale pour maximiser ce nombre de paires.

## La preuve du modèle

Le modèle d'OpenAI n'a pas prouvé la conjecture — il l'a **réfutée** en construisant une famille infinie d'exemples dont le nombre de paires de distance 1 croît polynomialement plus vite que ce que la conjecture autorisait.

La clé de la démonstration est inattendue : au lieu d'exploiter des astuces géométriques classiques, le modèle a connecté le problème à la **théorie algébrique des nombres**, en utilisant le critère de Golod-Shafarevich (un résultat de 1964 garantissant l'existence de tours de corps de classes infinis avec des propriétés particulières). La construction produit une famille de nuages de points dont le nombre de paires croît comme n^(1+δ) avec **δ ≥ 0,014** — une croissance polynomialement supérieure au plafond conjecturé.

Le même jour, Will Sawin, professeur à Princeton, a publié l'article *« An explicit lower bound for the unit distance problem »*, qui rend la valeur de δ explicite et indépendamment vérifiable.

## Pourquoi c'est significatif — et ce qu'il faut tempérer

La preuve a été produite par un **modèle de raisonnement généraliste**, et non par un système spécialisé pour les mathématiques. C'est ce qui rend le résultat remarquable : il suggère que des LLMs de raisonnement sont capables d'exploration mathématique de frontière en s'appuyant sur des connexions non anticipées entre disciplines.

Il faut néanmoins garder en tête le contexte : sept mois plus tôt, OpenAI avait revendiqué avoir « résolu » d'autres problèmes mathématiques, qui s'étaient avérés être des solutions existantes dans la littérature, ce qui avait suscité des critiques de Yann LeCun et Demis Hassabis notamment. Cette fois, le résultat est neuf et validé par un mathématicien indépendant — mais le rôle humain reste essentiel dans la validation, la mise en forme et l'interprétation de la preuve.
