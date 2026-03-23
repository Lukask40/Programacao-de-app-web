function ativar() {

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let res = document.getElementById("res");

    if (
        isNaN(n1) || isNaN(n2) || isNaN(n3) ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        res.innerHTML = "⚠️ Notas inválidas (0 a 10)";
        res.style.color = "red";
        return;
    }

    let media = (n1 + n2 + n3) / 3;

    // EFEITO VISUAL (tipo explosão)
    document.body.style.background = "white";
    setTimeout(() => {
        document.body.style.background = "black";
    }, 150);

    if (media >= 7) {
        res.innerHTML = "✨ Aprovado | Média: " + media.toFixed(1);
        res.style.color = "cyan";
    }
    else if (media >= 5) {
        res.innerHTML = "⚡ Recuperação | Média: " + media.toFixed(1);
        res.style.color = "yellow";
    }
    else {
        res.innerHTML = "💀 Reprovado | Média: " + media.toFixed(1);
        res.style.color = "red";
    }
}