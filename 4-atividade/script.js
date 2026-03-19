function verificarVoto() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const resultadoVoto = document.getElementById('resultadoVoto');

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    if (idade < 16) {
        resultadoVoto.textContent = "Você é novo, lhe falta idade.";
    } else if (idade >= 16 && idade < 17) {
        resultadoVoto.textContent = "Voto opcional.";
    }else if (idade >= 18 && idade < 65) {
        resultadoVoto.textContent = "Você é obrigado a votar.";
    } else {
        resultadoVoto.textContent = "Você não é obrigado a votar.";
    }
}

document.getElementById('btnVerificarVoto').addEventListener('click', verificarVoto);