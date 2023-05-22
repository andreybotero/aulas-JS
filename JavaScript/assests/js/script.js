function teste() {
    document.getElementById("demo").innerHTML = "Hello, Word";
}

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
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let resultado = num1 / num2;
    document.getElementById("dividido").innerHTML = `O resultado da divisão é: ${resultado}`;
}