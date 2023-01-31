/*
 * https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

mql = window.matchMedia(mediaQueryString)

mql viene de media query list, que es el objeto que se crea con el
método matchMedia().
mediaQueryString es cualquier madia query válida
en css sin olvidar los parentesis
*/

console.log(innerWidth);

const mql = matchMedia("(min-width: 400px) and (orientation:landscape");

const applyMatchMedia = (mql) => {
  //! No dar estilos en linea esto es para ejemplos
  //! Solo para añadir y remover clases
  mql.matches
    ? (document.body.style.backgroundColor = "red")
    : (document.body.style.backgroundColor = "royalblue");
};

addEventListener("resize", () => applyMatchMedia(mql));
addEventListener("DOMContentLoaded", () => applyMatchMedia(mql));
