import React from "react";

const CDN = "https://unpkg.com/lucide-static@0.454.0/icons/";

/* Lucide (static SVG, CDN) is the brand's icon set. The glyph is applied as a
   CSS mask so it always paints in currentColor. */
export function Icon({ name = "arrow-up-right", size = 20, strokeAlign, style, ...rest }) {
  const url = 'url("' + CDN + name + '.svg")';
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "0 0 auto",
        backgroundColor: "currentColor",
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        verticalAlign: strokeAlign === "text" ? "-0.18em" : "middle",
        ...style,
      }}
    />
  );
}
