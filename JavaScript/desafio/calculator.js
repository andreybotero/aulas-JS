function subtrair() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let resultado = num1 - num2;
    document.getElementById("menos").innerHTML = `O resultado da subitração é: ${resultado}`;
}

function soma() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let resultado = num1 + num2;
    document.getElementById("mais").innerHTML = `O resultado da soma é: ${resultado}`;
}

function multiplicar() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let resultado = num1 * num2;
    document.getElementById("vezes").innerHTML = `O resultado da multiplicação é: ${resultado}`;
}



function dividir() {
    if (num1 && num2 != null || num1 && num2 != "" || num1 && num2 != undefined) {

        if (num2 != 0) {

            let num1 = Number(document.getElementById("number1").value);
            let num2 = Number(document.getElementById("number2").value);
            let resultado = num1 / num2;
            document.getElementById("dividido").innerHTML = `O resultado da divisão é: ${resultado}`;
        } else {
            document.getElementById("dividido").innerHTML = "Coloque um valor valido";
        }
    } else {
        document.getElementById("dividido").innerHTML = "Coloque um valor valido";
    }
}

function saudacao() {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {

        document.getElementById("saudacao").innerHTML = "Bom dia";

    } else if (hora >= 12 && hora < 18) {

        document.getElementById("saudacao").innerHTML = "Boa Tarde";

    } else {
        document.getElementById("saudacao").innerHTML = "Boa Noite";
    }
}


function verfy() {

    let num1 = Number(document.getElementById("num1").value);

    if (num1 == 0) {
        document.getElementById("resultado").innerHTML = 'Este numer é igual a 0';
    } else if (num1 > 0) {
        document.getElementById("resultado").innerHTML = 'Este numer é positivo';
    } else if (num1 < 0) {
        document.getElementById("resultado").innerHTML = 'Este numer é negativo';
    }
}


function nota() {
    let num1 = document.getElementById("nota1").value;
    let num2 = document.getElementById("nota2").value;

    if(num1 == "" || num2 == "") {
        alert('Digite as notas no sistema')
    }


    let resultado = num1 + num2;
    let nota3 = resultado / 2;
    if (nota3 < 5) {
        document.getElementById("igual").innerHTML = 'Reprovado';
    } else if (nota3 >= 5 && nota3 < 7) {
        document.getElementById("igual").innerHTML = 'Recuperação';
    } else {
        document.getElementById("igual").innerHTML = 'Aprovado';
    }
}

function par() {
    let parimpar = document.getElementById("parimpar").value;

    if ((parimpar % 2 ) == 0 ) {
         document.getElementById("resultados").innerHTML = "true";
    }else{
        document.getElementById("resultados").innerHTML = "false";
    }
}
