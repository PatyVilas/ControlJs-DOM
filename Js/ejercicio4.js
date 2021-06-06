'use strict';

/* Escribe una función que, al recibir un array como parámetro, elimine los strings repetidos del mismo.
No se permite hacer uso de Set ni Array.from().
 */
// Ejemplo
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];



const deleteDuplicates = (array) => {

    const noRepeat = [];
    array.forEach((elemento) => {
        if (!noRepeat.includes(elemento)) {
            noRepeat.push(elemento);
        }
    })
    return noRepeat;
}
console.log(deleteDuplicates(names));