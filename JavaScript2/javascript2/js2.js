function size() {

    let nome = document.getElementById("qualquer").value;

    let tamanho = nome.length;
    document.getElementById("resp").innerHTML = tamanho;

    let giga = nome.toUpperCase();
    document.getElementById("resp2").innerHTML = giga;

    let mini = nome.toLowerCase();
    document.getElementById("resp3").innerHTML = mini;
}


function juntar() {
    let text1 = document.getElementById("t1").value;
    let text2 = document.getElementById("t2").value;
    let msg = text1.concat("@", text2);

    document.getElementById("resp4").innerHTML = msg;
}

function numbers() {

    let nums = []
    nums[0] = document.getElementById("ipt1").value;
    nums[1] = document.getElementById("ipt2").value;
    nums[3] = document.getElementById("ipt3").value;



    if (nums == 0) {
        nums[0] = document.getElementById("ipt1").innerHTML = `Seu valor é ${nums[0]}`
    }
}
function crime() {

    let p0 = document.getElementById("p0").value;
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;

    let ino = document.getElementById("resposta").innerHTML = "Você é Inocente";
    let sus = document.getElementById("resposta").innerHTML = "Você é Suspeito";
    let cump = document.getElementById("resposta").innerHTML = "Você é Cumplice!";
    let assas = document.getElementById("resposta").innerHTML = "Você é o Assassino!!";

    /*      INOCENTE        */
    if (p0 == "" || p1 == "" || p2 == "" || p3 == "" || p4 == ""){
alert("escreva as respostas");
    }
    
    else if (p0 == "Não" || p1 == "Não" || p2 == "Não" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = ino;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Não" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = ino;
    } else if (p0 == "Não" || p1 == "Sim" || p2 == "Não" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = ino;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Sim" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = ino;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Não" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = ino;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Não" || p3 == "Não" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = ino;
    }

    /*   ASSASSINO   */
    else if (p0 == "Sim" || p1 == "Sim" || p2 == "Sim" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = assas;
    }

    /*      SUSPEITO        */
    else if (p0 == "Sim" || p1 == "Sim" || p2 == "Não" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Sim" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Não" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Não" || p3 == "Não" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Não" || p1 == "Sim" || p2 == "Sim" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Sim" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = sus;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Não" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = sus;
    }
    /*   CUMPLICE 3 SIM   */
    else if (p0 == "Sim" || p1 == "Sim" || p2 == "Sim" || p3 == "Não" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Sim" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Não" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Não" || p3 == "Não" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Não" || p1 == "Sim" || p2 == "Sim" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Não" || p1 == "Sim" || p2 == "Sim" || p3 == "Não" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Não" || p1 == "Não" || p2 == "Sim" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    }

    /*   CUMPLICE 4 SIM   */
    else if (p0 == "Sim" || p1 == "Sim" || p2 == "Sim" || p3 == "Sim" || p4 == "Não") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Não" || p2 == "Sim" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Sim" || p2 == "Não" || p3 == "Sim" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else if (p0 == "Sim" || p1 == "Sim" || p2 == "Sim" || p3 == "Não" || p4 == "Sim") {
        document.getElementById("resposta").innerHTML = cump;
    } else {
        document.getElementById("resposta").innerHTML = cump;
    }

}