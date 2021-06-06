'use strict';

/* Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
Formatea el tiempo para que se muestren los segundos, los minutos,
 las horas y los días desde la ejecución. */


/* setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const day = time.getDate();


    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${day}, ${hour}:${minutes}:${seconds}`);


}, 5000); */

let seconds = 0;
let minutes = 0;
let hours = 0;



setInterval(() => {
    let days = 0;
    seconds += 5;


    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    } else if (minutes >= 60) {
        hours++;
        minutes = 0;
    } else if (hours >= 24) {
        days++;
        hours = 0;
    }

    let hour2 = hours < 10 ? '0' + hours : hours;
    let min2 = minutes < 10 ? '0' + minutes : minutes;
    let sec2 = seconds < 10 ? '0' + seconds : seconds;

    console.log(`${days} days, ${hour2}:${min2}:${sec2}`);

}, 5000);