function quadrado(valor) {
    return valor * valor;
}

function calcularImc(peso, altura) {
    return peso / quadrado(altura);
}

function calssificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obesidade');
    } else {
        return ('Obesidade grave');
    }
}

function main() {
    const peso = 65;
    const altura = 1.67;
    const imc = calcularImc(peso, altura);

    console.log(imc);
    console.log(calssificarImc(imc));
}

main();

// Em JS, as funções são objetos e podem ser manipuladas como tal

console.log(main);

const main2 = main;

main2();

main = function() {
    console.log(1);
}

main ();

// Função imediatamente invocada. Ou seja, ela cria e já se executa. Nesse caso, ela está sem nome, o que a torna uma função não nomeada

(function () {
    const peso = 65;
    const altura = 1.67;
    const imc = calcularImc(peso, altura);

    console.log(imc);
    console.log(calssificarImc(imc));
})();