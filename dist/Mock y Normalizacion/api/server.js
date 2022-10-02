import { Router, response } from "express";
import { normalize, schema } from "normalizr";

import Chat from "./Chat.js";
import express from "express";
import { faker } from "@faker-js/faker";

const { commerce } = faker;
const port = process.env.PORT || 3080;
const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

faker.locale = "es";

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

router.post("/chat", async (req, res = response) => {
  console.log("api called");
  try {
    const messages = req.body;
    console.log(messages);
    const chat = new Chat();
    chat.save(messages);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Server runnning on Port: ${port}`));
