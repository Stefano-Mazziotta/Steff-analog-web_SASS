<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';
$statusSendClass = false;



if(isset($_POST['email']) && $_POST['email'] != ''){

    if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){

        $mailTo = 'webdeveloperrosario@gmail.com';
        $subject = "Contact form from www.steffanalog.com";

        $userName = $_POST['fullName'];
        $userEmail = $_POST['email'];
        $userMessage = $_POST['message'];
        
        try{
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = $mailTo; // Gmail adress which you want to use as SMTP server.
            $mail->Password = 'oQvsUU42'; // Gmail address password.
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = '587';

            $mail->setFrom($mailTo); // Gmail adress which you want to use as SMTP server.
            $mail->addAddress($mailTo); // Email address where you want to receive emails.

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body='<p>Name: '.$userName.'<br>Email: '.$userEmail.'<br>Message: '.$userMessage.'</p>';

            $mail->send();
            $statusSendClass = true;
            $alert = '<p class="alert">The email was sent successfully.</p>';
        } catch(Exception $e){
            $statusSendClass = false;
            $alert = '<p class="alert">'.$e->getMessage().'</p>';
        }
    }
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>send-email</title>
</head>
<body>
    <div class="main">
        <div class="card-container">
            <div class="alert-container <?php if($statusSendClass == false){
                echo "error";
                } else{echo "success";}?>">
                <?php echo $alert?>
            </div>
            <a class="btn-home" href="../index.html">Back to Home</a>
        </div>
    </div>
</body>
</html>