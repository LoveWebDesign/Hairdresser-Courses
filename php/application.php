<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Форма обратной связи</title>
<meta http-equiv="Refresh" content="6; URL=http://kursy-parikmahera.infotex.com.ua/"> 
</head>
<body>

<?php
 
$sendto   = "infotex@i.ua"; // почта, на которую будет приходить письмо
$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
$usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером

 
// Формирование заголовка письма
$subject  = "Новая заявка на курс ПАРИКМАХЕР";
$headers  = "From: <infotex@i.ua>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
 
// Формирование тела письма
$msg  = "<html><body style='font-family:Georgia,sans-serif;'>";
$msg .= "<fieldset><legend style='text-align:center;'><h2 style='font-size: 16px;font-weight:bold;'>Заявка на курс<span style='color:#fe4e50;'> ПАРИКМАХЕР<span></h2>\r\n</legend>";
$msg .= "<p style='color:#808080; margin-top: 40px;'>Имя: <span style='font-size:18px; color:#000;'>".$username."</span></p>\r\n";
$msg .= "<p style='color:#808080;'>Телефон: <span style='font-size:18px; color:#000;'>".$usertel."</span></p>\r\n</fieldset>";
$msg .= "</body></html>";
 
// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
    echo "<center style='margin-top: 70px;'><img src='../images/thanks.png'></center>";
} else {
    echo "<p>Ошибка. Сообщение не отправлено.</p>";
}
 
?>

 </body>
</html>