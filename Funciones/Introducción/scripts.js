/* 
funcion saludar() {
    console.log("Hola");
}
*/

/* const saludar = () => console.log("Hola");
const saludarUsuario = (user) => console.log(
    `Hola ${user}`
);

saludar();
saludarUsuario('Pepe');
saludarUsuario('Marta'); */

/* const suma = (num1, num2) => {
    if(num1 == 2) {
        return num1 + num2;
    }

    console.log("Esto no se va a ejecutar si entra en el if");
    return num1;
}

console.log(suma(7, 3));
console.log(suma(2, 3)); */

const suma = (num1, num2) => num1 + num2;
let result = suma(3, 6);
console.log(result);
