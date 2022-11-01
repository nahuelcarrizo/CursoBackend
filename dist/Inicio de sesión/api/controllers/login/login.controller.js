import { response } from "express";

const getLogin = async (req, res = response) => {
  try {
    return await res.json({ succes: true });
  } catch (error) {
    console.log(error);
  }
};

const getLoginFail = async (req, res = response) => {
  try {
    return await res.json({ success: false });
  } catch (error) {
    console.log(error);
  }
};

const postLogin = async (req, res = response) => {
  try {
    console.log("postlogin");
    return res.json({ succes: true, message: "you're logged in!" });
  } catch (error) {
    console.log(error);
  }
};

export { getLogin, getLoginFail, postLogin };
