const restaurantMenuController = require("../controller/restaurant-menu.controller");
// const verifyToken = require("../middleware/authJWT");

module.exports = (app) => {
  app.post("/api/restaurantMenu", restaurantMenuController.create);
  //   app.delete("/api/restaurants/:id", restaurantController.delete);
  app.get("/api/restaurantMenu/:id", restaurantMenuController.fetch);
};
