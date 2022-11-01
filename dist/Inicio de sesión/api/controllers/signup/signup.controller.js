import contenedorMongoDB from "../../container/mongoDB.container.js";
import { response } from "express";

const getSignUp = async (req, res = response) => {
  try {
    res.json({
      succes: true,
      message: "sign up",
    });
  } catch (error) {
    console.log(error);
  }
};

const getSignUpFail = async (req, res = response) => {
  try {
    res.json({
      succes: false,
      message: "fail singing up",
    });
  } catch (error) {
    console.log(error);
  }
};

const postSignUp = async (req, res) => {
  try {
    res.json({
      succes: false,
      message: "signup succesfull",
    });
  } catch (error) {
    console.log(error);
  }
};
export { getSignUp, getSignUpFail, postSignUp };
