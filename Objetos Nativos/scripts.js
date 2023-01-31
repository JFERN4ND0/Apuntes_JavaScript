const button = document.getElementById("button");

/* 
⁡⁣⁢⁣Objeto window⁡ -> Es el objeto global, de él descienden todos
los objetos
    alert()
    prompt()
    confirm()

Son metodos que pausan la carga de la página
*/

/* alert('Hola');

addEventListener('click', (e) => {
    console.log(e);
}); */

/* if(confirm('Acepta?')){
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
}*/

/* ⁡⁣⁢⁣Objecto console⁡ -> Es el objeto que contiene la consola del
navegador 
    * https://developer.mozilla.org/es/docs/web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const person = {
  name: "Dorian",
  age: 30,
  email: "dorian@gmail.com",
};

// console.table(person);

/*
⁡⁣⁢⁣Objeto location⁡ -> Es el objeto que contiene la barra de
direcciones
    * https://developer.mozilla.org/es/docs/web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);

/*
? Objeto history
  * https://developer.mozilla.org/es/docs/DOM
    
    Manipulando_el_historial_del_navegador
        back()
        forward()
        go(n|-n)

    length
*/

const date = new Date();
console.log(date.getDate);

/*
? Objeto date
*   https://developer.mozilla.org/es/docs/web/JavaScript/Referencia/Objetos_globales/Date
*   https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

/*
? Timers
    ⁡⁣⁢⁣Timeout⁡:
*   https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    ⁡⁣⁢⁣setTimeout(()=>{code}, delay-in-miliseconds)⁡ -> Hace que
    se ejecute la función despues de delay. si lo
    referenciamos mediante una variable/constante podemos
    pararlo con clearTimeout(referencia)

   ? Interval:
   * https//developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    ⁡⁣⁢⁣setInterval(() => {code}, delay-in-miliseconds)⁡ -> Hace que
    se ejecute la función cada delay milisegundos. Si lo
    referenciamos mediante una variable/constante podemos
    pararlo con clearInterval(referencia)
*/

/* button.addEventListener('click', () => {
    setTimeout(saludar, 3000);
    setTimeout(() => {
        console.log('ADIOS');
    },3000)
}) */

/* const Timeout = setTimeout(() => {
    console.log('ADIOS');
}, 3000);

button.addEventListener('click', () => {
    clearTimeout(Timeout);
}); */

const saludar = () => {
  console.log("Hola");
};

let cont = 0;

// const interval = setInterval(saludar, 3000);

const interval = setInterval(() => {
  console.log(cont);
  cont++;
}, 3000);

button.addEventListener("click", () => {
  clearTimeout(interval);
});
