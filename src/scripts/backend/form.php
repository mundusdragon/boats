<!-- добавить в корень собранноо проекта на хосте -->

<?php

$data = json_decode(file_get_contents('php://input'), true);

echo json_encode(['status' => 'success', 'receivedData' => $data]);

if (!empty($data)) {

    $name = 'ФИО: ' . $data['name'];
    $email = 'office@boatsgroup.pro';
    $message = 'Способ связи: ' . $data['type'] . "\n" .
               'Комментарий: ' . $data['comment'] . "\n" .
               'Номер: ' . $data['number'];

    $to = "office@boatsgroup.pro";
    $currentDateTime = date('Y-m-d H:i:s');

    $subject = "Новая заявка с сайта boatsgroup.pro - " . $currentDateTime;

    // Create the email content
    $email_content = "$name\n$email\n$message";

    // Set the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to send message.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No data received.']);
}
?>