import React from "react";

export function Textarea({ label, id, rows = 4, required = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "ta-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", ...style }}>
      {label ? (
        <label htmlFor={uid} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: focus ? "var(--accent)" : "var(--text-muted)", transition: "var(--t-hover)" }}>
          {label}{required ? <span style={{ color: "var(--accent)" }}> *</span> : null}
        </label>
      ) : null}
      <textarea
        id={uid}
        rows={rows}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
        style={{
          background: "transparent",
          border: 0,
          borderBottom: "1px solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
          borderRadius: 0,
          padding: "12px 0",
          color: "var(--text-strong)",
          font: "inherit",
          fontSize: "var(--fs-body)",
          resize: "vertical",
          outline: "none",
          transition: "var(--t-hover)",
        }}
      />
    </div>
  );
}
