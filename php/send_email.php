<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar os dados do formulário
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Configurações de email
    $to = "eduardopereira@yahoo.com.br"; // Substitua pelo seu email pessoal
    $from = $email;
    $headers = "From: $from" . "\r\n" .
               "Reply-To: $from" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Corpo do email
    $body = "Nome: $fullName\nEmail: $email\nAssunto: $subject\nMensagem:\n$message";

    // Enviar o email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Email enviado com sucesso!";
    } else {
        http_response_code(500);
        echo "Erro ao enviar o email.";
    }
} else {
    http_response_code(403);
    echo "Método de requisição inválido.";
}
?>
