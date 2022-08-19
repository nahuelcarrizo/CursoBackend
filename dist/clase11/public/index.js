const socket = io();

socket.on("mensaje-server", (data) => {
  console.log(data);
});
