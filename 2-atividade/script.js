function calcular(){

let valor1 = parseFloat(document.getElementById("numeroInput1").value);
let valor2 = parseFloat(document.getElementById("numeroInput2").value);

if(isNaN(valor1) || isNaN(valor2)){
alert("Digite números válidos");
return;
}

let soma = valor1 + valor2;
let media = (valor1 + valor2) / 2;
let maior = Math.max(valor1,valor2);
let menor = Math.min(valor1,valor2);

let resultado = document.getElementById("resultadoCalculo");

resultado.innerHTML = `
<div class="resultado-item">Soma: ${soma}</div>
<div class="resultado-item">Média: ${media}</div>
<div class="resultado-item">Maior número: ${maior}</div>
<div class="resultado-item">Menor número: ${menor}</div>
`;

}

document.getElementById("btnCalcular").addEventListener("click",calcular);