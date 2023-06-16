// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const multiplos7 = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

for (let index = 0; index < multiplos7.length; index++) {
    const element = multiplos7[index];
    if (element % 2 === 0) {
        console.log(element);
    }    
}