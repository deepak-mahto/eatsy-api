const restaurantController = require("../controller/restaurants.controller");
const verifyToken = require("../middleware/authJWT");

module.exports = (app) => {
  app.post("/api/restaurant", verifyToken, restaurantController.create);
  app.delete("/api/restaurants/:id", restaurantController.delete);
  app.get("/api/restaurants", restaurantController.fetch);
  app.put("/api/restaurants/:id", restaurantController.updateOne);
};
