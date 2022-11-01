const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log(` req is auth: ${req.isAuthenticated()}`);
    return next();
  } else {
    res.redirect("/login");
  }
};

export default checkAuth;
