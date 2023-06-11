
console.log('console é um objeto');

// objetos é uma coleção dinâmica de chave e valor

const giuliano = {
    nome: 'Giuliano Marcus Bianco',
    idade: 31,
};

console.log(giuliano.nome);
console.log(giuliano.idade);
console.log(giuliano);

// incrementar o objeto dinâmico

giuliano.altura = 1.67;

console.log(giuliano);

// deletar chave e valor do objeto

delete giuliano.altura;

console.log(giuliano);

// uma função dentro de um objeto é chamada de método

const pessoa = {
    nome: 'Giuliano Marcus Bianco',
    idade: 31,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
};

pessoa.descrever();

pessoa.nome = 'Marco';
pessoa.idade = 54;

pessoa.descrever();

// acessar valores através de uma sintaxe mais dinâmica

const atributo = 'nome';

console.log(pessoa[atributo]);

pessoa['nome'] = 'Giuliano';
pessoa.nome = 'Case';

// dinaminzar criando classes

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// classe é a definição, ou seja, as informações gerais; instância é cada ocorrência dentro dessa classe

const patricia = new Pessoa();
patricia.nome = 'Patrícia';
patricia.idade = 49;

const vitoria = new Pessoa();
vitoria.nome = 'Vitória';
vitoria.idade = 14;

console.log(patricia);
console.log(vitoria);

patricia.descrever();
vitoria.descrever();

// o constructor cria a necessidade de instanciar valores para a classe quando uma nova for criada

class Person {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
            }

    descrever () {
        console.log(`My name is ${this.nome} and I'm ${this.idade} years old and I borned in ${this.anoDeNascimento}.`)
    }
}

const giuliano2 = new Person('Giuliano', 31);

giuliano2.descrever();

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que o(a) ${p2.nome}.`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) do que o(a) ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade`)
    }
}

const naruto = new Person('Naruto', 13);
const sasuke = new Person('Sasuke', 13);
const sakura = new Person('Sakura', 14);

compararPessoas(sasuke, sakura);
