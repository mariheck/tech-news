---
title: "React 19.3 : ViewTransition et Fragment refs stables"
excerpt: "Les animations de navigation deviennent natives dans React"
summary: "React 19.3, sorti le 9 septembre, stabilise ViewTransition pour animer les navigations via l'API View Transition du navigateur, les Fragment refs, le rendu browser-only et le support Trusted Types."
date: 2026-09-07T00:00:00Z
reading_time: 5
sources:
  [
    { label: "Blog officiel React", url: "https://react.dev/blog/2026/09/09/react-19-3" },
    { label: "GitHub Release 19.3.0", url: "https://github.com/react/react/releases/tag/v19.3.0" },
    { label: "DEV : 5 choses à savoir", url: "https://dev.to/divyesh5981/react-193-simplified-5-things-worth-knowing-1e2i" },
    { label: "Releasebot : React sept. 2026", url: "https://releasebot.io/updates/meta/react" }
  ]
category: 'frontend'
---

# React 19.3 : ViewTransition et Fragment refs stables

Le 9 septembre 2026, Meta a publié React 19.3.0 sur npm. Cette version mineure sort de l'expérimental plusieurs fonctionnalités annoncées au fil des derniers mois et améliore significativement l'outillage du React Compiler.

## ViewTransition : animations de navigation natives

La fonctionnalité phare de React 19.3 est le composant `<ViewTransition>`, **désormais stable**. Il était disponible en expérimental depuis quelques mois ; il entre maintenant dans l'API publique officielle.

`<ViewTransition>` s'appuie sur l'API View Transition du navigateur (désormais supportée par tous les moteurs majeurs) pour animer automatiquement les éléments lors d'une mise à jour React : entrée, sortie, déplacement ou redimensionnement. Le déclenchement se fait via les Transitions React (le `startTransition` existant) — les mises à jour urgentes ne déclenchent pas d'animation, seules les Transitions le font.

```jsx
import { useTransition, ViewTransition } from 'react';

const [isPending, startTransition] = useTransition();

startTransition(() => {
  setPage(newPage); // déclenche l'animation ViewTransition
});

// dans le rendu
<ViewTransition>
  <PageContent />
</ViewTransition>
```

Le composant supporte des animations personnalisées via `addTransitionType` et s'intègre à Suspense pour coordonner le chargement des fallbacks, images et polices.

## Fragment refs

Les **Fragment refs** sont également stables dans 19.3. Elles permettent d'obtenir un handle de type ref sur un groupe d'éléments, même en l'absence d'un élément wrapper unique. C'est une réponse directe au besoin courant de mesurer ou d'observer un ensemble d'éléments sans introduire de `<div>` parasite.

## Rendu browser-only avec `browser()`

La nouvelle API `browser()` permet de marquer explicitement un composant comme rendu uniquement côté navigateur. Cela résout des cas de désynchronisation SSR/hydratation pour du contenu intrinsèquement client (accès à `window`, API de permission, etc.) sans recourir à des patterns `useEffect`+`useState` manuels.

## Support Trusted Types et contexte en Server Components

React 19.3 ajoute le support des **Trusted Types**, l'API de sécurité navigateur qui permet de contrôler les injections de contenu dans le DOM. C'est un ajout qui facilite la conformité aux Content Security Policy strictes.

Le contexte React peut désormais être rendu directement dans les Server Components, ce qui simplifie la propagation de données entre couches serveur et client.

## Améliorations du React Compiler

React 19.3 améliore aussi le tooling autour du compiler :

- **ESLint v10** : le plugin `eslint-plugin-react-compiler` est désormais compatible ESLint v10
- **Meilleure détection `set-state-in-effect`** : le lint `react-hooks/set-state-in-effect` est affiné pour moins de faux positifs
- **Validation des refs améliorée** : erreurs plus précises sur les usages incorrects
- **Optimisation de compilation** : les fichiers ne contenant pas de code React sont désormais ignorés par le compiler, réduisant le temps de build

Pour les équipes utilisant le React Compiler (activé par défaut dans Next.js 16), cette version apporte des gains de performance build mesurables sur les projets de taille conséquente.
