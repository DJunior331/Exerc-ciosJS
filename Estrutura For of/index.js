
//For clássico - Geralmente com iteráveis (arrays ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)





const nome = ['Luiz', 'Otávio', 'Felipe', 'Matheus', 'João'];

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log('--------------------')

for (let i in nome) {
    console.log(nome[i])
}

console.log('--------------------')

for (let value of nome) {
    console.log(value)
}

console.log('--------------------')

nome.forEach(function(valor, indice) {
    console.log(valor, indice)
})

