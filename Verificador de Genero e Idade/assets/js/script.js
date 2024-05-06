function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value < 1900 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {

            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                genero = 'Menino'
                faixaEtaria = 'Criança'
                img.setAttribute('src', 'assets/img/criança-m.png')
            } else if (idade < 21) {
                // Jovem
                genero = 'Menino'
                faixaEtaria = 'Jovem'
                img.setAttribute('src', 'assets/img/jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                faixaEtaria = 'Adulto'
                img.setAttribute('src', 'assets/img/jovem-m.png')
            } else {
                //idoso
                faixaEtaria = 'Idoso'
                img.setAttribute('src', 'assets/img/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Criança
                genero = 'Menina'
                faixaEtaria = 'Criança'
                img.setAttribute('src', 'assets/img/criança-f.png')
            } else if (idade < 21) {
                genero = 'Menina'
                faixaEtaria = 'Jovem'
                // Jovem
                img.setAttribute('src', 'assets/img/jovem-f.png')
            } else if (idade < 50) {
                faixaEtaria = 'Adulta'
                // Adulto
                img.setAttribute('src', 'assets/img/jovem-f.png')
            } else {
                //idoso
                faixaEtaria = 'Idosa'
                img.setAttribute('src', 'assets/img/idosa-f.png')
        }
        }
        res.innerHTML = `Detectamos ${genero} ${faixaEtaria} com ${idade} anos.`
        res.appendChild(img)
    }
}

