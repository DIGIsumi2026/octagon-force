<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

function respond(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ], JSON_UNESCAPED_SLASHES);
    exit;
}

function readField(array $data, string $field): string
{
    $value = $data[$field] ?? '';

    return is_scalar($value) ? trim((string) $value) : '';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'Method not allowed.', 405);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    respond(false, 'Invalid request body.', 400);
}

$name = readField($data, 'name');
$phone = readField($data, 'phone');
$email = readField($data, 'email');
$service = readField($data, 'service');
$message = readField($data, 'message');
$honeypot = readField($data, 'website');

if ($honeypot !== '') {
    respond(false, 'Unable to submit inquiry.', 400);
}

if ($name === '' || $phone === '' || $email === '' || $service === '' || $message === '') {
    respond(false, 'Please complete all required fields.', 400);
}

if (
    strlen($name) > 120
    || strlen($phone) > 32
    || strlen($email) > 254
    || strlen($service) > 120
    || strlen($message) > 5000
) {
    respond(false, 'Please shorten your inquiry and try again.', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 400);
}

$phoneDigits = preg_replace('/\D/', '', $phone) ?? '';
if (!preg_match('/^[0-9+().\s-]+$/', $phone) || strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15) {
    respond(false, 'Please enter a valid phone number.', 400);
}

foreach ([$name, $phone, $email, $service] as $value) {
    if (preg_match('/[\r\n]/', $value)) {
        respond(false, 'Invalid request.', 400);
    }
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
$configPath = dirname(__DIR__) . '/smtp-config.php';

if (!is_file($autoloadPath) || !is_file($configPath)) {
    error_log('Octagon Force contact form SMTP configuration is unavailable.');
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
}

require __DIR__ . '/vendor/autoload.php';

if (!class_exists(PHPMailer::class)) {
    error_log('Octagon Force contact form could not load PHPMailer.');
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
}

$config = require dirname(__DIR__) . '/smtp-config.php';
$requiredConfigKeys = ['host', 'port', 'username', 'password', 'from_email', 'from_name'];

if (!is_array($config)) {
    error_log('Octagon Force contact form SMTP configuration is invalid.');
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
}

foreach ($requiredConfigKeys as $key) {
    if (!isset($config[$key]) || !is_scalar($config[$key]) || trim((string) $config[$key]) === '') {
        error_log('Octagon Force contact form SMTP configuration is missing ' . $key . '.');
        respond(false, 'Unable to send inquiry. Please try again later.', 500);
    }
}

if ((int) $config['port'] !== 465 || !filter_var((string) $config['from_email'], FILTER_VALIDATE_EMAIL)) {
    error_log('Octagon Force contact form SMTP configuration has an invalid port or sender.');
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
}

$escapeHtml = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$safeName = $escapeHtml($name);
$safePhone = $escapeHtml($phone);
$safeEmail = $escapeHtml($email);
$safeService = $escapeHtml($service);
$safeMessage = nl2br($escapeHtml($message), false);

$htmlBody = <<<HTML
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Octagon Force Website Inquiry</title>
</head>
<body style="margin:0;background:#f5f6f8;color:#101827;font-family:Arial,sans-serif;">
  <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="padding:24px 28px;background:#101827;color:#ffffff;">
        <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#c99527;">Octagon Force</p>
        <h1 style="margin:8px 0 0;font-size:24px;line-height:1.3;">New Website Inquiry</h1>
      </div>
      <div style="padding:28px;">
        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.55;">
          <tr><td style="width:150px;padding:8px 0;font-weight:700;vertical-align:top;">Name</td><td style="padding:8px 0;">{$safeName}</td></tr>
          <tr><td style="width:150px;padding:8px 0;font-weight:700;vertical-align:top;">Phone</td><td style="padding:8px 0;">{$safePhone}</td></tr>
          <tr><td style="width:150px;padding:8px 0;font-weight:700;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:{$safeEmail}" style="color:#a16f08;">{$safeEmail}</a></td></tr>
          <tr><td style="width:150px;padding:8px 0;font-weight:700;vertical-align:top;">Selected Service</td><td style="padding:8px 0;">{$safeService}</td></tr>
          <tr><td style="width:150px;padding:16px 0 8px;font-weight:700;vertical-align:top;">Message</td><td style="padding:16px 0 8px;">{$safeMessage}</td></tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>
HTML;

$plainTextBody = implode("\n", [
    'New inquiry submitted from the Octagon Force website.',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . $email,
    'Selected Service: ' . $service,
    '',
    'Message:',
    $message,
]);

$mail = null;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $config['host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['username'];
    $mail->Password = (string) $config['password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) $config['from_email'], (string) $config['from_name']);
    $mail->addAddress('digitalsumathi2026@gmail.com', 'Octagon Force Website Inquiries');
    $mail->addReplyTo($email, $name);
    $mail->isHTML(true);
    $mail->Subject = 'New Octagon Force Website Inquiry - ' . $service;
    $mail->Body = $htmlBody;
    $mail->AltBody = $plainTextBody;

    $mail->send();
} catch (Exception $exception) {
    $mailError = $mail instanceof PHPMailer ? $mail->ErrorInfo : '';
    error_log('Octagon Force contact form SMTP error: ' . $mailError . ' | ' . $exception->getMessage());
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
} catch (Throwable $exception) {
    error_log('Octagon Force contact form error: ' . $exception->getMessage());
    respond(false, 'Unable to send inquiry. Please try again later.', 500);
}

respond(true, 'Your inquiry has been sent successfully.');
