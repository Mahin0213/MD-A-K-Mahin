import React from "react";
import { Icon } from "./Icon.jsx";

export function IconButton({ icon = "arrow-right", label, size = 44, variant = "outline", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const outline = variant === "outline";
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        transition: "var(--t-hover)",
        border: outline ? "1px solid " + (hover ? "var(--accent)" : "var(--border-strong)") : "1px solid transparent",
        background: outline ? "transparent" : hover ? "var(--accent-hover)" : "var(--accent)",
        color: outline ? (hover ? "var(--accent)" : "var(--text-strong)") : "var(--text-on-accent)",
        ...style,
      }}
    >
      <Icon name={icon} size={Math.round(size * 0.4)} />
    </button>
  );
}
