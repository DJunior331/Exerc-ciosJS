function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var manhã = document.getElementById('manhã')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'assets/img/fotomanha.png'
        document.body.style.background = '#ffc190'
        manhã.innerHTML = '<strong>Bom dia!<strong/>'

    } else if(hora >= 12 && hora <18) {
        //BOA TARDE!
        img.src = 'assets/img/fototarde.png'
        document.body.style.background = '#d85a03'
        manhã.innerHTML = '<strong>Boa tarde!<strong/>'
    } else {
        //BOA NOITE!
        img.src = 'assets/img/fotonoite.png'
        document.body.style.background = '#002b5a'
        manhã.innerHTML = '<strong>Boa noite!<strong/>'
    }

    }

    
