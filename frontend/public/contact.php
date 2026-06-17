<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

function send_json(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_json(false, 'Method not allowed.', 405);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    send_json(false, 'Invalid request body.', 400);
}

$honeypot = trim((string)($data['website'] ?? ''));

if ($honeypot !== '') {
    send_json(false, 'Unable to submit inquiry.', 400);
}

function clean_text_field($value, int $maxLength = 1000): string
{
    $text = trim((string)$value);
    $text = strip_tags($text);
    $text = preg_replace('/[\r\n]+/', ' ', $text) ?? '';
    return substr($text, 0, $maxLength);
}

function clean_message_field($value, int $maxLength = 5000): string
{
    $text = trim((string)$value);
    $text = strip_tags($text);
    return substr($text, 0, $maxLength);
}

$name = clean_text_field($data['name'] ?? '', 160);
$phone = clean_text_field($data['phone'] ?? '', 80);
$email = clean_text_field($data['email'] ?? '', 220);
$service = clean_text_field($data['service'] ?? '', 180);
$message = clean_message_field($data['message'] ?? '', 5000);

if ($name === '' || $phone === '' || $email === '' || $service === '' || $message === '') {
    send_json(false, 'Please complete all required fields.', 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_json(false, 'Please enter a valid email address.', 400);
}

$to = 'info@octagonforce.lk';
$from = 'noreply@octagonforce.com';
$subject = 'New Website Inquiry - ' . $service;

$emailBody = implode("\n", [
    'New inquiry submitted from the Octagon Force website.',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . $email,
    'Service: ' . $service,
    '',
    'Message:',
    $message,
]);

$headers = [
    'Content-Type: text/plain; charset=UTF-8',
    'From: Octagon Force Website <' . $from . '>',
    'Reply-To: ' . $email,
];

$sent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

if (!$sent) {
    send_json(false, 'Unable to send inquiry. Please try again later.', 500);
}

send_json(true, 'Your inquiry has been sent successfully.');
