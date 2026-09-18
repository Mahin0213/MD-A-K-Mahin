/* Md A K Mahin — site behaviour. No dependencies. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* mobile nav */
  var toggle = document.getElementById("navToggle"), nav = document.getElementById("nav");
  if (toggle && nav) toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  if (nav) nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); toggle && toggle.setAttribute("aria-expanded", "false"); }
  });

  /* scroll reveals */
  var rv = document.querySelectorAll(".rv");
  if (rv.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) { en.target.style.transitionDelay = (i * 70) + "ms"; en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "-8% 0px" });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add("in"); }); }

  /* service rows — click to open on touch, hover handled in CSS */
  document.querySelectorAll(".row").forEach(function (row) {
    row.addEventListener("click", function () {
      var open = row.getAttribute("aria-expanded") === "true";
      document.querySelectorAll('.row[aria-expanded="true"]').forEach(function (r) { r.setAttribute("aria-expanded", "false"); });
      row.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  /* testimonial slider */
  var QUOTES = [
    ["Placeholder quote — replace with a real client comment about the SEO results.", "Client name", "Marketing lead, Company"],
    ["Placeholder quote — replace with a comment about the website build and speed.", "Client name", "Founder, Company"],
    ["Placeholder quote — replace with a comment about working process and reporting.", "Client name", "Director, Company"]
  ];
  var qText = document.getElementById("qText");
  if (qText) {
    var i = 0, qName = document.getElementById("qName"), qRole = document.getElementById("qRole"), qCount = document.getElementById("qCount");
    var pad = function (n) { return n < 10 ? "0" + n : String(n); };
    var render = function () {
      qText.textContent = QUOTES[i][0]; qName.textContent = QUOTES[i][1]; qRole.textContent = QUOTES[i][2];
      qCount.textContent = pad(i + 1) + " / " + pad(QUOTES.length);
    };
    document.getElementById("qPrev").addEventListener("click", function () { i = (i + QUOTES.length - 1) % QUOTES.length; render(); });
    document.getElementById("qNext").addEventListener("click", function () { i = (i + 1) % QUOTES.length; render(); });
    render();
  }

  /* hero node field */
  var cv = document.getElementById("nodes");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d"), w = 0, h = 0, raf, dpr = Math.min(window.devicePixelRatio || 1, 2), N = 26;
    var ns = [];
    for (var k = 0; k < N; k++) ns.push({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00035, vy: (Math.random() - .5) * .00035, r: Math.random() * 1.6 + 1 });
    var size = function () { w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    var draw = function () {
      ctx.clearRect(0, 0, w, h);
      for (var a = 0; a < N; a++) { var n = ns[a]; n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; }
      for (var p = 0; p < N; p++) for (var q = p + 1; q < N; q++) {
        var A = ns[p], B = ns[q], dx = (A.x - B.x) * w, dy = (A.y - B.y) * h, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 170) { ctx.globalAlpha = (1 - d / 170) * .22; ctx.strokeStyle = "#C8FF00"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(A.x * w, A.y * h); ctx.lineTo(B.x * w, B.y * h); ctx.stroke(); }
      }
      ctx.globalAlpha = 1;
      for (var z = 0; z < N; z++) { var m = ns[z]; ctx.fillStyle = "rgba(245,244,239,.55)"; ctx.beginPath(); ctx.arc(m.x * w, m.y * h, m.r, 0, 6.2832); ctx.fill(); }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    size(); draw();
    window.addEventListener("resize", function () { size(); if (reduce) draw(); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { cancelAnimationFrame(raf); } else if (!reduce) { raf = requestAnimationFrame(draw); }
    });
  }

  /* enquiry form */
  var form = document.getElementById("enquiry"), dialog = document.getElementById("dialog");
  if (form && dialog) {
    var title = document.getElementById("dlgTitle"), body = document.getElementById("dlgBody"), btn = document.getElementById("submitBtn");
    var show = function (t, b) { title.textContent = t; body.textContent = b; dialog.hidden = false; dialog.querySelector(".btn").focus(); };
    var hide = function () { dialog.hidden = true; };
    dialog.addEventListener("click", function (e) { if (e.target.closest("[data-close]")) hide(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !dialog.hidden) hide(); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      btn.disabled = true; btn.firstChild.nodeValue = "Sending… ";
      fetch(form.action, { method: "POST", body: new FormData(form) })
        .then(function (res) { return res.json().then(function (d) { return { ok: res.ok && d.ok, error: d.error }; }); })
        .then(function (r) {
          if (!r.ok) throw new Error(r.error || "Something went wrong sending your message.");
          form.reset();
          show("Enquiry sent", "Thanks — it’s on its way to akmahin068@gmail.com and I reply within one working day.");
        })
        .catch(function (err) {
          show("Couldn’t send", (err.message || "Could not reach the mail handler.") + " You can email akmahin068@gmail.com or call 07487 558646 directly.");
        })
        .then(function () { btn.disabled = false; btn.firstChild.nodeValue = "Send enquiry "; });
    });
  }
})();
