/* 
? Operador ternario
(condición) ? true : false

(condición) ?
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/

let num = 4;

num % 2 == 0 ? console.log(`${num} es par`) : console.log(`${num} es impar`);

if (num % 2 == 0) {
  console.log(`${num} es par`);
} else {
  console.log(`${num} es impar`);
}

num % 2 == 0
  ? (console.log(`${num} es par`), console.log(`${num} es par 2`))
  : (console.log(`${num} es impar`), console.log(`${num} es impar 2`));

num % 2 == 0
  ? (console.log(`${num} es par 11`),
    num % 2 == 0
      ? console.log(`${num} es par12`)
      : console.log(`${num} es impar 12`))
  : (console.log(`${num} es impar 21`),
    num % 2 == 0
      ? console.log(`${num} es par21`)
      : console.log(`${num} es impar 22`));
