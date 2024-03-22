const dirt = document.querySelectorAll('.dirt');
const mole = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.scoreBoard');
const sound = document.querySelector('#bonk');
let prevDirt;
let stopGame;
let score;


function indexDirt(dirt) {
    const num = Math.floor(Math.random() * dirt.length);
    const numRandom = dirt[num];
    if (numRandom == prevDirt) {
        indexDirt(dirt);
    }
    prevDirt = numRandom;
    return numRandom;
}

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function moleAppear() {
    const numRandom = indexDirt(dirt);
    const rdmTime = randomTime(420, 620);
    numRandom.classList.add('appear');
    
    setTimeout(() => {
        numRandom.classList.remove('appear');
        if (!stopGame) {
            moleAppear();
        }
    }, rdmTime);
}

function startGame() {
    stopGame = false;
    score = 0;
    scoreBoard.textContent = 0;
    moleAppear();
    setTimeout(() => {
        stopGame = true;
    }, 10000);
}

function bonk() {
    score++;
    this.parentNode.classList.remove('appear');
    sound.play();
    scoreBoard.textContent = score;
}

mole.forEach(num => {
    num.addEventListener('click', bonk)
});
