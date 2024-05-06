

const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

const pessoas = [];

frm.addEventListener('submit', (e) => {
    const nome = frm.inNome.value
    const sobrenome = frm.inSobrenome.value
    const peso = Number(frm.inPeso.value)
    const altura = Number(frm.inAltura.value)

    resp.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura.toFixed(2)}</p>`
    e.preventDefault()


    pessoas.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura.toFixed(2)
     })

    console.log(pessoas)
})
