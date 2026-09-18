import React from "react";
import { IconButton } from "../core/IconButton.jsx";

export function Dialog({ open = false, title, children, footer, onClose, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 40, display: "grid", placeItems: "center", padding: "var(--sp-5)" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(5,5,6,.78)", backdropFilter: "var(--blur-veil)" }} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        {...rest}
        style={{ position: "relative", width: "min(560px,100%)", background: "var(--surface-card)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-2)", boxShadow: "var(--shadow-overlay)", padding: "var(--sp-6)", display: "flex", flexDirection: "column", gap: "var(--sp-5)", ...style }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--sp-5)" }}>
          <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-h2)", letterSpacing: "var(--ls-heading)", color: "var(--text-strong)", fontVariationSettings: '"wdth" var(--wdth-display)' }}>{title}</h3>
          {onClose ? <IconButton icon="x" label="Close" size={44} onClick={onClose} /> : null}
        </div>
        <div style={{ color: "var(--text-body)", fontSize: "var(--fs-sm)" }}>{children}</div>
        {footer ? <div style={{ display: "flex", gap: "var(--sp-3)", justifyContent: "flex-end", paddingTop: "var(--sp-4)", borderTop: "1px solid var(--border-soft)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
