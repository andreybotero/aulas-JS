alert("Hello, World");

//Receber dados via prompt e usar eles dentro de um array

let entrada;
let dados = [];
let i = 0


entrada = prompt("digite um dado e coloque FIM para encerrar").toUpperCase();

while (entrada != "FIM") {
    dados.push(entrada);
    entrada = prompt("digite um dado e coloque FIM para encerrar").toUpperCase();

}

while (i < dados.length) {
    console.log(dados[i]);
    i++
}