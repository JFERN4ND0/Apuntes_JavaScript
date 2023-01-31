/* 
Son estructuras que nos permiten almacenar varios

Se pueden llenar con cualquier tipo de dato

válido en JavaScript y deben ir separados por
comas

Se pueden mezclar tipos de datos, pero no es
recomendable.

Se declaran con llaves cuadradas o corchetes []

Pueden declararse vacíos o con un contenido ya
establecido.

Pueden añadirse o eliminarse elementos en el
momento que queramos
    ⁡⁢⁢⁢let array = []⁡  // Array vacío

    ⁡⁢⁢⁢let numeros = [1,2,3,4,5]⁡ 
    Array con contenido inicial
*/

let numeros = [1, 2, 3, 4];
// let palabras = ['hola','estamos','en','YouTube'];

/* console.log(numeros[0]+numeros[1]);
console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length} letras`);
console.log(numeros); */

/* 
? Propiedad
⁡⁣⁢⁣Array.length()⁡ -> Devuelve el número de
posiciones que contiene el array.
*/
// console.log(numeros.length);

/* 
? Métodos
⁡⁣⁢⁣Array.isArray()⁡ -> Devuelve true si la variable
es un array.
*/
// let numero = 4;
// console.log(Array.isArray(numero));
// console.log(Array.isArray(numeros));

/* 
* Eliminar un elemento
⁡⁣⁢⁣.shift()⁡ -> Elimina el primer elemento del
array y devuelve ese elemento
⁡⁣⁢⁣.pop()⁡ -> Elimina el último elemento de un
array y devuelve ese elemento
*/
// console.log(numeros);
// numeros.shift();
// console.log(numeros);
// numeros.pop();
// console.log(numeros);

/* 
* Añadir elementos
⁡⁣⁢⁣.push(element1, element2, ...)⁡ -> Añade uno o
más elementos al final del array
⁡⁣⁢⁣.unshift(element1,  element2, ...)⁡ -> Añade uno
o más elementos al comienzo del array y
devuelve la nueva longitud.
*/
// console.log(numeros);
// let newlong = numeros.push(6);
// console.log(numeros);
// console.log(newlong);
// let newlong2 = numeros.unshift(0);
// console.log(numeros);
// console.log(newlong2);

/* 
⁡⁣⁢⁣.indexOf()⁡ -> Devuelve el primer índice del
elemento que coincida con el valor especificado,
o -1 si ninguno es esncontrado.
*/
// console.log(numeros);
// console.log(numeros.indexOf(1));

/* 
⁡⁣⁢⁣.lastIndexOf()⁡ -> Devuelve el último índice del
elemento que coincida con el valor especificado,
o -1 si ninguno es encontrado.
*/
// console.log(numeros);
// console.log(numeros.lastIndexOf(1));

/* 
⁡⁣⁢⁣.reverse()⁡ -> Invierte el orden de los
elementos del array.
*/
// console.log(numeros);
// let reverso = numeros.reverse();
// console.log(reverso);

/* 
⁡⁣⁢⁣.join(separador)⁡ -> Devuelve un string con el
separadorque indiquemos, por defecto son comas
*/
// let separado = numeros.join();
// console.log(separado);

/* 
⁡⁣⁢⁣.splice(a,b,items)⁡ -> Cambia el contenido de un
array eliminando elementos existentes y/o
agregando nuevos elementos.
    ⁡⁢⁢⁢a⁡ - Indice de inicio
    ⁡⁢⁢⁢b⁡ - Número de elementos
    ⁡⁢⁢⁢items⁡ - Elementos a añadir en el caso de
    que se añadan.
*/
// console.log(numeros);
// console.log(numeros.splice(3));
// console.log(numeros.splice(2,2));
// console.log(numeros.splice(2,2,10,23,54));
// console.log(numeros.splice(4,0,10,23,54));

/* 
⁡⁣⁢⁣.slice(a,b)⁡ -> Extrae elementod de un array
desde el índice a hasta el índice b. Si no
existe b lo hace desde a hasta el final, si no
existe ni a ni b hace una copia del original.
*/
// let recorte = numeros.slice(2,4);
// console.log(recorte);