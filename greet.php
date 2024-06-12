<?php
if(isset($_GET["fname"]) && isset($_GET["lname"])) {
    $fname = htmlspecialchars($_GET["fname"]);
    $lname = htmlspecialchars($_GET["lname"]);
    
    // Создание полного имени путем объединения имени и фамилии
    $fullname = $fname . " " . $lname;

    // Отображение приветственного сообщения
    echo "Hello, $fullname! Welcome to our website.";
} else {
    echo "Hi there! Welcome to our website.";
}
?>