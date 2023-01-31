/*
~ Objeto Math⁡⁡
Objeto estático
Tenemos que usar su nombre para utilizarlo

? Propiedades:
    ⁡⁣⁢⁣Math.E - Math.PI⁡
    
? Métodos:
    ⁡⁣⁢⁣Math.abs(x)⁡ Devuelve el valor ansoluto de x
    ⁡⁣⁢⁣Math.ceil(x)⁡ Devuelve el entero más pequeño
    mayor o igual que un número
    ⁡⁣⁢⁣Math.floor(x)⁡ Devuelve el entero más grande
    menor o igual que un número
    ⁡⁣⁢⁣Math.pow(x, y)⁡⁡ Devuelve la potencia de x
    elevado a y
    ⁡⁣⁢⁡⁣⁢⁣Math.random()⁡ Genera un número pseudo
    ⁡⁣⁢⁣Math.round(x)⁡ Devuelve el valor un número
    redondeado al entero más cercano
    ⁡⁣⁢⁣Math.sign(x)⁡ Devuelve el signo de la x, que
    indica si x es positivo, negativo o cero
*/

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;

console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(3, 3));
console.log(Math.round(Math.random() * 100));

// console.log(Math.random() * (max - min) + min);

console.log(Math.round(Math.random() * (100 - 50) + 5));
console.log(Math.sign(0));  // -1 / 0 / 1
console.log(Math.sqrt(9));