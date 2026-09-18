const { Button, SectionLabel, MetricStat, Tag, Divider } = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;

function CaseStudy({ project, onBack }) {
  if (!project) return null;
  return (
    <article style={{ paddingTop: "var(--sp-8)", paddingBottom: "var(--section-y)" }}>
      <div style={wrap}>
        <Button variant="ghost" onClick={onBack} icon="arrow-left">Back to work</Button>
        <div style={{ marginTop: "var(--sp-6)", display: "flex", alignItems: "baseline", gap: "var(--sp-5)" }}>
          <SectionLabel index={project.index}>{project.industry}</SectionLabel>
          <Tag tone="accent">Sample project</Tag>
        </div>
        <h1 style={{ marginTop: "var(--sp-5)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-d1)", lineHeight: "var(--lh-display)", letterSpacing: "var(--ls-display)", color: "var(--text-strong)", maxWidth: "16ch", fontVariationSettings: '"wdth" 114' }}>{project.title}</h1>
        <div role="img" aria-label={project.title + " — hero image placeholder"} style={{ marginTop: "var(--sp-7)", aspectRatio: "21 / 9", border: "1px solid var(--border-soft)", background: "repeating-linear-gradient(135deg,var(--ink-850) 0 2px,var(--ink-900) 2px 12px)", display: "flex", alignItems: "flex-end", padding: "var(--sp-5)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-faint)" }}>Hero image placeholder — 21:9</span>
        </div>
        <div style={{ marginTop: "var(--sp-8)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "var(--grid-gap)" }}>
          <MetricStat value="+180%" label="Organic traffic" note="Sample figure" />
          <MetricStat value="3.2×" label="Qualified leads" note="Sample figure" />
          <MetricStat value="90+" label="PageSpeed score" note="Sample figure" />
        </div>
        <div style={{ marginTop: "var(--sp-9)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "var(--sp-8)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)" }}>
            <div><SectionLabel>Services</SectionLabel><div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>{project.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div></div>
            <div><SectionLabel>Timeline</SectionLabel><p style={{ marginTop: 10, color: "var(--text-body)", fontSize: "var(--fs-sm)" }}>Seven months, ongoing</p></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", maxWidth: "var(--measure)" }}>
            <p style={{ color: "var(--text-body)", fontSize: "var(--fs-lead)" }}>{project.outcome}</p>
            <p style={{ color: "var(--text-muted)" }}>Placeholder case-study copy. Replace with the brief, the constraints, what was changed, and what happened next. Keep it specific: what was measured, over what period, against what baseline.</p>
            <Divider tone="soft" />
            <Button variant="secondary" icon="arrow-up-right">Visit live site</Button>
          </div>
        </div>
      </div>
    </article>
  );
}
Object.assign(window, { CaseStudy });
