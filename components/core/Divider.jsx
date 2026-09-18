import React from "react";

export function Divider({ tone = "hairline", inset = 0, style, ...rest }) {
  return (
    <hr
      {...rest}
      style={{
        border: 0,
        borderTop: "1px solid " + (tone === "accent" ? "var(--accent)" : tone === "soft" ? "var(--border-soft)" : "var(--border-hairline)"),
        marginLeft: inset,
        marginRight: inset,
        ...style,
      }}
    />
  );
}
