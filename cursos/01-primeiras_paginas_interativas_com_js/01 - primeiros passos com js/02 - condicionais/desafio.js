// Faça um programa para calcular o valor de uma viagem.Faça

// Você terá 5 variáveis:
// 1 - Preço do etanol;
// 2 - Preço da casolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por km;
// 5 - Distância da viagem em km.Distância


let precoEtanol = 4.23
let precoGasolina = 5.89
let tipoCombustivel = 'gasolina'
let kmPorLitro = 14.3
let distamciaKm = 1000

const litros = distamciaKm / kmPorLitro

if (tipoCombustivel === 'gasolina') {
    console.log((litros * precoGasolina).toFixed(2))
} else if (tipoCombustivel == 'álcool') {
    console.log((litros * precoEtanol).toFixed(2))
} else {
    console.log('Tipo de combustível inválido')
}