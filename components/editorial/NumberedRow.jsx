import React from "react";
import { Icon } from "../core/Icon.jsx";

export function NumberedRow({ index, title, detail, expanded, onToggle, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const open = expanded === undefined ? hover : expanded;
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onToggle}
      style={{
        borderTop: "1px solid " + (open ? "var(--accent)" : "var(--border-hairline)"),
        padding: "var(--sp-5) 0",
        cursor: onToggle ? "pointer" : "default",
        transition: "var(--t-hover)",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "var(--sp-6)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", color: open ? "var(--accent)" : "var(--text-faint)", transition: "var(--t-hover)", flex: "0 0 auto" }}>{index}</span>
        <h3 style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: "var(--fs-d3)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-heading)", color: open ? "var(--accent)" : "var(--text-strong)", transition: "var(--t-hover)", margin: 0, transform: open ? "translateX(10px)" : "none", transitionProperty: "color, transform", transitionDuration: "var(--dur-base)", transitionTimingFunction: "var(--ease-out)", fontVariationSettings: '"wdth" var(--wdth-display)' }}>{title}</h3>
        <Icon name="arrow-up-right" size={20} style={{ color: open ? "var(--accent)" : "var(--text-faint)", transition: "var(--t-hover)", flex: "0 0 auto" }} />
      </div>
      <div style={{ overflow: "hidden", maxHeight: open ? 120 : 0, opacity: open ? 1 : 0, transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)" }}>
        <p style={{ margin: "var(--sp-3) 0 0", paddingLeft: "calc(var(--sp-6) + 22px)", maxWidth: "var(--measure)", color: "var(--text-body)", fontSize: "var(--fs-sm)" }}>{detail}</p>
      </div>
    </div>
  );
}
