import React from "react";

export function PortraitFrame({ src, alt = "Portrait placeholder", caption, ratio = "3 / 4", style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  if (src) {
    return (
      <figure {...rest} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--sp-3)", ...style }}>
        <div style={{ aspectRatio: ratio, border: "1px solid var(--border-hairline)", overflow: "hidden" }}>
          <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", filter: hover ? "var(--img-filter-hover)" : "var(--img-filter)", transform: hover ? "scale(var(--zoom-hover))" : "none", transition: "var(--t-transform), filter var(--dur-base) var(--ease-out)" }} />
        </div>
        {caption ? <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{caption}</figcaption> : null}
      </figure>
    );
  }
  return (
    <figure {...rest} style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--sp-3)", ...style }}>
      <div role="img" aria-label={alt} style={{ aspectRatio: ratio, border: "1px solid var(--border-hairline)", background: "repeating-linear-gradient(135deg,var(--ink-850) 0 2px,var(--ink-900) 2px 12px)", display: "flex", alignItems: "flex-end", padding: "var(--sp-4)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-faint)" }}>{alt}</span>
      </div>
      {caption ? <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>{caption}</figcaption> : null}
    </figure>
  );
}
