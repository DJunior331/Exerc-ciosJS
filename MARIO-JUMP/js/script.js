const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
    mario.classList.remove('jump');

    }, 650);
}
   
const loop = setInterval(() => {

   const pipePosition = pipe.offsetLeft;

}, 10)

document.addEventListener('keydown', jump);
