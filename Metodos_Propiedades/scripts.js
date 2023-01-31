/*
Método: Es todo aquello que la cadena puede
hacer. Ej:convertirse en mayúsculas.
Devuelven una cadena nueva, la cadena original
no será modificada

Propiedad: Son las caracteristicas que la
cadena tiene por ser una cadena. Ej:longitud.
*/

let cadena = "Hola Mundo";

//? PROPIEDADES

/** ⁡⁣⁢⁣length⁡ -> Devuelve la longitud de la cadena */
// console.log(cadena.length);


//? MÉTODOS⁡

// ⁡⁣⁣⁡⁣⁢⁣toUpperCase()⁡⁡ -> Devuelve la cadena a mayúsculas
/* let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus); */

// ⁡⁣⁢⁣toLowerCase()⁡ -> Devuelve la cadena a minúsculas
/*let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);*/

/* 
⁡⁣⁢⁣indexOf(String)⁡ -> Devuelve la posición en la que
se encuentra el String, si no lo devuelve -1
*/
// console.log(cadena.indexOf('ola'));

/* 
⁡⁣⁢⁣replace(valor a buscar, valor nuevo)⁡ -> Remplaza el
fragmento de la cadena que le digamos y pone el
valor nuevo
*/
// console.log(cadena.replace('M', 'O'));

/* 
⁡⁣⁢⁣substring(inicio [,fin])⁡ -> Extrae los caracteres
desde inicio hasta fin (el final no se incluye)
Si no se incluye el fin estrae hasta el final
*/
// console.log(cadena.substring(5));

/* 
⁡⁣⁢⁣slice(inicio [,fin])⁡ -> Igual que substring pero
admite valores negativos, si ponemos valores
negativos empezará desde atrás

Si no se incluye el final extrae hasta el final

⁡⁣⁢E͟j͟e͟m. (2, -4) -> Empieza a contar en el tercer
caracter y los 4 últimos no los considera
*/
// console.log(cadena.slice(-3));

/* 
⁡⁣⁢⁣trim()⁡ -> Elimina los espacios al inio y al final
de la cadena
*/
// console.log(cadena.trim());

/* 
----⁡⁣⁣⁢ ES6 ⁡----

⁡⁣⁢⁣startsWith(valor [,inicio])⁡ -> verifica si la
cadena empieza con ese valor. Retorna true o false
*/
// console.log(cadena.startsWith('H'));
// console.log(cadena.startsWith('M', 5));

/* 
⁡⁣⁢⁣endsWith(valor [,longitud])⁡ -> verifica si la
cadena termina con ese valor. Retorna true o false
*/
// console.log(cadena.endsWith('o'));
// console.log(cadena.endsWith('a', 4));

/* 
⁡⁣⁢⁣includes(valor [,inicial])⁡ -> Igual que indexOf
pero devuelve true o false
*/
// console.log(cadena.includes('H'));
// console.log(cadena.includes('M', 5));

/* 
⁡⁣⁢⁣repeat(valor)⁡ -> Repite el string el número
de veces que le indiquemos
*/
// console.log(cadena.repeat(2));

//? Template String
let nombre = "Juan";
let edad = 23;
console.log(`${nombre} tiene ${edad} años`);