// function calculeteSum(a, b) {
//     return a + b;
// }

// let num1 = 5;
// let num2 = "10";



// let result = calculeteSum(num1, Number(num2) );
// console.log(result);
// console.log(num1)
// console.log(num2);


// function reverseString(str) {

//     let reversed Str = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         reversedStr += str[1];


//     }
//     return reversedStr;
// }
//     let string = "hello";
//     let reversed = reverseString(string);
//     console.log(reversed);


// function getSmallestNumber(numbers) {
//     let smallestNumber = numbers[0];
//     for ( let i = 0; i < numbers.length; i++ ){
//     if ( numbers[i] < smallestNumber){
//         smallestNumber = numbers[i];
//     }
//     }
//         return smallestNumber;
//     }
//     let numbers = [5, 10, 2, 8, 3];
//     let smallestNumber = getSmallestNumber(numbers);
//     console.log("o menor número é " + smallestNumber );


// function factorial(n){
//     if(n < 0){
//         return undefined
//         return 1;

//     }else  if (n ===0){
//        return 1;
//     }else{
//         return n* factorial(n-1);
//     }
// }
// let result = factorial(-5);
// console.log(result);


// var list = [];
// function adicionarEntrada() {
//     //captura o valor do campo de texto
//     var entrada = document.getElementById("campoTexto").value;

//     //adiciona a entrada no array
//     list.push(entrada);

//     //limpa o campo de texto
//     document.getElementById('campoTexto').value = '';


//     var msg = "";
//     for (let i = 0; i < list.length; i++) {
//         msg += '<p id = "p1" >${list[i]}</p>';
//     }

//     //exibe o array completo
//     console.log(list);
// }


// let list = [];

// function adicionarEntrada(){
//     let entrada = document.getElementById('inp').value;

//     list.push(entrada);

//     document.getElementById('inp').value = '';

//     let conteudoArray = '';

//     for (let i = 0; i < list.length; i++){
//         conteudoArray += '<p>' + list[i] + '</p>';
//     }

//     document.getElementById('result').innerHTML = conteudoArray;


// }

// let list2 = [];

// function adicionarEntrada2(){
//     let entrada2 = document.getElementById('inp2').value;

//     list2.push(entrada2);

//     document.getElementById('inp2').value = '';

//     let conteudoArray2 = '';

//     for (let l = 0; l < list2.length; l++){
//         conteudoArray2 += '<p>' + list2[l] + '</p>';
//     }

//     document.getElementById('result2').innerHTML = conteudoArray2;


// }




// .FILTER()


// const arr = [2, 4, 6, 8];
// const novo = arr.filter(num => num > 5)
// console.log(novo);




// .FILTER()

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const novo = num.filter(num => num % 2 == 0);
// console.log(novo);





// .CONCAT()

// let arr1 = ['branco', 10, 20, 30, null];
// let arr2 = ['verde', 40, 50, 60, undefined];
// arr1 = arr1.concat(arr2);
// console.log(arr1);





// .JOIN()

// let arr1 = ['branco', 10, 20, 30];
// arr1 = arr1.join('-');
// console.log(arr1);
// console.log(typeof(arr1));







// .POP

// let arr1 = ['branco', 10, 20, 30, "novo elemento"];
// arr1.pop()
// console.log(arr1);








// .SHIFT

// let arr1 = ['branco', 10, 20, 30, "novo elemento"];
// arr1.shift()
// console.log(arr1);








// .UNSHIFT

// let arr1 = ['branco', 10, 20, 30, "novo elemento"];
// arr1.unshift('batata')
// console.log(arr1);








// .REVERSE

// let arr1 = ['branco', 10, 20, 30, "novo elemento"];
// arr1.reverse()
// console.log(arr1);







// .MATH MAX

// let num = [10, 20, 5, 30, 15];
// let maior = Math.max(...num);
// console.log(maior); 






// .MATH MIN

// let num = [10, 20, 5, 30, 15];
// let menor = Math.min(...num);
// console.log(menor);





