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
- Treats sources as first-class UI — numbered, named, with URLs in monospace, surfaced on every article page.
- Lets returning readers browse every past edition, week by week, filtered by category.

Success looks like: the author reads it weekly and trusts the curation; a handful of tech-adjacent friends bookmark it; a passerby coming from a portfolio link feels the editorial discipline rather than a generic Next.js demo. Traffic is not the metric; **return visits are**.

## Brand Personality

Three words: **editorial, sober, exact.**

- **Editorial.** The site reads like a small printed magazine that respects the reader's time. Long-form layout, balanced grids, deliberate whitespace. Not a feed.
- **Sober.** Dark plum velvet background, peach accent, restrained color. No theatrical visuals, no animated decoration, no AI-generated "vibes." The aesthetic earns trust by under-promising.
- **Exact.** Sources are visible. Article dates are visible. Reading time is visible. The recap declares what it is (a summary, not the source). Nothing is hidden behind a tone of authority the content doesn't have.

The voice in the article copy is matter-of-fact and verifiable: short sentences, no marketing adjectives, no excitement-for-its-own-sake. _"We tested three agents in production for a week. Honest verdict."_ — not _"This new model is a game-changer!"_

**No em dashes in interface copy.** This covers every string written in the codebase: section titles, labels, filters, empty states, metadata, alt text, ARIA names, error pages, route metadata. Use commas, colons, semicolons, periods, or parentheses. Article bodies are out of scope — they come from the content agent and follow the editorial voice above.

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

1. **Sources first, opinion second.** Every recap visibly cites its sources. The numbered source list is non-negotiable on the article page — readers must always be one click from the primary material. Every source is listed, named by its title, and reachable through a working link; dropping a source to "save space" is forbidden. The displayed URL is a preview, not the payload: it may be visually truncated.

2. **Practice what you preach.** The audience builds frontends for a living. Visible craft — typography, spacing, motion discipline, accessibility, performance — _is_ the editorial credibility. A janky site recapping the latest web platform news is self-defeating.

3. **Editorial calm over feature noise.** When in doubt, remove. No social-share rails, no inline newsletter capture interrupting paragraphs, no related-posts carousels. The page respects the reading without selling a next click.

4. **Time-respectful by default.** The reader's first interaction with any page should give them enough to decide whether to keep reading. The hero shows the lead piece. Section titles ground location. Category filters narrow without a page rebuild. If a listing ever needs breaking up, paginate — never infinite-scroll.

5. **Transparent about being AI-curated.** Recaps are recaps. The link to the source is the truth; the recap is convenience. Never adopt a voice of first-hand reportage the AI cannot honor. If a recap couldn't survive a side-by-side comparison with its source, rewrite it.

## Visual constraints

The north star is **"The Velvet Press"**: a small printed magazine pressed onto dark velvet. Editorial grids, generous whitespace around the lede, monospaced metadata that grounds the page in technical context without slipping into terminal kitsch. Curated, not algorithmic.

Every rule below is a constraint on what gets built next, not a description of what exists. The current values live in `app/globals.css` and in the components — read those, not this file, to know what something looks like today.

- **Tinted neutrals only.** Every neutral is tinted toward the plum hue family. `#fff`, `#000` and any pure grey are forbidden everywhere: backgrounds, borders, text, shadows, focus rings, scrims. If a value reads as neutral grey in the eyedropper, it has failed.
- **One saturated accent per surface.** Peach is the constant house accent; a category color is an article's voice for the duration of the visit. A single surface (a card, the hero, an article page) carries one saturated accent — never two. Listing pages are the deliberate exception: each card tints itself, so the accent is per-card, never page-level.
- **One family.** Geist and Geist Mono carry the entire system. No serif, no display script, no novelty pairing. Contrast comes from weight, scale, and the sans/mono split.
- **Mono is for markers, never for prose.** Dates, URLs, source numbers, category labels, filters, section eyebrows, the wordmark. Running text in mono is forbidden. Small mono labels are uppercase with positive letter-spacing — lowercase reads as a filename, not an editorial marker.
- **Body copy caps at `65ch`.** Metadata may sit narrower; nothing sits wider.
- **Flat at rest.** No ambient drop shadow on any surface in its default state. Shadow is a state: it appears on hover and focus, tinted to the surface's accent, alongside a small lift. A drop shadow visible without interaction is a bug.
- **Halos, not grey shadows.** When a surface needs atmospheric depth, the answer is a diffuse blurred halo in the accent color. Grey ambient shadows would flatten the velvet into anonymous dark mode.
- **Backdrop blur is rationed to two uses:** the sticky header, and the scrim of the command palette if it is ever built. No glass cards, no glass panels, no glass filter bars.
- **Modals are rationed to one:** a `⌘K` / `Ctrl K` command palette for reaching any article in two keystrokes. It is not built today, and it is the only modal that may ever be. Everything else resolves through inline disclosures, progressive sections, or full pages.
- **No gradient text.** Headlines are always a single solid color.
- **No colored side-stripes wider than 1px**, on cards, list items, or filters. The article blockquote's 2px marker is the one exception and is not to be extended.
- **Balance headlines.** Titles and headlines carry `text-wrap: balance`. The editorial feel depends on it.
- **Animate `opacity`, `transform`, `filter`, color and `box-shadow` only.** Never animate layout properties.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA** across all surfaces, with concrete commitments:

- **Keyboard navigable end-to-end.** The hero slideshow (dots and `←` / `→`), category filters, article navigation, footer links — all reachable and operable from the keyboard with visible focus rings (`:focus-visible` outline in the page-chrome accent).
- **Reduced motion is honored.** Hero auto-rotation, card hover lift, and every transition respect `prefers-reduced-motion: reduce`. Animations degrade to instantaneous or near-instantaneous state changes, never disappear without replacement.
- **Contrast minimums respected.** Cream on plum ≥ 12:1 for body text, secondary text ≥ 7:1; tertiary text is reserved for non-essential metadata. Category label and filter contrast is verified per accent. The values themselves live in `@theme`, in `app/globals.css`.
- **Semantic landmarks.** Each route has one `<main>`, navigation in `<header>` and `<footer>`, articles in `<article>`, the metadata column in `<aside>`. ARIA labels on every icon-only control.
- **Color is never the only carrier of meaning.** Category accents are always reinforced by their text label; active states use background + border in addition to color; focus rings use outline, not just a color shift.
- **Source links are first-class.** External link convention (`rel="noopener noreferrer"`, semantic anchor text), readable URL preview in monospace beneath the link title for screen readers and sighted users alike.
- **Locale is French (`lang="fr"`).** UI labels and article copy in French; code identifiers, documentation, and ARIA hidden helpers in English.

If a feature can't meet AA, it doesn't ship.
