function crime() {
    let a1 = document.getElementById("telefone").checked;
    let a2 = document.getElementById("local").checked;
    let a3 = document.getElementById("onde").checked;
    let a4 = document.getElementById("dever").checked;
    let a5 = document.getElementById("trabalho").checked;

    let contador = 0;

    if (a1 == true) {
        contador++;
    }

    if (a2 == true) {
        contador++;
    }

    if (a3 == true) {
        contador++;
    }

    if (a4 == true) {
        contador++;
    }

    if (a5 == true) {
        contador++;
    }

    if (contador == 2) {
        document.getElementById("text").innerHTML = "suspeito"
    }
    else if (contador == 3) {
        document.getElementById("text").innerHTML = "Cumplice"
    }
    else if (contador == 4) {
        document.getElementById("text").innerHTML = "Cumplice"
    }
    else if (contador == 5) {
        document.getElementById("text").innerHTML = "assasino"
    }

    console.log(contador);
}





function caixa() {
    let num1 = document.getElementById('saque').value;

    if (num1 <= 9) {
        document.getElementById("error").innerHTML = "insira um valor válido entre 10 e 1000 reais";
        return
    }
    
    if (num1 >= 1001) {
        document.getElementById("error").innerHTML = "insira um valor válido entre 10 e 1000 reais";
        return
    }
    
    let sobraCem = num1 % 100;
    
    let sobraCinquenta = sobraCem % 50;
    
    let sobraDez = sobraCinquenta % 10;
    
    let sobraCinco = sobraDez % 5;
    
    let sobraUm = sobraCinco % 1;
    
    let cem = num1 - sobraCem;
    
    let notasCem = cem * 0.01;
    
    let cinquenta = sobraCem - sobraCinquenta;
    
    let notasCinquenta = cinquenta / 50;
    
    let dez = sobraCinquenta - sobraDez;
    
    let notasDez = dez / 10;
    
    let cinco = sobraDez - sobraCinco;
    
    let notasCinco = cinco / 5;
    
    let um = sobraCinco - sobraUm;
    
    let notasUm = um / 1;

    document.getElementById('cem').innerHTML = notasCem + 'notas de cem';
    document.getElementById('cinquenta').innerHTML = notasCinquenta + 'notas de cinquenta';
    document.getElementById('dez').innerHTML = notasDez + 'notas de dez';
    document.getElementById('cinco').innerHTML = notasCinco + 'notas de cinco';
    document.getElementById('um').innerHTML = notasUm + 'notas de um';
}