const authMiddleware = (req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    return res.json(undefined);
  }
};

export default authMiddleware;
