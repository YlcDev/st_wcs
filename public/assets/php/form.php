<?php

  define('ADMIN', 'mail@gmail.com');
  define('COMPANY', 'CapitalX');
  define('DEFAULT_SUBJECT', 'E-mail from Capitalix Landing Page');
  
  include 'mailsend.php';

  $url = 'http://'.$_SERVER['SERVER_NAME'];

  $name = isset($_POST['name']) ? $_POST['name'] : null;
  $email = isset($_POST['email']) ? $_POST['email'] : null; 
  $subject = isset($_POST['message']) ? $_POST['message'] : DEFAULT_SUBJECT;

  $messageHtml = '
      <html> 
          <head><title>'.$subject.'</title></head>
      <body>
          <h1>'.$subject.'</h1>';

          // Text before data table
          $messageHtml .= '';

          // Order table html
          $messageHtml .= '<br /><table>';

          if(isset($name) && $name !== null) { $messageHtml .= '<tr><td width="300">Name: </td><td>'.$name.'</td></tr>'; }
          if(isset($email) && $email !== null) { $messageHtml .= '<tr><td width="300">E-mail: </td><td>'.$email.'</td></tr>'; }
          if(isset($msg) && $msg !== null) { $messageHtml .= '<tr><td width="300">Message: </td><td>'.$msg.'</td></tr>'; }
          $messageHtml .= '<tr><td width="300">Date:</td><td>'.date('d.m.Y H:i').'</td></tr>';

          $messageHtml .= '</table><br />';
          // End order table html

          // Text after data table
          $messageHtml .= '';

          $messageHtml .= '</body></html>';

  $emailAddr = ADMIN;

  $mail = new Mail(ADMIN); // Create an instance of class
  $mail->setFromName(COMPANY); // Set up a name in the return address

  $response = Array(

    'status' => $mail->send($emailAddr, $subject, $messageHtml),
    'hideForm' => false,

    'msg' => '
        <h3>Thank You!</h3>
        <p>Your message has been successfully delivered.</p>
    '

  );

  if ($response['status']) {

      // Success message

      $response['msg'] = '
          <h3>Thank You!</h3>
          <p>Your message has been successfully delivered.</p>
      ';

      header('Location: '. $_SERVER['HTTP_REFERER']. '?msg=succ');

  } else {

      // Error message

      $response['msg'] = '
        <h3>Error!</h3>
        <p>Mail failed.</p>
      ';
      header('Location:'. $_SERVER['HTTP_REFERER']. '?msg=fail');

  }

  //echo json_encode($response);

?>