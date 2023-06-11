function teste() {
    console.log('teste');
}

teste();

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Bianco');
sayMyName('Case');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(quadrado(10) + quadrado(10));

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));

// Criar função main para todos os códigos



function main() {
    console.log ('Programa principal')
}

main();