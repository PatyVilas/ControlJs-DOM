'use strict';
/* Escribe una función que devuelva un array de usuarios. 
De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.
El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/ */


const getUsers = async(limit) => {
    const user = [];
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${limit}`);
        const { results } = await response.json();
        for (const result of results) {

            //console.log(result);
            const { username } = result.login;
            const gender = result.gender;
            const { first, last } = result.name;
            const { city } = result.location;
            const email = result.email;
            const picture = result.picture.large;

            user.push({ username, gender, first, last, city, email, picture });
        }
        console.log(user);

    } catch (error) { console.log(error); }



}
getUsers(300);