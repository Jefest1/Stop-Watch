'use strict'
let seconds = 0;
let tens = 0;

let getTens = document.querySelector('.tens');
let getSeconds = document.querySelector('.seconds');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
let interval;


btnStart.addEventListener('click', () => {
    interval = setInterval(timerStart, 10);
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
})



function timerStart() {
    startTens();
    startSeconds();
}

function startSeconds() {
    if (seconds <= 9) {
        getSeconds.innerHTML = '0' + seconds;
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
}

let startTens = () => {
    tens++;

    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }

    if (tens > 9) {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
}

function resetTimer() {
    tens = 0;
    getTens.innerHTML = '0' + 0;
    seconds = 0;
    getSeconds.innerHTML = '0' + 0;
}