function timer() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const timer = document.querySelector('.timer');
    let seconds = 0;
    let counter;

    function startTimer() {
        counter = setInterval(function () {
            seconds++;
            timer.innerHTML = getTimeFromSeconds(seconds)
        }, 1000);
    }

    // Modo Simplificado, Englobando Todos os Eventos de 'Click'
    document.addEventListener('click', (e) => {
        const el = e.target;
        if (el.classList.contains('start')) {
            clearInterval(counter)
            startTimer()
            timer.style.color = 'black'
        }

        if (el.classList.contains('pause')) {
            clearInterval(counter);
            timer.style.color = 'red';
        }

        if (el.classList.contains('restart')) {
            clearInterval(counter);
            timer.innerHTML = '00:00:00'
            seconds = 0
        }
    })
}
timer();