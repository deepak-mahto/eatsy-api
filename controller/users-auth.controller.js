const userModel = require("../model/users-auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { fullName, email, password } = req.body;

  const user = new userModel({
    fullName,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  userModel.findOne({ email }).then((data) => {
    if (data) {
      return res.status(400).send("User Already registered.");
    } else {
      user
        .save()
        .then((data) => {
          res.send({ message: "User registered successfully!" });
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occured while registering.",
          });
        });
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  userModel
    .findOne({ email })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Email not registered" });
      }

      let isValidPassword = bcrypt.compareSync(password, data.password);

      if (!isValidPassword) {
        res.status(401).send({ message: "Invalid Password" });
      }

      let token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY);

      res.send({
        user: {
          id: data._id,
          email: data.email,
        },
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
