<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "YOUR_EMAIL_HERE";  // Replace with your email
    $form_type = $_POST['form_type'];
    $subject = "";
    $body = "";

    // ======================
    // POPUP FORM
    // ======================
    if ($form_type == "popup") {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $location = $_POST['location'];
        $business = $_POST['business'];

        $subject = "Popup Form Submission";
        $body = 
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Location: $location\n".
            "Business: $business\n";
    }

    // ======================
    // CONTACT FORM
    // ======================
    if ($form_type == "contact") {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $location = $_POST['location'];
        $business = $_POST['business'];

        $subject = "Contact Form Submission";
        $body = 
            "Name: $name\n".
            "Email: $email\n".
            "Phone: $phone\n".
            "Location: $location\n".
            "Business: $business\n";
    }

    // Email header
    $headers = "From: $email";

    // Send email + redirect
    if (mail($to, $subject, $body, $headers)) {
        header("Location: thankyou.html");
        exit();
    } else {
        echo "Error sending email.";
    }
}
?>
