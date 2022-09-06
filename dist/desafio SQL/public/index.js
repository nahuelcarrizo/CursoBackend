const server = io();

const renderChat = (data) => {
  const chat = document.querySelector("#chat");
  const dia = new Date();
  const html = data.map(
    (msj) =>
      `<li class="list-group-item">
          <p class="m-0 text-primary"><strong>[${
            msj.mail
          }]</strong><span class="fyh"> ${dia.toLocaleString("es-AR", {
        timeZone: "UTC",
      })}</span>:</p>
          <p class="m-0 text-success"><em>${msj.mensaje}</em></p>
      </li>
      `
  );
  chat.innerHTML = html.join(" ");
  document.getElementById("collapseExample").classList.add("show");
};

const addChat = (event) => {
  document
    .getElementById("formChat")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
  const mail = document.querySelector("#inputMail").value;
  const mensaje = document.querySelector("#inputMsj").value;
  const mensajeNuevo = { mail, mensaje };
  server.emit("mensaje-nuevo", mensajeNuevo);

  renderChat(data);

  return false;
};

server.on("chat-servidor", (data) => {
  console.log(data);
  renderChat(data);
});
