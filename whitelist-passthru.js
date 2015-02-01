module.exports = function(wrapped, whitelist) {
  return function(req, res, next) {
    if (whitelist.indexOf(req.path) != -1) {
      next();
    } else {
      wrapped(req, res, next);
    }
  }
};

