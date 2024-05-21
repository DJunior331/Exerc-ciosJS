function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}



const timer = setInterval(() => {
    console.log(mostraHora());
}, 0);

setTimeout(() => {
    clearInterval(timer);
}, 10000);

setTimeout(() => {
    console.log('Olá mundo!')
}, 5000)