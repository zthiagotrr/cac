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
    
    echo "Dados salvos com sucesso!";
} else {
    echo "Dados inválidos ou incompletos.";
}
?>