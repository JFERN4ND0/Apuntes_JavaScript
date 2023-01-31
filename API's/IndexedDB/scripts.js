/* 
~ IndexedDB
Es una manera de almacenar datos de manera persistente en el
navegador.
Almacena pares llave-valor. Los valores pueden ser
objetos con estructuras complejas, y las llaves pueden ser
propiedades de esos objetos.
La API de IndexedDB es mayormente asíncrona.
IndexedDB usa eventos DOM para notificar cuando los resultados
están disponibles.
Es orientada a objetos

? Creación
El objeto ya existe almenos que el navegador sea antiguo
⁡⁣⁢⁣onupgradeneeded()⁡ -> Pregunta si el objeto existe
⁡⁣⁢⁣createObjectStore()⁡ -> Crea almacén de objetos
⁡⁣⁢⁣onsucces()⁡ -> Escucha mensajes de éxito
⁡⁣⁢⁣onerror()⁡ -> Escucha mensajes de error
⁡⁣⁢⁣getAll()⁡ -> Para obtener todos los registros de la base de datos
⁡⁣⁢⁣clear()⁡ -> Para borrar objetos del almacen
⁡⁣⁢⁣deleteDatabase()⁡⁡ -> Para Borrar la base de datos
⁡⁣⁢⁣onBlocked()⁡ -> Para bloquear bases de datos en los cambios de
versión
⁡⁣⁢⁣createIndex()⁡ -> Para la creación de índices en la base de datos
Objeto ⁡⁣⁢⁣IDBKeyRange⁡ para búsquedas en la base de datos

Versionado de bases de datos
        
Libreria indexedDB
*           https://dexie.org/

Especificación oficial:
* https://developer.mozilla.org/es/docs/IndexedDB-840092-dup
*/

const indexedDB = window.indexedDB;
const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

if (indexedDB && form) {
  let db;
  const request = indexedDB.open("taskList", 1);

  request.onsuccess = () => {
    db = request.result;
    console.log("OPEN", db);
    readData();
  };

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    console.log("Create", db);
    const objectStore = db.createObjectStore("tasks", {
      keyPath: "taskTitle",
      // autoIncrement: true,
    });
  };

  request.onerror = (error) => {
    console.log("Error", error);
  };

  const addData = (data) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.add(data);
    readData();
  };

  const getData = (key) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.get(key);

    request.onsuccess = (e) => {
      form.task.value = request.result.taskTitle;
      form.priority.value = request.result.taskPriority;
      form.button.dataset.action = "update";
      form.button.textContent = "Update Task";
    };
  };

  const updateData = (data) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.put(data);

    request.onsuccess = () => {
      form.button.dataset.action = "add";
      form.button.textContent = "Add Task";
      readData();
    };
  };

  const deleteData = (key) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.delete(key);

    request.onsuccess = () => {
      readData();
    };
  };

  const readData = () => {
    const transaction = db.transaction(["tasks"], "readonly");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.openCursor();
    const fragment = document.createDocumentFragment();

    request.onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        // console.log(cursor.value);
        const taskTitle = document.createElement("P");
        taskTitle.textContent = cursor.value.taskTitle;
        fragment.appendChild(taskTitle);

        const taskPriority = document.createElement("P");
        taskPriority.textContent = cursor.value.taskPriority;
        fragment.appendChild(taskPriority);

        const taskUpdate = document.createElement("BUTTON");
        taskUpdate.dataset.type = "update";
        taskUpdate.dataset.key = cursor.key;
        taskUpdate.textContent = "Update";
        fragment.appendChild(taskUpdate);

        const taskDelete = document.createElement("BUTTON");
        taskDelete.textContent = "Delete";
        taskDelete.dataset.type = "delete";
        taskDelete.dataset.key = cursor.key;
        fragment.appendChild(taskDelete);

        cursor.continue();
      } else {
        // console.log("No more data");
        tasks.textContent = "";
        tasks.appendChild(fragment);
      }
    };
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      taskTitle: e.target.task.value,
      taskPriority: e.target.priority.value,
    };
    // console.log(data);
    // addData(data);
    // getData("tarea");

    if (e.target.button.dataset.action == "add") {
      addData(data);
    } else if (e.target.button.dataset.action == "update") {
      updateData(data);
    }

    form.reset();
  });

  tasks.addEventListener("click", (e) => {
    if (e.target.dataset.type == "update") {
      getData(e.target.dataset.key);
    } else if (e.target.dataset.type == "delete") {
      deleteData(e.target.dataset.key);
    }
  });
}
