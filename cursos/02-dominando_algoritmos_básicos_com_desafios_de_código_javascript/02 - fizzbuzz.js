// Desafio
// Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

// Entrada
// Você receberá um número onde: 
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
// Se o número for apenas múltiplo de 3 -> "Fizz" ; 
// Se o número for apenas múltiplo de 5 -> "Buzz"; 
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

// Saída
// Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

// EXEMPLO 1
// ENTRADA 
// 3
// SAÍDA 
// Fizz

// EXEMPLO 2
// ENTRADA 
// 5
// SAÍDA 
// Buzz

// EXEMPLO 3
// ENTRADA 
// 15
// SAÍDA 
// FizzBuzz 

// EXEMPLO 4
// ENTRADA 
// 4 
// SAÍDA 
// 4

var a = 15
var b = 3
var c = 5
var d = 7

function fizzBuzz(n) {
    let result
    if (n % 3 == 0 && n % 5 == 0) {
        result = 'FizzBuzz'
    } else if (n % 3 == 0) {
        result = 'Fizz'
    } else if (n % 5 == 0) {
        result = 'Buzz'
    } else {
        result = n
    }
    console.log(result)    
}

fizzBuzz(a)
fizzBuzz(b)
fizzBuzz(c)
fizzBuzz(d)