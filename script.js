function calcularMedia() {

    //pega o valor dos inputs
    let input1 = document.getElementById("nota1").value;
    let input2 = document.getElementById("nota2").value;
    let input3 = document.getElementById("nota3").value;

    //validação dos campos vazios
    if (input1 === "" || input2 === "" || input3 === "") {
        alert("Você esqueceu de digitar uma nota!");
        return;
    }

    //conversão dos valores
    let nota1 = Number(input1);
    let nota2 = Number(input2);
    let nota3 = Number(input3);

    //validação dos valores entre 0 e 10 (notas)
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Digite notas válidas entre 0 e 10!");
        return;
    }

    //processamento da media e definição do status
    let media = Number(((nota1 + nota2 + nota3) / 3).toFixed(2));
    let statusTexto = "";

    if (media >= 7) {
        statusTexto = "Aprovado";
        document.getElementById("resultado").style.color = "#16a34a"; 
    } else if (media >= 5 && media < 7) {
        statusTexto = "Recuperação";
        document.getElementById("resultado").style.color = "#ca8a04"; 
    } else {
        statusTexto = "Reprovado";
        document.getElementById("resultado").style.color = "#dc2626"; 
    }

    //limpar os inputs
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    //SAÍDA
    document.getElementById("media").innerHTML = `A média é ${media} .`;
    document.getElementById("resultado").innerHTML = `O aluno está ${statusTexto} .`
}

function limparCampos() {
    // Limpa os textos de resultado
    document.getElementById("media").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

//chamando o evento de calcularmedia
document.getElementById("calcular").addEventListener("click", calcularMedia);

//chamando o evento de limpar campos
document.getElementById("limpar").addEventListener("click", limparCampos);

//função para adicionar o evento de enter
function apertarEnter(event){
if(event.key === "Enter"){
    calcularMedia();
}
}

//conectando o evento apertarEnter nos inputs
document.getElementById("nota1").addEventListener("keydown", apertarEnter);
document.getElementById("nota2").addEventListener("keydown", apertarEnter);
document.getElementById("nota3").addEventListener("keydown", apertarEnter);