# Md A K Mahin — Design System

A personal-brand design system for **Md A K Mahin, SEO Expert & AI Web Builder**. It exists to produce one product surface — a premium single-page portfolio site — plus any collateral in the same voice.

**Positioning:** “Helping businesses grow with search-first strategy and AI-powered websites.”

## Sources

No codebase, Figma file, brand kit, font binaries, logo, or deck was supplied. The system was authored from a written brief only. The brief named **gatzara.studio** as an energy reference (bold editorial typography, dark studio aesthetic, oversized headlines, restrained kinetic motion) — nothing was copied from it; every token, component and screen here is original.

Consequences a reader should know about:
- **No logo exists for the personal brand.** It renders as a wordmark set in Archivo Semibold with a lime full stop (see `guidelines/brand-wordmark.card.html`). No mark was drawn or invented. The **company** mark — AK Elevate Digital — was supplied later and lives at `assets/ak-elevate-digital-logo.svg`; it appears in the site footer.
- **No supplied fonts.** Archivo, IBM Plex Sans and IBM Plex Mono are chosen faces loaded from Google Fonts via `tokens/fonts.css`. Because they arrive through a Google `@import`, the compiler reports 0 `@font-face` rules — that is expected, not a bug. If self-hosted binaries are wanted, drop them in `assets/fonts/` and replace the import with local `@font-face` rules.
- **No images.** Every visual slot is a labelled placeholder carrying alt text.

---

## Content fundamentals

**Voice: first person, plain, specific.** Mahin speaks as “I”, addresses the reader as “you”, and never as “we” or “our team”. Claims are concrete and checkable.

- Headlines are declarative sentences with terminal punctuation: “I build websites that rank, convert, and grow.” / “A clear process. Built for growth.” / “Search strategy meets intelligent web experiences.”
- Body copy explains mechanism, not adjectives: “Crawlability, indexation, Core Web Vitals, and on-page structure fixed at the source, not patched.” Never “cutting-edge solutions” or “digital excellence”.
- Service names are title-case noun phrases, ampersands allowed: “SEO Strategy & Audits”, “Landing Pages That Convert”.
- Labels and buttons are UPPERCASE mono, two to four words: “START A PROJECT”, “VIEW CASE STUDY”, “AVAILABLE FOR FREELANCE PROJECTS WORLDWIDE”. Sentence case never appears in a button.
- Numbers do the persuading, and placeholders admit they are placeholders: “+180% Organic traffic — Sample figure”. Every unverified project or metric carries a visible “Sample” marker until real data replaces it.
- Section eyebrows are zero-padded numerals: 01 Intro, 02 Services, 03 Selected work, 04 Process, 05 Results, 06 Contact.
- British-leaning spelling as given in the brief (“Optimisation”, “Strategise”). Keep it consistent.
- **No emoji, ever.** No exclamation marks. No rhetorical questions except the single CTA headline. No “unlock”, “supercharge”, “game-changing”, “in today’s digital landscape”.
- Sentences run short to medium; paragraphs are two to four sentences and never exceed 64 characters per line.

---

## Visual foundations

**Colour.** Near-black charcoal ground (`--bg-page` #0A0A0B) with a five-step ink ramp for surfaces (#050506 → #5A5A66) and warm off-whites for text (#F5F4EF → #C9C8C1). Pure white and pure black are never used. Exactly one accent: **electric lime #C8FF00**, held to roughly 5% of any view — primary buttons, the active row, metric numbers, section numbers, the wordmark full stop. Semantic colours (`--signal-ok/warn/err`) appear in forms only. Contrast: lime on page 15.9:1, ink on lime 18.6:1, `--text-body` on page 9.8:1.

**Type.** Archivo (variable width axis, ships at wdth 100 and 112) for display; IBM Plex Sans for body; IBM Plex Mono for every label, number, button and caption. Display sizes are fluid clamps from `--fs-d3` to `--fs-mega`, line-height 0.92–1.18, tracking −0.045em to −0.018em. Body is 17px / 1.62 with a 44–64ch measure. Mono labels are 11px uppercase at 0.16em tracking. Only weights 300/400/500/600 ship — no black, no italics outside quotes.

**Spacing & layout.** 4px base scale to 180px. Sections are separated by `--section-y` (clamp 84–180px) and framed by `--gutter` (clamp 20–88px) inside a 1560px max width. Content sits on a 12-column mental grid with `--grid-gap` clamp 16–32px; cards use `repeat(auto-fit, minmax(320px,1fr))`. Every section opens with a numbered eyebrow directly above a full-width hairline rule — the rule, not a box, is what separates things.

**Backgrounds.** Flat charcoal. No gradients as decoration; the only gradients in the system are `--veil-scrim` (bottom-up scrim under full-bleed media) and the radial mask on the hero canvas. A fixed 4.5%-opacity SVG noise layer (`.ds-grain`) sits over the whole page in screen blend — visible as texture, never as pattern. No repeating patterns, no illustration, no stock photography.

**Borders, cards, shadows.** 1px hairlines carry all structure: `--border-hairline` #2A2A31 for rules, `--border-soft` (9% paper) for card edges, `--border-accent` for active state. Corners are sharp — 0/2/4/8px; the pill radius is reserved for `Tag`. A card is a surface shift (#101012 on #0A0A0B) plus a hairline, with no shadow. The only shadow in the system is `--shadow-overlay` on `Dialog`, the only place backdrop blur appears besides the sticky nav (`--blur-nav`, 72% veil).

**Motion.** Purposeful, ease-out, never bouncy. Hover/colour 180ms, transforms 280ms, overlays 520ms, scroll reveals 820ms with a 28px rise and 70ms stagger. Easing is `--ease-editorial` cubic-bezier(.22,.61,.24,1) for reveals and `--ease-out` cubic-bezier(.16,1,.3,1) for interactions. Parallax is limited to 6% depth. `prefers-reduced-motion` collapses every duration to 1ms and zeroes offsets, zoom, and press scale — tokens handle this globally.

**States.** Hover: text and border turn lime, list titles slide 10px right, images scale 1.04 and regain colour; opacity is never used to signal hover. Press: `scale(0.985)`, accent darkens to `--accent-press`. Focus: 2px lime ring offset by a 2px page-coloured ring (`--ring-focus`), never removed. Disabled: 38% opacity, `not-allowed`.

**Imagery.** Grayscale, slightly darkened at rest (`--img-filter`), colour returning on hover (`--img-filter-hover`). Cool, high-contrast, editorial — no warm filters, no lifestyle stock. Placeholders are diagonal hatch fills with their alt text printed inside so nothing ships unlabelled.

---

## Iconography

**Lucide** (v0.454, static SVG from unpkg) is the icon set, loaded through the `Icon` component as a CSS mask so glyphs always paint in `currentColor`. This is a substitution: the brief supplied no icon assets. Lucide was chosen for its 1.5–2px stroke, rounded caps, and 24px grid, which match the system's hairline weight. Swap the CDN base in `components/core/Icon.jsx` to self-host.

Rules: icons are functional only — arrows, chevrons, close, check, social. No decorative icon rows, no icons inside headings, no icon-per-service. Sizes 14 / 16 / 18 / 20 / 28. Never emoji, never unicode arrows or dingbats as icons, never hand-drawn SVG. The glyphs in use: `arrow-up-right` (external/CTA), `arrow-right` / `arrow-left` (sequence), `chevron-down` (select), `check` (checkbox), `x` (close), `mail`, `linkedin`, `twitter`, `github`.

---

## Index

- `styles.css` — the one file consumers link; `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css` (element resets, `.ds-label`, `.ds-grain`).
- `assets/` — `ak-elevate-digital-logo.svg` (company mark, supplied), `projects/hennabymasu-logo.png` (client mark).
- `guidelines/` — 20 specimen cards: colours (surfaces, off-whites, accent, status, text roles), type (display scale, hero, body, mono labels, numerals, weights), spacing (scale, rhythm, radii), brand (hairlines, grain, motion, imagery, wordmark).
- `components/` — see below. Each has `.jsx`, `.d.ts`, `.prompt.md`; each directory has one card HTML.
- `ui_kits/portfolio/` — the portfolio site kit. See its `README.md`.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent Skills entry point.

### Components

**core/** — `Button`, `IconButton`, `Icon`, `Tag`, `SectionLabel`, `Divider`
**forms/** — `Input`, `Textarea`, `Select`, `Checkbox`
**editorial/** — `SectionHeader`, `NumberedRow`, `CaseCard`, `MetricStat`, `Testimonial`, `PortraitFrame`
**overlay/** — `Dialog`

**Intentional additions.** No source defined a component inventory, so this is an authored set sized to the portfolio's needs. Two notes: `Icon` exists as a wrapper so no one hand-draws SVG; the standard `Radio`, `Switch`, `Tabs`, `Toast` and `Tooltip` primitives were deliberately **not** built — the product has no surface for them. Add them only when a real screen needs one.
