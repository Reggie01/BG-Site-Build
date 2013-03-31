
<?php
	$to = 'nigel@bgcreatives.com';
	$email = preg_replace("([\r\n])", "", $_POST['mail']) ;
	$name = $_POST['name'] ;
	$subject = "Message from: $name";
	$message = $_POST['comment'] ;
	$match = "/(bcc:|cc:|content\-type:)/i";
	if (preg_match($match, $subject) ||
	    preg_match($match, $body)) {
	  die("Header injection detected.");
	}
	$validemail = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
	if ($validemail) {
		$headers .= "Reply-to: $validemail\r\n"; 
	}
	$robotest = $_REQUEST['robotest'];
	$body = "From: $name \r\n Email: $email \r\n Message: $message";
	
	mail($to, $subject, $headers, $body) or die("Error Bro!!!");
	if($robotest)
        $error = "You are a gutless robot.";
   else{
		if($email == ' ') 
			{
				print("You have not entered an email, please go back and try again");
			} 
		 else if ($name == ' ') 
		 	{
		 		print("You have not entered a name, please go back and try again");
		 	} 
		 else 
			 { 
			 	$send = mail($to, $subject, $body, $headers);
			 	print("Thank you for contacting us. We will be in touch with you very soon."); 
			 }
		 }
?>