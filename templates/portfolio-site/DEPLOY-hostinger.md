# Deploying to Hostinger — enquiry email setup

The contact form posts to `contact.php`, which sends the enquiry to **akmahin068@gmail.com** using PHP `mail()`. Hostinger shared hosting has this enabled by default, so no third-party service is needed.

## Steps

1. Upload the site files (including `contact.php`) to `public_html` via hPanel → File Manager or FTP.
2. Open `contact.php` and check the top three lines:
   - `$TO` — where enquiries land. Currently `akmahin068@gmail.com`.
   - `$FROM` — auto-set to `no-reply@yourdomain.com`. **Leave it as a domain address.** Sending "from" a gmail.com address fails SPF/DMARC checks and gets filtered.
   - `$SUBJECT` — the subject line you'll see in Gmail.
3. In hPanel → Emails, create the mailbox or forwarder `no-reply@yourdomain.com` so the From address is real.
4. In hPanel → DNS Zone, confirm the SPF record exists (Hostinger adds it automatically for domains using their mail service). Without it, Gmail may bin the messages.
5. Submit a test enquiry. Check Gmail's spam folder on the first send and mark it "not spam" if needed.

## How it behaves

- Client-side: the form posts by `fetch`, so the page never reloads; the confirmation dialog reports success or the exact error.
- Without JavaScript, the form still submits natively to `contact.php` and shows the JSON response — functional, if plain.
- **Reply-To** is set to the enquirer's address, so hitting Reply in Gmail goes straight to them.
- A hidden `website` honeypot field silently discards bot submissions. Name, a valid email, and project details are required server-side as well as in the browser.

## If mail() is blocked or messages go missing

Switch to SMTP: in hPanel create the mailbox, then send through Hostinger's SMTP server (`smtp.hostinger.com`, port 465, SSL) with PHPMailer instead of `mail()`. Deliverability is noticeably better. Ask and I'll write that version.
