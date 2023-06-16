// Faça um algoritmo que, dado as 3 notas  tiradas por um aluno em um semestre da faculdade, calcule e imprima a média e classifique conforme a tabela abaixo:

// Classificação:
// - Média menor que 5 = Reprovado
// - Média entre 5 e 7 = Recuperação
// - Média acima de 7 = Aprovado

let nota1 = 10;
let nota2 = 4;
let nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}