<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $comment = htmlspecialchars(trim($_POST["comment"]));
    
    // Проверяем, являются ли значения полей формы пустыми
    if(!empty($name) && !empty($comment)) {
        echo "<p>Привет, <b>$name</b>. Ваш комментарий был успешно получен.<p>";
        echo "<p>Вот комментарий, который вы ввели: <b>$comment</b></p>";
    } else {
        echo "<p>Пожалуйста, заполните все поля формы!</p>";
    }
} else {
    echo "<p>Что-то пошло не так. Пожалуйста, попробуйте еще раз.</p>";
}
?>