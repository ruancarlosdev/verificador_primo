function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value); // Obtém o valor do input
    const resultado = document.getElementById('resultado'); // Referência ao parágrafo para exibir o resultado

    if (isNaN(numero) || numero <= 1) { // Verifica se o valor não é um número ou é menor ou igual a 1
        resultado.textContent = "Por favor, digite um número válido maior que 1.";
        resultado.style.color = "red";
        return;
    }

    let isPrimo = true; // Assume que o número é primo

    for (let i = 2; i <= Math.sqrt(numero); i++) { // Verifica até a raiz quadrada do número
        if (numero % i === 0) { // Se o número for divisível por i, não é primo
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
