function  calcularMedia() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    
    let media = (nota1 + nota2 + nota3) / 3;
    
    let resultado = document.getElementById("resultadoMedia");
    resultado.innerHTML = "A média de " + nome + " é: " + media.toFixed(2);

    let situacao = media < 7 ? "Reprovado" : "Aprovado";
    resultado.innerHTML += "<br>Situação: " + situacao;

}

document.getElementById("btnCalcularMedia").addEventListener("click", calcularMedia);
