import React from "react";

export function SectionLabel({ index, children, align = "left", style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "var(--sp-4)",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        lineHeight: "var(--lh-label)",
        color: "var(--text-muted)",
        ...style,
      }}
    >
      {index ? <span style={{ color: "var(--accent)" }}>{index}</span> : null}
      <span>{children}</span>
    </div>
  );
}
