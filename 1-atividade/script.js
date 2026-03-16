function gerarTabuada() {
    // Obtendo o número do input no HTML
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Eemento do HTML onde o resultado da tabuada será exibido
    const resultadoDiv = document.getElementById('resultadoTabuada');
    resultadoDiv.innerHTML = '';


    // Verificar se a entrada é um número válido
    if (isNaN(numero)  || numero  === null||numero === '') {
        resultadoDiv.innerHTML = "Por favor, digite um número válido.";
        return; //Este comando sai da função.
    }

    // Adicionar título para a tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}</h2>`;

    // Laço de repetição para gerar gerarTabuada.
    for (let i = 1; i <= 10; i++) {
        let  resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }


}

const botaoGerar = document.getElementById('bntGerar');
botaoGerar.addEventListener('click', gerarTabuada);