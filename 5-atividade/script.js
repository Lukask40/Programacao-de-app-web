function calcularCompra() {
    const quantidade = document.getElementById('quantidadeMacas').value;
    const resultado = document.getElementById('resultadoCompra');

    if (quantidade <= 0) {
        resultado.textContent = "Por favor, insira uma quantidade válida.";
        return;
    }
switch (true) {
        case (quantidade >= 1 && quantidade <= 11):
            total = quantidade * 1.30;
            break;
        case (quantidade >= 12):
            total = quantidade * 1.00;
            break;
        
    }

    resultado.textContent = `O total da compra é: R$ ${total.toFixed(2)}`;
}

document.getElementById('btnCalcularCompra').addEventListener('click', calcularCompra);