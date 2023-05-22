function meses() {

    let mes = document.getElementById("mes").value
    let mensagem;

    switch (mes) {
        case "1":
            mensagem = "O mês referente ao seu número é: Janeiro";
            break;

        case "2":
            mensagem = "O mês referente ao seu número é: Fevereiro";
            break;

        case "3":
            mensagem = "O mês referente ao seu número é: Março ";
            break;
        case "4":
            mensagem = "O mês referente ao seu número é: Abril";
            break;

        case "5":
            mensagem = "O mês referente ao seu número é: Maio";
            break;

        case "6":
            mensagem = "O mês referente ao seu número é: Junho";
            break;
        case "7":
            mensagem = "O mês referente ao seu número é:Julho";
            break;

        case "8":
            mensagem = "O mês referente ao seu número é:Agosto";
            break;

        case "9":
            mensagem = "O mês referente ao seu número é: Setembro";
            break;
        case "10":
            mensagem = "O mês referente ao seu número é: Outubro";
            break;

        case "11":
            mensagem = "O mês referente ao seu número é: Novembro";
            break;

        case "12":
            mensagem = "O mês referente ao seu número é: Dezembro";
            break;


        default:
            mensagem = "Insira um numero entre 1 a 12";
            break;
    }

    document.getElementById("qlmes").innerHTML = mensagem;

}


function date() {
    const time = new Date().getDay();
    let mensagem;

    switch (time) {

        case 1:
            mensagem = "Hoje é um(a): Segunda";
            break;

        case 2:
            mensagem = "Hoje é um(a): Terça";
            break;

        case 3:
            mensagem = "Hoje é um(a): Quarta";
            break;

        case 4:
            mensagem = "Hoje é um(a): Quinta";
            break;

        case 5:
            mensagem = "Hoje é um(a): Sexta";
            break;

        case 6:
            mensagem = "Hoje é um(a): Sabado";
            break;

        case 0:
            mensagem = "Hoje é um(a): Domingo";
            break;

        default:
            mensagem = "Desculpa, tivemos um erro em nosa página";
            break;
    }

    document.getElementById("dia").innerHTML = mensagem;
}