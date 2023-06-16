

const numero = 28937483;

// usamos === porque o == ignora o tipo

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}

// ! é uma negação

if (!numeroPar) {
    console.log('Ímpar');
}

console.log(numeroPar);


const numero2 = 90182;
const numero3 = 3

const isDivisivelPorNumero2 = numero2 % numero3 === 0

if (numero3 === 0) {
    console.log('Esse número é inválido')
}else if (isDivisivelPorNumero2) {
    console.log('É divisível')
}else {
    console.log('Não é divisível')
}