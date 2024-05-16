/*
function random (min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
soma = 0
let rand = random(min, max)


while (rand !== 10) {
    rand = random(min, max)
    soma = soma + 1
    console.log(rand)
}

console.log(`Numero "10" achado após ${soma} execuções`)
*/

// Continue: continua para próxima iteração
// Break: sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        continue;
    }
    
    if (numero === 7) {
        break;
    }

    console.log(numero);
}