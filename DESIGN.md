---
name: tech.news
description: Velvet-plum editorial weekly for frontend developers — AI-curated, source-first, calm.
colors:
  bg-base: '#1A1620'
  bg-elevated: '#221C29'
  bg-overlay: '#2D2638'
  border-subtle: '#3A3145'
  text-primary: '#F0E6D7'
  text-secondary: '#B0A695'
  text-tertiary: '#76695E'
  accent-peach: '#E8A598'
  accent-peach-light: '#F0BFB4'
  cat-web-dev: '#2D8E91'
  cat-web-dev-light: '#5FB3B6'
  cat-design-eng: '#D9896E'
  cat-design-eng-light: '#E8AC97'
  cat-web-design: '#A85676'
  cat-web-design-light: '#C77F9B'
  cat-ai: '#8E5FA8'
  cat-ai-light: '#B189C6'
  cat-autres: '#8E7A6E'
  cat-autres-light: '#B0A095'
typography:
  display:
    fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, sans-serif'
    fontSize: 'clamp(36px, 4vw, 56px)'
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Geist, -apple-system, sans-serif'
    fontSize: 'clamp(28px, 3.2vw, 44px)'
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: '-0.025em'
  title:
    fontFamily: 'Geist, -apple-system, sans-serif'
    fontSize: '22px'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.012em'
  body:
    fontFamily: 'Geist, -apple-system, sans-serif'
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 'normal'
  label:
    fontFamily: 'Geist Mono, ui-monospace, monospace'
    fontSize: '10.5px'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0.09em'
rounded:
  pill: '999px'
  card: '14px'
  hero: '16px'
  image: '10px'
  control: '8px'
  chip: '5px'
spacing:
  hairline: '4px'
  xs: '8px'
  sm: '14px'
  md: '18px'
  lg: '24px'
  xl: '32px'
  xxl: '64px'
components:
  pill:
    backgroundColor: '{colors.accent-peach}'
    textColor: '{colors.text-primary}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '2px 8px 3px'
  tab-default:
    backgroundColor: 'transparent'
    textColor: '{colors.text-secondary}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '2px 8px 3px'
  tab-active:
    backgroundColor: '{colors.accent-peach}'
    textColor: '{colors.text-primary}'
    typography: '{typography.label}'
    rounded: '{rounded.pill}'
    padding: '2px 8px 3px'
  card:
    backgroundColor: '{colors.bg-elevated}'
    textColor: '{colors.text-primary}'
    rounded: '{rounded.card}'
    padding: '16px'
  icon-button:
    backgroundColor: 'transparent'
    textColor: '{colors.text-secondary}'
    rounded: '{rounded.control}'
    padding: '8px'
  cmdk-input:
    backgroundColor: 'transparent'
    textColor: '{colors.text-primary}'
    typography: '{typography.body}'
    rounded: '0'
    padding: '0'
---

# Design System: tech.news

## 1. Overview: The Velvet Press

**Creative North Star: "The Velvet Press"**

`tech.news` reads like a small printed magazine pressed onto a sheet of dark velvet. The page has the weight of a thoughtful weekly: balanced grids inherited from editorial print, generous whitespace around the lede, monospaced metadata that grounds the page in technical context without slipping into terminal kitsch. The reader feels they have been handed something curated, not algorithmic.

The aesthetic explicitly rejects the visual vocabulary of generic AI-tool marketing (iridescent gradients, holographic cubes, dark-mode-with-purple-blue-glow), the SaaS landing-page kit (cream-on-navy, hero-metric template), and the cyberpunk-on-black trope. It also refuses the opposite trap — minimalism so neutral it disappears. The plum-velvet background, peach accent, and gemstone category colors carry warmth and personality without volume.

Density is deliberately low. Most surfaces breathe with 24–64px of whitespace. Cards are restrained, never nested, and never decorated for their own sake. Motion is present but disciplined.

**Key Characteristics:**

- Plum-velvet base (`#1A1620`) tinted toward the warm side of the spectrum; never pure black.
- Cream body text (`#F0E6D7`) tuned for long-form reading on a dark surface.
- Peach as the steady house accent (`#E8A598`), category color as the situational accent (per-article tint of the wordmark dot, hero glow, source numbers, focus ring).
- Magazine grid: asymmetric feature row (1 large + 3 small) on top, uniform 3-column on the bottom.
- A barely-visible velvet grain overlay (SVG noise at 3.5% opacity, `mix-blend-mode: overlay`) gives surfaces a tactile fabric quality.

## 2. Colors: The Plum-Velvet Palette

A four-tier neutral scale tilted toward warm plum, anchored by a peach default accent and supplemented by four gemstone category accents (teal, copper, raspberry, iris). Every neutral is gently tinted — pure greys are forbidden.

### Primary

- **Velvet Peach** (`#E8A598`) — the default house accent. Used for the wordmark dot, the active "Tous" filter pill, hero progress dots, pagination active page, and the `::selection` color. The light variant **Peach Bloom** (`#F0BFB4`) carries link underlines inside article bodies.

### Secondary — Category Accents

Each editorial category gets a _saturated_ primary tone (for hero glow, source numbers, sidebar veil) and a _light_ tone (for pill text, link highlights, active dot fill). Both are kept low-chroma enough to coexist with the cream body text.

- **Coastal Teal** — Web Dev: `#2D8E91` / light `#5FB3B6`.
- **Copper Bloom** — Design Eng: `#D9896E` / light `#E8AC97`.
- **Velvet Raspberry** — Web Design: `#A85676` / light `#C77F9B`.
- **Iris Amethyst** — Actus IA: `#8E5FA8` / light `#B189C6`.
- **Warm Ash** — Autres: `#8E7A6E` / light `#B0A095`.

### Neutral

- **Plum Velvet** (`#1A1620`) — the base background. Tinted toward the plum hue family so that pure black is impossible. Used on `html`, `body`, and the sticky nav (via `color-mix` for translucency).
- **Velvet Step** (`#221C29`) — elevated surfaces (cards, image-loading background). One step lighter than the base, same hue family.
- **Velvet Overlay** (`#2D2638`) — the Cmd-K modal surface. Reads as "lifted out of the page."
- **Velvet Border** (`#3A3145`) — subtle dividers, card borders, kbd shortcut chips, nav bottom border.
- **Parchment Cream** (`#F0E6D7`) — primary body text and headings. Warm enough that it never reads as "white-on-black"; closer to vellum than to LCD.
- **Soft Ash** (`#B0A695`) — secondary text (excerpts, meta lines, footer text).
- **Distant Ash** (`#76695E`) — tertiary text reserved for non-essential metadata (timestamps, source URLs, kbd hint).

### Named Rules

**The Tinted-Neutral Rule.** Every neutral is tinted toward the plum hue family. `#fff`, `#000`, and any pure-grey value are forbidden across the entire surface — backgrounds, borders, text, shadows, focus rings, overlay scrims. If a value reads as "neutral grey" in the eyedropper, it has failed.

**The One-Accent-at-a-Time Rule.** On any given screen, only one accent color carries the saturated chroma. On the home page that is peach by default; on the article page it is the category color; on archives it is peach again. Never two saturated accents on the same page. Category pills carry the category color at low chroma (8-18% mix); the saturated tone only appears in the per-article hero glow, source numbers, and selection.

**The Category-Color-as-Voice Rule.** Category colors are situational accents tied to a single article's surface, not a permanent UI element. They appear on the article page (wordmark dot, sidebar veil, source numbers, focus rings) and recede the moment the reader leaves that article. The peach default is the constant; the category color is the article's voice for the duration of the visit.

## 3. Typography: Geist on Velvet

**Display Font:** Geist (`-apple-system, BlinkMacSystemFont, sans-serif` fallback)
**Body Font:** Geist (same family, different weight)
**Label / Mono Font:** Geist Mono (`ui-monospace, monospace` fallback)

**Character:** Geist sets a calm, neutral-but-warm voice. Its mono cut earns its place by carrying technical metadata (dates, URLs, kbd chips, source citations) without falling into terminal-blog kitsch. The pairing is intentionally single-family: the visual continuity from headline to footer mono reads as editorial discipline, not as font tourism.

### Hierarchy

- **Display** (Geist 600, `clamp(36px, 4vw, 56px)`, `1.04`, `-0.02em`) — page titles for non-article pages ("Toutes les éditions, semaine après semaine."). One per page, never inside a card.
- **Headline** (Geist 600, `clamp(28px, 3.2vw, 44px)`, `1.02`, `-0.025em`) — hero article title and article H1. The title goes to the top of the page, the byline stays under it.
- **Title** (Geist 600, `22px`, `1.2`, `-0.012em`) — large card title (large feature card scales to `clamp(24px, 2.2vw, 30px)`). Vertical card title scales down to `20px`; small horizontal card title scales further to `17px`. Always `text-wrap: balance`.
- **Article Body** (Geist 400, `17px`, `1.7`) — the article copy. Capped at `65ch` per line — never wider. Excerpt variant: `16px`, `1.55`, color `text-secondary`, `-webkit-line-clamp: 2`.
- **Label / Pill / Meta** (Geist Mono 500, `10.5px`, `1`, `+0.09em`, uppercase) — pills, tabs, section titles, hero meta line. The mono cut is the signal that says "this is a marker, not content."

In-article H2 (`30px`, `600`, `1.2`, `-0.014em`) and H3 (`22px`, `600`) inherit the display family. Code spans use Geist Mono at `0.88em` on a `bg-elevated` chip.

### Named Rules

**The Single-Family Rule.** Geist (sans + mono) carries the entire system. No second serif, no display script, no novelty font. The contrast comes from weight, scale, and the sans/mono split — not from a third family.

**The 65ch Rule.** Body copy is capped at `65ch`. Sidebars and metadata may sit narrower; nothing wider. A line of body text wider than 65ch breaks the reading rhythm and is forbidden.

**The Mono-for-Markers Rule.** Geist Mono is reserved for metadata that marks rather than narrates: dates, URLs, source numbers (`[1]`, `[2]`), category pills, tab labels, section title eyebrows, `kbd` chips, the wordmark itself. It is not a body or paragraph face. Mono running text is forbidden.

**The Uppercase-Mono-for-Tags Rule.** All `10.5px` mono labels are uppercase with `+0.09em` letter-spacing. Lowercase mono labels at small sizes are forbidden — they read as filenames, not as editorial markers.

## 4. Elevation: Flat with Halos

The system is **flat by default**. Surfaces sit on a single plane; the velvet base is the canvas. Depth is conveyed through three devices, in order of frequency:

1. **Tonal layering.** The four-step neutral scale (`bg-base` → `bg-elevated` → `bg-overlay` → `border-subtle`) does most of the lifting. Cards sit on `bg-elevated`; the Cmd-K modal sits on `bg-overlay`. No drop shadows for ambient depth at rest.
2. **Diffuse halos.** Color is the elevation cue. The hero column carries a `60px`-blurred radial gradient in the active category color at 18% mix. The article sidebar gets a wide blurred veil (`50px` blur, double radial) in the category color at 35%/14% mix. The hero image of every article gets a faint outward halo at 14% mix. These are _atmospheric_, not lifting.
3. **State shadows.** Hover on cards adds a single tinted drop shadow (`0 14px 32px -16px`) at 60% of the category color, plus a `-4px translateY` lift. There is no rest-state shadow; the shadow is the state.

The Cmd-K modal is the one exception that earns a real ambient shadow (`0 30px 80px -20px rgba(0,0,0,0.6)`) to detach it from the velvet page underneath.

### Shadow Vocabulary

- **Card Lift** (`box-shadow: 0 14px 32px -16px color-mix(in oklab, var(--c-cat-strong) 60%, transparent), 0 2px 8px -4px color-mix(in oklab, var(--c-cat-strong) 30%, transparent);`) — hover-only on cards. Tinted to the article's category color so the lift feels like the article itself rising.
- **Modal Detach** (`box-shadow: 0 30px 80px -20px rgba(0,0,0,0.6);`) — Cmd-K only. The single ambient drop shadow in the system.
- **Image Inner Stroke** (`box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--text-primary) 4-5%, transparent);`) — applied via `::after` on hero and card images. A whisper-thin inner line that prevents the image edge from disappearing into the velvet background.

### Named Rules

**The Flat-At-Rest Rule.** Cards, sections, and surfaces carry no shadow in their default state. Shadow appears only on hover, only on cards, only tinted to the category color. A drop-shadow visible without interaction is a bug.

**The Halo-Over-Shadow Rule.** When depth is needed for atmosphere (hero, article sidebar, article image), the answer is a blurred colored halo, not a grey shadow. Halos carry warmth and category identity; grey shadows would flatten the velvet into anonymous dark mode.

**The No-Glassmorphism Rule.** Backdrop blur is allowed exactly twice in the system: the sticky nav (`blur(6px)` over a 85%-opacity base) and the Cmd-K backdrop scrim (`blur(8px)` over 60%). Glass cards, glass panels, glass tab bars are forbidden.

## 5. Components

### Buttons

- **Shape:** No primary CTA button exists in the system — content links and pills carry the load. The closest things are the **Icon Button** (nav archive / search) and the **Hero Arrow** (slideshow prev/next), both circular-ish with `rounded.control` (`8px`) or full `rounded.pill` (`999px`).
- **Icon Button:** `8px` padding, `text-secondary` foreground, `border-radius: 8px`. Hover lifts to `text-primary` and adds a `6%`-opacity surface background. The search variant nests a `kbd` chip (Geist Mono `12px`, `text-tertiary`, `1px var(--border-subtle)` border, `5px` radius) for the `⌘K` / `Ctrl K` hint.
- **Hero Arrow:** `36×36px`, full-pill, `text-secondary`. Same hover treatment as Icon Button.

### Pills (Category Pills)

The signature filter and metadata element. **Pills carry the category color at low chroma, never at full saturation.**

- **Geometry:** `border-radius: 999px`, padding `2px 8px 3px`, `width: fit-content` so it never stretches.
- **Color recipe:** background = category color at `9%` mix; text = category color at `85%` mixed with `text-primary`; border = `1px` solid category color at `18%` mix. The category color is supplied via `--p-cat` custom property and falls back to `--cat-color` (the active accent).
- **Typography:** Geist Mono `10.5px`, uppercase, `+0.09em` letter-spacing, `500` weight.

### Tabs (Filter Tabs)

Same skin as Pills, with two states.

- **Default:** transparent background, `border: 1px solid var(--border-subtle)`, `text-secondary`.
- **Active:** identical recipe to the pill — category-tinted background, border, and text — supplied via `--t-cat`.
- The "Tous" tab is a special case: it always carries the peach default (`#E8A598`) when active, so the user has a constant anchor between category filters.
- Tab bar sits on the page with `padding: 8px 0 28px`, `border-bottom: 1px solid var(--border-subtle)`, and `margin-bottom: 40px`.

### Cards

Three siblings sharing one recipe.

- **Shape:** `border-radius: 14px` outer, `10px` for the image inside.
- **Background:** `#221C29` (`bg-elevated`).
- **Border:** `1px` solid `--border-subtle`.
- **Internal padding:** `16px`.
- **Image:** always `16:9`, `border-radius: 10px`, `object-fit: cover`, hover applies `filter: saturate(1.06) brightness(1.02)` over `320ms`.
- **Hover state:** `transform: translateY(-4px)` + category-tinted Card Lift shadow. _No background or border color change on hover_ — the shadow + lift are the state. This was an explicit author decision (annulé deux fois dans la conversation de design).
- **Variants:** `card-lg` (image + pill + 30px title + excerpt clamped to 2 lines), `card-sm` (42% / 1fr grid, image left, pill + 17px title right), `card-v` (vertical stack, image + pill + 20px title; uniform 3-column grid).

### Hero Slideshow

The home page's anchor. A `1.85fr / 1fr` grid: a `16:9` image stack on the left, an editorial text column on the right.

- **Image stack:** absolutely-positioned crossfade between slides, `opacity` transition over `400ms`. Auto-advance every `6s`, paused on hover, controllable via dots, arrows, or `←` / `→` arrow keys.
- **Glow:** a `60px`-blurred radial gradient in the active category color sits behind the image column at 18% mix. It updates with the slide.
- **Text column:** category pill + 44px headline + meta row (clock icon + reading time, mono date right-aligned). Bottom row: `2-4px` pill-shaped dots (active dot stretches to `32px` width in category color) + circular prev/next arrows.

### Page Grids — Home

The home page composes three grid layers, top to bottom, each with its own rhythm.

1. **Hero Grid** (`.hero-grid`) — the first layer.
   - Two columns: `1.85fr / 1fr`, gap `clamp(28px, 4vw, 56px)`, `align-items: stretch`.
   - Left column: the `16:9` image stack (the slideshow). Right column: editorial text + meta + dots/arrows row.
   - Sits inside `.hero` which adds `clamp(32px, 5vw, 56px) 0 clamp(40px, 5vw, 72px)` outer padding and hosts the absolutely-positioned hero glow behind it.
   - Below `900px`: collapses to a single column; the image keeps its `16:9` aspect ratio and the text stacks beneath.

2. **Feature Grid** (`.feature-grid`) — the second layer, immediately after the category tabs.
   - Two columns: `1fr / 1fr`, gap `32px`.
   - Left column: one **Large Feature Card** (`card-lg`).
   - Right column: a vertical stack of **three Small Horizontal Cards** (`card-sm`) distributed with `justify-content: space-between` and a `32px` minimum gap, so the stack heights matches the large card's height.
   - This is the **week's editorial selection** — four pieces, one promoted, three peers.
   - Below `900px`: collapses to a single column; large card first, then the three small cards stack vertically.

3. **Uniform Grid** (`.uniform-grid`) — the third layer, the "long tail" of the week.
   - Three columns: `repeat(3, 1fr)`, gap `32px`.
   - Cells: **Vertical Uniform Cards** (`card-v`) — image + pill + 20px title.
   - Sits inside a `.week-block` (margin `32px 0`) for vertical rhythm.
   - Below `900px`: drops to `1fr 1fr` (2 columns). Below `560px`: drops to a single column.

**Gap rhythm:** all internal grid gaps land at `32px`. Vertical breathing between major blocks (hero → feature → uniform) is also `32px` via `.week-block` margin. The category tab bar is the only divider that adds `40px` below itself (`margin-bottom: 40px` on `.tabs`).

The filter tabs apply to **both** the feature grid and the uniform grid — when a category is selected, the feature row picks the first 4 matching articles and the uniform row gets the rest. The layout shape (`1 large + 3 small` + `3-col tail`) is constant across filters.

### Page Grids — Archives

The archives page is a stack of week-blocks, each carrying a single 3-column grid.

- **Page header**: a `40px 0 8px` padded block with an "Archives" mono eyebrow (Geist Mono `12px`, uppercase, `+0.1em`) and a Display-sized headline (`clamp(36px, 4vw, 56px)`, weight 600, `-0.02em`, `text-wrap: balance`) below it. Bottom margin `32px`.
- **Filter tab bar**: identical to the home tab bar (`.tabs`), with all five category options plus "Tous" always visible (the `hasOthers` flag is forced `true` on archives).
- **Week blocks**: one `<section class="week-block">` per visible week.
  - First week-block gets `margin-top: 64px` (extra breathing below the tabs).
  - Subsequent week-blocks get `margin: 32px 0`.
  - Each week starts with a `.section-title` (Geist Mono `12px`, uppercase, `+0.1em`, `text-secondary`) followed by a trailing hairline rule that extends to fill the remaining row width.
  - Below it: a single **Uniform Grid** (`.uniform-grid` with `margin-top: 24px`) of `card-v` cells — same recipe as the home long-tail grid.
- **Pagination** (`.pagination`): centered horizontal row, `margin: 64px 0 32px`, Geist Mono `13px`. Active page in the active accent color, ellipsis at `text-tertiary`, prev/next labels in plain text. No background pill, no border — just text with a subtle hover background tint.

The archives layout is intentionally **the same shape as the home uniform grid, repeated weekly**, so a returning reader can scan multiple weeks with the same mental model. The feature grid (1 large + 3 small) is reserved for the current week's editorial selection; archives never use it.

### Cmd-K Search Modal

A blurred-scrim modal that opens from `⌘K` / `Ctrl K` or the nav search button.

- **Backdrop:** fixed `inset: 0`, `bg-base` at 60% opacity with `blur(8px)`. Fade-in over `180ms`.
- **Panel:** `min(640px, 92vw)` wide, `max-height: 70vh`, sits at `padding-top: 14vh`. Background `bg-overlay`, `1px solid border-default`, `border-radius: 16px`, Modal Detach shadow. Scale-in over `180ms`.
- **Input row:** search icon left, transparent input center, `esc` chip right. The chip mirrors the kbd chip styling.
- **Results:** grouped by category. Group header sits in the category color (Geist Mono `10.5px`, uppercase). Each result row has a `2px` left border that turns to the category color when active (`active` toggled by hover or arrow keys). Empty state and "no results" each carry a single muted line of copy.

### Article Sidebar

The signature reading surface — a sticky 280px column on the left of the article.

- **Layout:** `position: sticky; top: 88px`, vertical stack with `24px` gaps.
- **Veil (background atmosphere):** an absolutely-positioned `420px`-tall element bleeding past the sidebar's edges (`top: -120px; left: -120px; right: -40px`), with two stacked radial gradients in the category color (35%/14% mix) and `filter: blur(50px)`. Sits behind the content (`z-index: -1`).
- **Top row:** `← Retour` link (Geist Mono `12px`, `text-secondary`, hover `text-primary`) and the category pill on the same line.
- **Summary:** `17px` Geist regular, `1.55`, `text-primary` — a chapeau paragraph distinct from the article body.
- **Meta grid:** 2-column grid with `Publié` / `Lecture` rows. Labels `10.5px` mono uppercase `text-tertiary`; values `13px` mono `text-primary`.
- **Sources block:** "— Sources" label (`10.5px` mono uppercase tertiary), then an ordered list with `20px` gaps. Each source has three lines:
  1. `[n]` source number (`13px` Geist Mono, category color).
  2. Title (`14px` Geist regular, `text-primary`, no underline, hover shifts to `cat-light`).
  3. URL (`12px` Geist Mono, `text-tertiary`).
- **Border separator** (between meta and sources, between summary and meta): `1px solid` at 50% mix of the category color.

### Navigation

- **Style:** sticky `64px` header. Background = `bg-base` at 85% opacity with `blur(6px)` (the controlled glassmorphism exception). `1px solid border-subtle` bottom.
- **Wordmark:** `tech.news` in Geist Mono `15px`, `+0.04em`, with an `8px` round dot suffix. The dot color is the default peach **everywhere except on the article page**, where it picks up the article's category color. The dot has a `16px` colored glow (`box-shadow` in the dot's own color at 70% mix).
- **Right side:** icon button stack (archives + search). Spacing `18px`.

## 6. Do's and Don'ts

### Do:

- **Do** tint every neutral toward the plum hue family. `#1A1620`, `#221C29`, `#2D2638`, `#3A3145` are the four steps. Any new neutral must be derived from this same hue family.
- **Do** use the peach (`#E8A598`) as the default house accent. Reserve category colors for situational, per-article accents.
- **Do** cap body line length at `65ch`. Anything wider breaks the reading.
- **Do** use Geist Mono for markers (dates, URLs, source numbers, pills, section titles, kbd chips) and Geist sans for everything else.
- **Do** keep cards flat at rest. Hover adds the category-tinted lift shadow and `-4px translateY`, nothing else.
- **Do** use diffuse colored halos for atmospheric depth (hero glow, sidebar veil, article hero halo). They carry the brand warmth.
- **Do** wrap headlines and titles with `text-wrap: balance`. The editorial feel depends on it.
- **Do** respect `prefers-reduced-motion: reduce`. All transitions collapse to `100ms` under that media query.
- **Do** make sources first-class in every article. Numbered, named, with URLs in mono. Truncation is forbidden.

### Don't:

- **Don't** use `#000` or `#fff` anywhere. Pure black and pure white are forbidden across backgrounds, text, borders, shadows, and overlays alike.
- **Don't** use side-stripe borders greater than 1px as a colored accent on cards, list items, or pills. The only exception is the `2px` colored marker on the active Cmd-K result and the article blockquote — both already present and not to be extended.
- **Don't** apply background-clip gradient text. The headline is always a single solid color.
- **Don't** introduce glassmorphism beyond the two sanctioned uses (nav blur + Cmd-K scrim). No glass cards, no glass tab bars, no glass sidebars.
- **Don't** use the hero-metric template (big number + small label + supporting stats + gradient accent). It belongs to SaaS landing pages, not to this editorial surface.
- **Don't** build identical card grids of icon + heading + text. Vary card sizes intentionally; cards earn their slot.
- **Don't** reach for a modal as the first answer. Cmd-K is the _only_ sanctioned modal. Inline disclosures, progressive sections, or full pages come first.
- **Don't** add a second font family. Geist + Geist Mono carries everything. No serif, no display script, no novelty pairing.
- **Don't** add ambient drop shadows to cards or surfaces at rest. Shadow is a state; flat is the default.
- **Don't** animate CSS layout properties. Stick to `opacity`, `transform`, `filter`, and color/box-shadow transitions.
- **Don't** use em dashes (`—` or `--`) in user-facing copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** dress AI-generated recaps in a voice of first-hand reportage. The recap is a recap; the source is the truth.
- **Don't** introduce SaaS cream-on-navy, neon cyberpunk, iridescent AI-tool gradients, holographic orbs, or brutalist-for-its-own-sake. These are explicitly out of scope (see `PRODUCT.md` anti-references).
