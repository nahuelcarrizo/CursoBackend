import MongoStore from "connect-mongo";
import config from "./config.js";
import contenedorMongoDB from "./container/mongoDB.container.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createHash } from "./utils/utils.js";
import dotenv from "dotenv";
import express from "express";
import indexRouter from "./routes/index.js";
import passport from "passport";
import passportLocal from "passport-local";
import session from "express-session";

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors(config.cors.server));

// SESSION & MONGO
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://nahuel:nahuel123@cluster1.dio4x4x.mongodb.net/?retryWrites=true&w=majority`,
      mongoOptions: config.mongodb.options,
      ttl: 600,
      collectionName: "session",
    }),
    secret: process.env.SESSION_SECRET || "123",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000, sameSite: "strict" },
  })
);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());

const LocalStrategy = passportLocal.Strategy;

const authUser = async (user, password, done) => {
  const userFind = await contenedorMongoDB.getOne(user);
  if (userFind.length == 0) {
    console.log(`User Not Found with username ${user}`);
    return done(null, false, { message: "User not found" });
  }
  return done(null, userFind);
};

const signUser = async (req, user, password, done) => {
  const userFind = await contenedorMongoDB.getOne(req.body);
  if (userFind.length !== 0) {
    console.log(`the user ${user} already exists`);
    return done("error", false, { message: "User already exists" });
  }
  console.log("new user!");
  const newUser = {
    id: Math.random() * 1000,
    username: user,
    password: createHash(password),
  };
  contenedorMongoDB.save(newUser);

  return done(null, newUser.id);
};
passport.use("login", new LocalStrategy(authUser));

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    signUser
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// ROUTES
app.use(indexRouter);

export default app;
