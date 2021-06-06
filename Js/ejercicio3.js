'use strict';

/* Crea un programa que reciba un número en decimal o binario y devuelva la conversión:


Si le pasamos un nº en decimal debe retornar la conversión a binario.


Si le pasamos un nº en binario deberá devolver su equivalente decimal.



Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).
No se permite utilizar el método parseInt(). */
const num = prompt('Dime un número');
const base = prompt('base (binario 2, decimal 10)');
let decimal = 10;
let binario = 2;

const convertNum = (num, base) => {
    let resultado = 0;
    if (base == binario) {
        let decNums = num.toString().split('');
        let p = (decNums.length) - 1;
        for (const decNum of decNums) {
            resultado += decNum * (2 ** p);
            p--;
        }

    } else {
        let cociente = num;
        let numBi = [];
        do {
            numBi.push(cociente % 2);
            cociente = Math.floor(cociente / 2);

        } while (cociente > 0);
        resultado = numBi.reverse().join('');

    }
    return resultado;
}


console.log(convertNum(num, base));