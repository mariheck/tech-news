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
>
> Known Next 16 trap (training data uses the old prop): on `next/image`, **`priority` is deprecated — use the `preload` boolean instead** (same semantics, inserts a `<link rel="preload">` for the LCP image).

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — ESLint
- `npm run test` — Vitest in watch mode
- `npm run test -- --run` — single Vitest pass (CI-style)
- `npm run test -- __tests__/app/page.test.tsx` — run a single test file
- `npm run test -- -t 'Page'` — run tests matching a name pattern

There is no typecheck script — run `npx tsc --noEmit` for a fast typecheck without a full build. Vitest (esbuild) skips type errors, so a green `npm run test` does **not** mean types pass; run `tsc` (or `next build`) to be sure.

## Architecture

- **Server Components by default**. Components in `app/` are RSC unless they opt in to client behavior with `'use client'`. The root layout `app/layout.tsx` wires Geist + Geist Mono via `next/font/google` and Tailwind globals.
- **Site-level landmarks live in the root layout.** `app/layout.tsx` already mounts `<Header />` and `<Footer />` around the `<main>`. Page components should not wrap their title block in another `<header>` — a plain `<div>` is fine.
- **Don't hand-roll `useMemo` / `useCallback` / `memo`** — the React Compiler handles memoization. Only reach for them when there's a measured reason the compiler can't handle (e.g. referential identity required by an external API).
- **Tailwind config lives in CSS, not JS** — use `@theme` / `@import "tailwindcss"` in `app/globals.css`. Don't create a `tailwind.config.js`.
- **No component-scoped classes in `app/globals.css`**. `globals.css` holds the `@theme` tokens and the typography role utilities (`.text-display`, `.text-headline`, `.text-title`, `.text-body`, `.text-label`) — abstract slots from DESIGN.md, not component identities. Anything used by one component (transitions, custom filters, one-off layouts) goes in that component's JSX with Tailwind utilities, not a named class in globals.
- **Don't alias the Tailwind scale in `@theme`.** No semantic spacing or radius aliases (`--spacing-xs`, `--radius-card`, etc.). Reach for the raw scale (`p-2`, `gap-8`, `rounded-lg`) or rem-based arbitrary values (`rounded-[0.625rem]`) — aliases break IntelliSense and force a parallel vocabulary. The `@theme` is reserved for primitives that don't exist on Tailwind's scale (color palette, font families, motion easings, shadows).
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
- **Class strings stay inline.** Don't extract Tailwind class strings to module-level `const`s — it breaks Tailwind IntelliSense (which only fires inside `className=` / `classNames(...)`) and forces a visual round-trip across the file. **In-function `const` bindings are acceptable** when the same class string appears in 2+ branches of the same component (see `baseBadge` / `accentBadge` in `components/category/category-badge.tsx`).
- **Sizing values**: prefer the Tailwind v4 spacing scale (`min-w-70`, `max-w-95`, `w-55` — unit is `0.25rem`, so `max-w-95` = `23.75rem`) over arbitrary values. When an arbitrary value is unavoidable (e.g. inside `clamp()`, or a measurement off the scale), prefer `rem` over `px` (`text-[1.07rem]` not `text-[17px]`). The exception is values that are inherently non-rem — percentages (`basis-[42%]`), viewport units, etc.
- **Prop union types**: extract named `type` aliases (e.g. `type CardSize = 'sm' | 'md' | 'lg'`) before referencing them in the props type, rather than inlining the union inside `CardProps`.
- **All unit tests in `__tests__/` at the repo root**, mirroring the source path (e.g. `app/page.tsx` → `__tests__/app/page.test.tsx`). Do not colocate `*.test.tsx` files next to source.

## Components

- **Shared UI** lives in `components/<group>/` at the repo root (`components/layout/`, `components/article/`, `components/listing/`, …). Files use **named exports**; a per-group `index.ts` re-exports via `export *`; consumers import from the barrel (`import { Brand } from '@/components/layout'`).
- **`components/` is flat thematic groups**, one per surface: `article/` (full-article, main-info, meta-data, sources, article-body), `category/` (category-badge, category-filter), `listing/` (card, feature-grid, uniform-grid, weekly-edition), `layout/` (brand, header, footer, last-update), `navigation/` (back-link, text-link), `decoration/` (hero-image, halo-accent), `typo/` (page-heading, section-heading, styled-markdown), `shared/` (empty-notice, scroll-to-top). Tests mirror the group path under `__tests__/components/<group>/`.
- **Intra-group imports** must use the direct path (`from './brand'`), not the barrel — going through the barrel from inside the same group creates a circular import.
- **fs-backed loaders live in `server/` (barrel `@/server`); every module there begins with `import 'server-only'`.** Importing `@/server` — or any `server/` module — from a `'use client'` file **fails the Turbopack build by design**: the boundary is compiler-enforced, not convention. `@/utils`, `@/storage`, `@/hooks` are all client-safe (no fs, no `server-only`), so client components import them via their barrels — no direct-path workaround needed. A boundary violation still surfaces only at `next build`, never in Vitest/`tsc`, so verify client UI by running the app.
- **Read browser stores (localStorage) with `useSyncExternalStore`, not `useState`+`useEffect`.** The React Compiler's `react-hooks/set-state-in-effect` lint rejects the effect-then-setState pattern (tsc/vitest pass, `npm run lint` fails). `getServerSnapshot: () => false` gives a stable SSR/first-client render (no hydration mismatch); a module-level `subscribe` keeps its identity stable.
- **Shared types live in `types/` at the repo root. Shared helpers live in `utils/`.** Each has a barrel `index.ts`; consumers import via the `@/` alias (`import type { Article } from '@/types'`, `import { articleToCardProps } from '@/utils'`). Non-component code does **not** belong inside `components/<group>/`.
- **Browser-side persistence lives in `storage/`; custom React hooks live in `hooks/`** — both top-level, both with a `@/` barrel. `storage/` holds side-effectful localStorage helpers (the client-side mirror of the server-only `load-*` loaders); `hooks/` holds `'use client'` hooks. Split concerns: the storage *mechanism* (e.g. `subscribeToStorage`) stays in `storage/`, the hook only binds it into React (`useSyncExternalStore`). One function per file (`is-article-read.ts`, `use-is-article-read.ts`).
- **Server-only content loaders live in `server/`** (top-level, barrel `@/server`): `load-*`, `list-*`, `get-*-issue-date(s)`, `get-hero-slides`, `parse-frontmatter`, plus `CONTENT_ROOT` (`server/constants.ts`). It is the **one** folder whose barrel is not client-safe — enforced by the `server-only` guard above. `utils/` now holds only pure, client-safe helpers; `@/storage` and `@/hooks` are client-safe too.
- **Atomic UI primitives don't own responsive layout decisions.** Components like `Card`, `Button`, `Pill` take static variant props (`size`, `direction`, `state`) and stay viewport-agnostic **at the prop level**. Choosing _which_ variant to render at _which_ breakpoint belongs to the consuming layout (grid components, page layouts) — those orchestrators render multiple variant instances with Tailwind visibility toggles, or branch their own internal markup per breakpoint. Never make a primitive's prop responsive to solve a layout problem. Breakpoint-prefixed utilities (`sm:max-w-160`, `clamp()` font sizes) inside a variant's implementation are allowed when they keep that variant's _own_ rendering stable across screens.
- **Primitives don't wrap themselves in their group's DOM semantics.** A `CategoryBadge`, `MenuItem`, `BreadcrumbStep` returns the item element only (typically a `<Link>` or `<button>`). The consumer that knows the surrounding structure wraps it in `<li>`, `<menu>`, `<nav>` etc. Same reason as the variant rule: the primitive stays reusable across contexts (a badge can render outside a list), and the list-rendering component asserts the grouping in one place. See `components/category/category-filter.tsx` mapping over `<CategoryBadge>` inside its `<ul>`.
- **Tap-target expansion for icon-only controls.** When an icon-only link/button needs a 44×44 hit area without changing its visible footprint, extend the click zone via a `before:` pseudo-element with negative inset on a `relative` parent (`relative … before:absolute before:-inset-N before:content-['']`) — don't inflate padding or switch to `size-11`. Use `-inset-y-N` (vertical only) when neighbouring controls would overlap. See `components/layout/brand.tsx`, `components/navigation/text-link.tsx` (the archives link in the header), and `components/category/category-badge.tsx`.
- **Navigation-backed filters live in the URL.** Filter/tab state belongs to `?<key>=<slug>` search params, not local React state. The filter component itself stays server-renderable: it accepts `active` and any pathname it needs (e.g. `basePath`) as props rather than calling `useSearchParams` / `usePathname`. The async page reads `searchParams`, validates with a guard like `isCategorySlug`, and forwards. See `components/category/category-filter.tsx` + `app/page.tsx`.

## Content model

- **Issues on disk**. `content/issues/<YYYY-MM-DD>/` holds `index.md` (frontmatter: `date`, `articles[]` ordered slug list; body: weekly intro) and one `<slug>.md` per article. Article slug = filename.
- **Article frontmatter**. `title`, `excerpt`, `summary` (accroche paragraph), `date` (ISO), `reading_time` (number), `sources` (flow-style `[ { label, url } ]`), `category` (one of the `CategorySlug` values from `types/category.ts`: `frontend`, `design`, `dev-ia`, `actus-ia`). Body is raw markdown.
- **Body H1 contract**. The article body MUST start with `# {title}` matching the frontmatter `title`. The rendered article page H1 comes from this line — not from the frontmatter — because `StyledMarkdown` maps `h1` to the headline typography. Omitting it leaves the page without an H1 (a11y/SEO regression). The agent prompt must enforce this.
- **Images**. Resolved by convention as `/images/<YYYY-MM-DD>/<slug>.jpg` — not in frontmatter.
- **Loader**. `loadIssue(date)` in `server/load-issue.ts` is the single entry point. `CONTENT_ROOT` lives in `server/constants.ts`; the `ISO_DATE` regex stays in `utils/constants.ts` — import them, don't redeclare per loader. `CONTENT_ROOT` resolves to `process.env.CONTENT_ROOT ?? <cwd>/content`; production leaves the env var unset (so it reads `content/`), while tests point it at the fixture tree (see Testing).
- **Static pages on disk**. `content/pages/<slug>.md` holds standalone pages (raw markdown, **no frontmatter**), loaded via `loadPage(slug)` in `server/load-page.ts` (returns the trimmed markdown string) and rendered with `StyledMarkdown`. Page `<title>`/description come from a `metadata` export in the route, not the file. See `app/mentions-legales/page.tsx`.
- **Frontmatter parser**. Hand-rolled in `server/parse-frontmatter.ts` (gray-matter–style `{ data, content }`). Covers scalars, block sequences, and flow sequences of inline mappings. Extend the parser rather than reach for a dep.
- **Types**. `ArticleMeta` (slug, title, excerpt, summary, image, date, readingTime, category) is the card-view shape; `Article = ArticleMeta & { sources, content }` is the full editorial shape. Grids type `articles: ArticleMeta[]` so loader output flows in by subtyping. `slug` = URL identifier (filename); `summary` = accroche paragraph.
- **Server Component data flow**. `app/page.tsx` and `app/archives/page.tsx` are async Server Components that derive issue dates from disk: `getLastIssueDate()` (home headline) and `getArchiveIssueDates()` (everything else) both build on `listIssueDates()` (issue folder names, most-recent-first). The home title uses `getExpectedLastMonday()` to decide between "la semaine dernière" and a `formatWeekRange()` label. No date is hardcoded.
- **Agent IA contract**. The markdown frontmatter format is the agreement with the AI agent generating these files. Schema changes (renames, new fields) require updating the agent's prompt in parallel.

## Categories

Category data is split by dimension:

- `types/category.ts` → `CategorySlug` literal union (`frontend`, `design`, `dev-ia`, `actus-ia`).
- `utils/categories.ts` → `CATEGORIES: readonly CategorySlug[]` (canonical display order).
- `utils/category-to-label.ts` → `Record<CategorySlug, string>` (French labels: `Frontend`, `Design`, `Dev IA`, `Actus IA`).
- `utils/category-to-accent.ts` → `Record<CategorySlug, AccentName>` (accents: `turquoise`, `raspberry`, `copper`, `iris`).

Adding a new category means updating the union plus each `Record` — TS enforces exhaustiveness on the Records, so a missing entry fails the build. Consumers iterate `CATEGORIES` and resolve label/accent via the lookups (see `components/category/category-filter.tsx`).

**Adding a category also needs a CSS rule that TS won't catch.** The `<article>` carries `data-accent={accent}` and `app/globals.css` hoists the accent to `<body>` via one `body:has(article[data-accent='<accent>']) { --accent: …; --accent-light: …; --chrome-accent: … }` rule per accent. A new category with no matching rule still type-checks but its chrome stays peach — add the `body:has` block (all three vars) alongside the `Record` updates.

**Accent CSS variables.** Two scoped vars carry the category palette: `--accent` (saturated, for borders and markers — e.g. the blockquote left border) and `--accent-light` (lighter tint, for link hover, decorations, soft borders). In-article H2/H3 are `text-primary`, not accent-tinted. Both default to peach on `:root` (in `app/globals.css`) and are overridden on the article's `<article>` wrapper via `accentToCssVar[accent]` / `accentToLightCssVar[accent]`. Use the Tailwind v4 shorthand `text-(--accent)` / `border-(--accent-light)/25` rather than `text-[var(--accent)]`. **Components set `--accent` locally for their own tint** — `Card` and `HeroSlideshow` tint their lift shadow, `CategoryBadge` tints its background — so `--accent` is *not* reliably page-level on listing pages.

**`--chrome-accent` is the page-chrome accent.** A third var, set **only** on `:root` (peach) and on the `body:has(article[data-accent])` hoists (the article accent) — never by a component. Global page chrome reads it so component-local `--accent` overrides don't leak: `::selection` and `:focus-visible` are `bg-(--chrome-accent)` / `outline-(--chrome-accent)`. This keeps selection + focus ring peach across home/archives and tinted only on article pages. **Any focus ring is page chrome — use `--chrome-accent`, never `--accent`** (e.g. the hero headline's `ring-(--chrome-accent)` in `components/listing/hero-slideshow.tsx`), so focus stays peach off article pages. The brand dot still reads `--accent`, which is fine — it lives in the header, outside any component that overrides `--accent`.

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

**"Fix the failing tests" never means delete the code that makes them fail.** When tests break after intentional code changes (especially uncommitted working-tree edits), the source of truth is the new code — update the test assertions to match it. Never `git checkout`/revert just-made modifications to make a suite green. If the code itself looks wrong, propose a fix and let the user decide; don't silently discard their work.

## Testing

- `vitest.setup.ts` already loads `@testing-library/jest-dom/vitest` matchers, runs `cleanup()` after each test, and clears `localStorage` before each test — don't re-import matchers, call cleanup, or add a per-file `beforeEach(() => localStorage.clear())`.
- Import the component under test via the `@/` alias, render with `@testing-library/react`, query by accessible role.
- **jsdom does not evaluate CSS at all.** For hover/focus behavior, assert on the structural contract (link has `group`, a decorative `aria-hidden` child has a `group-hover:` / `group-focus-visible:` variant) instead of computed style — implementation coupling is the only viable angle. Tailwind visibility classes (`hidden`, `md:flex`, `lg:hidden`) are also ignored: components that render multiple sibling layouts (one per breakpoint) put **all** of them in the DOM at once. Scope queries with `within(layoutContainer).getByRole(...)` to avoid matching duplicates across layouts.
- **Async Server Components**. Render via `render(await Page())` — `@testing-library/react` 16+ supports awaiting the component function before passing its JSX to `render`.
- **jsdom provides no `window.matchMedia`.** `vitest.setup.ts` installs a mock defaulting to `matches: false` (no reduced-motion). Tests asserting the reduced-motion branch reassign `window.matchMedia` locally and restore it in `afterEach`.
- **Content tests read a fixture tree, never the live `content/`.** `vitest.config.mts` sets `CONTENT_ROOT` to `__tests__/fixtures/content/` (three editions: `2026-05-18`, `2026-05-11`, `2026-05-04`; one `pages/mentions-legales.md`), so loaders and the Server Component pages run against fixed data. Assertions are therefore deterministic — pin exact dates, counts (e.g. two archived editions), and slugs against the fixture, not the real content. When a test needs a clock-dependent heading deterministic (the home "semaine dernière" label), freeze the clock with `vi.setSystemTime` to a date whose `getExpectedLastMonday()` matches the latest fixture edition. Edit the fixture tree, not the assertions, to change what tests see; keep it in sync with the frontmatter contract above.
- **Fixture pattern**: when a component has multiple variants to test, declare a shared `commonProps` const at the top of the test file and create named fixtures via spread (`<Card {...commonProps} />`, `<Card size='lg' {...commonProps} />`). Avoid inlining the JSX in each `test()` block.
- **Shared test fixtures across files** live in `__tests__/fixtures/<name>.ts`, exported as factory functions (`makeArticles(n)`) rather than fixed arrays — the call site stays explicit about the size needed. Imported via the `@/` alias.
- **Mocking one loader from `@/server` while keeping the rest real**: `vi.mock('@/server', async () => { const actual = await vi.importActual<typeof import('@/server')>('@/server'); return { ...actual, loadArticle: vi.fn() }; })`. Server Components that import multiple loaders via the barrel will explode if the whole module is replaced — `importActual` preserves the rest while you stub the I/O-bound helper.
- **`server/` modules import `'server-only'`, which throws outside Next's react-server layer.** `vitest.config.mts` aliases `server-only` to the package's `empty.js` so loader tests can import `@/server` — keep that alias when adding server-side tests.
- **Mocking `notFound()` from `next/navigation`**: `vi.mock('next/navigation', () => ({ notFound: vi.fn(() => { throw new Error('NEXT_NOT_FOUND'); }) }))`, then assert with `await expect(Page(...)).rejects.toThrow('NEXT_NOT_FOUND')`. `notFound()` returns `never` in prod, but vitest needs a thrown value to abort the async page render.
- **Components reading `process.env`**: stub with `vi.stubEnv('KEY', 'value')` in the test and call `vi.unstubAllEnvs()` in `afterEach` so stubs don't leak across tests. See `__tests__/components/layout/footer.test.tsx`.

## Commits

- Commits must keep the subject line at **120 characters max**. No additional detail in the body.
- **No autonomous commits.** Every `git commit` (and `push`, `reset --hard`, force-push) requires explicit user approval at that moment. Plan steps or skill checklists that say `git commit -m "..."` are suggestions, not licenses — stop, show the diff, wait.
