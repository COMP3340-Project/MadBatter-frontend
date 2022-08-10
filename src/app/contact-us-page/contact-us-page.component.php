<?php
if(isset($_POST['submit']))
{
    echo("Subject: " .$_POST['subject']. "<br/>\n");
    echo("Message: " .$_GET['message']. "<br/>\n");
}

$message = $_POST['message'];
$subject = $_POST['subject'];
$senderEmail = $_POST['senderEmail'];
$to = "madbatter3340@gmail.com";
echo $message;
echo $subject;
echo $senderEmail;

$headers = "From: $senderEmail";

mail($to, $subject,$message,$headers);
?>
