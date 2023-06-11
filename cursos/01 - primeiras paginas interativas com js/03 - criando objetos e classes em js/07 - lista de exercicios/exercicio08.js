// Crie uma classe para representar pessoas.;

// Para cada pessoa teremos atributos nome, peso e altura;

// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

// Instancie uma pessoa chamadad José que tenha 70kg de peso e 1,75m de altura, e peça para o José dizer o valor do seu IMC.


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return (this.peso / (Math.pow(this.altura, 2))).toFixed(1);
    }

    classificarImc() {
        const imc = this.imc();
        if (imc < 18.5) {
            return ('abaixo do peso')
        } else if (imc >= 18.5 && imc < 25) {
            return ('com peso normal')
        } else if (imc >= 25 && imc < 30) {
            return ('acima do peso')
        } else if (imc >= 30 && imc < 40) {
            return ('obeso(a)')
        } else {
            return ('com obesidade grave')
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(`O IMC do(a) ${jose.nome} é igual a ${jose.imc()} e ele está ${jose.classificarImc()}`);

const giuliano = new Pessoa('Giuliano', 65, 1.67);
console.log(`O IMC do(a) ${giuliano.nome} é igual a ${giuliano.imc()} e ele está ${giuliano.classificarImc()}`);

const isis = new Pessoa('Ísis', 62, 1.69);
console.log(`O IMC do(a) ${isis.nome} é igual a ${isis.imc()} e ele está ${isis.classificarImc()}`);