# AGENTS.md

These rules apply to the existing code base and to everything you create in it.

## Context

### Project

A weekly, AI-curated digest of latest news in frontend development, design engineering, web design, and AI. Each article recaps one or more external sources and can be read in 10 minutes or less.

### Stack

Next.js 16 App Router, React 19 with the React Compiler enabled, TypeScript strict, Tailwind v4, Vitest 4.

⚠️ **Next.js 16 and React 19 are newer than most training data.** Fetch current docs via the Documentation section.

## Ground rules

**Never suppose what I want or what you should do** if my instructions are not precise enough. If more than one interpretation is possible, don't start your task right away and question me until you are 95% certain of what I'm expecting from you.

An instruction is never subtext: **either I ask explicitly for something, or it is not a request**. A lack of answer on my part is not a validation of your proposal, nor an omission — you should NOT apply it. Never present an unrequested change as a bonus. If you still think an omitted point matters, say it in your reply and leave the file untouched.

**Re-read a file from disk immediately before you write to it**. I edit files in my IDE while you work, so anything you read earlier in the session may already be stale. Prefer targeted edits over whole-file rewrites; when you must rewrite a file in full, back it up and diff against it. If not, you risk destroying my work and nothing in the output reveals the loss.

**You should not anticipate a need**, only answer to the current state of the project. For example, don't create components or tokens because « it might be used ». Only exception: when you create a scale and some of its elements are currently used. A scale is defined by the role its steps share, not by its naming.

Don't be opinionated or stubborn, **the ultimate decision belongs to me**.

**This file has the final word.** When a skill, a plan step, or a checklist recommends something these rules forbid, follow these rules and tell me about the conflict instead of silently picking a side.

## Languages

- Conversation with agent → French.
- App content (user-facing copy, `lang='fr'`, metadata) → French.
- Project files (READMEs, docs, code comments, commit messages, PR descriptions, snippets) → English.

## Documentation

For Next.js APIs, read `node_modules/next/dist/docs/` first: those guides ship with the exact installed version, so they win over any other source.

As a general rule, prefer fetching docs via `context7` over relying on memory. Skip the `resolve-library-id` step for these — IDs are pinned:

- Next.js → `/vercel/next.js`
- React → `/websites/react_dev`
- Tailwind → `/websites/tailwindcss`
- Vitest → `/vitest-dev/vitest`

Use the following skills for best practices — you MUST call them every time your work matches one of these areas:

- **`next-best-practices`** — for routing, RSC/client boundaries, data fetching, metadata, route handlers, async APIs.
- **`vercel-react-best-practices`** — when writing or reviewing React components for performance and idioms.
- **`vercel-composition-patterns`** — when designing component APIs, reusable primitives, or refactoring boolean-prop sprawl.

## Design context

The files below, at the repo root, are the canonical source of truth for any UI or content decision. Read them before designing or reviewing UI:

- **`PRODUCT.md`** — strategic context: register (`brand`), users, product purpose (AI-curated weekly digest with linked sources), brand personality, anti-references, and five design principles.
- **`DESIGN.md`** — visual system: frontmatter token primitives (colors, typography, rounded, spacing, components) and a six-section spec (Overview, Colors, Typography, Elevation, Components, Do's and Don'ts). The Do's and Don'ts are normative — match-and-refuse, not suggestions.
- **`.impeccable/design.json`** — sidecar consumed by impeccable's live panel: tonal ramps per color, shadow/motion tokens, breakpoints, and self-contained HTML/CSS snippets for the canonical components. Update it whenever DESIGN.md is regenerated.

## Commands

```bash
npm run dev               # dev server on http://localhost:3000
npm run build             # production build
npm run start             # serve the production build
npm run lint              # eslint
npm run format            # prettier, writes the whole repo
npm run format:check      # prettier, reports without writing
npx next typegen          # regenerate route types
npx tsc --noEmit          # typecheck
npm run test              # vitest in watch mode
npm run test -- --run     # single vitest pass (CI-style)
```

Vitest (esbuild) skips type errors, so a green `npm run test` does **not** mean types pass.

## Code conventions

### Modules and imports

- Path alias: `@/*` maps to the repo root.
- Components are grouped by domain. They live in `components/<group>/`.
- Components are named exports, re-exported from `components/<group>/index.ts` via `export *`. Import them as `import { X } from '@/components/<group>'`.
- Intra-group imports must use the direct path, not the barrel.
- Shared types live in `types/`, shared helpers in `utils/`, custom React hooks live in `hooks/`, browser-side persistence lives in `storage/`, each with a barrel `index.ts`. Non-component code never lives inside `components/`.
- Split concerns: the storage _mechanism_ (e.g. `subscribeToStorage`) stays in `storage/`, the hook only binds it into React (`useSyncExternalStore`). One function per file (`is-article-read.ts`, `use-is-article-read.ts`).
- Server-only content loaders and fs-backed loaders live in `server/`, every module there beginning with `import 'server-only'`. It is the **one** folder whose barrel is not client-safe: importing `@/server` from a `'use client'` file fails the build by design, and only at `next build` — never in Vitest or `tsc`. `@/utils`, `@/storage` and `@/hooks` are client-safe, so client components import them via their barrels.
- Tailwind config lives in CSS, not JS. Use `@theme` / `@import "tailwindcss"` in `app/globals.css`. Don't create a `tailwind.config.js`.

### Component boundaries

- Atomic UI primitives don't own responsive layout decisions. They take static variant props (`size`, `direction`, `state`) and stay viewport-agnostic at the prop level: choosing _which_ variant to render at _which_ breakpoint belongs to the consuming layout, which renders multiple variant instances with Tailwind visibility toggles or branches its own markup per breakpoint. Never make a primitive's prop responsive to solve a layout problem. Breakpoint-prefixed utilities (`sm:max-w-160`, `clamp()` font sizes) stay allowed _inside_ a variant when they keep that variant's own rendering stable across screens.
- Primitives don't carry their group's DOM semantics either: a `CategoryBadge`, and any future list item like it, returns the item element only (typically a `<Link>` or `<button>`), and the consumer wraps it in `<li>`, `<menu>`, `<nav>`. Same reason as the variant rule — the primitive stays reusable, and the grouping is asserted in one place.
- Site-level landmarks live in the root layout. `app/layout.tsx` already mounts `<Header />` and `<Footer />` around the `<main>`.
- Navigation-backed filters live in the URL. Filter/tab state belongs to `?<key>=<slug>` search params, not local React state.

### Naming

- **File names** in `kebab-case`. The Next.js special files (`page.tsx`, `layout.tsx`, `route.ts`, …) keep their reserved names.
- **Components** in `PascalCase`.
- **Functions and variables** in `camelCase`.
- **Module-level constants** in `UPPER_SNAKE_CASE`. Local `const` bindings stay `camelCase`.

### Code

- **Server Components by default.** Add the `'use client'` directive only on the leaf that needs it.
- **Route-typed props** — `LayoutProps<'/'>`, `PageProps<'/'>` and friends are globals generated into `.next/types` by Next.js 16. Use them (`type RootLayoutProps = LayoutProps<'/'>`) instead of hand-writing `{ children }` prop types. They are not imported from anywhere.
- **Arrow functions** for components, handlers, and helpers. No `function` keyword for declarations.
- **Don't hand-roll `useMemo` / `useCallback` / `memo`.** The React Compiler handles memoization.
- **Read browser stores (localStorage) with `useSyncExternalStore`, not `useState`+`useEffect`.** The React Compiler's `react-hooks/set-state-in-effect` lint rejects the effect-then-setState pattern. `getServerSnapshot: () => false` gives a stable SSR/first-client render (no hydration mismatch); a module-level `subscribe` keeps its identity stable.
- **No `any` type** — don't silence the compiler with `as any` or `@ts-ignore` (`@ts-expect-error` is acceptable only with a written reason).
- **Prop union types** — extract named type aliases (e.g. `type ComponentSize = 'sm' | 'md' | 'lg'`) before referencing them in the props type, rather than inlining the union inside `ComponentProps`.
- **Class names** — use the `classnames` package, with default import as `classNames`, for conditional/combined class strings.
- **No long-winded comments** — one line, two at the very most. Never a paragraph above a rule or a function. Anything that needs more explanation than that goes in your reply to me, not in the file.
- **Formatting** — Prettier owns it, config in `.prettierrc`. Never hand-format against it.

### Styling

- **No component-scoped classes in `app/globals.css`**. `globals.css` holds the `@theme` tokens and the typography role utilities. Anything used by one component (transitions, custom filters, one-off layouts) goes in that component's JSX with Tailwind utilities.
- **Don't alias the Tailwind scale in `@theme`.** Reach for the raw scale or rem-based arbitrary values (`rounded-[0.625rem]`). The `@theme` is reserved for primitives that don't exist on Tailwind's scale (color palette, font families, motion easings, shadows).
- **Sizing values**: prefer the Tailwind v4 spacing scale over arbitrary values. When an arbitrary value is unavoidable (e.g. inside `clamp()`, or a measurement off the scale), prefer `rem` over `px`. The exception is values that are inherently non-rem — percentages (`basis-[42%]`), viewport units, etc.
- **Fonts are loaded via `next/font/google`** and exposed as CSS variables on `<html>` in the root layout `app/layout.tsx`. Reference them as `--font-…` in `globals.css`, never re-import the font.

### Accent CSS variables

Two scoped vars carry the category palette:

- `--accent` (saturated, for borders and markers — e.g. the blockquote left border)
- `--accent-light` (lighter tint, for link hover, decorations, soft borders)

Both default to peach on `:root` (in `app/globals.css`) and are overridden on the article's `<article>` wrapper via `accentToCssVar[accent]` / `accentToLightCssVar[accent]`.

Use the Tailwind v4 shorthand `text-(--accent)` / `border-(--accent-light)/25` rather than `text-[var(--accent)]`.

Components set `--accent` locally for their own tint — `Card` and `HeroSlideshow` tint their lift shadow, `CategoryBadge` tints its background — so `--accent` is _not_ reliably page-level on listing pages.

`--chrome-accent` is the page-chrome accent. Set **only** on `:root` (peach) and on the `body:has(article[data-accent])` hoists (the article accent), never by a component — so selection and focus rings stay peach outside article pages. Any focus ring reads `--chrome-accent`, never `--accent`. The brand dot is the deliberate exception: it reads `--accent` from the header, outside any component that overrides it.

## Quality

- Accessibility, performance, SEO, and security are non-negotiable, not afterthoughts. When writing UX/UI, account for keyboard navigation, semantic HTML, contrast, reduced motion, and Core Web Vitals. Invoke `web-quality-skills:web-quality-audit` for end-to-end web quality sweeps.
- Tap-target expansion — a link/button should always have a 44×44px hit area without changing its visible footprint. Extend the click zone via a `before:` pseudo-element with negative inset on a `relative` parent. Use `-inset-y-N` (vertical only) when neighbouring controls would overlap. One exception: **inline links inside a text flow** (a link inside a `<p>`, an `<li>`, or any sentence) never get one.

## Content model

- **Issues on disk**. `content/issues/<YYYY-MM-DD>/` holds `index.md` (frontmatter: `date`, `articles[]` ordered slug list; body: weekly intro) and one `<slug>.md` per article. Article slug = filename.
- **Article frontmatter**. `title`, `excerpt`, `summary` (accroche paragraph), `date` (ISO), `reading_time` (number), `sources` (flow-style `[ { label, url } ]`), `category` (a `CategorySlug` value — see Categories below). Body is raw markdown.
- **Body H1 contract**. The article body starts with `# {title}` matching the frontmatter `title`. The rendered article page H1 comes from this line.
- **Images**. Resolved by convention as `/images/<YYYY-MM-DD>/<slug>.jpg` — not in frontmatter.
- **Loader**. `loadIssue(date)` in `server/load-issue.ts` is the single entry point. `CONTENT_ROOT` lives in `server/constants.ts`; the `ISO_DATE` regex stays in `utils/constants.ts` — import them, don't redeclare per loader. `CONTENT_ROOT` resolves to `process.env.CONTENT_ROOT ?? <cwd>/content`; production leaves the env var unset, so it reads `content/`.
- **Static pages on disk**. `content/pages/<slug>.md` holds standalone pages (raw markdown, **no frontmatter**), loaded via `loadPage(slug)` in `server/load-page.ts` (returns the trimmed markdown string) and rendered with `StyledMarkdown`. Page `<title>`/description come from a `metadata` export in the route, not the file. See `app/mentions-legales/page.tsx`.
- **Frontmatter parser**. Hand-rolled in `server/parse-frontmatter.ts` (gray-matter–style `{ data, content }`). Covers scalars, block sequences, and flow sequences of inline mappings. Extend the parser rather than reach for a dep.
- **Types**. `ArticleMeta` is the card-view shape: the frontmatter fields camelCased (`reading_time` → `readingTime`) plus `slug` and `image`. `Article = ArticleMeta & { sources, content }` is the full editorial shape. Grids type `articles: ArticleMeta[]` so loader output flows in by subtyping.
- **Server Component data flow**. `app/page.tsx` and `app/archives/page.tsx` are async Server Components that derive issue dates from disk: `getLastIssueDate()` (home headline) and `getArchiveIssueDates()` (everything else) both build on `listIssueDates()` (issue folder names, most-recent-first). The home title uses `getExpectedLastMonday()` to decide between "la semaine dernière" and a `formatWeekRange()` label. No date is hardcoded.
- **Agent IA contract**. The markdown frontmatter format is the agreement with the AI agent generating these files. Schema changes (renames, new fields) require updating the agent's prompt in parallel.

### Categories

Category data is split by dimension:

- `types/category.ts` → `CategorySlug` literal union.
- `utils/categories.ts` → `CATEGORIES: readonly CategorySlug[]` (canonical display order).
- `utils/category-to-label.ts` → `Record<CategorySlug, string>` (French labels).
- `utils/category-to-accent.ts` → `Record<CategorySlug, AccentName>` (color accents).

Adding a new category means updating all these files, creating a new color accent and adding its `body:has(article[data-accent='<accent>'])` hoist in `globals.css` (see Accent CSS variables, under Code conventions).

## Workflow: TDD is the default

For any feature or bugfix implementation, follow the red → green → refactor loop:

1. **Red** — write the smallest failing test that captures the next behavior. Run it and confirm it fails for the expected reason.
2. **Green** — write the minimum production code to make it pass. Nothing more.
3. **Refactor** — clean up while green, with tests as the safety net.

Do not stack multiple behaviors into one test. If a bug slips through, the first step is a regression test that reproduces it — then the fix.

**"Fix the failing tests" doesn't mean "delete the code that makes them fail".** When tests break after intentional code changes (especially uncommitted working-tree edits), the source of truth is the new code — update the test assertions to match it. Never `git checkout`/revert just-made modifications to make a suite green. If the code itself looks wrong, propose a fix and let me decide; don't silently discard my work.

## Testing

### Already wired up

- `vitest.setup.ts` already loads `@testing-library/jest-dom/vitest` matchers, runs `cleanup()` after each test, and clears `localStorage` before each test — don't re-import matchers, call cleanup, or add a per-file `beforeEach(() => localStorage.clear())`.
- **jsdom provides no `window.matchMedia`.** `vitest.setup.ts` installs a mock defaulting to `matches: false` (no reduced-motion). Tests asserting the reduced-motion branch reassign `window.matchMedia` locally and restore it in `afterEach`.
- **`vitest.config.mts` aliases `server-only` to the package's `empty.js`** (the import throws outside Next's react-server layer) so loader tests can import `@/server` — keep that alias when adding server-side tests.
- **Content tests read a fixture tree, never the live `content/`.** `vitest.config.mts` sets `CONTENT_ROOT` to `__tests__/fixtures/content/` (three editions: `2026-05-18`, `2026-05-11`, `2026-05-04`; one `pages/mentions-legales.md`), so loaders and the Server Component pages run against fixed data. When a test needs a clock-dependent heading deterministic (the home "semaine dernière" label), freeze the clock with `vi.setSystemTime` to a date whose `getExpectedLastMonday()` matches the latest fixture edition. Edit the fixture tree, not the assertions, to change what tests see; keep it in sync with the frontmatter contract above.

### Writing tests

- All unit tests in `__tests__/` at the repo root, mirroring the source path (e.g. `app/page.tsx` → `__tests__/app/page.test.tsx`). Do not colocate `*.test.tsx` files next to source.
- Import the component under test via the `@/` alias, render with `@testing-library/react`, query by accessible role.
- **jsdom does not evaluate CSS at all.** For hover/focus behavior, assert on the structural contract (link has `group`, a decorative `aria-hidden` child has a `group-hover:` / `group-focus-visible:` variant) instead of computed style.
- **Tailwind visibility classes are ignored too** (`hidden`, `md:flex`, `lg:hidden`): a component rendering multiple sibling layouts (one per breakpoint) puts **all** of them in the DOM at once. Scope queries with `within(layoutContainer).getByRole(...)` to avoid matching duplicates across layouts.
- **Async Server Components**. Render via `render(await Page())` — `@testing-library/react` 16+ supports awaiting the component function before passing its JSX to `render`.
- **Fixture pattern**: when a component has multiple variants to test, declare a shared `commonProps` const at the top of the test file and create named fixtures via spread. Avoid inlining the JSX in each `test()` block.
- **Shared test fixtures across files** live in `__tests__/fixtures/<name>.ts`, exported as factory functions (`makeArticles(n)`) rather than fixed arrays — the call site stays explicit about the size needed. Imported via the `@/` alias.

### Mocking recipes

- **Mocking one loader from `@/server` while keeping the rest real**: `vi.mock('@/server', async () => { const actual = await vi.importActual<typeof import('@/server')>('@/server'); return { ...actual, loadArticle: vi.fn() }; })`. Server Components that import multiple loaders via the barrel will explode if the whole module is replaced — `importActual` preserves the rest while you stub the I/O-bound helper.
- **Mocking `notFound()` from `next/navigation`**: `vi.mock('next/navigation', () => ({ notFound: vi.fn(() => { throw new Error('NEXT_NOT_FOUND'); }) }))`, then assert with `await expect(Page(...)).rejects.toThrow('NEXT_NOT_FOUND')`. `notFound()` returns `never` in prod, but vitest needs a thrown value to abort the async page render.
- **Components reading `process.env`**: stub with `vi.stubEnv('KEY', 'value')` in the test and call `vi.unstubAllEnvs()` in `afterEach` so stubs don't leak across tests. See `__tests__/components/layout/footer.test.tsx`.

## Git

- Never commit, push, or open a PR without my explicit request.
- Never force-push, reset hard, or delete branches without my confirmation.
- Commit subject lines start with an infinitive verb (e.g. `Add`, `Fix`, `Refactor`, `Remove`, `Update`) — no past tense, no gerund, no ticket prefix unless asked.
- Commits are a subject line only, **90 characters max** — no body, no description.

## Definition of done

Before you tell me a task is done, run the following commands, report what they output and fix your work if necessary:

- `npx prettier --write <created or edited files only>`
- `npx next typegen`
- `npx tsc --noEmit`
- `npm run lint`
- `npm run format:check`
- `npm run test -- --run`

`prettier --write` fixes what you touched, `format:check` proves the rest of the repo is still clean — the overlap is deliberate, run both.

---

The block below is managed by `next dev` — leave its markers alone, or it gets appended again as a duplicate.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
