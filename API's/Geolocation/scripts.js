/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation

⁡⁣⁢⁣getCurrentPosition(p1 [, p2, p3])⁡ -> Recibe tres parametros el
primero es obligatorio y los otros dos son opcionales
* p1-funcion que optiene la ubicacion
* p2-error en caso de haber
* p3-opciones que podemos poner:
    Es un objeto que tiene varios atributos
        ⁡⁣⁣⁢enableHightAccuracy:⁡ por defecto es false hace que en el caso de tener más opciones de geolocalización las va a utilizar
        ⁡⁣⁣⁢timeout:⁡ Determina el tiempo que le establecemos para que nos devuelva la posición
        ⁡⁣⁣⁢maximunAge:⁡ Duración que permitimos tener algo en cache
⁡⁣⁢⁣watchPosition()⁡ => Para moviles
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(getPosition, error, options);
});

const options = {
  enableHightAccuracy: true,
  timeout: 5000,
  maximunAge: 0,
};

const getPosition = (position) => {
  console.log(position);
};

const error = (error) => console.log(error);
