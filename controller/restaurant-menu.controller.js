const restaurantMenuModel = require("../model/restaurant-menu.model");

exports.create = (req, res) => {
  const userId = req.user;
  const { name, imageId, price, description, resId } = req.body;

  const newRestaurantMenu = new restaurantMenuModel({
    name,
    imageId,
    price,
    description,
    resId,
    userId,
  });
  newRestaurantMenu
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong." });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetch = (req, res) => {
  const resId = req.params.id;
  restaurantMenuModel
    .find()
    .select({ resId })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Server is not available" });
    });
};
