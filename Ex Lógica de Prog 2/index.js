// Escreva uma função chamada ePaisagem que
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

const ePaisagem = (larg, alt) => {
    return larg > alt
}

console.log(ePaisagem(800, 600));