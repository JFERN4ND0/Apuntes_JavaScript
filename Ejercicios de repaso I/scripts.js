/********************* Ejercicio 1 ***********************/
// let nombre = prompt("Escribe tu nombre:");
// let edad = prompt("Escrive tu edad: ");
// let a = parseInt(edad) + 1;

// console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${a} años`);
/********************************************************/

/******************** Ejercicio 2 *********************/
// let figura = prompt("¿Qué figura quieres? triánguolo, rectángulo o círculo:");
// switch(figura) {
// case "triángulo" :
//     let baset = prompt("Introduce la base:");
//     let alturat = prompt("Introduce la altura:");
//     baset = Number.parseInt(baset);
//     alturat = Number.parseInt(alturat);
//     let areat = (baset * alturat) / 2;
//     console.log(`El área del triángulo es : ${areat}`);
//     break;
// case "rectángulo" :
//     let baser = prompt("Introduce la base:");
//     let alturar = prompt("Introduce la altura:");
//     baser = Number.parseInt(baser);
//     alturar = Number.parseInt(alturar);
//     let arear = (baser * alturar);
//     console.log(`El área del rectángulo es : ${arear}`);
//     break;
// case "círculo" :
//     let radio = prompt("Introduce el radio:");
//     radio = Number.parseInt(radio);
//     let areac = Math.PI * (Math.exp(radio));
//     console.log(`El área del círculo es : ${areac}`);
//     break;
// }
/***************************************************************/

/***************************** Ejercicio 3 *****************************/
// let num = prompt("Introduce un numero:");
// num = Number.parseInt(num);

// for (let i = 1; i <= num; i ++) {
//     if ((i % 2) == 0) {
//         console.log(`${i} - es par`);
//     } else {
//         console.log(`${i} - es impar`);
//     }
// }
/***********************************************************************/

/***************************** Ejercicio 4 *****************************/
// let num = prompt("Introduce un numero mayor a 1:");
// num = Number.parseInt(num);
// let v = 1;

// for (let i = 1; i < num; i ++) {
//     if ((num % i) == 0) {
//         v++;
//     }
// }
// if (v > 2) {
//     console.log(`${num} - es no primo`);
// } else {
//     console.log(`${num} - es primo`);
// }
/***********************************************************************/

/***************************** Ejercicio 5 *****************************/
// let num = prompt("Introduce un numero:");
// num = Number.parseInt(num);
// let v = `!${num} = ${num}`;

// for (let i = num - 1; i >= 1; i --) {
//     num *= i;
//     v = v + " * " + i;
// }

// console.log(`${v} = ${num}`);
/***********************************************************************/

/***************************** Ejercicio 6 *****************************/
// let suma = 0;
// let numeros = [];

// do {
//     let num = parseInt(prompt("Introduce un numero:"));
//     suma += num;
//     numeros.push[num];
// } while (suma < 50);

// console.log(`La suma es= ${suma}`);
// console.log(`Los numeros son= ${numeros}`);
/***********************************************************************/

/***************************** Ejercicio 7 *****************************/
// const numeros = [1, 2, 3, 4, 5];
// let pares = [];
// let impares = [];

// for (let n of numeros) {
//     let r = Math.ceil(Math.random() * 10);
//     let aux = n * r;
//     console.log(`${n} * ${r} = ${aux}`);
//     if (aux % 2  == 0) {
//         pares.push(aux);
//     } else{
//         impares.push(aux);
//     }
// }

// for (let ni of impares) {
//     console.log(`impares ${ni}`);
// }

// for (let np of pares) {
//     console.log(`pares ${np}`);
// }

/***********************************************************************/

/***************************** Ejercicio 8 *****************************/
// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
//                 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L'];

// const dni = prompt('Introduce tu DNI');

// if(dni.length == 8 && parseInt(dni) > 0) {
//     let letra = dni % 23;
//     console.log(letra);
//     console.log(`Tu DNI completo es ${dni}${letras[letra]}`);
// }

/***********************************************************************/

/***************************** Ejercicio 9 *****************************/
// let palabra = prompt("Introduce una palabra:").toLowerCase();
// let numv = 0;
// let numc = 0;
// for (let p of palabra) {
//     if (p === 'a' || p === 'e' || p === 'i' || p === 'o' || p === 'u') {
//         numv ++;
//     } else {
//         numc ++;
//     } 
// }

// console.log(`${palabra} tiene ${palabra.lenthg} letras`);

// console.log(`${numv} vocales`);

// console.log(`${numc} consonantes`);

/***********************************************************************/

/***************************** Ejercicio 10 *****************************/
// let cusuario = prompt("Introduce una palabra:");
// const colores = ["azul","amarillo", "rojo", "verde", "rosa"];
// let re = "";

// for (let co of colores) {
//     if (co === cusuario) {
//         re = "Color encontrado";
//         break;
//     } else {
//         re = "Color no encontrado";
//     }
// }
// console.log(re);

/***********************************************************************/