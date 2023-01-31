/* 
? Fetch API
    Proporciona una interfaz JavaScript para acceder y
    manipular partes del canal HTPP, como peticiones y
    respuestas.
    Tambien provee un método global fetch() que proporciona
    una forma fácil y lógica de obtener recursos de forma
    asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response
    y un reject internos
        Response tiene varios métodos

        ⁡⁣⁢⁣arrayBuffer()⁡ -> Archivos binarios en bruto (mp3,
        pdf, jpg, etc). Se utiliza cuando no se necesita
        manipular el contenido del archivo.

        ⁡⁣⁢⁣blob()⁡ -> Archivos binarios en bruto (mp3, pdf, jpg,
        etc). Se utiliza cuando no se necesita manipular
        el contenido y se va a trabajar con el archivo
        directamente.

        ⁡⁣⁢⁣clone()⁡ -> Crea un clon de un objeto de respuesta,
        idéntico en todos los sentidos, pero almacenamiento
        en una variable diferente.

        ⁡⁣⁢⁣formData()⁡ -> Se utiliza para leer los objetos formData.

        ⁡⁣⁢⁣json()⁡ -> Convierte los archivos json en un objeto
        JavaScript.

        ⁡⁣⁢⁣text()⁡ -> Se utiliza cuando queremos leer un archivo de
        texto.
        Siempre se codifica en UTF-8.

    Comprobación de soporte FETCH
    if(window.fetch != undefined) console.log('FETCH OK');
    else console.log('FETCH NOT WORKS!')
*/

const button = document.getElementById('button');

// res = response = respuesta
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        const list = document.getElementById('list');
        const fragment = document.createDocumentFragment();
        for(const userInfo of res) {
            const listItem = document.createElement('LI');
            listItem.textContent=`${userInfo.id} - ${userInfo.name}`;
            fragment.appendChild(listItem);
        }
        list.appendChild(fragment);
    });
});

/* 
button.addEventListener('click', () => {
    let xhr;
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.responce);
        
        const list = document.getElementById('list');
        for(const userInfo of dataJSON) {
            const listItem = document.createElement('LI');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            list.appendChild(listItem);
        }
    })
})
*/