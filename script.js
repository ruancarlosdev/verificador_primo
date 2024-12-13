function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero <= 1) {
        resultado.textContent = "Por favor, digite um número válido maior que 1.";
        resultado.style.color = "red";
        return;
    }

    let isPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        resultado.textContent = `${numero} é um número primo!`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `${numero} não é um número primo.`;
        resultado.style.color = "red";
    }
}
