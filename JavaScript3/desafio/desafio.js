function comida() {
    let alimento = Number(document.getElementById("produto").value);

    let produto;
    let preco;
    let validade;
    let vencido;

    let vencedor = new Date();

    switch (alimento) {

        case 1:
            produto = 'Arroz';
            preco = 'R$:10,00';
            validade = '30/06/2023';
            validadeFormatada = '2023/06/30';
            break;

        case 2:
            produto = 'Feijão';
            preco = 'R$:8,50';
            validade = '31/12/2023';
            validadeFormatada = '2023/12/31';
            break;

        case 3:
            produto = 'Macarrão';
            preco = 'R$:5,20';
            validade = '15/09/2022';
            validadeFormatada = '2022/09/15';
            break;

        case 4:
            produto = 'Leite';
            preco = 'R$:3,00';
            validade = '25/04/2023';
            validadeFormatada = '2023/04/25';
            break;

        case 5:
            produto = 'Café';
            preco = 'R$:12,00';
            validade = '31/12/2024';
            validadeFormatada = '2024/12/31';
            break;

        case 6:
            produto = 'Açúcar';
            preco = 'R$:4,80';
            validade = '30/06/2022';
            validadeFormatada = '2022/06/30';
            break;

        case 7:
            produto = 'Óleo';
            preco = 'R$:6,00';
            validade = '31/12/2024';
            validadeFormatada = '2024/12/31';
            break;

        case 8:
            produto = 'Sal';
            preco = 'R$:10,00';
            validade = '30/06/2022';
            validadeFormatada = '2022/06/30';
            break;

        case 9:
            produto = 'Vinagre';
            preco = 'R$:10,00';
            validade = '31/12/2022';
            validadeFormatada = '2022/12/31';
            break;

        case 10:
            produto = 'Farinha';
            preco = 'R$:10,00';
            validade = '30/06/2023';
            validadeFormatada = '2023/06/30';
            break;

        default:
            alert('Insira um valor válido entre 1 e 10');
            return;
    }

    let data = new Date(validadeFormatada);

    if (vencedor > data) {
        document.getElementById("vencimento").innerHTML = "O produto está vencido";
    } else {
        document.getElementById("vencimento").innerHTML = "O produto NÃO está vencido";
    }

    document.getElementById("nome").innerHTML = produto;
    document.getElementById("preço").innerHTML = preco;
    document.getElementById("validade").innerHTML = validade;
}