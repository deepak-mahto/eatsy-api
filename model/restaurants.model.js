const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: String,
  cuisines: Array,
  avgRating: String,
  deliveryTime: String,
  costForTwo: String,
  cloudinaryImageId: String,
});

const restaurantsModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantsModel;
