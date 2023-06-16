// estruturas de repetição de forma genérica, dinâmica

const notas = [];

notas.push(5);
notas.push(7);
notas.push(4);
notas.push(9);
notas.push(10);

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(soma);
console.log(media);

// executar depuração através de node.js