import React from "react";

export function MetricStat({ value, label, note, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)", paddingTop: "var(--sp-5)", borderTop: "1px solid var(--border-hairline)", ...style }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-d2)", lineHeight: 1, letterSpacing: "var(--ls-display)", color: "var(--accent)", fontVariationSettings: '"wdth" var(--wdth-display)' }}>{value}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-strong)" }}>{label}</span>
      {note ? <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>{note}</span> : null}
    </div>
  );
}
