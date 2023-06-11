// Uma sala contem 5 alunos e para cada aluno foi sorteado um número entre 1 e 100.
// Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

/*
    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/


const { gets, print } = require('./funcoes-auxiliares')

const quantidadeDeAlunosSorteados = gets();

const numerosSorteados = [];

for (let i = 0; i < quantidadeDeAlunosSorteados; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);    
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    } 
}

print(numerosSorteados);
print(maiorValor);