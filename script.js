function calcularMedia() {

    //ENTRADA
    let input1 = document.getElementById("nota1").value;
    let input2 = document.getElementById("nota2").value;
    let input3 = document.getElementById("nota3").value;

    //VALIDAÇÃO 1
    if (input1 === "" || input2 === "" || input3 === "") {
        alert("Você esqueceu de digitar uma nota!");
        return;
    }

    //CONVERSÃO
    let nota1 = Number(input1);
    let nota2 = Number(input2);
    let nota3 = Number(input3);

    //VALIDAÇÃO 2
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Digite notas válidas entre 0 e 10!");
        return;
    }

    //PROCESSAMENTO
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado";
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado";
    }

    //SAÍDA
    document.getElementById("media").innerHTML = `A média é ${media.toFixed(2)}`;
}

function limparCampos() {

    // Limpa os campos de entrada
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    // Limpa os textos de resultado
    document.getElementById("media").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}