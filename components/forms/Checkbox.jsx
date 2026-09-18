import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Checkbox({ label, checked, defaultChecked, onChange, id, style, ...rest }) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const uid = id || "cb-" + (label || "opt").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <label htmlFor={uid} style={{ display: "inline-flex", alignItems: "center", gap: "var(--sp-3)", cursor: "pointer", color: "var(--text-body)", fontSize: "var(--fs-sm)", ...style }}>
      <input
        id={uid}
        type="checkbox"
        checked={on}
        onChange={(e) => { if (!isControlled) setInner(e.target.checked); onChange && onChange(e); }}
        {...rest}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
      />
      <span
        aria-hidden="true"
        style={{
          width: 20, height: 20, flex: "0 0 auto",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          borderRadius: "var(--radius-1)",
          border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
          background: on ? "var(--accent)" : "transparent",
          color: "var(--text-on-accent)",
          transition: "var(--t-hover)",
        }}
      >
        {on ? <Icon name="check" size={14} /> : null}
      </span>
      {label}
    </label>
  );
}
