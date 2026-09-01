# Product

## Register

brand

## Users

Frontend developers — primarily the author, secondarily her tech-adjacent circle and the wider public web. They want to stay current on web platform, design engineering, AI tooling, and visual web design **without** having to wade through a fragmented feed of newsletters, Twitter threads, and blog posts. Context: they read this in short bursts (commute, morning coffee, between meetings), then occasionally return to dig deeper into a single piece.

The reading mode is _triage first, depth on demand_: a five-minute scan of the week, then a two-click descent into whichever piece is worth their time.

## Product Purpose

`tech.news` is a public, weekly, AI-curated digest of what matters in frontend, design engineering, web design, and applied AI. Each article is a recap of one or more external sources, written by an AI agent, with the original references surfaced in a sidebar so the reader can verify, dig deeper, or skip the recap entirely and go straight to the primary material.

What this product does, concretely:

- Surfaces a small, opinionated weekly selection (≈4 articles per week, plus a longer tail of secondary picks).
- Keeps the recap short enough to read in one sitting; defers depth to the linked sources.
- Treats sources as first-class UI — numbered, named, with URLs in monospace, sitting in the sidebar of every article.
- Lets returning readers find a past piece in two keystrokes via ⌘K.

Success looks like: the author reads it weekly and trusts the curation; a handful of tech-adjacent friends bookmark it; a passerby coming from a portfolio link feels the editorial discipline rather than a generic Next.js demo. Traffic is not the metric; **return visits are**.

## Brand Personality

Three words: **editorial, sober, exact.**

- **Editorial.** The site reads like a small printed magazine that respects the reader's time. Long-form layout, balanced grids, deliberate whitespace. Not a feed.
- **Sober.** Dark plum velvet background, peach accent, restrained color. No theatrical visuals, no animated decoration, no AI-generated "vibes." The aesthetic earns trust by under-promising.
- **Exact.** Sources are visible. Article dates are visible. Reading time is visible. The recap declares what it is (a summary, not the source). Nothing is hidden behind a tone of authority the content doesn't have.

The voice in the article copy is matter-of-fact and verifiable: short sentences, no marketing adjectives, no excitement-for-its-own-sake. _"We tested three agents in production for a week. Honest verdict."_ — not _"This new model is a game-changer!"_

Transparency about being AI-summarized is part of the brand, not a disclaimer. The reader should never feel deceived about the provenance of a sentence.

## Anti-references

Explicitly **not** these:

- **The SaaS landing-page kit.** Cream-on-navy, generic dashboard mockup hero, identical card grids, hero-metric template (big number + label + supporting stats + gradient accent).
- **The AI-tool aesthetic that has flooded 2024–2026.** Iridescent gradient cubes, holographic orbs, dark mode with purple-blue gradients, "intelligent" copy in feature pills, robotic mascots, "Powered by AI" stickers.
- **Neon cyberpunk on black.** Synthwave palettes, electric cyan/magenta on `#000`. Generic dark-mode tech blog energy.
- **Brutalist-for-the-sake-of-it.** Helvetica-on-yellow, intentional ugliness, oversized monospaced shouting. Form without editorial intent.
- **The generic dev blog.** Stock illustration of a person at a laptop, "Welcome to my blog" tone, breadcrumbs everywhere, sidebar full of author bio + recent posts + tag cloud.
- **Theatrical WebGL / scroll-hijacking.** 3D shader heroes, scroll-jacked storytelling, parallax everywhere. (One of the recapped articles is _literally about why this is over_ — practicing what we preach is part of the brand.)

If a screen could be confused with any of the above, it has failed.

## Design Principles

1. **Sources first, opinion second.** Every recap visibly cites its sources. The sidebar's numbered source list is non-negotiable on the article page — readers must always be one click from the primary material. Truncating sources to "save space" is forbidden.

2. **Practice what you preach.** The audience builds frontends for a living. Visible craft — typography, spacing, motion discipline, accessibility, performance — _is_ the editorial credibility. A janky site recapping the latest web platform news is self-defeating.

3. **Editorial calm over feature noise.** When in doubt, remove. No social-share rails, no inline newsletter capture interrupting paragraphs, no related-posts carousels. The page respects the reading without selling a next click.

4. **Time-respectful by default.** The reader's first interaction with any page should give them enough to decide whether to keep reading. Hero shows the lead piece. Section titles ground location. Cmd-K reaches any article in two keystrokes. Pagination beats infinite scroll.

5. **Transparent about being AI-curated.** Recaps are recaps. The link to the source is the truth; the recap is convenience. Never adopt a voice of first-hand reportage the AI cannot honor. If a recap couldn't survive a side-by-side comparison with its source, rewrite it.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA** across all surfaces, with concrete commitments:

- **Keyboard navigable end-to-end.** Hero arrows, category tabs, Cmd-K search modal, article navigation, footer links — all reachable and operable from the keyboard with visible focus rings (`:focus-visible` outline in the active accent color).
- **Reduced motion is honored.** Hero auto-rotation, card hover lift, and source list transitions all respect `prefers-reduced-motion: reduce`. Animations degrade to instantaneous or near-instantaneous state changes, never disappear without replacement.
- **Contrast minimums respected.** Cream `#F0E6D7` on plum `#1A1620` ≥ 12:1 for body text. Secondary text `#B0A695` ≥ 7:1. Tertiary text `#76695E` reserved for non-essential metadata. Pill text contrast verified per category accent.
- **Semantic landmarks.** Each route has one `<main>`, navigation in `<header>` and `<footer>`, articles in `<article>`, sidebar in `<aside>`. ARIA labels on icon-only buttons (archive, search, hero arrows, pagination).
- **Color is never the only carrier of meaning.** Category accents are reinforced by category labels in pills; active states use background + border in addition to color; focus rings use outline, not just color shift.
- **Source links are first-class.** External link convention (`rel="noopener noreferrer"`, semantic anchor text), readable URL preview in monospace beneath the link title for screen readers and sighted users alike.
- **Locale is French (`lang="fr"`).** UI labels and article copy in French; code identifiers, documentation, and ARIA hidden helpers in English.

If a feature can't meet AA, it doesn't ship.
