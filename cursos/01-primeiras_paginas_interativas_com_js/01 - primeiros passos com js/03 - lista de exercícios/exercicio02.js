// O IMC (Índice de Massa Corpórea) é um critério da Organização Mundial da Saúde para dar a condição de peso de uma pessoa adulta.

// Fórmula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre a condição de IMC segundo a tabela abaixo:

// - Menor que 18.5 = Abaixo do peso;
// - Entre 18.5 e 25 = Peso normal;
// - Entre 25 e 30 = Acima do peso;
// - Entre 30 e 40 = Obeso;
// - Maior que 40 = Obesidade grave;

let peso = 120;
let altura = 1.67;

const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(0));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade grave');
}