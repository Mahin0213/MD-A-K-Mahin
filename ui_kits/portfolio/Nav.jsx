const { Button, Icon, Tag } = window.MahinDesignSystem_5e3929;

const wrap = { maxWidth: "var(--max-page)", margin: "0 auto", paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" };

function Wordmark({ onClick }) {
  return (
    <a href="#top" onClick={onClick} style={{ border: 0, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, letterSpacing: "-.03em", color: "var(--text-strong)", fontVariationSettings: '"wdth" 112' }}>
      Md A K Mahin<span style={{ color: "var(--accent)" }}>.</span>
    </a>
  );
}

function Nav({ onNavigate, active }) {
  const items = [["work", "Work"], ["services", "Services"], ["process", "Process"], ["about", "About"]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, background: "var(--veil-nav)", backdropFilter: "var(--blur-nav)", borderBottom: "1px solid var(--border-soft)" }}>
      <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, gap: "var(--sp-6)" }}>
        <Wordmark onClick={(e) => { e.preventDefault(); onNavigate("top"); }} />
        <nav style={{ display: "flex", gap: "var(--sp-6)" }} aria-label="Primary">
          {items.map(([id, label]) => (
            <a key={id} href={"#" + id} onClick={(e) => { e.preventDefault(); onNavigate(id); }}
              style={{ border: 0, fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: active === id ? "var(--accent)" : "var(--text-muted)" }}>
              {label}
            </a>
          ))}
        </nav>
        <Button size="sm" icon="arrow-up-right" onClick={() => onNavigate("contact")}>Start a project</Button>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", paddingTop: "var(--sp-7)", paddingBottom: "var(--sp-7)" }}>
      <div style={{ ...wrap, display: "flex", flexWrap: "wrap", gap: "var(--sp-5)", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-5)", flexWrap: "wrap" }}>
          <img src="../../assets/ak-elevate-digital-logo.svg" alt="AK Elevate Digital" style={{ height: 58, width: "auto", background: "#FFFFFF", padding: "10px 18px", borderRadius: "var(--radius-1)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>© 2026 Md A K Mahin — SEO Expert &amp; AI Web Builder.</span>
        </div>
        <div style={{ display: "flex", gap: "var(--sp-5)" }}>
          {[["mail", "akmahin068@gmail.com", "mailto:akmahin068@gmail.com"], ["phone", "07487 558646", "tel:+447487558646"], ["linkedin", "LinkedIn", "#"], ["twitter", "X / Twitter", "#"], ["github", "GitHub", "#"]].map(([ic, label, href]) => (
            <a key={label} href={href} style={{ border: 0, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>
              <Icon name={ic} size={14} /> {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function AvailabilityNote() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--sp-3)", fontFamily: "var(--font-mono)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-label)", textTransform: "uppercase", color: "var(--text-muted)" }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--signal-ok)" }} />
      Available for freelance projects worldwide
    </span>
  );
}

Object.assign(window, { Nav, Footer, Wordmark, AvailabilityNote, kitWrap: wrap });
