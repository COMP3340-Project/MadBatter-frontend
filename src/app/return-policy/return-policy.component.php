<?php
if(isset($_GET['submit']))
{
    echo("Subject: " .$_POST['subject']. "<br/>\n");
    echo("Message: " .$_POST['message']. "<br/>\n");
}

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$senderEmail = $_POST['custEmail'];
$to = "madbatter3340@gmail.com";
echo $message;
echo $subject;
echo $senderEmail;

$headers = "From: $senderEmail by $firstName $lastName";

mail($to, $subject,$message,$headers);
?>
