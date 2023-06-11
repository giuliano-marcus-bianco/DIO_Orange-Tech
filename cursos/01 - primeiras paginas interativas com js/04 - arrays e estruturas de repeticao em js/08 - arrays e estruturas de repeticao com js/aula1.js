// {chaves} é um bloco de código ou objeto literal no java script, e os [colchetes] é uma lista

const aluno = 'joao';
const Aluno = {nome: 'joao'};
const alunos = ['joao', 'vitor', 'marina'];

console.log(alunos);

// para acessar um objeto da coleção de dados
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]); /* aqui a posição 3 ainda está vazia */

// adicionar um valor na lista dinamicamente
alunos.push('renan');

console.log(alunos[3]); /* aqui a posição 3 já foi preenchida */

// adicionar um valor na lista diretamente
alunos[4] = 'vinicius';

console.log(alunos[4]);
console.log(alunos);

// removendo ultimo valor da lista

const numeros = ['1', '2', '3'];

console.log(numeros);

console.log(numeros.pop());

console.log(numeros);

// removendo o primeiro valor da lista

const numeros2 = ['1', '2', '3'];

console.log(numeros2);

console.log(numeros2.shift());

console.log(numeros2);

// 

