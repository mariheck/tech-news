# tech.news

A weekly, AI-curated digest of what matters in frontend, design engineering, web design, and applied AI. Each article recaps one or more external sources and surfaces the originals in a numbered sidebar — the recap is convenience, the link is the truth.

UI copy is French (`lang="fr"`); code, comments, and docs are English.

## Stack

- **Next.js 16** (App Router) — `next.config.ts` has `reactCompiler: true`
- **React 19** with the React Compiler
- **TypeScript 5** in strict mode
- **Tailwind v4** via `@tailwindcss/postcss` — CSS-first config in `app/globals.css`
- **Vitest 4** + `jsdom` + `@testing-library/react`
- **ESLint 9** flat config (`eslint-config-next`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                 | What it does                              |
| ----------------------- | ----------------------------------------- |
| `npm run dev`           | Dev server on port 3000                   |
| `npm run build`         | Production build (also runs the TS check) |
| `npm run start`         | Serve the production build                |
| `npm run lint`          | ESLint                                    |
| `npm run test`          | Vitest in watch mode                      |
| `npm run test -- --run` | Single Vitest pass (CI-style)             |

## Project layout

- `app/` — App Router routes. Server Components by default; `'use client'` opts into client behavior.
- `__tests__/` — Vitest specs at the repo root, mirroring the source path (e.g. `app/page.tsx` → `__tests__/app/page.test.tsx`). Do not colocate tests next to source.
- `PRODUCT.md` — register, users, purpose, anti-references, design principles. Read before scoping a feature.
- `DESIGN.md` — visual system: tokens, typography, elevation, components, do's and don'ts.
- `.impeccable/design.json` — sidecar for impeccable's live panel (tonal ramps, motion tokens, snippets).
- `CLAUDE.md` — conventions, commands, and workflow guidance for Claude Code.

## Conventions

- Arrow functions for components, handlers, helpers.
- `kebab-case` file names (Next.js reserved names excepted), `PascalCase` components, `camelCase` functions/vars, `UPPER_SNAKE_CASE` for module-level constants.
- Path alias `@/*` resolves to the repo root.
- No `any` — strict typing.
- TDD by default: red → green → refactor.
