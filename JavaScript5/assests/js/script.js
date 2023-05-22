// var diasSemana = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"];
// var temperaturas = [];
// var temperaturaDia;
// var somaTemperaturas = 0;
// var i = 0;

// while (i < diasSemana.length) {
//   temperaturaDia = prompt("Digite a temperatura média de " + diasSemana[i]);

//   temperaturas.push({
//     dia: diasSemana[i],
//     temperatura: parseFloat(temperaturaDia)
//   });

//   somaTemperaturas += temperaturas[i].temperatura;
//   i++;
// }

// temperaturas.sort(function (a, b) {
//   return a.temperatura - b.temperatura;
// });

// console.log("Temperaturas da semana (em ordem crescente):");
// for (var j = 0; j < temperaturas.length; j++) {
//   console.log(temperaturas[j].dia + ": " + temperaturas[j].temperatura);
// }

// var mediaSemana = somaTemperaturas / temperaturas.length;

// console.log("Média da semana: " + mediaSemana.toFixed(2));