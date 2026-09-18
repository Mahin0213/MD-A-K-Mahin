import React from "react";
import { Icon } from "./Icon.jsx";

const base = {
  display: "inline-flex",
  alignItems: "center",
  gap: "var(--sp-3)",
  fontFamily: "var(--font-mono)",
  fontSize: "var(--fs-label)",
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  lineHeight: 1,
  border: "1px solid transparent",
  borderRadius: "var(--radius-1)",
  cursor: "pointer",
  transition: "var(--t-hover), var(--t-transform)",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const sizes = {
  sm: { padding: "10px 16px" },
  md: { padding: "16px 24px" },
  lg: { padding: "20px 32px", fontSize: "0.75rem" },
};

const variants = {
  primary: { background: "var(--accent)", color: "var(--text-on-accent)", borderColor: "var(--accent)" },
  secondary: { background: "transparent", color: "var(--text-strong)", borderColor: "var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--text-muted)", borderColor: "transparent", padding: "10px 0" },
};

const hovers = {
  primary: { background: "var(--accent-hover)", borderColor: "var(--accent-hover)" },
  secondary: { color: "var(--accent)", borderColor: "var(--accent)" },
  ghost: { color: "var(--accent)" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
      style={{
        ...base,
        ...sizes[size],
        ...variants[variant],
        ...(hover && !disabled ? hovers[variant] : null),
        ...(press && !disabled ? { transform: "scale(var(--press-scale))" } : null),
        ...(disabled ? { opacity: 0.38, cursor: "not-allowed" } : null),
        ...style,
      }}
    >
      {children}
      {icon ? <Icon name={icon} size={16} /> : null}
    </Tag>
  );
}
