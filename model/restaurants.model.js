const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const restaurantSchema = mongoose.Schema({
  name: String,
  cuisines: Array,
  avgRating: String,
  deliveryTime: String,
  costForTwo: String,
  imageUrl: String,
  creatorId: { type: ObjectId, ref: "user-auth-details", required: true },
});

const restaurantsModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantsModel;
