//let nome = prompt("Qual o seu nome?");
//console.log(nome);


//for (let i = 0; i <= 10; i++) {
//console.log(i)
//}

//let numero = prompt("coloque um numero aleatório de seu desejo");

//for ( let i = 0; i <= numero; i++ ) {
//    console.log(i)
//}

//let lista = [1,2,3,4,5,6,7,8,9,10];
//let tamanho = lista.length;

//for (let contador = 10; contador <= tamanho; contador++) {
//    console.log(lista[contador]);
//}

//for (let i = 10; i >= 0; i--) {
//    console.log(i);
//}

//let lista = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//let tamanho = lista.length;
//for (let i = 0; i <= tamanho; i++) {
//    if (lista[i] % 2 == 0) {
//        console.log(lista[i])
//    }
//}

//let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let par = [];
// let imp = [];

// let tamanho = lista.length;
// for (let i = 0; i < tamanho; i++) {
//     if (lista[i] % 2 == 0) {
//         par.push(lista[i]);
//     }else {
//         imp.push(lista[i])
//     }
// }

// console.log("pares", par);
// console.log("impares", imp);

// let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = lista.length;

// let maior = lista[0];
// let menor = lista[0];

// let soma = 0;

// let media = 0;

// for (let i = 0; i < n; i++) {

//     soma += lista[i];

//     media = soma / n;


//     if (lista[i] < menor) {
//         menor = lista[i]
//     }

//     if (lista[i] > maior) {
//         maior = lista[i]
//     }


// }
// console.log("Soma", soma);
// console.log("Média", media);
// console.log("Maior", maior);
// console.log("Menor", menor);


// let lista = prompt('Digite um número:');
// let tabuada = '';
// for (let i = 0; i <= 10; i++) {
//     tabuada += `${lista} x ${i} = ${lista * i}\n`
// }
// console.log("O resultado é:", tabuada);

// let senha = "Senai564";x
// let tentativas = 0;
// let acess = false;
// for (let i = 0; i < 3 && !acess; i++) {
//     let ace = prompt("Digite a senha:");
//     if (ace === senha) {
//     alert("WELCOME TO THE MATO");
//     acess = true;
//   }else {
//     tentativas++;
//     alert("Senha incorreta! tente mais uma vezes.");
//   }
// }if (!acess) {
//   alert("TENTATIVAS DE SENHAS SE ESGOTARAM");
// }

// let num = parseInt(Math.random() * 100) + 1;
// let tt = 0;
// for (let i = 1; i <= 101; i++) {
//     let resp = (prompt("Adivinhe o número secreto"));
//     tt++;
//     if (resp == num) {
//         alert(`Parabéns, você acertou o número secreto em ${tt} tentativas!`);
//     } else if (resp > num) {
//         alert("O número é menor. Tente novamente!");
//     } else {
//         alert("O número é maior. Tente novamente!");
//     }
// }

// let nome = prompt("Insira seu nome");
// let d2 = nome.length

// for (d2 = 0; d2 < 3; i++) {
//     if (d2 < 3) {
//         alert("Seu nome é invalido, possui o menos de 3 letras, tente seu sobrenome!!");
//     nome;
//     } else {
//         alert("Parabens, nome válido");
//     }
// }