const server = io();

const renderProducto = (data) => {
  const listadoProductos = document.querySelector(".card-deck");
  const html = data.map(
    (prod) =>
      `<div class="card d-flex align-items-center">
        <img
          class="card-img-top w-50 pt-2"
          src='${prod.url}'
        />
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text">Precio: $ ${prod.price}</p>
        </div>
      </div>`
  );

  listadoProductos.innerHTML = html;
};

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
};

const addProduct = (e) => {
  const title = document.querySelector("#inputNombre").value;
  const price = document.querySelector("#inputPrecio").value;
  const url = document.querySelector("#inputUrl").value;
  const product = { title, price, url };
  server.emit("producto-nuevo", product);
  return false;
};

const addChat = (e) => {
  const mail = document.querySelector("#inputMail").value;
  const mensaje = document.querySelector("#inputMsj").value;
  const mensajeNuevo = { mail, mensaje };
  server.emit("mensaje-nuevo", mensajeNuevo);
  return false;
};
server.on("mensaje-servidor", (data) => {
  renderProducto(data);
});

server.on("chat-servidor", (data) => {
  renderChat(data);
});
