/* 
* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la
extracción de datos de arreglos u objetos
Los nombres de las variables deben ser los mismos que tienen en las
propiedades, en caso de no quererlo ⁡⁣⁢⁣nombreAtributo: nuevoNombre
⁡En arreglos si quieres una posición que no sea la primera debes poner
huecos con el nombre que quieras
*/

const person = {
  name: "Dorian",
  age: 20,
  email: "dorian@gmail.com",
};

// Forma tradicional
/* const name = person.name;
const age = person.age;
const email = person.email;
console.log(name, age, email);*/

// DESTRUCTURING
/* const { name: nombre, age, email } = person;
console.log(nombre, age, email); */

// const numbers = [1, 2, 3, 4];

// Forma tradicional
// console.log(numbers[0]);

// DESTRUCTURING
/* const [a, b, terceraPosicion] = numbers;
console.log(terceraPosicion); */

/* const printPerson = ({ name }) => {
  console.log(name);
}; */

/* const printPerson = ({ name: mnombre }) => {
  console.log(nombre);
}; */

// printPerson(person);

const getUser = async () => {
  const { data: users } = await axios.get(
    "http://jsonplaceholder.typicode.com/users"
  );

  console.log(users);
};

getUser;
