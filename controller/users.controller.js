const usersModel = require("../model/users.model");

exports.create = (req, res) => {
  const { name, age } = req.body;

  const newUser = new usersModel({
    name,
    age,
  });

  newUser
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "Something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.fetch = (req, res) => {
  usersModel
    .find()
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  usersModel
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "something went wrong" });
      }

      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Server not available" });
    });
};
