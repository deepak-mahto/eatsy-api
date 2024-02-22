const restaurantController = require("../controller/restaurants.controller");

module.exports = (app) => {
  app.post("/api/restaurants", restaurantController.create);
  app.delete("/api/restaurants/:id", restaurantController.delete);
  app.get("/api/restaurants", restaurantController.fetch);
};
