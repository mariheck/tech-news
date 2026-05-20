# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16.2.6** (App Router)
- **React 19.2.4** with the **React Compiler** enabled (`next.config.ts` → `reactCompiler: true`)
- **TypeScript 5** in strict mode
- **Tailwind v4** via `@tailwindcss/postcss` (CSS-first config — no `tailwind.config.*`)
- **Vitest 4** + `jsdom` + `@testing-library/react`
- **ESLint 9** flat config (`eslint-config-next/core-web-vitals` + `/typescript`)

> ⚠️ **Next.js 16 and React 19 are newer than most training data.** APIs, conventions, and file structure may differ from what you remember. Before touching a Next.js or React API, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices. Prefer fetching docs via `context7` over relying on memory — pinned IDs: Next.js → `/vercel/next.js`, React → `/websites/react_dev`.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — ESLint
- `npm run test` — Vitest in watch mode
- `npm run test -- --run` — single Vitest pass (CI-style)
- `npm run test -- __tests__/app/page.test.tsx` — run a single test file
- `npm run test -- -t 'Page'` — run tests matching a name pattern

There is no separate typecheck script — `next build` and the editor's TS server handle it.

## Architecture

- **Server Components by default**. Components in `app/` are RSC unless they opt in to client behavior with `'use client'`. The root layout `app/layout.tsx` wires Geist + Geist Mono via `next/font/google` and Tailwind globals.
- **Don't hand-roll `useMemo` / `useCallback` / `memo`** — the React Compiler handles memoization. Only reach for them when there's a measured reason the compiler can't handle (e.g. referential identity required by an external API).
- **Tailwind config lives in CSS, not JS** — use `@theme` / `@import "tailwindcss"` in `app/globals.css`. Don't create a `tailwind.config.js`.
- **No component-scoped classes in `app/globals.css`**. `globals.css` holds the `@theme` tokens and the typography role utilities (`.text-display`, `.text-headline`, `.text-title`, `.text-body`, `.text-label`) — abstract slots from DESIGN.md, not component identities. Anything used by one component (transitions, custom filters, one-off layouts) goes in that component's JSX with Tailwind utilities, not a named class in globals.
- **Path alias**: `@/*` → repo root (e.g. `import Home from '@/app/page'`).
- **Locale**: root `<html>` is `lang='fr'`; user-facing copy is French. Code identifiers and comments stay English.

## Code conventions

- **Arrow functions** for components, handlers, and helpers (see `app/page.tsx`, `app/layout.tsx`). No `function` keyword for declarations.
- **File names** in `kebab-case` (`user-profile.tsx`, `format-date.ts`). The Next.js special files (`page.tsx`, `layout.tsx`, `route.ts`, …) keep their reserved names.
- **Components** in `PascalCase` (`UserProfile`, `ArticleCard`).
- **Functions and variables** in `camelCase` (`formatDate`, `userCount`).
- **Module-level constants** in `UPPER_SNAKE_CASE` (`MAX_ITEMS`, `API_BASE_URL`). Local `const` bindings stay `camelCase`.
- **No `any`** — reach for `unknown` + narrowing, generics, or a precise type. Don't silence the compiler with `as any` or `@ts-ignore` (`@ts-expect-error` is acceptable only with a written reason).
- **Conditional classes**: compose with `classNames(...)` from the `classnames` dependency. Use the object form (`{ 'flex-col': direction === 'vertical' }`) for variant/state branching. Reserve template literals for simple static strings without conditionals.
- **Sizing values**: prefer the Tailwind v4 spacing scale (`min-w-70`, `max-w-95`, `w-55` — unit is `0.25rem`, so `max-w-95` = `23.75rem`) over arbitrary values. When an arbitrary value is unavoidable (e.g. inside `clamp()`, or a measurement off the scale), prefer `rem` over `px` (`text-[1.07rem]` not `text-[17px]`). The exception is values that are inherently non-rem — percentages (`basis-[42%]`), viewport units, etc.
- **Prop union types**: extract named `type` aliases (e.g. `type CardSize = 'sm' | 'md' | 'lg'`) before referencing them in the props type, rather than inlining the union inside `CardProps`.
- **All unit tests in `__tests__/` at the repo root**, mirroring the source path (e.g. `app/page.tsx` → `__tests__/app/page.test.tsx`). Do not colocate `*.test.tsx` files next to source.

## Components

- **Shared UI** lives in `components/<group>/` at the repo root (e.g. `components/layout/`). Files use **named exports**; a per-group `index.ts` re-exports via `export *`; consumers import from the barrel (`import { Brand } from '@/components/layout'`).
- **Intra-group imports** must use the direct path (`from './brand'`), not the barrel — going through the barrel from inside the same group creates a circular import.
- **Atomic UI primitives don't own responsive layout decisions.** Components like `Card`, `Button`, `Pill` take static variant props (`size`, `direction`, `state`) and stay viewport-agnostic **at the prop level**. Choosing *which* variant to render at *which* breakpoint belongs to the consuming layout (grid components, page layouts) — those orchestrators render multiple variant instances with Tailwind visibility toggles, or branch their own internal markup per breakpoint. Never make a primitive's prop responsive to solve a layout problem. Breakpoint-prefixed utilities (`sm:max-w-160`, `clamp()` font sizes) inside a variant's implementation are allowed when they keep that variant's *own* rendering stable across screens.

## Skills to reach for

- **`next-best-practices`** — for routing, RSC/client boundaries, data fetching, metadata, route handlers, async APIs.
- **`vercel-react-best-practices`** — when writing or reviewing React components for performance and idioms.
- **`vercel-composition-patterns`** — when designing component APIs, reusable primitives, or refactoring boolean-prop sprawl.
- **`design-engineering`** + **`impeccable:impeccable`** — for UI polish, a11y, motion, responsive review.

## Design context

Three files at the repo root are the canonical source of truth for any UI or content decision. Read them before designing or reviewing UI:

- **`PRODUCT.md`** — strategic context: register (`brand`), users, product purpose (AI-curated weekly digest with linked sources), brand personality, anti-references, and five design principles. Read before scoping a new feature or rejecting an aesthetic direction.
- **`DESIGN.md`** — visual system: frontmatter token primitives (colors, typography, rounded, spacing, components) and a six-section spec (Overview, Colors, Typography, Elevation, Components, Do's and Don'ts). Read before writing CSS, picking a color, or building a new component. The Do's and Don'ts are normative — match-and-refuse, not suggestions.
- **`.impeccable/design.json`** — sidecar consumed by impeccable's live panel: tonal ramps per color, shadow/motion tokens, breakpoints, and self-contained HTML/CSS snippets for the canonical components. Update it whenever DESIGN.md is regenerated.

The Sources sidebar on the article page is load-bearing UX, not decoration — every article is a recap of external sources and must surface them numbered with URLs in mono. See `PRODUCT.md` → Design Principle #1.

## Workflow: TDD is the default

This project is developed test-first. Before writing implementation code for any feature or bugfix, invoke **`superpowers:test-driven-development`** and follow the red → green → refactor loop:

1. **Red** — write the smallest failing test that captures the next behavior. Run it and confirm it fails for the expected reason.
2. **Green** — write the minimum production code to make it pass. Nothing more.
3. **Refactor** — clean up while green, with tests as the safety net.

Do not write production code without a failing test pointing at it. Do not stack multiple behaviors into one test. If a bug slips through, the first step is a regression test that reproduces it — then the fix.

## Testing

- `vitest.setup.ts` already loads `@testing-library/jest-dom/vitest` matchers and runs `cleanup()` after each test — don't re-import matchers or call cleanup in test files.
- Import the component under test via the `@/` alias, render with `@testing-library/react`, query by accessible role.
- **jsdom does not evaluate `:hover` / `:focus-visible` CSS.** For hover/focus behavior, assert on the structural contract (link has `group`, a decorative `aria-hidden` child has a `group-hover:` / `group-focus-visible:` variant) instead of computed style — implementation coupling is the only viable angle.
- **Fixture pattern**: when a component has multiple variants to test, declare a shared `commonProps` const at the top of the test file and create named fixtures via spread (`<Card {...commonProps} />`, `<Card size='lg' {...commonProps} />`). Avoid inlining the JSX in each `test()` block.

## Commits

- Commits must keep the subject line at **120 characters max**. No additional detail in the body.
- **No autonomous commits.** Every `git commit` (and `push`, `reset --hard`, force-push) requires explicit user approval at that moment. Plan steps or skill checklists that say `git commit -m "..."` are suggestions, not licenses — stop, show the diff, wait.
