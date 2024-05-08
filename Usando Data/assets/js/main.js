const h1 = document.querySelector('.data')
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    
}
h1.innerText = data.toLocaleDateString('pt-BR', opcoes)
