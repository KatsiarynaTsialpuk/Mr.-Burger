<?php

$name = $_POST['user-name'];
$phone = $_POST['phone'];
$street = $_POST['street'];
$house = $_POST['house'];
$building = $_POST['building'];
$flat = $_POST['flat'];
$floor = $_POST['floor'];
$message = $_POST['message'];

$delivery = $_POST['delivery'];
$delivery = isset($delivery) ? 'Да' : 'Нет';
$card = $_POST['card'];
$card = isset($card) ? 'Да' : 'Нет';
$disturb = $_POST['dont-disturb'];
$disturb = isset($disturb) ? 'Нет' : 'Да';

$mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li><b>Имя:</b>' . $name . '</li>
            <li><b>Телефон:</b>' . $phone . '</li>
            <li><b>Улица:</b>' . $street . '</li>
            <li><b>Дом:</b>' . $house . '</li>
            <li><b>Подъезд:</b>' . $building . '</li>
            <li><b>Квартира:</b>' . $flat . '</li>
            <li><b>Этаж:</b>' . $floor . '</li>
            <li><b>Комментарий:</b>' . $message . '</li>
            <li><b>Нужно ли сдача:</b> ' . $disturb . '</li>
            <li><b>Оплата картой:</b> ' . $disturb . '</li>
            <li><b>Нужно ли перезванивать:</b>' . $disturb . '</li>
        </ul>
    </body>
    </html>';

$headers = "From: Администратор сайта <katya@spiralscout.com>\r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('katya@spiralscout.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Сообщение отправлено";
} else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}

echo json_encode($data);

?>