import React from "react";
import { SectionLabel } from "../core/SectionLabel.jsx";

export function SectionHeader({ index, label, title, lede, action, style, ...rest }) {
  return (
    <header {...rest} style={{ display: "flex", flexDirection: "column", gap: "var(--sp-5)", ...style }}>
      {label ? <SectionLabel index={index}>{label}</SectionLabel> : null}
      <hr style={{ border: 0, borderTop: "1px solid var(--border-hairline)", margin: 0 }} />
      <div style={{ display: "flex", gap: "var(--sp-8)", alignItems: "flex-end", flexWrap: "wrap", justifyContent: "space-between", paddingTop: "var(--sp-4)" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-d2)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-display)", color: "var(--text-strong)", maxWidth: "22ch", margin: 0, fontVariationSettings: '"wdth" var(--wdth-display)' }}>{title}</h2>
        {lede ? <p style={{ maxWidth: "var(--measure-narrow)", color: "var(--text-body)", margin: 0 }}>{lede}</p> : null}
        {action}
      </div>
    </header>
  );
}
