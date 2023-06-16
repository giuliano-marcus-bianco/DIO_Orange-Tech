

---

<p align="center">
      <img src="https://hermes.dio.me/tracks/59417914-c4ce-4bf8-b802-f1c1985a07fa.png" alt="logo do bootcamp" width="300">



# **Orange Tech +**

O Orange tech + é um projeto para você que deseja aprender do zero desenvolvimento front-end e back-end e tem o propósito de se preparar de verdade para as melhores vagas do mercado de tecnologia. O primeiro bootcamp do programa é uma trilha gratuita lançada pelo Inter, em parceria com a DIO, que vai abordar desde o princípio as tecnologias **JavaScript**, **HTML**, **CSS**, **Typescript** e **React**. 

<hr>
<br>
<p align="center">
  <a href ="#cursos"> Cursos </a>  |   
  <a href ="#contato"> Entre em contato </a>
</p>
<br>
<section align="center">
 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src = "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/></a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/></a>
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src = "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/></a>
 <a href="https://www.typescriptlang.org/docs/"><img src = "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/></a>
 <a href="https://legacy.reactjs.org/docs/getting-started.html"><img src = "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/></a>
</section>

<br>
<br>

> Status do Bootcamp: Em andamento :construction:

------

## **Cursos**  :books: <a id="cursos"></a>



### **[Primeiras Páginas Interativas com JavaScript](cursos\01-primeiras_paginas_interativas_com_js)** :checkered_flag: 

Neste curso foram mostrados desde o primeiros conceitos de JavaScript até mesmo como utilizar a linguagem para acrescentar comportamento às páginas. Também foram ensinados alguns conceitos básicos de HTML de CSS para criar, respectivamente, a estrutura e o estilo da página. Como prova prática de aprendizado, foi criado um Pokédex utilizando JavaScript para fazer a consulta na [PokéAPI](https://pokeapi.co/about) e adicionando todos os pokémons para a página. Para este fim, também foram ensinados alguns conceitos do paradigma Cliente-Servidor, de como manipular os dados, e como realizar a paginação dos itens. 

Abaixo, uma reprodução mostrando o resultado de como ficou a Pokédex para a entrega final deste curso:

<img src="cursos\01-primeiras_paginas_interativas_com_js\08 - dominando o protocolo http e integrando com a pokeapi\assets\img\preview (1).gif" alt="name" style="zoom:200%;" />



### **[Dominando Algoritmos Básicos com Desafios de Código JavaScript](cursos\02-dominando_algoritmos_básicos_com_desafios_de_código_javascript)** :checkered_flag: 

Nesta etapa do bootcamp, foram propostos *5 desafios* para testar as habilidades básicas em resolução de problemas. Os mesmos podem ser conferidos na pasta linkada no subtítulo acima, ou abaixo com as descrições de cada problema, a entradas e saídas esperadas depois de resolvidos cada um:

#### Desafio: Somando Múltiplos

 **Desafio**
 Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

**Entrada**
A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

**Saída**
A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N.

| Exemplo 1 |       |
| --------- | ----- |
| Entrada   | 5, 20 |
| Saída     | 50    |

| Exemplo 2 |       |
| --------- | ----- |
| Entrada   | 3, 18 |
| Saída     | 63    |

```javascript
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
```

#### Desafio: FizzBuzz

**Desafio**

Neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

**Entrada**

Você receberá um número onde: 

Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 

Se o número for apenas múltiplo de 3 -> "Fizz" ; 

Se o número for apenas múltiplo de 5 -> "Buzz"; 

Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

**Saída**

Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:

| Exemplo 1 |      |
| --------- | ---- |
| Entrada   | 3    |
| Saída     | Fizz |

| Exemplo 2 |      |
| --------- | ---- |
| Entrada   | 5    |
| Saída     | Buzz |

| Exemplo 3 |          |
| :-------- | -------- |
| Entrada   | 15       |
| Saída     | FizzBuzz |

| Exemplo 4 |      |
| :-------- | ---- |
| Entrada   | 4    |
| Saída     | 4    |

```javascript
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
```

#### Desafio: Uma Chamada Recursiva

**Descrição**

Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.  

**Entrada**

A Entrada será composta por um número inteiro, N. 

**Saída**

Será  impresso o somatório de N até 0, como no exemplo a baixo: 

| Exemplo 1 |      |
| :-------- | ---- |
| Entrada   | 10   |
| Saída     | 55   |

| Exemplo 2 |      |
| :-------- | ---- |
| Entrada   | 4    |
| Saída     | 10   |

| Exemplo 3 |      |
| :-------- | ---- |
| Entrada   | 15   |
| Saída     | 120  |

```javascript
function somatorio(n){
    if (n == 0) {
        return 0
    } else {
        return n += somatorio(n - 1)
    }
  }

  const a = somatorio(10)
  console.log(a)
  const b = somatorio(4)
  console.log(b)
  const c = somatorio(15)
  console.log(c)
```



#### Desafio: Os Números São Iguais

**Desafio**

Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”. Caso contrário, retorne "Nao sao iguais!” sem as *aspas*. 

*Entrada*

As entradas serão dois valores, um em cada linha, representados por A e B, que sempre serão números inteiros. 

*Saída*

A saída deverá retornar a frase "Sao iguais!" caso A e B sejam o mesmo valor. Caso contrário,  retorne "Nao sao iguais!", sem as *aspas*.

| Exemplo 1 |                 |
| :-------- | --------------- |
| Entrada   | 1, 2            |
| Saída     | Nao sao iguais! |

| Exemplo 2 |             |
| :-------- | ----------- |
| Entrada   | 50, 50      |
| Saída     | Sao iguais! |

| Exemplo 3 |                 |
| :-------- | --------------- |
| Entrada   | 38, 90          |
| Saída     | Nao sao iguais! |

```javascript
let A = 1;
let B = 2;

if (A === B) {
  console.log("São iguais!")
} else {
  console.log("Não são iguais!")
}

A = 50;
B = 50;

if (A === B) {
    console.log("São iguais!")
  } else {
    console.log("Não são iguais!")
  }

A = 38;
B = 90;

if (A === B) {
    console.log("São iguais!")
  } else {
    console.log("Não são iguais!")
  }
```

#### Desafio: Busca Sequencial

**Desafio**

Uma busca sequencial se caracteriza por percorrermos todos os  elementos de uma estrutura em busca do elemento “X” desejado. Neste desafio, dada uma estrutura de vetor A [a1, a2...an], percorra todo o vetor fazendo as *comparações* *de* *A*[*N*] = *X*. *Caso* *a* *condição* *seja* *verdadeira*, “X” existe na estrutura e a busca será concluída com sucesso. 

Considere um array de 10 elementos do tipo inteiro: 

Os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 

● Carregue esses elementos em um array.  

● Implementação da busca sequencial: 

● Crie um método  que realiza uma busca sequencial.  

● Se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array. Caso contrario retorne um texto dizendo que o número não foi encontrado, conforme exemplos abaixo.

 **Entrada**

A entrada consiste em um valor de busca e/ou array

**Saída**

A saída será a a posição do elemento no array, caso o valor não se encontre na *Array*, retorne a frase " Numero __ nao encontrado!", como no exemplo abaixo:

| Exemplo 1 |                       |
| :-------- | --------------------- |
| Entrada   | 81                    |
| Saída     | Achei 81 na posicao 5 |

| Exemplo 2 |                       |
| :-------- | --------------------- |
| Entrada   | 10                    |
| Saída     | Achei 10 na posicao 8 |

| Exemplo 3 |                        |
| :-------- | ---------------------- |
| Entrada   | -16                    |
| Saída     | Achei –16 na posicao 2 |

| Exemplo 4 |                          |
| :-------- | ------------------------ |
| Entrada   | 4                        |
| Saída     | Numero 4 nao encontrado! |

```javascript
let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

function searchArray(n, arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == n) {
            return console.log(`Achei ${n} na posicao ${index}`)
        }
    }
    return console.log(`Numero ${n} nao encontrado!`)
}

searchArray(81, elementos)
searchArray(10, elementos)
searchArray(-16, elementos)
searchArray(4, elementos)
```





## **Entre em contato**	:speech_balloon: <a id="contato"></a>

[giulianomarcusbianco@gmail.com](Email)	:envelope:

[www.linkedin.com/in/giuliano-marcus-bianco/](LinkedIn)	:man_office_worker:
