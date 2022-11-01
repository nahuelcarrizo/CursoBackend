import { response } from "express";

const getHome = async (req, res = response) => {
  try {
    const { user } = await req.body;
    console.log(req.body);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export { getHome };
