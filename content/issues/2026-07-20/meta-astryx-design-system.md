---
title: 'Astryx : le design system de Meta passe open source'
excerpt: "Meta open-source Astryx, 150+ composants React, agent-ready et MCP intégré."
summary: "Meta open-source Astryx, son design system interne utilisé dans 13 000 applications. 150+ composants React construits sur StyleX, un serveur MCP natif et une CLI pour les agents IA. En beta publique depuis fin juin, il devient un concurrent sérieux de Material UI et shadcn."
date: 2026-07-20T00:00:00Z
reading_time: 6
sources:
  [
    {
      label: 'MarkTechPost – Astryx agent-ready',
      url: 'https://www.marktechpost.com/2026/07/21/meta-open-sources-astryx-an-agent-ready-react-design-system-with-150-accessible-components-seven-themes-and-a-cli/'
    },
    {
      label: 'Astryx – blog officiel Meta',
      url: 'https://astryx.atmeta.com/blog/introducing-astryx'
    },
    {
      label: 'CMS Wire – Config code layers',
      url: 'https://www.cmswire.com/digital-experience/figma-launches-code-layers-motion-at-config-2026/'
    },
    {
      label: 'AIToolly – Astryx design system',
      url: 'https://aitoolly.com/ai-news/article/2026-07-05-meta-launches-astryx-a-fully-customizable-open-source-design-system-for-human-agent-collaboration'
    },
    {
      label: 'GitHub – facebook/astryx',
      url: 'https://github.com/facebook/astryx'
    }
  ]
category: 'design'
---

# Astryx : le design system de Meta passe open source

Meta a rendu public **Astryx**, le design system qui équipe l'ensemble de ses produits internes depuis 2018. Le code est disponible sur GitHub (`facebook/astryx`) et la beta publique est ouverte. Après huit ans de développement interne alimentant **plus de 13 000 applications** — parmi lesquelles Facebook, Instagram, Threads et les outils internes Meta —, Astryx rejoint l'espace open source avec une proposition distincte : être le premier design system nativement conçu pour les agents IA.

## Ce qu'Astryx apporte techniquement

### React + StyleX : compilation CSS sans runtime

Astryx est construit sur **React** et **StyleX**, le moteur CSS compile-time de Meta. StyleX génère du CSS atomique au moment du build, sans dépendance runtime. Cette approche garantit :

- **Zéro conflit de classe CSS** — chaque propriété génère une classe unique, les surcharges sont prévisibles
- **Dead code elimination** automatique — seules les classes utilisées sont incluses dans le bundle
- **Performance de rendu** améliorée — aucun calcul de style en JavaScript à l'exécution

Pour les équipes habituées à Tailwind, StyleX propose une alternative fortement typée (les tokens sont des objets TypeScript) avec les mêmes bénéfices de bundle size.

### 150+ composants, 7 thèmes

La librairie embarque plus de 150 composants couvrant les patterns UI les plus courants (navigation, formulaires, data display, overlays, feedback). Chaque composant est fourni avec :

- Documentation interactive avec playground
- Variantes de props documentées
- Props d'accessibilité exposées (ARIA roles, states)
- Tokens de thème surchargeables

Les **7 thèmes** livrés couvrent des polarités dark/light et des variantes de marque. Un thème est défini comme un objet de tokens TypeScript — modifier la couleur primaire ou le radius de base impacte l'ensemble du système de façon cohérente.

### MCP server intégré : les agents lisent votre design system

La différence la plus remarquée dans la communauté est l'**inclusion native d'un serveur MCP** (Model Context Protocol). Ce serveur expose les composants Astryx, leurs props, leurs variantes et leurs tokens de design à n'importe quel client MCP — Claude Code, Cursor, GitHub Copilot, ou un agent custom.

Concrètement : dans un IDE compatible MCP, un agent peut interroger le design system pour connaître les composants disponibles, leurs API, et les tokens applicables avant de générer du code. Plus de hallucination de noms de composants inexistants ou de props dépréciées.

```bash
# Installer et démarrer le serveur MCP
npx astryx mcp-server
# Le serveur expose les composants sur stdio ou SSE selon la config
```

### CLI pour le scaffolding et la génération

La **CLI Astryx** permet de scaffolder des composants, d'ajouter Astryx à un projet existant, et de générer des variantes à partir d'une description en langage naturel (en passant par le serveur MCP). Elle est compatible avec les setups `npx` sans installation globale.

```bash
npx astryx add Button
npx astryx add --theme dark
```

## Positionnement face aux alternatives

| | Astryx | shadcn/ui | Material UI | Radix |
| --- | --- | --- | --- | --- |
| Styling | StyleX (compile-time) | Tailwind | Emotion/SC | CSS custom |
| MCP natif | ✓ | ✗ | ✗ | ✗ |
| Production scale | 13 000 apps Meta | Communauté | Enterprise | Mid-range |
| Composants | 150+ | 50+ | 60+ | 30+ |
| Status | Beta publique | Stable | Stable | Stable |

La présence du serveur MCP est la seule différenciation structurelle d'Astryx face aux systèmes établis. Pour les équipes qui int��grent des agents dans leur workflow de développement UI, c'est un argument concret. Pour les projets sans outillage IA, le choix entre Astryx et shadcn/ui dépendra surtout de l'appétit pour StyleX.

## Accessibilité

Meta affirme que tous les composants Astryx respectent WCAG 2.2 AA par défaut. Les ARIA roles et states sont exposés comme props TypeScript obligatoires sur les composants interactifs. Les tests d'accessibilité sont inclus dans la suite de tests de chaque composant, ce qui permet de détecter les régressions en CI.

## Beta publique : qu'est-ce que cela signifie ?

Astryx est actuellement en **beta publique**. Meta avertit que les APIs de composants peuvent encore changer avant la version stable. Pour un projet de production, il est recommandé de verrouiller les versions et de suivre le changelog. La version stable est prévue pour Q4 2026.

## Ressources

- Site officiel et documentation : [astryx.atmeta.com](https://astryx.atmeta.com)
- GitHub : [github.com/facebook/astryx](https://github.com/facebook/astryx)
- Playground interactif : disponible sur le site officiel
