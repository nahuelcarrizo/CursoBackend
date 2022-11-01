import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import indexRouter from "./src/routes/index.js";
import session from "express-session";

dotenv.config();

const app = express();

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://nahuel:nahuel123@cluster1.dio4x4x.mongodb.net/?retryWrites=true&w=majority`,
      mongoOptions: mongoConfig,
      ttl: 600,
      collectionName: "sessions",
    }),
    secret: process.env.SESSION_SECRET || "123",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000, sameSite: "strict" },
  })
);

app.use(cookieParser(process.env.COOKIES_SECRET || "123"));

app.use(express.json());

app.use(express.static("front/public"));

app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);

export { app };
