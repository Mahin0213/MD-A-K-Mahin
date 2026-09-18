import React from "react";

export function Testimonial({ quote, name, role, style, ...rest }) {
  return (
    <figure {...rest} style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--sp-6)", ...style }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-d3)", lineHeight: "var(--lh-heading)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", maxWidth: "34ch", fontVariationSettings: '"wdth" var(--wdth-display-tight)' }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
        <span style={{ width: 24, height: 1, background: "var(--accent)" }} />
        <span style={{ color: "var(--text-strong)" }}>{name}</span>
        {role ? <span>{role}</span> : null}
      </figcaption>
    </figure>
  );
}
