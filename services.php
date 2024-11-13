<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["email"]); // Sanitize the email input

    // Append the email to the adminmail.html file
    $adminFile = 'adminmail.html';
    $newContent = "<p>$email</p>\n";

    // Check if adminmail.html exists; create it if not
    if (!file_exists($adminFile)) {
        file_put_contents($adminFile, "<h2>Subscribed Emails</h2>\n");
    }

    // Append the new email entry at the top
    file_put_contents($adminFile, $newContent, FILE_APPEND);

    echo "Subscribed successfully!";
}
?>
