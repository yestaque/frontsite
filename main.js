 const QRCode = require('qrcode');

// Chave PIX (número de celular, CPF, CNPJ ou e-mail associado ao Nubank)
const chavePIX = '84992160269'; // Substitua pelo seu número de celular ou CPF registrado no Nubank

// Informações da transação
const valor = 100.00;  // R$100.00
const descricao = 'Audi';  // Descrição do produto/serviço
const cidade = 'Natal - RN';  // Cidade
const nome = 'Gabriel Freire Bacelar Huhn';  // Nome do beneficiário (você ou sua empresa)

// Gerar o payload (o corpo da cobrança PIX)
const payload = `
00020126580014BR.GOV.BCB.PIX0136dd669903-6391-44bd-94a8-c8af40378bd35204000053039865406100.005802BR5925Gabriel Freire Bacelar Hu6009SAO PAULO61080540900062250521FRVVcm3w5KKuaLZ106qyp6304A041
`;

// Gerar o QR Code com o payload
QRCode.toDataURL(payload, (err, qrCodeDataUrl) => {
    if (err) {
        console.error('Erro ao gerar QR Code:', err);
    } else {
        console.log('QR Code gerado com sucesso!');
        console.log(qrCodeDataUrl);  // Aqui você obterá a URL do QR Code gerado
    }
});


