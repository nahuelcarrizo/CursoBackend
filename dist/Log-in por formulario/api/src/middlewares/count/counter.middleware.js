export const counterMiddleware = async (req, res, next) => {
  req.session.visits = req.session.visits ? ++req.session.visits : 1;
  next();
};
