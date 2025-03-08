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

// Adicionando evento para o formulário de filtro
document.getElementById('form-filtros').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregar a página
    
    // Captura os valores dos filtros
    const precoSelecionado = document.getElementById('preco').value;
    const marcaSelecionada = document.getElementById('marca').value;

    // Exibe os filtros selecionados no console (para verificação)
    console.log('Preço selecionado:', precoSelecionado);
    console.log('Marca selecionada:', marcaSelecionada);

    // Chama a função de filtro
    filtrarVeiculos(precoSelecionado, marcaSelecionada);
});

// Função para filtrar os veículos
function filtrarVeiculos(preco, marca) {
    // Lista de veículos com imagens
    const veiculos = [
        { nome: 'BMW Série 3', preco: 120000, marca: 'bmw', imagem: 'img/bmw.jpg' },
        { nome: 'Audi A4', preco: 120000, marca: 'audi', imagem: 'img/audi.jpg' },
        { nome: 'Jeep Compass', preco: 130000, marca: 'jeep', imagem: 'img/jeep.jpg' },
        { nome: 'Lamborghini Huracán', preco: 300000, marca: 'lamborguini', imagem: 'img/lamborguini.jpg' },
        { nome: 'Mercedes-Benz Classe A', preco: 200000, marca: 'mercedes-benz', imagem: 'img/mercedes-benz.jpg' },
        { nome: 'Range Rover Evoque', preco: 220000, marca: 'range-rover', imagem: 'img/range-rover.jpg' },
        { nome: 'Chevrolet Tracker', preco: 85000, marca: 'chevrolet', imagem: 'img/chevrolet.jpg' },
        { nome: 'Ford Mustang', preco: 180000, marca: 'ford', imagem: 'img/ford.jpg' },
        { nome: 'Toyota Corolla', preco: 95000, marca: 'toyota', imagem: 'img/toyota.jpg' },
        { nome: 'Porsche 911', preco: 400000, marca: 'porsche', imagem: 'img/porsche.jpg' }
    ];

    // Filtra os veículos de acordo com os filtros aplicados
    const veiculosFiltrados = veiculos.filter(veiculo => {
        const filtroPreco = preco === 'todos' || veiculo.preco <= preco;
        const filtroMarca = marca === 'todos' || veiculo.marca === marca;

        return filtroPreco && filtroMarca;
    });

    // Exibe os veículos filtrados
    exibirResultados(veiculosFiltrados);
}

// Função para exibir os resultados na página
function exibirResultados(veiculos) {
    const listaVeiculos = document.getElementById('lista-veiculos');
    listaVeiculos.innerHTML = ''; // Limpa os resultados anteriores

    // Exibe os carros filtrados
    if (veiculos.length > 0) {
        veiculos.forEach(veiculo => {
            const veiculoItem = document.createElement('div');
            veiculoItem.classList.add('veiculo');

            veiculoItem.innerHTML = `
                <h3>${veiculo.nome}</h3>
                <img src="${veiculo.imagem}" alt="${veiculo.nome}" class="veiculo-imagem">
                <p>Preço: R$ ${veiculo.preco.toLocaleString('pt-BR')}</p>
                <p>Marca: ${veiculo.marca}</p>
                <button>Comprar Agora</button>
            `;

            listaVeiculos.appendChild(veiculoItem);
        });
    } else {
        listaVeiculos.innerHTML = '<p>Nenhum veículo encontrado para os filtros aplicados.</p>';
    }
}

let preco = 50000

if (preco > 50000) {
    console.log('O preço é maior que 50000')
} else{
    console.log('O número NÃO é maior que 50000')
}


let select = document.getElementById("marca")
let botao = document.getElementById("botao-veiculos")
let preço = document.getElementById("preço")

let arrayDeCarros = ['Audi','BMW','Chevrolet']


function cliqueiNoBotao(){
   arrayDeTarefas.push(select.value)
}

function mostrarNaTela(){
    let novaLista = ""

    arrayDeTarefas.forEach( tarefa => {
        
        novaLista = novaLista +
        <li>
            <p>${tarefa}</p>
        </li>
    })
}

console.log(arrayDeTarefas)


botao.addEventListener("click", cliqueiNoBotao)

console.log(select)
console.log(botao)