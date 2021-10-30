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

            $template_mail = '
            <div style="width: 500px; 
                        height: 500px; 
                        background-color: black;
                        color: white;
                        text-decoration: none;
                        padding:20px;
                        border-radius:10px;
                        margin: 0 auto;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                ">
                <h1 style="text-align:center; padding:10px; border:2px solid grey; border-radius:30px">Datos del usuario.<h1>
                <h2>Name: '.$userName.'</h2><br><h2>Email: '.$userEmail.'</h2><br><h2 style="color:white;">Message: '.$userMessage.'</h2>
            </div>';
            
            try{
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = $mailTo; // Gmail adress which you want to use as SMTP server.
<<<<<<< HEAD
                $mail->Password = 'oQvsUU42'; // Gmail address password.
=======
                $mail->Password = ''; // Gmail address password.
>>>>>>> refs/remotes/origin/develop
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port = '587';

                $mail->setFrom($mailTo); // Gmail adress which you want to use as SMTP server.
                $mail->addAddress($mailTo); // Email address where you want to receive emails.

                $mail->isHTML(true);
                $mail->Subject = $subject;
                $mail->Body= $template_mail;

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