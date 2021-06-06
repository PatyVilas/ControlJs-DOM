'use strict';
/* 
Consigue una lista con los nombres de los personajes de la serie 
Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).
Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/' */

async function characters(month) {
    try {
        let url = 'https://rickandmortyapi.com/api/character';
        const arrayResults = [];
        while (url !== null) {
            const response = await fetch(url);
            const { results, info } = await response.json();

            for (let result of results) {
                let resultDate = new Date(result.created);
                if (month === resultDate.getMonth() + 1) arrayResults.push(result);
            }
            url = info.next;
        }
        console.log(arrayResults);
    } catch (error) { console.log(error); }

}
characters(1);