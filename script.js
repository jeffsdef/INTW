function maiorMenor() {
    // Obtém os valores do formulário
    let valores = [];
    valores.push(parseInt(document.getElementById("valor1").value));
    valores.push(parseInt(document.getElementById("valor2").value));
    valores.push(parseInt(document.getElementById("valor3").value));
    valores.push(parseInt(document.getElementById("valor4").value));
    valores.push(parseInt(document.getElementById("valor5").value));

    // Encontra o maior e o menor valor
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = "Maior valor: " + maior + "<br>Menor valor: " + menor;
}

function verificarVogal() {
    // Obtém o caractere do formulário
    let caractere = document.getElementById("caractere").value.toLowerCase();

    // Lista de vogais
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    // Verifica se o caractere está na lista de vogais
    let resultado = vogais.includes(caractere) ? 1 : 0;

    // Exibe o resultado
    document.getElementById("vogalResultado").innerHTML = resultado === 1 ? "(1) É uma vogal!" : "(0) Não é uma vogal.";
}

function calcularLimites() {
    let li = parseInt(document.getElementById("limiteInferior").value);
    let ls = parseInt(document.getElementById("limiteSuperior").value);

    let numerosPares = [];
    let somaPares = 0;

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            somaPares += i;
        }
    }

    document.getElementById("limitesResultado").innerHTML = 
        "Números Pares: " + numerosPares.join(", ") + "<br>Somatório: " + somaPares;
}

// Função para mostrar o formulário com base na escolha do usuário
function mostrarFormulario() {
    let escolha = document.getElementById("funcaoSelect").value;

    document.getElementById("maiorMenorForm").style.display = "none";
    document.getElementById("vogalForm").style.display = "none";
    document.getElementById("limitesForm").style.display = "none";

    if (escolha === "maiorMenor") {
        document.getElementById("maiorMenorForm").style.display = "block";
    } else if (escolha === "vogal") {
        document.getElementById("vogalForm").style.display = "block";
    } else if (escolha === "limites") {
        document.getElementById("limitesForm").style.display = "block";
    }
}

function ordenarNumeros() {
    let numeros = [];
    numeros.push(parseInt(document.getElementById("numero1").value));
    numeros.push(parseInt(document.getElementById("numero2").value));
    numeros.push(parseInt(document.getElementById("numero3").value));

    numeros.sort((a, b) => a - b);

    document.getElementById("ordemResultado").innerHTML = "Números ordenados: " + numeros.join(", ");
}

function verificarPositivoNegativo() {
    let x = parseInt(document.getElementById("numero").value);
    
    let isPositivo = x >= 0;

    document.getElementById("positivoNegativoResultado").innerHTML = 
        isPositivo ? "O número é positivo." : "O número é negativo.";
}

function verificarParImpar() {
    let x = parseInt(document.getElementById("numeroParImpar").value);
    
    let isPar = (x % 2 === 0);

    document.getElementById("parImparResultado").innerHTML = 
        isPar ? "O número é par." : "O número é ímpar.";
}
