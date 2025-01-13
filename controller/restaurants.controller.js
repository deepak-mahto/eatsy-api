const restaurantsModel = require("../model/restaurants.model");

exports.create = (req, res) => {
  const userId = req.user;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = req.body;

  const newRestaurant = new restaurantsModel({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    userId,
  });

  newRestaurant
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

exports.updateOne = (req, res) => {
  const userId = req.user;
  const _id = req.params.id;

  const keys = Object.keys(req.body);

  restaurantsModel
    .findByIdAndUpdate(_id, { deliveryTime: keys.deliveryTime }, userId)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetch = (req, res) => {
  restaurantsModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      } else {
        res.json({
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Server is not available" });
    });
};

exports.delete = (req, res) => {
  const userId = req.user;

  const id = req.params.id;
  restaurantsModel
    .findByIdAndDelete(id, userId)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};
