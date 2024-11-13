<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Append the email to the adminmail.html file
    $adminFile = 'adminmail.html';
    $currentContent = file_get_contents($adminFile);
    $newContent = "<p>$email</p>\n" . $currentContent;
    file_put_contents($adminFile, $newContent);

    // Redirect back to index.html with a success message
    header("Location: index.html?status=subscribed");
    exit();
}
?>
