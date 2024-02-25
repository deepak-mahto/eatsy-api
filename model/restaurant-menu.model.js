const mongoose = require("mongoose");

const restaurantMenuSchema = mongoose.Schema({
  name: String,
  imageId: String,
  price: String,
  description: String,
  resId: String,
});

const restaurantMenuModel = mongoose.model(
  "restaurantMenu",
  restaurantMenuSchema
);

module.exports = restaurantMenuModel;
