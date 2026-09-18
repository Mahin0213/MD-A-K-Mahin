import React from "react";

export function Tag({ children, tone = "neutral", style, ...rest }) {
  const tones = {
    neutral: { color: "var(--text-muted)", borderColor: "var(--border-hairline)", background: "transparent" },
    accent: { color: "var(--accent)", borderColor: "var(--accent)", background: "var(--accent-wash)" },
    solid: { color: "var(--text-on-accent)", borderColor: "var(--accent)", background: "var(--accent)" },
  };
  return (
    <span
      {...rest}
      style={{
        display: "inline-block",
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        lineHeight: 1,
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
