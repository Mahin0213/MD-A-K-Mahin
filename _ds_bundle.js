/* @ds-bundle: {"format":4,"namespace":"MahinDesignSystem_5e3929","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CaseCard","sourcePath":"components/editorial/CaseCard.jsx"},{"name":"MetricStat","sourcePath":"components/editorial/MetricStat.jsx"},{"name":"NumberedRow","sourcePath":"components/editorial/NumberedRow.jsx"},{"name":"PortraitFrame","sourcePath":"components/editorial/PortraitFrame.jsx"},{"name":"SectionHeader","sourcePath":"components/editorial/SectionHeader.jsx"},{"name":"Testimonial","sourcePath":"components/editorial/Testimonial.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ad7675b059a2","components/core/Divider.jsx":"0cafaa6501d3","components/core/Icon.jsx":"29bee3293889","components/core/IconButton.jsx":"796af5a2acce","components/core/SectionLabel.jsx":"ab0a948debbd","components/core/Tag.jsx":"4e830fb8ec4b","components/editorial/CaseCard.jsx":"35c82c5afa6d","components/editorial/MetricStat.jsx":"1f8a214f2e8f","components/editorial/NumberedRow.jsx":"0b8cdd6881ea","components/editorial/PortraitFrame.jsx":"d33b44957f41","components/editorial/SectionHeader.jsx":"ca078550e9ef","components/editorial/Testimonial.jsx":"0f17928ddd52","components/forms/Checkbox.jsx":"0fcb97d3bbbd","components/forms/Input.jsx":"e168bfd5d017","components/forms/Select.jsx":"54479943aa44","components/forms/Textarea.jsx":"76cee0707d69","components/overlay/Dialog.jsx":"401fb95dcb70","site/assets/site.js":"79014a30b8fa","ui_kits/portfolio/CaseStudy.jsx":"241cf4824950","ui_kits/portfolio/HeroCanvas.jsx":"2196263a74ed","ui_kits/portfolio/HomeBottom.jsx":"4efb22004e69","ui_kits/portfolio/HomeTop.jsx":"dc3d00e6c6db","ui_kits/portfolio/Nav.jsx":"95f536d3bf34"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MahinDesignSystem_5e3929 = window.MahinDesignSystem_5e3929 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = "hairline",
  inset = 0,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: 0,
      borderTop: "1px solid " + (tone === "accent" ? "var(--accent)" : tone === "soft" ? "var(--border-soft)" : "var(--border-hairline)"),
      marginLeft: inset,
      marginRight: inset,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static@0.454.0/icons/";

/* Lucide (static SVG, CDN) is the brand's icon set. The glyph is applied as a
   CSS mask so it always paints in currentColor. */
function Icon({
  name = "arrow-up-right",
  size = 20,
  strokeAlign,
  style,
  ...rest
}) {
  const url = 'url("' + CDN + name + '.svg")';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
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
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    padding: "10px 16px"
  },
  md: {
    padding: "16px 24px"
  },
  lg: {
    padding: "20px 32px",
    fontSize: "0.75rem"
  }
};
const variants = {
  primary: {
    background: "var(--accent)",
    color: "var(--text-on-accent)",
    borderColor: "var(--accent)"
  },
  secondary: {
    background: "transparent",
    color: "var(--text-strong)",
    borderColor: "var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-muted)",
    borderColor: "transparent",
    padding: "10px 0"
  }
};
const hovers = {
  primary: {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  },
  secondary: {
    color: "var(--accent)",
    borderColor: "var(--accent)"
  },
  ghost: {
    color: "var(--accent)"
  }
};
function Button({
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
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(press && !disabled ? {
        transform: "scale(var(--press-scale))"
      } : null),
      ...(disabled ? {
        opacity: 0.38,
        cursor: "not-allowed"
      } : null),
      ...style
    }
  }), children, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon = "arrow-right",
  label,
  size = 44,
  variant = "outline",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const outline = variant === "outline";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
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
      color: outline ? hover ? "var(--accent)" : "var(--text-strong)" : "var(--text-on-accent)",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.4)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  index,
  children,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
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
      ...style
    }
  }), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-muted)",
      borderColor: "var(--border-hairline)",
      background: "transparent"
    },
    accent: {
      color: "var(--accent)",
      borderColor: "var(--accent)",
      background: "var(--accent-wash)"
    },
    solid: {
      color: "var(--text-on-accent)",
      borderColor: "var(--accent)",
      background: "var(--accent)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
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
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/CaseCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseCard({
  index,
  title,
  industry,
  tags = [],
  outcome,
  sample = true,
  image,
  imageFit = "cover",
  imageAlt = "Project visual placeholder",
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border-soft)"),
      background: hover ? "var(--surface-card-hover)" : "var(--surface-card)",
      borderRadius: "var(--radius-2)",
      overflow: "hidden",
      transition: "var(--t-hover)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": imageAlt,
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden",
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: hover ? "scale(var(--zoom-hover))" : "none",
      transition: "var(--t-transform), filter var(--dur-base) var(--ease-out)",
      background: image ? "var(--surface-inset)" : "repeating-linear-gradient(135deg,var(--ink-800) 0 2px,var(--ink-850) 2px 12px)",
      backgroundImage: image ? "url(" + image + ")" : undefined,
      backgroundSize: image ? imageFit === "contain" ? "auto 72%" : "cover" : undefined,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      filter: image && imageFit !== "contain" ? hover ? "var(--img-filter-hover)" : "var(--img-filter)" : undefined
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "var(--sp-4)",
      left: "var(--sp-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-faint)"
    }
  }, index), sample ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "var(--sp-4)",
      right: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "accent"
  }, "Sample")) : null, image ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "var(--sp-4)",
      left: "var(--sp-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
    }
  }, "Image placeholder")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-4)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, industry)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-heading)",
      color: hover ? "var(--accent)" : "var(--text-strong)",
      transition: "var(--t-hover)",
      fontVariationSettings: '"wdth" var(--wdth-display)'
    }
  }, title), outcome ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)"
    }
  }, outcome) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-2)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--border-soft)",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: hover ? "var(--accent)" : "var(--text-muted)",
      transition: "var(--t-hover)"
    }
  }, "View case study ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14
  }))));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/MetricStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricStat({
  value,
  label,
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      paddingTop: "var(--sp-5)",
      borderTop: "1px solid var(--border-hairline)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-d2)",
      lineHeight: 1,
      letterSpacing: "var(--ls-display)",
      color: "var(--accent)",
      fontVariationSettings: '"wdth" var(--wdth-display)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/editorial/NumberedRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NumberedRow({
  index,
  title,
  detail,
  expanded,
  onToggle,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const open = expanded === undefined ? hover : expanded;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onToggle,
    style: {
      borderTop: "1px solid " + (open ? "var(--accent)" : "var(--border-hairline)"),
      padding: "var(--sp-5) 0",
      cursor: onToggle ? "pointer" : "default",
      transition: "var(--t-hover)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: open ? "var(--accent)" : "var(--text-faint)",
      transition: "var(--t-hover)",
      flex: "0 0 auto"
    }
  }, index), /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-d3)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-heading)",
      color: open ? "var(--accent)" : "var(--text-strong)",
      transition: "var(--t-hover)",
      margin: 0,
      transform: open ? "translateX(10px)" : "none",
      transitionProperty: "color, transform",
      transitionDuration: "var(--dur-base)",
      transitionTimingFunction: "var(--ease-out)",
      fontVariationSettings: '"wdth" var(--wdth-display)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 20,
    style: {
      color: open ? "var(--accent)" : "var(--text-faint)",
      transition: "var(--t-hover)",
      flex: "0 0 auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      maxHeight: open ? 120 : 0,
      opacity: open ? 1 : 0,
      transition: "max-height var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--sp-3) 0 0",
      paddingLeft: "calc(var(--sp-6) + 22px)",
      maxWidth: "var(--measure)",
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)"
    }
  }, detail)));
}
Object.assign(__ds_scope, { NumberedRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/NumberedRow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PortraitFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PortraitFrame({
  src,
  alt = "Portrait placeholder",
  caption,
  ratio = "3 / 4",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  if (src) {
    return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-3)",
        ...style
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        border: "1px solid var(--border-hairline)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: hover ? "var(--img-filter-hover)" : "var(--img-filter)",
        transform: hover ? "scale(var(--zoom-hover))" : "none",
        transition: "var(--t-transform), filter var(--dur-base) var(--ease-out)"
      }
    })), caption ? /*#__PURE__*/React.createElement("figcaption", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, caption) : null);
  }
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt,
    style: {
      aspectRatio: ratio,
      border: "1px solid var(--border-hairline)",
      background: "repeating-linear-gradient(135deg,var(--ink-850) 0 2px,var(--ink-900) 2px 12px)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
    }
  }, alt)), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PortraitFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PortraitFrame.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  index,
  label,
  title,
  lede,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      ...style
    }
  }), label ? /*#__PURE__*/React.createElement(__ds_scope.SectionLabel, {
    index: index
  }, label) : null, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: "1px solid var(--border-hairline)",
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-8)",
      alignItems: "flex-end",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingTop: "var(--sp-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-d2)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-strong)",
      maxWidth: "22ch",
      margin: 0,
      fontVariationSettings: '"wdth" var(--wdth-display)'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure-narrow)",
      color: "var(--text-body)",
      margin: 0
    }
  }, lede) : null, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-6)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-d3)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      maxWidth: "34ch",
      fontVariationSettings: '"wdth" var(--wdth-display-tight)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", null, role) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  id,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : inner;
  const uid = id || "cb-" + (label || "opt").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      cursor: "pointer",
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: on,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    }
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-1)",
      border: "1px solid " + (on ? "var(--accent)" : "var(--border-strong)"),
      background: on ? "var(--accent)" : "transparent",
      color: "var(--text-on-accent)",
      transition: "var(--t-hover)"
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  id,
  type = "text",
  required = false,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "in-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent)" : "var(--text-muted)",
      transition: "var(--t-hover)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    required: required,
    "aria-invalid": error ? true : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + (error ? "var(--signal-err)" : focus ? "var(--accent)" : "var(--border-hairline)"),
      borderRadius: 0,
      padding: "12px 0",
      color: "var(--text-strong)",
      font: "inherit",
      fontSize: "var(--fs-body)",
      outline: "none",
      transition: "var(--t-hover)"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--signal-err)"
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  id,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "sel-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent)" : "var(--text-muted)",
      transition: "var(--t-hover)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
      transition: "var(--t-hover)"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: "none",
      background: "transparent",
      border: 0,
      borderRadius: 0,
      padding: "12px 24px 12px 0",
      color: "var(--text-strong)",
      font: "inherit",
      fontSize: "var(--fs-body)",
      width: "100%",
      outline: "none"
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: typeof o === "string" ? o : o.value,
    value: typeof o === "string" ? o : o.value,
    style: {
      background: "var(--surface-card)"
    }
  }, typeof o === "string" ? o : o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      position: "absolute",
      right: 0,
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  id,
  rows = 4,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || "ta-" + (label || "field").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: focus ? "var(--accent)" : "var(--text-muted)",
      transition: "var(--t-hover)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      background: "transparent",
      border: 0,
      borderBottom: "1px solid " + (focus ? "var(--accent)" : "var(--border-hairline)"),
      borderRadius: 0,
      padding: "12px 0",
      color: "var(--text-strong)",
      font: "inherit",
      fontSize: "var(--fs-body)",
      resize: "vertical",
      outline: "none",
      transition: "var(--t-hover)"
    }
  })));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 40,
      display: "grid",
      placeItems: "center",
      padding: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(5,5,6,.78)",
      backdropFilter: "var(--blur-veil)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined
  }, rest, {
    style: {
      position: "relative",
      width: "min(560px,100%)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-2)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--sp-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      fontVariationSettings: '"wdth" var(--wdth-display)'
    }
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: 44,
    onClick: onClose
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      justifyContent: "flex-end",
      paddingTop: "var(--sp-4)",
      borderTop: "1px solid var(--border-soft)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// site/assets/site.js
try { (() => {
/* Md A K Mahin — site behaviour. No dependencies. */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* mobile nav */
  var toggle = document.getElementById("navToggle"),
    nav = document.getElementById("nav");
  if (toggle && nav) toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  if (nav) nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle && toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* scroll reveals */
  var rv = document.querySelectorAll(".rv");
  if (rv.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          en.target.style.transitionDelay = i * 70 + "ms";
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, {
      rootMargin: "-8% 0px"
    });
    rv.forEach(function (el) {
      io.observe(el);
    });
  } else {
    rv.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* service rows — click to open on touch, hover handled in CSS */
  document.querySelectorAll(".row").forEach(function (row) {
    row.addEventListener("click", function () {
      var open = row.getAttribute("aria-expanded") === "true";
      document.querySelectorAll('.row[aria-expanded="true"]').forEach(function (r) {
        r.setAttribute("aria-expanded", "false");
      });
      row.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  /* testimonial slider */
  var QUOTES = [["Placeholder quote — replace with a real client comment about the SEO results.", "Client name", "Marketing lead, Company"], ["Placeholder quote — replace with a comment about the website build and speed.", "Client name", "Founder, Company"], ["Placeholder quote — replace with a comment about working process and reporting.", "Client name", "Director, Company"]];
  var qText = document.getElementById("qText");
  if (qText) {
    var i = 0,
      qName = document.getElementById("qName"),
      qRole = document.getElementById("qRole"),
      qCount = document.getElementById("qCount");
    var pad = function (n) {
      return n < 10 ? "0" + n : String(n);
    };
    var render = function () {
      qText.textContent = QUOTES[i][0];
      qName.textContent = QUOTES[i][1];
      qRole.textContent = QUOTES[i][2];
      qCount.textContent = pad(i + 1) + " / " + pad(QUOTES.length);
    };
    document.getElementById("qPrev").addEventListener("click", function () {
      i = (i + QUOTES.length - 1) % QUOTES.length;
      render();
    });
    document.getElementById("qNext").addEventListener("click", function () {
      i = (i + 1) % QUOTES.length;
      render();
    });
    render();
  }

  /* hero node field */
  var cv = document.getElementById("nodes");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d"),
      w = 0,
      h = 0,
      raf,
      dpr = Math.min(window.devicePixelRatio || 1, 2),
      N = 26;
    var ns = [];
    for (var k = 0; k < N; k++) ns.push({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - .5) * .00035,
      vy: (Math.random() - .5) * .00035,
      r: Math.random() * 1.6 + 1
    });
    var size = function () {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    var draw = function () {
      ctx.clearRect(0, 0, w, h);
      for (var a = 0; a < N; a++) {
        var n = ns[a];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      for (var p = 0; p < N; p++) for (var q = p + 1; q < N; q++) {
        var A = ns[p],
          B = ns[q],
          dx = (A.x - B.x) * w,
          dy = (A.y - B.y) * h,
          d = Math.sqrt(dx * dx + dy * dy);
        if (d < 170) {
          ctx.globalAlpha = (1 - d / 170) * .22;
          ctx.strokeStyle = "#C8FF00";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(A.x * w, A.y * h);
          ctx.lineTo(B.x * w, B.y * h);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      for (var z = 0; z < N; z++) {
        var m = ns[z];
        ctx.fillStyle = "rgba(245,244,239,.55)";
        ctx.beginPath();
        ctx.arc(m.x * w, m.y * h, m.r, 0, 6.2832);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    size();
    draw();
    window.addEventListener("resize", function () {
      size();
      if (reduce) draw();
    });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        raf = requestAnimationFrame(draw);
      }
    });
  }

  /* enquiry form */
  var form = document.getElementById("enquiry"),
    dialog = document.getElementById("dialog");
  if (form && dialog) {
    var title = document.getElementById("dlgTitle"),
      body = document.getElementById("dlgBody"),
      btn = document.getElementById("submitBtn");
    var show = function (t, b) {
      title.textContent = t;
      body.textContent = b;
      dialog.hidden = false;
      dialog.querySelector(".btn").focus();
    };
    var hide = function () {
      dialog.hidden = true;
    };
    dialog.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) hide();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !dialog.hidden) hide();
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      btn.disabled = true;
      btn.firstChild.nodeValue = "Sending… ";
      fetch(form.action, {
        method: "POST",
        body: new FormData(form)
      }).then(function (res) {
        return res.json().then(function (d) {
          return {
            ok: res.ok && d.ok,
            error: d.error
          };
        });
      }).then(function (r) {
        if (!r.ok) throw new Error(r.error || "Something went wrong sending your message.");
        form.reset();
        show("Enquiry sent", "Thanks — it’s on its way to akmahin068@gmail.com and I reply within one working day.");
      }).catch(function (err) {
        show("Couldn’t send", (err.message || "Could not reach the mail handler.") + " You can email akmahin068@gmail.com or call 07487 558646 directly.");
      }).then(function () {
        btn.disabled = false;
        btn.firstChild.nodeValue = "Send enquiry ";
      });
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/assets/site.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  Button,
  SectionLabel,
  MetricStat,
  Tag,
  Divider
} = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;
function CaseStudy({
  project,
  onBack
}) {
  if (!project) return null;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      paddingTop: "var(--sp-8)",
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBack,
    icon: "arrow-left"
  }, "Back to work"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-6)",
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: project.index
  }, project.industry), /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "Sample project")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--sp-5)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-d1)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-strong)",
      maxWidth: "16ch",
      fontVariationSettings: '"wdth" 114'
    }
  }, project.title), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": project.title + " — hero image placeholder",
    style: {
      marginTop: "var(--sp-7)",
      aspectRatio: "21 / 9",
      border: "1px solid var(--border-soft)",
      background: "repeating-linear-gradient(135deg,var(--ink-850) 0 2px,var(--ink-900) 2px 12px)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
    }
  }, "Hero image placeholder \u2014 21:9")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-8)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: "var(--grid-gap)"
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: "+180%",
    label: "Organic traffic",
    note: "Sample figure"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: "3.2\xD7",
    label: "Qualified leads",
    note: "Sample figure"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: "90+",
    label: "PageSpeed score",
    note: "Sample figure"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-9)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
      gap: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 10
    }
  }, project.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Timeline"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)"
    }
  }, "Seven months, ongoing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      maxWidth: "var(--measure)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--fs-lead)"
    }
  }, project.outcome), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Placeholder case-study copy. Replace with the brief, the constraints, what was changed, and what happened next. Keep it specific: what was measured, over what period, against what baseline."), /*#__PURE__*/React.createElement(Divider, {
    tone: "soft"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-up-right"
  }, "Visit live site")))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HeroCanvas.jsx
try { (() => {
/* Abstract search/AI node field — canvas, low cost, pauses off-screen and under reduced motion. */
function HeroCanvas({
  height = 420
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf,
      w = 0,
      h = 0,
      dpr = Math.min(devicePixelRatio || 1, 2);
    const N = 26;
    const nodes = Array.from({
      length: N
    }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - .5) * .00035,
      vy: (Math.random() - .5) * .00035,
      r: Math.random() * 1.6 + 1
    }));
    const size = () => {
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(cv);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = nodes[i],
          b = nodes[j];
        const dx = (a.x - b.x) * w,
          dy = (a.y - b.y) * h,
          d = Math.hypot(dx, dy);
        if (d < 170) {
          ctx.globalAlpha = (1 - d / 170) * .22;
          ctx.strokeStyle = "#C8FF00";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x * w, a.y * h);
          ctx.lineTo(b.x * w, b.y * h);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      for (const n of nodes) {
        ctx.fillStyle = "rgba(245,244,239,.55)";
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r, 0, 6.2832);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height
    }
  });
}
Object.assign(window, {
  HeroCanvas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HeroCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeBottom.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  SectionHeader,
  SectionLabel,
  CaseCard,
  MetricStat,
  Testimonial,
  Input,
  Textarea,
  Select,
  Checkbox,
  Tag,
  Divider
} = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;
const PROJECTS = [{
  index: "01",
  title: "Henna Art by Masu",
  industry: "Henna artist · Leicester, UK",
  tags: ["Website build", "Local SEO", "On-page"],
  outcome: "Full site design, build, and local SEO for a Leicester bridal and party henna studio.",
  sample: false,
  href: "https://hennabymasu.com/",
  image: "../../assets/projects/hennabymasu-logo.png",
  imageFit: "contain",
  imageAlt: "Henna Art by Masu — gold HM monogram logo"
}, {
  index: "02",
  title: "Local Business SEO Growth",
  industry: "Local services",
  tags: ["Technical SEO", "Local", "Content"],
  outcome: "+180% organic sessions and a full map-pack takeover in seven months."
}, {
  index: "03",
  title: "SaaS Landing Page & SEO System",
  industry: "B2B SaaS",
  tags: ["Landing pages", "Keyword strategy"],
  outcome: "3.2× more qualified demo requests from the same ad spend."
}, {
  index: "04",
  title: "E-commerce Technical SEO",
  industry: "Retail",
  tags: ["Technical SEO", "Core Web Vitals"],
  outcome: "Index bloat cut by 61%, revenue from search up 44%."
}];
function Work({
  onOpenCase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "03",
    label: "Selected work",
    title: "Selected work",
    lede: "One live client site, plus sample projects until more client work is published.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      icon: "arrow-right"
    }, "All case studies")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--sp-7)"
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(CaseCard, _extends({
    key: p.index
  }, p, {
    onClick: p.href ? undefined : e => {
      e.preventDefault();
      onOpenCase(p);
    },
    target: p.href ? "_blank" : undefined
  }))))));
}
const STEPS = [["01", "Discover", "Understand goals, audience, competitors, and opportunities."], ["02", "Strategise", "Create the SEO and website growth plan."], ["03", "Build", "Design and launch a fast, intelligent website."], ["04", "Optimise", "Measure, improve, and scale performance."]];
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "04",
    label: "Process",
    title: "A clear process. Built for growth."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--sp-7)"
    }
  }, STEPS.map(([i, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--sp-5)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--accent)"
    }
  }, i), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-h2)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)",
      fontVariationSettings: '"wdth" 112'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-body)",
      fontSize: "var(--fs-sm)"
    }
  }, d))))));
}
const QUOTES = [{
  quote: "Placeholder quote — replace with a real client comment about the SEO results.",
  name: "Client name",
  role: "Marketing lead, Company"
}, {
  quote: "Placeholder quote — replace with a comment about the website build and speed.",
  name: "Client name",
  role: "Founder, Company"
}, {
  quote: "Placeholder quote — replace with a comment about working process and reporting.",
  name: "Client name",
  role: "Director, Company"
}];
function Results() {
  const [i, setI] = React.useState(0);
  const go = d => setI((i + d + QUOTES.length) % QUOTES.length);
  return /*#__PURE__*/React.createElement("section", {
    id: "results",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "05",
    label: "Results",
    title: "Proof, not promises.",
    lede: "Placeholder figures \u2014 swap in verified client numbers before publishing."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    value: "+180%",
    label: "Organic traffic",
    note: "Sample figure"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: "3.2\xD7",
    label: "More qualified leads",
    note: "Sample figure"
  }), /*#__PURE__*/React.createElement(MetricStat, {
    value: "90+",
    label: "PageSpeed score",
    note: "Sample figure"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-9)",
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--sp-7)",
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "var(--sp-7)",
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement(Testimonial, QUOTES[i]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      color: "var(--text-faint)"
    }
  }, String(i + 1).padStart(2, "0"), " / ", String(QUOTES.length).padStart(2, "0")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Previous testimonial",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Next testimonial",
    onClick: () => go(1)
  })))));
}
function Contact({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "06",
    label: "Contact",
    title: "Ready to make your website work harder?",
    lede: "Let\u2019s build a smarter digital presence that gets found and gets results."
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit();
    },
    style: {
      marginTop: "var(--sp-7)",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--sp-6) var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    required: true,
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company (optional)"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    options: ["SEO strategy", "AI website build", "Both", "Not sure yet"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Project details",
    rows: 4,
    placeholder: "Goals, timeline, current site",
    style: {
      gridColumn: "1 / -1"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-5)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the SEO audit checklist"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    icon: "arrow-up-right"
  }, "Send enquiry"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-8)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:akmahin068@gmail.com",
    style: {
      display: "inline-block",
      marginTop: 8
    }
  }, "akmahin068@gmail.com")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Phone"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+447487558646",
    style: {
      display: "inline-block",
      marginTop: 8
    }
  }, "07487 558646")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionLabel, null, "Social"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-4)",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "X / Twitter"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "GitHub"))))));
}
Object.assign(window, {
  Work,
  Process,
  Results,
  Contact,
  PROJECTS,
  STEPS,
  QUOTES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeBottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeTop.jsx
try { (() => {
const {
  Button,
  SectionHeader,
  NumberedRow,
  PortraitFrame,
  Tag
} = window.MahinDesignSystem_5e3929;
const wrap = window.kitWrap;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      paddingTop: "var(--sp-9)",
      paddingBottom: "var(--sp-8)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: .8,
      maskImage: "radial-gradient(120% 80% at 70% 40%, #000 0%, transparent 70%)"
    }
  }, /*#__PURE__*/React.createElement(window.HeroCanvas, {
    height: 620
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--sp-6)"
    }
  }, "SEO Expert \xB7 AI Web Builder"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-mega)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-mega)",
      color: "var(--text-strong)",
      margin: 0,
      maxWidth: "13ch",
      fontVariationSettings: '"wdth" 116'
    }
  }, "I build websites that rank, convert, and grow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-8)",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: "var(--sp-8)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "var(--measure-narrow)",
      color: "var(--text-body)",
      fontSize: "var(--fs-lead)",
      margin: 0
    }
  }, "I\u2019m Md A K Mahin. I combine practical SEO strategy with AI-powered web design to help ambitious businesses earn attention, traffic, and customers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-up-right",
    onClick: () => onNavigate("contact")
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate("work")
  }, "View my work")))));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      paddingTop: "var(--section-y)",
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "01",
    label: "Intro",
    title: "Search strategy meets intelligent web experiences."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.6fr) minmax(220px,.6fr)",
      gap: "var(--sp-8)",
      marginTop: "var(--sp-7)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-5)",
      maxWidth: "var(--measure)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--fs-lead)"
    }
  }, "I help businesses become more visible on Google and turn that visibility into leads. That means honest technical SEO, content strategy built on real search demand, and fast websites assembled with AI tooling instead of six-month build cycles."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)"
    }
  }, "Most projects start with an audit, move into a prioritised roadmap, and end with a site that loads fast, reads well, and gets found. I work directly with founders and marketing leads \u2014 no account layers."), /*#__PURE__*/React.createElement(window.AvailabilityNote, null)), /*#__PURE__*/React.createElement(PortraitFrame, {
    src: "../../assets/portrait-mahin.png",
    alt: "Md A K Mahin, SEO expert and AI web builder",
    caption: "Based in the UK \xB7 Working worldwide"
  }))));
}
const SERVICES = [["01", "SEO Strategy & Audits", "A full technical and content audit that turns into a ranked, sequenced roadmap you can actually execute."], ["02", "Technical SEO & On-page Optimisation", "Crawlability, indexation, Core Web Vitals, and on-page structure fixed at the source, not patched."], ["03", "Keyword Research & Content Strategy", "Search demand mapped to buying intent, then turned into a content plan with owners and dates."], ["04", "AI Website Design & Development", "Fast, accessible sites designed and built with AI tooling in weeks rather than quarters."], ["05", "Landing Pages That Convert", "Focused pages with one job each, tested against real traffic and rewritten until they earn leads."], ["06", "SEO Automation & AI Workflows", "Reporting, internal linking, and content QA automated so the work compounds without more hours."]];
function Services() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      paddingBottom: "var(--section-y)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "02",
    label: "Services",
    title: "What I do",
    lede: "Six services, usually combined into one engagement. Hover or tap a row for detail."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-7)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, SERVICES.map(([i, t, d]) => /*#__PURE__*/React.createElement(NumberedRow, {
    key: i,
    index: i,
    title: t,
    detail: d,
    expanded: open === i ? true : undefined,
    onToggle: () => setOpen(open === i ? null : i)
  })))));
}
Object.assign(window, {
  Hero,
  About,
  Services,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeTop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag
} = window.MahinDesignSystem_5e3929;
const wrap = {
  maxWidth: "var(--max-page)",
  margin: "0 auto",
  paddingLeft: "var(--gutter)",
  paddingRight: "var(--gutter)"
};
function Wordmark({
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: onClick,
    style: {
      border: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-.03em",
      color: "var(--text-strong)",
      fontVariationSettings: '"wdth" 112'
    }
  }, "Md A K Mahin", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "."));
}
function Nav({
  onNavigate,
  active
}) {
  const items = [["work", "Work"], ["services", "Services"], ["process", "Process"], ["about", "About"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--veil-nav)",
      backdropFilter: "var(--blur-nav)",
      borderBottom: "1px solid var(--border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      gap: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onClick: e => {
      e.preventDefault();
      onNavigate("top");
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--sp-6)"
    },
    "aria-label": "Primary"
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      onNavigate(id);
    },
    style: {
      border: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: active === id ? "var(--accent)" : "var(--text-muted)"
    }
  }, label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "arrow-up-right",
    onClick: () => onNavigate("contact")
  }, "Start a project")));
}
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      paddingTop: "var(--sp-7)",
      paddingBottom: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--sp-5)",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ak-elevate-digital-logo.svg",
    alt: "AK Elevate Digital",
    style: {
      height: 58,
      width: "auto",
      background: "#FFFFFF",
      padding: "10px 18px",
      borderRadius: "var(--radius-1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, "\xA9 2026 Md A K Mahin \u2014 SEO Expert & AI Web Builder.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--sp-5)"
    }
  }, [["mail", "akmahin068@gmail.com", "mailto:akmahin068@gmail.com"], ["phone", "07487 558646", "tel:+447487558646"], ["linkedin", "LinkedIn", "#"], ["twitter", "X / Twitter", "#"], ["github", "GitHub", "#"]].map(([ic, label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      border: 0,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 14
  }), " ", label)))));
}
function AvailabilityNote() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--signal-ok)"
    }
  }), "Available for freelance projects worldwide");
}
Object.assign(window, {
  Nav,
  Footer,
  Wordmark,
  AvailabilityNote,
  kitWrap: wrap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.NumberedRow = __ds_scope.NumberedRow;

__ds_ns.PortraitFrame = __ds_scope.PortraitFrame;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
