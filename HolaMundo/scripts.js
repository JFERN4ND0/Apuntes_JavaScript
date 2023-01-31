const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas']
}

/*console.log(person.name);
console.log(person['name']);*/

/*for (const key in person) {
    console.log(key);
}*/

/*for (const k in person) {
    console.log(person[k]);
}*/

// for (const son of person.sons) {
//     console.log(son);
// }

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos
se llaman ${person.sons.join(', ')}`);