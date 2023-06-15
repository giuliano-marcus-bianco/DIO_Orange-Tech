// Desafio
// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// Entrada
// A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

// Saída
// A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

// Exemplo 1
// Entrada
// 5
// 20
// Saída
// 50

// Exemplo 2
// Entrada	
// 3
// 18	
// Saída
// 63

var a = 5;
var N = 20;
 

let multiplier = 1;
let multiplied = 0;
let sum = 0;
while (multiplied < N) {
    multiplied = a * multiplier
    sum += multiplied;
    multiplier ++
  }

console.log(sum)