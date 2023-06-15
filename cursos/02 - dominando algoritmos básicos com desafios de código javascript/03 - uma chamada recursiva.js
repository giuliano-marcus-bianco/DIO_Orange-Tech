// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 

// Saída
// Será  impresso o somatório de N até 0, como no exemplo a baixo: 

// EXEMPLO 1
// ENTRADA
// 10
// SAÍDA
// 55


// EXEMPLO 2
// ENTRADA
// 4	
// SAÍDA
// 10

// EXEMPLO 3
// ENTRADA
// 15	
// SAÍDA
// 120

function somatorio(n){
    if (n == 0) {
        return 0
    } else {
        return n += somatorio(n - 1)
    }
  }

  const a = somatorio(3)
  console.log(a)