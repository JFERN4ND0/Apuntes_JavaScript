/* 
? dataTransfer
En chrome no hace falta pero en firefox si
⁡⁣⁢⁣setData⁡ -> Establece la información que queremos compartir
⁡⁣⁢⁣getData⁡ -> Establece la información que queremos obtener
 */

const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

pendingTasks.addEventListener("dragstart", (e) => {
  //   console.log(e.target);
  e.dataTransfer.setData("text/plain", e.target.id);
  //   console.log(e.dataTransfer.getData("text"));
});

pendingTasks.addEventListener("drag", (e) => {
  e.target.classList.add("active");
});

pendingTasks.addEventListener("dragend", (e) => {
  e.target.classList.remove("active");
});

// ! OBLIGATORIO, SI NO NOFUNCIONA !!!!!!!!!!!!!!!!
finishedTasks.addEventListener("dragover", (e) => {
  e.preventDefault();
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

finishedTasks.addEventListener("drop", (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData("text"));
  finishedTasks.appendChild(pendingTasks.removeChild(element));
  element.classList.remove("active");
});
