<?php
class Mail {

  private $from;
  private $from_name = "";
  private $type = "text/html";
  private $encoding = "utf-8";
  private $notify = false;

  /* Receives a return e-mail address */
  public function __construct($from) {
    $this->from = $from;
  }

  /* Change the return e-mail addresses*/
  public function setFrom($from) {
    $this->from = $from;
  }

  /* Change the name in the return address */
  public function setFromName($from_name) {
    $this->from_name = $from_name;
  }

  /* Change the type of message content */
  public function setType($type) {
    $this->type = $type;
  }

  /* need to ask for your confirmation letter */
  public function setNotify($notify) {
    $this->notify = $notify;
  }

  /* Changing the coding email*/
  public function setEncoding($encoding) {
    $this->encoding = $encoding;
  }

  /* The method of sending the email*/
  public function send($to, $subject, $message) {
  
    $from = "=?utf-8?B?".base64_encode($this->from_name)."?="." <".$this->from.">"; // Encode the return address (to avoid problems with the coding)
    $headers = "From: ".$from."\r\nReply-To: ".$from."\r\nContent-type: ".$this->type."; charset=".$this->encoding."\r\n"; // We install the necessary headers
   
    if ($this->notify) { 
    
        $headers .= "Disposition-Notification-To: ".$this->from."\r\n"; // Add the inquiry to confirm receipt of the letter , if desired

    }
    
    $subject = "=?utf-8?B?".base64_encode($subject)."?="; // Code the topic(to avoid problems with the encoding)
    
    return mail($to, $subject, $message, $headers); // We send email  and returns
  }

}
?>