'use strict';

/* Crea un cronómetro que permita ponerlo en marcha, pararlo y resetearlo. */

const body = document.body;
const div = document.querySelector('div');
let screen = document.getElementById('screen');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pause = document.querySelector('.pause');

let interval;


let seconds = 0;
let minutes = 0;
let hours = 0;

function time() {

    seconds++;
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
    if (minutes > 59) {
        hours++;
        minutes = 0;
    }
    if (hours > 24) { hours = 0; }

    paintScreen();

}

function paintScreen() {
    let hour2 = hours < 10 ? '0' + hours : hours;
    let min2 = minutes < 10 ? '0' + minutes : minutes;
    let sec2 = seconds < 10 ? '0' + seconds : seconds;

    screen.innerHTML = `${hour2}:${min2}:${sec2}`;
}


start.addEventListener('click', startChronometer);

function startChronometer() {
    if (!interval) {
        interval = setInterval(() => time(), 1000);
    }
}


pause.addEventListener('click', pauseChronometer);

function pauseChronometer() {
    clearInterval(interval);
    interval = null;
}


reset.addEventListener('click', resetChronometer);

function resetChronometer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    paintScreen();
}