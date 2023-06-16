// Faça um programa para calcular o valor de uma viagem.


// Você terá três variáveis:
// 1 - Preço do combustível;
// 2 - Gasto médio de combutível por KM;
// 3 - Distância da viagem em KM.

let precoCombustivel = 5.89;
let kmPorLitro = 14.5;
let distancia = 1276;

const litros = distancia / kmPorLitro
const gasto = litros * precoCombustivel


console.log(gasto.toFixed(2));