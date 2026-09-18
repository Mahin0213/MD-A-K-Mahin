# Md A K Mahin — website

Static site, no build step. Upload the contents of this folder to Hostinger's `public_html`.

## Files
- `index.html` — home: hero, about, services, work, process, results, contact CTA.
- `contact.html` — enquiry page with the form.
- `contact.php` — mail handler; sends every enquiry to **akmahin068@gmail.com**.
- `assets/site.css`, `assets/site.js` — all styles and behaviour.
- `assets/` — logo, portrait, project image.
- `robots.txt`, `sitemap.xml`, `.htaccess`.

## Before you upload — replace `example.com`
Search all files for `https://example.com` and swap in your real domain. It appears in: `index.html` and `contact.html` (canonical, Open Graph, JSON-LD), `robots.txt`, `sitemap.xml`.

## Email setup (Hostinger)
1. Upload everything, including `contact.php`.
2. In hPanel → Emails, create `no-reply@yourdomain.com`. `contact.php` sends **from** that address, which is what keeps Gmail from filtering it. Never send "from" a gmail.com address.
3. Check the SPF record exists in hPanel → DNS Zone (Hostinger adds it automatically).
4. Send a test enquiry; check spam on the first one and mark it "not spam".

Reply-To is set to whoever filled the form, so replying in Gmail goes straight to them. A hidden honeypot field silently discards bots.

## Still to replace
- `assets/og-image.jpg` — the social share image (1200×630). Not created yet; add one and the OG tags will pick it up.
- LinkedIn / X / GitHub links are `#` in both pages and in the JSON-LD `sameAs` array.
- Projects 02–04 are marked **Sample** and the three metrics say "Sample figure". Replace or delete them.
- Three placeholder testimonials live at the top of `assets/site.js` (the `QUOTES` array).

## Icons
Icons are Lucide, loaded as CSS masks from unpkg. To self-host, download the SVGs you need into `assets/icons/` and change the six `--mask-image` URLs near the top of `site.css`.
