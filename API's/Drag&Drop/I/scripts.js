/* 
~ API Drag & Drop:
Existen dos partes principales en esta API, el objeto a arrastrar y
la zona donde vamos a dejarlo.
Para controlar estas acciones tenemos varios eventos de cada una de
las partes
    ? Objeto a arrastrar:
    ⁡⁣⁢⁣dragstart⁡ -> Se dispara al comenzar a arrastrar
    ⁡⁣⁢⁣drag⁡ -> Se dispara mientras arrastramos
    ⁡⁣⁢⁣dragend⁡ -> se dispara cuando soltamos el objeto

    ? Zona de destino:
    ⁡⁣⁢⁣dragenter⁡ -> Se dispara cuando el objeto entra en la zona
    de destino
    ⁡⁣⁢⁣dragover⁡ -> Se dispara cuando el objeto se mueve sobre la
    zona de destino
    ⁡⁣⁢⁣drop⁡ -> Se dispara cuando soltamos el objeto en la zona
    de destino
    ⁡⁣⁢⁣dragleave⁡ -> Se disparacuando el objeto sale de la zona de
    destino
*/

const smile = document.getElementById("smile");
const dropZone = document.getElementById("drop-zone");

/* smile.addEventListener("dragstart", () => {
  console.log("DragStart");
}); */

/* smile.addEventListener("drag", () => {
  console.log("Drag");
}); */

/* smile.addEventListener("dragend", () => {
  console.log("Dragend");
}); */

/* dropZone.addEventListener("dragenter", () => {
  console.log("Dragenter");
}); */

/* dropZone.addEventListener("dragover", () => {
  console.log("Dragover");
}); */

// **** Para que funcione drop *****************
/* dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("Dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("Drop");
}); */
// ***********************************************

/* dropZone.addEventListener("dragleave", () => {
  console.log("Dragleave");
}); */
