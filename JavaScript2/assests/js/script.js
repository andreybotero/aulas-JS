function multiplicador() {
    let num1 = Number(document.getElementById("number1").value);
    let resultado = num1 * 2;
    document.getElementById("edit").innerHTML = `O resultado da multiplicação é: ${resultado}`;
}

function dias() {
    let num1 = Number(document.getElementById("n1").value);

    if (num1 == 0 || num1 < 0) {
        document.getElementById("semana").innerHTML = 'Coloque um numero positivo de 1 a 7';
    } else if (num1 == 1) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Domingo';
    } else if (num1 == 2) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Segunda';
    } else if (num1 == 3) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Terça';
    } else if (num1 == 4) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Quarta';
    } else if (num1 == 5) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Quinta';
    } else if (num1 == 6) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Sexta';
    } else if (num1 == 7) {
        document.getElementById("semana").innerHTML = 'O dia da semana corresponde a: Sábado';
    } else {
        document.getElementById("semana").innerHTML = 'Coloque um numero positivo de 1 a 7';
    }
}


function salario() {
    let num1 = Number(document.getElementById("sl").value);

    if (num1 <= 0 || num1 == 0) {
        document.getElementById("error").innerHTML = `coloque um salário válido`;
    } else if (num1 >= 0 && num1 <= 6280) {

        document.getElementById("antigo").innerHTML = `O seu salário atual é igual a ${num1}`;

        document.getElementById("porcento").innerHTML = `A porcentagem de reajuste será de 20%`;

        let resultado = num1 * 0.2;
        document.getElementById("ajuste").innerHTML = `O ajuste será de: ${resultado}`;

        let atual = num1 + resultado;
        document.getElementById("novo").innerHTML = `Parabéns, seu novo salário será de ${atual}`;

    } else if (num1 >= 6280 && num1 <= 8000) {
        document.getElementById("antigo").innerHTML = `O seu salário atual é igual a ${num1}`;

        document.getElementById("porcento").innerHTML = `A porcentagem de reajuste será de 15%`;
        let resultado = num1 * 0.15;
        document.getElementById("ajuste").innerHTML = `O ajuste será de: ${resultado}`;

        let atual = num1 + resultado;
        document.getElementById("novo").innerHTML = `Parabéns, seu novo salário será de ${atual}`;

    } else if (num1 >= 8000 && num1 <= 15000) {
        document.getElementById("antigo").innerHTML = `O seu salário atual é igual a ${num1}`;

        document.getElementById("porcento").innerHTML = `A porcentagem de reajuste será de 10%`;
        let resultado = num1 * 0.1;
        document.getElementById("ajuste").innerHTML = `O ajuste será de: ${resultado}`;

        let atual = num1 + resultado;
        document.getElementById("novo").innerHTML = `Parabéns, seu novo salário será de ${atual}`;

    } else {
        document.getElementById("antigo").innerHTML = `O seu salário atual é igual a ${num1}`;

        document.getElementById("porcento").innerHTML = `A porcentagem de reajuste será de 5%`;
        let resultado = num1 * 0.05;
        document.getElementById("ajuste").innerHTML = `O ajuste será de: ${resultado}`;

        let atual = num1 + resultado;
        document.getElementById("novo").innerHTML = `Parabéns, seu novo salário será de ${atual}`;
    }
}