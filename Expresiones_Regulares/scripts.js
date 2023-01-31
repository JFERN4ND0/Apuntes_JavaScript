/* 
? Expresiones regulares:
    son una secuencia de caracteres que forma un patrón de búsqueda,
    principalmente utilizada para la búsqueda de patrones de cadenas
    de caracteres u operaciones de sustituciones.
    
    * regex101.com

? sintaxis:
    /patron/

? Banderas:
    ⁡⁣⁢⁡⁣⁢⁣i⁡⁡ -> ignore case. No diferencia entre mayusculas y
    minúsculas
    ⁡⁣⁢⁣g⁡⁡ -> global. Busca de forma global, es decir, no se para
    después de la primera voinvidencia

? Comodines:
    ⁡⁣⁢⁣Sustitución⁡ -> Define un comodín dentro del patron. El
    simbolo es ".".
    ⁡⁣⁢⁣listado de caracteres válidos⁡ -> Entre corchetes se pone
    una lista de los caracteres válidos. [a,e,i,o,u] Con esto
    cogeríamos todas las vocales.
    ⁡⁣⁢⁣Rangos⁡ -> Entre corchetes si ponemos un guión entre dos
    caracteres establecemos un rango. [a-z] Todas las letras
    minúsculas.
    ⁡⁣⁢⁣Mezcla entre rangos y listas⁡ -> podemos unir los dos
    anteriores en una sola expresión. [0-5ou] Serían números del
    0 al 5, la letra "o" y la letra "u".
    ⁡⁣⁢⁣Cadenas completas⁡ -> Para establecer una cadena completa
    debe ir entre paréntesis, si queremos más palabras irán
    separadas por un pipe. (lorem|amet) es válida la palabra
    "lorem" y la palabra "amet".

? Delimitadores:
    ⁡⁣⁢⁣^⁡ -> Antes de este símbolo no puede haber nada
    ⁡⁣⁢⁣$⁡ -> Despues de este símbolo no puede haber nada
    ^hola$

? Cantidad:
    ⁡⁣⁢⁣llaves⁡ -> lo que está antes tiene que aparecer la
    cantidad exacta de veces. Hay tres combinaciones posibles.
     ⁡⁢⁢⁢{n}⁡ se tiene que repetir n veces
     ⁡⁢⁢⁢{n,m}⁡ se tiene que repetir entre n y m veces, ambas
     incluidas.
     ⁡⁢⁢⁢{n,}⁡ se tiene qu repetir como mínimo n veces
    ⁡⁣⁢⁣asterisco⁡ -> lo que está antes del asterisco puede estar,
    puede no estar y se puede repetir.
    ⁡⁣⁢⁣interrogación⁡ -> Lo que está antes de la interrogación
    puede no estar, pero si está solo puede aparecer una vez.
    ⁡⁣⁢⁣operador más⁡ -> lo que está antes del + tiene que estár
    una vez como mínimo.

? Caracteres:
    ⁡⁣⁢⁣\s⁡ -> coincide con un carácter de espacio, entre ellos
    incluidos espacios, tab, salto de página, salto de linea y
    retorno de carro.
    ⁡⁣⁢⁣\S⁡ -> Coincide con todo menos caracteres de espacio.
    ⁡⁣⁢⁣\d⁡ -> Coincide con un carácter de número.
    ⁡⁣⁢⁣\D⁡ -> Coincide con cualquier carácter no numérico.
    ⁡⁣⁢⁣\w⁡ -> Coincide con cualquier carácter alfanumérico,
    incluyendo el guión bajo.
    ⁡⁣⁢⁣\W⁡ -> Coincide con todo menos caracteres de palabra.
*/

const text = document.getElementById("text").textContent;
const regEx = /lorem/gi;
const regEx2 = new RegExp("lorem", "gi");
const regEx3 = new RegExp("/lorem/", "gi");

console.log(regEx.test(text));
console.log(regEx2.test(text));
console.log(regEx3.test(text));
console.log(text.includes("Lorem"));
