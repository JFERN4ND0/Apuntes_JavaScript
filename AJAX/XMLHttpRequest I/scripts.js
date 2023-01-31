/*
? Protocolo HTTP:
* https://es.wikipidedi.org/wiki/Protocolo_de_transferencia_de_hipertexto

? Códigos de estado de respuesta HTTP:
* https://developer.mozila.org/es/docs/web/HTTP/Status
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  let xhr;
  /* Para navegadores antiguos */
  // if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
  // else xhr = new ActiveXObject("Mricrosoft.XMLHTTP");
  xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", (data) => {
    const dataJSON = JSON.parse(data.target.response);

    const list = document.getElementById("list");
    for (const userInfo of dataJSON) {
      const listItem = document.createElement("LI");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      list.appendChild(listItem);
    }
  });

  xhr.send(); // Envia la petición
});
