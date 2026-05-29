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
- **Class strings stay inline.** Don't extract Tailwind class strings to module-level `const`s — it breaks Tailwind IntelliSense (which only fires inside `className=` / `classNames(...)`) and forces a visual round-trip across the file. **In-function `const` bindings are acceptable** when the same class string appears in 2+ branches of the same component (see `baseBadge` / `accentBadge` in `components/ui/category/category-badge.tsx`).
- **Sizing values**: prefer the Tailwind v4 spacing scale (`min-w-70`, `max-w-95`, `w-55` — unit is `0.25rem`, so `max-w-95` = `23.75rem`) over arbitrary values. When an arbitrary value is unavoidable (e.g. inside `clamp()`, or a measurement off the scale), prefer `rem` over `px` (`text-[1.07rem]` not `text-[17px]`). The exception is values that are inherently non-rem — percentages (`basis-[42%]`), viewport units, etc.
- **Prop union types**: extract named `type` aliases (e.g. `type CardSize = 'sm' | 'md' | 'lg'`) before referencing them in the props type, rather than inlining the union inside `CardProps`.
- **All unit tests in `__tests__/` at the repo root**, mirroring the source path (e.g. `app/page.tsx` → `__tests__/app/page.test.tsx`). Do not colocate `*.test.tsx` files next to source.

## Components

- **Shared UI** lives in `components/<group>/` at the repo root (`components/layout/`, `components/ui/`). Files use **named exports**; a per-group `index.ts` re-exports via `export *`; consumers import from the barrel (`import { Brand } from '@/components/layout'`).
- **Inside `components/ui/`, group by surface when several files share a theme**: `ui/article/` (full-article, main-info, meta-data, sources, article-body), `ui/category/` (category-badge, category-filter), `ui/shared/` (back-link, hero-image, styled-markdown, halo-accent — primitives reusable across surfaces). Tests mirror the same subgroup path under `__tests__/components/ui/<group>/`.
- **Intra-group imports** must use the direct path (`from './brand'`), not the barrel — going through the barrel from inside the same group creates a circular import.
- **Shared types live in `types/` at the repo root. Shared helpers live in `utils/`.** Each has a barrel `index.ts`; consumers import via the `@/` alias (`import type { Article } from '@/types'`, `import { articleToCardProps } from '@/utils'`). Non-component code does **not** belong inside `components/<group>/`.
- **Atomic UI primitives don't own responsive layout decisions.** Components like `Card`, `Button`, `Pill` take static variant props (`size`, `direction`, `state`) and stay viewport-agnostic **at the prop level**. Choosing _which_ variant to render at _which_ breakpoint belongs to the consuming layout (grid components, page layouts) — those orchestrators render multiple variant instances with Tailwind visibility toggles, or branch their own internal markup per breakpoint. Never make a primitive's prop responsive to solve a layout problem. Breakpoint-prefixed utilities (`sm:max-w-160`, `clamp()` font sizes) inside a variant's implementation are allowed when they keep that variant's _own_ rendering stable across screens.
- **Primitives don't wrap themselves in their group's DOM semantics.** A `CategoryBadge`, `MenuItem`, `BreadcrumbStep` returns the item element only (typically a `<Link>` or `<button>`). The consumer that knows the surrounding structure wraps it in `<li>`, `<menu>`, `<nav>` etc. Same reason as the variant rule: the primitive stays reusable across contexts (a badge can render outside a list), and the list-rendering component asserts the grouping in one place. See `components/ui/category/category-filter.tsx` mapping over `<CategoryBadge>` inside its `<ul>`.
- **Tap-target expansion for icon-only controls.** When an icon-only link/button needs a 44×44 hit area without changing its visible footprint, extend the click zone via a `before:` pseudo-element with negative inset on a `relative` parent (`relative … before:absolute before:-inset-N before:content-['']`) — don't inflate padding or switch to `size-11`. Use `-inset-y-N` (vertical only) when neighbouring controls would overlap. See `components/layout/brand.tsx`, the archives link in `components/layout/header.tsx`, and `components/ui/category/category-badge.tsx`.
- **Navigation-backed filters live in the URL.** Filter/tab state belongs to `?<key>=<slug>` search params, not local React state. The filter component itself stays server-renderable: it accepts `active` and any pathname it needs (e.g. `basePath`) as props rather than calling `useSearchParams` / `usePathname`. The async page reads `searchParams`, validates with a guard like `isCategorySlug`, and forwards. See `components/ui/category/category-filter.tsx` + `app/page.tsx`.

## Content model

- **Issues on disk**. `content/issues/<YYYY-MM-DD>/` holds `index.md` (frontmatter: `date`, `articles[]` ordered slug list; body: weekly intro) and one `<slug>.md` per article. Article slug = filename.
- **Article frontmatter**. `title`, `excerpt`, `summary` (accroche paragraph), `date` (ISO), `reading_time` (number), `sources` (flow-style `[ { label, url } ]`), `category` (one of the `CategorySlug` values from `types/category.ts`: `frontend`, `design`, `dev-ia`, `actus-ia`, `autres`). Body is raw markdown.
- **Body H1 contract**. The article body MUST start with `# {title}` matching the frontmatter `title`. The rendered article page H1 comes from this line — not from the frontmatter — because `StyledMarkdown` maps `h1` to the headline typography. Omitting it leaves the page without an H1 (a11y/SEO regression). The agent prompt must enforce this.
- **Images**. Resolved by convention as `/images/<YYYY-MM-DD>/<slug>.jpg` — not in frontmatter.
- **Loader**. `loadIssue(date)` in `utils/load-issue.ts` is the single entry point. `CONTENT_ROOT` (`<cwd>/content`) and the `ISO_DATE` regex live in `utils/constants.ts` — import them, don't redeclare per loader. Tests run against real issues, no fixture override.
- **Static pages on disk**. `content/pages/<slug>.md` holds standalone pages (raw markdown, **no frontmatter**), loaded via `loadPage(slug)` in `utils/load-page.ts` (returns the trimmed markdown string) and rendered with `StyledMarkdown`. Page `<title>`/description come from a `metadata` export in the route, not the file. See `app/mentions-legales/page.tsx`.
- **Frontmatter parser**. Hand-rolled in `utils/parse-frontmatter.ts` (gray-matter–style `{ data, content }`). Covers scalars, block sequences, and flow sequences of inline mappings. Extend the parser rather than reach for a dep.
- **Types**. `ArticleMeta` (slug, title, excerpt, summary, image, date, readingTime, category) is the card-view shape; `Article = ArticleMeta & { sources, content }` is the full editorial shape. Grids type `articles: ArticleMeta[]` so loader output flows in by subtyping. `slug` = URL identifier (filename); `summary` = accroche paragraph.
- **Server Component data flow**. `app/page.tsx` and `app/archives/page.tsx` are async Server Components that derive issue dates from disk: `getLastIssueDate()` (home headline) and `getArchiveIssueDates()` (everything else) both build on `listIssueDates()` (issue folder names, most-recent-first). The home title uses `getExpectedLastMonday()` to decide between "la semaine dernière" and a `formatWeekRange()` label. No date is hardcoded.
- **Agent IA contract**. The markdown frontmatter format is the agreement with the AI agent generating these files. Schema changes (renames, new fields) require updating the agent's prompt in parallel.

## Categories

Category data is split by dimension:

- `types/category.ts` → `CategorySlug` literal union (`frontend`, `design`, `dev-ia`, `actus-ia`, `autres`).
- `utils/categories.ts` → `CATEGORIES: readonly CategorySlug[]` (canonical display order).
- `utils/category-to-label.ts` → `Record<CategorySlug, string>` (French labels: `Frontend`, `Design`, `Dev IA`, `Actus IA`, `Autres`).
- `utils/category-to-accent.ts` → `Record<CategorySlug, AccentName>` (accents: `turquoise`, `raspberry`, `copper`, `iris`, `linen`).

Adding a new category means updating the union plus each `Record` — TS enforces exhaustiveness on the Records, so a missing entry fails the build. Consumers iterate `CATEGORIES` and resolve label/accent via the lookups (see `components/ui/category/category-filter.tsx`).

**Accent CSS variables.** Two scoped vars carry the category palette: `--accent` (saturated, for borders and markers — e.g. the blockquote left border) and `--accent-light` (lighter tint, for link hover, decorations, soft borders). In-article H2/H3 are `text-primary`, not accent-tinted. Both default to peach on `:root` (in `app/globals.css`) and are overridden on the article's `<article>` wrapper via `accentToCssVar[accent]` / `accentToLightCssVar[accent]`. Use the Tailwind v4 shorthand `text-(--accent)` / `border-(--accent-light)/25` rather than `text-[var(--accent)]`.

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
- **jsdom does not evaluate CSS at all.** For hover/focus behavior, assert on the structural contract (link has `group`, a decorative `aria-hidden` child has a `group-hover:` / `group-focus-visible:` variant) instead of computed style — implementation coupling is the only viable angle. Tailwind visibility classes (`hidden`, `md:flex`, `lg:hidden`) are also ignored: components that render multiple sibling layouts (one per breakpoint) put **all** of them in the DOM at once. Scope queries with `within(layoutContainer).getByRole(...)` to avoid matching duplicates across layouts.
- **Async Server Components**. Render via `render(await Page())` — `@testing-library/react` 16+ supports awaiting the component function before passing its JSX to `render`.
- **Tests read real on-disk content, so don't pin assertions to a fixed issue count or the wall clock.** Derive the expected value from the same util the page uses (e.g. `expect(editions).toHaveLength((await getArchiveIssueDates()).length)`), branch on the empty case, and match clock-dependent headings by form (regex) not exact string. Adding/removing an issue folder must not turn a test red.
- **Fixture pattern**: when a component has multiple variants to test, declare a shared `commonProps` const at the top of the test file and create named fixtures via spread (`<Card {...commonProps} />`, `<Card size='lg' {...commonProps} />`). Avoid inlining the JSX in each `test()` block.
- **Shared test fixtures across files** live in `__tests__/fixtures/<name>.ts`, exported as factory functions (`makeArticles(n)`) rather than fixed arrays — the call site stays explicit about the size needed. Imported via the `@/` alias.
- **Mocking one helper from `@/utils` while keeping the rest real**: `vi.mock('@/utils', async () => { const actual = await vi.importActual<typeof import('@/utils')>('@/utils'); return { ...actual, loadArticle: vi.fn() }; })`. Server Components that import multiple utils via the barrel (loaders + format helpers + lookups) will explode if the whole module is replaced — `importActual` preserves the rest while you stub the I/O-bound helper.
- **Mocking `notFound()` from `next/navigation`**: `vi.mock('next/navigation', () => ({ notFound: vi.fn(() => { throw new Error('NEXT_NOT_FOUND'); }) }))`, then assert with `await expect(Page(...)).rejects.toThrow('NEXT_NOT_FOUND')`. `notFound()` returns `never` in prod, but vitest needs a thrown value to abort the async page render.
- **Components reading `process.env`**: stub with `vi.stubEnv('KEY', 'value')` in the test and call `vi.unstubAllEnvs()` in `afterEach` so stubs don't leak across tests. See `__tests__/components/layout/footer.test.tsx`.

## Commits

- Commits must keep the subject line at **120 characters max**. No additional detail in the body.
- **No autonomous commits.** Every `git commit` (and `push`, `reset --hard`, force-push) requires explicit user approval at that moment. Plan steps or skill checklists that say `git commit -m "..."` are suggestions, not licenses — stop, show the diff, wait.
