import React from "react";

export function Input({ label, id, type = "text", required = false, error, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "in-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", ...style }}>
      {label ? (
        <label htmlFor={uid} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: focus ? "var(--accent)" : "var(--text-muted)", transition: "var(--t-hover)" }}>
          {label}{required ? <span style={{ color: "var(--accent)" }}> *</span> : null}
        </label>
      ) : null}
      <input
        id={uid}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
        style={{
          background: "transparent",
          border: 0,
          borderBottom: "1px solid " + (error ? "var(--signal-err)" : focus ? "var(--accent)" : "var(--border-hairline)"),
          borderRadius: 0,
          padding: "12px 0",
          color: "var(--text-strong)",
          font: "inherit",
          fontSize: "var(--fs-body)",
          outline: "none",
          transition: "var(--t-hover)",
        }}
      />
      {error ? <span style={{ fontSize: "var(--fs-xs)", color: "var(--signal-err)" }}>{error}</span> : null}
    </div>
  );
}
