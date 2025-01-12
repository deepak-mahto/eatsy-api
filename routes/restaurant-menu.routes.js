const restaurantMenuController = require("../controller/restaurant-menu.controller");

module.exports = (app) => {
  app.post("/api/restaurantMenu", restaurantMenuController.create);
  app.get("/api/restaurantMenu/:id", restaurantMenuController.fetch);
};
