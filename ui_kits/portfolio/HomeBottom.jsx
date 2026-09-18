const { Button, IconButton, SectionHeader, SectionLabel, CaseCard, MetricStat, Testimonial, Input, Textarea, Select, Checkbox, Tag, Divider } = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;

const PROJECTS = [
  { index: "01", title: "Henna Art by Masu", industry: "Henna artist · Leicester, UK", tags: ["Website build", "Local SEO", "On-page"], outcome: "Full site design, build, and local SEO for a Leicester bridal and party henna studio.", sample: false, href: "https://hennabymasu.com/", image: "../../assets/projects/hennabymasu-logo.png", imageFit: "contain", imageAlt: "Henna Art by Masu — gold HM monogram logo" },
  { index: "02", title: "Local Business SEO Growth", industry: "Local services", tags: ["Technical SEO", "Local", "Content"], outcome: "+180% organic sessions and a full map-pack takeover in seven months." },
  { index: "03", title: "SaaS Landing Page & SEO System", industry: "B2B SaaS", tags: ["Landing pages", "Keyword strategy"], outcome: "3.2× more qualified demo requests from the same ad spend." },
  { index: "04", title: "E-commerce Technical SEO", industry: "Retail", tags: ["Technical SEO", "Core Web Vitals"], outcome: "Index bloat cut by 61%, revenue from search up 44%." },
];

function Work({ onOpenCase }) {
  return (
    <section id="work" style={{ paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="03" label="Selected work" title="Selected work" lede="One live client site, plus sample projects until more client work is published." action={<Button variant="ghost" icon="arrow-right">All case studies</Button>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "var(--grid-gap)", marginTop: "var(--sp-7)" }}>
          {PROJECTS.map((p) => (
            <CaseCard key={p.index} {...p} onClick={p.href ? undefined : (e) => { e.preventDefault(); onOpenCase(p); }} target={p.href ? "_blank" : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Discover", "Understand goals, audience, competitors, and opportunities."],
  ["02", "Strategise", "Create the SEO and website growth plan."],
  ["03", "Build", "Design and launch a fast, intelligent website."],
  ["04", "Optimise", "Measure, improve, and scale performance."],
];

function Process() {
  return (
    <section id="process" style={{ paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="04" label="Process" title="A clear process. Built for growth." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "var(--grid-gap)", marginTop: "var(--sp-7)" }}>
          {STEPS.map(([i, t, d]) => (
            <div key={i} style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--sp-5)", display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", color: "var(--accent)" }}>{i}</span>
              <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", fontVariationSettings: '"wdth" 112' }}>{t}</h3>
              <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--fs-sm)" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  { quote: "Placeholder quote — replace with a real client comment about the SEO results.", name: "Client name", role: "Marketing lead, Company" },
  { quote: "Placeholder quote — replace with a comment about the website build and speed.", name: "Client name", role: "Founder, Company" },
  { quote: "Placeholder quote — replace with a comment about working process and reporting.", name: "Client name", role: "Director, Company" },
];

function Results() {
  const [i, setI] = React.useState(0);
  const go = (d) => setI((i + d + QUOTES.length) % QUOTES.length);
  return (
    <section id="results" style={{ paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="05" label="Results" title="Proof, not promises." lede="Placeholder figures — swap in verified client numbers before publishing." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "var(--grid-gap)", marginTop: "var(--sp-7)" }}>
          <MetricStat value="+180%" label="Organic traffic" note="Sample figure" />
          <MetricStat value="3.2×" label="More qualified leads" note="Sample figure" />
          <MetricStat value="90+" label="PageSpeed score" note="Sample figure" />
        </div>
        <div style={{ marginTop: "var(--sp-9)", borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--sp-7)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "var(--sp-7)", alignItems: "end" }}>
          <Testimonial {...QUOTES[i]} />
          <div style={{ display: "flex", gap: "var(--sp-3)", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", color: "var(--text-faint)" }}>{String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}</span>
            <IconButton icon="arrow-left" label="Previous testimonial" onClick={() => go(-1)} />
            <IconButton icon="arrow-right" label="Next testimonial" onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ onSubmit }) {
  return (
    <section id="contact" style={{ paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <SectionHeader index="06" label="Contact" title="Ready to make your website work harder?" lede="Let’s build a smarter digital presence that gets found and gets results." />
        <form
          onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
          style={{ marginTop: "var(--sp-7)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "var(--sp-6) var(--sp-7)" }}
        >
          <Input label="Name" required placeholder="Your name" />
          <Input label="Email" type="email" required placeholder="you@company.com" />
          <Input label="Company" placeholder="Company (optional)" />
          <Select label="What do you need?" options={["SEO strategy", "AI website build", "Both", "Not sure yet"]} />
          <Textarea label="Project details" rows={4} placeholder="Goals, timeline, current site" style={{ gridColumn: "1 / -1" }} />
          <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", gap: "var(--sp-5)", alignItems: "center", justifyContent: "space-between" }}>
            <Checkbox label="Send me the SEO audit checklist" />
            <Button type="submit" size="lg" icon="arrow-up-right">Send enquiry</Button>
          </div>
        </form>
        <div style={{ marginTop: "var(--sp-8)", display: "flex", flexWrap: "wrap", gap: "var(--sp-7)" }}>
          <div><SectionLabel>Email</SectionLabel><a href="mailto:akmahin068@gmail.com" style={{ display: "inline-block", marginTop: 8 }}>akmahin068@gmail.com</a></div>
          <div><SectionLabel>Phone</SectionLabel><a href="tel:+447487558646" style={{ display: "inline-block", marginTop: 8 }}>07487 558646</a></div>
          <div><SectionLabel>Social</SectionLabel><div style={{ display: "flex", gap: "var(--sp-4)", marginTop: 8 }}><a href="#">LinkedIn</a><a href="#">X / Twitter</a><a href="#">GitHub</a></div></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Work, Process, Results, Contact, PROJECTS, STEPS, QUOTES });
