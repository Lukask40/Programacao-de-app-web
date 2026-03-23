function calcularMedia() {
    // Pega os elementos de input
    const input1 = document.getElementById('nota1');
    const input2 = document.getElementById('nota2');
    const input3 = document.getElementById('nota3');
    const resultado = document.getElementById('resultado');

    // Remove erros anteriores
    input1.classList.remove('input-erro');
    input2.classList.remove('input-erro');
    input3.classList.remove('input-erro');
    resultado.className = ''; 

    // Converte os valores para números decimais
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);
    const n3 = parseFloat(input3.value);

    // Função interna para checar se a nota é inválida
    const notaInvalida = (nota) => {
        return isNaN(nota) || nota < 0 || nota > 10;
    };

    let temErro = false;

    // VALIDAÇÃO: Se for menor que 0 ou maior que 10, destaca o campo e pede de novo
    if (notaInvalida(n1)) { input1.classList.add('input-erro'); temErro = true; }
    if (notaInvalida(n2)) { input2.classList.add('input-erro'); temErro = true; }
    if (notaInvalida(n3)) { input3.classList.add('input-erro'); temErro = true; }

    if (temErro) {
        resultado.innerHTML = "⚠️ <strong>Erro!</strong> As notas devem estar entre 0 e 10. Corrija os campos em vermelho e tente novamente.";
        resultado.classList.add('reprovado');
        return; // Interrompe a execução aqui até que o usuário corrija
    }

    // CÁLCULO DA MÉDIA
    const media = (n1 + n2 + n3) / 3;
    const mediaFormatada = media.toFixed(1); // Deixa com 1 casa decimal

    // VERIFICAÇÃO DE STATUS
    if (media >= 7) {
        resultado.innerHTML = `🤞 <strong>Você é forte!</strong><br>Média: ${mediaFormatada} - <strong>APROVADO</strong>`;
        resultado.classList.add('aprovado');
    } 
    else if (media >= 5 && media < 7) {
        resultado.innerHTML = `⚠️ <strong>Quase pego na maldição!</strong><br>Média: ${mediaFormatada} - <strong>RECUPERAÇÃO</strong>`;
        resultado.classList.add('recuperacao');
    } 
    else { // Menor que 5
        resultado.innerHTML = `🌌 <strong>Vazio Imensurável.</strong><br>Média: ${mediaFormatada} - <strong>REPROVADO</strong>`;
        resultado.classList.add('reprovado');
    }
}

// Escuta o clique do botão
document.getElementById('btnCalcular').addEventListener('click', calcularMedia);