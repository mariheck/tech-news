---
title: "Wise Design : retour d'expérience sur un système multi-marques"
excerpt: "Comment concevoir des tokens qui survivent à plusieurs marques"
summary: "Ness Grixti partage sur Smashing Magazine (11 août) comment Wise a refondu son design system pour supporter plusieurs marques en parallèle. Un cas concret sur les design tokens, les composants partagés et la gouvernance à l'échelle."
date: 2026-08-10T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Smashing Magazine – Wise multi-brand", url: "https://www.smashingmagazine.com/" },
    { label: "Ness Grixti – case study", url: "https://nessgrixti.com/portfolio/wise-multi-brand/" }
  ]
category: 'design'
---

# Wise Design : retour d'expérience sur un système multi-marques

Le 11 août 2026, Smashing Magazine a publié le retour d'expérience de Ness Grixti sur la refonte du design system de **Wise** pour le rendre opérationnel sur plusieurs marques simultanément. C'est l'un des problèmes les plus épineux en design engineering d'entreprise : comment un même composant `<Button>` peut-il exprimer l'identité de Wise et celle d'une marque partenaire sans dupliquer la codebase ?

## Le problème : une seule base, plusieurs identités

Wise (anciennement TransferWise) opère dans plusieurs segments et zones géographiques avec des exigences de marque distinctes. Maintenir des design systems séparés multiplie les coûts de maintenance, crée des divergences de comportement et freine les équipes qui développent des features communes.

La solution classique — un thème global — atteint rapidement ses limites dès que les différences de marque dépassent les couleurs. Les espacements, la typographie, les comportements d'animation et même la forme des composants peuvent varier. Un simple token de couleur ne suffit pas.

## L'architecture mise en place

### Trois niveaux de tokens

Wise a structuré ses design tokens en trois couches :

1. **Primitifs** — valeurs brutes : `color.blue.500`, `spacing.4`, `font.size.base`. Ces tokens n'ont pas de sémantique propre, ils forment le vocabulaire de base commun à toutes les marques.

2. **Sémantiques globaux** — sens partagé entre les marques : `color.action.default` (qui pointe vers un primitif différent selon la marque), `spacing.component.padding`. Ce niveau exprime *ce que font* les valeurs, pas *quelles valeurs* elles sont.

3. **Tokens de marque** — surcharges par marque qui remappent les sémantiques globaux vers des primitifs locaux. Une marque peut pointer `color.action.default` vers `color.blue.500` ; une autre vers `color.green.700`.

Ce modèle à trois niveaux n'est pas nouveau (il a été popularisé par le Design Tokens Community Group et Nathan Curtis), mais sa mise en œuvre à l'échelle d'un produit financier réel, avec des contraintes d'accessibilité WCAG AA strictes, apporte des nuances concrètes.

### Les pièges à éviter

Ness Grixti documente plusieurs erreurs communes lors de la mise en place :

**Trop de tokens sémantiques.** La tentation est de créer un token pour chaque usage imaginable : `color.button.primary.hover.text`. Le résultat est un système ingérable. Wise a défini un périmètre strict : les tokens sémantiques couvrent les cas d'usage *récurrents et multi-composants*. Les exceptions restent dans les composants.

**Composants trop rigides.** Les composants qui encodent la logique de marque dans leur implémentation (un `if brand === 'wise'` dans le code) créent des couplages impossibles à maintenir. La règle de Wise : les composants consomment uniquement des tokens sémantiques. Ils ne savent pas dans quelle marque ils tournent.

**Gouvernance tardive.** La question de "qui peut ajouter un token ?" a été posée trop tard dans le projet, créant un prolifération incontrôlée. La solution : un processus de proposal formalisé, avec un owner par couche de tokens.

### Figma et le pipeline de tokens

La chaîne Token Studio (Figma) → transformation JSON → variables CSS / Tailwind a été retenue. Chaque marque dispose d'une bibliothèque Figma séparée qui surcharge les tokens globaux. Les composants partagés restent dans une bibliothèque centrale et consomment les variables via `var(--color-action-default)`.

Le défi principal a été la synchronisation : quand un designer modifie un token dans Figma, le pipeline de transformation doit être déclenché, les changements validés (contrast check automatique), puis propagés aux bibliothèques de marque. Ce pipeline est entièrement automatisé chez Wise.

## Ce que ce cas enseigne aux équipes qui grandissent

Pour une équipe frontend qui construit un design system et anticipe une expansion multi-marques ou multi-produits, les leçons de Wise sont directement applicables :

- **Commencer par les sémantiques, pas par les primitifs.** La question "qu'est-ce que ce token signifie ?" est plus importante que "quelle valeur a-t-il ?".
- **Les composants n'ont pas de conscience de la marque.** Toute logique de marque vit dans les tokens, jamais dans les composants.
- **Gouvernance dès le départ.** Le design token system est un contrat entre design et développement. Le formaliser tôt évite des refactorisations coûteuses.
