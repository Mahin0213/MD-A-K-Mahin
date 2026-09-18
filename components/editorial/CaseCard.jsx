import React from "react";
import { Tag } from "../core/Tag.jsx";
import { Icon } from "../core/Icon.jsx";

export function CaseCard({ index, title, industry, tags = [], outcome, sample = true, image, imageFit = "cover", imageAlt = "Project visual placeholder", href = "#", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: "flex", flexDirection: "column", textDecoration: "none", border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border-soft)"),
        background: hover ? "var(--surface-card-hover)" : "var(--surface-card)", borderRadius: "var(--radius-2)", overflow: "hidden",
        transition: "var(--t-hover)", ...style,
      }}
    >
      <div role="img" aria-label={imageAlt} style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: "var(--surface-inset)" }}>
        <div style={{ position: "absolute", inset: 0, transform: hover ? "scale(var(--zoom-hover))" : "none", transition: "var(--t-transform), filter var(--dur-base) var(--ease-out)", background: image ? "var(--surface-inset)" : "repeating-linear-gradient(135deg,var(--ink-800) 0 2px,var(--ink-850) 2px 12px)", backgroundImage: image ? "url(" + image + ")" : undefined, backgroundSize: image ? (imageFit === "contain" ? "auto 72%" : "cover") : undefined, backgroundRepeat: "no-repeat", backgroundPosition: "center", filter: image && imageFit !== "contain" ? (hover ? "var(--img-filter-hover)" : "var(--img-filter)") : undefined }} />
        <span style={{ position: "absolute", top: "var(--sp-4)", left: "var(--sp-4)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", color: "var(--text-faint)" }}>{index}</span>
        {sample ? <span style={{ position: "absolute", top: "var(--sp-4)", right: "var(--sp-4)" }}><Tag tone="accent">Sample</Tag></span> : null}
        {image ? null : <span style={{ position: "absolute", bottom: "var(--sp-4)", left: "var(--sp-4)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-faint)" }}>Image placeholder</span>}
      </div>
      <div style={{ padding: "var(--sp-5)", display: "flex", flexDirection: "column", gap: "var(--sp-4)", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--sp-4)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{industry}</span>
        </div>
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-heading)", color: hover ? "var(--accent)" : "var(--text-strong)", transition: "var(--t-hover)", fontVariationSettings: '"wdth" var(--wdth-display)' }}>{title}</h3>
        {outcome ? <p style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--fs-sm)" }}>{outcome}</p> : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--sp-2)" }}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <span style={{ marginTop: "auto", paddingTop: "var(--sp-4)", borderTop: "1px solid var(--border-soft)", display: "inline-flex", alignItems: "center", gap: "var(--sp-2)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: hover ? "var(--accent)" : "var(--text-muted)", transition: "var(--t-hover)" }}>
          View case study <Icon name="arrow-up-right" size={14} />
        </span>
      </div>
    </a>
  );
}
