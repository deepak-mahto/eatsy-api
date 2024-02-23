const userController = require("../controller/users-auth.controller");

module.exports = (app) => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
};
