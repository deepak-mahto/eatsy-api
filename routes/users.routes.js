const userController = require("../controller/users.controller");

module.exports = (app) => {
  app.post("/api/user", userController.create);
  app.get("/api/users", userController.fetch);
  app.delete("/api/user/:id", userController.delete);
};
