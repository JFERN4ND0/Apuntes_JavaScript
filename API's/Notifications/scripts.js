/* 
* https://developer.mozilla.org/es/docs/Web/API/notification

? icono:
* https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById("permissions");

permissions.addEventListener("click", () => {
  if (Notification.permission !== "granted") {
    getPermissions();
  } else {
    notify();
  }
});

const getPermissions = () => {
  Notification.requestPermission()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const notify = () => {
  const options = {
    body: "Lorem ipsum dolor sit amet consectetur",
    icon: "world.png",
    data: "Extra data",
    tag: "Notification demo",
  };

  const notification = new Notification("Hello world", options);

  notification.addEventListener("close", () => console.log("CLOSE"));
  notification.addEventListener("show", () => console.log("SHOW"));

  console.log(notification);
};
