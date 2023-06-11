

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes);

// objeto obtido com a funcao gets()
console.log(funcoes.gets());

// object destructing

const pessoa = {
    nome: 'Giuliano'
};


// const { nome } = pessoa;
// // ambos os códigos são equivalentes
// const nome = pessoa.nome

// fazer destructuring na importação
const { gets, print } = require('./funcoes-auxiliares');

print(gets());




