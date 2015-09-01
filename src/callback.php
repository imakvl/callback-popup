<?php 

$to  = "e.shishichkina@anta-sport.ru, " ; 
$to .= "volineg@gmail.com"; 
$name = check_input($_GET["name"]);
$phone = check_input($_GET["phone"]);
$from = check_input($_GET["from"]);
$till = check_input($_GET["till"]);
$subject = "Запрос звонка на сайте с " . $from . " до " . $till . ". Anta-sport"; 

$message = 'Контактное лицо: ' . $name . '<br>
Телефон: ' . $phone . '<br>
Время звонка: с ' . $from . ' до ' . $till; 

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: e.shishichkina@anta-sport.ru\r\n"; 

mail($to, $subject, $message, $headers); 

function check_input($vvvv){
	$input_text = strip_tags($vvvv);
	$input_text = htmlspecialchars($input_text);
	$input_text = mysql_escape_string($input_text);
	return $input_text;
}

?> 