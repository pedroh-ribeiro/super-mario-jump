
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const main_audio = new Audio ('./sounds/main.mp3');
const game_over_audio = new Audio ('./sounds/game-over.mp3');
const titulo = document.querySelector('.titulo');
const scoreBoardPosition = document.querySelector('.score-board')
let pontuacao = document.getElementById('pontos')
let pontos = -13



const startGame = () => {
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    pipe.style.bottom = '0'
    scoreBoardPosition.style.top = '0'
}

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
    titulo.style.display = ('none')
}

const ganharPontos = () => {
    pontos = pontos + 0.1
    if (pontos >= 0) {
        pontuacao.textContent = Math.trunc(pontos)
    }
}

const loop = setInterval(() => {
    main_audio.play()

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'images/game-over.png'
        mario.style.width = '90px'
        mario.style.marginLeft = '25px'

        main_audio.pause()
        game_over_audio.play()
        
        clearInterval(loop)
        document.addEventListener('keydown', () => {
            location.reload();
        });
        document.addEventListener('click', () => {
            location.reload();
        });
    } else {
        ganharPontos()
    }
        
    
}, 10);



document.addEventListener('click', startGame);
document.addEventListener('keydown', startGame);

document.addEventListener('click', jump);
document.addEventListener('keydown', jump);
