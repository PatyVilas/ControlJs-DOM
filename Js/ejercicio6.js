'use strict';

/* Subraya (manipulando el DOM) todas las palabras de los párrafos en "ejercicio.html" que contengan más de 5 letras. */


const paragraphs = document.getElementsByTagName('p');

for (let paragraph of paragraphs) {
    const words = getWords(paragraph.outerText.trim());
    let textParagraph = paragraph.outerText;

    for (let word of words) {
        console.log(word);
        if (word.length > 4) {
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            textParagraph = textParagraph.replace(regex, `<u>${word}</u>`);
        }
    }
    paragraph.innerHTML = textParagraph;
}

function getWords(text) {
    const regex = /[.,-/_/'"\s]/g;
    text = text.replace(regex, " ");

    text = text.replace(/[ ]+/g, " ");

    return text.split(" ");
}