/* 
? Eventos de ráton:
    ⁡⁣⁢⁣click⁡ -> cuando pulsamosel botón izquierdo del ratón
    ⁡⁣⁢⁣dbclick⁡ -> cuando pulsamos dos veces seguidas el boton
    izquierdo del ratón
    ⁡⁣⁢⁣mauseenter⁡ -> cuando entramos en la zona que tiene el
    evento
    ⁡⁣⁢⁣mouseleave⁡ -> cuando salimos de la zona que tiene el
    evento
    ⁡⁣⁢⁣mousedown⁡ -> cuando pulsamos y no soltamos el boton
    izquierdo del ratón
    ⁡⁣⁢⁣mouseup⁡ -> cuando soltamos el boton izquierdo del ratón
    ⁡⁣⁢⁣mousemove⁡ -> cuando movemos el ratón

? Eventos de teclado
    ⁡⁣⁢⁣keydown⁡ -> cuando pulsamos una tecla
    ⁡⁣⁢⁣keyup⁡ -> cuando soltamos una tecla
    ⁡⁣⁢⁣keypress⁡ -> cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

/* button.addEventListener('click', () => {
    console.log('CLICK');
}); */

/* button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK');
}); */

/* box.addEventListener('mouseenter', () => {
    // box.classList.remove('red');
    // box.classList.add('green');

    box.classList.replace('red', 'green');
}); */

/* box.addEventListener('mouseleave', () => {
    // box.classList.remove('green');
    // box.classList.add('red');

    box.classList.replace('green', 'red');
}); */

/* box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA');
}); */

/* box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTON IZQUIERDO EN LA CAJA');
}); */

/* box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON EN LA CAJA');
}); */

input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
});

input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA');
});

input.addEventListener('keypress', () => {
    console.log('ESTAS PULSANDO UNA TECLA');
});