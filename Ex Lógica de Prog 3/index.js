// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100

function eDivisivel (check) {
    if (typeof check !== 'number') return check;
    if (check % 3 === 0 && check % 5 === 0) return 'FizzBuzz';
    if (check % 5 === 0) return 'Buzz';
    if (check % 3 === 0) return 'Fizz';
    return check;
}

for (let i = 0; i <= 100; i++) {
    console.log( i, eDivisivel(i))
}