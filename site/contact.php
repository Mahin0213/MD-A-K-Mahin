<?php
// Hostinger contact handler — drop this next to index.html and set $TO below.
// Hostinger shared hosting has PHP mail() enabled by default; mail sent from a
// domain-matching From: address (e.g. no-reply@yourdomain.com) is far less
// likely to be filtered than sending "from" a gmail.com address.

$TO      = 'akmahin068@gmail.com';
$FROM    = 'no-reply@' . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$SUBJECT = 'New enquiry from your website';

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Honeypot: bots fill hidden fields, humans don't.
if (!empty($_POST['website'])) { echo json_encode(['ok' => true]); exit; }

$clean = function ($key, $max = 2000) {
  $v = trim((string)($_POST[$key] ?? ''));
  $v = str_replace(["\r", "\n"], ' ', $v);
  return mb_substr($v, 0, $max);
};

$name    = $clean('name', 120);
$email   = $clean('email', 160);
$company = $clean('company', 160);
$service = $clean('service', 80);
$details = mb_substr(trim((string)($_POST['details'] ?? '')), 0, 4000);
$list    = !empty($_POST['checklist']) ? 'Yes' : 'No';

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $details === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Please add your name, a valid email, and some project detail.']);
  exit;
}

$body = "New enquiry from the website\n\n"
      . "Name:     $name\n"
      . "Email:    $email\n"
      . "Company:  " . ($company !== '' ? $company : '—') . "\n"
      . "Service:  " . ($service !== '' ? $service : '—') . "\n"
      . "Checklist requested: $list\n\n"
      . "Project details:\n$details\n\n"
      . "Sent: " . date('c') . "\n"
      . "IP:   " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = "From: Website enquiry <$FROM>\r\n"
         . "Reply-To: " . mb_encode_mimeheader($name) . " <$email>\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "MIME-Version: 1.0\r\n";

$sent = @mail($TO, $SUBJECT, $body, $headers, "-f$FROM");

if ($sent) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Email akmahin068@gmail.com directly.']);
}
