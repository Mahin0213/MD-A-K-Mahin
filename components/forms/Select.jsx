import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Select({ label, id, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "sel-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-2)", ...style }}>
      {label ? (
        <label htmlFor={uid} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: focus ? "var(--accent)" : "var(--text-muted)", transition: "var(--t-hover)" }}>{label}</label>
      ) : null}
      <div style={{ position: "relative", display: "flex", alignItems: "center", borderBottom: "1px solid " + (focus ? "var(--accent)" : "var(--border-hairline)"), transition: "var(--t-hover)" }}>
        <select
          id={uid}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          style={{ appearance: "none", background: "transparent", border: 0, borderRadius: 0, padding: "12px 24px 12px 0", color: "var(--text-strong)", font: "inherit", fontSize: "var(--fs-body)", width: "100%", outline: "none" }}
        >
          {options.map((o) => (
            <option key={typeof o === "string" ? o : o.value} value={typeof o === "string" ? o : o.value} style={{ background: "var(--surface-card)" }}>
              {typeof o === "string" ? o : o.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={16} style={{ position: "absolute", right: 0, color: "var(--text-muted)", pointerEvents: "none" }} />
      </div>
    </div>
  );
}
