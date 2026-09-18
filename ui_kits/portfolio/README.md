# UI kit — Portfolio site

The single product in this system: a one-page personal portfolio for Md A K Mahin (SEO Expert & AI Web Builder), plus a case-study detail view.

## Files
- `index.html` — the interactive kit. Sticky nav, smooth-scroll nav, hover-reveal service rows, testimonial slider, case-card → case-study navigation, contact form → confirmation dialog. Carries the real meta title/description, Open Graph tags, and ProfessionalService/Person JSON-LD.
- `Nav.jsx` — sticky header (blurred veil), wordmark, footer, availability note.
- `HeroCanvas.jsx` — abstract search/AI node field on `<canvas>`; pauses under `prefers-reduced-motion`.
- `HomeTop.jsx` — Hero, About, Services (01–06 numbered rows).
- `HomeBottom.jsx` — Selected work, Process, Results + testimonial slider, Contact form.
- `CaseStudy.jsx` — case-study detail screen with 21:9 image placeholder and sample metrics.

## Editing
All copy, projects, steps, quotes, and metrics live in plain arrays at the top of `HomeTop.jsx` / `HomeBottom.jsx` (`SERVICES`, `PROJECTS`, `STEPS`, `QUOTES`). Sample projects and figures carry visible "Sample" markers — remove them only when real data replaces them.

Every image is a labelled placeholder (`PortraitFrame`, `CaseCard`, the case-study hero) carrying alt text; drop real images in under `filter: var(--img-filter)`.
