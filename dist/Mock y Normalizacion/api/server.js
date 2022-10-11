import { Router, response } from "express";
import { denormalize, normalize, schema } from "normalizr";

import Chat from "./Chat.js";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import cors from "cors";
import express from "express";
import { faker } from "@faker-js/faker";
import util from "util";

const { commerce } = faker;
const port = process.env.PORT || 3080;
const app = express();
const router = Router();
const print = (obj) => {
  console.log(util.inspect(obj, false, 12, true));
};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

faker.locale = "en";

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const myData = {
  id: "mensajes",
  messages: [
    {
      id: 0,
      text: "Hola, en que te podemos ayudar?",
      user: {
        name: "Soy Sustrato",
        mail: "prueba@mail.com",
      },
    },
  ],
};
console.log(typeof myData);
console.log(myData);
// Define a users schema
const userSchema = new schema.Entity("users", {}, { idAttribute: "mail" });

// Define your comments schema
const commentSchema = new schema.Entity("messages", { user: userSchema });

// Define your article
const chatSchema = new schema.Entity("chat", {
  messages: [commentSchema],
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("connected", () => {
    const normalizedData = normalize(myData, chatSchema);
    const denormalizedData = denormalize(
      normalizedData.result,
      chatSchema,
      normalizedData.entities
    );
    io.emit("allMessages", denormalizedData);
  });

  //Listens and logs the message to the console
  socket.on("message", (data) => {
    myData.messages.push(data);
    const normalizedData = normalize(myData, chatSchema);
    const denormalizedData = denormalize(
      normalizedData.result,
      chatSchema,
      normalizedData.entities
    );
    console.log(myData);
    io.emit("allMessages", denormalizedData);
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

router.get("/products-test", async (req, res = response) => {
  const prods = [];
  for (let i = 0; i < 6; i++) {
    const item = {
      name: commerce.product(),
      price: commerce.price(),
      image: faker.image.business(140, 140, true),
    };
    prods.push(item);
  }

  return res.json(prods);
});

httpServer.listen(port, () => console.log(`Server runnning on Port: ${port}`));
