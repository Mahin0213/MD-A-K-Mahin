const { Button, SectionHeader, NumberedRow, PortraitFrame, Tag } = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;

function Hero({ onNavigate }) {
  return (
    <section id="top" style={{ position: "relative", paddingTop: "var(--sp-9)", paddingBottom: "var(--sp-8)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: .8, maskImage: "radial-gradient(120% 80% at 70% 40%, #000 0%, transparent 70%)" }}>
        <window.HeroCanvas height={620} />
      </div>
      <div style={{ ...wrap, position: "relative" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "var(--sp-6)" }}>SEO Expert · AI Web Builder</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-mega)", lineHeight: "var(--lh-display)", letterSpacing: "var(--ls-mega)", color: "var(--text-strong)", margin: 0, maxWidth: "13ch", fontVariationSettings: '"wdth" 116' }}>
          I build websites that rank, convert, and grow.
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--sp-8)", alignItems: "flex-end", justifyContent: "space-between", marginTop: "var(--sp-8)" }}>
          <p style={{ maxWidth: "var(--measure-narrow)", color: "var(--text-body)", fontSize: "var(--fs-lead)", margin: 0 }}>
            I’m Md A K Mahin. I combine practical SEO strategy with AI-powered web design to help ambitious businesses earn attention, traffic, and customers.
          </p>
          <div style={{ display: "flex", gap: "var(--sp-3)", flexWrap: "wrap" }}>
            <Button size="lg" icon="arrow-up-right" onClick={() => onNavigate("contact")}>Start a project</Button>
            <Button size="lg" variant="secondary" onClick={() => onNavigate("work")}>View my work</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="01" label="Intro" title="Search strategy meets intelligent web experiences." />
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(220px,.6fr)", gap: "var(--sp-8)", marginTop: "var(--sp-7)", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", maxWidth: "var(--measure)" }}>
            <p style={{ color: "var(--text-body)", fontSize: "var(--fs-lead)" }}>
              I help businesses become more visible on Google and turn that visibility into leads. That means honest technical SEO, content strategy built on real search demand, and fast websites assembled with AI tooling instead of six-month build cycles.
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              Most projects start with an audit, move into a prioritised roadmap, and end with a site that loads fast, reads well, and gets found. I work directly with founders and marketing leads — no account layers.
            </p>
            <window.AvailabilityNote />
          </div>
          <PortraitFrame src="../../assets/portrait-mahin.png" alt="Md A K Mahin, SEO expert and AI web builder" caption="Based in the UK · Working worldwide" />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ["01", "SEO Strategy & Audits", "A full technical and content audit that turns into a ranked, sequenced roadmap you can actually execute."],
  ["02", "Technical SEO & On-page Optimisation", "Crawlability, indexation, Core Web Vitals, and on-page structure fixed at the source, not patched."],
  ["03", "Keyword Research & Content Strategy", "Search demand mapped to buying intent, then turned into a content plan with owners and dates."],
  ["04", "AI Website Design & Development", "Fast, accessible sites designed and built with AI tooling in weeks rather than quarters."],
  ["05", "Landing Pages That Convert", "Focused pages with one job each, tested against real traffic and rewritten until they earn leads."],
  ["06", "SEO Automation & AI Workflows", "Reporting, internal linking, and content QA automated so the work compounds without more hours."],
];

function Services() {
  const [open, setOpen] = React.useState(null);
  return (
    <section id="services" style={{ paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="02" label="Services" title="What I do" lede="Six services, usually combined into one engagement. Hover or tap a row for detail." />
        <div style={{ marginTop: "var(--sp-7)", borderBottom: "1px solid var(--border-hairline)" }}>
          {SERVICES.map(([i, t, d]) => (
            <NumberedRow key={i} index={i} title={t} detail={d} expanded={open === i ? true : undefined} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Services, SERVICES });
