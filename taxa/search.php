<?php
// Inicializa variáveis
$name = '';
$email = '';
$phone = '';
$document = '';
$address = '';
$error = '';

// Verifica se o CPF foi enviado via POST
if (isset($_POST['document'])) {
    $cpf = preg_replace('/[^0-9]/', '', $_POST['document']);
    $filename = 'customers/' . $cpf . '.json';

    // Verifica se existe arquivo com dados do cliente
    if (file_exists($filename)) {
        $customerData = json_decode(file_get_contents($filename), true);
        
        if ($customerData) {
            // Atribui os dados encontrados
            $name = $customerData['name'];
            $email = $customerData['email'];
            $phone = $customerData['phone'];
            $document = $customerData['cpf'];
            
            // Monta o endereço completo
            $address = sprintf("%s, %s - %s, %s-%s, CEP: %s",
                $customerData['address']['street'],
                $customerData['address']['number'],
                $customerData['address']['district'],
                $customerData['address']['city'],
                $customerData['address']['state'],
                $customerData['address']['zip_code']
            );
        } else {
            $error = 'Erro ao ler dados do cliente';
        }
    } else {
        $error = 'Cliente não encontrado';
    }
} else {
    $error = 'CPF não fornecido';
}

// Redireciona para a página de resultados com os dados
header('Location: result.html?' . http_build_query(array(
    'name' => $name,
    'email' => $email,
    'telephone' => $phone,
    'document' => $document,
    'address' => $address,
    'error' => $error
)));
exit;
?>