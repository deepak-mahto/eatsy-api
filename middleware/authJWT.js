const jwt = require("jsonwebtoken");
const userModel = require("../model/users-auth.model");

const verifyToken = (req, res, next) => {
  if (
    req.header &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretkey",
      function (err, verifiedToken) {
        if (err) {
          res.status(401).send({ message: "Invalid JWT Token" });
        }

        userModel
          .findById(verifiedToken.id)
          .then((user) => {
            req.user = user;
            next();
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      }
    );
  } else {
    res.status(403).send({ message: "Token is not present" });
  }
};

module.exports = verifyToken;
