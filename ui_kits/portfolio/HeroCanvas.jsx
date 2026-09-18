/* Abstract search/AI node field — canvas, low cost, pauses off-screen and under reduced motion. */
function HeroCanvas({ height = 420 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf, w = 0, h = 0, dpr = Math.min(devicePixelRatio || 1, 2);
    const N = 26;
    const nodes = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00035, vy: (Math.random() - .5) * .00035, r: Math.random() * 1.6 + 1 }));
    const size = () => { w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size();
    const ro = new ResizeObserver(size); ro.observe(cv);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h, d = Math.hypot(dx, dy);
        if (d < 170) { ctx.globalAlpha = (1 - d / 170) * .22; ctx.strokeStyle = "#C8FF00"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke(); }
      }
      ctx.globalAlpha = 1;
      for (const n of nodes) { ctx.fillStyle = "rgba(245,244,239,.55)"; ctx.beginPath(); ctx.arc(n.x * w, n.y * h, n.r, 0, 6.2832); ctx.fill(); }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ display: "block", width: "100%", height }} />;
}
Object.assign(window, { HeroCanvas });
