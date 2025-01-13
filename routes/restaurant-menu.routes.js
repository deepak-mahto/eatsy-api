const restaurantMenuController = require("../controller/restaurant-menu.controller");
const verifyToken = require("../middleware/authJWT");

module.exports = (app) => {
  app.post("/api/restaurantMenu", verifyToken, restaurantMenuController.create);
  app.get("/api/restaurantMenu/:id", restaurantMenuController.fetch);
};
