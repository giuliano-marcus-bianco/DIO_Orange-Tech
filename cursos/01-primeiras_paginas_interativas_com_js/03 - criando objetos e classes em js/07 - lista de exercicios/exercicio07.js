// Crie uma classe para representar carros.

// Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.

// Crie um método que, dado a quantidade de km rodados e o preço de combustível, nos dê o valor gasto em reais para realizar este percurso.

const kmRodado = 100;
const precoCombustivel = 5.89;

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorGastoEmReais(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const hb20 = new Carro('Hyundai', 'Branco', 1/14);
console.log(hb20);

console.log(hb20.valorGastoEmReais(100, 10));


const uno = new Carro('Fiat', 'Branco', 1/10);

console.log(uno.valorGastoEmReais(100, 10));