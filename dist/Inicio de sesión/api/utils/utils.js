import bcrypt from "bcrypt";

const isValidPassword = (user, password) => {
  console.log("isvalid: " + password + typeof user.password);
  return bcrypt.compareSync(password, user.password);
};

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

export { isValidPassword, createHash };
