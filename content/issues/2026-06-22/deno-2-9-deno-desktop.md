---
title: "Deno 2.9 : du web au bureau avec deno desktop"
excerpt: "Un binaire natif depuis vos apps Next.js ou Astro"
summary: "Deno 2.9 (25 juin) lance deno desktop en expérimental : compilez n'importe quel projet Next.js, Astro, SvelteKit ou Nuxt en binaire natif multiplateforme sans Electron. Démarrage 2× plus rapide (34 ms → 17 ms), import de lockfiles npm/pnpm/yarn/Bun et imports CSS natifs."
date: 2026-06-22T00:00:00Z
reading_time: 6
sources:
  [
    { label: "Deno blog – v2.9", url: "https://deno.com/blog/v2.9" },
    { label: "GitHub – Deno 2.9.0 release", url: "https://github.com/denoland/deno/releases/tag/v2.9.0" },
    { label: "Deno desktop docs", url: "https://docs.deno.com/runtime/reference/cli/desktop/" }
  ]
category: 'frontend'
---

# Deno 2.9 : du web au bureau avec deno desktop

Deno 2.9, sorti le 25 juin 2026, est une release qui étend radicalement le périmètre du runtime : au-delà du serveur et du CLI, Deno peut désormais compiler vos projets web existants en applications de bureau natives. Pas d'Electron, pas de réécriture — un seul binaire qui embarque votre code, le runtime et un moteur de rendu.

## deno desktop : le concept

La commande `deno desktop` prend un projet web existant (un répertoire avec un `package.json` ou un `deno.json`) et le compile en un exécutable autonome. Le tooling détecte automatiquement le framework utilisé parmi une liste croissante : **Next.js, Astro, Fresh, Remix, Nuxt, SvelteKit, SolidStart, TanStack Start et Vite SSR**. Aucune modification de code n'est nécessaire pour les projets qui s'en tiennent aux APIs standard.

Le résultat est distribué dans le format natif de chaque plateforme :
- **macOS** : `.app` et `.dmg`
- **Windows** : `.exe` et `.msi`
- **Linux** : `.AppImage`, `.deb` et `.rpm`

```bash
# Compiler un projet Next.js en app de bureau macOS
deno desktop build --platform macos --out ./dist

# Lancer en mode développement avec rechargement à chaud
deno desktop dev
```

Deno marque `deno desktop` comme **expérimental** dans cette version, avec une surface d'API qui se stabilise et certaines fonctionnalités spécifiques à des plateformes encore en cours d'atterrissage.

## Import des lockfiles existants

Deno 2.9 résout l'un des principaux points de friction à l'adoption : la compatibilité avec les lockfiles des autres package managers. `deno install` lit désormais directement `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock` et `bun.lock` et génère un `deno.lock` à partir des versions et des hashes d'intégrité résolus.

Le support des workspaces est inclus : Deno comprend le champ `workspaces` des `package.json` npm/yarn/Bun, ce qui rend les monorepos immédiatement utilisables sans reconfiguration.

En pratique, migrer un projet existant vers Deno se réduit à :
```bash
deno install  # lit le lockfile npm/pnpm/yarn/Bun existant et génère deno.lock
deno run dev  # ou n'importe quel script package.json
```

## Imports CSS natifs

Deno 2.9 prend en charge les imports CSS comme `CSSStyleSheet` constructibles, via la syntaxe d'import avec attribut :

```ts
import styles from './button.css' with { type: 'css' }
document.adoptedStyleSheets.push(styles)
```

La feature est activée avec le flag `--unstable-raw-imports`. L'intérêt : le même code de composant fonctionnel sous Deno et dans le navigateur, sans étape de bundling. C'est particulièrement utile pour tester des composants web en environnement Deno sans avoir à mocker les imports CSS.

## Performance

Deno 2.9 apporte des gains mesurés sur les scénarios de démarrage et de charge :

- **2× plus rapide au démarrage à froid** : 34 ms → 17 ms
- **3× moins de mémoire sous charge**
- Amélioration du débit HTTP brut

## Test runner : snapshot, paramétrage et sharding

La release améliore aussi sensiblement le test runner intégré, avec des fonctionnalités qui rapprochent Deno de ce que Vitest ou Jest proposent :

- **Snapshot testing** — `Deno.test.snapshot()` pour capturer et comparer des valeurs complexes
- **Tests paramétrés** — `Deno.test.each()` pour éviter la duplication
- **Sélection sensible aux changements** — n'exécute que les tests affectés par les fichiers modifiés
- **Couverture seuils** — fail fast si le coverage tombe sous un seuil configuré
- **CI sharding** — répartir les tests sur plusieurs runners en parallèle
