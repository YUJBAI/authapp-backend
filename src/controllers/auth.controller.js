const { log } = require("winston");

const login = (req, res) => {
  res.json({
    ok: true,
  });
};

const register = (req, res) => {};

module.exports = {
  login,
  register,
};
