'use strict';

/* Crea una malla de cuadrados de tal forma que el color de cada uno de ellos se determine de forma aleatoria y vaya cambiando cada segundo.

Añade también un botón que permita añadir un nuevo cuadrado a la maya con las mismas propiedades que los anteriores. */

const main = document.querySelector('main');
const button = document.querySelector('button');


const getRandom = ((max) => Math.round(Math.random() * max));

setInterval(() => {
    const divs = document.querySelectorAll('div');
    for (const div of divs) {
        div.style.background = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
    }
}, 1000);

button.addEventListener('click', function() {
    const item = document.createElement('div');
    item.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)})`;
    main.append(item);
});